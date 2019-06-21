import React, { Component } from 'react';
import axios from 'axios';

class JokeList extends Component {
  // constructor(props){
  //   super(props);
  // }
  async componentDidMount(){
    let res = await axios.get('https://icanhazdadjoke.com/');
    console.log(res);
  }
  render(){
    return (
      <div>
        <h1>Dad Jokes</h1>
      </div>
    )
  }
}

export default JokeList;