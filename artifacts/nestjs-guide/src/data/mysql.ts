import type { Chapter } from "./chapters";

export const mysqlChapters: Chapter[] = [
  {
    id: "mysql-intro",
    title: "MySQL Kya Hai? Setup",
    emoji: "🗃️",
    category: "Basics",
    description: "MySQL introduction, installation, aur basic concepts",
    sections: [
      {
        heading: "MySQL kya hai?",
        content: `MySQL ek open-source Relational Database Management System (RDBMS) hai. Data tables mein organized hota hai — rows aur columns.

**MySQL kyun popular hai:**
- Free aur open source
- Fast aur reliable
- Sab languages ke saath kaam karta hai (PHP, Node, Python, Java)
- LAMP stack (Linux Apache MySQL PHP) ka hissa
- Web apps ki backbone

**Key Concepts:**
- **Database** — related tables ka collection
- **Table** — rows aur columns (spreadsheet ki tarah)
- **Row** — ek record
- **Column** — ek field (attribute)
- **Primary Key** — unique identifier
- **Foreign Key** — doosri table se reference`,
        diagram: `
MYSQL DATABASE STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  DATABASE: ecommerce_db
  ┌─────────────────────────────────┐
  │  TABLE: users                   │
  │  ┌────┬──────────┬────────────┐ │
  │  │ id │   name   │   email    │ │
  │  ├────┼──────────┼────────────┤ │
  │  │  1 │  Rahul   │ r@r.com    │ │
  │  │  2 │  Priya   │ p@p.com    │ │
  │  └────┴──────────┴────────────┘ │
  │                                 │
  │  TABLE: orders                  │
  │  ┌────┬─────────┬────────────┐  │
  │  │ id │ user_id │   total    │  │
  │  ├────┼─────────┼────────────┤  │
  │  │  1 │    1    │   500.00   │  │ ←── user_id is FOREIGN KEY
  │  │  2 │    1    │  1200.00   │  │
  │  └────┴─────────┴────────────┘  │
  └─────────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `-- MySQL install karo (Ubuntu)
-- sudo apt install mysql-server

-- Ya XAMPP/WAMP use karo Windows mein

-- MySQL mein login karo
-- mysql -u root -p

-- Basic commands
SHOW DATABASES;           -- sab databases dekho
CREATE DATABASE mydb;     -- naya database banao
USE mydb;                 -- database select karo
SHOW TABLES;              -- tables list
DESC users;               -- table structure dekho
DROP DATABASE mydb;       -- database delete karo (careful!)`,
        language: "sql",
        tip: "phpMyAdmin ya MySQL Workbench use karo GUI interface ke liye — command line seekhna zaroori hai lekin GUI se fast hota hai.",
      },
      {
        heading: "Tables banao — CREATE TABLE",
        content: ``,
        code: `-- Users table create karo
CREATE TABLE users (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    email       VARCHAR(150) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    age         INT UNSIGNED,
    role        ENUM('admin', 'user', 'moderator') DEFAULT 'user',
    is_active   BOOLEAN DEFAULT TRUE,
    avatar      VARCHAR(255) NULL,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at  TIMESTAMP NULL,
    
    INDEX idx_email (email),           -- fast email lookups
    INDEX idx_role (role)
);

-- Posts table (foreign key)
CREATE TABLE posts (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id     INT UNSIGNED NOT NULL,
    title       VARCHAR(255) NOT NULL,
    content     TEXT,
    status      ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    views       INT UNSIGNED DEFAULT 0,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_status (status)
);

-- Existing table mein column add karo
ALTER TABLE users ADD COLUMN phone VARCHAR(15) AFTER email;
ALTER TABLE users MODIFY COLUMN name VARCHAR(150) NOT NULL;
ALTER TABLE users DROP COLUMN avatar;`,
        language: "sql",
        tip: "Hamesha timestamps (created_at, updated_at) add karo — debugging aur auditing mein bahut helpful hota hai.",
      },
    ],
    mcqs: [
      {
        q: "PRIMARY KEY ki kya property hoti hai?",
        options: [
          "NULL ho sakti hai",
          "Duplicate values allow hain",
          "Unique aur NOT NULL hota hai",
          "Foreign key reference zaruri hai",
        ],
        correct: 2,
        explain: "PRIMARY KEY hamesha UNIQUE aur NOT NULL hoti hai — iska kaam ek row ko uniquely identify karna hai.",
      },
    ],
    cheatsheet: [
      "CREATE DATABASE name — database banao",
      "USE dbname — database select karo",
      "CREATE TABLE name (...) — table banao",
      "ALTER TABLE ADD/MODIFY/DROP COLUMN — schema change",
      "INT AUTO_INCREMENT PRIMARY KEY — standard ID column",
      "FOREIGN KEY (col) REFERENCES table(col) — relation",
    ],
    revision: [
      "RDBMS = data tables mein, rows aur columns",
      "Primary Key = unique + not null identifier",
      "Foreign Key = doosri table ka reference",
      "INDEX = queries fast karne ke liye (retrieval speed)",
    ],
  },
  {
    id: "mysql-crud",
    title: "CRUD — Data ke saath kaam karo",
    emoji: "✏️",
    category: "Basics",
    description: "INSERT, SELECT, UPDATE, DELETE — sab operations",
    sections: [
      {
        heading: "INSERT — Data add karo",
        content: ``,
        code: `-- Single row insert
INSERT INTO users (name, email, password, age, role)
VALUES ('Rahul Kumar', 'rahul@example.com', 'hashed_pass', 25, 'user');

-- Multiple rows ek saath (efficient)
INSERT INTO users (name, email, password) VALUES
    ('Priya Sharma', 'priya@example.com', 'hash1'),
    ('Amit Verma', 'amit@example.com', 'hash2'),
    ('Neha Singh', 'neha@example.com', 'hash3');

-- Last inserted ID
SELECT LAST_INSERT_ID();

-- INSERT ... ON DUPLICATE KEY UPDATE (upsert)
INSERT INTO user_settings (user_id, theme, language)
VALUES (1, 'dark', 'hi')
ON DUPLICATE KEY UPDATE
    theme = VALUES(theme),
    language = VALUES(language);`,
        language: "sql",
      },
      {
        heading: "SELECT — Data padhna",
        content: `SELECT statement bahut powerful hai — filtering, sorting, grouping sab kuch.`,
        code: `-- Basic SELECT
SELECT * FROM users;                          -- sab columns
SELECT id, name, email FROM users;            -- specific columns
SELECT name AS 'User Name', email FROM users; -- alias

-- WHERE — conditions
SELECT * FROM users WHERE age > 18;
SELECT * FROM users WHERE role = 'admin' AND is_active = TRUE;
SELECT * FROM users WHERE age BETWEEN 20 AND 30;
SELECT * FROM users WHERE name LIKE 'R%';     -- R se shuru
SELECT * FROM users WHERE name LIKE '%kumar'; -- kumar pe khatam
SELECT * FROM users WHERE role IN ('admin', 'moderator');
SELECT * FROM users WHERE deleted_at IS NULL;  -- soft delete check

-- ORDER BY
SELECT * FROM users ORDER BY name ASC;          -- alphabetical
SELECT * FROM users ORDER BY created_at DESC;   -- newest first
SELECT * FROM users ORDER BY age DESC, name ASC; -- multiple

-- LIMIT aur OFFSET — pagination
SELECT * FROM users ORDER BY id LIMIT 10;          -- pehle 10
SELECT * FROM users ORDER BY id LIMIT 10 OFFSET 20; -- page 3 (10 per page)

-- Aggregate Functions
SELECT COUNT(*) AS total_users FROM users;
SELECT AVG(age) AS avg_age FROM users;
SELECT MAX(age), MIN(age) FROM users;
SELECT SUM(total) AS revenue FROM orders;

-- GROUP BY
SELECT role, COUNT(*) AS count, AVG(age) AS avg_age
FROM users
GROUP BY role;

-- HAVING — GROUP BY ke result filter karo (WHERE nahi kaam karta aggregate pe)
SELECT role, COUNT(*) AS count
FROM users
GROUP BY role
HAVING count > 5;

-- DISTINCT — unique values
SELECT DISTINCT role FROM users;`,
        language: "sql",
        tip: "EXPLAIN SELECT ... se query execution plan dekho — slow queries diagnose karne ke liye.",
      },
      {
        heading: "UPDATE aur DELETE",
        content: ``,
        code: `-- UPDATE
UPDATE users SET name = 'Rahul Sharma', age = 26 WHERE id = 1;

-- Multiple rows update
UPDATE posts SET status = 'archived' WHERE created_at < '2023-01-01';

-- Subquery se update
UPDATE users SET role = 'admin'
WHERE id IN (SELECT user_id FROM admin_requests WHERE approved = TRUE);

-- DELETE
DELETE FROM users WHERE id = 5;

-- Safe delete — WHERE ke bina sab delete ho jaata hai!
-- MySQL safeguard:
SET SQL_SAFE_UPDATES = 1;

-- Soft delete (data preserve karo)
UPDATE users SET deleted_at = NOW() WHERE id = 5;

-- TRUNCATE — sab rows delete, table rakho (faster than DELETE)
TRUNCATE TABLE temp_logs;

-- Conditional update/insert
UPDATE users
SET 
    name = CASE WHEN id = 1 THEN 'Rahul' ELSE name END,
    age = CASE WHEN id = 1 THEN 26 ELSE age END
WHERE id = 1;`,
        language: "sql",
        warning: "DELETE ya UPDATE mein WHERE clause bhulna = DATA LOSS! Pehle SELECT se confirm karo, phir DELETE/UPDATE karo.",
      },
    ],
    mcqs: [
      {
        q: "GROUP BY ke results filter karne ke liye kaunsa clause use karte hain?",
        options: ["WHERE", "FILTER", "HAVING", "LIMIT"],
        correct: 2,
        explain: "HAVING clause GROUP BY ke baad aggregate results filter karta hai. WHERE individual rows filter karta hai (GROUP BY se pehle).",
      },
    ],
    cheatsheet: [
      "INSERT INTO table (cols) VALUES (...) — data add",
      "SELECT cols FROM table WHERE condition — data padhna",
      "UPDATE table SET col=val WHERE id=? — update",
      "DELETE FROM table WHERE id=? — delete",
      "LIKE '%pattern%' — partial match",
      "BETWEEN a AND b — range check",
      "IS NULL / IS NOT NULL — null check",
      "GROUP BY + HAVING — aggregate filter",
    ],
    revision: [
      "WHERE = rows filter karo, HAVING = groups filter karo",
      "LIMIT 10 OFFSET 20 = page 3 (10 per page)",
      "DELETE se pehle SELECT se confirm karo!",
      "TRUNCATE > DELETE for clearing all rows (faster)",
    ],
  },
  {
    id: "mysql-joins",
    title: "JOINs — Multiple Tables",
    emoji: "🔗",
    category: "Intermediate",
    description: "INNER JOIN, LEFT JOIN, RIGHT JOIN, SELF JOIN — sab types",
    sections: [
      {
        heading: "JOIN types samjho",
        content: `JOIN se multiple tables ka data ek query mein combine karte hain.`,
        diagram: `
VISUAL JOIN GUIDE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  TABLE A (users)     TABLE B (orders)
  ┌───┬───────┐       ┌───┬─────────┬───────┐
  │ 1 │ Rahul │       │ 1 │ user_id=1│ 500  │
  │ 2 │ Priya │       │ 2 │ user_id=1│ 300  │
  │ 3 │ Amit  │       │ 3 │ user_id=4│ 100  │
  └───┴───────┘       └───┴─────────┴───────┘

  INNER JOIN: Only matching rows (A ∩ B)
  → Rahul+500, Rahul+300 (Priya/Amit orders nahi, user_id=4 user nahi)

  LEFT JOIN: All A + matching B
  → Rahul+500, Rahul+300, Priya+NULL, Amit+NULL

  RIGHT JOIN: All B + matching A
  → Rahul+500, Rahul+300, NULL+100 (user_id=4 user nahi)

  FULL OUTER JOIN: All A + All B (MySQL mein UNION se)
  → Sab rows, unmatched = NULL

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `-- INNER JOIN — sirf matching records
SELECT 
    u.id,
    u.name,
    u.email,
    o.id AS order_id,
    o.total,
    o.created_at AS order_date
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE u.is_active = TRUE
ORDER BY o.created_at DESC;

-- LEFT JOIN — sab users, orders chahiye ya na chahiye
SELECT 
    u.name,
    COUNT(o.id) AS total_orders,
    COALESCE(SUM(o.total), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
ORDER BY total_spent DESC;

-- Multiple JOINs
SELECT 
    u.name AS user_name,
    o.id AS order_id,
    p.name AS product_name,
    oi.quantity,
    oi.price
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN order_items oi ON o.id = oi.order_id
INNER JOIN products p ON oi.product_id = p.id
WHERE o.status = 'delivered'
ORDER BY o.created_at DESC;

-- SELF JOIN — same table join karo (hierarchy)
-- Employee table mein manager bhi employee hai
SELECT 
    e.name AS employee,
    m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;`,
        language: "sql",
        tip: "INNER JOIN > LEFT JOIN performance wise. Sirf wahi JOIN use karo jo zaruri hai. Unnecessary JOINs slow queries ka sabse bada reason hain.",
      },
      {
        heading: "Subqueries aur Advanced Queries",
        content: ``,
        code: `-- Subquery in WHERE
SELECT * FROM users
WHERE id IN (
    SELECT DISTINCT user_id FROM orders
    WHERE total > 1000
);

-- Correlated Subquery
SELECT 
    u.name,
    (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS order_count,
    (SELECT SUM(total) FROM orders o WHERE o.user_id = u.id) AS total_spent
FROM users u;

-- EXISTS — faster than IN for large datasets
SELECT * FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.user_id = u.id AND o.total > 500
);

-- Common Table Expression (CTE)
WITH top_customers AS (
    SELECT user_id, SUM(total) AS total_spent
    FROM orders
    GROUP BY user_id
    HAVING total_spent > 5000
),
user_details AS (
    SELECT u.id, u.name, u.email, tc.total_spent
    FROM users u
    INNER JOIN top_customers tc ON u.id = tc.user_id
)
SELECT * FROM user_details ORDER BY total_spent DESC;

-- Window Functions (MySQL 8+)
SELECT 
    name,
    department,
    salary,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dept_rank,
    AVG(salary) OVER (PARTITION BY department) AS dept_avg_salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS overall_rank
FROM employees;`,
        language: "sql",
        tip: "CTE (WITH clause) se complex queries readable aur maintainable banao — nested subqueries se behtar hain.",
      },
    ],
    mcqs: [
      {
        q: "LEFT JOIN ka result kya hoga jab right table mein match na mile?",
        options: [
          "Row skip ho jaayega",
          "Error aayega",
          "Right table columns NULL honge",
          "Default values aayenge",
        ],
        correct: 2,
        explain: "LEFT JOIN mein left table ki sab rows aati hain. Agar right table mein match nahi mila toh right table ke columns NULL honge.",
      },
    ],
    cheatsheet: [
      "INNER JOIN — matching rows only",
      "LEFT JOIN — all left + matching right (NULL if no match)",
      "RIGHT JOIN — all right + matching left",
      "ON a.id = b.foreign_id — join condition",
      "COALESCE(val, default) — NULL replace karo",
      "WITH cte AS (...) SELECT — CTE (readable subqueries)",
    ],
    revision: [
      "INNER = intersection, LEFT = all left + matching right",
      "Multiple JOINs = sab related tables ek query mein",
      "CTE = named temporary result set (WITH clause)",
      "EXISTS > IN for large datasets performance",
    ],
  },
  {
    id: "mysql-indexes",
    title: "Indexes aur Performance",
    emoji: "⚡",
    category: "Intermediate",
    description: "Database performance optimize karo indexes aur query tuning se",
    sections: [
      {
        heading: "Index kya hai aur kaise kaam karta hai?",
        content: `Index ek data structure hai jo queries fast banata hai. Book ka index socho — seedha page par jaate ho, sab pages nahi padne.

**Bina Index ke:** MySQL har row scan karta hai (Full Table Scan)
**Index ke saath:** Direct jump karo relevant rows par (Index Seek)

**Index Types:**
- PRIMARY — auto, unique, not null
- UNIQUE — unique values
- INDEX (KEY) — regular fast lookup
- FULLTEXT — text search`,
        code: `-- Index add karo
CREATE INDEX idx_email ON users (email);
CREATE UNIQUE INDEX idx_unique_email ON users (email);
CREATE INDEX idx_name_age ON users (name, age); -- composite index

-- Table create karte waqt
CREATE TABLE products (
    id    INT AUTO_INCREMENT PRIMARY KEY,  -- primary index
    sku   VARCHAR(50) UNIQUE,              -- unique index
    name  VARCHAR(255) NOT NULL,
    price DECIMAL(10,2),
    
    INDEX idx_price (price),
    INDEX idx_name_price (name, price)     -- composite
);

-- Index dekho
SHOW INDEX FROM users;

-- Index delete karo
DROP INDEX idx_email ON users;

-- EXPLAIN se query plan dekho
EXPLAIN SELECT * FROM users WHERE email = 'test@test.com';
-- type = ref (index use), const (perfect), ALL (bad - full scan)

-- Slow Query Log enable karo
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1; -- 1 second se zyada slow queries log karo`,
        language: "sql",
        tip: "EXPLAIN ke output mein 'type = ALL' dikhna bad sign hai — full table scan hoti hai. Index add karo ya query fix karo.",
        warning: "Zyada indexes mat banao — write operations (INSERT/UPDATE/DELETE) slow hote hain kyunki har index update karna padta hai.",
      },
      {
        heading: "Transactions aur ACID Properties",
        content: `Transaction = multiple operations jo ek saath honi chahiye — ya sab hogi ya koi nahi.`,
        code: `-- Transaction example — money transfer
START TRANSACTION;

UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE id = 2;

-- Dono successful? Commit karo
COMMIT;

-- Koi error aayi? Rollback karo
ROLLBACK;

-- Savepoints — partial rollback
START TRANSACTION;

INSERT INTO orders (user_id, total) VALUES (1, 500);
SAVEPOINT order_created;

INSERT INTO payments (order_id, amount) VALUES (LAST_INSERT_ID(), 500);
-- Payment fail hui?
ROLLBACK TO SAVEPOINT order_created;
-- Sirf payment rollback, order safe hai

COMMIT;

-- ACID Properties:
-- A = Atomicity: Ya sab ya kuch nahi
-- C = Consistency: Data hamesha valid state mein
-- I = Isolation: Concurrent transactions ek doosre ko affect nahi karte
-- D = Durability: Committed data persist hota hai (crash ke baad bhi)

-- Isolation Levels
SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED;
-- READ UNCOMMITTED (dirty reads possible)
-- READ COMMITTED (most common)
-- REPEATABLE READ (MySQL default)
-- SERIALIZABLE (strictest, slowest)`,
        language: "sql",
      },
    ],
    mcqs: [
      {
        q: "ACID mein 'A' ka matlab kya hai?",
        options: ["Authentication", "Atomicity", "Authorization", "Availability"],
        correct: 1,
        explain: "Atomicity = transaction ki sab operations ek unit ki tarah hain. Ya sab execute hogi ya koi nahi (rollback).",
      },
    ],
    cheatsheet: [
      "CREATE INDEX idx_name ON table (column) — index banao",
      "EXPLAIN SELECT ... — query execution plan",
      "type=ALL in EXPLAIN = full scan (bad)",
      "START TRANSACTION — transaction shuru",
      "COMMIT — changes save karo",
      "ROLLBACK — changes undo karo",
      "SAVEPOINT name — partial rollback point",
    ],
    revision: [
      "Index = book index ki tarah — fast lookup",
      "Composite index = (col1, col2) — order matters!",
      "ACID: Atomicity, Consistency, Isolation, Durability",
      "EXPLAIN se slow queries diagnose karo",
    ],
  },
  {
    id: "mysql-normalization",
    title: "Normalization aur Schema Design",
    emoji: "📐",
    category: "Intermediate",
    description: "Database design best practices — redundancy hatao, performance badhao",
    sections: [
      {
        heading: "Normalization kya hai?",
        content: `Normalization = database design process jisme data redundancy kam karo aur data integrity ensure karo.

**Normal Forms:**
- **1NF** — Atomic values, no repeating groups
- **2NF** — 1NF + No partial dependency
- **3NF** — 2NF + No transitive dependency (most apps ke liye enough)
- **BCNF** — Stronger version of 3NF`,
        diagram: `
NORMALIZATION EXAMPLE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

UNNORMALIZED (bad):
┌──────┬────────────┬──────────────────────────┐
│order_│ customer   │ products                 │
│id    │ name+city  │                          │
├──────┼────────────┼──────────────────────────┤
│  1   │ Rahul Delhi│ Phone Rs500,Cable Rs100  │
│  2   │ Priya Mumbai│ Laptop Rs40000          │
└──────┴────────────┴──────────────────────────┘
Problems: Redundancy, multiple values in one cell

3NF (good):
customers: id, name, city
orders: id, customer_id (FK)
products: id, name, price
order_items: order_id (FK), product_id (FK), qty

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `-- E-commerce Database Design (3NF)

CREATE TABLE customers (
    id      INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    email   VARCHAR(150) UNIQUE NOT NULL,
    city    VARCHAR(50),
    state   VARCHAR(50)
);

CREATE TABLE categories (
    id      INT AUTO_INCREMENT PRIMARY KEY,
    name    VARCHAR(100) NOT NULL,
    slug    VARCHAR(100) UNIQUE
);

CREATE TABLE products (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT,
    name        VARCHAR(255) NOT NULL,
    price       DECIMAL(10,2) NOT NULL,
    stock       INT DEFAULT 0,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

CREATE TABLE orders (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    status      ENUM('pending','processing','shipped','delivered','cancelled') DEFAULT 'pending',
    total       DECIMAL(10,2) NOT NULL,
    address     TEXT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Many-to-Many: order <-> products
CREATE TABLE order_items (
    order_id    INT NOT NULL,
    product_id  INT NOT NULL,
    quantity    INT NOT NULL DEFAULT 1,
    price       DECIMAL(10,2) NOT NULL,  -- snapshot of price at time of order
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Useful views
CREATE VIEW order_summary AS
SELECT 
    o.id,
    c.name AS customer_name,
    o.total,
    o.status,
    COUNT(oi.product_id) AS item_count
FROM orders o
JOIN customers c ON o.customer_id = c.id
JOIN order_items oi ON o.id = oi.order_id
GROUP BY o.id;`,
        language: "sql",
        tip: "Order item mein price snapshot store karo — product price baad mein change ho sakti hai, historical data preserve karo.",
      },
    ],
    cheatsheet: [
      "1NF: Atomic values, no repeating groups",
      "2NF: 1NF + full dependency on primary key",
      "3NF: 2NF + no transitive dependencies",
      "ON DELETE CASCADE — parent delete pe child bhi delete",
      "ON DELETE SET NULL — parent delete pe FK null ho",
      "VIEW = virtual table (complex query simplify)",
    ],
    revision: [
      "Normalization = redundancy hatao, integrity badhao",
      "3NF = most real-world apps ke liye enough",
      "Many-to-Many = junction table (order_items)",
      "Price snapshot in order_items = historical accuracy",
    ],
  },
  {
    id: "mysql-stored",
    title: "Stored Procedures aur Triggers",
    emoji: "⚙️",
    category: "Advanced",
    description: "Database-level logic — stored procedures, functions, aur triggers",
    sections: [
      {
        heading: "Stored Procedures",
        content: `Stored Procedure = SQL statements ka named collection jo database mein store hota hai aur ek call se execute hota hai.

**Fayde:**
- Network traffic kam (client ko complex logic nahi bhejna)
- Security — direct table access nahi, procedure se
- Reusable logic
- Performance (pre-compiled)`,
        code: `-- Stored Procedure create karo
DELIMITER //
CREATE PROCEDURE GetUserOrders(IN p_user_id INT, IN p_limit INT)
BEGIN
    SELECT 
        o.id,
        o.total,
        o.status,
        o.created_at,
        COUNT(oi.product_id) AS item_count
    FROM orders o
    LEFT JOIN order_items oi ON o.id = oi.order_id
    WHERE o.customer_id = p_user_id
    GROUP BY o.id
    ORDER BY o.created_at DESC
    LIMIT p_limit;
END //
DELIMITER ;

-- Procedure call karo
CALL GetUserOrders(1, 10);

-- OUT parameter ke saath
DELIMITER //
CREATE PROCEDURE CreateOrder(
    IN p_customer_id INT,
    IN p_total DECIMAL(10,2),
    OUT p_order_id INT
)
BEGIN
    INSERT INTO orders (customer_id, total) VALUES (p_customer_id, p_total);
    SET p_order_id = LAST_INSERT_ID();
END //
DELIMITER ;

-- Call with OUT
CALL CreateOrder(1, 1500.00, @new_order_id);
SELECT @new_order_id;

-- Stored Function (value return karta hai)
DELIMITER //
CREATE FUNCTION GetCustomerTotal(p_customer_id INT)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE total_amount DECIMAL(10,2);
    SELECT COALESCE(SUM(total), 0) 
    INTO total_amount
    FROM orders 
    WHERE customer_id = p_customer_id;
    RETURN total_amount;
END //
DELIMITER ;

SELECT name, GetCustomerTotal(id) AS total_spent FROM customers;`,
        language: "sql",
      },
      {
        heading: "Triggers — Automatic Actions",
        content: `Trigger = automatic action jo certain database events par fire hota hai.`,
        code: `-- Trigger — order create hone pe inventory update karo
DELIMITER //
CREATE TRIGGER after_order_item_insert
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN
    UPDATE products 
    SET stock = stock - NEW.quantity 
    WHERE id = NEW.product_id;
    
    -- Stock 0 se neeche nahi jaana chahiye
    IF (SELECT stock FROM products WHERE id = NEW.product_id) < 0 THEN
        SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT = 'Insufficient stock!';
    END IF;
END //
DELIMITER ;

-- Audit log trigger
CREATE TABLE user_audit_log (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    user_id     INT,
    action      VARCHAR(50),
    old_email   VARCHAR(150),
    new_email   VARCHAR(150),
    changed_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //
CREATE TRIGGER after_user_email_update
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    IF OLD.email != NEW.email THEN
        INSERT INTO user_audit_log (user_id, action, old_email, new_email)
        VALUES (OLD.id, 'EMAIL_CHANGED', OLD.email, NEW.email);
    END IF;
END //
DELIMITER ;

-- Triggers dekho
SHOW TRIGGERS FROM mydb;
DROP TRIGGER after_order_item_insert;`,
        language: "sql",
        tip: "Triggers se business logic database level par enforce karo — lekin debugging mushkil ho jaati hai. Documentation zaroori hai.",
      },
    ],
    cheatsheet: [
      "CREATE PROCEDURE name(IN/OUT params) — stored procedure",
      "CALL procedure_name(args) — procedure call karo",
      "CREATE FUNCTION — value return karta hai",
      "DELIMITER // ... // DELIMITER ; — multi-line syntax",
      "CREATE TRIGGER AFTER INSERT/UPDATE/DELETE — auto action",
      "NEW.column / OLD.column — trigger mein values",
      "SIGNAL SQLSTATE '45000' — custom error throw",
    ],
    revision: [
      "Stored Procedure = SQL ka function, database mein store",
      "IN = input, OUT = output parameter",
      "Trigger = automatic action on DB events",
      "NEW = new values, OLD = old values in trigger",
    ],
  },
  {
    id: "mysql-transactions",
    title: "Transactions & ACID",
    emoji: "🔒",
    category: "Intermediate",
    description: "ACID properties, COMMIT/ROLLBACK, aur concurrent transaction problems",
    sections: [
      {
        heading: "ACID kya hai?",
        content: `ACID = database transactions ki 4 properties:
- **A — Atomicity:** Ya sab hoga ya kuch nahi (all or nothing)
- **C — Consistency:** Transaction ke baad data hamesha valid state mein
- **I — Isolation:** Concurrent transactions ek doosre ko affect nahi karenge
- **D — Durability:** Committed data crash ke baad bhi survive karega`,
        code: `-- Basic Transaction
START TRANSACTION;

UPDATE accounts SET balance = balance - 5000 WHERE id = 1;
UPDATE accounts SET balance = balance + 5000 WHERE id = 2;

-- Check karo sab theek hai?
COMMIT;   -- dono updates save ho jaayenge

-- Koi error aaya toh
ROLLBACK; -- dono changes undo ho jaayenge

-- SAVEPOINT — partial rollback
START TRANSACTION;
INSERT INTO orders (user_id, amount) VALUES (1, 500);
SAVEPOINT order_placed;
INSERT INTO order_items (order_id, product) VALUES (LAST_INSERT_ID(), 'Phone');
-- Koi problem aai item mein
ROLLBACK TO SAVEPOINT order_placed;  -- sirf items rollback
COMMIT;  -- order remains`,
        language: "sql",
      },
      {
        heading: "Isolation Levels",
        content: `**4 isolation levels** — performance vs data consistency tradeoff:
- **READ UNCOMMITTED** — dirty reads possible (avoid)
- **READ COMMITTED** — committed data hi dikhega
- **REPEATABLE READ** — transaction ke dauran same data (MySQL default)
- **SERIALIZABLE** — strictest, sabse slow`,
        code: `-- Isolation level set karo
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;
  SELECT balance FROM accounts WHERE id = 1;
  -- ... other operations ...
  SELECT balance FROM accounts WHERE id = 1; -- same result!
COMMIT;

-- MySQL default check karo
SELECT @@transaction_isolation;

-- Deadlock handling (application level)
-- Retry logic implement karo
-- Consistent order mein tables access karo`,
        language: "sql",
        tip: "MySQL ka default isolation level REPEATABLE READ hai. Production mein mostly ye theek rehta hai. Sirf special cases mein change karo.",
      },
    ],
    mcqs: [
      { q: "Atomicity kya guarantee karti hai?", options: ["Fast transactions", "Ya sab operations succeed ya sab fail", "Data valid rahe", "Concurrent access safe ho"], correct: 1, explain: "Atomicity = all or nothing. Money transfer mein agar debit ho gaya aur credit fail, rollback hoga — partial state nahi rahega." },
      { q: "MySQL ka default isolation level kya hai?", options: ["READ COMMITTED", "SERIALIZABLE", "READ UNCOMMITTED", "REPEATABLE READ"], correct: 3, explain: "MySQL InnoDB ka default isolation level REPEATABLE READ hai — transaction ke dauran consistent reads guarantee karta hai." },
    ],
    cheatsheet: [
      "START TRANSACTION — shuru karo",
      "COMMIT — changes save karo",
      "ROLLBACK — changes undo karo",
      "SAVEPOINT name — checkpoint banao",
      "ROLLBACK TO SAVEPOINT name — partial rollback",
      "SET TRANSACTION ISOLATION LEVEL level",
    ],
    revision: [
      "ACID = Atomicity, Consistency, Isolation, Durability",
      "START TRANSACTION → operations → COMMIT/ROLLBACK",
      "SAVEPOINT = partial rollback ke liye checkpoint",
      "REPEATABLE READ = MySQL ka default isolation level",
      "Deadlock se bachao: consistent order mein tables access karo",
    ],
  },
  {
    id: "mysql-views",
    title: "Views, Triggers & Events",
    emoji: "👁️",
    category: "Intermediate",
    description: "Virtual views banana, triggers se automatic actions, aur scheduled events",
    sections: [
      {
        heading: "Views — Virtual Tables",
        content: `View = ek saved SELECT query jo table ki tarah behave karta hai.
- Complex queries simplify karo
- Sensitive columns hide karo
- Frequently used queries reuse karo`,
        code: `-- View banao
CREATE VIEW user_order_summary AS
SELECT 
    u.id,
    u.name,
    u.email,
    COUNT(o.id) AS total_orders,
    COALESCE(SUM(o.amount), 0) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name, u.email;

-- View use karo (table ki tarah!)
SELECT * FROM user_order_summary WHERE total_orders > 5;
SELECT name, total_spent FROM user_order_summary ORDER BY total_spent DESC;

-- View update/drop
CREATE OR REPLACE VIEW user_order_summary AS ...;
DROP VIEW user_order_summary;`,
        language: "sql",
      },
      {
        heading: "Triggers — Automatic Actions",
        content: `Trigger = database event pe automatically chalne wali code.
- **BEFORE/AFTER** — event se pehle ya baad
- **INSERT/UPDATE/DELETE** — kon sa event

Use cases: audit logs, data validation, auto-calculations`,
        code: `-- Audit log trigger
CREATE TABLE audit_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    table_name VARCHAR(50),
    action VARCHAR(10),
    old_value JSON,
    new_value JSON,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- UPDATE trigger
DELIMITER //
CREATE TRIGGER after_user_update
AFTER UPDATE ON users
FOR EACH ROW
BEGIN
    IF OLD.email != NEW.email THEN
        INSERT INTO audit_log (table_name, action, old_value, new_value)
        VALUES ('users', 'UPDATE', 
                JSON_OBJECT('email', OLD.email),
                JSON_OBJECT('email', NEW.email));
    END IF;
END //
DELIMITER ;

-- Trigger dekho
SHOW TRIGGERS FROM mydb;
DROP TRIGGER after_user_update;`,
        language: "sql",
        tip: "Triggers powerful hain lekin debugging mushkil ho jaati hai. Business logic application layer mein rakhna prefer karo — triggers sirf database-level integrity ke liye.",
      },
    ],
    mcqs: [
      { q: "View kya hai?", options: ["Temporary table", "Saved SELECT query jo table ki tarah behave kare", "Index type", "Stored procedure"], correct: 1, explain: "View ek virtual table hai — underlying data store nahi karta, sirf query stored hoti hai. Use karne pe query execute hoti hai." },
      { q: "BEFORE vs AFTER trigger mein fark?", options: ["Performance fark hai", "BEFORE = data change se pehle (validation), AFTER = baad (logging)", "AFTER zyada common hai", "Koi fark nahi"], correct: 1, explain: "BEFORE trigger validation ke liye use karo (data change roko agar invalid). AFTER trigger side effects ke liye (logging, notifications)." },
    ],
    cheatsheet: [
      "CREATE VIEW name AS SELECT ...",
      "SELECT * FROM view_name — use view",
      "DROP VIEW name",
      "CREATE TRIGGER name BEFORE/AFTER INSERT/UPDATE/DELETE ON table FOR EACH ROW BEGIN ... END",
      "NEW.col — new value in trigger",
      "OLD.col — old value in trigger",
    ],
    revision: [
      "View = saved query, virtual table, no data storage",
      "View use: complex queries simplify, data hide",
      "Trigger = database event pe automatic action",
      "BEFORE = validation, AFTER = logging/side effects",
      "NEW = naya value, OLD = purana value in triggers",
    ],
  },
  {
    id: "mysql-subqueries",
    title: "Subqueries & CTEs",
    emoji: "🔍",
    category: "Advanced",
    description: "Nested queries, correlated subqueries, aur WITH clause (CTEs)",
    sections: [
      {
        heading: "Subqueries — Queries inside Queries",
        content: `Subquery = ek query ke andar doosri query.
- **WHERE mein:** filter ke liye
- **FROM mein:** derived table
- **SELECT mein:** calculated column
- **Correlated:** outer query ke values use kare`,
        code: `-- WHERE subquery (IN)
SELECT name FROM users
WHERE id IN (
    SELECT DISTINCT user_id FROM orders
    WHERE amount > 1000
);

-- Scalar subquery (single value)
SELECT name,
    (SELECT COUNT(*) FROM orders WHERE orders.user_id = users.id) AS order_count
FROM users;

-- EXISTS — row exist karta hai?
SELECT name FROM users u
WHERE EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);

-- NOT EXISTS
SELECT name FROM users u
WHERE NOT EXISTS (
    SELECT 1 FROM orders o WHERE o.user_id = u.id
);  -- koi order nahi wale users

-- Derived table (FROM mein subquery)
SELECT dept, avg_salary FROM (
    SELECT department AS dept, AVG(salary) AS avg_salary
    FROM employees GROUP BY department
) AS dept_averages
WHERE avg_salary > 50000;`,
        language: "sql",
      },
      {
        heading: "CTEs — WITH Clause",
        content: `CTE (Common Table Expression) = named temporary result set.
- Readable, reusable
- Recursive queries bhi possible
- Subqueries se cleaner`,
        code: `-- Basic CTE
WITH high_value_users AS (
    SELECT user_id, SUM(amount) AS total
    FROM orders
    GROUP BY user_id
    HAVING total > 10000
)
SELECT u.name, h.total
FROM users u
JOIN high_value_users h ON u.id = h.user_id
ORDER BY h.total DESC;

-- Multiple CTEs
WITH 
monthly_sales AS (
    SELECT MONTH(created_at) AS month, SUM(amount) AS revenue
    FROM orders
    WHERE YEAR(created_at) = 2024
    GROUP BY MONTH(created_at)
),
avg_monthly AS (
    SELECT AVG(revenue) AS avg_rev FROM monthly_sales
)
SELECT ms.month, ms.revenue,
       ROUND(ms.revenue - am.avg_rev, 2) AS diff_from_avg
FROM monthly_sales ms, avg_monthly am;

-- Recursive CTE — hierarchy traverse
WITH RECURSIVE employee_hierarchy AS (
    SELECT id, name, manager_id, 0 AS level
    FROM employees WHERE manager_id IS NULL  -- root
    UNION ALL
    SELECT e.id, e.name, e.manager_id, h.level + 1
    FROM employees e
    JOIN employee_hierarchy h ON e.manager_id = h.id
)
SELECT * FROM employee_hierarchy ORDER BY level;`,
        language: "sql",
        tip: "Complex queries mein CTEs use karo — EXPLAIN se check karo performance difference. Sometimes JOIN zyada fast hota hai subquery se.",
      },
    ],
    mcqs: [
      { q: "EXISTS vs IN subquery mein kya fark hai?", options: ["Koi fark nahi", "EXISTS boolean check karta hai (faster for large datasets), IN values match karta hai", "IN faster hota hai hamesha", "EXISTS sirf single values ke liye"], correct: 1, explain: "EXISTS large datasets pe fast hota hai — sirf row existence check karta hai, puri values load nahi karta. Small datasets pe IN theek hai." },
      { q: "CTE (WITH clause) ka main faida?", options: ["Performance improvement", "Named temporary result — readable, reusable, recursive bhi", "Permanent data store", "Index creation"], correct: 1, explain: "CTE complex queries ko readable banata hai aur ek hi query mein multiple baar reuse kar sakte ho. Recursive CTEs hierarchy/tree data ke liye powerful hain." },
    ],
    cheatsheet: [
      "SELECT ... WHERE id IN (SELECT id FROM ...)",
      "WHERE EXISTS (SELECT 1 FROM ... WHERE ...)",
      "WITH cte_name AS (SELECT ...) SELECT ... FROM cte_name",
      "WITH RECURSIVE cte AS (base UNION ALL recursive)",
      "Derived table: FROM (SELECT ...) AS alias",
    ],
    revision: [
      "Subquery = query ke andar query",
      "IN = set match, EXISTS = row existence check",
      "CTE (WITH) = named temp result, more readable",
      "Recursive CTE = hierarchy/tree data traverse",
      "Performance: EXPLAIN se check karo, JOIN vs subquery",
    ],
  },
  {
    id: "mysql-performance",
    title: "MySQL Performance Tuning",
    emoji: "⚡",
    category: "Advanced",
    description: "EXPLAIN analyze karna, query optimization, index strategies, aur slow query log",
    sections: [
      {
        heading: "EXPLAIN — Query Plan Analyze Karna",
        content: `EXPLAIN bolta hai MySQL query kaise execute kar raha hai — kahan optimization chahiye.

**Key columns:**
- **type** — join type (best: const/ref, worst: ALL)
- **key** — index used (NULL = no index!)
- **rows** — estimated rows scanned
- **Extra** — additional info`,
        code: `-- EXPLAIN use karo
EXPLAIN SELECT u.name, COUNT(o.id) as orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.id;

-- type values (best to worst):
-- const   = primary key exact match
-- eq_ref  = JOIN with unique index
-- ref     = index match (multiple rows)
-- range   = index range scan
-- index   = full index scan
-- ALL     = full table scan (AVOID!)

-- EXPLAIN ANALYZE (MySQL 8.0+) — actual timing
EXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 1;

-- Slow Query Log enable karo
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1;  -- 1 second se slow
SHOW VARIABLES LIKE 'slow_query_log_file';`,
        language: "sql",
      },
      {
        heading: "Index Strategies & Query Optimization",
        content: `Indexes fast karte hain reads ko lekin slow karte hain writes. Strategy se use karo.`,
        code: `-- Composite index (column order matters!)
CREATE INDEX idx_user_date ON orders(user_id, created_at);
-- This index helps:
-- WHERE user_id = 1
-- WHERE user_id = 1 AND created_at > '2024-01-01'
-- But NOT: WHERE created_at > '2024-01-01' (no user_id)

-- Covering index — query ke sab columns index mein
CREATE INDEX idx_covering ON orders(user_id, amount, status);
-- SELECT amount, status FROM orders WHERE user_id = 1
-- Ye query sirf index se answer ho sakti hai — table access nahi!

-- Index hints (force karo)
SELECT * FROM users USE INDEX (idx_email) WHERE email = 'x@test.com';

-- Common optimization tips
-- ❌ Avoid functions on indexed columns
SELECT * FROM users WHERE YEAR(created_at) = 2024;
-- ✅ Better: range use karo
SELECT * FROM users WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31';

-- ❌ LIKE '%text%' — index use nahi hoga
-- ✅ LIKE 'text%' — prefix match, index use hoga

-- Query cache (manual ke liye — Redis better)
-- SELECT SQL_CACHE * FROM products WHERE active = 1;

-- Table statistics update karo
ANALYZE TABLE users;`,
        language: "sql",
        tip: "Composite index mein column order matter karta hai — WHERE clause ke most selective column pehle rakho!",
      },
    ],
    mcqs: [
      { q: "EXPLAIN mein type='ALL' kya indicate karta hai?", options: ["Best performance", "Full table scan — optimize karo!", "Index use ho raha hai", "Query correct hai"], correct: 1, explain: "type=ALL = full table scan — har row check ho raha hai. Large tables ke liye bahut slow. Index add karo ya query rewrite karo." },
      { q: "Composite index (a, b) kab use hoga?", options: ["WHERE b = val sirf", "WHERE a = val ya WHERE a = val AND b = val", "WHERE b = val AND a = val sirf", "Kisi bhi condition pe"], correct: 1, explain: "Composite index leftmost prefix rule follow karta hai. (a,b) index WHERE a=val aur WHERE a=val AND b=val ke liye kaam karega, lekin WHERE b=val ke liye nahi." },
    ],
    cheatsheet: [
      "EXPLAIN SELECT ... — query plan dekho",
      "type=ALL = full scan (bad), const/ref = good",
      "CREATE INDEX idx ON table(col1, col2) — composite",
      "ANALYZE TABLE tbl — statistics update",
      "SHOW INDEX FROM table — indexes dekho",
      "slow_query_log = ON — slow queries log karo",
    ],
    revision: [
      "EXPLAIN = query execution plan analyze karo",
      "type=ALL = full scan = bad performance",
      "Composite index: leftmost prefix rule",
      "Covering index = table access bhi nahi hota",
      "LIKE '%text' = no index, 'text%' = index works",
    ],
  },
  {
    id: "mysql-window",
    title: "Window Functions",
    titleEn: "Window Functions",
    emoji: "🪟",
    category: "Advanced",
    description: "MySQL window functions — ROW_NUMBER, RANK, LAG/LEAD, running totals, partitions",
    descriptionEn: "MySQL window functions — ROW_NUMBER, RANK, LAG/LEAD, running totals, partitions",
    sections: [
      {
        heading: "Window Functions kya hain?",
        content: `**Window functions** = Rows ke upar calculations — GROUP BY ki tarah nahi, rows preserve hoti hain.

**GROUP BY vs Window:**
- GROUP BY = rows collapse, ek row per group
- Window = rows preserve, calculation upar se

**Syntax:**
\`\`\`sql
function() OVER (
  PARTITION BY column   -- groups (optional)
  ORDER BY column       -- order
  ROWS BETWEEN ... AND ... -- frame (optional)
)
\`\`\`

**Main functions:**
- **ROW_NUMBER()** — unique row number (1,2,3...)
- **RANK()** — ties same rank, gaps (1,1,3)
- **DENSE_RANK()** — ties same rank, no gaps (1,1,2)
- **LAG/LEAD** — previous/next row value
- **SUM/AVG OVER** — running totals`,
        code: `-- Employees table per example
CREATE TABLE employees (
    id INT,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE
);

-- ROW_NUMBER — har department mein row number
SELECT
    name,
    department,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num
FROM employees;

-- RANK vs DENSE_RANK
SELECT
    name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS rank_sal,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank_sal
FROM employees;
-- Salary: 90k,90k,80k → RANK: 1,1,3 | DENSE_RANK: 1,1,2

-- Top N per group (har department ka top salary wala)
SELECT * FROM (
    SELECT
        name, department, salary,
        ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn
    FROM employees
) ranked
WHERE rn = 1;`,
      },
      {
        heading: "LAG/LEAD aur Running Totals",
        content: `**LAG(col, n):** n rows pehle ki value — month-over-month comparison.
**LEAD(col, n):** n rows baad ki value — next month preview.
**SUM OVER (ORDER BY):** Running total — cumulative sum.
**AVG OVER (ROWS BETWEEN):** Moving average — rolling window.`,
        code: `-- LAG — previous month sales comparison
SELECT
    sale_month,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY sale_month) AS prev_month,
    revenue - LAG(revenue, 1) OVER (ORDER BY sale_month) AS change,
    ROUND(
        (revenue - LAG(revenue, 1) OVER (ORDER BY sale_month))
        / LAG(revenue, 1) OVER (ORDER BY sale_month) * 100, 2
    ) AS pct_change
FROM monthly_sales;

-- Running total (cumulative sum)
SELECT
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total,
    AVG(amount) OVER (ORDER BY order_date) AS running_avg
FROM orders;

-- 3-month moving average
SELECT
    sale_month,
    revenue,
    AVG(revenue) OVER (
        ORDER BY sale_month
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3m
FROM monthly_sales;

-- NTILE — salary percentiles
SELECT
    name,
    salary,
    NTILE(4) OVER (ORDER BY salary) AS quartile
FROM employees;
-- 1=bottom 25%, 2=25-50%, 3=50-75%, 4=top 25%`,
      },
    ],
    cheatsheet: [
      "OVER (PARTITION BY dept ORDER BY salary) — window define",
      "ROW_NUMBER() — unique 1,2,3 (ties = different)",
      "RANK() — ties = same rank, gap baad mein",
      "DENSE_RANK() — ties = same rank, no gap",
      "LAG(col,1) — previous row value",
      "LEAD(col,1) — next row value",
      "SUM() OVER (ORDER BY date) — running total",
    ],
    revision: [
      "Window = rows preserve (GROUP BY collapse karta hai)",
      "PARTITION BY = window ke andar groups",
      "ROW_NUMBER unique, RANK gaps, DENSE_RANK no gaps",
      "LAG = past, LEAD = future row value",
      "ROWS BETWEEN = frame define karo",
    ],
    revisionEn: [
      "Window = rows preserved (unlike GROUP BY which collapses)",
      "PARTITION BY = define groups within the window",
      "ROW_NUMBER unique, RANK has gaps, DENSE_RANK no gaps",
      "LAG = past value, LEAD = future row value",
      "ROWS BETWEEN = define the calculation frame",
    ],
  },
  {
    id: "mysql-json",
    title: "JSON Data Type aur Functions",
    titleEn: "JSON Data Type and Functions",
    emoji: "📋",
    category: "Advanced",
    description: "MySQL mein JSON store, query, aur update karna — modern flexible schema",
    descriptionEn: "Storing, querying, and updating JSON in MySQL — modern flexible schema design",
    sections: [
      {
        heading: "MySQL mein JSON kab use karein?",
        content: `**JSON column** = Flexible schema — structured data ke saath semi-structured data bhi store karo.

**Kab JSON use karein:**
- Dynamic/flexible attributes (product variants, metadata)
- Config settings per user
- Audit logs, event data
- Third-party API data store karna

**Kab na karein:**
- Frequently filter/search karni ho JSON fields pe → relational better
- Joins chahiye JSON values pe → normalize better
- ACID transactions with JSON fields → tricky

**MySQL 5.7.8+** mein JSON type available hai — validated stored, not just text.`,
        code: `-- JSON column create
CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    attributes JSON,  -- validated JSON!
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert JSON
INSERT INTO products (name, attributes) VALUES
(
    'Laptop',
    '{"brand": "Dell", "ram": 16, "storage": "512GB", "colors": ["black", "silver"]}'
),
(
    'Phone',
    '{"brand": "Samsung", "ram": 8, "features": {"5g": true, "nfc": true}}'
);

-- JSON_OBJECT — construct karo
INSERT INTO products (name, attributes) VALUES (
    'Tablet',
    JSON_OBJECT('brand', 'Apple', 'ram', 8, 'os', 'iPadOS')
);

-- JSON_ARRAY
UPDATE products SET attributes = JSON_SET(
    attributes,
    '$.colors',
    JSON_ARRAY('blue', 'red', 'green')
) WHERE id = 1;`,
      },
      {
        heading: "JSON Query aur Index",
        content: `**->  operator:** JSON_EXTRACT shorthand — JSON strings return karta hai (quotes sath).
**->> operator:** JSON_UNQUOTE(JSON_EXTRACT) — clean string value.
**JSON_CONTAINS:** Koi value hai JSON mein?
**Generated column + Index:** JSON field pe index lagao — fast filtering.`,
        code: `-- JSON path access
SELECT
    name,
    attributes -> '$.brand' AS brand_quoted,       -- "Dell" (quotes)
    attributes ->> '$.brand' AS brand_clean,       -- Dell (no quotes)
    attributes -> '$.ram' AS ram,
    attributes -> '$.colors[0]' AS first_color,
    attributes -> '$.features.5g' AS has_5g
FROM products;

-- WHERE clause mein JSON filter
SELECT name FROM products
WHERE attributes ->> '$.brand' = 'Dell';

SELECT name FROM products
WHERE attributes -> '$.ram' >= 16;

-- JSON_CONTAINS — array mein value check
SELECT name FROM products
WHERE JSON_CONTAINS(attributes -> '$.colors', '"black"');

-- JSON_EXTRACT with path
SELECT
    name,
    JSON_EXTRACT(attributes, '$.brand') AS brand,
    JSON_LENGTH(attributes -> '$.colors') AS color_count
FROM products;

-- Generated column + index (fast JSON search!)
ALTER TABLE products
    ADD COLUMN brand VARCHAR(100) GENERATED ALWAYS AS
        (attributes ->> '$.brand') VIRTUAL;

CREATE INDEX idx_brand ON products(brand);

-- Ab fast!
SELECT * FROM products WHERE brand = 'Dell';

-- JSON update functions
UPDATE products
SET attributes = JSON_SET(
    attributes,
    '$.ram', 32,           -- update
    '$.ssd', true          -- add new key
)
WHERE id = 1;

-- Remove key
UPDATE products
SET attributes = JSON_REMOVE(attributes, '$.colors')
WHERE id = 2;`,
      },
    ],
    cheatsheet: [
      "JSON_OBJECT('key', val) — JSON banao",
      "col -> '$.key' — extract (with quotes)",
      "col ->> '$.key' — extract (clean string)",
      "JSON_SET(col, '$.key', val) — update/add",
      "JSON_REMOVE(col, '$.key') — key remove",
      "JSON_CONTAINS(col, value) — check presence",
      "Generated column + index → JSON field fast search",
    ],
    revision: [
      "-> returns quoted, ->> returns clean value",
      "JSON_SET = update/add, JSON_REMOVE = delete key",
      "JSON_CONTAINS → array mein value check",
      "Generated column = JSON field pe index lagao",
      "JSON type = validated (invalid JSON reject hota hai)",
    ],
    revisionEn: [
      "-> returns quoted value, ->> returns clean string",
      "JSON_SET = update/add key, JSON_REMOVE = delete key",
      "JSON_CONTAINS → check if value exists in array",
      "Generated column + index = fast JSON field search",
      "JSON type = validated on insert (invalid JSON rejected)",
    ],
  },
  {
    id: "mysql-advanced-queries",
    title: "Advanced SQL Queries",
    titleEn: "Advanced SQL Queries",
    emoji: "🔮",
    category: "Advanced",
    description: "CTEs, recursive queries, pivot, CASE WHEN, EXISTS, aur complex patterns",
    descriptionEn: "CTEs, recursive queries, pivot, CASE WHEN, EXISTS, and complex query patterns",
    sections: [
      {
        heading: "CTE — Common Table Expressions",
        content: `**CTE (WITH clause)** = Named temporary result set — complex queries readable banao, reuse karo.

**CTE vs Subquery:**
- CTE = ek baar define, multiple baar reference karo
- Subquery = inline, ek hi jagah
- CTE = more readable for complex queries
- Recursive queries = sirf CTE se possible

**Syntax:**
\`\`\`sql
WITH cte_name AS (
    SELECT ...
),
second_cte AS (
    SELECT ... FROM cte_name
)
SELECT * FROM second_cte;
\`\`\``,
        code: `-- Simple CTE — readable query
WITH active_customers AS (
    SELECT id, name, email
    FROM customers
    WHERE status = 'active' AND created_at > '2024-01-01'
),
high_value AS (
    SELECT customer_id, SUM(amount) AS total
    FROM orders
    GROUP BY customer_id
    HAVING total > 50000
)
SELECT c.name, c.email, h.total
FROM active_customers c
JOIN high_value h ON c.id = h.customer_id
ORDER BY h.total DESC;

-- Multiple CTEs
WITH
monthly_sales AS (
    SELECT
        DATE_FORMAT(order_date, '%Y-%m') AS month,
        SUM(amount) AS revenue
    FROM orders
    GROUP BY month
),
ranked_months AS (
    SELECT
        month,
        revenue,
        RANK() OVER (ORDER BY revenue DESC) AS rank_num
    FROM monthly_sales
)
SELECT month, revenue
FROM ranked_months
WHERE rank_num <= 3;  -- Top 3 months`,
      },
      {
        heading: "Recursive CTE aur CASE WHEN",
        content: `**Recursive CTE:** Hierarchical data — employees > managers, categories > subcategories, org charts.
**CASE WHEN:** Conditional logic in SQL — computed columns, pivot tables.
**EXISTS vs IN:** EXISTS = correlated subquery — IN ke saath large lists mein faster.`,
        code: `-- Recursive CTE — employee hierarchy
WITH RECURSIVE emp_hierarchy AS (
    -- Base case: top-level managers
    SELECT id, name, manager_id, 0 AS level
    FROM employees
    WHERE manager_id IS NULL
    
    UNION ALL
    
    -- Recursive: har employee ke reports
    SELECT e.id, e.name, e.manager_id, h.level + 1
    FROM employees e
    JOIN emp_hierarchy h ON e.manager_id = h.id
)
SELECT
    CONCAT(REPEAT('  ', level), name) AS org_chart,
    level
FROM emp_hierarchy
ORDER BY level, name;

-- CASE WHEN — salary bands
SELECT
    name,
    salary,
    CASE
        WHEN salary < 30000 THEN 'Junior'
        WHEN salary < 60000 THEN 'Mid-level'
        WHEN salary < 100000 THEN 'Senior'
        ELSE 'Executive'
    END AS grade,
    CASE department
        WHEN 'Engineering' THEN salary * 1.1   -- 10% bonus
        WHEN 'Sales' THEN salary * 1.15        -- 15% bonus
        ELSE salary
    END AS adjusted_salary
FROM employees;

-- Pivot table with CASE WHEN
SELECT
    department,
    SUM(CASE WHEN YEAR(hire_date) = 2022 THEN 1 ELSE 0 END) AS hired_2022,
    SUM(CASE WHEN YEAR(hire_date) = 2023 THEN 1 ELSE 0 END) AS hired_2023,
    SUM(CASE WHEN YEAR(hire_date) = 2024 THEN 1 ELSE 0 END) AS hired_2024
FROM employees
GROUP BY department;

-- EXISTS — correlated subquery
SELECT c.name
FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.id
    AND o.amount > 10000
);`,
      },
    ],
    cheatsheet: [
      "WITH cte AS (SELECT ...) SELECT * FROM cte",
      "Multiple CTEs: WITH a AS (...), b AS (...)",
      "Recursive CTE: UNION ALL with self-reference",
      "CASE WHEN cond THEN val ELSE default END",
      "EXISTS (SELECT 1 ...) — boolean check",
      "GROUP_CONCAT(name SEPARATOR ', ') — string aggregate",
    ],
    revision: [
      "CTE = readable subquery + reusable in same query",
      "Recursive CTE = hierarchy/tree data traverse",
      "CASE WHEN = SQL mein if-else",
      "EXISTS = correlated subquery, early exit on match",
      "Pivot = CASE WHEN + SUM/COUNT aggregation",
    ],
    revisionEn: [
      "CTE = readable subquery that can be reused in same query",
      "Recursive CTE = traverse hierarchical/tree data",
      "CASE WHEN = if-else logic in SQL",
      "EXISTS = correlated subquery, stops on first match",
      "Pivot table = CASE WHEN + conditional aggregation",
    ],
  },
];

export const mysqlInterviews = [
  {
    id: 701,
    level: "Beginner" as const,
    tags: ["basics"],
    question: "PRIMARY KEY aur UNIQUE KEY mein kya fark hai?",
    answer: `**PRIMARY KEY:**
- Ek table mein sirf ek hi ho sakti hai
- NULL values allowed NAHI
- Auto-indexed hoti hai
- Table ki main identifier

**UNIQUE KEY:**
- Ek table mein multiple ho sakti hain
- NULL values allowed hain (ek hi baar)
- Fast lookup ke liye indexed
- Duplicate values nahi

**Example:** users table mein:
- id = PRIMARY KEY (main identifier)
- email = UNIQUE KEY (duplicate nahi, NULL possible)`,
    code: `CREATE TABLE users (
    id    INT AUTO_INCREMENT PRIMARY KEY,  -- only one
    email VARCHAR(150) UNIQUE NOT NULL,    -- unique + not null
    phone VARCHAR(15) UNIQUE               -- unique, NULL allowed
);`,
  },
  {
    id: 702,
    level: "Beginner" as const,
    tags: ["queries"],
    question: "WHERE aur HAVING mein kya fark hai?",
    answer: `**WHERE:**
- Individual rows filter karta hai
- GROUP BY se PEHLE apply hota hai
- Aggregate functions use nahi kar sakte (COUNT, SUM, etc.)

**HAVING:**
- Grouped results filter karta hai
- GROUP BY ke BAAD apply hota hai
- Aggregate functions use kar sakte hain

**Rule:** Agar GROUP BY hai aur aggregate pe filter chahiye → HAVING. Otherwise → WHERE.`,
    code: `-- WHERE: rows filter karo (GROUP BY se pehle)
SELECT department, COUNT(*) as count
FROM employees
WHERE salary > 30000        -- individual rows filter
GROUP BY department
HAVING count > 5;           -- groups filter (5 se zyada employees)`,
  },
  {
    id: 703,
    level: "Intermediate" as const,
    tags: ["joins"],
    question: "INNER JOIN, LEFT JOIN, RIGHT JOIN explain karo.",
    answer: `**INNER JOIN:** Sirf matching records dono tables se.
Users aur orders — sirf woh users jinke orders hain.

**LEFT JOIN:** Left table ki sab rows + matching right table rows.
Matching nahi mila → right table columns NULL.
Users aur orders — sab users, jinke orders nahi unhe NULL milega.

**RIGHT JOIN:** Right table ki sab rows + matching left table rows.
Kum use hota hai — generally LEFT JOIN se replace kar lete hain.

**FULL OUTER JOIN:** MySQL mein directly nahi, UNION se:
LEFT JOIN UNION RIGHT JOIN`,
    code: `-- Sab users aur unke orders (orders na ho toh NULL)
SELECT u.name, COUNT(o.id) as orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;`,
  },
  {
    id: 704,
    level: "Intermediate" as const,
    tags: ["performance"],
    question: "Index kya hai? Kab lagana chahiye?",
    answer: `Index ek data structure hai (B-tree mostly) jo queries fast karta hai.

**Kab lagao:**
- WHERE clause mein frequently use hone wale columns
- JOIN conditions mein
- ORDER BY columns mein
- FOREIGN KEY columns mein

**Kab mat lagao:**
- Small tables (full scan faster)
- Columns jo rarely queried hote hain
- Columns jo bahut baar update hote hain
- Low cardinality columns (boolean — sirf 2 values)

**EXPLAIN se check karo:**
type = ALL → index nahi use ho raha → bad
type = ref/range/const → index use ho raha → good`,
    code: `-- Index add karo
CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_user_created ON orders(user_id, created_at); -- composite

-- Query plan dekho
EXPLAIN SELECT * FROM users WHERE email = 'test@test.com';`,
  },
  {
    id: 705,
    level: "Advanced" as const,
    tags: ["transactions"],
    question: "ACID properties kya hain? Transaction kab use karein?",
    answer: `**ACID:**
- **A (Atomicity):** Ya sab hoga ya kuch nahi — all or nothing
- **C (Consistency):** Data hamesha valid state mein rahega
- **I (Isolation):** Concurrent transactions ek doosre ko affect nahi karenge
- **D (Durability):** Committed changes persist honge (crash ke baad bhi)

**Kab transaction use karein:**
- Multiple related operations — sab succeed ya sab fail
- Money transfer, order placement, inventory deduction
- Data integrity critical ho

**Isolation Levels:**
READ UNCOMMITTED < READ COMMITTED < REPEATABLE READ < SERIALIZABLE`,
    code: `START TRANSACTION;
  UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
  UPDATE accounts SET balance = balance + 1000 WHERE id = 2;
  -- Dono succeed? 
COMMIT;
  -- Koi error?
ROLLBACK;`,
  },
  {
    id: 706,
    level: "Beginner" as const,
    question: "PRIMARY KEY aur UNIQUE KEY mein kya fark hai?",
    answer: `PRIMARY KEY:
- Table mein sirf ek ho sakti hai
- NULL allowed nahi (NOT NULL implicit)
- Clustered index automatically banta hai (InnoDB)
- Row uniquely identify karta hai

UNIQUE KEY:
- Table mein multiple ho sakti hain
- NULL allowed hai (multiple NULL values allowed — NULL != NULL)
- Non-clustered index

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,       -- null allowed, unique non-null values
    username VARCHAR(50) UNIQUE NOT NULL
);

Composite PK:
CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    PRIMARY KEY (order_id, product_id)  -- dono milke unique
);`,
    tags: ["keys", "constraints"],
  },
  {
    id: 707,
    level: "Beginner" as const,
    question: "INNER JOIN, LEFT JOIN, RIGHT JOIN, aur FULL OUTER JOIN explain karo.",
    answer: `INNER JOIN: Dono tables mein matching rows — non-matching rows exclude.
LEFT JOIN: Left table ki sab rows + right table se matches (right NULL agar match nahi).
RIGHT JOIN: Right table ki sab rows + left table se matches (left NULL agar match nahi).
FULL OUTER JOIN: Dono tables ki sab rows (MySQL mein UNION se simulate karte hain).

-- INNER JOIN
SELECT o.id, u.name FROM orders o
INNER JOIN users u ON o.user_id = u.id;

-- LEFT JOIN — sab users even if no orders
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;

-- FULL OUTER (MySQL workaround)
SELECT * FROM a LEFT JOIN b ON a.id = b.a_id
UNION
SELECT * FROM a RIGHT JOIN b ON a.id = b.a_id;

Trick: LEFT JOIN + WHERE b.id IS NULL = only left rows with no match (anti-join).`,
    tags: ["joins", "sql"],
  },
  {
    id: 708,
    level: "Intermediate" as const,
    question: "MySQL mein Index kitne types ke hote hain? Kab kaunsa use karein?",
    answer: `1. PRIMARY KEY: Ek per table, clustered, not null.
2. UNIQUE Index: Duplicate values nahi, null allowed.
3. Regular Index (KEY/INDEX): Performance ke liye, duplicates allowed.
4. Composite Index: Multiple columns — leftmost prefix rule.
5. FULLTEXT Index: Text search — MATCH() AGAINST() — articles, descriptions.
6. SPATIAL Index: Geographic data — geometry types.

CREATE INDEX idx_email ON users(email);
CREATE INDEX idx_dept_salary ON employees(department, salary);  -- composite
CREATE FULLTEXT INDEX idx_content ON posts(title, body);

Composite index rules:
WHERE dept = 'Eng' AND salary > 50000  → uses (dept, salary) ✓
WHERE salary > 50000  → does NOT use (dept, salary) ✗ (leftmost missing)

Kab index na banao: Small tables, frequently updated columns, low-cardinality (gender).`,
    tags: ["index", "performance"],
  },
  {
    id: 709,
    level: "Intermediate" as const,
    question: "HAVING aur WHERE mein kya fark hai?",
    answer: `WHERE: Rows filter karo BEFORE aggregation — individual rows pe kaam karta hai.
HAVING: Rows filter karo AFTER aggregation — groups pe kaam karta hai.

-- WHERE — aggregation se pehle filter
SELECT department, AVG(salary) as avg_sal
FROM employees
WHERE salary > 20000  -- individual salary filter
GROUP BY department;

-- HAVING — aggregation ke baad filter
SELECT department, AVG(salary) as avg_sal
FROM employees
GROUP BY department
HAVING avg_sal > 50000;  -- group average filter

-- Dono saath
SELECT department, COUNT(*) as emp_count, AVG(salary) as avg_sal
FROM employees
WHERE hire_date > '2020-01-01'  -- filter rows first
GROUP BY department
HAVING emp_count >= 5            -- then filter groups
ORDER BY avg_sal DESC;

Memory tip: WHERE = before GROUP BY, HAVING = after GROUP BY.`,
    tags: ["sql", "aggregation", "filtering"],
  },
  {
    id: 710,
    level: "Intermediate" as const,
    question: "Stored Procedure aur Function mein kya fark hai MySQL mein?",
    answer: `Stored Procedure:
- CALL procedure() se execute
- Multiple result sets return kar sakta hai
- IN, OUT, INOUT parameters
- SQL statements mein use nahi ho sakta
- Transactions, error handling complex logic ke liye

Function:
- SELECT mein use ho sakti hai
- Sirf ek value return karta hai (scalar)
- Sirf IN parameters
- Side effects nahi hone chahiye (pure function)

-- Procedure
DELIMITER //
CREATE PROCEDURE GetUserOrders(IN user_id INT)
BEGIN
    SELECT * FROM orders WHERE user_id = user_id;
    SELECT COUNT(*) FROM orders WHERE user_id = user_id;
END //
CALL GetUserOrders(1);

-- Function
CREATE FUNCTION GetFullName(first VARCHAR(50), last VARCHAR(50))
RETURNS VARCHAR(100) DETERMINISTIC
BEGIN
    RETURN CONCAT(first, ' ', last);
END;

SELECT GetFullName(first_name, last_name) FROM users;`,
    tags: ["stored-procedures", "functions"],
  },
  {
    id: 711,
    level: "Advanced" as const,
    question: "MySQL mein Deadlock kya hai? Kaise prevent karte hain?",
    answer: `Deadlock: Do ya zyada transactions ek doosre ke lock ka wait kar rahein — circular dependency.

T1 locks row A, wants B
T2 locks row B, wants A
→ Neither can proceed → MySQL detects and kills one transaction!

Prevention strategies:
1. Consistent lock order: Hamesha same order mein resources lock karo
   -- Always lock user first, then account
   T1: lock user(1) → lock account(101)
   T2: lock user(1) → lock account(102)  -- same order!

2. Short transactions: Transaction jaldi complete karo — locks kam time ke liye held

3. Row-level locking: Table lock se bachao — SELECT ... FOR UPDATE specific rows ke liye

4. Indexing: Non-indexed queries table lock karte hain → deadlock prone

5. Deadlock detection: SHOW ENGINE INNODB STATUS — recent deadlock dekho

-- Retry logic (application level)
BEGIN TRY
    START TRANSACTION;
    -- operations
    COMMIT;
CATCH (deadlock error 1213)
    ROLLBACK;
    -- Retry the transaction`,
    tags: ["transactions", "deadlock", "locking"],
  },
  {
    id: 712,
    level: "Intermediate" as const,
    question: "EXPLAIN query output kaise interpret karte hain?",
    answer: `EXPLAIN: Query execution plan — MySQL query kaise execute karega show karta hai.

Key columns:
- type: Access method — best to worst:
  system/const > eq_ref > ref > range > index > ALL
  ALL = full table scan = BAD!

- key: Konsa index use ho raha hai (NULL = no index)
- key_len: Kitna index use ho raha hai (longer = more columns)
- rows: Estimated rows scan ki jaayegi
- Extra: Using index (covering), Using filesort, Using temporary = BAD

EXPLAIN SELECT * FROM orders WHERE user_id = 5;
-- type: ref, key: idx_user_id → Good!

EXPLAIN SELECT * FROM orders WHERE YEAR(created_at) = 2024;
-- type: ALL → Bad! Function pe index nahi use hoga

Fix:
-- Instead of YEAR(created_at) = 2024:
WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01'
-- Now index use hoga!

EXPLAIN ANALYZE (MySQL 8.0+): Actual execution stats bhi dikhata hai.`,
    tags: ["explain", "performance", "indexing"],
  },
  {
    id: 713,
    level: "Intermediate" as const,
    question: "MySQL mein ENUM vs VARCHAR vs TINYINT — kab kya use karein?",
    answer: `ENUM('val1','val2'): Fixed set of values — status columns ke liye.
- Pros: Storage efficient (1-2 bytes), validation built-in, readable
- Cons: Schema change karna expensive, alphabetical order problematic

VARCHAR(n): Variable length string.
- Pros: Flexible, easy to change
- Cons: More storage, no built-in validation

TINYINT: 0-255 (or -128 to 127 signed) — numeric status codes.
- Pros: Fastest, least storage (1 byte)
- Cons: Code mein magic numbers

Best practices:
-- Status columns
status ENUM('pending', 'active', 'cancelled', 'completed')
-- Readable + efficient

-- Role (limited set, rarely changes)
role ENUM('user', 'admin', 'moderator')

-- Gender
gender ENUM('M', 'F', 'Other', 'Prefer not to say')

-- Avoid ENUM when: values frequently change, many values, internationalization

-- Modern approach: separate lookup table
CREATE TABLE statuses (code TINYINT PK, name VARCHAR(50));`,
    tags: ["data-types", "design"],
  },
  {
    id: 714,
    level: "Advanced" as const,
    question: "Database Sharding kya hai? MySQL mein kaise implement karte hain?",
    answer: `Sharding = Database horizontally partition karo — data multiple databases pe distribute karo.

Kab zaruri: Single DB handle nahi kar sakta traffic ya data volume.

Sharding strategies:
1. Range-based: User ID 1-1M → DB1, 1M-2M → DB2
   - Simple lekin hotspots (new users sab ek DB pe)

2. Hash-based: shard = hash(user_id) % num_shards
   - Even distribution lekin rebalancing hard

3. Directory-based: Lookup table — user_id → shard_id
   - Flexible lekin extra DB call

// Application-level sharding
function getShard(userId) {
    return userId % TOTAL_SHARDS;  // 0, 1, 2...
}

function getConnection(userId) {
    const shard = getShard(userId);
    return connections[shard];  // shard-specific connection
}

Challenges:
- Cross-shard queries (JOINs across shards) — avoid!
- Rebalancing shards — data migration
- Transactions across shards — distributed transactions
- Schema changes — apply to all shards

Alternatives before sharding: Read replicas, caching (Redis), query optimization, vertical scaling.`,
    tags: ["sharding", "scalability", "architecture"],
  },
  {
    id: 715,
    level: "Advanced" as const,
    question: "MySQL replication kya hai? Master-Slave aur Master-Master explain karo.",
    answer: `Replication: Data ek DB se doosre pe automatically copy karo — high availability, read scaling.

Master-Slave (Primary-Replica):
- Master: Writes handle karta hai
- Slave: Reads handle karta hai (read scaling!)
- Binary log (binlog) se changes propagate hote hain
- Asynchronous — slave slightly behind

Use case: Read-heavy apps — write master pe, reads replicas pe distribute karo.

Master-Master (Active-Active):
- Dono masters — dono read + write kar sakte hain
- Conflicts possible — auto-increment must be different
- server1: auto_increment_increment=2, auto_increment_offset=1 (1,3,5...)
- server2: auto_increment_increment=2, auto_increment_offset=2 (2,4,6...)

Application setup:
-- Writes → master
-- Reads → round-robin among replicas

Replication types:
- Async: Fast writes, slave can lag
- Semi-sync: Master ek slave ka acknowledge wait karta hai
- Group replication: Multi-master, consensus-based (MySQL InnoDB Cluster)

Monitoring: SHOW SLAVE STATUS — Seconds_Behind_Master watch karo.`,
    tags: ["replication", "high-availability", "scaling"],
  },
];

