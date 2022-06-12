import style from './style.module.css'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { delUser } from '../../redux/actions/userAction'
import { CustomLink } from './CustomLink/CustomLink'

  const linksList = [
    {
      path: '/workers',
      label: 'О сервисе',
      isUser: false,
      role: 3,
    },
    {
      path: '/workers',
      label: 'Пресс-центр',
      isUser: false,
      role: 3,
    },
    {
      path: '/create',
      label: 'Добавить товар',
      isUser: true,
      role: 3,
    },
  ]
function NavBar() {
  const [links, setLinks] = useState(linksList)
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const signOut = () => {
    window.localStorage.clear()
    dispatch(delUser())
    // dispatch(signOut())
    navigate('/')
  }



  return (
    <>
      <div className={style.navBar}>

        {links.map((el) =>
          user == null
            ? (el.isUser == false && (
              <CustomLink key={el.path} to={el.path} className={style.link}>
                {el.label}
              </CustomLink>
            ))
            : <CustomLink key={el.path} to={el.path} className={style.link}>
                {el.label}
              </CustomLink>
        )}

        {/* {user && (
          <button onClick={signOut} className={style.link}>
            Выход
          </button>
        )} */}
      </div>
    </>
  )


}

export default NavBar


