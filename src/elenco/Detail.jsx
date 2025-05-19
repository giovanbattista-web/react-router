import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Detail = () => {
    // DESTRUTTURAZIONE
    const { id } = useParams();

    // DICHIARO LA VARIABILE DI STATO CHE MI CONTERRA' LA CARD 
    const [todo, setTodo] = useState({});

    // DEFINIZIONE DELLA FUNZIONE CHE MI RECUPERA LE INFORMAZIONI DELLA CARD TRAMITE PARAMETRO
    const getSingleFoto = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            setTodo(response.data);
        });
    };

    useEffect(() => {
        getSingleFoto();
    }, []);

    return (
        <div>
            <h1>Dettaglio card</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='image'>
                            <img src={todo.image} alt="" />
                        </div>
                        <h3>{todo.title}</h3>
                        <p>{todo.price}</p>
                        <p>{todo.description}</p>
                        <p>{todo.category}</p>
                    </div>
                </div>
            </div >
        </div >
    )
};
export default Detail;

