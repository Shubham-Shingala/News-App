import React, { Component } from 'react'
import loading from "./loading.gif"
export default class Spinner extends Component {
  render() {
    return (
      <div className='my-3 text-center'>
          <img src={loading} alt="Loading" />
      </div>
    )
  }
}
