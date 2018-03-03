import React, { Component } from 'react';
import './App.css';

class App extends Component {
   constructor() {
      super()

      this.state = {
         picture: '',
         name: '',
         friends: [] 
      }

      this.updatePicture = this.updatePicture.bind(this)
      this.updateName = this.updateName.bind(this)
      this.addFriend = this.addFriend.bind(this)
   }

   updatePicture(e) {
      this.setState({picture: e.target.value}) 
   }

   updateName(e) {
      this.setState({name: e.target.value})
   }
   addFriend() {
      var newFriends = this.state.friends.slice()
       console.log(newFriends)
       newFriends.push({name: this.state.name, picture: this.state.picture})
       console.log(newFriends)
       this.setState({picture: '', name: '', friends: newFriends})
   }

  render() {
     const friends = this.state.friends.map((val, i) => {
      //   console.log('friends val',val)
        return(
           <div key={i}>
              <img src={val.picture} />
              <span> {val.name} </span>
           </div>
        )
     })
     console.log(this.state)
     console.log(friends)
    return (
       <div class="taco">
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
