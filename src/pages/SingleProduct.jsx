import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SingleProduct = () => {
    // MI DICHIARO LA VARIABILE ID DESTRUTTURANDO CIO' CHE MI RESTITUISCE IL METODO USEPARAMS (IL QUALE E' UN OGGETTO)
    // CONTENENTE I PARAMETRI PASSATI TRAMITE URL
    const { id } = useParams();
    // DICHIARO LA VARIABILE DI STATO CHE CONTERRA' IL PRODOTTO
    const [product, setProduct] = useState({});

    // DEFINIZIONE DELLA FUNZIONE CHE MI RECUPERA LE INFORMAZIONI DEL PRODOTTO TRAMITE PARAMETRO 
    const getProductDetail = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
            setProduct(resp.data);
        });
    };

    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1><strong>Dettaglio Prodotto</strong></h1>
                </div>
                <div className='col-12'>
                    <img src={product.image} alt="" className='fix-dim-img' />
                    <h2><strong>{product.title}</strong></h2>
                    <ul>
                        <li><p>{product.price}€</p></li>
                        <li><p>{product.category}</p></li>
                        <li><p>{product.description}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;