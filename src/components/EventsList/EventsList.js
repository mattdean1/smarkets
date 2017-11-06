import React, { Component } from 'react'

import { getPopularEvents } from '../../controllers/api'

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
      <ListItem key={event.id} id={event.id} name={event.name} league={event.parent_name} />
    ))

    return <div>{eventsAreLoading(listItems) ? 'Loading...' : listItems}</div>
  }
}

export default PopularEvents
