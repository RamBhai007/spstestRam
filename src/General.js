import React, { useState } from 'react'

import { MdSubdirectoryArrowRight } from "react-icons/md";

function General() {
    const [customValue, setCustomValue] = useState('');
    const [defaultValues, setDefaultValues] = useState(['10%', '25%', '50%','100%']);

    const handleRemove = (index) => {
    const updatedDefaults = [...defaultValues];
        updatedDefaults.splice(index, 1);
        setDefaultValues(updatedDefaults);
    };

    const handleInputChange = (event) => {
        setCustomValue(event.target.value);
    };

    const handleAddCustomValue = () => {
        setDefaultValues([...defaultValues, customValue]);
        setCustomValue('');
    };
  return (
   <>
    <div className=" m-4 px-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h3 className="text-lg  flex items-center text-blue-400 font-bold pl-6 p-3">Payment Processing in SPS Options</h3>
        <hr></hr>
        <div className="flex m-2 p-2 justify-between items-center">
        <div className="w-11/12">
            <p className='text-sm  m-2'>Customer information manager is active in Authorize.net </p>
        </div>
        <div className="w-1/12 flex">
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
            </label>
        </div>
        </div>
        <hr></hr>
        <div className="flex m-2 px-2 justify-between items-center">
        <div className="w-11/12">
            <p className='text-sm m-2'>Authorize.net account is configured to validate billing address</p>
        </div>
        <div className="w-1/12 flex">
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
            </label>
        </div>
        </div>
        <div className="flex m-2 px-2 mb-4 justify-between items-center">
        <div className="w-11/12 flex  items-center">
            <MdSubdirectoryArrowRight className="  ml-4" /><p className='text-sm m-2 text-gray-500 flex items-center'> Customer information manager is active in Authorize.net </p>
        </div>
        <div className="w-1/12 flex">
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer"></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
            </label>
        </div>
        </div>

    </div>
    <div className=" m-4 mt-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
        <h3 className="text-lg pl-6 p-2 font-bold text-blue-400  mb-2">Email Payment Request Options</h3>
        <hr></hr>
        <div className="flex m-2 px-2 justify-between items-center">
            <div className="w-4/12">
                <div className=' flex-col '>
                    <p className='text-base pl-2 m-2 '>Show Option to<br></br> Pay by Credit Card</p>
                    <p className='text-sm text-gray-500 p-2  m-2'><i>Allow Credit Card Payments <br></br> for Remote Payments Links</i> </p>
                </div>
            </div>
            <div className="w-8/12 flex">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"></input>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
                </label>
            </div>
        </div>
        <hr></hr>
        <div className="flex m-2 px-2 justify-between items-center">
            <div className="w-4/12">
                <div className=' flex-col '>
                    <p className='text-base pl-2 m-2 '>Show Option to<br></br> Pay by ACH</p>
                    <p className='text-sm text-gray-500 pl-2 m-2'><i>Allow ACH Bank Payments <br></br> in Remote Payments Links</i></p>
                </div>
            </div>
            <div className="w-8/12 flex">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"></input>

                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-700"></div>
                </label>
            </div>
        </div>
        <hr></hr>
        <div className="flex m-2 px-2 justify-between items-center">
            <div className="w-4/12">
                <div className=' flex-col '>
                    <p className='text-base m-2 pl-2 '>Deposit To Account</p>
                    <p className='text-sm text-gray-500 pl-2 m-2'><i>Payments Accepted<br></br> through request links will<br></br>despoits to this account.</i></p>
                </div>
            </div>
            <div className="w-8/12 flex">
                <select className='border-inherit border-2 rounded-lg w-full'>
                    <option value= "default" >--Select--</option>
                </select>
            </div>
        </div>
        <hr></hr>
        <div className="flex m-2 px-2 justify-between items-center">
            <div className="w-4/12">
                <div className=' flex-col '>
                    <p className='text-base m-2 pl-2 '>Deposit Percentage <br></br> Options</p>
                    <p className='text-sm text-gray-500 pl-2 m-2'><i>Define the percentage Options <br></br>your teamwill be able to<br></br>request from a customer.</i></p>
                </div>
            </div>
            <div className="w-8/12 flex">
                <div className="flex flex-col">
                   <div className=' flex flex-row'>
                     {defaultValues.map((value, index) => (
                        <div key={index} className="border-2 p-1 mr-2 text-sm mb-2 flex items-center rounded-md ">
                        {value} <span onClick={() => handleRemove(index)} className="cursor-pointer px-1 text-red-500">X</span>
                        </div>
                    ))}
                    <input
                        type="text"
                        value={customValue}
                        onChange={handleInputChange}
                        placeholder=""
                        className="border-2 ml-2 mb-3 text-sm w-14 rounded-md"
                    />
                    <button onClick={handleAddCustomValue} className=" text-lgflex items-center mb-2 ">
                        +
                    </button>
                   </div>
                    <div className='border-2 rounded-md p-1'>
                    <p className=' text-xs pl-1 text-gray-500 '>Default Deposit Request</p>
                        <select
                        className="w-full text-sm"
                        
                    >
                        <option value="">50%</option>
                        {defaultValues.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                        ))}
                    </select>
                    </div>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className="flex m-2 pb-4 px-2 justify-between items-center">
            <div className="w-4/12">
                <div className=' flex-col '>
                    <p className='text-base m-2 pl-2 '>Credit Card Processing <br></br> Fees</p>
                    <p className='text-sm text-gray-500 pl-2 m-2'><i>Calculate Credit Card fee<br></br>into the customer's total</i></p>
                </div>
            </div>
            <div className="w-8/12 gap-4 flex">
                <div className='w-[20%] flex items-center'>
                    <div className='border-inherit border-2 rounded-lg w-full '>
                        <p className='text-xs text-center'>Processing Fees</p>
                        <p className='text-sm pr-2  text-end '>3%</p>
                    </div>
                </div>
                <div className='w-[80%] flex flex-col gap-2'>
                    <div className='border-2 rounded-md pl-2 pd-2'>
                    <p htmlFor="creditCardFees" className="text-xs  text-gray-500 p-1">GL Fees Acccount</p>
                    <select className='w-full text-sm pb-1'>
                        <option value= "default" >50530-Credit Card Fees</option>
                    </select>
                    </div>
                    <div className='border-2 rounded-md pl-2 pd-2'>
                    <p htmlFor="creditCardFees" className="text-xs  text-gray-500 p-1">Fees Label</p>
                    <p className='  text-sm'>Credit Card Fee</p>
                    </div>
                    

                </div>
                
            </div>
        </div>

    </div>




   </>
  )
}

export default General