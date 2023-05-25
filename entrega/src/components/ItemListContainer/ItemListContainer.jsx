import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();
    useEffect(() => {

        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.error(error))}, [idCategoria])

    return (
        <>
            <ItemList productos={productos} />
            <h2 className='mt-3'>{saludo}</h2>
        </>

    )
}

export default ItemListContainer