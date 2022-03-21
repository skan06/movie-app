import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Mvl from './Movielist';

  function Search() {
  const [search,setSearch]=useState("");
  
  return (
    <div>
      <div className='srch'>
      
        <Form.Control type="email"
          placeholder="Searching by name or by rate"
          onChange={(e)=>setSearch(e.target.value)}
          />
          </div>
          <br/>
          <Mvl input={search}/>
    </div>
  )
}
export default Search;