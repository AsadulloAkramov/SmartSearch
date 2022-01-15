import { Router } from "express";
import StaffListController from "../controllers/staffListController";
const ctrl = new StaffListController();

const router = Router({mergeParams:true});
router.route('/')
    .post((req, res)=> ctrl.create(req, res))
    .get((req , res)=> ctrl.list(req , res))
router.route('/aggregation').get((req, res)=> ctrl.aggregation(req , res))
export default router;