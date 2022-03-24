import React from "react";
import {Card,Button} from 'react-bootstrap'
import {Link} from "react-router-dom"

function Mvc({x}){
    
    return(
        <div className="mvc">

<Card style={{ width: '18rem' }}>
  <Card.Img className="imc" variant="top" src={x.imgUrl} />
  <Card.Body>
    <Card.Title>{x.title}</Card.Title>
    <Card.Text>
      {x.description} <br/>
      Rate: {x.rate}
    </Card.Text>
    <Link to={`/Trailer/${x.id}`}><Button variant="danger">Trailer</Button></Link>
    
  </Card.Body>
</Card>
        </div>
    )
}
export default Mvc;

