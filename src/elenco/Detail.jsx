import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';



const Detail = () => {
    // DESTRUTTURAZIONE
    const { id } = useParams();

    const [todo, setTodo] = useState({});

    const getSingleFoto = () => {
        axios.get(`https://lanciweb.github.io/demo/api/actors/elenco/${id}`).then((response) => {
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
                        <h3>{todo.name}</h3>
                        <h3>{todo.birth_year}</h3>
                        <h3>{todo.nationality}</h3>
                        <h3>{todo.biography}</h3>
                        <h3>{todo.awards}</h3>
                    </div>
                </div>
            </div >
        </div >
    )
};
export default Detail;

