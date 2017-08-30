import {
    EventEmitter
} from 'events'

import AppDispatcher from '../Dispatcher/appdispatcher'

import _ from 'lodash';
class TodoStore extends EventEmitter {
    constructor() {
        super();

        if (localStorage.getItem("todos") === null) {
            this.todos = [];
        } else {
            this.todos = JSON.parse(localStorage.getItem("todos"))
        }
    }

    CreateTodo = (_title) => {
        this.todos.unshift({
            id: (this.todos.length + 1),
            title: _title,
            desc: "Click to add your description...",
            isDone: false
        });

        this.SetStorage();
        this.emit("change");
    }


    DeleteTodo = (id) => {
        debugger;
        _.remove(this.todos, {
            id: id
        });
        this.SetStorage();

        this.emit("change");
    }



    DoneTodo = (id) => {
        debugger;
        let todo = _.find(this.todos, {
            id: id
        });
        if (todo != undefined || todo != null)
            todo.isDone = todo.isDone ? false : true;
        this.SetStorage();

        this.emit("change");
    }



    UpdateTodo = (id, text) => {

        let todo = _.find(this.todos, {
            id: id
        });
        if (todo != undefined || todo != null)
            todo.desc = text;
        this.SetStorage();

        this.emit("change");
    }

    UpdateTodoTitle = (id, text) => {

        let todo = _.find(this.todos, {
            id: id
        });
        if (todo != undefined || todo != null)
            todo.title = text;
        this.SetStorage();

        this.emit("change");
    }

    SetStorage() {
        localStorage.setItem("todos", JSON.stringify(this.todos));

    }


    GetAll = () => {
        return this.todos;
    }


    GetByID = (id) => {
        return _.find(this.todos, {
            id: id
        });
    }

    handleAction(action) {
        console.log("todostore is handling =>", action, "action");
        switch (action.type) {
            case "CREATE_TODO":
                this.CreateTodo(action.text);
                break;
            case "DELETE_TODO":
                this.DeleteTodo(action.id);
                break;
            case "DONE_TODO":
                this.DoneTodo(action.id);
                break;
            case "UPDATE_TODO":
                this.UpdateTodo(action.id, action.text);
                break;
            case "UPDATE_TODO_TITLE":
                this.UpdateTodoTitle(action.id, action.title);
                break;

            default:
                break;
        }
    }

}

const todoStore = new TodoStore;

console.dir(AppDispatcher);
AppDispatcher.register(todoStore.handleAction.bind(todoStore));
window.AppDispatcher = AppDispatcher;
export default todoStore;