
-- 1. Calculate Simple Interest.
DECLARE
    p NUMBER := 5000; 
    r NUMBER := 4;  
    t NUMBER := 3;     
    si NUMBER;
BEGIN
    si := (p * r * t) / 100;
    DBMS_OUTPUT.PUT_LINE('Simple Interest = ' || si);
END;
/

-- 2. Employee Bonus Calculation.
DECLARE
    emp_name VARCHAR2(50);
    salary NUMBER;
    bonus NUMBER;
BEGIN
    emp_name := 'Abhi';
    salary := 52000;

    IF salary > 50000 THEN
        bonus := 0.10 * salary;
    ELSE
        bonus := 0.15 * salary;
    END IF;

    DBMS_OUTPUT.PUT_LINE('Employee Name: ' || emp_name);
    DBMS_OUTPUT.PUT_LINE('Salary: ' || salary);
    DBMS_OUTPUT.PUT_LINE('Bonus: ' || bonus);
END;
/

-- 3. Retrieve and Display Department Details.
DECLARE
    v_dept DEPT%ROWTYPE;
    v_dept_id DEPT.Deptno%TYPE := 10;  -- sample dept ID
BEGIN
    SELECT * INTO v_dept
    FROM DEPT
    WHERE Deptno = v_dept_id;

    DBMS_OUTPUT.PUT_LINE('Department Name: ' || v_dept.Dname);
    DBMS_OUTPUT.PUT_LINE('Location ID: ' || v_dept.LOC);
END;
/

-- 4. Student Marks Management
DECLARE
    TYPE marks_table IS TABLE OF NUMBER INDEX BY VARCHAR2(50);
    student_marks marks_table;

    v_name VARCHAR2(50);
    total NUMBER := 0;
    count_students NUMBER := 0;
    avg_marks NUMBER;
BEGIN
    student_marks('Harsha') := 90;
    student_marks('Sanjana') := 80;
    student_marks('Sandhya') := 95;

    v_name := student_marks.FIRST;

    WHILE v_name IS NOT NULL LOOP
        DBMS_OUTPUT.PUT_LINE(v_name || ' scored ' || student_marks(v_name));
        total := total + student_marks(v_name);
        count_students := count_students + 1;
        v_name := student_marks.NEXT(v_name);
    END LOOP;

    avg_marks := total / count_students;
    DBMS_OUTPUT.PUT_LINE('Total Marks = ' || total);
    DBMS_OUTPUT.PUT_LINE('Average Marks = ' || avg_marks);
END;
/

-- 5. Country - Capital Lookup
DECLARE
    TYPE country_capital_table IS TABLE OF VARCHAR2(50) INDEX BY VARCHAR2(50);
    country_capitals country_capital_table;

    v_country VARCHAR2(50);
BEGIN
    country_capitals('India') := 'New Delhi';
    country_capitals('Japan') := 'Tokyo';
    country_capitals('France') := 'Paris';

    v_country := '&country';

    IF country_capitals.EXISTS(v_country) THEN
        DBMS_OUTPUT.PUT_LINE('Capital of ' || v_country || ' is ' || country_capitals(v_country));
    ELSE
        DBMS_OUTPUT.PUT_LINE('Country not found.');
    END IF;
END;
/
