import { ApiResponse } from "apisauce";

function urlWithoutBase(response: ApiResponse<unknown>) {
  const url = response.config?.url ?? "";
  const baseURL = response.config?.baseURL ?? "";
  return url?.substr(baseURL.length);
}

export default (name: string) => (response: ApiResponse<unknown>) => {
  console.log(
    `${name.toUpperCase()}: ${response.config?.method?.toUpperCase()} ${urlWithoutBase(
      response
    )}`,
    {
      config: response.config,
      data: response.data,
      response,
    }
  );
};
