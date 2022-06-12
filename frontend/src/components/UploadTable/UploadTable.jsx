import React, { useState } from 'react'
import style from './style.module.css'
import * as XLSX from 'xlsx/xlsx.mjs';

const UploadTable = () => {
  const [items, setItems] = useState([]);
  console.log(items);
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
  
  return(
    <div className={style.container}>
<div>
<input type='file' accept='.xlsx, .xls' onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }} />
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
