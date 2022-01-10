import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CalcTotalPrice } from '../../utils'
import Bascet from '../../images/shop_box.svg'
import './Header.css'

function Header() {
    const items = useSelector(state => state.buscet.itemsInBuscet)
    const totalPrice = CalcTotalPrice(items)

    return (
        <header className='header'>
            <h1 className='header__title'>НАША ПРОДУКЦИЯ</h1>
            <div className='header__basket_wrapper'>
                <div className='header__basket-value_wrapper'>
                    <p className='header__basket_value'>{items.length} товара</p>
                    <p className='header__basket_value'>на сумму {totalPrice}р</p>
                </div>
                <NavLink to='/bascet' className='header__navlink'>
                    <img src={Bascet} alt='Корзина покупок'></img>
                </NavLink>
            </div>
        </header>
    )
}

export default Header