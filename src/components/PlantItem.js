import "../styles/PlantItem.css"
import CareScale from "./CareScale";

const PlantItem = ({name, cover, id, light, water}) => {
    const handleClick = (plantName) => {
        alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
    }

    return (
        <li className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img src={cover} alt={`${name}`} className="lmj-plant-item-cover"/>
            <p>{name}</p>
            <CareScale careType="water" scaleValue={water} />
            <CareScale careType="light" scaleValue={light} />
        </li>
    )
}

export default PlantItem;