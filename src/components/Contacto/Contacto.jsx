import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const Contacto = () => {

    //Formulario NIVEL 1

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit1 = (e) =>{
        e.preventDefault();
        console.log("Enviado", {nombre, email});
    }

    const handleNombre = (e) =>{
        setNombre(e.target.value);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    //Formulario NIVEL 2

    const [valores, setValores] = useState({
        nombre: "",
        email: "",
        telefono: ""
    })

    const handleSubmit2 = (e) =>{
        e.preventDefault();
        console.log("Enviado", valores);
    }
    

    const handleValores = (e) =>{
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }


    //Formulario NIVEL 3 - Utilizando libreria react-hook-form

    //La funcion si o si debe llamarse HANDLESUBMIT
    const {register, handleSubmit} = useForm();

    const enviar = (data) =>{
        console.log("enviado", data);
    }

    return (
        <div className='container'>
            <h1 className='main-title mt-5'>Formulario nivel 1</h1>
            <form onSubmit={handleSubmit1}>
                <input 
                type="text" 
                placeholder='Ingresá tu nombre'
                value={nombre} 
                onChange={handleNombre}
                />
                <input 
                type="email" 
                placeholder='Ingresá tu e-mail' 
                value={email}
                onChange={handleEmail}
                />
                <button type="submit">Enviar</button>
            </form>

            <h1 className='main-title mt-5'>Formulario Nivel 2</h1>
            <form onSubmit={handleSubmit2}>
                <input 
                type="text" 
                placeholder='Ingresá tu nombre'
                value={valores.nombre} 
                onChange={handleValores}
                name="nombre"
                />
                <input 
                type="email" 
                placeholder='Ingresá tu e-mail' 
                value={valores.email}
                onChange={handleValores}
                name="email"
                />
                <input 
                type="phone" 
                placeholder='Ingresá tu telefono' 
                value={valores.telefono}
                onChange={handleValores}
                name="telefono"
                />
                <button type="submit">Enviar</button>
            </form>

            <h1 className='main-title mt-5'>Formulario nivel 3</h1>
            <form onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder='Ingresá tu nombre' {...register("nombre")} />

                <input type="email" placeholder='Ingresá tu e-mail' {...register("email")} />

                <input type="phone" placeholder='Ingresá tu telefono' {...register("telefono")} />

                <button type="submit">Enviar</button>

            </form>
        </div>
    )
}

export default Contacto