import React from "react";
import '../styles/ShoppingList.css';
import { plantList } from "../datas/plantList";
import PlantItem from "./PlantItem";

const ShoppingList = ({cart, setCart}) => {
    // const categories = plantList.reduce((acc, plant) =>
    //     !acc.includes(plant.category) ? acc.concat(plant.category) : acc,
    //     []
    // );
    return(
        // <React.Fragment>
        //     <ul>
        //         {categories.map((cat, index) => {
        //             return <li key={`${cat.category} - ${index}`}>{cat}</li>
        //         })}
        //     </ul>
        //     <ul className='lmj-plant-list'>
        //         {plantList.map(plant => (
        //             <li key={plant.id} className='lmj-plant-item'>
        //                 {plant.name} 
        //                 {plant.isBestSale && <span>🔥</span>} 
        //                 {plant.isSpecialOffer && <div className="lmj-sales">Soldes</div>}
        //                 <CareScale careType='water' scaleValue={plant.water} />
        //                 <CareScale careType="light" scaleValue={plant.light} />
        //             </li>
        //         ))}
        //     </ul>
        // </React.Fragment>
        <ul className='lmj-plant-list'>
            {plantList.map(plant => (
                <li key={plant.id}>
                    <PlantItem 
                        name={plant.name}
                        cover={plant.cover}
                        light={plant.light}
                        water={plant.water}
                    />
                    <button onClick={() => setCart(++cart)}>Ajouter</button>
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList;