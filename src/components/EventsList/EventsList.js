import React, { Component } from 'react'

import getPopularEvents from '../../controllers/api'

import ListItem from './EventsListItem'

const eventsAreLoading = array => array.length === 0

class PopularEvents extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
    }
  }

  componentWillMount() {
    getPopularEvents().then(events => this.setState({ events }))
  }

  render() {
    const listItems = this.state.events.map(event => (
      <ListItem name={event.name} league={event.parent_name} url={event.url} />
    ))

    return <pre>{eventsAreLoading(listItems) ? 'Loading...' : listItems}</pre>
  }
}

export default PopularEvents
