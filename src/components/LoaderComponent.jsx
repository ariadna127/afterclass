import React, { useState, useEffect } from 'react'

const LoaderComponent = () => {
    const [loanding, setLoanding] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoanding(false);
        }, 4000);

        return () => clearTimeout(timer);

    }, [])

    return loanding ? <div> Cargando los productos... </div> : null;
}

export default LoaderComponent