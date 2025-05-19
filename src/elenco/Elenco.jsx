import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Elenco() {
    const [todos, setTodos] = useState([]); // COME const Todos = [] PERO' PUO' CAMBIARE 

    const fetchTodos = () => {
        axios.get("https://fakestoreapi.com/products/")
            .then((response) => {
                setTodos(response.data); // COME Todos = resp.data PERO' PER LO USESTATE 
            });
    };

    useEffect(() => {
        fetchTodos()
    }, []);
    return (
        <>
            <div className="row mb-4">
                <div className="col-12">
                    <h1>ATTORI</h1>
                </div>
            </div>
            <div className="row g-3">
                {todos.map((todo) => {
                    return <div className="col-12 col-md-6 col-lg-4" key={todo.id}>
                        <NavLink className="text"
                            to={`/elenco/${todo.id}`}>
                            <div className="card rounded-0 d-flex">
                                <div className="todo-image">
                                    <img src={todo.image} className='img-fluid' alt="" />
                                </div>
                            </div>
                        </NavLink>
                    </div>
                })}
            </div>
        </>
    )
};

export default Elenco;
