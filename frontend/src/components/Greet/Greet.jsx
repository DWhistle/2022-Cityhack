import React from 'react'
import style from './style.module.css'

import { useSelector } from 'react-redux'
import Task from '../TaskPage/TaskList/Task/Task'
import { Link } from 'react-router-dom'

function Greet() {
  const tasks = useSelector(store => store.tasks)
  return (
    <>
      {tasks && tasks.length > 0 &&
        <>
          <div className={style.greetContainer}>

            <div className={style.banner}>
              <div className={style.textBanner}>
                <h1>Импортозамещение – </h1>
                <h1>возможность развития Москвы</h1>
              </div>
            </div>
            
            <div className={style.points}>
            <div className={style.busLine}>
              </div>
              <div className={style.point}>
                <a href='/'>
                  Каталог продукции и услуг
                </a>
              </div>
              <div className={style.busLine}>
              </div>
              <div className={style.point}>
                <a href='/'>
                  Государственная поддержка
                </a>
              </div>
              <div className={style.busLine}>
              </div>
              <div className={style.point}>
                <a href='/'>
                  Каталог событий
                </a>
              </div>
            </div>

            <div className={style.about}>
              <div className={style.aboutNums}>
                <h2>Зарегистрированных предприятий:</h2>
                <h3>5 000</h3>
              </div>
              <div className={style.aboutText}>
                <h2>Для кого портал</h2>
                <p>Портал создан для промышленных предприятий, которые уже работают на территории Москвы и Московской области, а также для потенциальных инвесторов, которые планируют производить промышленную продукцию либо локализовать новое производство на территории региона.</p>
                <p>Сайт также будет полезен для представителей оптово-розничной торговли, санаторно-курортных учреждений, строительного комплекса, которые планируют закупки, в том числе в рамках нацпроектов.</p>
              </div>
            </div>

            <h2 className={style.busHeader}>Бизнес в Москве – это:</h2>

            <div className={style.business}>
              <div className={style.busText}>
                <h2 href='/'>
                до 100 млн руб.
                </h2>
                <p>гарантийная поддержка МСП при кредитовании</p>
              </div>
              <div className={style.busLine}>
              </div>
              <div className={style.busText}>
                <h2 href='/'>
                +18,9%
                </h2>
                <p>прирост инвестиций за 2021 год к 2020 году в сопоставимых ценах</p>
              </div>
              <div className={style.busLine}>
              </div>
              <div className={style.busText}>
                <h2 href='/'>
                50%
                </h2>
                <p>субсидирование затрат на техприсоединение для промышленных предприятия</p>
              </div>
            </div>

            <div className={style.interHeader}>
              <div className={style.interText}>
                <h1 >Товары и услуги местных производителей</h1>
                <p>Один из важных инструментов продвижения промышленной продукции московского производства на внутренние и внешние рынки сбыта</p>
              </div>
              <div>
                  <button type="button" className={style.enter0}>
                      <Link className={style.btnText0} to='/items'>
                        <span>Смотреть все товары</span>                    
                      </Link>
                  </button>
              </div>
            </div>

            {tasks && (
              <div className={style.bestSellers}>
                {tasks.map((el) => <Task key={el.id} {...el} />)}
              </div>
            )}

            <div className={style.banner}>
              <div className={style.textBanner2}>
                <h2>Продвигайте свою продукцию на внутренние и внешние рынки сбыта</h2>
                <button type="button" className={style.bannerButton}>
                      <Link className={style.btnText0} to='/tasks'>
                        <span>Добавить свою компанию</span>                    
                      </Link>
                </button>
              </div>
            </div>

          </div>
        </>
      }
    </>
  )
}

export default Greet
