import React, { useEffect, useState } from 'react'

import Country from './Country';
import style from './country.module.css'
import Search from './Search';

const url="https://restcountries.com/v3.1/all"

function FetchData() {

     const [countries,setCountry]=useState([]);
     const [loading,setLoading]=useState(false);
     const [error,setError]=useState(null);

     const fetchData=async ()=>{

          try {

               const response=await fetch(url)
               const data= await response.json();
               setLoading(true)
               setCountry(data)
               // console.log(countries)
               
          } catch (error) {
               setLoading(false)
               setError(error)

          }



     }


     useEffect(()=>{

          fetchData();
         
     },[])

     // const handleSearch=(searchValue)=>{

     // let value=searchValue.toLowercase();
     // const searchCountry=countries.filter((country)=>{
     //      const countryName=country.name.common.toLowercase();
     //      return countryName.startsWith(value);

     //      // country name namey jodi ei value gulo star hoy aglo return korbe
     // })
     // setCountry(searchCountry)

     // }

     


  return (

     <>
     <h1 style={{textAlign:'center',color:'purple'}}> Country App</h1>
     <section className={style.countries}>

          
          {countries.map((country)=> <Country country={country} key={country.ccn3} />)}

     </section>



     </>
  )
}

export default FetchData
