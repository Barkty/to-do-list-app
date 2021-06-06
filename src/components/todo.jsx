import React, { Component } from 'react';
import Header from './header';
import ToDoList from './toDoList';
import './ToDoList.css';

class Todo extends Component {
    constructor(props) {
        super(props);

        // Define state object
        this.state = {
            items: []
        };

        // Add an item to the list
        this.addItem = this.addItem.bind(this);
        
        // Delete an item from the list
        this.deleteItem = this.deleteItem.bind(this);
    } 

        addItem(e) {
            if (this._inputElement.value !== "") {

                // Store input value and time
                var newItem = {
                    text: this._inputElement.value,
                    key: Date.now()
                };

                // Set state property with data
                this.setState((prevState) => {
                    return {
                        items: prevState.items.concat(newItem)
                    };
                });

                this._inputElement.value = "";
            };

            console.log(this.state.items);

            // Override submit default behaiour
            e.preventDefault();
        };

        deleteItem(key) {
            var filteredItems = this.state.items.filter(function(item) {
                return (item.key !== key);
            });

            // Update the removed item
            this.setState({ items: filteredItems });
        };
    
    render() { 

        return (
            <React.Fragment>
                {/* Input form for to-do list */}
                <Header/>

                <div className="todolistMain">
                    <div className="header">
                    <form onSubmit={this.addItem}>
                        {/* Get input value */}
                        <input ref={(a) => this._inputElement = a} type="text" placeholder="Enter task"/>
                        <input type="submit" value="Add task"/>
                    </form>
                    </div>

                    {/* Display list of tasks on page*/}
                    <ToDoList entries={this.state.items} delete={this.deleteItem}/>
                </div>
            </React.Fragment>
        );
    };
 
export default Todo;