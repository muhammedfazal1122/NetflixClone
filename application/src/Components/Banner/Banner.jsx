import React, { useEffect, useState } from 'react'
import { API_KEY,ImgUrl } from '../constans/constans'
import './Banner.css'
import axios from '../../axios'

const Banner = () => {
    const [movie, setMovie] = useState()


    useEffect(()=>{
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        // console.log(response.data);
        const randomIndex = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[randomIndex])
      })
    },[])


  return (
    <div 
    style={{backgroundImage:`url(${movie ? ImgUrl+movie.backdrop_path: ""})`}}
     className='Banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='button-class'>
                <button className='button'>play</button>
                <button className='button'>movie list</button>
            </div>
            <div>
                <h1 className='description'>{movie ? movie.overview:""}
                </h1>
            </div>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner