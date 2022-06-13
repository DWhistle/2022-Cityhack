import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { allTasks } from '../../../../redux/actions/tasksAc'
import style from './style.module.css'

function Search() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (input === '') {
      dispatch(allTasks())
    }

  }, [input])
  return (
    <div className={style.inputContainer}>
      <input placeholder='поиск...' onChange={(e) => setInput(e.target.value)} value={input} type="text" className={style.input} />
    </div>
  )
}

export default Search
