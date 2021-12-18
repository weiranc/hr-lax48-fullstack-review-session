import React from 'react';
import axios from 'axios';

class ListElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      toggleNameChange: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeNameInputBox = this.changeNameInputBox.bind(this);
    this.changeName = this.changeName.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleClick(event){
    this.setState({toggleNameChange: !this.state.toggleNameChange})
  }

  changeName(event){
    this.setState({name: event.target.value});
  }

  handleUpdate(event) {
    axios.put(`/api/students/${this.props.student._id}`, this.state)
      .then(response => {
        props.getStudents();
      })
      .catch(err => {
        console.error(err);
      })
  }

  changeNameInputBox(){
    if (this.state.toggleNameChange) {
      return (
        <div>
          <input name="name" value={this.state.name} onChange={this.changeName}></input>
          <button onClick={this.handleClick}>Cancel</button>
          <button onClick={this.handleUpdate}>Update</button>
        </div>
      );
    }
  }

  render() {
    return (
      <span>
        <div onClick={this.handleClick}>{this.props.student.name}</div>
        {this.changeNameInputBox()}
        <img src={this.props.student.imageUrl}></img>
      </span>
    );
  }
}

export default ListElement;