import React, { useContext, useState } from "react";
import AvatarList from "./Components/AvatarList";
import Chat from "./Components/Chat";
import Group from "./Components/Group";
import SideNav from "./Components/Header/SideNav";
import Setting from "./Components/Setting";
import GlobalContext from "./Context/GlobalContext";

function Home() {
  const [show, setShow] = useState(0);

  const { setNumber, users, chatData } = useContext(GlobalContext);
  const indexTab = (index) => {
    console.log("d", index);
    setShow(index);
  };

  return (
    <>
      <div className=" h-screen">
        <div className="flex border border-grey rounded shadow-lg h-full">
          <div>
            <SideNav indexTab={indexTab} />
          </div>
          <div className="mb-[10vh] md:mb-0 md:ml-[5vw] w-full lg:w-1/3 md:w-1/3 border flex flex-col ">
            {show === 0 ? (
              <AvatarList setNumber={setNumber} users={users} />
            ) : (
              ""
            )}
            {show === 1 ? <Group /> : ""}
            {show === 2 ? <Setting /> : ""}
          </div>

          <div className=" leading-none lg:w-2/3 md:w-2/3 border  hidden md:flex flex-col">
            <Chat chatData={chatData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
