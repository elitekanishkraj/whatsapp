import {  business_id } from "./api";

export const token_key = "healthxemrtoken";

export const loginCheck = () => {
  if (localStorage.getItem("loginToken")) {
    return true;
  } else {
    return false;
  }
};



export const is_logged_in = loginCheck();

export const getToken = async () => {
  const token = await localStorage.getItem("loginToken");
  return token;
};

export const logout = () => {
  localStorage.removeItem(business_id);
  localStorage.removeItem("loginToken");
  window.location.reload();
};
