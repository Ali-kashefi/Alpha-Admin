import http from "./httpServices";

export function getUsers() {
  
  return http.get("users.json")
    .then(({ data }) => data);
}

