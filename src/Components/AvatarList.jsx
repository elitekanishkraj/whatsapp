import React, { useContext } from "react";
import { plane, refresh } from "../assets/icons/AllIcon";

import GlobalContext from "../Context/GlobalContext";

const AvatarList = () => {
  const { users, setNumber, getTargetedUsers } = useContext(GlobalContext);

  const img =
    "https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?b=1&s=170667a&w=0&k=20&c=_vhKiD4p9X8X5BBJ5gKiWasG95XFvwVa8nq6Ogbpn9k=";
  console.log("uuu", users);
  return (
    <>
      <div className="py-5 px-5 font-extrabold text-lg flex justify-between">
        <div>Whatsapp bot</div>
        <div
          className="cursor-pointer rotate-90 "
          onClick={() => getTargetedUsers()}
        >
          {" "}
          {refresh}
        </div>
      </div>

      <div className=" px-5 bg-grey-lightest py-3">
        <input
          type="text"
          className="w-full px-2 py-4 text-sm rounded-lg bg-[#f2f2f2]"
          placeholder="Search or start new chat"
        />
      </div>

      <div className="bg-grey-lighter flex-1 py-2 overflow-auto">
        {users.map((item, id) => (
          <div
            key={id}
            onClick={() => setNumber(item.sender_no)}
            className="px-3 py-2 flex items-center bg-grey-light cursor-pointer"
          >
            <div>
              <img className="h-12 w-12 rounded-full" src={img} />
            </div>
            <div className="ml-4 flex-1 border-b border-grey-lighter py-4">
              <div className="flex items-bottom justify-between">
                <p className="text-grey-darkest">{item.sender_no}</p>
                <p className="text-grey-darkest">{item.sender_name}</p>
                {/* <p className="text-xs text-grey-darkest"> {item.time} </p> */}
              </div>
              {/* <p className="text-grey-dark mt-1 text-sm">{item.chat}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AvatarList;
