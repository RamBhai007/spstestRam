import { useState } from "react";
import List from "./List";
import Context from "./Context";

function App() {
  const pages = ['Authroize.net Details', 'General Settings', 'Setup Payments Requests Email']; 

   const [selectedPage, setSelectedPage] = useState(pages[0]);

  return (
    <div className="flex flex-col h-screen">
      <header className=" shadow-[0_3px_10px_rgb(0,0,0,0.2)]  text-black p-6">
        <h1 className="text-2xl  font-bold">Online Payment API Setup</h1>
      <hr className='bg-black' />
      </header>

      <div className="flex ">
        <List
         pages={pages}
         selectedPage={selectedPage}
         setSelectedPage={setSelectedPage}
        ></List>
        <Context selectedPage={selectedPage}></Context>
      </div>
    </div>
  );
}

export default App;
