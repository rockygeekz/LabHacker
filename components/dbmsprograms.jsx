const dbmsPrograms = [
    {
      id: 6,
      name: "Program 6",
      code: 
`
create table O_RollCall (roll int,name varchar(10));
create table N_RollCall (roll int,name varchar(10));


insert into O_RollCall values(1,'bc');
insert into O_RollCall values(3,'bcd');
insert into O_RollCall values(4,'d');
insert into O_RollCall values(5,'bch');


insert into N_RollCall values(1,'bc');
insert into N_RollCall values(2,'b');
insert into N_RollCall values(5,'bch');



--This block starts here

DECLARE
v_count NUMBER;
     CURSOR c_new_rollcall IS
          SELECT roll, name
          FROM N_RollCall;
BEGIN
 FOR new_rec IN c_new_rollcall LOOP
          -- Check if the record already exists in O_RollCall
                SELECT COUNT(*)
                INTO v_count
                FROM O_RollCall
WHERE roll = new_rec. roll;

-- If record doesn't exist, insert it
        IF v_count = 0 THEN
            INSERT INTO O_RollCall (roll, name)
            VALUES (new_rec. roll, new_rec.name);
            DBMS_OUTPUT.PUT_LINE('Record inserted: ' || new_rec. roll);
        ELSE
            DBMS_OUTPUT.PUT_LINE('Record skipped: ' || new_rec. roll);
        END IF;
    END LOOP;
    COMMIT;
  END;

--This block ends here





select * from N_RollCall;


select * from O_RollCall;

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
 CURSOR employee_cursor  IS
 SELECT E_id, E_name, Age, Salary
 FROM Employee5;
-- Open the cursor
 BEGIN
 OPEN employee_cursor;
-- Fetch data from cursor
 LOOP
 FETCH employee_cursor INTO E_id, E_name, Age, Salary;
 EXIT WHEN employee_cursor%NOTFOUND;
-- Output or use the fetched values
 DBMS_OUTPUT.PUT_LINE('Employee ID: ' || E_id || ', Name: ' || E_name || ', Age: ' || Age || ', 
Salary: ' || Salary);
END LOOP;
CLOSE employee_cursor;
END;


      `,
    },{
      id:4,
      name:"Program 4",
      code:String.raw
      `
SET SERVEROUTPUT ON;


CREATE TABLE CUSTOMER (
ID INT PRIMARY KEY,
NAME VARCHAR(10),
AGE INT,
ADDRESS VARCHAR(10),
SALARY number(10, 2)
);


INSERT INTO CUSTOMER values(1,’Ramesh’,25,’Mysore’,200000);
INSERT INTO CUSTOMER values(2,’Komal’,35,’Bangalore’,800000);
INSERT INTO CUSTOMER values(3,’Mala’,45,’Mangalore’,56000);


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
      
      
      `
    }
    // Add more DBMS programs as needed
  ];
  
  export default dbmsPrograms;
  