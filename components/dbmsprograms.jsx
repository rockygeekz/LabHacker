const dbmsPrograms = [
    {
      id: 6,
      name: "Program 6",
      code: 
`

CREATE TABLE O_RollCall (
    roll INT,
    name VARCHAR(10)
);

CREATE TABLE N_RollCall (
    roll INT,
    name VARCHAR(10)
);

INSERT INTO O_RollCall VALUES (1, 'bc');
INSERT INTO O_RollCall VALUES (3, 'bcd');
INSERT INTO O_RollCall VALUES (4, 'd');
INSERT INTO O_RollCall VALUES (5, 'bch');

INSERT INTO N_RollCall VALUES (1, 'bc');
INSERT INTO N_RollCall VALUES (2, 'b');
INSERT INTO N_RollCall VALUES (5, 'bch');
SELECT * FROM O_RollCall;
SELECT * FROM N_RollCall;


DECLARE 
    v_count NUMBER; 
    CURSOR c_new_rollcall IS 
        SELECT roll, name 
        FROM N_RollCall; 
BEGIN 
    FOR new_rec IN c_new_rollcall LOOP 
        -- Check if the record already exists in O_RollCall 
        SELECT COUNT(*) 
        INTO   v_count 
        FROM   O_RollCall 
        WHERE  roll = new_rec.roll; 
 
        -- If record doesn't exist, insert it 
        IF v_count = 0 THEN 
            INSERT INTO O_RollCall (roll, name) 
            VALUES (new_rec.roll, new_rec.name); 
            DBMS_OUTPUT.PUT_LINE('Record inserted: ' || new_rec.roll); 
        ELSE 
            DBMS_OUTPUT.PUT_LINE('Record skipped: ' || new_rec.roll); 
        END IF; 
    END LOOP; 
    COMMIT; 
END; 
/
 SELECT * FROM N_RollCall;
 SELECT * FROM O_RollCall;
 
 `,
    },
    {
      id: 5,
      name: "Program 5",
      code:
 `
CREATE TABLE EMPLOYEE5 
     ( 
     E_ID INT PRIMARY KEY, 
     E_NAME VARCHAR (15), 
     AGE INT, 
     SALARY DECIMAL (10, 2) 
     ); 
 
 
INSERT INTO EMPLOYEE5 VALUES (1, 'Ramesh', 32, 2000.00); 
INSERT INTO EMPLOYEE5 VALUES (2, 'Khilan', 25,1500.00); 
INSERT INTO EMPLOYEE5 VALUES (3, 'Kaushik', 23,2000.00); 
INSERT INTO EMPLOYEE5 VALUES (4, 'Chaitali', 25,6500.00);

DECLARE 
    E_id Employee5.E_id%TYPE; 
    E_name Employee5.E_name%TYPE; 
    Age Employee5.Age%TYPE; 
    Salary Employee5.Salary%TYPE; 

    -- Declare cursor 
    CURSOR employee_cursor IS 
        SELECT E_id, E_name, Age, Salary 
        FROM Employee5; 
BEGIN 
    -- Open the cursor 
    OPEN employee_cursor; 

    -- Fetch data from cursor 
    LOOP 
        FETCH employee_cursor INTO E_id, E_name, Age, Salary; 
        EXIT WHEN employee_cursor%NOTFOUND;

        DBMS_OUTPUT.PUT_LINE('Employee ID: ' || E_id || ', Name: ' || E_name || ', Age: ' || Age || ', Salary: ' || Salary); 
    END LOOP; 

    CLOSE employee_cursor; 
END; 
/
 `,
    },{
      id:4,
      name:"Program 4",
      code:String.raw
      `SET SERVEROUTPUT ON;


CREATE TABLE CUSTOMER (
ID INT PRIMARY KEY,
NAME VARCHAR(10),
AGE INT,
ADDRESS VARCHAR(10),
SALARY number(10, 2)
);


INSERT INTO CUSTOMER values(1,'Ramesh',25,'Mysore',200000);
INSERT INTO CUSTOMER values(2,'Komal',35,'Bangalore',800000);
INSERT INTO CUSTOMER values(3,'Mala',45,'Mangalore',56000);

select * from CUSTOMER;
CREATE OR REPLACE TRIGGER sal_difference_trigger
BEFORE INSERT OR UPDATE OR DELETE ON CUSTOMER
FOR EACH ROW
DECLARE
old_salary NUMBER;
new_salary NUMBER;
BEGIN
IF INSERTING OR UPDATING THEN
old_salary := NVL(:OLD.SALARY, 0);
new_salary := NVL(:NEW.SALARY, 0);
DBMS_OUTPUT.PUT_LINE('Salary difference: ' || (new_salary - old_salary));
ELSIF DELETING THEN
old_salary := NVL(:OLD.SALARY, 0);
DBMS_OUTPUT.PUT_LINE('Salary before deletion: ' || old_salary);
END IF;
END;
/
select * from CUSTOMER;
INSERT INTO CUSTOMER values(4,'Mala',45,'Hassan',60000);
select * from CUSTOMER;
update CUSTOMER set salary =salary+500 where id=2;  
select * from CUSTOMER;
delete from CUSTOMER where id=2;
 `
    }
    // Add more DBMS programs as needed
  ];
  
  export default dbmsPrograms;
  