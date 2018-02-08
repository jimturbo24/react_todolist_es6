import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return(
      <div>
        <form onSubmit={this.whenSubmit.bind(this)}>
          <div className="form-group">
            <label>Todo text</label>
            <input
              type="text"
              ref="text"
              value={this.props.text}
              onChange={this.changeText.bind(this)}
              className="form-control" />

            <button type="submit" className="btn btn-primary">Add Todo</button>
          </div>
        </form>
      </div>
    );
  }

  changeText(e){
    this.props.handleChange(e.target.value);
  }

  whenSubmit(e){
    e.preventDefault();
    var text = this.refs.text.value.trim();

    if(!text){
      alert('Please enter a todo item');
      return;
    }

    if(this.props.editId) {
      var updatedTodo = {
        id: this.props.editId,
        name: text
      }
      this.props.updateTodoText(updatedTodo);
    } else {
      this.props.getTodoText(text);
    }
    this.refs.text.value = '';
  }

}

export default TodoForm;
