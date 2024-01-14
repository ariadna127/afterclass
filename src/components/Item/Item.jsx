import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    return (
        <Link to={'/item/' + item.id} className='text-decoration-none'>
            <div className='container'>
                <div className='card border border-0'>
                    <img className='card-img-top' src={item.img} alt={item.title}/>
                    <div className='card-body text-center'>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item