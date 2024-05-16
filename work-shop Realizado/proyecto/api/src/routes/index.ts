import express ,{Response,request,Router}from 'express';
import user from './user';
const router:Router=express.Router();

router.use('/user',user);



export default router;