DROP DATABASE IF EXISTS Nozama;

CREATE DATABASE Nozama;

USE Nozama;

CREATE TABLE mrproducts (
  id int NOT NULL AUTO_INCREMENT,
  ProductName varchar(50) NOT NULL,
  picurl VARCHAR(200) NOT NULL,
  Price decimal(7,2) NOT NULL,
  MadeInUsa varchar(5) NOT NULL,
  ItemDESCRIPTION VARCHAR(250) NOT NULL,
  Size VARCHAR(25) NOT NULL,
--   Weight DECIMAL(8,2) NOT NULL,
  emirpship VARCHAR(5) NOT NULL,
  Agerating VARCHAR(3) NOT NULL,
  stars NUMERIC(4) NOT NULL,
  Vendor VARCHAR(75) NOT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO mrproducts (PRODUCTNAME, PICURL, PRICE, MadeInUsa, ITEMDESCRIPTION, Size, emirpship, Agerating, stars, VENDOR) VALUES ('Dragonball-Z Goku Eating Noodles Nozama Exclusive', 'https://images-na.ssl-images-amazon.com/images/I/61SabM4R5fL._AC_SL1300_.jpg', '12.99', 'Yes', 'From Dragonball Z Goku Eating Noodles Exclusive as a Pop! vinyl from Funko! Figure stand 3.75 inches tall and comes in a window box display! Check out the other Dragonball Z figures by Funko collect them all!', 'Small', 'Yes', 'E', '5', 'Funko')                                                                                                       