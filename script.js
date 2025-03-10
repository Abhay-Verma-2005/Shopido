// Product data organized by categories
const products = {
    electronics: [
        {
            id: 'elec1',
            name: 'Wireless Headphones',
            price: 99.99,
            originalPrice: 129.99,
            discount: 23,
            image: 'temp/img.jpg',
            rating: 4.5,
            reviews: 128
        },
        {
            id: 'elec2',
            name: 'Smart 4K TV - 55"',
            price: 499.99,
            originalPrice: 599.99,
            discount: 17,
            image: 'temp/img.jpg',
            rating: 4.7,
            reviews: 305
        },
        {
            id: 'elec3',
            name: 'Gaming Laptop',
            price: 1299.99,
            originalPrice: 1499.99,
            discount: 13,
            image: 'temp/img.jpg',
            rating: 4.8,
            reviews: 211
        },
        {
            id: 'elec4',
            name: 'Wireless Charging Pad',
            price: 29.99,
            originalPrice: 39.99,
            discount: 25,
            image: 'temp/img.jpg',
            rating: 4.3,
            reviews: 178
        }
    ],
    fashion: [
        {
            id: 'fash1',
            name: 'Premium Denim Jacket',
            price: 79.99,
            originalPrice: 99.99,
            discount: 20,
            image: 'temp/img1.jpg',
            rating: 4.6,
            reviews: 143
        },
        {
            id: 'fash2',
            name: 'Running Shoes',
            price: 89.99,
            originalPrice: 119.99,
            discount: 25,
            image: 'temp/img1.jpg',
            rating: 4.8,
            reviews: 276
        },
        {
            id: 'fash3',
            name: 'Summer Dress',
            price: 45.99,
            originalPrice: 59.99,
            discount: 23,
            image: 'temp/img1.jpg',
            rating: 4.4,
            reviews: 198
        },
        {
            id: 'fash4',
            name: 'Leather Wallet',
            price: 34.99,
            originalPrice: 49.99,
            discount: 30,
            image: 'temp/img1.jpg',
            rating: 4.7,
            reviews: 165
        }
    ],
    home: [
        {
            id: 'home1',
            name: 'Coffee Maker',
            price: 69.99,
            originalPrice: 89.99,
            discount: 22,
            image: 'temp/img2.jpg',
            rating: 4.7,
            reviews: 234
        },
        {
            id: 'home2',
            name: 'Robot Vacuum Cleaner',
            price: 199.99,
            originalPrice: 249.99,
            discount: 20,
            image: 'temp/img2.jpg',
            rating: 4.6,
            reviews: 189
        },
        {
            id: 'home3',
            name: 'Bedding Set - Queen',
            price: 79.99,
            originalPrice: 99.99,
            discount: 20,
            image: 'temp/img2.jpg',
            rating: 4.5,
            reviews: 156
        },
        {
            id: 'home4',
            name: 'Non-stick Cookware Set',
            price: 129.99,
            originalPrice: 169.99,
            discount: 24,
            image: 'temp/img2.jpg',
            rating: 4.8,
            reviews: 212
        }
    ],
    books: [
        {
            id: 'book1',
            name: 'The Modern Cookbook',
            price: 24.99,
            originalPrice: 34.99,
            discount: 29,
            image: 'temp/img3.jpg',
            rating: 4.6,
            reviews: 178
        },
        {
            id: 'book2',
            name: 'Bestselling Fiction Novel',
            price: 19.99,
            originalPrice: 29.99,
            discount: 33,
            image: 'temp/img3.jpg',
            rating: 4.9,
            reviews: 325
        },
        {
            id: 'book3',
            name: 'Business Strategy Guide',
            price: 34.99,
            originalPrice: 44.99,
            discount: 22,
            image: 'temp/img3.jpg',
            rating: 4.7,
            reviews: 215
        },
        {
            id: 'book4',
            name: 'Self-Help Bestseller',
            price: 18.99,
            originalPrice: 24.99,
            discount: 24,
            image: 'temp/img3.jpg',
            rating: 4.5,
            reviews: 263
        }
    ],
    food: [
        {
            id: 'food1',
            name: 'Organic Coffee Beans',
            price: 14.99,
            originalPrice: 19.99,
            discount: 25,
            image: 'temp/img4.jpg',
            rating: 4.8,
            reviews: 198
        },
        {
            id: 'food2',
            name: 'Assorted Snack Box',
            price: 29.99,
            originalPrice: 39.99,
            discount: 25,
            image: 'temp/img4.jpg',
            rating: 4.5,
            reviews: 156
        },
        {
            id: 'food3',
            name: 'Premium Chocolate Collection',
            price: 24.99,
            originalPrice: 34.99,
            discount: 29,
            image: 'temp/img4.jpg',
            rating: 4.9,
            reviews: 234
        },
        {
            id: 'food4',
            name: 'Organic Fruit Basket',
            price: 39.99,
            originalPrice: 49.99,
            discount: 20,
            image: 'temp/img4.jpg',
            rating: 4.6,
            reviews: 178
        }
    ]
};

