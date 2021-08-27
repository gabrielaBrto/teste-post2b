import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import history from "../../history";
import api from '../../api/api';
import { FaTrello, FaPlus, FaTrashAlt } from "react-icons/fa";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const Task = (props) => {
    const [task, setTask] = useState([]);
    const [tags, setTags] = useState([]);
    const { id } = props.match.params;

    const getTask = () => {
        api.get(`/tasks/${id}`)
        .then(function(response){
            setTask(response.data);
        });
    }

    const getTags = () => {
        api.get('/tags')
        .then(function(response){
            setTags(response.data);
        })
    }

    const addTag = (tag) => {
        api.patch(`/tasks/${task.id}`, { 
            tag: tag
         })
        .then(function(response){
            history.push(`/boards/${task.board_id}`);
        })
    }

    const deleteTask = (id) => {
        api.delete(`/tasks/${id}`);
        history.push(`/boards/${task.board_id}`);
    }

    useEffect(() => {
        getTask()
        getTags()
    }, [])


    return(
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-7">
                <div className="card">
                    <div className="card-header">Detalhes Task</div>
                    <div className="card-body mt-3 mb-3">
                       <div className="row">
                           <div className="col-md-8">
                            <h5><FaTrello /> {task.title}</h5>
                            <span>{task.description}</span>  
                           </div>
                           <div className="col-md-4">
                            <button 
                                onClick={() => deleteTask(task.id)} 
                                className="btn btn-danger btn-sm btn-block mb-3"
                            >
                                <FaTrashAlt /> Deletar
                            </button>
                            <DropdownButton 
                                variant="primary btn-sm btn-block" 
                                title={`Adicionar Tag`}
                            >
                                {tags.map(tag =>
                                    <Dropdown.Item key={tag.id} onClick={() => addTag(tag)}>{tag.name}</Dropdown.Item>
                                )}
                            </DropdownButton>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Task;