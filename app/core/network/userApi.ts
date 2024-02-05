import apisauce, {ApisauceInstance} from "apisauce";
import {jwtDecode, JwtPayload} from "jwt-decode";

import createApiMonitor from "./createApiMonitor";

interface DecodedJwtPayload extends JwtPayload {
  email?: string;
}

export function parseToken(token: string) {
  const data = jwtDecode<DecodedJwtPayload>(token);
  return {
    email: data.email || "",
    userId: data.sub || "",
  };
}

export function createApi(onTokenExpired: () => void) {
  const api = apisauce.create({
    baseURL: "http://localhost:3001/",
    timeout: 10000,
  });
  if (__DEV__) {
    api.addMonitor(createApiMonitor("user api"));
  }
  api.addMonitor((response) => {
    if (
      !response.ok &&
      response.status === 401 &&
      response.data === "jwt expired" &&
      onTokenExpired
    ) {
      onTokenExpired();
    }
  });
  return api;
}

export async function setToken(api: ApisauceInstance, token: string) {
  if (token) {
    api.setHeader("Authorization", `Bearer ${token}`);
  } else {
    api.deleteHeader("Authorization");
  }
}

function cleanup(api: ApisauceInstance) {
  api.deleteHeader("Authorization");
}

export async function login(
  api: ApisauceInstance,
  email: string,
  password: string
) {
  cleanup(api);
  return await api.post("login", {email, password});
}

export async function signup(
  api: ApisauceInstance,
  email: string,
  password: string
) {
  cleanup(api);
  return await api.post("signup", {email, password});
}

export function get(
  api: ApisauceInstance,
  entity: string,
  id: number | string
) {
  return api.get(`${entity}/${id}`);
}

export function patch(
  api: ApisauceInstance,
  entity: string,
  id: number | string,
  data: unknown
) {
  return api.patch(`${entity}/${id}`, data);
}

export default createApi;
