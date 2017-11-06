import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import PopularEvents from './EventsList'
import EventDetail from './EventDetail'

const App = () => (
  <div className="App">
    <Route exact path="/" component={PopularEvents} />
    <Route path="/events/:id" component={EventDetail} />
  </div>
)

export default App
