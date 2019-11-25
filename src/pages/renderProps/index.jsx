import React from 'react'
import Mouse from './components/Mouse'
export default class RenderProps extends React.Component {
  render () {
    return (
      <Mouse render={({x, y}) => {
        return (
          <h1>通过Render Props方法，获取当前鼠标的位置是({x}, {y})</h1>
        )
      }}/>
    )
  }
}