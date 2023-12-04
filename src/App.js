import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {NavBar, NoteCardCollection,UINewNote} from "./ui-components";
import {Routes, Route} from 'react-router-dom'
//import NewNote from './NewNote'

class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path ='/' element={<div><NavBar/><NoteCardCollection/></div>} />
{/* <Route exact path='/' element={<div>< NavBar/><NoteCardCollection/></div>} /> */}
<Route exact path='/new' element= {<UINewNote/>} />

</Routes>
</header></div>


    );
  
}

}

export default withAuthenticator(App);