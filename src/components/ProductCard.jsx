const ProductCard = ({img, title, price, children}) =>{
    //Fuera o antes del return va la logica
    return(
        //Todo lo que es interfaz de usuario va en el return
        <div>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{price}</p>
            <div>{children}</div>
        </div>
    )
    }

    export default ProductCard;