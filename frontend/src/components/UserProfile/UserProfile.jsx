import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import UserList from '../ListUser/ListUser'
import TaskList from '../TaskPage/TaskList/TaskList'
import style from './style.module.css'
import TaskUser from './TaskUser/TaskUser'

const UserProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // // пользователь который зарегестрирован/авторизирован
  const user = useSelector((state) => state.user)
  useEffect(() => { }, [])

  const data ={
  email: "apopov@mail.ru",
  name: 'ssss',
   phone: "+79345674223", 
   url: "http://apopov.ru", 
   inn: "213", 
   description: "Продавец", 
   logo: "/img/moslogo.png"
  }

  return (
  <div className={style.container}> 
    <div>
      <div className={style.logoName}>
    <div>

      <img className={style.imgContainer} src={data.logo} alt=''/>
    </div>
    <div>
  <h1>Компания {data.name}</h1>
    </div>
    </div>


<div className={style.info}>
  <h2>Информация о компании</h2>
  <p>Почта: {data.email}</p>
  <p>Телефон: {data.phone}</p>
  <p>Описание: {data.description}</p>
  <p>ИНН: {data.inn}</p>
  <a href={data.url} >Сайт компании</a>
</div>
</div>

<div className={style.list}>
{/* <h1>Товары компании</h1> */}
<UserList></UserList>

</div>


  </div>
  )
}

export default UserProfile
