import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem card'>
        <div className='card-body'>
        <img className='card-img-top' src= {img} alt={nombre} />
        <h5 className='card-title'>Nombre: {nombre}</h5>
        <h3 className='card-title'>Precio: {precio} </h3>
        <h3 className='card-title'>ID: {id} </h3>
        <p className='card-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
        </div>
    </div>
  )
}

export default ItemDetail