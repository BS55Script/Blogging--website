import express from 'express';
import { authenticateToken } from '../controller/jwt-controller.js';
import { authenticateAdmin } from '../middleware/admin.js';
import { getAllUsers, deleteUser } from '../controller/admin-controller.js';
import { getAllPosts, deletePost } from '../controller/post-controller.js';
import { getAllComments, deleteComment } from '../controller/comment-controller.js';

const router = express.Router();

// User Management
router.get('/admin/users', authenticateToken, authenticateAdmin, getAllUsers);
router.delete('/admin/user/:id', authenticateToken, authenticateAdmin, deleteUser);

// Post Management
router.get('/admin/posts', authenticateToken, authenticateAdmin, getAllPosts);
router.delete('/admin/post/:id', authenticateToken, authenticateAdmin, deletePost);

// Comment Management
router.get('/admin/comments', authenticateToken, authenticateAdmin, getAllComments);
router.delete('/admin/comment/:id', authenticateToken, authenticateAdmin, deleteComment);

export default router;
