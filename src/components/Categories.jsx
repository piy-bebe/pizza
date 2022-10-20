import React from 'react'

const Categories = () => {
  const [activeCategory, setActiveCategory] = React.useState(0)
  const categories = ['Все', 'Мясные', 'Вегетариансике', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div class="categories">
      <ul>
        {categories.map((category, index) => (
          <li onClick={() => setActiveCategory(index)} className={activeCategory === index && 'active'}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
