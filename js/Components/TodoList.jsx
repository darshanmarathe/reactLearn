import React, { Component } from 'react'
import Todo from './Todo.jsx'

import * as TodoActions from '../actions/TodoAction.js'
import TodoStore from '../Stores/TodosStore.js'

export default class TodoList extends Component {

    constructor({ props }) {
        super(props);
        this.setControlState = this.setControlState.bind(this);
        this.state = {
            todos: TodoStore.GetAll()
        }

     
    }


    componentWillMount(){
        TodoStore.on("change" , this.setControlState); 
    }


    componentWillUnmount(){
        TodoStore.removeListener("change", this.setControlState)
    }

    setControlState(){
        this.setState({todos : TodoStore.GetAll()})
    }


    handle(e){
        if(e.key === "Enter"){
             e.preventDefault(); // Ensure it is only this code that rusn
             TodoActions.createTodo(e.target.value);
             e.target.value ="";
         }
    }



    GetTodos(){
        let todos = this.state.todos;
        let components  =  todos.map((td) => <Todo key={td.id} todo={td} />);
       return components;
    }

    render() {
        return (
            <div>
                <h1>List of todos {this.state.todos.length}</h1>                
                <input type="text" className="form-control" autoFocus onKeyPress={this.handle.bind(this)} placeholder="Enter Todo Title and hit enter" />
                <hr />  
                <hr />  
               
                {this.GetTodos()}
            </div>
        )
    }
}
