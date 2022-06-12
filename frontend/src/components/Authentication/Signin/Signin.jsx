import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {signinUser}  from '../../../redux/actions/userAction'
import style from './style.module.css'

const Signin = () => {
  const [log, setLog] = useState({
    email: '',
    password: '',
    role: 'Поставщик'
  })
  const [one, setOne] = useState(style.labelLine)
  const [two, setTwo] = useState(style.labelCont)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user) 


  useEffect (() => {
    if (user) {
      // navigate('/')
    }
  }, [user])

  const inputLogChange = (e) => {
    setLog((prev) => ({...prev, [e.target.name] : e.target.value}))
  }
  
  const logHandler = (e) => {
    e.preventDefault()
    console.log(log);
    dispatch(signinUser({ login: log.email })) 
    navigate('/')
  }


const handler = (e) => {
if(e.target.innerText === 'Поставщик'){
 setOne(style.labelLine)
 setTwo(style.labelCont)
 setLog((prev) => ({...prev, 'role' : e.target.innerText}))
}
if(e.target.innerText === 'Модератор'){
  setOne(style.labelCont)
  setTwo(style.labelLine)
  setLog((prev) => ({...prev, 'role' : e.target.innerText}))
}
}

  return (
    <div className={style.signinContainer}>
    <form className={style.form} onSubmit={(e) => logHandler(e)}>
      <div className={style.container}>
        <label className={style.systemContainer }>Вход в Систему</label>
      </div>
      <div className={style.containerLabel}>
        <label onClick={e => handler(e)} className={one}>
        Поставщик
        </label>
        <label onClick={e => handler(e)} className={two}>
          Модератор
        </label>
      </div>
      <div className={style.inputContainer}>
        <input
          type=""
          name="email"
          value={log.email}
          placeholder={'Введите логин'}
          onChange={inputLogChange}
          className={style.input}
        />
      </div>
      <div className={style.inputContainer}>
        <input 
          type=""
          name="password"
          value={log.password}
          placeholder={'Введите пароль'}
          onChange={inputLogChange}
          className={style.input}
        />
      </div>
      <div >
        <button type="submit" className={style.button}>
          Продолжить
        </button>
      </div>
    </form>
    </div>
  )
}

export default Signin
