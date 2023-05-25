import React from 'react'
import './CardWidget.css'
const CardWidget = () => {
    const imgCarrito = '../carrito.png';
    return(
        <div>
            <img className='imgCarrito d-flex' src={imgCarrito} alt="carrito"/>
            <strong>5</strong>
        </div>
    )
}
export default CardWidget