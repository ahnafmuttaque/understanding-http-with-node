import type { IncomingMessage, ServerResponse } from "node:http";

export function GETRequestHeaders(
    req: IncomingMessage,
    res: ServerResponse<IncomingMessage>,
) {
    // getting the request headers which are only present in req
    const userAgent = req.headers["user-agent"];
    const authorization = req.headers.authorization;
    const cookie = req.headers.cookie;
    const accept = req.headers.accept;
    // stringify the response body
    const resJSON = JSON.stringify({
        success: true,
        data: {
            "user-agent": userAgent,
            authorization,
            cookie,
            accept,
            hello: "myname is ahnaf",
        },
    });

    // change response body to buffer
    // const contentBuf = Buffer.from(resJSON, "utf-8");
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

    // set the status code
    res.statusCode = 200;
    // set the cookie
    res.setHeader("cookie", "max-age=45;runtime=node");
    // send the response
    res.end(resJSON);
}
