import React, { Component } from 'react';
import Joke from './Joke';
// import uuid from 'uuid/v4';
import axios from 'axios';


class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }
  constructor(props){
    super(props);
    this.state = { jokes: [] };
    this.handleVote = this.handleVote.bind(this);
  }
  async componentDidMount(){
    let jokes = [];
    while(jokes.length < this.props.numJokesToGet){
      let res = await axios.get('https://icanhazdadjoke.com/',
      {headers: {Accept: 'application/json'}
    });
    jokes.push({text: res.data.joke,
                votes: 0,
                id: res.data.id,
                // id: uuid()
      });
    }
    this.setState({ jokes: jokes });
    window.localStorage.setItem(
      "jokes",
      JSON.stringify(jokes) 
    )
  }
  handleVote(id, delta){
    this.setState(
      st => ({
        jokes: st.jokes.map(j => 
          j.id === id ? {...j, votes: j.votes + delta}: j)
  
      }) 
    ) 
  }
  render(){
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>Dad Jokes</h1>
          <button className='JokeList-getmore'>New Jokes</button>
        </div>
        <div className='JokeList-jokes'>
         {this.state.jokes.map(j => (
           <Joke key={j.id} votes={j.votes} text={j.text} 
           upvote={() => this.handleVote(j.id, 1)} 
           downvote={() => this.handleVote(j.id, -1)}
          />
         ))}
        </div>
      </div>
    )
  }
}

export default JokeList;