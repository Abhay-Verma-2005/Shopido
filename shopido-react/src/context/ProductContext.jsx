import { createContext, useState, useEffect } from 'react'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // API base URL - adjust this based on your backend setup
  const API_URL = 'http://localhost:5000/api'

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/products`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      
      const data = await response.json()
      setProducts(data)
      setError(null)
    } catch (err) {
      console.error('Error fetching products:', err)
      setError(err.message)
      
      // Fallback to sample data if API fails
      setProducts(getSampleProducts())
    } finally {
      setLoading(false)
    }
  }

  // Sample products for fallback
  const getSampleProducts = () => [
    {
      _id: 'elec1',
      name: 'Wireless Headphones',
      price: 99.99,
      originalPrice: 129.99,
      image: '/temp/img.jpg',
      category: 'electronics',
      rating: 4.5,
      reviews: 128,
      desc: 'High-quality wireless headphones with noise cancellation'
    },
    {
      _id: 'elec2',
      name: 'Smart 4K TV - 55"',
      price: 499.99,
      originalPrice: 599.99,
      image: '/temp/img.jpg',
      category: 'electronics',
      rating: 4.7,
      reviews: 305,
      desc: 'Ultra HD 4K Smart TV with streaming capabilities'
    },
    {
      _id: 'fash1',
      name: 'Premium Denim Jacket',
      price: 79.99,
      originalPrice: 99.99,
      image: '/temp/img1.jpg',
      category: 'fashion',
      rating: 4.6,
      reviews: 143,
      desc: 'Stylish denim jacket made from premium materials'
    },
    {
      _id: 'fash2',
      name: 'Running Shoes',
      price: 89.99,
      originalPrice: 119.99,
      image: '/temp/img1.jpg',
      category: 'fashion',
      rating: 4.8,
      reviews: 276,
      desc: 'Comfortable running shoes for daily workouts'
    },
    {
      _id: 'home1',
      name: 'Coffee Maker',
      price: 69.99,
      originalPrice: 89.99,
      image: '/temp/img2.jpg',
      category: 'home',
      rating: 4.7,
      reviews: 234,
      desc: 'Automatic coffee maker with programmable timer'
    },
    {
      _id: 'home2',
      name: 'Robot Vacuum Cleaner',
      price: 199.99,
      originalPrice: 249.99,
      image: '/temp/img2.jpg',
      category: 'home',
      rating: 4.6,
      reviews: 189,
      desc: 'Smart robot vacuum with app control'
    },
    {
      _id: 'book1',
      name: 'The Modern Cookbook',
      price: 24.99,
      originalPrice: 34.99,
      image: '/temp/img3.jpg',
      category: 'books',
      rating: 4.6,
      reviews: 178,
      desc: 'Contemporary recipes for modern cooking'
    },
    {
      _id: 'book2',
      name: 'Bestselling Fiction Novel',
      price: 19.99,
      originalPrice: 29.99,
      image: '/temp/img3.jpg',
      category: 'books',
      rating: 4.9,
      reviews: 325,
      desc: 'Award-winning fiction novel'
    }
  ]

  // Add new product (for admin functionality)
  const addProduct = async (productData) => {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })

      if (!response.ok) {
        throw new Error('Failed to add product')
      }

      const newProduct = await response.json()
      setProducts(prevProducts => [...prevProducts, newProduct])
      return newProduct
    } catch (err) {
      console.error('Error adding product:', err)
      setError(err.message)
      throw err
    }
  }

  // Update product (for admin functionality)
  const updateProduct = async (productId, productData) => {
    try {
      const response = await fetch(`${API_URL}/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })

      if (!response.ok) {
        throw new Error('Failed to update product')
      }

      const updatedProduct = await response.json()
      setProducts(prevProducts =>
        prevProducts.map(product =>
          product._id === productId ? updatedProduct : product
        )
      )
      return updatedProduct
    } catch (err) {
      console.error('Error updating product:', err)
      setError(err.message)
      throw err
    }
  }

  // Delete product (for admin functionality)
  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`${API_URL}/products/${productId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete product')
      }

      setProducts(prevProducts =>
        prevProducts.filter(product => product._id !== productId)
      )
    } catch (err) {
      console.error('Error deleting product:', err)
      setError(err.message)
      throw err
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const value = {
    products,
    selectedCategory,
    setSelectedCategory,
    loading,
    error,
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct
  }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}