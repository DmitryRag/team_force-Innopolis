import { useSelector } from 'react-redux'
import { CalcTotalPrice } from '../../utils'
import './Footer.css'

export default function Footer() {
    const items = useSelector(state => state.buscet.itemsInBuscet)
    const totalPrice = CalcTotalPrice(items)

    return (
        <div className='footer'>
            <div className='footer__wrapper'>
                <p className='footer___price'>ЗАКАЗ НА СУММУ:
                    <span className='footer__total-price'> {totalPrice} ₽</span>
                </p>
                <button className='footer__button'>Оформить заказ</button>
            </div>
        </div>
    )
}
