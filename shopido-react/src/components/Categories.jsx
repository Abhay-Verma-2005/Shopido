import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const Categories = () => {
  const { setSelectedCategory } = useContext(ProductContext)

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      image: '/temp/ele.png'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      image: '/temp/fashion.png'
    },
    {
      id: 'home',
      name: 'Home & Kitchen',
      image: '/temp/kitchen.png'
    },
    {
      id: 'books',
      name: 'Books',
      image: '/temp/book.png'
    }
  ]

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId)
    // Scroll to products section
    const productSection = document.getElementById('featuredProducts')
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="featured-categories">
      <div className="container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="category-card" 
            data-category={category.id}
            onClick={() => handleCategoryClick(category.id)}
          >
            <div className="category-img">
              <img src={category.image} alt={category.name} />
            </div>
            <h3>{category.name}</h3>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Categories