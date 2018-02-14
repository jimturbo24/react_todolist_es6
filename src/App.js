import React, { Component } from 'react';
import TodoForm from './component/todo_form';
import TodoList from './component/todo_list';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: '',
      editId: 0,
      todos: []
    }
  }

  componentWillMount(){
    this.setState({text: '',
    editId: 0,
    todos: [
      {
        id: 1,
        name: 'call plumber'
      },
      {
        id: 2,
        name: 'pick up kids'
      },
      {
        id: 3,
        name: 'go to store'
      }
    ]});
  }

  render() {
    return (
      <div>
        <TodoForm
        {...this.state}
        aProp={'dog'}
        getTodoText={this.addTodoText.bind(this)}
        handleChange={this.doChange.bind(this)}
        updateTodoText={this.doUpdate.bind(this)} />

        <TodoList
        {...this.state}
        handleDelete={this.doDelete.bind(this)}
        handleEdit={this.doEdit.bind(this)} />
        onDeleteSelect={id => this.doDelete({id})}
      </div>
    )
  }

  changeText(e){
    this.setState({text: e.target.value});
  }

  addTodoText(textToAdd){
    var todosClone = this.state.todos;
    var newTodo = {id: todosClone.length + 1, name: textToAdd}
    todosClone.push(newTodo);
    this.setState({todos: todosClone, text: ''});
  }

  doDelete(id) {
    var todosClone = this.state.todos;
    var index = todosClone.findIndex(foo => foo.id === id);
    todosClone.splice(index, 1);
    this.setState({todos: todosClone});
  }

  doEdit(eTodo) {
    this.setState({editId: eTodo.id, text: eTodo.name});
  }

  doChange(text) {
    this.setState({text: text});
  }

  doUpdate(updatedTodo) {
    var todosClone = this.state.todos;
    var index = todosClone.findIndex(foo => foo.id === updatedTodo.id);
    todosClone.splice(index, 1);
    todosClone.push(updatedTodo);
    this.setState({todos: todosClone, text: '', editId: 0});
  }
}

export default App;
