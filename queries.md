# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
SELECT ProductName, CategoryName
FROM Products AS P
JOIN Categories AS C
ON P.CategoryID = C.CategoryId;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.
SELECT o.orderid as Id, s.shippername as Shipper
FROM orders AS o
JOIN shippers AS s
ON o.shipperid = s.shipperid
WHERE o.orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
SELECT O.OrderId as OrderId, P.ProductName, O.Quantity as Quantity
FROM OrderDetails AS O
JOIN Products AS P
ON O.ProductId = P.ProductId
WHERE OrderId = '10251';

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.
SELECT O.OrderId as OrderId, C.CustomerName as CustomerName, E.LastName as EmployeeLastName
FROM Orders AS O
JOIN Customers AS C
ON O.CustomerID = C.CustomerId
JOIN Employees AS E
ON O.EmployeeId = E.EmployeeId;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 