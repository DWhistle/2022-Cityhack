import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { editUser, getUser } from '../../redux/actions/userAction'
import { getAllUsers } from '../../redux/actions/usersAc'
import UserList from '../ListUser/ListUser'
import style from './style.module.css'
import { useParams } from 'react-router-dom'

const UserParam = () => {
  const [isEdit, setIsEdit] = useState(false)
  
    useEffect(() => {
      dispatch(getAllUsers())
    }, [isEdit])
  
  const { id } = useParams()

  const users = useSelector(store => store.users)

  const user = users.filter(el => el.id == id)[0]
  
  const dispatch = useDispatch()
  

  const navigate = useNavigate()

  const data ={
   logo: "/img/moslogo.png"
  }

  const [email, setEmail] = useState(user.data.email)
  const emailChange = (e) => {
    setEmail(e.target.value);
  }

  const [phone, setPhone] = useState(user.data.phone)
  const phoneChange = (e) => {
    setPhone(e.target.value);
  }

  const [description, setDescription] = useState(user.data.description)
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const [inn, setInn] = useState(user.data.inn)
  const innChange = (e) => {
    setInn(e.target.value);
  }

  const [url, setUrl] = useState(user.data.url)
  const urlChange = (e) => {
    setUrl(e.target.value);
  }

  const taskHandler = (e) => {
    e.preventDefault()
    let data = {
      url: url,
      email: email,
      phone: phone,
      inn: inn,
      description: description,
      logo: user.data.logo,
      login: user.login,
      role: user.role,
      status: user.status
    }
    dispatch(editUser(data))
    dispatch(getAllUsers())
    setTimeout(() => {
      setIsEdit(false);
    }, 1500);
  }  

  const cancelEdit = (e) => {
    e.preventDefault()
    setIsEdit(false);
  }

  const startEdit = (e) => {
    e.preventDefault()
    setIsEdit(true);
  }
  


  return (
    <div className={style.greatContainer}>

        <div className={style.container}> 
          { user.data && !isEdit && (
            <div>
              <div className={style.logoName}>
                <div>
                  <img className={style.imgContainer} src={data.logo} alt=''/>
                </div>
                <div>
                  <h1>{user.login}</h1>
                </div>
              </div>
      
      
      
              <div className={style.info}>
                <h2>Информация о компании</h2>
                <p>Почта: {user.data.email}</p>
                <p>Телефон: {user.data.phone}</p>
                <p>Описание: {user.data.description}</p>
                <p>ИНН: {user.data.inn}</p>
                <a href={user.data.url}>Сайт компании</a>
                <br/>
                <button onClick={(e) => startEdit(e)}className={style.btn} type="click">Редактировать</button>
      
              </div>
            </div>
          )}
          {user.data && isEdit && (
            <div>
              <div className={style.logoName}>
                <div>
                  <img className={style.imgContainer} src={data.logo} alt=''/>
                </div>
                <div>
                  <h1>{user.login}</h1>
                </div>
              </div>
      
      
      
              <form className={style.info} onSubmit={(e) => taskHandler(e)}>
                <h2>Информация о компании</h2>
                <div>
                  <label>Почта: </label>
                  <input onChange={(e) => emailChange(e)} type="text" value={email}></input>
                </div>
                <div>
                  <label>Телефон: </label>
                  <input onChange={(e) => phoneChange(e)} type="text" value={phone}></input>
                </div>
                <div>
                  <label>Описание: </label>
                  <input onChange={(e) => descriptionChange(e)} type="text" value={description}></input>
                </div>
                <div>
                  <label>ИНН: </label>
                  <input onChange={(e) => innChange(e)} type="text" value={inn}></input>
                </div>
                <div>
                  <label>Сайт компании: </label>
                  <input onChange={(e) => urlChange(e)} type="text" value={url}></input>
                </div>
                <button className={style.btn} type="submit">Отправить</button>
                <button onClick={(e) => cancelEdit(e)}className={style.btn} type="click">Отменить</button>
      
                
              </form>
            </div>
          )}
      
          <div className={style.list}>
            <UserList></UserList>
          </div>
        </div>
    </div>

  )
}

export default UserParam
