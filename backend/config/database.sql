-- Create database
CREATE DATABASE IF NOT EXISTS lobbyco_db;
USE lobbyco_db;

-- Create admin table
CREATE TABLE IF NOT EXISTS admin (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_active BOOLEAN DEFAULT TRUE
);

-- Create members table
CREATE TABLE IF NOT EXISTS members (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  membership_status VARCHAR(50),
  joined_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create audit log table
CREATE TABLE IF NOT EXISTS audit_log (
  id INT PRIMARY KEY AUTO_INCREMENT,
  admin_id INT,
  action VARCHAR(255),
  table_name VARCHAR(100),
  record_id INT,
  old_values JSON,
  new_values JSON,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES admin(id)
);

-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  text LONGTEXT NOT NULL,
  admin_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_published BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (admin_id) REFERENCES admin(id)
);

-- Create indexes
CREATE INDEX idx_admin_username ON admin(username);
CREATE INDEX idx_admin_email ON admin(email);
CREATE INDEX idx_members_email ON members(email);
CREATE INDEX idx_audit_admin_id ON audit_log(admin_id);
CREATE INDEX idx_news_admin_id ON news(admin_id);
CREATE INDEX idx_news_published ON news(is_published);
