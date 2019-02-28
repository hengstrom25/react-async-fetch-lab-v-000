// create your App component here
import React, { Component } from 'react'
 
class App extends Component {
 
  state = {
    peopleInSpace: []
  }
 
  render() {
    return (
<<<<<<< HEAD
      <div>
        {this.state.peopleInSpace.map(person => person.name)}
      </div>  
=======

>>>>>>> 52759925d1855b1aee894331782ed963fe9446ce
    )
  }
 
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
}
 
export default App