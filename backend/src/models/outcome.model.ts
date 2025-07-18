import pool from '../config/db';
import { RowDataPacket } from 'mysql2';

export interface OutcomeStat extends RowDataPacket {
  id: number;
  project_id: string;
  label: string;
  value: string;
  created_at: Date;
}

export interface OutcomeQuote extends RowDataPacket {
  id: number;
  project_id: string;
  quote: string;
  author: string;
  author_title: string;
  created_at: Date;
  updated_at: Date;
}

// Stats Methods
export const addOutcomeStat = async (projectId: string, label: string, value: string) => {
  const [result] = await pool.execute(
    'INSERT INTO project_outcome_stats (project_id, label, value) VALUES (?, ?, ?)',
    [projectId, label, value]
  );
  return result;
};

export const getOutcomeStatsByProjectId = async (projectId: string): Promise<OutcomeStat[]> => {
  const [rows] = await pool.query<OutcomeStat[]>(
    'SELECT * FROM project_outcome_stats WHERE project_id = ?',
    [projectId]
  );
  return rows;
};

export const updateOutcomeStat = async (statId: number, label: string, value: string) => {
  const [result] = await pool.execute(
    'UPDATE project_outcome_stats SET label = ?, value = ? WHERE id = ?',
    [label, value, statId]
  );
  return result;
};

export const deleteOutcomeStat = async (statId: number) => {
  const [result] = await pool.execute(
    'DELETE FROM project_outcome_stats WHERE id = ?',
    [statId]
  );
  return result;
};

export const deleteOutcomeStatsByProjectId = async (projectId: string) => {
  const [result] = await pool.execute(
    'DELETE FROM project_outcome_stats WHERE project_id = ?',
    [projectId]
  );
  return result;
};

// Quote Methods
export const addOrUpdateOutcomeQuote = async (
  projectId: string,
  quote: string,
  author: string,
  authorTitle: string
) => {
  // Check if quote exists for project
  const [existingQuotes] = await pool.query<OutcomeQuote[]>(
    'SELECT * FROM project_outcome_quotes WHERE project_id = ?',
    [projectId]
  );

  if (existingQuotes.length > 0) {
    // Update existing quote
    const [result] = await pool.execute(
      'UPDATE project_outcome_quotes SET quote = ?, author = ?, author_title = ? WHERE project_id = ?',
      [quote, author, authorTitle, projectId]
    );
    return result;
  } else {
    // Insert new quote
    const [result] = await pool.execute(
      'INSERT INTO project_outcome_quotes (project_id, quote, author, author_title) VALUES (?, ?, ?, ?)',
      [projectId, quote, author, authorTitle]
    );
    return result;
  }
};

export const getOutcomeQuoteByProjectId = async (projectId: string): Promise<OutcomeQuote | null> => {
  const [rows] = await pool.query<OutcomeQuote[]>(
    'SELECT * FROM project_outcome_quotes WHERE project_id = ?',
    [projectId]
  );
  return rows[0] || null;
};

export const deleteOutcomeQuoteByProjectId = async (projectId: string) => {
  const [result] = await pool.execute(
    'DELETE FROM project_outcome_quotes WHERE project_id = ?',
    [projectId]
  );
  return result;
};