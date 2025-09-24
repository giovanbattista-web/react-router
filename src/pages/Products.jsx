import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    //DEFINIZIONE DELLA FUNZIONE CHE MI RECUPERA I PRODOTTI ATTRAVERSO CHIAMATA AJAX
    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products").then((resp) => {
            setProducts(resp.data);
        });
    };

    // USO LO USEEFFECT PER ESEGUIRE LA FUNZIONE DI RECUPERO DEI PRODOTTI QUANDO VIENE MONTATO IL COMPONENTE 
    useEffect(() => {
        getProducts()
    }, []); // L'ARRAY DELLE DIPENDENZE DEVE ESSERE VUOTO COSI' VIENE ESEGUITO SOLO AL MONTAGGIO DEL COMPONENTE 

    return (
        <div>
            <Navbar />
            <h1>Elenco prodotti</h1>
            <div className='container'>
                <div className='row g-4'>
                    {products.map((product) => (
                        <div key={product.id} className='col-12 col-md-6 col-lg-4'>
                            <div className='card'>
                                <NavLink to={`/products/${product.id}`}>
                                    <div className='card-image-top'>
                                        <img src={product.image} alt={product.title} className='img-fluid' />
                                    </div>
                                    <div className='card-body text-dark list-unstyled'>
                                        <h3>{product.title}</h3>
                                        <p>{product.category}</p>
                                        <p>{product.price}€</p>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products;
