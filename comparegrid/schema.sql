DROP DATABASE IF EXISTS Nozama;

CREATE DATABASE Nozama;

USE Nozama;

CREATE TABLE toys (
  -- PRIMARY KEY (ID),
  ProductName varchar(100) NOT NULL,
  PicUrl VARCHAR(200) NOT NULL,
  Price decimal(7,2) NOT NULL,
  MadeInUsa varchar(5) NOT NULL,
  Size VARCHAR(25) NOT NULL,
  Weight VARCHAR(25) NOT NULL,
  EmirpShip VARCHAR(5) NOT NULL,
  Agerating VARCHAR(3) NOT NULL,
  Stars decimal(7,2) NOT NULL,
  Vendor VARCHAR(75) NOT NULL
);

INSERT INTO toys (PRODUCTNAME, PICURL, Weight , PRICE, MadeInUsa, Size, EmirpShip, Agerating, Stars, VENDOR) VALUES ('Dragonball-Z Goku Eating Noodles Nozama Exclusive', 'https://images-na.ssl-images-amazon.com/images/I/61SabM4R5fL._AC_SL1300_.jpg', '225 pounds', '12.99', 'Yes', '3 ¾ inches tall', '✓', 'E', '5.0', 'Funko'),       
('Funko Pop! Games: Pokemon - Mr. Mime', 'https://images-na.ssl-images-amazon.com/images/I/51vhsPiPwHL._AC_SL1300_.jpg', '3.48 ounces', '10.99', 'Yes', '3 ¾ inches tall', '✓', 'E', '5.0', 'Funko'),
('Funko Pop! Pokemon - Pikachu (Waving)', 'https://images-na.ssl-images-amazon.com/images/I/31dQTRb3vHL._AC_.jpg', '3.26 ounces', '10.23', 'Yes','3 ¾ inches tall', '✓', 'E', '5.0', 'Funko'), 
('Funko POP! Animation: My Hero Academia - Deku Collectible Figure, Multicolor', 'https://images-na.ssl-images-amazon.com/images/I/61iJvRVqNrL._AC_SL1234_.jpg', '3.8 ounces', '799.99', 'No','3 ¾ inches tall', '✓', 'T', '5.0', 'Funko'), 
('Funko POP! Anime: Dragonball Z Final Form Frieza Action Figure', 'https://images-na.ssl-images-amazon.com/images/I/516hzSykxHL._AC_SL1000_.jpg', '3.8 ounces', '9.99','Yes', '3 ¾ inches', '✓', 'E', '3.4', 'Funko'), 
('Funko POP Anime: Sailor Moon with Luna Action Figure', 'https://images-na.ssl-images-amazon.com/images/I/51L0ERSzJYL._AC_.jpg', '4.8 ounces', '41.79', 'No', '3 ¾ inches tall', '✓', 'E', '4.4', 'Funko')                                                                                                       