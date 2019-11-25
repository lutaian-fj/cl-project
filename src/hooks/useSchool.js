import { useState, useEffect } from 'react'
import axios from 'axios'

const useSchool = (schoolId) => {
  const [loading, setFetching] = useState(true)
  const [schoolData, setSchoolData] = useState([])
  useEffect(() => {
    console.log('*******customHook加载数据*****')
    setFetching(true)
    axios.get(`http://esp-edu-nation-base-dms.debug.web.nd/v1.0/xx/${schoolId}/xxbm?ssyx=&bmlx=&bmmc=`)
    .then(res => {
      setSchoolData(res.data || [])
      setFetching(false)
    })
  }, [schoolId])
  return [loading, schoolData]
}
export default useSchool