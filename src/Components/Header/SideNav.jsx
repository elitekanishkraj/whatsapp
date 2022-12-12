import React from "react";
import { heads } from "../../Storage/Sidenavitems";

const SideNav = ({ indexTab }) => {
  return (
    <>
      <div class="flex h-screen w-16 flex-col justify-between border-r bg-white">
        <div>
          <div class="inline-flex h-16 w-16 items-center justify-center">
            <span class="block h-10 w-10 rounded-lg bg-gray-200"></span>
          </div>

          <div class="border-t border-gray-100">
            <nav aria-label="Main Nav" class="flex flex-col p-2">
              <ul class="space-y-1 border-t border-gray-100 pt-4">
                {heads.map((head, id) => (
                  <li
                    key={head.id}
                    onClick={() => indexTab(id)}
                    className="py-3 cursor-pointer group relative flex justify-center rounded px-2  text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    {head.icon}

                    <span class="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                      {head.item}
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <form action="/logout">
            <button
              type="submit"
              class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 opacity-75"
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

              <span class="absolute left-full top-1/2 ml-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                Logout
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SideNav;
