import React from 'react';

const Task = (props) => {
    return (
        <div className="row" onClick={props.click}>
            <div className="col-8">
                {props.title}
            </div>
            <div>Just a random text in between</div>
            <div className="col-4">
                {props.done}
            </div>
        </div>
    );
}

export default Task;
