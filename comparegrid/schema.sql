DROP DATABASE IF EXISTS Nozama;

CREATE DATABASE Nozama;

USE Nozama;

CREATE TABLE toys (
  uid VARCHAR(10) NOT NULL PRIMARY KEY,
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

CREATE TABLE sports (
  uid VARCHAR(10) NOT NULL PRIMARY KEY,
  ProductName varchar(100) NOT NULL,
  PicUrl VARCHAR(200) NOT NULL,
  Ball varchar(10) NOT NULL,
  WideMouth varchar(10) NOT NULL,
  Markings VARCHAR(10) NOT NULL,
  Fits VARCHAR(10) NOT NULL,
  Bpa VARCHAR(20) NOT NULL,
  Carry VARCHAR(10) NOT NULL,
  Materials VARCHAR(100) NOT NULL,
  Dish VARCHAR(35) NOT NULL,
  Price VARCHAR(72) NOT NULL,
  EmirpShip VARCHAR(5) NOT NULL
);

INSERT INTO toys (UID, PRODUCTNAME, PICURL, Weight, PRICE, MadeInUsa, Size, EmirpShip, Agerating, Stars, VENDOR) VALUES ('1', 'Dragonball-Z Goku Eating Noodles Nozama Exclusive', 'https://images-na.ssl-images-amazon.com/images/I/61SabM4R5fL._AC_SL1300_.jpg', '225 pounds', '12.99', 'Yes', '3 ¾ inches tall', '✓', 'E', '5.0', 'Funko'),       
('1', 'Funko Pop! Games: Pokemon - Mr. Mime', 'https://images-na.ssl-images-amazon.com/images/I/51vhsPiPwHL._AC_SL1300_.jpg', '3.48 ounces', '10.99', 'Yes', '3 ¾ inches tall', '✓', 'E', '5.0', 'Funko'),
('1', 'Funko Pop! Pokemon - Pikachu (Waving)', 'https://images-na.ssl-images-amazon.com/images/I/31dQTRb3vHL._AC_.jpg', '3.26 ounces', '10.23', 'Yes','3 ¾ inches tall', '✓', 'E', '5.0', 'Funko'), 
('1', 'Funko POP! Animation: My Hero Academia - Deku Collectible Figure, Multicolor', 'https://images-na.ssl-images-amazon.com/images/I/61iJvRVqNrL._AC_SL1234_.jpg', '3.8 ounces', '799.99', 'No','3 ¾ inches tall', '✓', 'T', '5.0', 'Funko'), 
('1', 'Funko POP! Anime: Dragonball Z Final Form Frieza Action Figure', 'https://images-na.ssl-images-amazon.com/images/I/516hzSykxHL._AC_SL1000_.jpg', '3.8 ounces', '9.99','Yes', '3 ¾ inches', '✓', 'E', '3.4', 'Funko'), 
('1', 'Funko POP Anime: Sailor Moon with Luna Action Figure', 'https://images-na.ssl-images-amazon.com/images/I/51L0ERSzJYL._AC_.jpg', '4.8 ounces', '41.79', 'No', '3 ¾ inches tall', '✓', 'E', '4.4', 'Funko')

INSERT INTO sports (UID, PRODUCTNAME, PICURL, Ball, WideMouth, Markings, Fits, Bpa, Carry, Materials, Dish, Price, EmirpShip) VALUES ('2', 'BlenderBottle Classic Loop Top Shaker Bottle', 'https://cdn.shopify.com/s/files/2/1099/1898/products/PS_-Shopping-Cart-FCBlack.png?v=1579910436', '✓', '✓', '✓', '✓', '✓', 'BPA- and phthalate-free plastic', '✓', '$7.80', '✓'),       
('2', 'BlenderBottle Pro Series Shaker Bottle', 'https://m.media-amazon.com/images/S/aplus-media/vc/369e0d60-1714-4ef1-a4ce-0d8b93eca7f9.__CR625,0,1250,2500_PT0_SX150_V1___.jpg', '✓', '✓', '✓', '✓', '✓', 'Eastman Tritan plastic', '✓', '$12.00', '✓'),
('2', 'BlenderBottle Radian Insulated Stainless Steel Shaker Bottle', 'https://m.media-amazon.com/images/S/aplus-media/vc/ecef5a56-1eda-444f-bfd9-4ff55aa7bfda.__CR625,0,1250,2500_PT0_SX150_V1___.jpg', '✓', '✓', '✓', '✓', '✓', 'Insulated stainless steel', 'Lid is dishwasher safe, hand wash cup', '$17.47', '✓'), 
('2', 'BlenderBottle Mantra Glass Shaker Bottle', 'https://m.media-amazon.com/images/S/aplus-media/vc/06963dc5-aeaa-4d4c-a327-48da5af14b47.__CR625,0,1250,2500_PT0_SX150_V1___.jpg', '✓', '✓', '✓', '✓', '✓', 'Glass and silicone', '✓', '$19.99', '✓'), 
('2', 'BlenderBottle SportMixer Twist Cap Tritan Grip Shaker Bottle', 'https://m.media-amazon.com/images/S/aplus-media/vc/caae9bd6-5295-4451-9396-de44d52f08da.__CR716,0,1250,2500_PT0_SX150_V1___.jpg', '✓', '✓', '✓', '✓', '✓', 'Eastman Tritan plastic', '✓', '$13.00', '✓'), 
('2', 'BlenderBottle ProStak System with 22-Ounce Bottle and Twist n'/' Lock Storage', 'https://m.media-amazon.com/images/S/aplus-media/vc/c51ba21a-23e8-455e-abbc-983a85236daf.__CR71,0,314,628_PT0_SX150_V1___.png', '✓', '✓', '✓', '✓', '✓', 'BPA- and phthalate-free plastic', '✓', 'Currently unavailable', '✓')

