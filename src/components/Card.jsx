// import React from 'react'
/* eslint-disable react/prop-types */

const Card = ({movie}) => {
  return (
    <>
    <div className='border w-[200px] rounded-[10px] mx-auto transform transition hover:scale-110 duration-300 cursor-pointer bg-[#417de2]'>
          <img src={movie.Poster} alt="" className='object-cover' />
          <div className='px-3 py-2'> 
            <p className='uppercase'>{movie.Type}</p>
            <p>{movie.Title}</p>
          </div>
        </div>
    </>
  )
}

export default Card
