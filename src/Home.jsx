import React, { useEffect, useState } from "react";
import AvatarList from "./Components/AvatarList";
import Chat from "./Components/Chat";
import { BASE_URL } from "./Components/Constant/api";
import Group from "./Components/Group";
import SideNav from "./Components/Header/SideNav";
import Setting from "./Components/Setting";

function Home() {
  const [show, setShow] = useState(0);
  const [number, setNumber] = useState()

  const indexTab = (index) => {
    console.log("d", index);
    setShow(index);
  };

  const [users, setUsers] = useState([])
  const getTargetedUsers = async () => {
    try {
      const res = await fetch(`${BASE_URL}/wp_users`);
      const resData = await res.json();
      console.log("res_data", resData);
      setUsers(resData)
      if (!number) getChatData(resData[0])
    } catch (error) {
      console.log('err',error)
    }
  }
  const [chatData, setChatData] = useState([]);
  const getChatData = async (num) => {
    try {
      const res = await fetch(`${BASE_URL}/chat_data/${number ? number : num}`);
      console.log("res", res);
      const resData = await res.json();
      console.log("Data", resData);
      setChatData(resData.chat_data);
    } catch (error) {
      console.log('err',error)
    }
  };
  useEffect(() => {
    getChatData()
  }, [number])

  useEffect(() => {
    getTargetedUsers()
  }, [])
  return (
    <>
      <div className=" h-screen">
        <div className="flex border border-grey rounded shadow-lg h-full">
          <div>
            <SideNav indexTab={indexTab} />
          </div>
          {/* <div className="lg:hidden md:hidden fixed bottom-0 left-0 right-0">
            <SideNav />
          </div> */}
          <div className="mb-[10vh] md:mb-0 md:ml-[5vw] w-full lg:w-1/3 md:w-1/3 border flex flex-col ">
            {show === 0 ? <AvatarList setNumber={setNumber} users={users} /> : ""}
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
