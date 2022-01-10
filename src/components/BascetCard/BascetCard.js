import { useDispatch } from 'react-redux'
import { deleteItemFromBuscet } from '../../redux/bascet/reducer'
import './BascetCard.css'

function BascetCard({food}) {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(deleteItemFromBuscet(food.id))
    }

    return (
        <article className='bascetcard'>
            <img className='bascetcard__image' src={food.image} alt={food.title}/>
            <h2 className='bascetcard__title'>{food.title}</h2>
            <p className='bascetcard__price'>{food.price} ₽</p>
            <button 
                className='bascetcard__button'
                onClick={handleClick}
            ></button>
        </article>
    )
}

export default BascetCard