import './Input.css'

function Input({ type, placeholder, error, onChange, minLength, maxLength }) {
    return (
        <label className='input'>
            <input className='input__zone' 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                minLength={minLength} 
                maxLength={maxLength}
                required 
            />
            {!!error && <span className='input__span'>{error}</span>}
        </label>
    )
}

export default Input