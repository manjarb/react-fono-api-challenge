import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import user from '../../auth/user'
import { BookingRow } from '../../components'

const TitleBox = styled.div`
  padding-top: 30px
`

export class Landing extends React.Component {
  constructor() {
    super()
    this.state = {
      bookingList: [],
    }
  }

  componentDidMount() {
    axios.get('/api/booking')
      .then((res) => {
        this.setState({
          bookingList: res.data.result,
        })
      })
      .catch((e) => {
        console.log(e)
        alert('Get Booking error')
      })
  }

  onBook = (bookingId, userId) => {
    axios.patch(`/api/booking/${bookingId}/book`, {
      user: {
        id: userId,
      },
    })
      .then((res) => {
        this.setState({
          bookingList: res.data.result,
        })
      })
      .catch((e) => {
        console.log(e)
        alert('Get Booking error')
      })
  }

  onReturn = (bookingId) => {
    axios.patch(`/api/booking/${bookingId}/return`)
      .then((res) => {
        this.setState({
          bookingList: res.data.result,
        })
      })
      .catch((e) => {
        console.log(e)
        alert('Get Booking error')
      })
  }

  render() {
    const { bookingList } = this.state

    return (
      <div className="container">
        <TitleBox className="title is-3">
          Booking List
        </TitleBox>
        {bookingList.map(booking => (
          <div key={booking._id}>
            <BookingRow user={{ ...user }} {...booking} onBook={this.onBook} onReturn={this.onReturn} />
            <hr />
          </div>
        ))}
      </div>
    )
  }
}
