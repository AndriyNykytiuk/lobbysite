import pool from '../config/database.js';

class News {
  static async create(newsData) {
    const { title, text, admin_id } = newsData;
    
    try {
      const query = `
        INSERT INTO news (title, text, admin_id)
        VALUES (?, ?, ?)
      `;
      
      const [result] = await pool.execute(query, [
        title,
        text,
        admin_id
      ]);
      
      return result;
    } catch (error) {
      throw new Error(`Error creating news: ${error.message}`);
    }
  }

  static async getAll() {
    try {
      const query = `
        SELECT n.*, a.username as admin_username 
        FROM news n 
        LEFT JOIN admin a ON n.admin_id = a.id 
        WHERE n.is_published = TRUE 
        ORDER BY n.created_at DESC
      `;
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw new Error(`Error getting news: ${error.message}`);
    }
  }

  static async getById(id) {
    try {
      const query = `
        SELECT n.*, a.username as admin_username 
        FROM news n 
        LEFT JOIN admin a ON n.admin_id = a.id 
        WHERE n.id = ? AND n.is_published = TRUE
      `;
      const [rows] = await pool.execute(query, [id]);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Error getting news by id: ${error.message}`);
    }
  }

  static async update(id, newsData) {
    const { title, text } = newsData;
    
    try {
      const query = `
        UPDATE news 
        SET title = ?, text = ?, updated_at = CURRENT_TIMESTAMP 
        WHERE id = ?
      `;
      
      const [result] = await pool.execute(query, [
        title,
        text,
        id
      ]);
      
      return result;
    } catch (error) {
      throw new Error(`Error updating news: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const query = 'UPDATE news SET is_published = FALSE WHERE id = ?';
      await pool.execute(query, [id]);
    } catch (error) {
      throw new Error(`Error deleting news: ${error.message}`);
    }
  }
}

export default News;
