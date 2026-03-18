import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';

class AdminController {
  static async register(req, res) {
    try {
      const { username, email, password, first_name, last_name, phone } = req.body;

      // Validate input
      if (!username || !email || !password) {
        return res.status(400).json({ 
          success: false, 
          message: 'Username, email and password are required' 
        });
      }

      // Check if admin already exists
      const existingAdmin = await Admin.findByUsername(username);
      if (existingAdmin) {
        return res.status(409).json({ 
          success: false, 
          message: 'Admin with this username already exists' 
        });
      }

      const existingEmail = await Admin.findByEmail(email);
      if (existingEmail) {
        return res.status(409).json({ 
          success: false, 
          message: 'Admin with this email already exists' 
        });
      }

      // Create new admin
      const result = await Admin.create({
        username,
        email,
        password,
        first_name,
        last_name,
        phone
      });

      res.status(201).json({
        success: true,
        message: 'Admin created successfully',
        adminId: result.insertId
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async login(req, res) {
    try {
      const { username, password } = req.body;

      // Validate input
      if (!username || !password) {
        return res.status(400).json({
          success: false,
          message: 'Username and password are required'
        });
      }

      // Find admin by username
      const admin = await Admin.findByUsername(username);
      if (!admin) {
        return res.status(401).json({
          success: false,
          message: 'Invalid username or password'
        });
      }

      // Verify password
      const passwordMatch = await Admin.verifyPassword(password, admin.password);
      if (!passwordMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid username or password'
        });
      }

      // Update last login
      await Admin.updateLastLogin(admin.id);

      // Generate JWT token
      const token = jwt.sign(
        {
          id: admin.id,
          username: admin.username,
          email: admin.email
        },
        process.env.JWT_SECRET || 'your_jwt_secret_key_here',
        { expiresIn: '24h' }
      );

      res.json({
        success: true,
        message: 'Login successful',
        token,
        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          first_name: admin.first_name,
          last_name: admin.last_name
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getProfile(req, res) {
    try {
      const adminId = req.admin.id;
      const admin = await Admin.findById(adminId);

      if (!admin) {
        return res.status(404).json({
          success: false,
          message: 'Admin not found'
        });
      }

      res.json({
        success: true,
        admin: {
          id: admin.id,
          username: admin.username,
          email: admin.email,
          first_name: admin.first_name,
          last_name: admin.last_name,
          phone: admin.phone,
          created_at: admin.created_at
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getAllAdmins(req, res) {
    try {
      const admins = await Admin.getAll();
      res.json({
        success: true,
        count: admins.length,
        admins
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async deleteAdmin(req, res) {
    try {
      const { id } = req.params;
      await Admin.delete(id);
      res.json({
        success: true,
        message: 'Admin deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

export default AdminController;
