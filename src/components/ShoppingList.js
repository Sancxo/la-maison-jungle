import React, { useState } from "react";
import '../styles/ShoppingList.css';
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

const ShoppingList = ({cart, setCart}) => {
    const [catFilter, setCatFilter] = useState("");

    const addToCart = (name, price) => {
        const plantAdded = cart.find(plant => plant.name === name);

        if(plantAdded) {
            const filteredCart = cart.filter(plant => plant.name !== name);
            setCart([...filteredCart, {name, price, amount: ++plantAdded.amount}]);
        } else setCart([...cart, {name, price, amount: 1}]);

    }
    return(
        <div className="lmj-shopping-list">
            <Categories setCatFilter={setCatFilter} />

            <ul className='lmj-plant-list'>
            {plantList.map(plant => (
                !catFilter || plant.category === catFilter ?
                    <li key={plant.id}>
                        <PlantItem 
                            name={plant.name}
                            cover={plant.cover}
                            light={plant.light}
                            water={plant.water}
                            price={plant.price}
                        />
                        <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                    </li>
                : null
            ))}
        </ul>
        </div>
    )
}

export default ShoppingList;