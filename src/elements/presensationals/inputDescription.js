import React from 'react';
import ReactDOM from 'react-dom';

export default class InputDescription extends React.Component {
  render(){
    return(
      <form className="container" onSubmit={this.props.handleSubmit}>
        <input id="description" type="text" placeholder="Write your item description here" value = {this.props.description} onChange={(event) => this.props.setDescription(event.target.value)} className="item-description" required="required"/>
        <button type="submit" className="add-button">ADD</button>
      </form>
    )
  }
}