// Cart 
let cart = [];
let currentCategory = 'electronics'; // Default category to display

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    displayProductsByCategory(currentCategory);
    setupEventListeners();
    
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            currentCategory = category;
            displayProductsByCategory(category);
        });
    });

    displayProductsByCategory('electronics');
});

function setupEventListeners() {
    const categoryItems = document.querySelectorAll('.categories-dropdown li');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            currentCategory = category;
            displayProductsByCategory(category);
        });
    });

    const categoryMenu = document.getElementById('categoryMenu');
    if (categoryMenu) {
        categoryMenu.addEventListener('click', function(e) {
            this.classList.toggle('active');
            e.stopPropagation();
        });
    }

    const searchInput = document.getElementById('searchInput');
    const searchCategory = document.getElementById('searchCategory');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.toLowerCase();
                const category = searchCategory.value;
                
                if (category === 'all') {
                    searchAllProducts(searchTerm);
                } else {
                    searchProductsInCategory(category, searchTerm);
                }
            }
        });
    }

    const cartIcon = document.getElementById('cartIcon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function() {
            openCart();
        });
    }

    const closeCartBtn = document.getElementById('closeCart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', function() {
            closeCart();
        });
    }

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length > 0) {
                alert('Proceeding to checkout with ' + cart.length + ' items. Total: $' + calculateTotal().toFixed(2));
                // In a real app, this would redirect to a checkout page
            } else {
                alert('You Ordered Successfully!');
            }
        });
    }

    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Add event listeners for existing "Add to Cart" buttons (Today's Deals section)
    const existingAddToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    existingAddToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));
            
            addToCart({
                id: productId,
                name: productName,
                price: productPrice,
                image: 'img.jpg',
                quantity: 1
            });
        });
    });
}

