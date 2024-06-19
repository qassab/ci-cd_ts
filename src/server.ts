import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port: number = 8080;

class App {
    private app: Express;

    constructor () {
        this.app = express();
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static("public"));
        this.app.use(express.json());
        this.app.use(cors());
    }

    public init = async () => {
        try {
            this.app.listen(port, () => {
                console.log("server is started");
            })
            this.app.get("/", (req, res) => {
                res.send("Hello!!!!!!s");
            })
            this.app.get("/login", (req, res) => {
                res.send("Login page");
            })
            this.app.get("/auth", (req, res) => {
                res.send("Authentification");
            })
        } catch (error: unknown) {
            const err = error as Error;
            console.log(err.message);
        }
    }
}

export const app = new App();

app.init().then(() => {
    console.log("Server is ok");
}).catch(() => {
    console.log("server is not ok");
})