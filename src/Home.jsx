import React from "react";
import AvatarList from "./Components/AvatarList";
import Chat from "./Components/Chat";
import { chatheads } from "./Storage/ChatList";

function Home() {
  return (
    <>
      <div>
        <div className="w-full h-32 bg-[#4f39af]"></div>

        <div className="container mx-auto mt-[-128px]">
          <div className="lg:py-6 h-screen">
            <div className="flex border border-grey rounded shadow-lg h-full">
              <div className="w-full lg:w-1/3 border flex flex-col ">
                <AvatarList />
              </div>

              <div className=" leading-none lg:w-2/3 border  hidden md:flex flex-col">
                <Chat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
