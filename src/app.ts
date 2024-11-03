import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Ph health care server is running...",
  });
});

export default app;
