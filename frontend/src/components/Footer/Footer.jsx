import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './style.module.css'

function Footer() {
  const tasks = useSelector(store => store.tasks)

  return (
    <>
 <div className={style.container}>
<div  className={style.oneFlex}>
  <div>
  <a href="https://www.mos.ru">
          <img className={style.mosru} src='/img/mosru.png' alt=''/>
        </a>
  </div>
  <div className={style.portal}>
  <a href='/'>Портал импортозамещения Москвы и Московской области</a>
  </div>
</div>
<div  className={style.twoFlex}>
<a href='/'>Каталог товаров и услуг</a>
<a href='/'>Меры поддержки</a>
<a className={style.servis} href='/'>О сервисе</a>
<a href='/'>Пресс-центр</a>
<a href='/'>Контакты</a>
</div>
<div className={style.treeFlex}>
<button className={style.buttn}>Вход на платформу</button>
</div>
     </div>
    </>
  )
}

export default Footer
