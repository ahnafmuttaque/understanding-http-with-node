import type { Request, Response } from "../types/http.type.js";
import { sendResponse } from "../utils.js";

export function GETGeneralHeaders(req: Request, res: Response) {
    const date = req.headers.date || new Date().toISOString();
    const cacheControl = req.headers["cache-control"];
    const connection = req.headers.connection;
    const content = {
        Date: date,
        "Cache-Control": cacheControl,
        connection,
    };
    sendResponse(res, 200, content);
}

export function GETRequestHeaders(req: Request, res: Response) {
    const userAgent = req.headers["user-agent"];
    const authorization = req.headers.authorization;
    const cookie = req.headers.cookie;
    const accept = req.headers.accept;
    const content = {
        "user-agent": userAgent,
        authorization: authorization ?? "no-authorization",
        cookie: cookie ?? "no-cookie",
        accept,
    };

    sendResponse(res, 200, content);
}

export function GETRepresentationalHeaders(req: Request, res: Response) {
    const content = {
        "Content-Type": req.headers["content-type"],
        "Content-Length": req.headers["content-length"],
        "Content-Encoding": req.headers["content-encoding"],
        "Content-Lanugage": req.headers["content-language"],
        "Content-Location": req.headers["content-location"],
        "Content-Range": req.headers["content-range"],
        "Content-Disposition": req.headers["content-disposition"],
        "E-Tag": req.headers.etag,
        "Last-Modified": req.headers["last-modified"],
    };
    sendResponse(res, 200, content);
}
