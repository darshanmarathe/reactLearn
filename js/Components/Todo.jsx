import React, { Component } from 'react';
import * as TodoActions from '../actions/TodoAction.js'
import TodoStore from '../Stores/TodosStore.js';
import ContentEditable from "react-contenteditable";



export default class Todo extends Component {

  constructor(props, context) {
    super(props, context)
    this.setControlState = this.setControlState.bind(this)
    this.state = {
      todo: props.todo,
      buttonState: "Mark Done"
    }

  }

  componentWillMount() {
    TodoStore.on("change", this.setControlState);
  }




  setControlState() {
    this.setState({ todo: TodoStore.GetByID(this.props.todo.id) })
  }


  
  componentWillUnmount(){
    TodoStore.removeListener("change" , this.setControlState)
  }


  DoneTodo(e) {
    e.preventDefault();
    console.log("Done ", this.props.todo.id)
    TodoActions.doneTodo(this.props.todo.id);
  }

  DeleteTodo(e) {
    e.preventDefault();

    console.log("Delete ", this.props.todo.id)
    TodoActions.deleteTodo(this.props.todo.id);
  }


  updateTodoTitle(e) {


    e.preventDefault();
    TodoActions.updateTodoTitle(this.props.todo.id, e.target.value);

  }

  updateTodo(e) {
    e.preventDefault();
    TodoActions.updateTodo(this.props.todo.id, e.target.value);
  }


  render() {
    return (
      <div className={this.state.todo.isDone ? 'DoneTodo' : 'UnDoneTodo'}>
        <ContentEditable
          className="title"
          html={this.state.todo.title} // innerHTML of the editable div
          disabled={false}       // use true to disable edition
          onChange={this.updateTodoTitle.bind(this)} // handle innerHTML change
        />

        <ContentEditable
          html={this.state.todo.desc} // innerHTML of the editable div
          disabled={false}       // use true to disable edition
          onChange={this.updateTodo.bind(this)} // handle innerHTML change
        />


        <br />

        <button onClick={this.DoneTodo.bind(this)} className={"btn btn-" + (this.state.todo.isDone ? "info" : "success")}>
          {"Mark " + (this.state.todo.isDone ? "Undone" : "Done")}</button>
        <button onClick={this.DeleteTodo.bind(this)} className="btn btn-danger">Delete</button>

        <hr />
      </div>
    )
  }
}
