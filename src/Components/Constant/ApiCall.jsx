import { API_URL } from "./api";
import { getToken, logout } from "./auth";

export const getRequest = async (url, token = false) => {
  console.log(`${API_URL}${url}`);
  var accessToken = "";
  if (token) {
    accessToken = await getToken();
    if (accessToken) accessToken = JSON.parse(accessToken).access;
  }
  const response = await fetch(`${API_URL}${url}`, {
    headers: {
      "content-type": "application/json",
      Authorization: token ? `Bearer ${accessToken}` : null,
    },
  }).catch((err) => console.log(err));

  return response;
};

export const postRequest = async (url, reqBody, reqMethod, token = false) => {
  console.log("APi call ==>", `${API_URL}${url}`);
  var accessToken = "";
  if (token) {
    accessToken = await getToken();
    if (accessToken) accessToken = JSON.parse(accessToken).access;
  }
  const response = await fetch(`${API_URL}${url}`, {
    headers: {
      "content-type": "application/json",
      Authorization: token ? `Bearer ${accessToken}` : null,
    },
    method: reqMethod,
    body: reqBody,
  }).catch((err) => console.log("error", err));
  if (token && response.status === 401) logout();
  return response;
};
