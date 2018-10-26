import React, { Component } from 'react';
import './App.css';
import Task from './components/Task/Task';
import TaskEditor from './components/TaskEditor/TaskEditor';

class App extends Component {
    render() {
        return (
            <div className="container">

                <div >
                    <TaskEditor />
                </div>


                <div className="row">
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        );
    }
}

export default App;
