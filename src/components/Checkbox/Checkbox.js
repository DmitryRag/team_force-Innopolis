import React from 'react'
import './Checkbox.css'

function Checkbox({ checked, onChange, label }) {

    return (
        <div className='checkbox'>
            <div className='checkbox__border' onClick={onChange}>
                <div className={`checkbox__indicator ${checked ? 'checked' : ''}`}/>
            </div>
            <div className='checkbox__label'>
                {label}
            </div>
        </div>
        
    )
}

export default Checkbox