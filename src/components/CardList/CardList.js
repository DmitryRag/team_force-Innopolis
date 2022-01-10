import Card from '../Card/Card'
import { FOOD } from '../../constants/cards'
import './CardList.css'

function CardList() {
   
    return (
        <section className='cards'>
            {FOOD.map(food => <Card food={food} key={food.id}/>)}   
        </section>
    )
}

export default CardList