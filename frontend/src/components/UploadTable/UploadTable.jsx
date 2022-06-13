import React, { useEffect, useState } from 'react'
import style from './style.module.css'
import * as XLSX from 'xlsx/xlsx.mjs';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskThunk } from '../../redux/actions/tasksAc';

const UploadTable = () => {
  const [items, setItems] = useState([]);
  const [isFile, setIsFile] = useState(false)
  const user = useSelector((state) => state.user) 
  useEffect(() => {

  }, [setIsFile])

  const dispatch = useDispatch()
  
  console.log("ITEMS", items)

  const readExcel = (file, e) => {
    // eslint-disable-next-line no-unused-expressions
    e.preventDefault()
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
      setTimeout(() => {
        setIsFile(true)
      }, 1000);
    });
  };
  
  const [drag, setDrag] = useState(false)

  const dragStartHadnler = (e) =>{
    e.preventDefault()
    setDrag(true)
  }

  const dragLeaveHadnler = (e) =>{
    e.preventDefault()
    setDrag(false)
  }

  const inputChange = (e, _index) => {
    console.log("EEEE", e)
    setItems((prev) => {
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
    console.log("WHAT WE GOT", items)
    let data = items.map(el => {
      return {
        name: el.name,
        okpd2: el.okpd.match(/[1234567890.]/g).join('').slice(0, -1),
        description: el.category,
        img: '/deflogo.png',
        category: 'category'
      }  
    });
    console.log("DATA", data, user);
    dispatch(addTaskThunk(user, data))
    setItems([])
    alert("Данные ушли на модерацию")
    // navigate('/tasks')
  }

  
  return(
    <div className={style.container}>
<div className={style.upload}>
      <h2 className={style.h2} >Информация о товаре</h2>
{/* <input type='file' accept='.xlsx, .xls' onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }} /> */}
{ drag 
?<div className={style.drop}
onDragStart={e => dragStartHadnler(e)}
onDragLeave={e => dragLeaveHadnler(e)}
onDragOver={e => dragStartHadnler(e)}
onDrop={e => {
  const file = e.dataTransfer.files[0];
  readExcel(file,e);
}}
>Отпустите файл xlsx, чтобы загрузить его</div>
 : <div className={style.drop2}
 onDragStart={e => dragStartHadnler(e)}
 onDragLeave={e => dragLeaveHadnler(e)}
 onDragOver={e => dragStartHadnler(e)}
 
 >Перетащите файл xlsx, чтобы загрузить его</div>

}
</div>
<div className={style.desc}>
<h2 className={style.h2}>Инструкция</h2>
  <p>Для ускорения работы с системой mos.torg, добавляйте товары с помошью csv и xls таблиц. При заполнении таблицы, строго придерживайтесь структуры, не удаляйте столбцы, иначе чудо технологий не случится.  </p>
  <p>Скачать пример таблицы можно ниже.</p>
</div>




        {items.map((el, index) =>
  
      <div className={style.mainContainer}>
      <div className={style.taskContainer}>
        <label className={style.label}>НАЗВАНИЕ</label>
                <input 
                  className={style.input}
                  type='text'
                  name='title'
                  value={el.name}
                  onChange={(e) => inputChange(e, index)}
                />
                <label className={style.label}>ОПИСАНИЕ</label>
                <input 
                  className={style.input}
                  type='text'
                  name='category'
                  value={el.category}
                  onChange={(e) => inputChange(e, index)}
                ></input>
                <label className={style.label}>ОКПД2</label>
                <input 
                  className={style.input}
                  type='text'
                  name='okpd'
                  value={el.okpd}
                  onChange={(e) => inputChange(e, index)}
                />
                <br/>
              </div>
            </div> 
         )}


      

      <button onClick={(e) => taskHandler(e)} className={style.btn} type="submit">ОПУБЛИКОВАТЬ</button>


    </div>

    
  )

}

export default UploadTable
