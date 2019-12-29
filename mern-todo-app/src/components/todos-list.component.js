import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/* Todo component to format JSX for helper method */
const Todo = props => (
    <tr>
        {/* conditional css set to td tag */}
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        {/* setting up link to '/edit/' */}
        <td>
            <Link to={'/edit/'+props.todo._id}>Edit</Link>
        </td>

    </tr>
)

export default class TodosList extends Component {
    /* creating constructor */
    constructor(props) {
        super(props);
        /* setting inital set */
        this.state = {todos: []};
    }
    /* method will request backend data and retrieve data */
    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                /* setting data to mapped response */
                this.setState({todos: response.data});
            })
            .catch(function (error){
                console.log(error);
            })
    }
    /* iterating state to populate data using Todo component */
    todoList(){
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div>
                {/* creating a table to display */}
                <h3>Todos List</h3>
                <table className='table table-striped' style={{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* using helper method to return JSX of output */}
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
