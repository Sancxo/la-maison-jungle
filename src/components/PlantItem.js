import "../styles/PlantItem.css"
import CareScale from "./CareScale";

const PlantItem = ({name, cover, light, water}) => {
    const handleClick = (plantName) => {
        alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
    }

    return (
        <div className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img src={cover} alt={`${name}`} className="lmj-plant-item-cover"/>
            <p>{name}</p>
            <CareScale careType="water" scaleValue={water} />
            <CareScale careType="light" scaleValue={light} />
        </div>
    )
}

export default PlantItem;