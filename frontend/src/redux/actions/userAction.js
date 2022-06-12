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
      'Authorization': "admin"
    },
    redirect: 'follow'
  };
  let userFromBack = await fetch("http://localhost:8080/api/v1/user", requestOptions)  
  let response = await userFromBack.json();
  console.log("RESPONSE", response)
  dispatch(getUSerAction(response))
}

export const editUser = (data) => async(dispatch) => {
  console.log(data);
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  let userFromBack = await fetch("http://localhost:8080/api/v1/user", requestOptions)  
  let response = await userFromBack.json()
  dispatch(editUserToServer(response))
  console.log("RESPONSE", response);
}

// редактировать
export const editUserToServer = async (response) => ({
  type: EDIT_USER,
  payload: response,
})
