import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import PopularEvents from './EventsList'

const App = () => (
  <div className="App">
    <Route path="/" component={PopularEvents} />
  </div>
)

export default App
