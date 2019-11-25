import React, { useState, useEffect } from 'react'
import { Button, Table } from 'antd'
// import axios from 'axios'
import useSchool from '../../hooks/useSchool'


const CustomButton = (props) => {
  const NAMES = ['kobe', 'TD', 'manu', 'parker']
  const COLUMNS = [
    {title: '部门名称', dataIndex: 'bmmc', key: 'bmmc'},
    {title: '所属校区', dataIndex: 'ssxq_mc', key: 'ssxq_mc'}
  ]
  const [count, setCount] = useState(0)
  const [name, setName] = useState(NAMES[0])
  // const [data, setData] = useState([])
  const [schoolId, setSchoolId] = useState('58850bfcbe5e40d79d1f6c85db394266')
  const [loading, data] = useSchool(schoolId)

  useEffect(() => {
    document.title = name
    console.log('title change')
  })

  // useEffect(() => { // 加载数据
  //   console.log('*******加载数据*****')
  //   axios.get(`http://esp-edu-nation-base-dms.debug.web.nd/v1.0/xx/${schoolId}/xxbm?ssyx=&bmlx=&bmmc=`)
  //   .then(res => {
  //     setData(res.data || [])
  //   })
  //   return () => {
  //     console.log('*******************卸载')
  //   }
  // }, [schoolId])

  const handleFirstBtnClick = () => { // 测试
    setCount(count + 1)
  }

  const handleSecondBthClick = () => {
    let index = NAMES.indexOf(name)
    index = index === 3 ? -1 : index
    setName(NAMES[index + 1])
  }

  const handleThirdBthClick = () => {
    setSchoolId('3fb2d6d3a042417a8a26606a2724bc7f')
  }

  return (
    <div>
      <Button type='primary' onClick={handleFirstBtnClick}>改变次数，当前次数{count}</Button>
      <Button type='primary' onClick={handleSecondBthClick} style={{marginLeft: '1rem'}}>改变名字，当前名字{name}</Button>
      <Button type='primary' onClick={handleThirdBthClick} style={{marginLeft: '1rem'}}>切换学校</Button>
      <Button type='primary' onClick={() => {window.location.href = '#/normal'}} style={{marginLeft: '1rem'}}>跳转</Button>
      <div style={{marginTop: '1rem'}}>
        <Table columns={COLUMNS} dataSource={data || []} total={data.length} bordered/>
      </div>
    </div>
  )
}

export default CustomButton
