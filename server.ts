import * as express  from "express";
import { Express, Request, Response } from "express"

const app: Express = express();
const port = process.env.PORT || 3003;

app.get("/", (req: Request, res: Response) => {
  res.send("Éxpress + Typescript server");
});

app.listen(port, () => {
  console.log(`⚡[server]: Server is running at port ${port}`);
});
