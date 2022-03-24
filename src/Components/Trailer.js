import { Button } from 'react-bootstrap';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { list } from './DataList'

export default function Trailer() {
  const params=useParams();
  const foundMovie=list.find((el)=>el.id==params.id);
  let navigate=useNavigate();
  return (
    <div className='tr'>
      <h1 style={{color:"red",textDecoration:"underline"}}>{foundMovie.title}</h1>
      <iframe width="560" 
      height="315" 
      src={foundMovie.trailer}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      <div className='desc'>
        <p>{foundMovie.desc}</p>
      </div>
      <div style={{marginTop:"20px"}}>
      <Button variant="danger" onClick={()=>navigate(-1)}>Back</Button>
      </div>
    </div>
  )
}
