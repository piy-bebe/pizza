import React from 'react'

// COMPONENTS
import Pizza from './Pizza/Pizza'

// DATA
const pizzas = [
  {
    name: 'Чизбургер-пицца',
    categories: ['тонкое', 'традиционное'],
    sizes: [26, 30, 40],
    price: 395,
  },
  {
    name: 'Паперони',
    categories: ['тонкое', 'традиционное'],
    sizes: [26, 30, 40],
    price: 495,
  },
  {
    name: 'Ананас курица',
    categories: ['тонкое', 'традиционное'],
    sizes: [26, 30, 40],
    price: 415,
  },
]

const Pizzas = () => {
  return (
    <div class="content__items">
      {pizzas.map((pizza) => (
        <Pizza {...pizza} />
      ))}
    </div>
  )
}

export default Pizzas
