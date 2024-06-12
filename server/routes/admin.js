// routes/admin.js
import express from 'express';
import { authenticateToken } from '../controller/jwt-controller.js';
import { authenticateAdmin } from '../middleware/admin.js';
import { getAllUsers, deleteUser } from '../controller/admin-controller.js';

const router;
