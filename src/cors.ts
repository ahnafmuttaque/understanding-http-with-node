import type { Response } from "./types/http.type.js";

export function CorsSetup(res: Response) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Max-Age", "86400");
    res.setHeader("Access-Control-Allow-Expose-Headers", "*");
}
