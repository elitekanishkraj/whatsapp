import React, { useContext, useEffect, useState } from "react";
import { plane, refresh } from "../assets/icons/AllIcon";
import GlobalContext from "../Context/GlobalContext";
import { BASE_URL } from "./Constant/api";

const Chat = () => {
  const { chatData, number, getChatData } = useContext(GlobalContext);
  const [message, setMessage] = useState();
  console.log("dxsedgz", number);

  const SendMessage = async () => {
    const res = await fetch(`${BASE_URL}/send_message/${message}/${number}`);
    const resData = await res.json();
    console.log("re", resData);
    setMessage("");
    getChatData();
  };

  return (
    <div className=" flex flex-col">
      <div className=" px-3 bg-grey-lighter flex flex-row justify-between items-center border-b-2">
        <div className="flex items-center py-6">
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

        <div className="flex">
          <div className="px-5 cursor-pointer" onClick={() => getChatData()}>
            {refresh}
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#263238"
                fill-opacity=".5"
                d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
              ></path>
            </svg>
          </div>
          <div className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                fill="#263238"
                fill-opacity=".5"
                d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z"
              ></path>
            </svg>
          </div>
          <div className="ml-6">
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
      </div>

      <div className="max-h-[70vh] flex-1 overflow-auto bg-[#ffffff]">
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>

          <div className="chat-bubble">Hey There!</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
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
                    src={`${BASE_URL}/media/${item.img_url.substring(37)}`}
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
                    src={`${BASE_URL}/media/${item.video_url.substring(37)}`}
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
