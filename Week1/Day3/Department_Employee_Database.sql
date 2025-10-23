DROP TABLE Dept;

DROP TABLE Emps;

CREATE TABLE Dept (
    Deptno NUMBER(2) PRIMARY KEY,
    Dname VARCHAR2(20),
    Loc VARCHAR2(50)
);

CREATE TABLE Emps (
    Empno INT PRIMARY KEY,
    Ename VARCHAR2(20),
    EJob VARCHAR2(50),
    Salary NUMBER (10, 2),
    Deptno NUMBER(2),
    CONSTRAINT fk_emps_dept FOREIGN KEY (Deptno) REFERENCES Dept(Deptno) ON DELETE CASCADE
);

DELETE FROM Dept;

DELETE FROM Emps;

SELECT * FROM Dept;

SELECT * FROM Emps;

/*
INSERT INTO Dept (Deptno, Dname, Loc)
VALUES (10, 'HR', 'BLR');

INSERT INTO Dept (Deptno, Dname, Loc)
VALUES (11, 'IT', 'HYD');

INSERT INTO Dept (Deptno, Dname, Loc)
VALUES (12, 'Sales', 'DEL');

INSERT INTO Dept (Deptno, Dname, Loc)
VALUES (13, 'Consultancy', 'BLR');


INSERT INTO Emps (Empno, Ename, EJob, Salary, Deptno)
VALUES ('200', 'Abhi', 'Salesman', 30000, 10);

INSERT INTO Emps (Empno, Ename, EJob, Salary, Deptno)
VALUES ('201', 'Bhavya', 'Developer', 50000, 11);

INSERT INTO Emps (Empno, Ename, EJob, Salary, Deptno)
VALUES ('202', 'Kavya', 'Technician', 35000, 11);

INSERT INTO Emps (Empno, Ename, EJob, Salary, Deptno)
VALUES ('203', 'Roshini', 'Clerk', 25000, 13);
*/

INSERT INTO Dept  VALUES (10,'ACCOUNTING','NEW YORK');
INSERT INTO Dept VALUES (20,'RESEARCH','DALLAS');
INSERT INTO Dept VALUES (30,'SALES','CHICAGO');
INSERT INTO Dept VALUES (40,'OPERATIONS','BOSTON');

INSERT INTO Emps VALUES(7369,'SMITH','CLERK',800,  20);
INSERT INTO Emps VALUES(7499,'ALLEN','SALESMAN',1600,30);
INSERT INTO Emps VALUES(7521,'WARD','SALESMAN',1250,30);
INSERT INTO Emps VALUES(7566,'JONES','MANAGER',2975,20);
INSERT INTO Emps VALUES(7654,'MARTIN','SALESMAN',1250,30);
INSERT INTO Emps VALUES(7698,'BLAKE','MANAGER',7839,30);
INSERT INTO Emps VALUES(7782,'CLARK','MANAGER',7839,10);
INSERT INTO Emps VALUES(7788,'SCOTT','ANALYST',7566,20);
INSERT INTO Emps VALUES(7839,'KING','PRESIDENT',8900, 10);
INSERT INTO Emps VALUES(7844,'TURNER','SALESMAN',1500,30);
INSERT INTO Emps VALUES(7876,'ADAMS','CLERK',1100, 20);
INSERT INTO Emps VALUES(7900,'JAMES','CLERK',950,30);
INSERT INTO Emps VALUES(7902,'FORD','ANALYST',3000,20);
INSERT INTO Emps VALUES(7934,'MILLER','CLERK',1300,10);
INSERT INTO Emps (Empno, Ename) VALUES(7800, 'Bhavya');

-- QUERIES
-- 1. Display employee names along with their department names.
SELECT Ename, Dname FROM Dept d JOIN Emps e ON d.Deptno = e.Deptno;

-- 2. List all employees with their job titles and the location of their department.
SELECT Ename, EJob, Loc FROM Emps e JOIN Dept d ON e.Deptno = d.Deptno;

-- 3. Display employees who work in the SALES department.
SELECT Empno, Ename FROM Emps e WHERE e.Deptno = (SELECT Deptno FROM Dept WHERE Dname = 'SALES');

-- 4. List all employees along with their department name and location, including departments that have no employees.
SELECT Empno, Ename, Dname, Loc FROM Dept d LEFT JOIN Emps e ON d.Deptno = e.Deptno;

-- 5. Display all departments and employees, even if some employees are not assigned to any department.
SELECT Ename, Dname FROM Emps e FULL OUTER JOIN Dept d ON e.Deptno = d.Deptno;

-- 6. Show each department name and  total salary paid to its employees.
SELECT d.Deptno, Dname, NVL(SUM(Salary), 0) AS DeptTotSal FROM Dept d LEFT JOIN Emps e ON e.Deptno = d.Deptno GROUP BY d.Deptno, Dname;

-- 7. Find departments that have more than 3 employees.  Display dname and no. of employees.
SELECT Dname, COUNT(Empno) AS Emp_Count FROM Dept d LEFT JOIN Emps e ON e.Deptno = d.Deptno GROUP BY Dname HAVING COUNT(Empno) > 3;

-- 8. Display employees who work in the same location as the ACCOUNTING department.
UPDATE Dept SET Loc = 'NEW YORK' WHERE Deptno = 30;
SELECT Ename FROM Dept d JOIN Emps e ON e.Deptno = d.Deptno WHERE e.Deptno IN (SELECT Deptno FROM Dept WHERE Loc = 'NEW YORK' AND Dname <> 'ACCOUNTING');

-- 9. For each department, display the employee who has the highest salary.
SELECT Dname, Ename, Salary AS HighestPaidEmp FROM Dept d JOIN Emps e ON e.Deptno = d.Deptno WHERE Salary = (SELECT MAX(Salary) FROM Emps e WHERE e.Deptno = d.Deptno);
-- TO DISPLAY Dept with NO EMPS, LIKE OPERATIONS DEPT, THEN -
SELECT Dname, Ename, Salary AS HighestPaidEmp FROM Dept d LEFT JOIN Emps e ON e.Deptno = d.Deptno AND Salary = (SELECT MAX(Salary) FROM Emps e WHERE e.Deptno = d.Deptno);

-- 10. List employees whose salary is greater than the average salary of their department.
SELECT Empno, Ename, Dname, Salary AS GreaterThanAvg FROM Dept d JOIN Emps e ON e.Deptno = d.Deptno WHERE Salary > (SELECT AVG(Salary) FROM Emps WHERE deptno = d.Deptno) ORDER BY Dname, Salary DESC;
-- TO DISPLAY Dept with NO EMPS, LIKE OPERATIONS DEPT, THEN -
SELECT Empno, Ename, Dname, Salary AS GreaterThanAvg FROM Dept d LEFT JOIN Emps e ON e.Deptno = d.Deptno AND Salary > (SELECT AVG(Salary) FROM Emps WHERE deptno = d.Deptno);
