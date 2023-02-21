import React, { useContext, useEffect, useState } from "react";
import { plane, refresh } from "../assets/icons/AllIcon";
import GlobalContext from "../Context/GlobalContext";
import { API_URL } from "./Constant/api";
import { getRequest } from "./Constant/ApiCall";

const Chat = () => {
  const { chatData, number, getChatData } = useContext(GlobalContext);
  const [message, setMessage] = useState();
  const [dropData, setDropData] = useState([])
  console.log("dxsedgz", number);

  const SendMessage = async () => {
    const res = await fetch(`${API_URL}/send_message/${message}/${number}`);
    const resData = await res.json();
    console.log("re", resData);
    setMessage("");
    getChatData();
  };

  const user_id = localStorage.getItem('user_id')
console.log('uer', user_id)
  const getData = async () => {
    const res = await getRequest(`/user_access/${user_id}`)
    const resData = await res.json()
    console.log('res', resData)
    setDropData(resData)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="flex flex-col">
      <div className=" px-3 bg-grey-lighter flex flex-row justify-between items-center border-b-2">
        <div className="flex items-center justify-between py-6">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"
            />
          </div>
          <div className="ml-4">
            <p className=" text-lg">{number}</p>
            {/* <p className="text-grey-darker text-xs mt-1 ">online</p> */}
          </div>
        </div>

        <div className="flex items-center">
        <div className="xl:w-96">
            <select
              className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              {dropData.map((item, id) => (
              <option key={id}  value={item.holder_name}>{item.holder_name}</option>
              ))}
             
            </select>
          </div>
          <div className="px-5 cursor-pointer" onClick={() => getChatData()}>
            {refresh}
          </div>
        </div>
      </div>

      <div className="max-h-[70vh] flex-1 overflow-auto bg-[#ffffff]">
        {/* <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>

          <div className="chat-bubble">Hey There!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div> */}
        {chatData.map((item) => (
          <div
            key={item.id}
            className={
              item.msg_status !== "outgoing"
                ? "chat chat-start px-5"
                : "chat chat-end px-5"
            }
          >
            {item.msg_type === "text" && (
              <>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div className="chat-bubble">{item.msg}</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </>
            )}

            {item.msg_type === "img" && (
              <>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <img
                    className="w-40 rounded-md"
                    src={`${API_URL}/media/${item.img_url.substring(37)}`}
                  />{" "}
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
              </>
            )}
            {item.msg_type === "video" && (
              <>
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <div>
                  <video
                    className="w-40 rounded-md"
                    controls
                    type="video/mp4"
                    src={`${API_URL}/media/${item.video_url.substring(37)}`}
                  ></video>
                </div>
                <div className="chat-footer opacity-50">Delivered</div>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="bg-grey-lighter px-4 py-4 flex items-center fixed bottom-0 right-0 left-[-2%] md:left-[38%] lg:left-[36%]">
        <div className="flex-1 mx-4">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border rounded-md px-2 py-2"
            type="text"
          />
        </div>
        <div className="cursor-pointer" onClick={() => SendMessage()}>
          {plane}
        </div>
      </div>
    </div>
  );
};

export default Chat;
