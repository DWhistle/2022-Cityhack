import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addTaskThunk, testTaskThunk } from '../../../redux/actions/tasksAc'
import okpd from './okpd.json'
import Select from 'react-select'

function CreateTask () {
  let options = []
  for(var i in okpd[0]){
    if(i.length < 6) options.push({value: i, label: i + ':' + okpd[0][i]})
  }
  console.log(options);

  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState([{title: "", description: "", category: ""}])
  const user = useSelector((state) => state.user) 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputChange = (e, _index) => {
    console.log("EEEE", e)
    setTasks((prev) => {
      return prev.map((el, index) => {
        if(index == _index){
          el[e.target.name] = e.target.value;
          return el; 
        } else return el;
      })
    })
  }

  const taskHandler = (e) => {
    e.preventDefault()
    console.log("WHAT WE GOT", tasks)
    let data = tasks.map(el => {
      return {
        name: el.title,
        okpd2: el.category,
        description: el.description,
        img: '/deflogo.png',
        category: 'category'
      }  
    });
    console.log("DATA", data, user);
    dispatch(addTaskThunk(user, data))
    setTasks([{title: "", description: "", category: ""}])
    alert("Данные ушли на модерацию")
    // navigate('/tasks')
  }

  const debugHandler = (e) => {
    dispatch(testTaskThunk())
    
  }

  const plusItem = (e) => {
    e.preventDefault()
    setTasks((prev) => {
      let result = [...prev, {title: "", description: "", category: ""}]
      return result 
    })

  }
 
  return (
    <div className={style.main}>
      {tasks.map((el, index) => 
        <div className={style.mainContainer}>
          <div className={style.taskContainer}>
            <label className={style.label}>НАЗВАНИЕ</label>
            <input 
              className={style.input}
              type='text'
              name='title'
              value={el.title}
              onChange={(e) => inputChange(e, index)}
            />
            <label className={style.label}>ОПИСАНИЕ</label>
            <textarea 
              className={style.input}
              type='text'
              name='description'
              value={el.description}
              onChange={(e) => inputChange(e, index)}
            ></textarea>
            <label className={style.label}>ОКПД2</label>
            {/* <select className={style.input} value={el.category} name='category' onChange={(e) => inputChange(e, index)}>
              <option disabled value='Выбирите категорию'>Выбирите категорию</option>
              <option selected value="Антиквариат">Техника</option>
              <option value="Искусство">Расходники</option>
              <option value="Предметы роскоши">Электроника</option>
              <option value="Техника">Легкая промышленность</option>
              <option value="Другое">Другое</option>
            </select> */}
            <Select name='category' onChange={(e) => inputChange({target: {name: 'category', value: e.value}}, index)} options={options} />
            <br/>
          </div>
        </div>
      )}
      <div className={style.btnCont}>
        <button onClick={(e) => plusItem(e)} className={style.btn} type="submit">ЕЩЕ ТОВАР</button>

        <button onClick={(e) => taskHandler(e)} className={style.btn} type="submit">ОПУБЛИКОВАТЬ</button>
        
        <button onClick={(e) => debugHandler(e)} className={style.btn} type="submit">DUBUG</button>

      </div>
    </div>
  )
}

export default CreateTask
