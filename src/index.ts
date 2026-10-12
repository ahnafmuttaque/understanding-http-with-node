import http from "node:http";
import path from "node:path";

const CWD = process.cwd();
const ENVPATH = path.join(CWD, ".env");
process.loadEnvFile(ENVPATH);

const PORT = process.env.PORT || 8000;

const server = http.createServer(async (req, res) => {});

server.listen(PORT, () => {
    console.log(`Server started running at port ${PORT}`);
});
