import React from 'react'
import ModerCompany from '../ModerCompany'
import style from './style.module.css'


const ListModCompany = () => {
  const list =[1,2,3]
  return(
    <>
    {list.length === 0 && 
    <div> Список компаний пуст</div>
    }
    {list && (
      <div className={style.ListContainer}>
        {list.map((el)=> <ModerCompany className={style.moder} key={el}/>)}
      </div>
    )

    }
    </>
)
  }

  export default ListModCompany
