import React, { useState } from 'react'

import { FaRegFilePdf } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";

import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
function Auth() {
    const[edit ,setEdit] = useState(true);
  return (
    <>
      <div className="flex m-4 p-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] justify-between items-center">
          <div className="w-2/6"> 
            <h3 className="text-sm mx-4 ">Help Documents</h3>
          </div>
          <div className="w-4/6"> 
          <h1 className="text-xs flex items-center my-2 text"><FaRegFilePdf className="mr-1" />Authroize.net Generating keys</h1>
          <h1 className="text-xs flex items-center my-2 text"><FaRegFilePdf className="mr-1" />Authroize.net Help</h1>
          
          </div>
      </div>
      <div className="p-4 m-4 relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
        <div >
            {!edit ? (
              <div>
                <button onClick={() => setEdit(!edit)}  className="px-2 py-1 mr-1 flex items-center absolute top-4 right-32 rounded-md text-blue-500 bg-white border border-blue-500">
                  Cancel
                </button>

                <button  className="px-6 py-1 mr-1 flex items-center absolute top-4 right-8 rounded-md text-white bg-blue-900 border  hover:bg-blue-500 hover:text-white hover:border-white">
                  Save
                </button>
              </div>
            ) : (
              <button onClick={() => setEdit(!edit)} className="px-2 py-1 mr-1 flex items-center absolute top-4 right-4 rounded-md text-blue-500 bg-white border border-blue-500 hover:bg-gray-100">
                <IoLockClosedOutline className="mr-2" /> Edit Settings
              </button>
            )}
        </div>
        <br></br>
    <div className="flex m-4">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">API Mode</h3>
        <p className="text-sm text-gray-500"><i>If API is live, CC entries are <br></br>processing actual payments.</i></p>
      </div>
      <div className="w-4/6 flex items-center"> 
      <div>
      <h1 className="text-lg font-bold text-blue-950 mb-2">author<span className='text-green-400'>`</span>ze<span className="text-yellow-300">.</span>net</h1>
      {!edit ? (
            <div className='flex flex-row'>
            <button className={`bg-green-700 border-2 flex items-center pr-8 text-white px-2 py-1  rounded `}>
              <FaCheckCircle className="mr-2" />Test
            </button>
            <button className={`bg-white border-2 flex items-center pr-8 text-gray-400 px-2 py-1  rounded `}>
              <FaRegCheckCircle className="mr-2" />Live
            </button>           
            </div>
        ) : (
            <>
            
            <p className="text-xl  text-green-600">Authorize.net API is Live</p>
            </>
        )}
      </div>
    </div>
    </div>
    <hr></hr>
    <div className="flex m-4 justify-between items-center">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">API Login</h3>
        <p className="text-sm text-gray-500"><i>Login for your authroize .net<br></br> account.</i></p>
      </div>
      <div className="w-4/6"> 
        <input className="w-full placeholder-gray-700 p-1 border border-gray-300 rounded" type="text" placeholder="Default input" />
      </div>
    </div>
    <hr></hr>
    <div className="flex m-4 justify-between items-center">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">API Transaction Key</h3>
        <p className="text-sm text-gray-500"><i>Helper Text here if it is<br></br>defined or needed.</i></p>
      </div>
      <div className="w-4/6"> 
        <input className="w-full placeholder-gray-700 p-1 border border-gray-300 rounded" type="text" placeholder="Default input" />
      </div>
    </div>
    <hr></hr>
    <div className="flex m-4 justify-between items-center">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">Client Key</h3>
        <p className="text-sm text-gray-500"><i>Helper text here if it is<br></br>defined or needed.</i></p>
      </div>
      <div className="w-4/6"> 
        <input className="w-full placeholder-gray-700 p-1 border border-gray-300 rounded" type="text" placeholder="Default input" />
      </div>
    </div>
    <hr></hr>
    <div className="flex m-4 justify-between items-center">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">Version</h3>
        <p className="text-sm text-gray-500"><i>Authroize.net Version</i></p>
      </div>
      <div className="w-4/6"> 
        <input className="w-full placeholder-gray-700 p-1 border border-gray-300 rounded" type="text" placeholder="Default input" />
      </div>
    </div>
      </div>
    </>
  )
}

export default Auth