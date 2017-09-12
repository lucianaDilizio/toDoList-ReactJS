import ReactDOM from 'react-dom';
import React from 'react';
import Item from './item.js';
import InputDescriptionContainer from '../containers/inputDescriptionContainer.js'

export default class ToDoList extends React.Component{

  render(){
    const items = this.props.items;

    const itemsList = items.map((val, index) => {
      return (
        <Item
          key={index}
          val={val}
          index = {index}
          setChecked = {(index) => this.props.setChecked(index)}
          deleteItem = {(index) => this.props.deleteItem(index)}
        />
      );
    });

    return(
      <div>
        <div className="title-container">
          <h1>TO-DO LIST</h1>
          <h2>WITH ReactJS</h2>
        </div>
        <div className="todolist-container">
          <div className="todolist">
            <InputDescriptionContainer
              onSubmit={(description) => this.props.addItem(description)}
            />
          </div>
          <div className="items-container">
            <ul className="item">
              {itemsList}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
