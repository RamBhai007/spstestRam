import React, { useState } from 'react';
import Modal from './Modal';

const Quotes = () => {
  const [email, setEmail] = useState(false);

  const handleClick = () => {
    setEmail(!email);
  };

  const Modalfun = () => {
    return (
      <div className="z-100 bg-slate-50 m-2 fixed flex top-0 right-0 w-full">
        <div className="bg-white
         w-3/4 h-screen">

          <header className='text-xl items-start flex m-2 ml-4 text-gray-600 p-2 '>New Email Template</header>
          <hr></hr>
          <Modal></Modal>
          <button onClick={handleClick} className="mt-4 p-2 text-white text-center border-blue-500 rounded-lg bg-blue-500">
            Close Modal
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-row w-2/3 text-center">
      <div className="text-blue-400 m-6 text-center font-bold">
        Currently there are no email templates set up for<br></br>Quotes/Estimates
      </div>
      <div className="m-8 items-center">
        <button onClick={handleClick} className="p-2 text-white text-center border-blue-500 rounded-lg bg-blue-500">
          + New Email Templates
        </button>
      </div>

      {email && <Modalfun />}
    </div>
  );
};

export default Quotes;
