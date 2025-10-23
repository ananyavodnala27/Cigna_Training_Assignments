
DROP TABLE Products;

DROP TABLE Customers;

DROP TABLE Orders;

DROP TABLE OrderDetails;

CREATE TABLE Products(
    Product_ID NUMBER PRIMARY KEY,
    Product_Name VARCHAR2(20) NOT NULL,
    Product_Category VARCHAR2(20) NOT NULL,
    Price NUMBER(10,2) CHECK( Price > 0),
    Stock_Quantity NUMBER DEFAULT 0
);

CREATE TABLE Customers(
    Customer_ID NUMBER PRIMARY KEY,
    First_Name VARCHAR2(20) NOT NULL,
    Last_Name VARCHAR2(20) NOT NULL,
    Email_ID VARCHAR2(15) UNIQUE,
    Phone VARCHAR(15) UNIQUE
);

CREATE TABLE Orders(
    Order_ID NUMBER PRIMARY KEY,
    Customer_ID NUMBER,
    Order_Date DATE DEFAULT SYSDATE,
    Total_Amount NUMBER CHECK(Total_Amount > 0),
    CONSTRAINT fk_orders_customers FOREIGN KEY (Customer_ID) REFERENCES Customers(Customer_ID) ON DELETE CASCADE
);

CREATE TABLE OrderDetails(
    OrderDetails_ID NUMBER PRIMARY KEY,
    Product_ID NUMBER,
    Order_ID NUMBER,
    OrdDet_Quantity NUMBER CHECK(OrdDet_Quantity > 0),
    CONSTRAINT fk_orderdeatils_prodcus FOREIGN KEY (Product_ID) REFERENCES Products(Product_ID) ON DELETE CASCADE,
    CONSTRAINT fk_orderdetails_orders FOREIGN KEY (Order_ID) REFERENCES Orders(Order_ID) ON DELETE CASCADE
);

SELECT * FROM Products;

SELECT * FROM Customers;

SELECT * FROM Orders;

SELECT * FROM OrderDetails;

INSERT INTO Products(Product_ID, Product_Name, Product_Category, Price, Stock_Quantity) VALUES (10, 'Laptop', 'Electronics', 65000, 50);
INSERT INTO Products(Product_ID, Product_Name, Product_Category, Price, Stock_Quantity) VALUES (11, 'Charger', 'Accessories', 5200, 10);
INSERT INTO Products(Product_ID, Product_Name, Product_Category, Price, Stock_Quantity) VALUES (12, 'Headphones', 'Audio', 10000, 15);
INSERT INTO Products(Product_ID, Product_Name, Product_Category, Price, Stock_Quantity) VALUES (13, 'Adapter', 'Accessories', 5000, 20);

ALTER TABLE Customers MODIFY Email_ID VARCHAR(30);

INSERT INTO Customers(Customer_ID, First_Name, Last_Name, Email_ID, Phone) VALUES (1, 'Akhil', 'Bharadwaj', 'akhilbharadwaj12@gmail.com', 9807146600);
INSERT INTO Customers(Customer_ID, First_Name, Last_Name, Email_ID, Phone) VALUES (2, 'Sonali', 'Singh', 'sonalisingh1009@gmail.com', 9807145500);
INSERT INTO Customers(Customer_ID, First_Name, Last_Name, Email_ID, Phone) VALUES (3, 'Ramya', 'Shetty', 'ramyashetty4512@gmail.com', 9807142200);
INSERT INTO Customers(Customer_ID, First_Name, Last_Name, Email_ID, Phone) VALUES (4, 'Sakshi', 'Malik', 'sashimalik20@gmail.com', 9807143300);

INSERT INTO Orders(Order_ID, Customer_ID, Order_Date, Total_Amount) VALUES (200, 1, TO_DATE('2025-10-01', 'YYYY-MM-DD'), 65000);
INSERT INTO Orders(Order_ID, Customer_ID, Order_Date, Total_Amount) VALUES (201, 1, TO_DATE('2025-09-11', 'YYYY-MM-DD'), 5000);
INSERT INTO Orders(Order_ID, Customer_ID, Order_Date, Total_Amount) VALUES (202, 2, TO_DATE('2025-08-15', 'YYYY-MM-DD'), 10000);
INSERT INTO Orders(Order_ID, Customer_ID, Order_Date, Total_Amount) VALUES (203, 3, TO_DATE('2025-10-20', 'YYYY-MM-DD'), 5200);

INSERT INTO OrderDetails(OrderDetails_ID , Product_ID, Order_ID, OrdDet_Quantity) VALUES (2001, 10, 200, 1);
INSERT INTO OrderDetails(OrderDetails_ID , Product_ID, Order_ID, OrdDet_Quantity) VALUES (2002, 13, 201, 1);
INSERT INTO OrderDetails(OrderDetails_ID , Product_ID, Order_ID, OrdDet_Quantity) VALUES (2003, 12, 202, 1);
INSERT INTO OrderDetails(OrderDetails_ID , Product_ID, Order_ID, OrdDet_Quantity) VALUES (2004, 11, 203, 1);

-- 1. Retreive products with low stock (eg., less than 20 units)
SELECT Product_ID, Product_Name FROM products WHERE Stock_Quantity < 20;

--2. Calculate the total amount spent by each customer
    -- Without customers first name and last name
SELECT Customer_ID, SUM(Total_Amount) FROM Orders GROUP BY Customer_ID;

-- SELECT Customer_ID, COUNT(Customer_ID) FROM Orders GROUP BY Customer_ID;

--2. Calculate the total amount spent by each customer
    -- With customers first name and last name requires us to use JOIN operation
SELECT c.Customer_ID, c.First_Name, c.Last_Name, SUM(o.Total_Amount) FROM Customers c JOIN Orders o ON c.Customer_ID = o.Customer_ID GROUP BY c.Customer_ID, c.First_Name, c.Last_Name;

-- 3. Update product stock quantites after orders are placed to replace purchased items
-- SELECT p.Product_ID, SUM(OD.OrdDet_Quantity) FROM Products p, OrderDetails od WHERE p.Product_ID = od.Product_ID GROUP BY p.Product_ID;

-- SELECT SUM(od.OrdDet_Quantity) FROM Products p, OrderDetails od WHERE od.Product_ID = p.Product_ID; -- OUTPUT - 4

-- SELECT SUM(od.OrdDet_Quantity) FROM Products p, OrderDetails od WHERE od.Product_ID = p.Product_ID GROUP BY p.Product_ID; -- GROUPS BY EACH PODUCT, SO 1, 1, 1, 1

UPDATE Products p SET Stock_Quantity = Stock_Quantity - (SELECT SUM(od.OrdDet_Quantity) FROM OrderDetails od WHERE od.Product_ID = p.Product_ID);
SELECT * FROM Products;

-- UPDATE Products p SET Stock_Quantity = Stock_Quantity - (SELECT SUM(od.OrdDet_Quantity) FROM OrderDetails od WHERE od.Product_ID = p.Product_ID GROUP BY p.Product_ID); -- NO NEED FOR GROUP BY, IT CHANGES NOTHING AS THE SUBQUERY ONLY CONSIDERS ONE PRODUCT

-- THIS GIVES CARTESIAN PRODUCT CAUSE WE SELECTED COLUMNS FROM 2 TABLES WITHOUT APPLYING JOIN OPERATION, SO BY DEFAULT IT GIVES CARTESIAN PRODUCT
-- SELECT p.Product_ID, o.Product_ID, Product_Name, Stock_Quantity, OrdDet_Quantity FROM Products p, OrderDetails o;
