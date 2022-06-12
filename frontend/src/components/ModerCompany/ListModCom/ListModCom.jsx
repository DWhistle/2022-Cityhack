import React, { useEffect } from 'react'
import ModerCompany from '../ModerCompany'
import style from './style.module.css'
import { useSelector } from 'react-redux'


const ListModCompany = () => {
  const users = useSelector(store => store.users)
  useEffect(() => {
  }, [users])
  
  console.log("USERS IN LIST", users);
  return(
    <>
    {users.length === 0 && 
    <div> Список компаний пуст</div>
    }
    {users != null && (
      <div className={style.ListContainer}>
        {users.map((user) => <ModerCompany {...user} key={user.id}/>)}
      </div>
    )
      
    }
    </>
)
  }

  export default ListModCompany
