import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getEventDetails } from '../../controllers/api'

const detailsLoading = detailsObj => Object.keys(detailsObj).length === 0

class EventDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      details: {},
    }
  }

  componentWillMount() {
    const { id } = this.props.match.params
    getEventDetails(id).then(details => this.setState({ details }))
  }

  render() {
    if (detailsLoading(this.state.details)) return <div>Loading...</div>
    const { event } = this.state.details
    return (
      <div>
        <h2>{event.name}</h2>
        <p> Starts: {event.start_datetime} </p>
        <p> League: {event.parent_name} </p>
      </div>
    )
  }
}

EventDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default EventDetail
