import React from 'react'
import style from './style.module.css'
import { Link, useParams } from 'react-router-dom'


function TaskUser({ id, title, category, description, image, deadline, createdAt }) {


  return (
    <div className={style.cardLots}>
<div>

      <img className={style.imgContainer} src={image} alt=''/>
      <h2 className={style.h2Container}>{title}</h2>
      <h3 className={style.h3Container}>'прямой аукцион'</h3>
      {/* <p>{description}</p> */}

      <div>
        {/* <p>Отрасль:&nbsp;&nbsp;
          <span className={style.spanAdd}>Автосредства транспортные специального назначения</span>
        </p>
        <p>ОКПД2:&nbsp;&nbsp;
          <span className={style.spanAdd}>29.20.23.110</span>
        </p> */}
        <table>
          <tr className={style.trCon}>
            <th>Отрасль:</th>
            <td>Автосредства транспортные специального назначения</td>
          </tr>
          <tr>
            <th>ОКПД2:</th>
            <td>29.20.23.110</td>
          </tr>
        </table>
      </div>
      </div>
      <div className={style.btnGroup2}>
      <Link className={style.linkOff} to={`/tasks/${id}`}>
      </Link>
      </div>

    </div>
  )
}

export default TaskUser
