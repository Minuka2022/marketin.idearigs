import pool from '../config/db';
import { RowDataPacket } from 'mysql2';

export interface GalleryImage extends RowDataPacket {
  id: number;
  project_id: string;
  image_url: string;
  created_at: Date;
}

export const addGalleryImage = async (projectId: string, imageUrl: string) => {
  const [result] = await pool.execute(
    'INSERT INTO project_gallery (project_id, image_url) VALUES (?, ?)',
    [projectId, imageUrl]
  );
  return result;
};

export const getGalleryByProjectId = async (projectId: string): Promise<GalleryImage[]> => {
  const [rows] = await pool.query<GalleryImage[]>(
    'SELECT * FROM project_gallery WHERE project_id = ?',
    [projectId]
  );
  return rows;
};

export const deleteGalleryImage = async (imageId: number) => {
  const [result] = await pool.execute(
    'DELETE FROM project_gallery WHERE id = ?',
    [imageId]
  );
  return result;
};

export const deleteGalleryByProjectId = async (projectId: string) => {
  const [result] = await pool.execute(
    'DELETE FROM project_gallery WHERE project_id = ?',
    [projectId]
  );
  return result;
};