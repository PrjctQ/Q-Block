import express, { Request, Response } from "express";

const app = express();

app.use("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello from q-block-backend",
  });
});

export default app;
