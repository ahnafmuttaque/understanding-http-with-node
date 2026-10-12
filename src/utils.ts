import type { Response } from "./types/http.type.js";

export function sendResponse(res: Response, statusCode: number, data?: any) {
    res.statusCode = statusCode;
    res.setHeader("Content-Type", "application/json");
    res.end(
        JSON.stringify({
            success: true,
            ...(data ? { data: data } : {}),
        }),
    );
}
