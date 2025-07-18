import pool from '../config/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { getToolsByProjectId } from './tool.model';
import { getGoalsByProjectId } from './goal.model';
import { getGalleryByProjectId } from './gallery.model';
import { getOutcomeStatsByProjectId, getOutcomeQuoteByProjectId } from './outcome.model';

export interface Project extends RowDataPacket {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  background_color: string;
  client: string;
  overview: string;
  created_at: Date;
  updated_at: Date;
}

export interface CompleteProject extends Project {
  tools: Array<{ id: number; name: string }>;
  goals: Array<{ id: number; goal: string }>;
  gallery: Array<{ id: number; image_url: string }>;
  outcome: {
    stats: Array<{ id: number; label: string; value: string }>;
    quote?: { id: number; quote: string; author: string; author_title: string };
  };
}

export const getAllProjects = async (): Promise<Project[]> => {
  const [rows] = await pool.query<Project[]>('SELECT * FROM projects ORDER BY created_at DESC');
  return rows;
};

export const getProjectById = async (id: string): Promise<Project | null> => {
  const [rows] = await pool.query<Project[]>('SELECT * FROM projects WHERE id = ?', [id]);
  return rows[0] || null;
};

export const getCompleteProjectById = async (id: string): Promise<CompleteProject | null> => {
  const project = await getProjectById(id);
  if (!project) return null;

  const tools = await getToolsByProjectId(id);
  const goals = await getGoalsByProjectId(id);
  const gallery = await getGalleryByProjectId(id);
  const stats = await getOutcomeStatsByProjectId(id);
  const quote = await getOutcomeQuoteByProjectId(id);

  return {
    ...project,
    tools,
    goals,
    gallery,
    outcome: {
      stats,
      quote: quote || undefined
    }
  };
};

export const createProject = async (projectData: Omit<Project, 'id' | 'created_at' | 'updated_at'>): Promise<string> => {
  const id = generateUniqueId();
  await pool.execute(
    `INSERT INTO projects 
    (id, title, category, image, description, background_color, client, overview) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      id,
      projectData.title,
      projectData.category,
      projectData.image,
      projectData.description,
      projectData.background_color,
      projectData.client,
      projectData.overview
    ]
  );
  return id;
};

export const updateProject = async (id: string, projectData: Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>): Promise<boolean> => {
  // Build dynamic update query based on provided fields
  const updateFields: string[] = [];
  const values: any[] = [];

  if (projectData.title !== undefined) {
    updateFields.push('title = ?');
    values.push(projectData.title);
  }

  if (projectData.category !== undefined) {
    updateFields.push('category = ?');
    values.push(projectData.category);
  }

  if (projectData.image !== undefined) {
    updateFields.push('image = ?');
    values.push(projectData.image);
  }

  if (projectData.description !== undefined) {
    updateFields.push('description = ?');
    values.push(projectData.description);
  }

  if (projectData.background_color !== undefined) {
    updateFields.push('background_color = ?');
    values.push(projectData.background_color);
  }

  if (projectData.client !== undefined) {
    updateFields.push('client = ?');
    values.push(projectData.client);
  }

  if (projectData.overview !== undefined) {
    updateFields.push('overview = ?');
    values.push(projectData.overview);
  }

  if (updateFields.length === 0) {
    return false; // No fields to update
  }

  // Add id to values array
  values.push(id);

  const [result] = await pool.execute<ResultSetHeader>(
    `UPDATE projects SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = ?`,
    values
  );

  return result.affectedRows > 0;
};

export const deleteProject = async (id: string): Promise<boolean> => {
  const [result] = await pool.execute<ResultSetHeader>('DELETE FROM projects WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

// Helper function to generate a unique ID for projects
function generateUniqueId(): string {
  return 'proj_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}