import { useState } from "react";
import Sales from "./Sales";
import Quotes from "./Quotes";

function Payments() {
  const list = ['Quotes/Estimates', 'Sales/Jobs', 'Invoices', 'Customer Statements'];
  const [tab, setTab] = useState('');

  const handleClick = (item) => {
    setTab(item);
  };

  const renderTab=()=>{
    if(tab==="Quotes/Estimates"){
      return(
        <Quotes></Quotes>
      );
    }else if(tab==="Sales/Jobs"){
      return(
        <Sales></Sales>
      );
    }else if(tab==="Invoices"){
      return(
        <Sales></Sales>
      );
    }else if(tab==="Customer Statements"){
      return(
        <Sales></Sales>
      );
    }
  }

  return (
    <>
      <div className="m-4 h-2/4 p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <p className='text-lg mb-8 m-4 text-gray-600 '>
            To set up a payment request email, an <span className="underline">Email Template</span> must be setup,
            and<br></br> include a <span className="underline">request link</span> containing a payment step.
          </p>
          <p className=' font-bold  mb-6 px-4 text-sm'>How will this Payment request email be used?</p>
        </div>

        <div className='flex-row pl-4'>
          {list.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`px-4 pr-4 border-blue-400 ${tab === item ? 'border-l-2 border-t-2 border-r-2 rounded-t ' : 'border-b-2 '} `}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex h-2/4">
          <div className="p-4 flex justify-center items-center mx-2  w-full ">
            {renderTab()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Payments;
