import express, { NextFunction, Request, Response } from "express";
const app = express();

// persers
app.use(express.json());

// Router

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const users = req.body;
  console.log(users);
  res.json({
    status: true,
    message: "Succesfull",
    data: users,
  });
});
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const users = req.body;
  console.log(users);
  res.json({
    status: true,
    message: "Succesfull",
    data: users,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  next();
};

app.get("/", logger, (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("Hello Dev!!");
  } catch (error) {
    next(error);
  }
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Received Data",
  });
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    status: false,
    message: "404 route not found",
  });
});

// global error handle
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (error) {
    res.status(400).json({
      status: false,
      message: "Something went wrong",
    });
  }
});
export default app;
