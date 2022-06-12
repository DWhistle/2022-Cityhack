import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { changeStatus, getAllUsers } from '../../redux/actions/usersAc';
import style from './style.module.css'


const ModerCompany = (user) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState(user.status)
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

  let link = "user/" + user.id

return(
  <form onSubmit={(e) => approveHandler(e)} className={style.container}>
    <div>
      <img className={style.imgContainer} src={"/img/moslogo.png"} alt=''/>
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
        <select onChange={(e) => statusChange(e)} value={status} class="turnintodropdown">
            <option value="PENDING">Ожидает модератора</option>
            <option value="APPROVED">В ожидании</option>
            <option value="MAILED">Письмо отправлено</option>
            <option value="JOINED">Присоединился</option>
            <option value="REJECTED">Отказано</option>
        </select>
        </div>




    </div>
    </div>
        <button className={style.btn} type="submit">Изменить статус</button>
  </form>
  )
}

export default ModerCompany
