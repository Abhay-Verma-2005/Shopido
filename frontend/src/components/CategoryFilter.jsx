import { useState, useEffect } from 'react';
import { getCategories } from '../api/productApi';

const CategoryFilter = ({ onFilter }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch categories when component mounts
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilter(category);
  };

  return (
    <div className="category-filter">
      <label htmlFor="category">Filter by Category: </label>
      <select 
        id="category"
        value={selectedCategory} 
        onChange={handleCategoryChange}
        className="category-select"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
