import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TrolleycontextProvider from './contentComponents/Trolleycontext.jsx'
import JCNavBar from './ItemsComponents/JCNavBar.jsx'
import CartsDetailConteiner from './contentComponents/CartsDetailConteiner.jsx'
import '../src/css/App.css'
import Trolley from './ItemsComponents/Trolley.jsx'
import CartListConteiner from './contentComponents/CartListConteiner.jsx'
import  ButtonAppBar  from './ItemsComponents/JCNavBar.jsx'

const App =() => {
  return (
    <>
    <TrolleycontextProvider>
    <BrowserRouter>
    <ButtonAppBar />
    <Routes>
      <Route exact path='/' element={<CartListConteiner />} />
      <Route exact path='/categoria/:idCategory' element={<CartListConteiner />} />
      <Route exact path='/producto/:idProduct' element={<CartsDetailConteiner />} />
      <Route path='/trolley' element={<Trolley />} />
    </Routes>
    </BrowserRouter>
    </TrolleycontextProvider>
    </>
  );
}

export default App
