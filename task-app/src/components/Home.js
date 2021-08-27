import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../api/api";
import { FaPlus, FaChevronRight } from "react-icons/fa";

const Home = () => {
    const [boards, setBoards] = useState([]);

    useEffect( () => {
        api.get('/boards')
        .then(function(response){
            setBoards(response.data)
        });
    }, [])

    const renderList = () => {
        if(boards.length <= 0){
            return (
                <div className="col-md-12">
                    <div className="row justify-content-center">
                        <div className="alert alert-danger">
                            Não existem quadros de tarefas cadastrados no momento.
                        </div>
                    </div>
                </div>
            );
        }
        return boards.map(board => {

            return (
                <div className="col-md-4 mt-3" key={board.id}>
                    <div className="card">
                        <div className="card-body">
                                {board.name}
                            <div className="text-right">
                                <Link to={`/boards/${board.id}`} className="btn btn-success"><FaChevronRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>  
            )
        });
    }

    return(
        <div className="container mt-5">
            <div className="col-md-12 mb-4 text-right">
                <Link 
                    className="btn btn-primary" 
                    to="/boards/create">
                   <FaPlus /> Novo quadro
                </Link>
            </div>
            <div className="row">
                {renderList()}
            </div>
        </div>
    );
};

export default Home;