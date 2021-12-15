import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  getRandomStudent(){
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.props.students.length);
    // Todo: Add your logic here to grab one random student

  }

  render() {
    return (
      <div>
        <div>
          <img src='https://ca.slack-edge.com/T2SV1LBC6-U01PV3GJLTY-166182619cff-512'></img>
          <h1>Michael</h1>
        </div>
        <button>Randomize</button>
      </div>
    )
  }
}