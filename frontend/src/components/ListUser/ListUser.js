import React, { useEffect } from 'react'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import TaskUser from './TaskUser/TaskUser'

function UserList() {
  const dispatch = useDispatch()
  const tasks = useSelector(store => store.tasks)

  
  return (
    <>{tasks.length === 0 &&
      <div className={style.noTask}>Упс, по такой категории задач нету !</div>
    }
      {tasks && (
        <div className={style.taskListContainer}>
          {tasks.map((el) => <TaskUser key={el.id} {...el} />)}
        </div>
      )}
    </>
  )
}

export default UserList
