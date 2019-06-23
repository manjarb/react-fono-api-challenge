import React from 'react'
import styled from 'styled-components'

const TitleBox = styled.div`
  padding-top: 30px
`

export class Landing extends React.Component {
  render() {
    return (
      <div className="container">
        <TitleBox className="title is-3">
          Booking List
        </TitleBox>
        <div className="">
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Technology
                </th>
                <th>
                  2g bands
                </th>
                <th>
                  3g bands
                </th>
                <th>
                  4g bands
                </th>
                <th>
                  Availability
                </th>
                <th>
                  Booked Date
                </th>
                <th>
                  Booked Person
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    )
  }
}
