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
        <div className={style.MetaContainer}>
        <div className={style.container}> 
          { user.data && !isEdit && (
            <div>
              <div className={style.logoName}>
                <div>
                  <img className={style.imgContainer} src="/img/deflogo.png" alt=''/>
                </div>
                <div>
                  <h1>{user.login}</h1>
                </div>
              </div>
      
      
      
              <div className={style.info}>
                <p>??????????: {user.data.email}</p>
                <p>??????????????: {user.data.phone}</p>
                <p>????????????????: {user.data.description}</p>
                <p>??????: {user.data.inn}</p>
                <a href={user.data.url}>???????? ????????????????</a>
                <br/>
                <br/>
                <button onClick={(e) => startEdit(e)}className={style.btn} type="click">??????????????????????????</button>
      
              </div>
            </div>
          )}
          {user.data && isEdit && (
            <div>
              <div className={style.logoName}>
                <div>
                  <img className={style.imgContainer} src='/img/deflogo.png' alt=''/>
                </div>
                <div>
                  <h1>{user.login}</h1>
                </div>
              </div>
      
      
      
              <form className={style.info} onSubmit={(e) => taskHandler(e)}>
                <div>
                  <label>??????????: </label>
                  <input onChange={(e) => emailChange(e)} type="text" value={email}></input>
                </div>
                <div>
                  <label>??????????????: </label>
                  <input onChange={(e) => phoneChange(e)} type="text" value={phone}></input>
                </div>
                <div>
                  <label>????????????????: </label>
                  <input onChange={(e) => descriptionChange(e)} type="text" value={description}></input>
                </div>
                <div>
                  <label>??????: </label>
                  <input onChange={(e) => innChange(e)} type="text" value={inn}></input>
                </div>
                <div>
                  <label>???????? ????????????????: </label>
                  <input onChange={(e) => urlChange(e)} type="text" value={url}></input>
                </div>
                <button className={style.btn} type="submit">??????????????????</button>
                <button onClick={(e) => cancelEdit(e)}className={style.btn} type="click">????????????????</button>
      
                
              </form>
            </div>
          )}
      
        </div>
        <div>
          <p className={style.texts}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales augue nulla. Fusce maximus, erat vulputate tempus bibendum, libero est condimentum quam, non porta ante augue a est. Etiam a varius leo. Proin commodo quis nulla nec pulvinar. Aliquam convallis tempus arcu vitae cursus. Pellentesque sed neque fringilla, efficitur diam sit amet, pretium purus. Pellentesque id dui eget tellus dictum cursus. Donec quam leo, pharetra sit amet lorem a, molestie scelerisque nisl. Aliquam commodo sapien dolor, viverra posuere velit gravida nec.
              <br/>
              <br/>
              Phasellus quis dignissim magna, placerat sodales lorem. Aenean vehicula, ex nec ornare efficitur, enim nunc suscipit ex, eget pulvinar velit mauris ac ex. Suspendisse laoreet dapibus laoreet. Aliquam volutpat nibh sit amet dolor elementum, vitae accumsan sem efficitur. Ut quis porta arcu. Morbi neque ex, volutpat sit amet ultrices non, semper in orci. Phasellus ornare sem lorem, eget malesuada ligula aliquet id. Suspendisse potenti. Donec rhoncus viverra gravida. Vivamus ipsum mauris, ornare eget urna in, sodales iaculis risus. Etiam pellentesque gravida est, at aliquam turpis volutpat a. Etiam viverra commodo tempus. Ut vestibulum aliquet ante, vel commodo erat pulvinar ut. Vivamus tempor fringilla vulputate. Proin pellentesque risus a lacus ullamcorper iaculis sed nec quam. Maecenas mollis libero efficitur felis commodo imperdiet.</p>
        </div>
        </div>
          <div className={style.list}>
            <UserList></UserList>
          </div>
    </div>

  )
}

export default UserParam
