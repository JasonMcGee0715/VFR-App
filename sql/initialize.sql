DROP TABLE IF EXISTS users,
businesses;


CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  firstName VARCHAR(25) NOT NULL,
  lastName VARCHAR(25) NOT NULL,
  city VARCHAR(25) NOT NULL,
  state VARCHAR(25) NOT NULL,
  county VARCHAR(25) NOT NULL,
  zip VARCHAR(25) NOT NULL,
  phone VARCHAR(25) NOT NULL,
  email VARCHAR(25) NOT NULL,
  userName VARCHAR(25) NOT NULL UNIQUE,
  password VARCHAR(25) NOT NULL
);

CREATE TABLE businesses (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
  name VARCHAR(25) NOT NULL,
  address VARCHAR(25) NOT NULL,
  city VARCHAR(25) NOT NULL,
  state VARCHAR(25) NOT NULL,
  zip VARCHAR(25) NOT NULL,
  chain VARCHAR(25) NOT NULL,
  militaryDiscount VARCHAR(25) NOT NULL
);

-- CREATE TABLE businessAddresses (
--   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL UNIQUE,
--   businessId INT NOT NULL,
--   name VARCHAR(25) NOT NULL,
--   address VARCHAR(50) NOT NULL,
--   city VARCHAR(50) NOT NULL,
--   state VARCHAR(50) NOT NULL
-- );

-- -- Example of how to create the relationship
-- CREATE TABLE businessInfo (
--   id INT AUTO_INCREMENT PRIMARY KEY,
--   fromBusinesses INT,
--   fromAddresses INT,
--   FOREIGN KEY (fromBusinesses) REFERENCES businesses(id) ON DELETE CASCADE,
--   FOREIGN KEY (fromAddresses) REFERENCES businessAddresses(businessId) ON DELETE CASCADE
-- );