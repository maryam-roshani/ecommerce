import React from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Star = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
  return (
    <div>
        {[...Array(5)].map((star, index) => {
            const currentRating = index + 1;
           return (
            <label>
                <input 
                    type="radio" 
                    name="rating" 
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    className='d-none'
                 />
                <FaStar 
                    size={50} 
                    className='star pe-auto' 
                    color={currentRating <= (hover || rating) ? "#ffc107" : "e4e5e9"} 
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                />
            </label>
           )
        })}
        <p>Your Rating is {rating}</p>
    </div>
  )
}

export default Star