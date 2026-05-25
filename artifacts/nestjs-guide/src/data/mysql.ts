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
];
