import express from "express";
import {
  deleteUser,
  followUser,
  getAllUsers,
  getUser,
  UnFollowUser,
  updateuser,
} from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/AuthMddleWare.js";

const router = express.Router();

router.get('/',getAllUsers)
router.get("/:id", getUser);
router.put("/:id",authMiddleWare,updateuser);
router.delete("/:id",authMiddleWare, deleteUser);
router.put("/:id/follow",authMiddleWare, followUser);
router.put("/:id/unfollow",authMiddleWare, UnFollowUser);

export default router;
