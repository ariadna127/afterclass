
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import arrayProductos from '../json/arrayProductos.json'
import ItemDetail from "../ItemDetail/ItemDetail";
import {getFirestore, doc, getDoc} from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        const queryDB= getFirestore();
        const queryDoc = doc(queryDB, 'products', id);
        getDoc(queryDoc).then((res)=>
        setItem({id: res.id, ...res.data()})
        )
        
    }, [id])




    return (
        <div className="container">
            <div className="row">
                <ItemDetail item={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer