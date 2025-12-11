import http from "./httpServices";

export function getUsers() {
  
  return http.get("users.json")
    .then(({ data }) => data);
}
export function getInvoices() {
  
  return http.get("invoices.json")
    .then(({ data }) => data);
}

