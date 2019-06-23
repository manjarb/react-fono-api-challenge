import React from 'react'
import styled from 'styled-components'

export const BookingRow = ({
  user, _id, brand, name, availability, technology, bands2g, bands3g, bands4g, bookedBy, bookedAt, onBook, onReturn,
}) => (
  <div className="columns is-multiline">
    <div className="column is-2">
      <p>
        <strong>Name</strong>
        <br />
        { brand }
        {' '}
        { name }
      </p>
    </div>
    <div className="column is-2">
      <p>
        <strong>Availability</strong>
        <br />
        { availability ? 'Yes' : 'No' }
      </p>
    </div>
    <div className="column is-2">
      <p>
        <strong>Technology</strong>
        <br />
        { technology }
      </p>
    </div>
    <div className="column is-3">
      <p>
        <strong>Booked By</strong>
        <br />
        { bookedBy || '-' }
      </p>
    </div>
    <div className="column is-3">
      <p>
        <strong>Booked At</strong>
        <br />
        { bookedAt }
      </p>
    </div>

    {bands2g && (
    <div className="column is-12">
      <p>
        <strong>2g bands</strong>
        <br />
        { bands2g }
      </p>
    </div>
    )}
    {bands3g && (
    <div className="column is-12">
      <p>
        <strong>3g bands</strong>
        <br />
        { bands3g }
      </p>
    </div>
    )}
    {bands4g && (
    <div className="column is-12">
      <p>
        <strong>4g bands</strong>
        <br />
        { bands4g }
      </p>
    </div>
    )}

    <div className="column is-4">
      <button
        type="button"
        className="button is-primary"
        style={{ marginRight: '10px' }}
        onClick={() => onBook(_id, user.name)}
      >
          Book This
      </button>
      <button
        type="button"
        className="button is-warning"
        onClick={() => onReturn(_id)}
      >
          Return This
      </button>
    </div>
  </div>
)
