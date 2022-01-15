import { Router, } from 'express';
import Controller from '../controllers/staffAddresController';

const ctrl = new Controller();
const router = Router({mergeParams:true});

router.route('/')
      .get((_req, res)=> res.send({message:"Oka"}))
      .post((req, res)=> ctrl.create(req, res))
 
      
export default router;