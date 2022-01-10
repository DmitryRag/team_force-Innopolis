import { useDispatch } from 'react-redux'
import { setItemInBuscet } from '../../redux/bascet/reducer'
import './Card.css'

function Card({food}) {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(setItemInBuscet(food))
    }
   
    return (
        <article className='card'>
            <img className='card__image' src={food.image} alt={food.title}/>
            <h2 className='card__name'>{food.title}</h2>
            <p className='card__description'>{food.description}</p>
            <div className='card__buy-wrapper'>
                <p className='card__price'>{food.price} ₽</p>
                <p className='card__value'>/{food.pice}</p>
                <button 
                    className='card__button'
                    onClick={handleClick}
                ></button>
            </div>
        </article>
    )
}

export default Card