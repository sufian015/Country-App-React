import React from 'react'
import style from './country.module.css'

function Country({country}) {

     const {name,flags,subregion,population,capital}=country;




  return (
    <article className={style.country}>

     <div>

        <img src={flags.png} alt={name.common} className={style.flag} />+
        <h3>Name: {name.official}</h3>
        <h3>Population:{population}</h3>
        <h3>Capital:{capital}</h3>



     </div>
      
    </article>
  )
}

export default Country
