import React from 'react';

const Task = ({task}) => {
    return(
	<div className="task">
	    <p className="taskItem">{task}</p>
	</div>
    );
};

export default Task;
