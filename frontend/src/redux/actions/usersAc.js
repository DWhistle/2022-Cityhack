import { ALL_USERS, CHANGE_STATUS } from '../types/usersTypes'
import { SEARCH_WORKER } from '../types/userTypes'

export const getAllUsersAction = (data) => ({
    type: ALL_USERS,
    payload: data
})

export const getAllUsers = () => async (dispatch) => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  let userFromBack = await fetch("http://localhost:8080/api/v1/user/all", requestOptions)  
  let response = await userFromBack.json();
  console.log("ALL USERS", response)
  dispatch(getAllUsersAction(response.users))
}


export const changeStatus = (data) => async(dispatch) => {
  console.log(data);
  var requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    redirect: 'follow'
  };

  let userFromBack = await fetch("http://localhost:8080/api/v1/user/status", requestOptions)  
  let response = await userFromBack
  // dispatch(changeStatusToServer(response))
  console.log("RESPONSE", response);
}

// редактировать
export const changeStatusToServer = async (response) => ({
  type: CHANGE_STATUS,
  payload: response,
})
