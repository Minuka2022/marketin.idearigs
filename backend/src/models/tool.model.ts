import pool from '../config/db';
import { RowDataPacket } from 'mysql2';

export interface Tool extends RowDataPacket {
  id: number;
  name: string;
  created_at: Date;
}

export const createTool = async (name: string) => {
  const [result] = await pool.execute('INSERT INTO tools (name) VALUES (?)', [name]);
  return result;
};

export const getToolById = async (id: number) => {
  const [rows] = await pool.query<Tool[]>('SELECT * FROM tools WHERE id = ?', [id]);
  return rows[0] || null;
};

export const getToolByName = async (name: string) => {
  const [rows] = await pool.query<Tool[]>('SELECT * FROM tools WHERE name = ?', [name]);
  return rows[0] || null;
};

export const getOrCreateTool = async (name: string) => {
  let tool = await getToolByName(name);
  if (!tool) {
    await createTool(name);
    tool = await getToolByName(name);
  }
  return tool!;
};

export const getToolsByProjectId = async (projectId: string) => {
  const [rows] = await pool.query<Tool[]>(`
    SELECT t.* FROM tools t
    JOIN project_tools pt ON t.id = pt.tool_id
    WHERE pt.project_id = ?
  `, [projectId]);
  return rows;
};

export const addToolToProject = async (projectId: string, toolId: number) => {
  const [result] = await pool.execute(
    'INSERT INTO project_tools (project_id, tool_id) VALUES (?, ?)',
    [projectId, toolId]
  );
  return result;
};

export const removeToolFromProject = async (projectId: string, toolId: number) => {
  const [result] = await pool.execute(
    'DELETE FROM project_tools WHERE project_id = ? AND tool_id = ?',
    [projectId, toolId]
  );
  return result;
};

export const removeAllToolsFromProject = async (projectId: string) => {
  const [result] = await pool.execute(
    'DELETE FROM project_tools WHERE project_id = ?',
    [projectId]
  );
  return result;
};