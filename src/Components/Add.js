import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import { useState } from 'react';


export default function Add({addMovie}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[title,setTitle]=useState("");
  const[describtion,setDescribtion]=useState("");
  const[imgUrl,setTImgUrl]=useState("");
  const[rate,setRate]=useState("");

  const handleAdd=()=>{
    addMovie({title,describtion,imgUrl,rate})
    handleClose();
  }

  return (
    <div>
        <Button variant="danger" onClick={handleShow}>
        Add a movie card
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className='am'>
          <label htmlFor='title'>title</label>
          <input type='text' placeholder='Enter the title here' onChange={(e)=>setTitle(e.target.value)}/>
          <label htmlFor='title'>describtion</label>
          <input type='text' placeholder='Enter the describtion here' onChange={(e)=>setDescribtion(e.target.value)}/>
          <label htmlFor='title'>imgUrl</label>
          <input type='text' placeholder='Enter the imgUrl here' onChange={(e)=>setTImgUrl(e.target.value)}/>
          <label htmlFor='title'>rate</label>
          <input type='text' placeholder='Enter the rate here' onChange={(e)=>setRate(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
