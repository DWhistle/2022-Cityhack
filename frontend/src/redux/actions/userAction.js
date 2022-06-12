import axios from 'axios'
import { ADD_USER, DEL_USER, SIGNIN_USER, GET_USER, EDIT_USER } from '../types/userTypes'

// signup - регистрация пользователя
export const addUserAction = (response) => ({
  type: ADD_USER,
  payload: response,
})

export const addUser = (formData) => async (dispatch) => {
  // const userFromBack = await axios.post('http://localhost:3001/users/signup', { formData })
  let userFromBack = {
    id: 1,
    name: 'Федор Достоевский',
    resume: 'Музей Русского импрессионизма',
    email: 'impress@gmail.com',
    role: 3,
    avatar: '/img/ava0.png',
  }
  const response = userFromBack.data
  dispatch(addUserAction(response))
}

// signout - выход пользователя
export const delUserAction = (user) => ({
  type: DEL_USER,
  payload: user
})

export const delUser = () => (dispatch) => {
  console.log('Delete user')
  dispatch(delUserAction())
}

// signup - авторизация пользователя
export const signinUserAction = (response) => ({
  type: SIGNIN_USER,
  payload: response,
})

export const signinUser = (signinForm) => async (dispatch) => {
  var data = new FormData();
  data.append('login', signinForm.login);
  var requestOptions = {
    method: 'POST',
    body: data,
    redirect: 'follow'
  };

  let userFromBack = await fetch("http://localhost:8080/api/v1/login", requestOptions)  
  let response = await userFromBack.json();
  console.log("BACK:", response)
  dispatch(signinUserAction(response))
} 

// получить пользователя
export const getUSerAction = (response) => ({
  type: GET_USER,
  payload: response,
})

export const getUser = () => async (dispatch) => {
  var requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': dispatch
    },
    redirect: 'follow'
  };
  let userFromBack = await fetch("http://localhost:8080/api/v1/user", requestOptions)  
  let response = await userFromBack.json();
  dispatch(getUSerAction(response))
}

export const editUser = (data) => async(dispatch) => {
  try {
    const reductUser = await editUserToServer(data)
    dispatch({
      type: EDIT_USER,
      payload: reductUser
    })
  } catch (err) {
    
    console.log(err);
  }
}

// редактировать
export const editUserToServer = async (data) => {
  // const response = await fetch('http://localhost:3001/users/edit/'+ data.id, {
  //   method: 'PATCH',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //   },
  //   credentials: 'include',
  //   body: JSON.stringify(data)
  // })
  // if (response.ok) {
  //   return await response.json()
  // } else {
  //   throw Error('Noooooooooooo :(((')
  // }
  return {
    id: 1,
    name: 'Федор Достоевский',
    resume: 'Музей Русского импрессионизма',
    email: 'impress@gmail.com',
    role: 3,
    avatar: '/img/ava0.png',
  }
}
