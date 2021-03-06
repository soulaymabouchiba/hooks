import React from 'react'
import {Card} from "react-bootstrap"              
import '../App.css';
import {Rating} from "@material-ui/lab"
export const movieCard =({movie}) => {
  console.log(movie);
        return (
<Card style={{ width:"200px", reight:"200px" }}>
  <Card.Img  style={{ width:"200px", reight:"200px"}} variant="top" src ={movie.image} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text style={{color:"black", fontSize:"18px",fontFamily:"arial"}}>{movie.description}</Card.Text>
    <Card.Text>{movie.date}</Card.Text>
    <Card.Text>{movie.type}</Card.Text>
<Rating name="read-only" value={movie.rating} readOnly/>
  </Card.Body>
</Card>
        )
    }
    