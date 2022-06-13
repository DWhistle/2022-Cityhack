import React from 'react'
import CreateTask from '../TaskPage/CrateTask/CreateTask'
import UploadTable from '../UploadTable/UploadTable'
import style from './style.module.css'

const BigUpload = () => {

  return(
    <div className={style.container}>
<div className={style.div1}>
  <CreateTask></CreateTask>
</div>
<div>
  <UploadTable></UploadTable>
</div>
    </div>
  )
}

export default BigUpload
