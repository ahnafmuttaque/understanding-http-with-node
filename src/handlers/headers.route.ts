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

export function GETSecurityHeaders(req: Request, res: Response) {
    const content = {
        "Strict-Transport-Security": req.headers["strict-transport-security"],
        Referer: req.headers.referer,
        "Content-Security-Policy":
            "Restricts and controls the resources (such as JavaScript, CSS, images, and fonts) that the browser is allowed to load for a given page, heavily mitigating XSS and data injection attacks",
        "X-Content-Type-Options":
            'Prevents the browser from guessing or "sniffing" a file\'s MIME type via the nosniff directive, ensuring it adheres strictly to the declared Content-Type',
        "X-Frame-Options":
            ": Controls whether a browser is allowed to render a page in a <frame>, <iframe>, or <object>, protecting users from clickjacking vectors (though largely superseded by CSP's frame-ancestors",
        "Referer-Policy":
            ": Controls whether a browser is allowed to render a page in a <frame>, <iframe>, or <object>, protecting users from clickjacking vectors (though largely superseded by CSP's frame-ancestors",
        "Permission-Policy":
            "Allows or disables specific browser APIs and powerful features on a page, such as access to the camera, microphone, geolocation, or payment gateways",
    };
    sendResponse(res, 200, content);
}
