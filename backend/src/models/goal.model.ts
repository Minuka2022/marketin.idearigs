import pool from '../config/db';
import { RowDataPacket } from 'mysql2';

export interface Goal extends RowDataPacket {
  id: number;
  project_id: string;
  goal: string;
  created_at: Date;
}

export const createGoal = async (projectId: string, goalText: string) => {
  const [result] = await pool.execute(
    'INSERT INTO project_goals (project_id, goal) VALUES (?, ?)',
    [projectId, goalText]
  );
  return result;
};

export const getGoalsByProjectId = async (projectId: string): Promise<Goal[]> => {
  const [rows] = await pool.query<Goal[]>(
    'SELECT * FROM project_goals WHERE project_id = ?',
    [projectId]
  );
  return rows;
};

export const updateGoal = async (goalId: number, goalText: string) => {
  const [result] = await pool.execute(
    'UPDATE project_goals SET goal = ? WHERE id = ?',
    [goalText, goalId]
  );
  return result;
};

export const deleteGoal = async (goalId: number) => {
  const [result] = await pool.execute(
    'DELETE FROM project_goals WHERE id = ?',
    [goalId]
  );
  return result;
};

export const deleteGoalsByProjectId = async (projectId: string) => {
  const [result] = await pool.execute(
    'DELETE FROM project_goals WHERE project_id = ?',
    [projectId]
  );
  return result;
};