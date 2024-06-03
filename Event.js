
import React from 'react'
const Event = () => {
  return ( 
<>
    
<div className='text-wrap flex w-[30%] background-color bg-black'>
  <img src = "Roll.png"  alt= "roll"  />
  <div className='text-white p-2 m-2 font-family:Cambria'>
  <h1 className='text-4xl '> Explore Your First Event </h1> <br></br>
<br></br> <br></br>
  <h2 className='text-5xl font-bold'> Event Name </h2> <br></br> <br></br>
  <img src = "ven.png"  alt= "venue"  />
  <br></br>
  <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
<br></br>
<p className='text-2xl '> Artist Lineup</p>
<br></br>
<div className='flex size-20 items-center m-4'>
<img src = "ar1.png"  alt= "artist"  />
<img src = "ar2.png"  alt= "artist"  />
<img src = "ar3.png"  alt= "artist"  />
</div> <br></br> <br></br>
<div className='flex size-20 gap-20 '>
<img src = "qr.png"  alt= "artist"  />
<img src = "join.png"  alt= "artist"  />

</div>
  </div>
  </div>
    </>
      
     )
}

export default Event;
