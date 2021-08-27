import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';    
import history from '../history';
import Home from './Home'
import Header from './Header';
import CreateBoard from './CreateBoard';
import Board from './Board';
import CreateTask from './tasks/CreateTask';
import Task from './tasks/Task';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/boards/create" exact component={CreateBoard} />
                        <Route path="/boards/:id" exact component={Board} />
                        <Route path="/tasks/:id/:status" exact component={CreateTask} />
                        <Route path="/tasks/:id/" exact component={Task} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};


export default App;