import CommonCard from '../Components/CommanCard'
import PropTypes from 'prop-types'

function Directory({categories}) {
return (
    <>
     <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 p-4"> 

        {categories.map((category) => (
            <CommonCard key={category.id}>
                <div className="category-item">
                    <h2>{category.title}</h2>
                    <img src={category.imageUrl} alt={category.title} />
                </div>
            </CommonCard>
        ))}
     </div>
    </>
)
}

Directory.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired
        })
    ).isRequired
}

export default Directory


