import React from 'react';
import Add from './Add.jsx';
import List from './List.jsx';
import Random from './Random.jsx';
import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      studentlist : []
    }
    this.getStudents = this.getStudents.bind(this);
    this.changepage = this.changepage.bind(this);
  }

  componentDidMount(){
    // used to store all students on our front end when the application runs
    this.getStudents();
  }

  getStudents(){
    // Todo: Add your code here to retrieve all students from the database
    axios.get('/api/students')
      .then(response => {
        this.setState({studentlist : response.data})
      })
      .catch(err => {
        console.error(err);
      })
  }

  changepage(e){
    // Todo: Add your logic to "change pages" here on button click
    this.setState({page: e.target.value});
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <button value='home' onClick={this.changepage}>Back</button>
          <Add />
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <button value='home' onClick={this.changepage}>Back</button>
          <List />
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <button value='home' onClick={this.changepage}>Back</button>
          <Random />
        </div>
      )
    } else {
      return (
        <div>
          <button value='add' onClick={this.changepage}>Add Student</button>
          <button value='list' onClick={this.changepage}>List Students</button>
          <button value='random' onClick={this.changepage}>Random Student</button>
        </div>
      )
    }
  }
}