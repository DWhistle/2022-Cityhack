import React, { useState } from 'react'
import style from './style.module.css'
import * as XLSX from 'xlsx/xlsx.mjs';

const UploadTable = () => {
  const [items, setItems] = useState([]);
  console.log(items);
  const readExcel = (file, e) => {
    // eslint-disable-next-line no-unused-expressions
    e.preventDefault
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
  
  const [drag, setDrag] = useState(false)

  const dragStartHadnler = (e) =>{
    e.preventDefault()
    setDrag(true)
  }

  const dragLeaveHadnler = (e) =>{
    e.preventDefault()
    setDrag(false)
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
  <button className={style.btn}>Скачать</button>
</div>
    </div>

    
  )

}

export default UploadTable
