import React, { useEffect } from 'react'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import Task from '../TaskPage/TaskList/Task/Task.jsx'

function UserList() {
  const dispatch = useDispatch()
  const tasks = useSelector(store => store.tasks)

  
  return (
    <>{tasks.length === 0 &&
      <div className={style.noTask}>Упс, по такой категории задач нету !</div>
    }
      {tasks && (
        <div className={style.taskListContainer}>
          {tasks.map((el) => <Task key={el.id} {...el} />)}
        </div>
      )}
    </>
  )
}

export default UserList
