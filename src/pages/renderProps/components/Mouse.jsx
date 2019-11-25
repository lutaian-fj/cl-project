import React from 'react'
class Mouse extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      x: 0,
      y: 0
    }
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX, y: e.clientY
    })
  }
  
  render () {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}
export default Mouse