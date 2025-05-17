import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Elenco() {
    const [todos, setTodos] = useState([]); // COME const Todos = [] PERO' PUO' CAMBIARE 

    const fetchTodos = () => {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((response) => {
                setTodos(response.data); // COME Todos = resp.data PERO' PER LO USESTATE 
                console.log(response.data);
            });
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <>
            <div className="container ">
                <div className="row mb-4">
                    <div className="col-12">
                        <h1>ATTORI</h1>
                    </div>
                </div>
                <div className="row g-3">
                    {todos.map((todos) => (
                        <div key={`todos/${todos.id}`} className="col-12 col-md-6 col-lg-4">
                            <NavLink
                                to={`/elenco/ ${todos.id}`}>
                                <div className="card rounded-0 d-flex">
                                    <div className="todos-image">
                                        <img src={todos.image} alt="" />
                                    </div>
                                    <div className="todos-info">
                                        <h3 className="todos-name">{todos.name}</h3>
                                        <h3 className="todos-birthYear">{todos.birth_year}</h3>
                                        <h3 className="todos-nationality">{todos.nationality}</h3>
                                        <h3 className="todos-biography">{todos.biography}</h3>
                                        <h3 className="todos-awards">{todos.awards}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

export default Elenco;
