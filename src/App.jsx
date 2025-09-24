import Homepage from './pages/Homepage';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct.jsx';

function App() {

  return (
    <>
      {/* ANDIAMO AD USARE LA COMPONENTE BrowserRouter */}
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/about' Component={About} />
          <Route path='/products' Component={Products} />
          <Route path='/products/:id' Component={SingleProduct} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
