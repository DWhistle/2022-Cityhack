import axios from 'axios'
import { ADD_TASK, ALL_TASKS, TASK_UP, FILTER_TASK, SEARCH_TASK } from '../types/tasksTypes'

export const allTasks = () => async (dispatch) => {
    // let data = [
    //   {
    //     id: 1,
    //     title: 'Прицеп бортовой двухосный',
    //     category: 'Антиквариат',
    //     description: 'Ваза I в до н.э., растоможена. Достал со дна политик.',
    //     deadline: '2022-04-24 16:30:00',
    //     image: '/img/basiccard.png',
    //     isDone: false,
    //     status: 1,
    //     owner: 1,
    //     worker: null,
    //     createdAt: '2022-01-15 02:00:00',
    //     updatedAt: '2022-01-15 02:00:00',
    //     USER: {
    //       name: 'Слава К.',
    //       avatar: '/img/ava1.png'
    //     }
    //   },
    //   {
    //     id: 2,
    //     title: 'Прицеп бортовой двухосный',
    //     category: 'Автомобиль',
    //     description: 'Культовый хотхэтч немецкой сборки на 245 л.с.',
    //     deadline: '2022-04-24 16:30:00',
    //     image: '/img/basiccard.png',
    //     isDone: false,
    //     status: 1,
    //     owner: 2,
    //     worker: 6,
    //     createdAt: '2022-01-17 02:00:00',
    //     updatedAt: '2022-01-17 02:00:00',
    //     USER: {
    //       name: 'КФХ “АгроФуд”',
    //       avatar: '/img/ava2.png'
    //     }
    //   },
    //   {
    //     id: 3,
    //     title: 'Прицеп бортовой двухосный',
    //     category: 'Антиквариат',
    //     description: 'Швейцарская монета 20 раппенов 2011 года.',
    //     deadline: '2022-04-24 16:30:00',
    //     image: '/img/basiccard.png',
    //     isDone: false,
    //     status: 3,
    //     owner: 5,
    //     worker: 7,
    //     createdAt: '2022-01-19 02:00:00',
    //     updatedAt: '2022-01-19 02:00:00',
    //     USER: {
    //       name: 'Anonimus #0570',
    //       avatar: '/img/ava3.png'
    //     }
    //   },
    //   {
    //     id: 4,
    //     title: 'Прицеп бортовой двухосный',
    //     category: 'Антиквариат',
    //     description: 'Известный NFT-токен на холсте маслом.',
    //     deadline: '2022-04-24 16:30:00',
    //     image: '/img/basiccard.png',
    //     isDone: false,
    //     status: 3,
    //     owner: 5,
    //     worker: 7,
    //     createdAt: '2022-01-19 02:00:00',
    //     updatedAt: '2022-01-19 02:00:00',
    //     USER: {
    //       name: 'Tesla, Inc.',
    //       avatar: '/img/ava4.png'
    //     }
    //   },
    // ]
    var requestOptions = {
      method: 'GET',
      headers: {  
        'Content-Type': 'application/json'
      },
      redirect: 'follow'
    };
    let userFromBack = await fetch("http://localhost:8080/api/v1/products/all", requestOptions)  
    let response = await userFromBack
    console.log("BACK:", response)
    // dispatch({
    //   type: ALL_TASKS,
    //   payload: response
    // })
}
export const addTask = (response) => ({
  type: ADD_TASK,
  payload: response,
})

export const addTaskThunk = (user, data) => async (dispatch) => {

  let result = {
    products: data,
    creator: user.id
  }
  console.log("TO SEND", result);
  var requestOptions = {
    method: 'POST',
    headers: {  
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(result),
    redirect: 'follow'
  };

  let userFromBack = await fetch("http://localhost:8080/api/v1/products", requestOptions)  
  let response = await userFromBack
  console.log("BACK:", response)
  // dispatch(addTask(response))
}

export const upTask = (response) => ({
  type: TASK_UP,
  payload: response,
})

export const upTaskThunk = (task_id) => async (dispatch) => {
  // const userFromBack = await axios.patch('http://localhost:3001/tasks', { task_id, user_id })
  // const response = ''
  dispatch(upTask(task_id))
}

export const filteredTask = (data) => (dispatch) => {

  dispatch({
    type: FILTER_TASK,
    payload: data
  })
}

export const testTaskThunk = (data) => async (dispatch) => {
  var requestOptions = {
    method: 'GET',
    headers: {
      'Authorization': "admin"
    },
    redirect: 'follow'
  };
  let userFromBack = await fetch("http://localhost:8080/api/v1/products", requestOptions)  
  let response = await userFromBack.json();
  console.log("BACK:", response)
}


