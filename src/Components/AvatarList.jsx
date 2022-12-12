import React from "react";
import { Link } from "react-router-dom";
import { chatheads } from "../Storage/ChatList";

const AvatarList = () => {
  return (
    <>
      {/* <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
        <div className="flex ">
          <span>
            {" "}
            <img
              className="w-10 h-10 rounded-full"
              src="https://media.istockphoto.com/id/1399611777/photo/portrait-of-a-smiling-little-brown-haired-boy-looking-at-the-camera-happy-kid-with-good.jpg?b=1&s=170667a&w=0&k=20&c=_vhKiD4p9X8X5BBJ5gKiWasG95XFvwVa8nq6Ogbpn9k="
            />
          </span>
          <span className="m-2 text-white text-lg">Whtasapp bot</span>
        </div>

        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#727A7E"
                d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"
              ></path>
            </svg>
          </div>
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                opacity=".55"
                fill="#263238"
                d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
              ></path>
            </svg>
          </div>
          <div className="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#263238"
                fill-opacity=".6"
                d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
              ></path>
            </svg>
          </div>
        </div>
      </div> */}
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
