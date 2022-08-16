import { Dashboard } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSurveyData } from './surveySlice'

const Survey = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchSurveyData())
  }, [dispatch])

  return (
    <div>Survey</div>
  )
}

export default Survey