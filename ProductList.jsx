import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantCategories = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 20, image: "https://picsum.photos/200?1" },
      { id: 2, name: "Peace Lily", price: 25, image: "https://picsum.photos/200?2" },
      { id: 3, name: "Spider Plant", price: 18, image: "https://picsum.photos/200?3" },
      { id: 4, name: "ZZ Plant", price: 30, image: "https://picsum.photos/200?4" },
      { id: 5, name: "Pothos", price: 15, image: "https://picsum.photos/200?5" },
      { id: 6, name: "Areca Palm", price: 35, image: "https://picsum.photos/200?6" }
    ]
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 7, name: "Rose", price: 22, image: "https://picsum.photos/200?7" },
      { id: 8, name: "Hibiscus", price: 20, image: "https://picsum.photos/200?8" },
      { id: 9, name: "Jasmine", price: 18, image: "https://picsum.photos/200?9" },
      { id: 10, name: "Bougainvillea", price: 28, image: "https://picsum.photos/200?10" },
      { id: 11, name: "Marigold", price: 12, image: "https://picsum.photos/200?11" },
      { id: 12, name: "Sunflower", price: 16, image: "https://picsum.photos/200?12" }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 13, name: "Aloe Vera", price: 15, image: "https://picsum.photos/200?13" },
      { id: 14, name: "Echeveria", price: 14, image: "https://picsum.photos/200?14" },
      { id: 15, name: "Jade Plant", price: 20, image: "https://picsum.photos/200?15" },
      { id: 16, name: "Haworthia", price: 18, image: "https://picsum.photos/200?16" },
      { id: 17, name: "Sedum", price: 13, image: "https://picsum.photos/200?17" },
      { id: 18, name: "String of Pearls", price: 24, image: "https://picsum.photos/200?18" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <nav>
        <h2>Paradise Nursery</h2>
        <a href="/">Home</a> | <a href="/products">Plants</a> | <a href="/cart">Cart</a>
      </nav>

      {plantCategories.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>

          <div>
            {category.plants.map((plant) => (
              <div key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  width="150"
                />

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
