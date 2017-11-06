import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const EventListItem = ({ id, name, league }) => (
  <div>
    <Link to={`/events/${id}`}>
      <h3>{name}</h3>
    </Link>

    <p>{league}</p>
  </div>
)

EventListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
}

export default EventListItem
