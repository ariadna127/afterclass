import React, { useState } from 'react';
import ItemCount from '../itemCount/itemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';




const ItemDetail = ({ item }) => {

    //CODIGO DE CARPI!!!

    //El estado y las dos funciones corresponden a la clase 8 de CARPI. 
    // const [cantidad, setCantidad] = useState(1)

    // const handleRestar = () =>{
    //     cantidad > 1 && setCantidad(cantidad - 1)
    // }

    // const handleSumar = () =>{

    //     cantidad < item.stock && setCantidad(cantidad + 1)
    // }

    // const handleAgregar = () =>{
    //     console.log({...item, cantidad})
    // }

    //Esto va en el return (CODIGO CARPI)
    //<ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={handleAgregar} />

    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);
    }



    return (
        <div className='row'>
            <div className='col-md-4 iifset-md-4'>
                <img src={item.img} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>$ {item.price}</p>
                <p> Cantidad: {item.stock}</p>
            </div>
            <div>
                {goToCart ? <Link to='/Cart'>Terminar Compra</Link> : <ItemCount stock={10} initial={0} onAdd={onAdd} /> }
            </div>


        </div>
    )
}

export default ItemDetail