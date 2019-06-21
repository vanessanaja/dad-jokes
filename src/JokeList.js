import React, { Component } from 'react';
import axios from 'axios';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }
  constructor(props){
    super(props);
    this.state = {jokes: []}
  }
  async componentDidMount(){
    let res = await axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}});
    console.log(res.data.joke);
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