import pool from '../config/database.js';
import bcrypt from 'bcryptjs';

class Admin {
  static async create(adminData) {
    const { username, email, password, first_name, last_name, phone } = adminData;
    
    try {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      
      const query = `
        INSERT INTO admin (username, email, password, first_name, last_name, phone)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      
      const [result] = await pool.execute(query, [
        username,
        email,
        hashedPassword,
        first_name,
        last_name,
        phone
      ]);
      
      return result;
    } catch (error) {
      throw new Error(`Error creating admin: ${error.message}`);
    }
  }

  static async findByUsername(username) {
    try {
      const query = 'SELECT * FROM admin WHERE username = ? AND is_active = TRUE';
      const [rows] = await pool.execute(query, [username]);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Error finding admin: ${error.message}`);
    }
  }

  static async findByEmail(email) {
    try {
      const query = 'SELECT * FROM admin WHERE email = ? AND is_active = TRUE';
      const [rows] = await pool.execute(query, [email]);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Error finding admin by email: ${error.message}`);
    }
  }

  static async findById(id) {
    try {
      const query = 'SELECT * FROM admin WHERE id = ? AND is_active = TRUE';
      const [rows] = await pool.execute(query, [id]);
      return rows[0] || null;
    } catch (error) {
      throw new Error(`Error finding admin by id: ${error.message}`);
    }
  }

  static async verifyPassword(plainPassword, hashedPassword) {
    try {
      return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
      throw new Error(`Error verifying password: ${error.message}`);
    }
  }

  static async updateLastLogin(id) {
    try {
      const query = 'UPDATE admin SET updated_at = CURRENT_TIMESTAMP WHERE id = ?';
      await pool.execute(query, [id]);
    } catch (error) {
      throw new Error(`Error updating last login: ${error.message}`);
    }
  }

  static async getAll() {
    try {
      const query = 'SELECT id, username, email, first_name, last_name, phone, created_at, is_active FROM admin WHERE is_active = TRUE';
      const [rows] = await pool.execute(query);
      return rows;
    } catch (error) {
      throw new Error(`Error getting admins: ${error.message}`);
    }
  }

  static async delete(id) {
    try {
      const query = 'UPDATE admin SET is_active = FALSE WHERE id = ?';
      await pool.execute(query, [id]);
    } catch (error) {
      throw new Error(`Error deleting admin: ${error.message}`);
    }
  }
}

export default Admin;
