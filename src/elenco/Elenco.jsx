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
                {todos.map((todo) => (
                    <div className="col-12 col-md-6 col-lg-4" key={todos.id}>
                        <NavLink className="text"
                            to={`/elenco/ ${todo.id}`}>
                            <div className="card rounded-0 d-flex">
                                <div className="todo-image">
                                    <img src={todo.image} alt="" />
                                </div>
                                <div className="todo-info">
                                    <h3 className="todo-name">{todo.name}</h3>
                                    <p className="todo-birthYear">{todo.birth_year}</p>
                                    <p className="todo-nationality">{todo.nationality}</p>
                                    <p className="todo-biography">{todo.biography}</p>
                                    <p className="todo-awards">{todo.awards}</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </>
    )
};

export default Elenco;
