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
    return <pre>{this.state.events ? this.state.events.msg : 'Loading...'}</pre>
  }
}

export default PopularEvents
