export type HttpMethod = "get" | "post" | "put" | "delete";
export const HttpMethod = Object.freeze({
    GET: <HttpMethod>"get",
    POST: <HttpMethod>"post",
    PUT: <HttpMethod>"put",
    DELETE: <HttpMethod>"delete"
});
