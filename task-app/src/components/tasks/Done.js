import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import { FaPlus } from "react-icons/fa";

const Done = (props) => {
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        api.get(`/tasks/?status_id=3&board_id=${props.board}`)
        .then(function(response){
            setTasks(response.data)
        });
    }

    const renderTag = (task) => {
        if(task.tag){
            return <span className={`badge bg-${task.tag.color}`}>{task.tag.name}</span>
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    const renderList = () => {
        return tasks.map(task => {
            return (
              <Link to={`/tasks/${task.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <div className="card mt-3" key={task.id}>
                  <div className="card-body">
                      <div className="row">
                          <div className="col-md-8">
                              {task.title}
                          </div>
                          <div className="col-md-4">
                          {renderTag(task)}
                          </div>
                      </div>
                  </div>
              </div>
              </Link>
            )
        });
      }
  
  
      return(
          <div>
              <div className="card">
                  <div className="card-header">To Do</div>
                  <div className="card-body">
                      <Link 
                          className="btn btn-success btn-block mb-4" 
                          to={`/tasks/${props.board}/3`}>
                          <FaPlus />    Nova Task
                      </Link>
                      {renderList()}
                     
                  </div>
              </div>
          </div>
      );
  };

export default Done;