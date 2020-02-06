import React from 'react'

class Index extends React.Component {
  componentDidMount () {
    /* eslint-disable no-undef */
    const http = new XMLHttpRequest()
    http.open('GET', 'http://localhost:8888/api', true)
    http.send()
  }

  render () {
    return (
      <div>
        skldfj
      </div>
    )
  }
}

export default Index
