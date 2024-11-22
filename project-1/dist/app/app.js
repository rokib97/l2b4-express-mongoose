"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// persers
app.use(express_1.default.json());
// Router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const users = req.body;
    console.log(users);
    res.json({
        status: true,
        message: "Succesfull",
        data: users,
    });
});
courseRouter.post("/create-course", (req, res) => {
    const users = req.body;
    console.log(users);
    res.json({
        status: true,
        message: "Succesfull",
        data: users,
    });
});
const logger = (req, res, next) => {
    next();
};
app.get("/", logger, (req, res, next) => {
    try {
        res.send("Hello Dev!!");
    }
    catch (error) {
        next(error);
    }
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Received Data",
    });
});
app.all("*", (req, res) => {
    res.status(400).json({
        status: false,
        message: "404 route not found",
    });
});
// global error handle
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            status: false,
            message: "Something went wrong",
        });
    }
});
exports.default = app;
