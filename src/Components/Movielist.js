import Mvc from "./Moviecard";
import { useState } from "react";
import Add from "./Add";
import { list } from "./DataList";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Mvl({input}){
    let navigate=useNavigate()
    const [movie, setMovie] = useState(list);
    const addMovie=(newMovie)=>{
        setMovie([...movie,newMovie])
    }

    return(
    <>
    <Add addMovie={addMovie}/>
    <div className="mvl">
    {movie.filter((el)=>el.title.toUpperCase().includes(input.toUpperCase()) || el.rate>=input)
    .map((film)=> (<Mvc x={film}/>))}
</div>
    <Button variant="danger" onClick={()=>navigate(-1)}>Back</Button>
</>
    );
}

export default Mvl