import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { changeStatus, getAllUsers } from '../../redux/actions/usersAc';
import style from './style.module.css'


const ModerCompany = (user) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(user.status)
  console.log("STATUS", status)
  // let statusParse = '';
  // switch(status){
  //   case "PENDING": statusParse = "Ожидает модератора"
  //     break;
  //   case "APPROVED": statusParse = "В ожидании"
  //     break;
  //   case "MAILED": statusParse = "Письмо отправлено"
  //     break;
  //   case "JOINED": statusParse = "Присоединился"
  //     break;
  //   case "REJECTED": statusParse = "Отказано"
  //     break;
  //   default: statusParse = "В ожидании"
  // }
  const approveHandler = (e) => {
    e.preventDefault();
    let data = {
      status: status,
      user: user.login,
      reason: '',
    }
    console.log("DATA", data)
    dispatch(changeStatus(data))
    setTimeout(() => {
      dispatch(getAllUsers())
    }, 1000);
  }

  const statusChange = (e) => {
    setStatus(e.target.value);
  }

  const cancelHandle = (e) => {
    let reason = prompt('Укажите причину отказа:')
    let data = {
      status: "REJECTED",
      user: user.login,
      reason: reason,
    }
    console.log("DATA", data)
    dispatch(changeStatus(data))
    setTimeout(() => {
      dispatch(getAllUsers())
    }, 1500);
  }

  const approveHandle = (e) => {
    let data = {
      status: "APPROVED",
      user: user.login,
      reason: "",
    }
    console.log("DATA", data)
    dispatch(changeStatus(data))
    setTimeout(() => {
      dispatch(getAllUsers())
    }, 1500);
  }


  let link = "user/" + user.id

return(
  <form onSubmit={(e) => approveHandler(e)} className={style.container}>
    <div>
      <img className={style.imgContainer} src={"/img/deflogo.png"} alt=''/>
    </div>

    <div className={style.flextext}>
      <Link to={link}>
        <div className={style.flextext1}>{user.login}</div>
      </Link>
      <div className={style.flex3}>

        <div>
          <p>125412, Москва, Ижорская, 3</p>
          <p>ИНН: {user.data.inn}</p>
        </div>

        <div>
          <p>{user.data.phone}</p>
          <a href={user.data.url}>{user.data.url}</a>
        </div>

        <div>
        {/* <select onChange={(e) => statusChange(e)} value={status} class="turnintodropdown">
            <option value="PENDING">Ожидает модератора</option>
            <option value="APPROVED">В ожидании</option>
            <option value="MAILED">Письмо отправлено</option>
            <option value="JOINED">Присоединился</option>
            <option value="REJECTED">Отказано</option>
          </select> */}
        </div>
          {status == "PENDING" && (
            <p className={style.status}>не подтвержден</p>
          )}
          {status == "REJECTED" && (
            <p className={style.statusRej}>отклонен</p>
          )}
          {status == "APPROVED" && (
            <p className={style.statusAppr}>подтвержден</p>
          )}
      </div>
    </div>
    {status == "PENDING" && (
      <div className={style.choice}>
          <svg onClick={(e) => cancelHandle()} width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L9.5 9.5M9.5 9.5L17 2M9.5 9.5L17 17M9.5 9.5L2 17" stroke="#C92723" stroke-width="4"/>
          </svg>

          <svg onClick={(e) => approveHandle()} width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7.5L9.5 15L21 2" stroke="#58DC5D" stroke-width="4"/>
          </svg>
      </div>        
    )}
    {status != "PENDING" && (
      <div className={style.choice}></div>
    )}

  </form>
  )
}

export default ModerCompany
