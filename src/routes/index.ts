import { Router } from "express";
import staffAddressRoutes  from './staffAddres';
import staffListRoutes from './staffList';

const router = Router({mergeParams:true});

router.use('/staffs' , staffListRoutes);
router.use('/address' , staffAddressRoutes);


export default router;