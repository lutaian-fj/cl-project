import React from 'react'
import { withMouse } from './HocUtils'
class Test extends React.Component {
  render () {
    const {x, y} = this.props.mouse || {}
    return (
      <h1>通过高阶组件的方式获取当前鼠标的位置是({x}, {y})</h1>
    )
  }
}

export default withMouse(Test)