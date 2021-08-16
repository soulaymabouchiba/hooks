import React from 'react';
import { movieCard } from './movieCard';
import '../App.css';

export const movieList = ({movies, searchTitle, searchRating}) => {
    console.log(movies);
        return (
            <div style={{display: "flex", alignContent: "center", justifyContent: "space-around" }}>
                {movies      
                 
         .filter((el) =>
            el.rating >= searchRating &&
            el.name.toLowerCase().includes(searchTitle.toLowerCase().trim())
            
            
            )
           
                    .map((el)=>(
                 <movieCard movie={el} key={el.id}/>
                    ))}
            </div>
        );
    }
