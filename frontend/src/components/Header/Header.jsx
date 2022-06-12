import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { delUser } from '../../redux/actions/userAction'
// import { useSelector } from 'react-redux'
import NavBar from '../Navbar/NavBar'
import style from './style.module.css'


function Header() {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const signOut = (e) => {
    e.preventDefault();
    console.log("HELLO")
    window.localStorage.clear()
    dispatch(delUser())
    // dispatch(signOut())
    navigate('/')
  }
  return (
    <div className={style.headerContainer}>
      <div  className={style.logoGroup}>
        <img className={style.logo1} src='/img/moslogo.png' alt=''></img>
        <div className={style.logo2}>
          <Link to="/" className={style.logoText}>mos.torg</Link>
        </div>
      </div>

      <NavBar />

      <div>
        <a href="https://www.mos.ru">
          <img className={style.mosru} src='/img/mosru.png' alt=''/>
        </a>
      </div>

      <div>
        <a href="https://www.mos.ru/dipp/">
          <img className={style.dep} src='/img/dep.png' alt=''/>
        </a>
      </div>
      <div>
        <a href="https://otkroimosprom.ru/">
          <img className={style.mosprom} src='/img/mosprom.png' alt=''/>
        </a>
      </div>
      {user ? (
        <>
        <Link to='/profile'>
          <div>
            <button type="button" className={style.enter}>
                <span className={style.btnText}>Личный кабинет</span>
            </button>
          </div>
        </Link>
          <div>
            <button onClick={(e) => signOut(e)} type="button" className={style.exit}>
                <span className={style.btnText}>Выйти</span>
            </button>
          </div>
        </>
      ):(
        <Link to='/signin'>
          <div>
            <button type="button" className={style.enter}>
                <span className={style.btnText}>Вход на платформу</span>
            </button>
          </div>
        </Link>
      )}
      
    </div>
  )
}

export default Header
