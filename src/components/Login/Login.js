import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Input from '../Input/Input'
import Checkbox from '../Checkbox/Checkbox'
import './Login.css'

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [emailValidity, setEmailValidity] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordValidity, setPasswordValidity] = useState(false)
    const [checked, setChecked] = useState(false)
    const isDisabledButton = !emailValidity || !passwordValidity

    function handleChangeEmail(e) {
        setEmail(e.target.value)
        setEmailError(e.target.validationMessage)
        setEmailValidity(e.target.validity.valid)
    }
    
    function handleChangePassword(e) {
        setPassword(e.target.value)
        setPasswordError(e.target.validationMessage)
        setPasswordValidity(e.target.validity.valid)
    }

    function handleCheckboxChecked() {
        setChecked(!checked)
    }

    function handleSubmitForm(e) { 
        e.preventDefault()
        navigate("../restaurant", { replace: true })
    }

    return (
        <section className='login'>
            <form className='login__form'>
                <fieldset className='login__block'>
                    <h1 className='login__title'>ВХОД</h1>
                    <Input 
                        name='E-mail'
                        type='email' 
                        placeholder='E-mail'
                        minLength='5'
                        maxLength='30'
                        value={email}
                        onChange={handleChangeEmail}
                        error={emailError}
                    />
                    <Input 
                        name='Пароль' 
                        type='password' 
                        placeholder='Пароль'
                        minLength='5'
                        value={password}
                        onChange={handleChangePassword}
                        error={passwordError}
                    />
                    <Checkbox 
                        checked={checked}
                        onChange={handleCheckboxChecked}
                        label={'Я согласен получать обновления на почту'}
                    />
                    <button 
                        type='submit' 
                        to='/restaurant'
                        className={`login__button ${isDisabledButton ? 'login__button_disabled' : ''}`}
                        disabled={isDisabledButton}
                        onClick={handleSubmitForm}
                    >Войти</button>
                </fieldset>
            </form>
        </section>
    )
}

export default Login