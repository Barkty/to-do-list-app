import React, { Fragment, useState } from 'react';
import Header from './Header';
const Form = (tasks, updateTasks) => {
    //Set task to an empty array
    const [task, setTask] = useState("");

    //Sets onClick function
    const addTask = () => {
	if(!(task)) {
	    alert("Please add a task");
	    return;
	}
    }

    //Add new task to previous task
    const updatedTask = tasks;
    updateTasks(updatedTasks);

    //Updates all contacts in the localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    //Log the localStorage in the console
    console.log(localStorage.getItem("tasks"));
    setTask('');
    
    render() { 

        return (
            <Fragment>
                {/* Input form for to-do list */}

                <div className="todolistMain">
                    <div className="header">
                    <form>
                        {/* Get input value */}
                        <input type="text" placeholder="Enter task" value={task} onChange={(e) => {setTask(e.target.value);}}/>
                        <button onClick={addTask} type="button">Submit</button>
                    </form>
                    </div>
		    <Task />
                </div>
            </Fragment>
        );
    };
 
 export default Form;
