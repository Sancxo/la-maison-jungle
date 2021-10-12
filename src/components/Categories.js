import { plantList } from "../datas/plantList";
import '../styles/Categories.css'

const Categories = ({setCatFilter}) => {
    const categories = plantList.reduce((acc, plant) =>
    !acc.includes(plant.category) ? acc.concat(plant.category) : acc,
    []
);
    return(
        <div className='lmj-categories'>
            <select className='lmj-categories-select' onChange={(e) => setCatFilter(e.target.value)}>
                <option value="">Toutes categories</option>
                {categories.map((cat, index) => {
                        return <option key={`${cat.category} - ${index}`} value={cat}>{cat}</option>
                    })}
            </select>
        </div>
    )
}

export default Categories;