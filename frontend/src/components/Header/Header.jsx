import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
import NavBar from '../Navbar/NavBar'
import style from './style.module.css'


function Header() {
  const navigate = useNavigate()
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
    
      <Link to='/profile'>
        <div>
          <button type="button" className={style.enter}>
              <span className={style.btnText}>Вход на платформу</span>
          </button>
        </div>
      </Link>
      
    </div>
  )
}

export default Header