function displayProductsByCategory(category) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    // Clear current products
    productGrid.innerHTML = '';
    
    // Update section title to match the category
    const sectionTitle = document.querySelector('#featuredProducts .section-title');
    if (sectionTitle) {
        sectionTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1) + ' Products';
    }
    
    // Get products for the selected category
    const categoryProducts = products[category] || [];
    
    // Create product cards
    categoryProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Calculate discount percentage
        const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        // Generate star rating HTML
        const ratingStars = generateRatingStars(product.rating);
        
        productCard.innerHTML = `
            <div class="discount-tag">-${product.discount}%</div>
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                </div>
                <div class="rating">
                    ${ratingStars}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                    <button class="buy-now-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Buy Now</button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
        
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', function() {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        });
        
        const buyNowBtn = productCard.querySelector('.buy-now-btn');
        buyNowBtn.addEventListener('click', function() {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
            
            alert('Proceeding to checkout with ' + product.name);
        });
    });
}

function generateRatingStars(rating) {
    let starsHTML = '';
    
    for (let i = 1; i <= Math.floor(rating); i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (rating % 1 >= 0.5) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 1; i <= emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

function searchProductsInCategory(category, searchTerm) {
    if (!products[category]) return;
    
    const matchingProducts = products[category].filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    
    displaySearchResults(matchingProducts);
}

function searchAllProducts(searchTerm) {
    let allMatchingProducts = [];
    
    for (const category in products) {
        const matchingProducts = products[category].filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );
        
        allMatchingProducts = [...allMatchingProducts, ...matchingProducts];
    }
    
    displaySearchResults(allMatchingProducts);
}

function displaySearchResults(results) {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    const sectionTitle = document.querySelector('#featuredProducts .section-title');
    if (sectionTitle) {
        sectionTitle.textContent = `Search Results (${results.length})`;
    }
    
    if (results.length === 0) {
        productGrid.innerHTML = '<div class="no-results">No products found matching your search.</div>';
        return;
    }
    
    results.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        const ratingStars = generateRatingStars(product.rating);
        
        productCard.innerHTML = `
            <div class="discount-tag">-${product.discount}%</div>
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                </div>
                <div class="rating">
                    ${ratingStars}
                    <span>(${product.reviews})</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                    <button class="buy-now-btn" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}">Buy Now</button>
                </div>
            </div>
        `;
        
        productGrid.appendChild(productCard);
        
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', function() {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        });
        
        const buyNowBtn = productCard.querySelector('.buy-now-btn');
        buyNowBtn.addEventListener('click', function() {
            addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
            
            alert('Proceeding to checkout with ' + product.name);
        });
    });
}

// Cart functions
function addToCart(product) {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }
    
    updateCartUI();
    
    showNotification(`${product.name} added to cart!`);
    
    openCart();
}

function removeFromCart(productId) {
    // Remove product from cart
    cart = cart.filter(item => item.id !== productId);
    
    // Update cart UI
    updateCartUI();
}

function updateCartQuantity(productId, quantity) {
    const productIndex = cart.findIndex(item => item.id === productId);
    
    if (productIndex !== -1) {
        if (quantity <= 0) {
            // Remove product if quantity is 0 or less
            removeFromCart(productId);
        } else {
            // Update quantity
            cart[productIndex].quantity = quantity;
            updateCartUI();
        }
    }
}

function clearCart() {
    // Clear cart array
    cart = [];
    
    // Update cart UI
    updateCartUI();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItemsContainer || !cartCount || !cartItemCount || !cartTotal) return;
    
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartItemCount.textContent = `(${totalItems})`;
    
    // Update cart total
    cartTotal.textContent = `$${calculateTotal().toFixed(2)}`;
    
    // Clear cart items container
    cartItemsContainer.innerHTML = '';
    
    // Add cart items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart">You Ordered Successfully</div>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            cartItemsContainer.appendChild(cartItem);
            
            // Add event listeners to buttons
            const decreaseBtn = cartItem.querySelector('.decrease');
            decreaseBtn.addEventListener('click', function() {
                updateCartQuantity(item.id, item.quantity - 1);
            });
            
            const increaseBtn = cartItem.querySelector('.increase');
            increaseBtn.addEventListener('click', function() {
                updateCartQuantity(item.id, item.quantity + 1);
            });
            
            const removeBtn = cartItem.querySelector('.remove-item-btn');
            removeBtn.addEventListener('click', function() {
                removeFromCart(item.id);
            });
        });
        
        // Add "Clear Cart" button
        const clearCartBtn = document.createElement('button');
        clearCartBtn.className = 'clear-cart-btn';
        clearCartBtn.textContent = 'Clear Cart';
        clearCartBtn.addEventListener('click', clearCart);
        
        cartItemsContainer.appendChild(clearCartBtn);
    }
}

function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.add('open');
    }
}

function closeCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.remove('open');
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Handle click events outside the category menu to close it
document.addEventListener('click', function(e) {
    const categoryMenu = document.getElementById('categoryMenu');
    if (categoryMenu && categoryMenu.classList.contains('active')) {
        if (!categoryMenu.contains(e.target)) {
            categoryMenu.classList.remove('active');
        }
    }
});


// 
// account 
// account.js - Handles user authentication, login, signup and account management

// User data storage (in a real app, this would connect to a backend)
let users = JSON.parse(localStorage.getItem('shopease_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('shopease_currentUser')) || null;

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    updateLoginUI();
    
    // Add event listener to the account element
    const accountElement = document.querySelector('.nav-signin');
    if (accountElement) {
        accountElement.addEventListener('click', showLoginModal);
    }
});

// Update Login UI based on login status
function updateLoginUI() {
    const accountText = document.querySelector('.nav-signin .nav-first');
    const accountSubText = document.querySelector('.nav-signin .nav-sec');
    
    if (currentUser) {
        accountText.textContent = `Hello, ${currentUser.username}`;
        accountSubText.textContent = 'Account & Lists';
    } else {
        accountText.textContent = 'Hello, Sign in';
        accountSubText.textContent = 'Account & Lists';
    }
}

// Show Login/Signup Modal
function showLoginModal() {
    if (currentUser) {
        showAccountOptions();
        return;
    }
    
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'auth-modal-container';
    
    // Create modal content
    modalContainer.innerHTML = `
        <div class="auth-modal">
            <div class="modal-header">
                <h2>Sign In</h2>
                <button class="close-modal"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-tabs">
                <button class="tab-btn active" data-tab="login">Login</button>
                <button class="tab-btn" data-tab="signup">Sign Up</button>
            </div>
            <div class="tab-content active" id="login-tab">
                <form id="login-form">
                    <div class="form-group">
                        <label for="login-username">Username</label>
                        <input type="text" id="login-username" required>
                    </div>
                    <div class="form-group">
                        <label for="login-password">Password</label>
                        <input type="password" id="login-password" required>
                    </div>
                    <button type="submit" class="auth-submit-btn">Sign In</button>
                </form>
                <p class="error-message" id="login-error"></p>
            </div>
            <div class="tab-content" id="signup-tab">
                <form id="signup-form">
                    <div class="form-group">
                        <label for="signup-username">Username</label>
                        <input type="text" id="signup-username" required>
                    </div>
                    <div class="form-group">
                        <label for="signup-email">Email</label>
                        <input type="email" id="signup-email" required>
                    </div>
                    <div class="form-group">
                        <label for="signup-password">Password</label>
                        <input type="password" id="signup-password" required>
                    </div>
                    <div class="form-group">
                        <label for="signup-confirm">Confirm Password</label>
                        <input type="password" id="signup-confirm" required>
                    </div>
                    <button type="submit" class="auth-submit-btn">Create Account</button>
                </form>
                <p class="error-message" id="signup-error"></p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modalContainer);
    
    // Add event listeners
    const closeBtn = modalContainer.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modalContainer);
    });
    
    // Tab switching
    const tabBtns = modalContainer.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            modalContainer.querySelectorAll('.tab-btn').forEach(tb => tb.classList.remove('active'));
            modalContainer.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Form submissions
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
    });
    
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleSignup();
    });
}

