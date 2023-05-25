import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cardProducto card'>
            <img className='imgProducto card-img-top' src={img} alt={nombre} />
            <div className='card-body'>
                <h5 class="card-title">Nombre: {nombre}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p>Precio: {precio} </p>
                <p>ID: {id} </p>
                <Link to={`/item/${id}`} className='btn btn-primary'> Ver Detalles </Link>

            </div>
        </div>
    )
}

export default Item