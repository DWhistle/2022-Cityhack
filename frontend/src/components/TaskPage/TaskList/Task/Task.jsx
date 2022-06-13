import React from 'react'
import style from './style.module.css'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Task(task) {
  let users = useSelector(store => store.users)
  console.log(users)
  const company = users.filter(el => el.id == task.creator_id)[0]
  console.log("SOLO TASK", company)
  let shortName = ''
  if(task.data.name.length > 20) {
    shortName = task.data.name.slice(0, 30)
    shortName += '...'
  }  else shortName = task.data.name;
  return (
    <div className={style.cardLots}>
<div>

      <img className={style.imgContainer} src='/img/basiccard.png' alt=''/>
      <h2 className={style.h2Container}>{shortName}</h2>
      <h3 className={style.h3Container}>{company.login}</h3>
      {/* <p>{description}</p> */}

      <div>
        <table>
          <tr className={style.trCon}>
            <th>Отрасль:</th>
            <td>{task.data.description}</td>
          </tr>
          <tr>
            <th>ОКПД2:</th>
            <td>{task.okpd2}</td>
          </tr>
        </table>
      </div>
      </div>
      <div className={style.btnGroup2}>
      <Link className={style.linkOff} to={`/tasks/${task.id}`}>
        <button type="button" className={style.join2}>
            <span className={style.btnText}>Запросить цену</span>
        </button>
      </Link>
      </div>

    </div>
  )
}

export default Task