// Handle Login Submission
function handleLogin() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');
    
    // Find user
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Login successful
        currentUser = {
            id: user.id,
            username: user.username,
            email: user.email
        };
        
        // Store current user in localStorage
        localStorage.setItem('shopease_currentUser', JSON.stringify(currentUser));
        
        // Update UI
        updateLoginUI();
        
        // Close modal
        const modalContainer = document.querySelector('.auth-modal-container');
        document.body.removeChild(modalContainer);
        
        // Show success message
        showNotification('Login successful!', 'success');
    } else {
        // Login failed
        errorElement.textContent = 'Invalid username or password';
    }
}

// Handle Signup Submission
function handleSignup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    const errorElement = document.getElementById('signup-error');
    
    // Validate inputs
    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match';
        return;
    }
    
    if (users.some(u => u.username === username)) {
        errorElement.textContent = 'Username already exists';
        return;
    }
    
    if (users.some(u => u.email === email)) {
        errorElement.textContent = 'Email already in use';
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now().toString(),
        username,
        email,
        password,
        orders: []
    };
    
    // Add to users array
    users.push(newUser);
    
    // Update localStorage
    localStorage.setItem('shopease_users', JSON.stringify(users));
    
    // Auto login
    currentUser = {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
    };
    
    localStorage.setItem('shopease_currentUser', JSON.stringify(currentUser));
    
    // Update UI
    updateLoginUI();
    
    // Close modal
    const modalContainer = document.querySelector('.auth-modal-container');
    document.body.removeChild(modalContainer);
    
    // Show success message
    showNotification('Account created successfully!', 'success');
}

