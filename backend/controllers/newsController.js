import News from '../models/News.js';

class NewsController {
  static async create(req, res) {
    try {
      const { title, text } = req.body;
      const admin_id = req.user?.id; // З tokenu

      // Validate input
      if (!title || !text) {
        return res.status(400).json({
          success: false,
          message: 'Title and text are required'
        });
      }

      // Create new news
      const result = await News.create({
        title,
        text,
        admin_id
      });

      res.status(201).json({
        success: true,
        message: 'News created successfully',
        newsId: result.insertId
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getAll(req, res) {
    try {
      const news = await News.getAll();
      
      res.status(200).json({
        success: true,
        data: news
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      
      const news = await News.getById(id);
      if (!news) {
        return res.status(404).json({
          success: false,
          message: 'News not found'
        });
      }

      res.status(200).json({
        success: true,
        data: news
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { title, text } = req.body;

      if (!title || !text) {
        return res.status(400).json({
          success: false,
          message: 'Title and text are required'
        });
      }

      const result = await News.update(id, { title, text });

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: 'News not found'
        });
      }

      res.status(200).json({
        success: true,
        message: 'News updated successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      const result = await News.delete(id);

      res.status(200).json({
        success: true,
        message: 'News deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }
}

export default NewsController;
