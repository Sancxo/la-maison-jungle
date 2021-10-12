import "../styles/PlantItem.css"
import CareScale from "./CareScale";

const PlantItem = ({name, cover, light, water, price}) => {
    const handleClick = (plantName, price) => {
        alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨ Elle coûte ${price}€`)
    }

    return (
        <div className='lmj-plant-item'>
            <div onClick={() => handleClick(name, price)}>
                <span className='lmj-plant-item-price'>{price}€</span>
                <img src={cover} alt={`${name}`} className="lmj-plant-item-cover"/>
                <p>{name}</p>
            </div>
            <CareScale careType="water" scaleValue={water} />
            <CareScale careType="light" scaleValue={light} />
        </div>
    )
}

export default PlantItem;