// Show Account Options when logged in
function showAccountOptions() {
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'account-modal-container';
    
    // Create modal content
    modalContainer.innerHTML = `
        <div class="account-modal">
            <div class="modal-header">
                <h2>My Account</h2>
                <button class="close-modal"><i class="fas fa-times"></i></button>
            </div>
            <div class="account-options">
                <button id="view-orders-btn">View Orders</button>
                <button id="account-settings-btn">Account Settings</button>
                <button id="logout-btn">Logout</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modalContainer);
    
    // Add event listeners
    const closeBtn = modalContainer.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modalContainer);
    });
    
    const viewOrdersBtn = document.getElementById('view-orders-btn');
    const accountSettingsBtn = document.getElementById('account-settings-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    viewOrdersBtn.addEventListener('click', () => {
        document.body.removeChild(modalContainer);
        // This would typically redirect to orders page
        // Here we'll trigger the orders modal from orders.js
        showOrdersModal();
    });
    
    accountSettingsBtn.addEventListener('click', () => {
        document.body.removeChild(modalContainer);
        showAccountSettings();
    });
    
    logoutBtn.addEventListener('click', () => {
        logout();
        document.body.removeChild(modalContainer);
    });
}

// Show Account Settings
function showAccountSettings() {
    // Get current user's full data
    const userData = users.find(u => u.id === currentUser.id);
    
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'account-settings-modal-container';
    
    // Create modal content
    modalContainer.innerHTML = `
        <div class="account-settings-modal">
            <div class="modal-header">
                <h2>Account Settings</h2>
                <button class="close-modal"><i class="fas fa-times"></i></button>
            </div>
            <form id="account-settings-form">
                <div class="form-group">
                    <label for="settings-username">Username</label>
                    <input type="text" id="settings-username" value="${userData.username}" required>
                </div>
                <div class="form-group">
                    <label for="settings-email">Email</label>
                    <input type="email" id="settings-email" value="${userData.email}" required>
                </div>
                <div class="form-group">
                    <label for="settings-current-password">Current Password</label>
                    <input type="password" id="settings-current-password" placeholder="Enter to confirm changes" required>
                </div>
                <div class="form-group">
                    <label for="settings-new-password">New Password (Optional)</label>
                    <input type="password" id="settings-new-password" placeholder="Leave blank to keep current password">
                </div>
                <button type="submit" class="settings-submit-btn">Save Changes</button>
            </form>
            <p class="error-message" id="settings-error"></p>
        </div>
    `;
    
    document.body.appendChild(modalContainer);
    
    // Add event listeners
    const closeBtn = modalContainer.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modalContainer);
    });
    
    const settingsForm = document.getElementById('account-settings-form');
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        updateAccountSettings();
    });
}

// Update Account Settings
function updateAccountSettings() {
    const username = document.getElementById('settings-username').value;
    const email = document.getElementById('settings-email').value;
    const currentPassword = document.getElementById('settings-current-password').value;
    const newPassword = document.getElementById('settings-new-password').value;
    const errorElement = document.getElementById('settings-error');
    
    // Get current user data
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex === -1) {
        errorElement.textContent = 'User not found';
        return;
    }
    
    const userData = users[userIndex];
    
    // Verify current password
    if (userData.password !== currentPassword) {
        errorElement.textContent = 'Current password is incorrect';
        return;
    }
    
    // Check if username or email is already taken (by someone else)
    if (username !== userData.username && users.some(u => u.username === username)) {
        errorElement.textContent = 'Username already exists';
        return;
    }
    
    if (email !== userData.email && users.some(u => u.email === email)) {
        errorElement.textContent = 'Email already in use';
        return;
    }
    
    // Update user data
    userData.username = username;
    userData.email = email;
    
    if (newPassword) {
        userData.password = newPassword;
    }
    
    // Update users array
    users[userIndex] = userData;
    
    // Update localStorage
    localStorage.setItem('shopease_users', JSON.stringify(users));
    
    // Update current user
    currentUser = {
        id: userData.id,
        username: userData.username,
        email: userData.email
    };
    
    localStorage.setItem('shopease_currentUser', JSON.stringify(currentUser));
    
    // Update UI
    updateLoginUI();
    
    // Close modal
    const modalContainer = document.querySelector('.account-settings-modal-container');
    document.body.removeChild(modalContainer);
    
    // Show success message
    showNotification('Account settings updated!', 'success');
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('shopease_currentUser');
    updateLoginUI();
    showNotification('Logged out successfully', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 3000);
}

// Add CSS styles for modals
(function addStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
        /* Modal Styles */
        .auth-modal-container, .account-modal-container, .account-settings-modal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .auth-modal, .account-modal, .account-settings-modal {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 90%;
            max-width: 400px;
            padding: 20px;
            animation: modal-fade-in 0.3s;
        }
        
        @keyframes modal-fade-in {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
        }
        
        .modal-header h2 {
            margin: 0;
            font-size: 1.5rem;
        }
        
        .close-modal {
            background: none;
            border: none;
            font-size: 1.2rem;
            cursor: pointer;
            color: #555;
        }
        
        .modal-tabs {
            display: flex;
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        
        .tab-btn {
            background: none;
            border: none;
            padding: 10px 15px;
            margin-right: 10px;
            cursor: pointer;
            font-size: 1rem;
            position: relative;
        }
        
        .tab-btn.active {
            color: #FF9900;
        }
        
        .tab-btn.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #FF9900;
        }
        
        .tab-content {
            display: none;
        }
        
        .tab-content.active {
            display: block;
        }
        
        .form-group {
            margin-bottom: 15px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: 500;
        }
        
        .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        
        .auth-submit-btn, .settings-submit-btn {
            width: 100%;
            padding: 12px;
            background-color: #FF9900;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            margin-top: 10px;
        }
        
        .auth-submit-btn:hover, .settings-submit-btn:hover {
            background-color: #E88800;
        }
        
        .error-message {
            color: #d9534f;
            margin-top: 10px;
            text-align: center;
        }
        
        .account-options {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .account-options button {
            padding: 12px;
            background-color: #f0f0f0;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.2s;
        }
        
        .account-options button:hover {
            background-color: #e0e0e0;
        }
        
        #logout-btn {
            background-color: #f8d7da;
            color: #721c24;
            border-color: #f5c6cb;
        }
        
        #logout-btn:hover {
            background-color: #f1b0b7;
        }
        
        /* Notification */
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 4px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1001;
            animation: notification-slide-in 0.3s, notification-fade-out 0.3s 2.7s;
        }
        
        .notification.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .notification.error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .notification.info {
            background-color: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
        
        @keyframes notification-slide-in {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes notification-fade-out {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    
    document.head.appendChild(styleElement);
})();

// Export functions for use in other files
window.accountFunctions = {
    isLoggedIn: () => !!currentUser,
    getCurrentUser: () => currentUser,
    getUserData: () => {
        if (!currentUser) return null;
        return users.find(u => u.id === currentUser.id);
    },
    updateUserData: (updatedData) => {
        if (!currentUser) return false;
        
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex === -1) return false;
        
        users[userIndex] = {...users[userIndex], ...updatedData};
        localStorage.setItem('shopease_users', JSON.stringify(users));
        return true;
    },
    showLoginModal,
    logout
};


// 
// orders

// Order tracking functionality for ShopEase

// Store for orders
let orders = [];

// Order status constants
const ORDER_STATUS = {
    PENDING: 'Pending',
    SHIPPED: 'Shipped',
    DELIVERED: 'Delivered',
    CANCELLED: 'Cancelled'
};

// Get DOM elements
const navOrdersElement = document.querySelector('.nav-orders');
const cartItems = document.getElementById('cartItems');
const checkoutBtn = document.getElementById('checkoutBtn');

// Create the orders dropdown menu structure
function createOrdersDropdown() {
    // Create orders dropdown container
    const ordersDropdown = document.createElement('div');
    ordersDropdown.className = 'orders-dropdown';
    ordersDropdown.id = 'ordersDropdown';
    
    // Header
    const ordersHeader = document.createElement('div');
    ordersHeader.className = 'orders-header';
    ordersHeader.innerHTML = '<h3>Your Orders</h3>';
    
    // Orders list container
    const ordersList = document.createElement('div');
    ordersList.className = 'orders-list';
    ordersList.id = 'ordersList';
    
    // Empty state
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="empty-orders">You haven\'t placed any orders yet.</p>';
    } else {
        // Populate with orders
        orders.forEach(order => {
            const orderItem = createOrderItem(order);
            ordersList.appendChild(orderItem);
        });
    }
    
    // Footer with view all link
    const ordersFooter = document.createElement('div');
    ordersFooter.className = 'orders-footer';
    ordersFooter.innerHTML = '<a href="#">View All Orders</a>';
    
    // Append all elements
    ordersDropdown.appendChild(ordersHeader);
    ordersDropdown.appendChild(ordersList);
    ordersDropdown.appendChild(ordersFooter);
    
    return ordersDropdown;
}

// Create single order item element
function createOrderItem(order) {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    orderItem.dataset.orderId = order.id;
    
    // Status tag class based on status
    let statusClass = 'status-';
    switch(order.status) {
        case ORDER_STATUS.SHIPPED:
            statusClass += 'shipped';
            break;
        case ORDER_STATUS.DELIVERED:
            statusClass += 'delivered';
            break;
        case ORDER_STATUS.CANCELLED:
            statusClass += 'cancelled';
            break;
        default:
            statusClass += 'pending';
    }
    
    // Build order HTML
    orderItem.innerHTML = `
        <div class="order-info">
            <div class="order-header">
                <span class="order-id">Order #${order.id}</span>
                <span class="order-date">${order.date}</span>
            </div>
            <div class="order-items-info">
                <span>${order.items.length} item${order.items.length > 1 ? 's' : ''}</span>
                <span class="order-total">$${order.total.toFixed(2)}</span>
            </div>
            <div class="order-status">
                <span class="status-tag ${statusClass}">${order.status}</span>
            </div>
        </div>
        <div class="order-actions">
            <button class="view-order-btn" data-order-id="${order.id}">View Details</button>
            ${order.status === ORDER_STATUS.PENDING ? 
                `<button class="cancel-order-btn" data-order-id="${order.id}">Cancel Order</button>` : ''}
        </div>
    `;
    
    return orderItem;
}

// Toggle orders dropdown visibility
function toggleOrdersDropdown() {
    const existingDropdown = document.getElementById('ordersDropdown');
    
    if (existingDropdown) {
        existingDropdown.remove();
    } else {
        const ordersDropdown = createOrdersDropdown();
        navOrdersElement.appendChild(ordersDropdown);
        
        // Add event listeners to new buttons
        addOrderActionListeners();
    }
}

// Add event listeners to order action buttons
function addOrderActionListeners() {
    // View details buttons
    document.querySelectorAll('.view-order-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const orderId = this.getAttribute('data-order-id');
            viewOrderDetails(orderId);
        });
    });
    
    // Cancel order buttons
    document.querySelectorAll('.cancel-order-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const orderId = this.getAttribute('data-order-id');
            cancelOrder(orderId);
        });
    });
}

// Generate a unique order ID
function generateOrderId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Get current date formatted as string
function getCurrentDate() {
    const date = new Date();
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

// Process checkout from cart to create a new order
function processCheckout(cartItems, cartTotal) {
    // Create new order object
    const newOrder = {
        id: generateOrderId(),
        date: getCurrentDate(),
        items: [...cartItems],
        total: cartTotal,
        status: ORDER_STATUS.PENDING
    };
    
    // Add to orders array
    orders.unshift(newOrder); // Add to beginning of array
    
    // Update navbar count
    updateOrderCount();
    
    return newOrder;
}

// Update the orders count in navbar
function updateOrderCount() {
    // Find or create the count element
    let orderCount = navOrdersElement.querySelector('.order-count');
    
    if (!orderCount) {
        orderCount = document.createElement('span');
        orderCount.className = 'order-count';
        navOrdersElement.querySelector('.fa-box').appendChild(orderCount);
    }
    
    // Update count or hide if zero
    if (orders.length > 0) {
        orderCount.textContent = orders.length;
        orderCount.style.display = 'flex';
    } else {
        orderCount.style.display = 'none';
    }
}

// View order details
function viewOrderDetails(orderId) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    // In a real app, this would open a modal or navigate to an order details page
    // For this demo, we'll use an alert to display the details
    let itemsList = order.items.map(item => `- ${item.name} ($${item.price})`).join('\n');
    
    alert(`
Order #${order.id} Details
------------------------
Date: ${order.date}
Status: ${order.status}
Items:
${itemsList}

Total: $${order.total.toFixed(2)}
    `);
}

// Cancel an order
function cancelOrder(orderId) {
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;
    
    // Confirm cancellation
    if (confirm("Are you sure you want to cancel this order?")) {
        // Update order status
        orders[orderIndex].status = ORDER_STATUS.CANCELLED;
        
        // Refresh dropdown if open
        const dropdown = document.getElementById('ordersDropdown');
        if (dropdown) {
            // Remove and recreate dropdown
            dropdown.remove();
            const newDropdown = createOrdersDropdown();
            navOrdersElement.appendChild(newDropdown);
            addOrderActionListeners();
        }
        
        alert("Order #" + orderId + " has been cancelled.");
    }
}

// Event listener for the Orders section in navbar
navOrdersElement.addEventListener('click', function(e) {
    toggleOrdersDropdown();
    e.stopPropagation();
});

// Close dropdown when clicking elsewhere
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('ordersDropdown');
    if (dropdown && !navOrdersElement.contains(e.target)) {
        dropdown.remove();
    }
});

// Hook into the checkout process
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function() {
        // Only proceed if cart has items
        if (cart && cart.length > 0) {
            const cartTotal = calculateTotal();
            
            // Alert is already handled in the existing code
            // Now we add our order processing
            const newOrder = processCheckout(cart, cartTotal);
            
            // Clear the cart after successful checkout
            cart = [];
            updateCartDisplay();
            updateCartCount();
            
            // Close cart sidebar if it exists
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar && cartSidebar.classList.contains('open')) {
                cartSidebar.classList.remove('open');
            }
            
            // Show confirmation
            alert(`Order #${newOrder.id} has been placed successfully! You can track it in the Orders section.`);
        }
    });
}

