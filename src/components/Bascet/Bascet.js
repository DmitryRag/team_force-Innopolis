import { useSelector } from 'react-redux'
import BascetCard from '../BascetCard/BascetCard'
import Footer from '../Footer/Footer'
import './Bascet.css'

function Bascet() {
    const items = useSelector(state => state.buscet.itemsInBuscet)

    return (
        <section className='bascet'>
            <div className='bascet__wrapper'>
                <h1 className='bascet__title'>КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ</h1>
                {items.map(food => 
                    <BascetCard
                        food={food} 
                        key={food.id}
                    />
                )}
            </div>
            <Footer/>
        </section>
    )
}

export default Bascet