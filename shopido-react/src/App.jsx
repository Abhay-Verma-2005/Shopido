import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ProductGrid from './components/ProductGrid'
import DealsSection from './components/DealsSection'
import Footer from './components/Footer'
import CartSidebar from './components/CartSidebar'
import { CartProvider } from './context/CartContext'
import { ProductProvider } from './context/ProductContext'

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <div className="App">
          <CartSidebar />
          <Header />
          <main>
            <Hero />
            <Categories />
            <ProductGrid />
            <DealsSection />
          </main>
          <Footer />
        </div>
      </ProductProvider>
    </CartProvider>
  )
}

export default App
