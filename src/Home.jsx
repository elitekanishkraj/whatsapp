import React, { useState } from "react";
import AvatarList from "./Components/AvatarList";
import Chat from "./Components/Chat";
import Group from "./Components/Group";
import SideNav from "./Components/Header/SideNav";
import Setting from "./Components/Setting";

function Home() {
  const [show, setShow] = useState(0);

  const indexTab = (index) => {
    console.log("d", index);
    setShow(index);
  };
  return (
    <>
      <div className=" h-screen">
        <div className="flex border border-grey rounded shadow-lg h-full">
          <div className="hidden lg:block md:block">
            <SideNav indexTab={indexTab} />
          </div>
          <div className="w-full lg:w-1/3 md:w-1/3 border flex flex-col ">
            {show === 0 ? <AvatarList /> : ""}
            {show === 1 ? <Group /> : ""}
            {show === 2 ? <Setting /> : ""}
          </div>

          <div className=" leading-none lg:w-2/3 md:w-2/3 border  hidden md:flex flex-col">
            <Chat />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
