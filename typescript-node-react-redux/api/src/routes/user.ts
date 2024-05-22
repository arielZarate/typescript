import express, { Response, Request, NextFunction } from "express";
import User from "../models/User";
const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  User.findAll()
    .then((users) => {
      res.json(users);
    })
    // .catch((error) => next(error));
    .catch((error) => console.log(error));
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
  const user = req.body;
  // console.log(user);
  if (Array.isArray(user)) {
    User.bulkCreate(user)
      .then((createdUser) => res.json(createdUser))
      // .then((users) => console.log(users))
      .catch((error) => next(error));
  } else {
    User.create(user)
      .then((createdUser) => {
        res.json(createdUser);
      })
      .then((users) => console.log(users))
      .catch((error) => next(error));
    //.catch((error) => console.log(error));
  }
});

export default router;
