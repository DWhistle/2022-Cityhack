import React from 'react'
import style from './style.module.css'
import { useSelector } from 'react-redux'
import Task from '../TaskPage/TaskList/Task/Task'
import TaskUser from './TaskUser/TaskUser'

function UserList() {
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
