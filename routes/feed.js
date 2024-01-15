const express=require("express");
const router=express.Router();
const feedController=require("../controllers/feed")
router.get("/posts",feedController.getPosts);
router.post("/format",feedController.postPost);
router.post("/formatXML",feedController.postXML);
module.exports=router;