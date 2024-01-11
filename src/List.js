import { IoIosArrowForward } from "react-icons/io";
function List({pages,selectedPage,setSelectedPage}) {
  return (
    <section className="w-1/4 h-screen shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">
          <ul>
            {pages.map((page) => (
              <li
                key={page}
                className={`flex items-center p-2 hover:bg-gray-200 ease-in-out justify-between cursor-pointer text-sm m-2 ${
                  selectedPage === page ? 'text-blue-400' : ''
                }`}
                onClick={() => setSelectedPage(page)}
              >
                <span>{page}</span>
                {selectedPage === page ? <span className="ml-1"><IoIosArrowForward /></span>:""}
              </li>
            ))}
          </ul>
        </section>
  )
}

export default List