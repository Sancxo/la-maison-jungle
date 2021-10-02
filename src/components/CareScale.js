import sun from "../assets/sun.svg";
import water from "../assets/water.svg";
const CareScale = ({scaleValue, careType}) => {
    const range = [1, 2, 3];
    const scaleType = careType === "light" ? <img src={sun} alt='' /> : <img src={water} alt='' />;

    const handleClick = () => {
        let quantity = scaleValue === 1 ? 'peu' : scaleValue === 2 ? "modérément" : scaleValue === 3 ? "beaucoup" : null;
        let type = careType === 'water' ? "d'arrosage" : "de lumière"
        alert('Cette plante requière ' + quantity + " " + type + '.')
    }
    return(
        <div onClick={handleClick}>
            {range.map(element => (
                scaleValue >= element ? <span key={element.toString()}>{scaleType}</span> : null
            ))}
        </div>
    )
}

export default CareScale;