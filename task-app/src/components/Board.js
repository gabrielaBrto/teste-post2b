import React from 'react';
import Todo from './tasks/Todo';
import Doing from './tasks/Doing';
import Done from './tasks/Done';

const Board = (props) => {
   const { id } = props.match.params;

    return(
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
                <Todo board={id} />       
            </div>
            <div className="col-md-4">
                <Doing board={id}/>    
            </div>
            <div className="col-md-4">
                <Done board={id} />      
            </div>
          </div>
        </div>
    );
};

export default Board;