"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const port = 8080;
class App {
    constructor() {
        this.init = async () => {
            try {
                this.app.listen(port, () => {
                    console.log("server is started");
                });
                this.app.get("/", (req, res) => {
                    res.send("Hello!");
                });
                this.app.get("/login", (req, res) => {
                    res.send("Login page");
                });
                this.app.get("/auth", (req, res) => {
                    res.send("Authentification");
                });
            }
            catch (error) {
                const err = error;
                console.log(err.message);
            }
        };
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(express_1.default.static("public"));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
}
exports.app = new App();
exports.app.init().then(() => {
    console.log("Server is ok");
}).catch(() => {
    console.log("server is not ok");
});
