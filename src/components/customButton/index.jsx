import React, { useState } from 'react'
import { Button } from 'antd'
const CustomButton = (props) => {
  const [count, setCount] = useState(0)

  const handleButtonClick = () => {
    setCount(count + 1)
    props.onClick()
  }
  
  return (
    <div>
      <Button type='primary'
      onClick={handleButtonClick}>点击{count}</Button>
    </div>
  )
}

export default CustomButton
