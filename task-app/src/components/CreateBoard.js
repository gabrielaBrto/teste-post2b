import React, { useState } from 'react';
import history from "../history";
import api from "../api/api";

const CreateBoard = () => {
    const [name, setName] = useState('');

    const onSubmit = () => {
        api.post('/boards', { name }); 
        history.push('/');
    }

    return(
        <div className="container">
            <div className="row justify-content-center">    
                <div className="col-md-10 mt-5">
                    <div className="card">
                        <div className="card-header">Novo Quadro</div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Nome</label>
                                    <input type="name" name={name} className="form-control"  onChange={e => setName(e.target.value)}  />
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

export default CreateBoard;