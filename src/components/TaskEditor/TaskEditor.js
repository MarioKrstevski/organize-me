import React, { Component } from 'react';

class TaskEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="row">
                <input className="col-md-6" type="text" name="newTask" />
                <button className="col-md-2">Start + Add</button>
                <button className="col-md-2" >Add</button>
                <span className="currentTime col-md-2" style={{ border: '1px solid black' }}>12:01</span>
            </div>
        );
    }
}

export default TaskEditor;