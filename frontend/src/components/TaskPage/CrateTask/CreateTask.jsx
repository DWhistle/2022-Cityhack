import React from 'react'
import style from './style.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addTaskThunk } from '../../../redux/actions/tasksAc'

function CreateTask () {

  const [task, setTask] = useState({})
  const [tasks, setTasks] = useState([{title: "", description: "", category: ""}, {title: "", description: "", category: ""}])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const inputChange = (e, index) => {
    console.log("CHANGE", index, e.target.name, e.target.value)
    setTasks((prev) => {
      prev.map((el, index) => {
        console.log("WOW")
        return el;
        // if(index == _index){
        //   el[e.target.name] = e.target.value;
        //   return el; 
        // } else return el;
      })
    })
  }

  const taskHandler = (e) => {
    e.preventDefault()
    console.log("WHAT WE GOT", tasks)
    dispatch(addTaskThunk(task))
    navigate('/tasks')
  }
 
  return (
    <div>
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
            <label className={style.label}>КАТЕГОРИЯ</label>
            <select className={style.input} value={el.category} name='category' onChange={(e) => inputChange(e, index)}>
              <option disabled value='Выбирите категорию'>Выбирите категорию</option>
              <option selected value="Антиквариат">Техника</option>
              <option value="Искусство">Расходники</option>
              <option value="Предметы роскоши">Электроника</option>
              <option value="Техника">Легкая промышленность</option>
              <option value="Другое">Другое</option>
            </select>
            <br/>
          </div>
        </div>
      )}

      <button onClick={(e) => taskHandler(e)} className={style.btn} type="submit">ОПУБЛИКОВАТЬ</button>
    </div>
  )
}

export default CreateTask
