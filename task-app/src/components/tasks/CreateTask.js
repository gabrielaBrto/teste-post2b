import React, { useState } from 'react';
import history from '../../history';
import api from '../../api/api';

const CreateTask = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { id, status } = props.match.params;

    const onSubmit = () => {

        api.post(`/tasks`, 
        { 
            title: title,
            description: description,
            status_id: parseInt(status),
            board_id: parseInt(id)
        }
        ); 
        history.push(`/boards/${id}`);
    }

    return(
        <div className="container">
            <div className="row justify-content-center">    
                <div className="col-md-10 mt-5">
                    <div className="card">
                        <div className="card-header">Nova Task</div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                               <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label>Título</label>
                                        <input type="title" name={title} className="form-control"  onChange={e => setTitle(e.target.value)}  />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Descrição</label>
                                        <input type="description" name={description} className="form-control"  onChange={e => setDescription(e.target.value)}  />
                                    </div>
                               </div>
                                <div className="text-right">
                                    <button type="submit" className="btn btn-success">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTask;