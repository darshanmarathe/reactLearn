import React, { Component } from 'react'
import * as TodoActions from '../actions/TodoAction.js'
import TodoStore from '../Stores/TodosStore.js'


export default class Todo extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      todo :props.todo,
      buttonState : "Mark Done"
    }

  }

  componentWillMount(){
    TodoStore.on("change" , () =>{
            this.setState({todo : TodoStore.GetByID(this.props.todo.id)})
    });
}


  DoneTodo(e){
    e.preventDefault();
    console.log("Done " , this.props.todo.id)
    TodoActions.doneTodo(this.props.todo.id);
  }

  DeleteTodo(e){
    e.preventDefault();
    
    console.log("Delete " , this.props.todo.id)
    TodoActions.deleteTodo(this.props.todo.id);
  }


  
  updateTodo(e){
    e.preventDefault();
    TodoActions.updateTodo(this.props.todo.id, e.target.value);
  }


  render() {
    return (
      <div className={this.state.todo.isDone ? 'DoneTodo' : 'UnDoneTodo'}>

        <h2>{this.state.todo.title}</h2> 
        <textarea className="form-control" placeholder="Add your desc"
         onChange={this.updateTodo.bind(this)} >{this.state.todo.desc}</textarea>

        <button onClick={this.DoneTodo.bind(this)} className={"btn btn-" +  (this.state.todo.isDone ? "info" : "success")}>
          { "Mark " + (this.state.todo.isDone ? "Undone" : "Done") }</button>
        <button onClick={this.DeleteTodo.bind(this)} className="btn btn-danger">Delete</button>

        <hr />
      </div>
    )
  }
}
