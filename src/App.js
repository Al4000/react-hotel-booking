import './App.css'
import React from 'react'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="">
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms' exact component={Rooms} />
        <Route path='/rooms/:slug' exact component={SingleRoom} />
        <Route path='*' component={Error} />
      </Switch>
    </div>
  )
}

export default App
