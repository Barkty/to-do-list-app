import React, {useState} from 'react';

const Task = ({task}) => {
    const [todo, setTodo] = useState(tasks);

    const deleteTask = (index) => {
	//Delete task
	const removeTask = todo.filter((task) => task.index !== index);
	setTodo(removeTask);
    }
    
    return(
	<div className="task">
	    <p className="taskItem">{task}</p>
	    <button type="submit" onClick={() => deleteTask(index)}>Delete</button>
	</div>
    );
};

export default Task;
