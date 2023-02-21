import React from "react";
import { heads } from "../../Storage/Sidenavitems";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideNav = ({ indexTab }) => {

  const navigate = useNavigate()

  const handleLogout = () => {
    // alert('navigate to')
    localStorage.removeItem('loginToken');
    navigate('/login')
  }
  
  return (
    <>
      <ul className="space-y-1 md:bg-white bg-slate-300 flex flex-row md:flex-col fixed left-0 bottom-0 md:top-0 w-[100vw] md:w-auto justify-around border-t border-gray-100 pt-4">
        {/* <div class="inline-flex h-16 w-16 items-center justify-center">
          <span className="block h-10 w-10 rounded-lg bg-gray-200"></span>
        </div> */}
        {/* {heads.map((head, id) => (
          <li
            key={head.id}
            onClick={() => indexTab(id)}
            className="py-3 cursor-pointer group relative flex justify-center rounded px-2  text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            {head.icon}

            <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              {head.item}
            </span>
          </li>
        ))} */}
        <div>
          <button
            onClick={() => handleLogout()}
            type="button"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>

            <span className="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </div>
      </ul>
    </>
  );
};

export default SideNav;
