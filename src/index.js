import React from 'react';
import ReactDOM from 'react-dom';
import './toDoListStyles.css';

class AddItems extends React.Component {
  state = {description : ''}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.description);
    this.setState({description : ''});
  }

  render(){
    return(
      <form className="container" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Write your item description here" value = {this.state.description} onChange={(event) => this.setState({description:event.target.value})} className="item-description" required />
        <button type="submit" className="add-button">ADD</button>
      </form>
    )
  }
}

function Item (props){
  return (
    <li>
      <div className="description">
        <span className={props.val.checked ? "item-selected" : ""}>{props.val.description}</span>
      </div>
      <div className="checkbox">
        <input type="checkbox" checked={props.val.checked} onClick={() => props.setChecked(props.index)}/>
      </div>
      <div className="delete">
        <button className="delete-button" onClick={() => props.deleteItem(props.index)}>DEL</button>
      </div>
    </li>
  )
}

class App extends React.Component {
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
    const items = this.state.items;

    const itemsList = items.map((val, index) => {
      return (
        <Item
          key={index}
          val={val}
          index = {index}
          setChecked = {(index) => this.setChecked(index)}
          deleteItem = {(index) => this.deleteItem(index)}
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
            <AddItems
              onSubmit={description => this.addItem(description)}
            />
          </div>
          <div className="items-container">
            <ul className="item">
              {itemsList}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
