import React, { useEffect, useState } from 'react'

function Search({onSearch}) {
     const [searchText,setSearchText]=useState("")

     const handleChange=(e)=>{

          setSearchText(e.target.value)

     }

     useEffect(()=>{

          onSearch()

     },[searchText])




  return (
    <div style={{textAlign:'center'}}>
      <input type="text" onChange={handleChange} value={searchText} placeholder='search country' />
    </div>
  )
}

export default Search
