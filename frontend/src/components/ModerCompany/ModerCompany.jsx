import React from 'react'
import style from './style.module.css'


const ModerCompany = () => {
  return(
<div className={style.container}>
<div>
<img className={style.imgContainer} src={"/img/moslogo.png"} alt=''/>
</div>
<div className={style.flextext}>
<div className={style.flextext1}>ООО “ПрицепПрод”</div>
<div className={style.flex3}>
<div>
  <p>125412, Москва, Ижорская, 3</p>
  <p>ИНН: 7711037272  </p>
</div>
<div>
<p>+7 999 999 99 99</p>
<p>company.ru</p>
</div>
<div>
<p>не подтвержден</p>
</div>
<div className={style.check}>
<div>Х</div>
<div>O</div>
</div>
</div>
</div>










</div>

  )
}

export default ModerCompany
