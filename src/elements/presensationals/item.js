import ReactDOM from 'react-dom';
import React from 'react';

export default class Item extends React.Component{
  render(){
    return (
      <li>
        <div className="description">
          <span className={this.props.val.checked ? "item-selected" : ""}>{this.props.val.description}</span>
        </div>
        <div className="checkbox">
          <input type="checkbox" checked={this.props.val.checked} onClick={() => this.props.setChecked(this.props.index)}/>
        </div>
        <div className="delete">
          <button className="delete-button" onClick={() => this.props.deleteItem(this.props.index)}>DEL</button>
        </div>
      </li>
    )
  }
}
