import React from 'react';
import ReactDOM from 'react-dom';
import InputDescription from '../presensationals/inputDescription.js';

export default class InputDescriptionContainer extends React.Component {
  state = {description : ''}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.description);
    this.setState({description : ''});
  }

  setDescription(description){
    this.setState({description : description});
  }

  validity = (event) =>{
    event.setCustomValidity("holis");
  }

  render(){
    return(
      <InputDescription
        description = {this.state.description}
        handleSubmit = {this.handleSubmit}
        setDescription = {(description) => this.setDescription(description)}
      />
    )
  }
}
