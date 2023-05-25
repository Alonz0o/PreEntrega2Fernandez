const productos = [
    { nombre: "Carrito Manzanero", precio: 1500, id: "1", img: '../carrito1.png', idCat: "2" },
    { nombre: "Carrito De Carga", precio: 5200, id: "2", img: '../carrito2.png', idCat: "2" },
    { nombre: "Carrito de Anciana", precio: 6300, id: "3", img: '../carrito3.png', idCat: "3" },
    { nombre: "Carrito Gomera", precio: 3660, id: "4", img: '../carrito4.png', idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}