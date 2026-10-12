import type { Request, Response } from "../types/http.type.js";
import { sendResponse } from "../utils.js";

export function GETGeneralHeaders(req: Request, res: Response) {
    const date = req.headers.datei || new Date().toISOString();
    const cacheControl = req.headers["cache-control"];
    const connection = req.headers.connection;

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    const response = {
        Date: date,
        "Cache-Control": cacheControl,
        connection,
    };
    sendResponse(res, 200, response);
}

export function GETRequestHeaders(req: Request, res: Response) {
    // getting the request headers which are only present in req
    const userAgent = req.headers["user-agent"];
    const authorization = req.headers.authorization;
    const cookie = req.headers.cookie;
    const accept = req.headers.accept;
    // stringify the response body
    const response = {
        "user-agent": userAgent,
        authorization: authorization ?? "no-authorization",
        cookie: cookie ?? "no-cookie",
        accept,
    };

    // change response body to buffer
    // const contentBuf = Buffer.from(response, "utf-8");
    // get the bytelength
    // const contentLength = contentBuf.byteLength;
    // changing the encoding
    // setting the necessary headers
    res.setHeader("Content-Type", "application.json");
    // set the content encoding
    // res.setHeader("Content-Encoding", "gzip");
    // content length is set by default
    // dont' need to set it
    // res.setHeader("Content-Length", contentLength);
    sendResponse(res, 200, response);
}
