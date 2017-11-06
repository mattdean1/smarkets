import React, { Component } from 'react'
import getPopularEvents from '../controllers/api'

class PopularEvents extends Component {
  constructor() {
    super()
    this.state = {
      events: false,
    }
  }

  componentWillMount() {
    getPopularEvents().then(events => this.setState({ events }))
  }

  render() {
    return (
      <pre>
        {this.state.events ? JSON.stringify(this.state.events.results, null, 2) : 'Loading...'}
      </pre>
    )
  }
}

export default PopularEvents
