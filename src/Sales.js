import React from 'react'

function Sales() {
  return (
    <div className="flex w-full p-4 flex-row justify-evenly">
          <div className="flex w-4/12 flex-col items-center">
            
            <div className=" w-48 h-3/4 bg-blue-100  flex items-center justify-center font-extrabold  text-black">
              <span className='text-center text-5xl'>+</span>
            </div>
            <div className='justify-center m-2 h-1/4  text-center'>
            <p className='font-bold  text-md'>Start From Scartch</p>
            <p>Add Paymnets </p>
          </div>
            
          </div>

          <div className="flex w-1/12 items-center justify-center ">
           
            <div className="text-center">
              OR
            </div>
          </div>
        
        <div className='flex flex-col w-7/12 '>
        <div className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)]  h-3/4">
          <div className='m-2 pb-16'>
            <p className='font-bold p-2 text-lg'>Sales/Jobs Templates</p>
            <hr></hr>
            <p className=' text-gray-700 text-sm p-2'> Job notifications Request 1</p>
            <hr></hr>
            <p className='text-gray-700 text-sm p-2'> Job notifiactions Request 2</p>
            <hr></hr>
          </div>
          
         
        </div>
        <div className='justify-center m-2 h-1/4  text-center'>
            <p className='font-bold text-lg'>Use Existing Email templates</p>
            <p>Add Payment link to one of the above templates</p>
          </div>
        </div>
    </div>
  )
}

export default Sales