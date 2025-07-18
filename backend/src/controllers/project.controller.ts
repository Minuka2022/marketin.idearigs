import { Request, Response, NextFunction } from 'express';
import {
  getAllProjects,
  getCompleteProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../models/project.model';
import { addToolToProject, removeToolFromProject } from '../models/tool.model';
import { createGoal, deleteGoalsByProjectId } from '../models/goal.model';
import { addGalleryImage, deleteGalleryByProjectId } from '../models/gallery.model';
import { addOutcomeStat, deleteOutcomeStatsByProjectId, addOrUpdateOutcomeQuote } from '../models/outcome.model';
import { ApiError } from '../utils/apiError';

// Get all projects (basic info only)
export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await getAllProjects();

    res.status(200).json({
      status: 'success',
      results: projects.length,
      data: {
        projects
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get a single project with all details
export const getProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const project = await getCompleteProjectById(id);

    if (!project) {
      return next(new ApiError(`No project found with ID: ${id}`, 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        project
      }
    });
  } catch (error) {
    next(error);
  }
};

// Create a new project
export const createNewProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      title,
      category,
      image,
      description,
      backgroundColor,
      client,
      overview,
      tools,
      goals,
      gallery,
      outcome
    } = req.body;

    // Create the base project
    const projectId = await createProject({
      title,
      category,
      image,
      description,
      background_color: backgroundColor,
      client,
      overview
    });

    // Add tools if provided
    if (tools && Array.isArray(tools)) {
      for (const toolId of tools) {
        await addToolToProject(projectId, toolId);
      }
    }

    // Add goals if provided
    if (goals && Array.isArray(goals)) {
      for (const goalText of goals) {
        await createGoal(projectId, goalText);
      }
    }

    // Add gallery images if provided
    if (gallery && Array.isArray(gallery)) {
      for (const imageUrl of gallery) {
        await addGalleryImage(projectId, imageUrl);
      }
    }

    // Add outcome stats if provided
    if (outcome && outcome.stats && Array.isArray(outcome.stats)) {
      for (const stat of outcome.stats) {
        await addOutcomeStat(projectId, stat.label, stat.value);
      }
    }

    // Add outcome quote if provided
    if (outcome && outcome.quote) {
      const { quote, author, author_title } = outcome.quote;
      await addOrUpdateOutcomeQuote(projectId, quote, author, author_title);
    }

    // Get the complete project to return
    const newProject = await getCompleteProjectById(projectId);

    res.status(201).json({
      status: 'success',
      data: {
        project: newProject
      }
    });
  } catch (error) {
    next(error);
  }
};

// Update a project
export const updateExistingProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const {
      title,
      category,
      image,
      description,
      backgroundColor,
      client,
      overview,
      tools,
      goals,
      gallery,
      outcome
    } = req.body;

    // Check if project exists
    const existingProject = await getCompleteProjectById(id);
    if (!existingProject) {
      return next(new ApiError(`No project found with ID: ${id}`, 404));
    }

    // Update base project
    const updateData: any = {};
    if (title !== undefined) updateData.title = title;
    if (category !== undefined) updateData.category = category;
    if (image !== undefined) updateData.image = image;
    if (description !== undefined) updateData.description = description;
    if (backgroundColor !== undefined) updateData.background_color = backgroundColor;
    if (client !== undefined) updateData.client = client;
    if (overview !== undefined) updateData.overview = overview;

    await updateProject(id, updateData);

    // Handle tools update if provided
    if (tools && Array.isArray(tools)) {
      // Remove existing tool associations
      for (const tool of existingProject.tools) {
        await removeToolFromProject(id, tool.id);
      }
      // Add new tool associations
      for (const toolId of tools) {
        await addToolToProject(id, toolId);
      }
    }

    // Handle goals update if provided
    if (goals && Array.isArray(goals)) {
      // Remove existing goals
      await deleteGoalsByProjectId(id);
      // Add new goals
      for (const goalText of goals) {
        await createGoal(id, goalText);
      }
    }

    // Handle gallery update if provided
    if (gallery && Array.isArray(gallery)) {
      // Remove existing gallery images
      await deleteGalleryByProjectId(id);
      // Add new gallery images
      for (const imageUrl of gallery) {
        await addGalleryImage(id, imageUrl);
      }
    }

    // Handle outcome stats update if provided
    if (outcome && outcome.stats && Array.isArray(outcome.stats)) {
      // Remove existing outcome stats
      await deleteOutcomeStatsByProjectId(id);
      // Add new outcome stats
      for (const stat of outcome.stats) {
        await addOutcomeStat(id, stat.label, stat.value);
      }
    }

    // Handle outcome quote update if provided
    if (outcome && outcome.quote) {
      const { quote, author, author_title } = outcome.quote;
      await addOrUpdateOutcomeQuote(id, quote, author, author_title);
    }

    // Get the updated project
    const updatedProject = await getCompleteProjectById(id);

    res.status(200).json({
      status: 'success',
      data: {
        project: updatedProject
      }
    });
  } catch (error) {
    next(error);
  }
};

// Delete a project
export const deleteExistingProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    // Check if project exists
    const existingProject = await getCompleteProjectById(id);
    if (!existingProject) {
      return next(new ApiError(`No project found with ID: ${id}`, 404));
    }

    // Delete all related data first (foreign key constraints will handle some of these)
    await deleteGoalsByProjectId(id);
    await deleteGalleryByProjectId(id);
    await deleteOutcomeStatsByProjectId(id);

    // Delete the project itself
    await deleteProject(id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    next(error);
  }
};
