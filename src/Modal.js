import React, { useState } from 'react'

function Modal() {
        const [toEmail, setToEmail] = useState('');
        const [selectedEmails, setSelectedEmails] = useState([]);
      
        const handleInputChange = (e) => {
          setToEmail(e.target.value);
        };
      
        const handleAddEmail = () => {
          if (toEmail.trim() !== '') {
            setSelectedEmails([...selectedEmails, toEmail.trim()]);
            setToEmail('');
          }
        };
      
        const handleRemoveEmail = (index) => {
          const updatedEmails = [...selectedEmails];
          updatedEmails.splice(index, 1);
          setSelectedEmails(updatedEmails);
        };
      
        const [toEmailcc, setToEmailcc] = useState('');
        const [selectedEmailscc, setSelectedEmailscc] = useState([]);
      
        const handleInputChangecc = (e) => {
          setToEmailcc(e.target.value);
        };
      
        const handleAddEmailcc = () => {
          if (toEmailcc.trim() !== '') {
            setSelectedEmailscc([...selectedEmailscc, toEmailcc.trim()]);
            setToEmailcc('');
          }
        };
      
        const handleRemoveEmailcc = (index) => {
          const updatedEmailscc = [...selectedEmailscc];
          updatedEmailscc.splice(index, 1);
          setSelectedEmailscc(updatedEmailscc);
        };
      
      
  return (
    <div className="p-4 m-4 relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white">
        
       
    <div className="flex m-4 justify-between text-start items-center">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">Template Name</h3>
        <p className="text-sm text-gray-500"><i>Helper Text here if it is<br></br>  defined or needed.</i></p>
      </div>
      <div className="w-4/6"> 
        <input className="w-full placeholder-gray-700 p-1 border border-gray-300 rounded" type="text" placeholder="Default input" />
      </div>
    </div>
    <hr></hr>
    <div className="flex m-4 justify-between  text-start items-center">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">To</h3>
        <p className="text-sm text-gray-500"><i>Define who the email will<br></br>be sent to</i></p>
      </div>
      <div className="w-4/6"> 
      <div className="flex flex-wrap">
          {selectedEmails.map((email, index) => (
            <div key={index} className="flex items-center m-1 bg-gray-200 p-2 rounded">
              {email}
              <span className="ml-2 cursor-pointer" onClick={() => handleRemoveEmail(index)}>
                &#x2715;
              </span>
            </div>
          ))}
          <input
            className="w-full placeholder-gray-700 p-1 border border-gray-300 rounded"
            type="text"
            placeholder="Add email"
            value={toEmail}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === 'Enter' && handleAddEmail()}
          />
        </div>
      </div>
    </div>
    <hr></hr>
    <div className="flex m-4 justify-between  text-start items-center">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">To</h3>
        <p className="text-sm text-gray-500"><i>Define who the email will<br></br>be sent to</i></p>
      </div>
      <div className="w-4/6"> 
      <div className="flex flex-wrap">
          {selectedEmailscc.map((email, index) => (
            <div key={index} className="flex items-center m-1 bg-gray-200 p-2 rounded">
              {email}
              <span className="ml-2 cursor-pointer" onClick={() => handleRemoveEmailcc(index)}>
                &#x2715;
              </span>
            </div>
          ))}
          <input
            className="w-full placeholder-gray-700 p-1 border border-gray-300 rounded"
            type="text"
            placeholder="Add email"
            value={toEmailcc}
            onChange={handleInputChangecc}
            onKeyDown={(e) => e.key === 'Enter' && handleAddEmailcc()}
          />
        </div>
      </div>
    </div>
    <hr></hr>
    <div className="flex m-4 justify-between text-start items-center">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">Subject</h3>
        <p className="text-sm text-gray-500"><i>Email subject that will<br></br>display in the recievers inbox.</i></p>
      </div>
      <div className="w-4/6"> 
        <input className="w-full placeholder-gray-700 p-1 border border-gray-300 rounded" type="text" placeholder="Default input" />
      </div>
    </div>
    <hr></hr>
    <div className="flex m-4 justify-between text-start items-center">
      <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">Body</h3>
        <p className="text-sm text-gray-500"><i>Define the email message and text formating<br></br>display in the recievers inbox.</i></p>
      </div>
      <div className="w-4/6"> 
        <textarea className='border-2 w-full h-[20%]'></textarea>
      </div>
    </div>
    <hr></hr>
    <div className="flex m-4 justify-between text-start items-center">
    <div className="w-2/6"> 
        <h3 className="text-lg  mb-2">Email Options</h3>
        <p className="text-sm text-gray-500"><i>Select Present Layout<br></br>Options</i></p>
      </div>
            <div className="w-8/12 flex ">
                <div className=' flex-row'>
                <div className='flex-row flex'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"></input>

                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
                </label><p className='m-2'>Include Standard Email Header</p>

                </div>
                <div className='flex-row flex'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"></input>

                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
                </label><p className='m-2'>Include Standard User's Signature</p>

                </div>
                <div className='flex-row flex'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"></input>

                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
                </label><p className='m-2'>Include Standard Email Footer</p>

                </div>

                </div>
                            </div>
        </div>
        <hr></hr>

    
      </div>
  )
}

export default Modal