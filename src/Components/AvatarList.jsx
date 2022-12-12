import React from "react";
import { Link } from "react-router-dom";
import { chatheads } from "../Storage/ChatList";

const AvatarList = () => {
  return (
    <>
      <div className="py-5 px-5 font-extrabold text-lg">Whatsapp bot</div>

      <div className=" px-5 bg-grey-lightest py-3">
        <input
          type="text"
          className="w-full px-2 py-4 text-sm rounded-lg bg-[#f2f2f2]"
          placeholder="Search or start new chat"
        />
      </div>

      <div className="bg-grey-lighter flex-1 py-2 overflow-auto">
        {chatheads.map((item) => (
          <Link to={item.link}>
            <div
              key={item.id}
              className="px-3 py-2 flex items-center bg-grey-light cursor-pointer"
            >
              <div>
                <img className="h-12 w-12 rounded-full" src={item.image} />
              </div>
              <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
                <div className="flex items-bottom justify-between">
                  <p className="text-grey-darkest">{item.title}</p>
                  <p className="text-xs text-grey-darkest"> {item.time} </p>
                </div>
                <p className="text-grey-dark mt-1 text-sm">{item.chat}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AvatarList;
