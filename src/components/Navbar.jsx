import React, { useContext, useState } from 'react'
import rocket from '../images/rocket.svg'
import { Context } from '../context/Context'


function Navbar() {
    const {data} = useContext(Context)
    return (
        <div className='navbar'>
            <div className="container">
            <img src={rocket} alt="" className='navbar__rocket' />
            <p className='navbar__title'>
                {
                    data.length  <= 0 ? ("Lista de Presença") : ("todo")  
                }
            </p>
            </div>
        </div>
    )
}

export default Navbar