import React, { Component } from 'react'
import Contacts from './Component/Contacts'
import Navbar from './Navbar/Navbar'
class App extends Component {
  render() {
    return (
      <div><Navbar/>
      <Contacts/>
      </div>
    )
  }
}

export default App