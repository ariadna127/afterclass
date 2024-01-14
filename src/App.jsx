
import './App.css'
import Contador from './components/Contador'
import ContadorRef from './components/ContadorRef'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/Error'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/CartWidget/CartWidget'
import Contacto from './components/Contacto/Contacto'
import CartProvider from './components/Context/CartContext'
import Cart from './components/Cart/Cart'
import LoaderComponent from './components/LoaderComponent'

function App() {


  return (
    <>
    <BrowserRouter>
    <LoaderComponent/>
    <CartProvider>
    <NavBar/>
    <Routes>
      
      <Route path={'/'} element={<ItemListContainer/>}/>
      <Route path={'/category/:id'} element={<ItemListContainer/>}/>
      <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
      <Route path={'/contacto'} element={<Contacto/>}/>
      <Route path={'/cart'} element={<Cart/>}/>
      <Route path={'*'} element={<Error/>}/>
    </Routes>

    </CartProvider>
    </BrowserRouter>    
    
    </>
  )
}

export default App

/* <ProductCard title="Producto 1" price={2999} img="">
      <p>Aprovecha este producto por oferta limitada</p>
      <button>Compra ya!</button>
    </ProductCard>
    <ProductCard title="Producto 2" price={5699} img="">
      <p>Guarda tu producto</p>
      <button>Agregar a favoritos</button>
    </ProductCard>
    <ProductCard title="Producto 3" price={2699} img="">
      <p>Recibi notificaciones de tu producto</p>
      <button>Suscribirse!</button>
    </ProductCard> */
