import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {  ImgUrl } from '../constans/constans'

import './RowPost.css'

function RowPost(props) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.urls)
          .then((response) => {
            console.log(response.data);
            setMovie(response.data.results || []); 
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    movie.map((obj)=>
                        <img className= {props.isSmall? 'smallPoster':'poster' } alt='poster' src={`${ movie ? ImgUrl+obj.backdrop_path : ""}`} />
                    )
                }
                
            </div>
        </div>
    )
}

export default RowPost
