import express, { Response, Request, Router, NextFunction } from 'express';

const router: Router = express.Router();

import {User} from '../models/User'

//====ROUTES============



router.get('/',async (req: Request, res: Response) => {
    try {
         const users = await User.findAll();
         if(!users)
         {
            res.status(404).json("users not found")
         }
         else {
            return res.json(users)
         } 

       

    } catch (error) {
        console.log(error)
    }
});

router.post('/', (req: Request, res: Response ,next:NextFunction) => {
    let newUser=req.body;
    //console.log("user created :", newUser)
   User.create(newUser)
        .then((createdUser) => {
            res.send(createdUser);
        })
        .catch((error) => next(error)); 
});


export default router;