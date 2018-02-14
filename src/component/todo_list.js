import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return(
      <ul className="list-group">
        {this.props.todos.map(todo => {
            return <li className="list-group-item" key={todo.id}>
            <span onClick={this.whenEdit.bind(this, todo)}>{todo.name}</span>
            <button onClick={this.whenDelete.bind(this, todo.id)} type="text" className="btn btn-danger">Delete</button>
            <button onClick={() => onDeleteSelect(this.props.todo.id)} type="text" className="btn btn-danger">Delete</button>
            </li>
          })
        }
      </ul>
    );
  }

  whenDelete(id) {
    return this.props.handleDelete(id);
  }

  whenEdit(eTodo) {
    return this.props.handleEdit(eTodo);
  }
}

export default TodoList;
