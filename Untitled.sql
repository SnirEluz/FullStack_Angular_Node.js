-- create database todos;

-- USE todos;

-- create table customers (
--      id int auto_increment,
--      name varchar(3000),
--      jobtype varchar(3000),
--      phone varchar(3000),
--      mail varchar(3000),
--      primary key(id)
-- );

-- "Insert customers"
-- insert into customers(name, jobtype, phone, mail)
-- values 
-- ("John", "Microsoft", "0558423756", "John@gmail.com"),
-- ("Ron", "Bezeq", "0557382684", "Ron@gmail.com"),
-- ("Dan", "Apple", "0558423756", "Dan@gmail.com");

-- SELECT 
-- todos.id, 
-- todos.todobody, 
-- todos.created,
-- customers.id as customerId,
-- customers.name,
-- todos.isTodoComplete
-- FROM todos
-- INNER JOIN customers ON customers.id = todos.customerId;

-- create table todos (
--      id int auto_increment,
--      todobody varchar(3000),
--      created DATE DEFAULT (CURRENT_DATE),
--      customerId int,
--      isTodoComplete varchar(3000) DEFAULT "false",
--      primary key(id),
--      foreign key(customerId) references customers(id)
-- );


-- "Insert todos"
-- insert into todos(todobody, customerId)
-- values
-- ("sleeping", 1),
-- ("vacatrion", 2),
-- (" work", 1)


