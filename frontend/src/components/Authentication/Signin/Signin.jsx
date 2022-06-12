import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {getUser, signinUser}  from '../../../redux/actions/userAction'
import style from './style.module.css'
import * as XLSX from 'xlsx/xlsx.mjs';

const Signin = () => {
  const [log, setLog] = useState({
    email: '',
    password: '',
    role: 'Поставщик'
  })
  const [one, setOne] = useState(style.labelLine)
  const [two, setTwo] = useState(style.labelCont)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user) 


  useEffect (() => {
    if (user) {
      // navigate('/')
    }
  }, [user])

  const inputLogChange = (e) => {
    setLog((prev) => ({...prev, [e.target.name] : e.target.value}))
  }
  
  const logHandler = (e) => {
    e.preventDefault()
    console.log(log);
    dispatch(signinUser({ login: log.email })) 
    dispatch(getUser())
    navigate('/')
  }


const handler = (e) => {
if(e.target.innerText === 'Поставщик'){
 setOne(style.labelLine)
 setTwo(style.labelCont)
 setLog((prev) => ({...prev, 'role' : e.target.innerText}))
}
if(e.target.innerText === 'Модератор'){
  setOne(style.labelCont)
  setTwo(style.labelLine)
  setLog((prev) => ({...prev, 'role' : e.target.innerText}))
}
}

// const fileRead = () => {
//   let filik = file
//   let workbook = XLSX
//   console.log(workbook);
//   // let reader = new FileReader()
//   // reader.readAsText(filik)
//   // reader.onload = function(){
//   //   console.log(reader.result);
//   // }
  
// }
const [items, setItems] = useState([]);

const readExcel = (file) => {
  const promise = new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const bufferArray = e.target.result;

      const wb = XLSX.read(bufferArray, { type: "buffer" });

      const wsname = wb.SheetNames[0];

      const ws = wb.Sheets[wsname];

      const data = XLSX.utils.sheet_to_json(ws);

      resolve(data);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });

  promise.then((d) => {
    setItems(d);
  });
};
console.log(items);
  return (
    <div className={style.signinContainer}>
    <form className={style.form} onSubmit={(e) => logHandler(e)}>
      <div className={style.container}>
        <label className={style.systemContainer }>Вход в Систему</label>
      </div>
      <div className={style.containerLabel}>
        <label onClick={e => handler(e)} className={one}>
        Поставщик
        </label>
        <label onClick={e => handler(e)} className={two}>
          Модератор
        </label>
      </div>
      <div className={style.inputContainer}>
        <input
          type=""
          name="email"
          value={log.email}
          placeholder={'Введите логин'}
          onChange={inputLogChange}
          className={style.input}
        />
      </div>
      <div className={style.inputContainer}>
        <input 
          type=""
          name="password"
          value={log.password}
          placeholder={'Введите пароль'}
          onChange={inputLogChange}
          className={style.input}
        />
      </div>
      <div >
        <button type="submit" className={style.button}>
          Продолжить
        </button>
      </div>
    </form>
        {/* <input type="file" onChange={e => setFiles(e.target.files[0])} /> */}
        <input type='file' accept='.xlsx, .xls' onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }} />
        {/* <button onClick={fileRead}>Click</button> */}
        
    </div>
  )
}

export default Signin
