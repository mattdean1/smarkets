import React from 'react'
import PropTypes from 'prop-types'

const EventListItem = ({ id, name, league }) => (
  <div>
    <h3>{name}</h3>
    <p>{league}</p>
  </div>
)

EventListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  league: PropTypes.string.isRequired,
}

export default EventListItem
