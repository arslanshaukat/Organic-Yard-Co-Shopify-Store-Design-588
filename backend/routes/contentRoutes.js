import express from 'express';
import {
  getContents,
  getContentById,
  createContent,
  updateContent,
  deleteContent,
  getContentsByType,
} from '../controllers/contentController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .get(getContents)
  .post(protect, admin, createContent);

router.route('/type/:type').get(getContentsByType);

router
  .route('/:id')
  .get(getContentById)
  .put(protect, admin, updateContent)
  .delete(protect, admin, deleteContent);

export default router;