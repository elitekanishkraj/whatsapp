import React, { useState, useEffect } from "react";
import { BASE_URL } from "../Components/Constant/api";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
  const [users, setUsers] = useState([]);
  const [number, setNumber] = useState();
  const [chatData, setChatData] = useState([]);
  const [userNum, setUserNum] = useState(0);

  const getTargetedUsers = async () => {
    try {
      const res = await fetch(`${BASE_URL}/wp_users`);
      const resData = await res.json();
      console.log("res_data", resData);
      setUsers(resData);
      if (!number) getChatData(resData[0]);
      setNumber(resData[0]['sender_no']);
    } catch (error) {
      console.log("err", error);
    }
  };
  const getChatData = async () => {
    try {
      if(number) {
      const res = await fetch(`${BASE_URL}/chat_data/${number}`);
      console.log("res", res);
      const resData = await res.json();
      console.log("Data", resData);
      setChatData(resData.chat_data);
      }
    } catch (error) {
      console.log("err", error);
    }
  };
  useEffect(() => {
    getChatData();
  }, [number]);

  useEffect(() => {
    getTargetedUsers();
  }, []);
  return (
    <>
      <GlobalContext.Provider
        value={{
          users: users,
          setNumber: setNumber,
          number: number,
          chatData: chatData,
          userNum: userNum,
          getChatData: getChatData,
          getTargetedUsers: getTargetedUsers,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalState;
