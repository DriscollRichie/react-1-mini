import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor() {
      super()

      this.state = {
         name: '',
         picture: '',
         friends: []
      }
      this.updatePicture = this.updatePicture.bind(this)
      this.updateName = this.updateName.bind(this)
      this.addFriend = this.addFriend.bind(this)
   }
   updatePicture(e){
      this.setState({picture: e.target.value})
   }
   updateName(e){
      this.setState({name: e.target.value})
   }
   addFriend(){
      var newFriends = this.state.friends.slice()
      newFriends.push({name: this.state.name, picture: this.state.picture})
      this.setState({picture: '', name: '', friends: newFriends})
   }

  render() {
     console.log(this.state.friends)
     const friends = this.state.friends.map((val, i) => {
        console.log(val)
        return (
           <div key={i}>
              <img src={val.picture} />
              <span>{val.name}</span>
           </div>
        )
     })
    return (
       <div>
          <span> Picture </span>
          <input onChange={this.updatePicture} value={this.state.picture} />
          <span> Name </span>
          <input onChange={this.updateName} value={this.state.name}/>
          <button onClick={this.addFriend}> Add Friend </button>
          {friends}
       </div>
    );
  }
}

export default App;
