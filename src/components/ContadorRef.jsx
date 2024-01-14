import { useRef } from "react";

const ContadorRef = () =>{
    const contador = useRef(0)

    const handleClick = (operacion) =>{
        if (operacion) {
            contador.current++;
        }else{
            contador.current--;
        }
        console.log(`El contador va por ${contador.current}`);
    }
    console.log(`El componente se renderizo (o sea se mostro en pantalla)`);
    return(
        <div>
            <button onClick={()=> handleClick(true)}>Agregar</button>
            <h3>{contador.current}</h3>
            <button onClick={() => handleClick(false)}>Ocultar</button>
        </div>
    )
}
export default ContadorRef;