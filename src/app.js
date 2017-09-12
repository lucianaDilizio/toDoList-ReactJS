import React from 'react';
import ReactDOM from 'react-dom';
import InputDescriptionContainer from './elements/containers/inputDescriptionContainer.js';
import ToDoList from './elements/presensationals/toDoList.js';
import './css/toDoListStyles.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      id: 0,
      items : [],
    }
  }

  setChecked(index){
    const items = this.state.items.slice();

    items[index].checked = !items[index].checked;
    this.setState({
      items : items,
    })
  }

  deleteItem(index){
    const items = this.state.items.slice();

    items.splice(index, 1);
    this.setState({
      items : items,
    })
  }

  addItem(description){
    const items = this.state.items.slice();
    const id = this.state.id;

    var item = {
      id: id,
      description: description,
      checked: false,
    }

    this.setState({
      id: id + 1,
      items : items.concat(item),
    })
  }

  render(){
    return(
      <ToDoList
        addItem = {(description) => this.addItem(description)}
        items = {this.state.items}
        deleteItem = {(index) => this.deleteItem(index)}
        setChecked = {(index) => this.setChecked(index)}
      />
    );
  }
}
