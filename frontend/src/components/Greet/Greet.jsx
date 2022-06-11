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
        
            <h1 className={style.interHeader}>Топ-продавцы</h1>

            <div className={style.bestSellers}>
              <div className={style.cardSellers}>
                  <img src='/img/ava1.png' alt=''/>
                  <h3>Слава К.</h3>
                  <p>Основные лоты на аукционах – nft изображения, звуковые дорожки для исполнителей</p>
                  <Link className={style.textLink} to='/workers/1'>
                  <div>Перейти&nbsp;&nbsp;
                    <span>
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.20711C20.0976 7.81658 20.0976 7.18342 19.7071 6.79289L13.3431 0.428932C12.9526 0.0384078 12.3195 0.0384078 11.9289 0.428932C11.5384 0.819457 11.5384 1.45262 11.9289 1.84315L17.5858 7.5L11.9289 13.1569C11.5384 13.5474 11.5384 14.1805 11.9289 14.5711C12.3195 14.9616 12.9526 14.9616 13.3431 14.5711L19.7071 8.20711ZM0 8.5H19V6.5H0V8.5Z" fill="#58DC5D"/>
                      </svg>
                    </span>
                  </div>
                  </Link>
              </div>

              <div className={style.cardSellers}>
                  <img src='/img/ava2.png' alt=''/>
                  <h3>КФХ “АгроФуд”</h3>
                  <p>Свежие продукты оптом и в розницу с доставкой по югу России</p>
                  <div>Перейти&nbsp;&nbsp;
                    <span>
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.20711C20.0976 7.81658 20.0976 7.18342 19.7071 6.79289L13.3431 0.428932C12.9526 0.0384078 12.3195 0.0384078 11.9289 0.428932C11.5384 0.819457 11.5384 1.45262 11.9289 1.84315L17.5858 7.5L11.9289 13.1569C11.5384 13.5474 11.5384 14.1805 11.9289 14.5711C12.3195 14.9616 12.9526 14.9616 13.3431 14.5711L19.7071 8.20711ZM0 8.5H19V6.5H0V8.5Z" fill="#58DC5D"/>
                      </svg>
                    </span>
                  </div>
              </div>

              <div className={style.cardSellers}>
                  <img src='/img/ava3.png' alt=''/>
                  <h3>Anonimus #0570</h3>
                  <p>Единственный в России сертифицированный поставщик таманской голубой глины</p>
                  <div>Перейти&nbsp;&nbsp;
                    <span>
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.20711C20.0976 7.81658 20.0976 7.18342 19.7071 6.79289L13.3431 0.428932C12.9526 0.0384078 12.3195 0.0384078 11.9289 0.428932C11.5384 0.819457 11.5384 1.45262 11.9289 1.84315L17.5858 7.5L11.9289 13.1569C11.5384 13.5474 11.5384 14.1805 11.9289 14.5711C12.3195 14.9616 12.9526 14.9616 13.3431 14.5711L19.7071 8.20711ZM0 8.5H19V6.5H0V8.5Z" fill="#58DC5D"/>
                      </svg>
                    </span>
                  </div>
              </div>

              <div className={style.cardSellers}>
                  <img src='/img/ava4.png' alt=''/>
                  <h3>Tesla, Inc.</h3>
                  <p>An American electric vehicle and clean energy company based in Palo Alto, California</p>
                  <div>Перейти&nbsp;&nbsp;
                    <span>
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7071 8.20711C20.0976 7.81658 20.0976 7.18342 19.7071 6.79289L13.3431 0.428932C12.9526 0.0384078 12.3195 0.0384078 11.9289 0.428932C11.5384 0.819457 11.5384 1.45262 11.9289 1.84315L17.5858 7.5L11.9289 13.1569C11.5384 13.5474 11.5384 14.1805 11.9289 14.5711C12.3195 14.9616 12.9526 14.9616 13.3431 14.5711L19.7071 8.20711ZM0 8.5H19V6.5H0V8.5Z" fill="#58DC5D"/>
                      </svg>
                    </span>
                  </div>
              </div>
            </div>

            <div className={style.interHeader}>
              <h1 >Популярные лоты</h1>
              <div>
              <button type="button" className={style.enter0}>
                      <Link className={style.btnText0} to='/tasks'>
                        <span>Смотреть все</span>                    
                      </Link>
                  </button>
              </div>
            </div>

              {tasks && (
                <div className={style.bestSellers}>
                  {tasks.map((el) => <Task key={el.id} {...el} />)}
                </div>
              )}

          </div>
        </>
      }
    </>
  )
}

export default Greet
