import React, {Fragment, useState, useEffect } from 'react';
import 'index.css';
import Form from './components/Form';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);

    //Updates the tasks in localStorage

    //Checks if any contacts were added in a previous seesion
    useEffect(() => {
	let previouslySavedTasks = localStorage.getItem("tasks");

	if(previouslySavedTasks) {
	    //Concerts to array
	    previouslySavedTasks = JSON.parse(previouslySavedTasks);
	    setTasks(previouslySavedTasks);
	}
    }, []);
    
    return (
	<Fragment>
	    <Form tasks={tasks} updatedTasks={setTasks}/>
	    <TaskList tasks={tasks}/>
	 </Fragment>
    )
}

export default App;
