import React, { useState } from 'react'

function Task() {
    const [slider,setSlider] = useState(0);
    const images = [
        'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg',
        'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      ];
     const handelClickNext = ()=>{
        if (slider < images.length-1) {
            setSlider(slider+1)
        }
      }
      const handelClickPrev = ()=>{

        if (slider > 0) {
            setSlider(slider-1)
        }
       

      }
  return (
    <div>
        <img src={images[slider]} alt="" />
        <button onClick={handelClickNext}>next</button>
        <button onClick={handelClickPrev}>prev</button>

    </div>
  )
}

export default Task