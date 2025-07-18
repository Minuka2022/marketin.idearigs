import express from 'express';
import {
  getProjects,
  getProject,
  createNewProject,
  updateExistingProject,
  deleteExistingProject
} from '../controllers/project.controller';
import { protect } from '../middlewares/auth.middleware';

const router = express.Router();

// Protect all routes
router.use(protect);

// Project routes
router.route('/')
  .get(getProjects)
  .post(createNewProject);

router.route('/:id')
  .get(getProject)
  .patch(updateExistingProject)
  .delete(deleteExistingProject);

export default router;
