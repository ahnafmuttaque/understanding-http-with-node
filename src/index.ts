import http from "node:http";
import path from "node:path";
import {
    GETGeneralHeaders,
    GETRepresentationalHeaders,
    GETRequestHeaders,
    GETSecurityHeaders,
} from "./handlers/headers.route.js";

const CWD = process.cwd();
const ENVPATH = path.join(CWD, ".env");
process.loadEnvFile(ENVPATH);

const PORT = process.env.PORT || 8000;

const server = http.createServer(async (req, res) => {
    // api versioning with "/api/v1"
    const API_VERSION_ONE = "/api/v1";

    if (req.url?.startsWith(API_VERSION_ONE)) {
        const url = req.url.slice(API_VERSION_ONE.length);
        if (req.method === "GET") {
            switch (url) {
                case "/headers/request":
                    GETRequestHeaders(req, res);
                    break;
                case "/headers/general":
                    GETGeneralHeaders(req, res);
                    break;
                case "/headers/representational":
                    GETRepresentationalHeaders(req, res);
                    break;
                case "/headers/security":
                    GETSecurityHeaders(req, res);
                    break;
            }
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server started running at port ${PORT}`);
});
