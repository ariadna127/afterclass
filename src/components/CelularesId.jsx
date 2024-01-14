import React from 'react'
import { useParams } from 'react-router-dom'

const CelularesId = () => {

    const { id, name } = useParams();
    return (
        <div>
            <h3>Este producto es el id: {id}</h3>
            <p>La marca es: {name}</p>
        </div>
    )
}

export default CelularesId