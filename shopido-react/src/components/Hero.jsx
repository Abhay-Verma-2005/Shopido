const Hero = () => {
  const handleShopNow = () => {
    // Scroll to products section
    const productSection = document.getElementById('featuredProducts')
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <h1>Welcome to Shopido</h1>
        <p>Discover amazing products at the best prices</p>
        <button className="shop-now-btn" onClick={handleShopNow}>
          Shop Now
        </button>
      </div>
    </section>
  )
}

export default Hero