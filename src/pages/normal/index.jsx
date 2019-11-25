import React from 'react'
class Detail extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX, 
      y: e.clientY
    })
  }

  render () {
    const { x, y = 0 } = this.state
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <h1>当前鼠标的位置是({x}, {y})</h1>
      </div>
    )
  }
}
export default Detail