// Add CSS for orders dropdown
function addOrdersStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Orders dropdown styles */
        .nav-orders {
            position: relative;
            cursor: pointer;
        }
        
        .order-count {
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: #f08804;
            color: white;
            border-radius: 50%;
            width: 18px;
            height: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            font-weight: bold;
        }
        
        .orders-dropdown {
            position: absolute;
            top: 100%;
            right: -100px;
            width: 320px;
            background: white;
            border-radius: 4px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            overflow: hidden;
        }
        
        .orders-header {
            padding: 12px 15px;
            border-bottom: 1px solid #e1e1e1;
        }
        
        .orders-header h3 {
            margin: 0;
            font-size: 16px;
        }
        
        .orders-list {
            max-height: 400px;
            overflow-y: auto;
        }
        
        .empty-orders {
            padding: 20px;
            text-align: center;
            color: #555;
        }
        
        .order-item {
            padding: 15px;
            border-bottom: 1px solid #e1e1e1;
        }
        
        .order-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        
        .order-id {
            font-weight: bold;
        }
        
        .order-date {
            color: #555;
        }
        
        .order-items-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        
        .order-total {
            font-weight: bold;
        }
        
        .order-status {
            margin-bottom: 10px;
        }
        
        .status-tag {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
        }
        
        .status-pending {
            background-color: #febd69;
            color: #333;
        }
        
        .status-shipped {
            background-color: #67c2ef;
            color: white;
        }
        
        .status-delivered {
            background-color: #55c65e;
            color: white;
        }
        
        .status-cancelled {
            background-color: #f85442;
            color: white;
        }
        
        .order-actions {
            display: flex;
            gap: 10px;
        }
        
        .view-order-btn, .cancel-order-btn {
            padding: 6px 12px;
            border-radius: 3px;
            border: none;
            cursor: pointer;
            font-size: 12px;
        }
        
        .view-order-btn {
            background-color: #f0f0f0;
            color: #333;
        }
        
        .cancel-order-btn {
            background-color: #f85442;
            color: white;
        }
        
        .orders-footer {
            padding: 12px 15px;
            text-align: center;
            border-top: 1px solid #e1e1e1;
        }
        
        .orders-footer a {
            color: #0066c0;
            text-decoration: none;
        }
        
        .orders-footer a:hover {
            text-decoration: underline;
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize orders functionality
function initOrders() {
    addOrdersStyles();
    updateOrderCount();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initOrders);