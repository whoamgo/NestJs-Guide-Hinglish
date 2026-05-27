import type { Chapter } from "./chapters";

export const phpChapters: Chapter[] = [
  {
    id: "php-intro",
    title: "PHP Kya Hai? Setup karo",
    emoji: "🐘",
    category: "Basics",
    description: "PHP introduction, installation, aur pehla program",
    sections: [
      {
        heading: "PHP kya hai?",
        content: `PHP = Hypertext Preprocessor. Yeh ek server-side scripting language hai jo web development ke liye banai gayi thi.

**PHP kyun popular hai:**
- 80%+ websites PHP use karti hain (Facebook, WordPress, Wikipedia sab)
- Seekhna aasaan hai
- MySQL ke saath best combination
- Free aur open source
- Har hosting par available

**PHP kaise kaam karta hai:**
Browser request bhejta hai → Server PHP file execute karta hai → HTML generate hoti hai → Browser ko bhejta hai`,
        diagram: `
PHP REQUEST FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Browser          Web Server (Apache/Nginx)
    │                      │
    │  GET /index.php       │
    │ ─────────────────────►│
    │                       │
    │              PHP Engine execute karo
    │              → MySQL query
    │              → HTML generate
    │                       │
    │  HTML Response        │
    │ ◄─────────────────────│

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Setup Options:

# Option 1: XAMPP (easiest - Windows/Mac/Linux)
# Download: https://www.apachefriends.org
# Sab milta hai: Apache + MySQL + PHP + phpMyAdmin

# Option 2: PHP built-in server (development)
php -S localhost:8000
# Ab http://localhost:8000 par access karo

# PHP version check karo
php --version

# Pehla PHP program:
# file: hello.php
<?php
echo "Namaste Duniya!";
echo "<br>";
echo "PHP version: " . phpversion();
?>`,
        language: "php",
        tip: "XAMPP download karo — ek click mein sab setup ho jaata hai. htdocs folder mein files rakho aur http://localhost par access karo.",
      },
      {
        heading: "Variables, Data Types aur Operators",
        content: `PHP mein variables $ sign se start hote hain. Aur PHP loosely typed hai — type declare nahi karna padta.

**Data Types:**
- string, int, float, bool, array, null, object`,
        code: `<?php
// Variables — $ sign se start
$naam = "Rahul";           // string
$age = 25;                 // integer
$height = 5.9;             // float
$isStudent = true;         // boolean
$courses = null;           // null

// String operations
$fullName = "Priya" . " " . "Sharma";  // concatenation
$length = strlen($naam);                // string length
$upper = strtoupper($naam);            // RAHUL
$lower = strtolower($naam);            // rahul

// Number operations
$sum = 10 + 5;    // 15
$diff = 10 - 5;   // 5
$mult = 10 * 5;   // 50
$div = 10 / 5;    // 2
$mod = 10 % 3;    // 1 (remainder)
$power = 2 ** 8;  // 256

// Type checking
var_dump($age);         // int(25) — type + value
gettype($naam);         // "string"
is_string($naam);       // true
is_int($age);           // true
is_null($courses);      // true

// Type conversion
$numStr = "42";
$num = (int) $numStr;       // explicit cast
$num = intval($numStr);     // function
$float = floatval("3.14");

// String interpolation (double quotes mein)
echo "Mera naam $naam hai aur main $age saal ka hoon";
// ya complex:
echo "Price: {$items['price']} rupay";
?>`,
        language: "php",
      },
      {
        heading: "Control Structures — if, for, while, switch",
        content: ``,
        code: `<?php
$marks = 85;

// if-elseif-else
if ($marks >= 90) {
    echo "Grade: A+";
} elseif ($marks >= 80) {
    echo "Grade: A";
} elseif ($marks >= 70) {
    echo "Grade: B";
} else {
    echo "Grade: C";
}

// Ternary operator
$status = ($marks >= 33) ? "Pass" : "Fail";

// Null coalescing operator (??)
$name = $_GET['name'] ?? "Guest"; // agar name nahi toh Guest

// Match expression (PHP 8+) — switch ka better version
$grade = match(true) {
    $marks >= 90 => "A+",
    $marks >= 80 => "A",
    $marks >= 70 => "B",
    default => "C",
};

// for loop
for ($i = 1; $i <= 5; $i++) {
    echo "Number: $i<br>";
}

// while loop
$count = 1;
while ($count <= 5) {
    echo "Count: $count<br>";
    $count++;
}

// foreach — arrays ke liye
$fruits = ["Apple", "Banana", "Mango"];
foreach ($fruits as $index => $fruit) {
    echo "$index: $fruit<br>";
}

// break aur continue
for ($i = 0; $i <= 10; $i++) {
    if ($i == 5) continue; // 5 skip karo
    if ($i == 8) break;    // 8 pe band karo
    echo $i . " ";
}
?>`,
        language: "php",
        tip: "PHP 8+ mein match() use karo switch ki jagah — strict type checking karta hai aur expression return karta hai.",
      },
    ],
    mcqs: [
      {
        q: "PHP mein variable kaunse character se start hota hai?",
        options: ["@", "#", "$", "&"],
        correct: 2,
        explain: "PHP mein sab variables $ sign se start hote hain. Example: $naam, $age.",
      },
      {
        q: "PHP mein string concatenation ke liye kaunsa operator use karte hain?",
        options: ["+", ".", "&", "++"],
        correct: 1,
        explain: "PHP mein strings dot (.) operator se join hoti hain: 'Hello' . ' ' . 'World'",
      },
    ],
    cheatsheet: [
      "$var = value — variable declare karo",
      "echo 'text' — output print karo",
      "strlen($str) — string ki length",
      "strtoupper() / strtolower() — case change",
      "$a ?? $b — null coalescing (if null toh b)",
      "var_dump($x) — type + value debug karo",
    ],
    revision: [
      "Variables $ se start, loosely typed",
      "String concatenation = dot (.) operator",
      "PHP 8+ match() > switch()",
      "foreach ($arr as $key => $val) — arrays iterate",
    ],
  },
  {
    id: "php-functions",
    title: "Functions aur Arrays",
    emoji: "🔧",
    category: "Basics",
    description: "Reusable functions banao aur arrays ke saath kaam karo",
    sections: [
      {
        heading: "Functions — Reusable code blocks",
        content: `Function ek reusable code block hai. Ek baar likho, baar baar use karo.`,
        code: `<?php
// Basic function
function greet($naam) {
    return "Namaste, $naam!";
}
echo greet("Rahul"); // Namaste, Rahul!

// Default parameters
function greetUser($naam, $greeting = "Namaste") {
    return "$greeting, $naam!";
}
echo greetUser("Priya");           // Namaste, Priya!
echo greetUser("Amit", "Hello");   // Hello, Amit!

// Type declarations (PHP 7+)
function add(int $a, int $b): int {
    return $a + $b;
}

// Nullable type
function findUser(?int $id): ?string {
    if ($id === null) return null;
    return "User #$id";
}

// Variadic functions (kitne bhi arguments)
function sum(...$numbers): float {
    return array_sum($numbers);
}
echo sum(1, 2, 3, 4, 5); // 15

// Arrow functions (PHP 7.4+)
$double = fn($x) => $x * 2;
echo $double(5); // 10

// Anonymous functions (closures)
$multiply = function($a, $b) {
    return $a * $b;
};

// Use variable from outer scope
$tax = 0.18;
$withTax = function($price) use ($tax) {
    return $price + ($price * $tax);
};
echo $withTax(100); // 118
?>`,
        language: "php",
      },
      {
        heading: "Arrays — PHP ka superpower",
        content: `PHP arrays bahut powerful hain — indexed, associative, aur multidimensional.`,
        code: `<?php
// Indexed Array
$fruits = ["Apple", "Banana", "Mango"];
$fruits[] = "Orange";           // add karo
echo $fruits[0];                // Apple
echo count($fruits);            // 4

// Associative Array (key => value)
$user = [
    "name" => "Rahul",
    "age"  => 25,
    "city" => "Delhi",
];
echo $user["name"];             // Rahul
$user["email"] = "r@r.com";    // add key

// Multidimensional Array
$students = [
    ["name" => "Rahul", "marks" => 85],
    ["name" => "Priya", "marks" => 92],
    ["name" => "Amit",  "marks" => 78],
];
echo $students[0]["name"];      // Rahul

// Array Functions — sabse important
$nums = [3, 1, 4, 1, 5, 9, 2, 6];

sort($nums);                    // ascending sort (modifies original)
rsort($nums);                   // descending sort
$sorted = array_reverse($nums); // reverse

array_push($fruits, "Grapes");  // end mein add
$last = array_pop($fruits);     // end se remove
array_unshift($fruits, "Kiwi"); // start mein add
$first = array_shift($fruits);  // start se remove

$sliced = array_slice($nums, 1, 3); // subset nikalo
$filtered = array_filter($nums, fn($n) => $n > 3); // filter
$doubled = array_map(fn($n) => $n * 2, $nums);      // transform
$total = array_reduce($nums, fn($carry, $n) => $carry + $n, 0); // reduce

// Search
$pos = array_search("Banana", $fruits); // index return karta hai
$exists = in_array("Mango", $fruits);   // bool return karta hai

// Array to string aur back
$str = implode(", ", $fruits);          // "Apple, Banana, Mango"
$arr = explode(", ", $str);             // back to array

// Associative array sorting
asort($user);   // values by sort (keys maintain)
ksort($user);   // keys by sort
?>`,
        language: "php",
        tip: "array_map(), array_filter(), array_reduce() use karo loops ki jagah — cleaner aur functional programming style.",
      },
    ],
    mcqs: [
      {
        q: "PHP mein array ke end mein element add karne ke liye?",
        options: ["array_add()", "array_push()", "array_append()", "$arr[] = val"],
        correct: 3,
        explain: "$arr[] = value ya array_push($arr, value) dono kaam karte hain. $arr[] = val zyada common hai.",
      },
    ],
    cheatsheet: [
      "count($arr) — array length",
      "array_push($arr, $val) — end mein add",
      "array_pop($arr) — end se remove",
      "in_array($val, $arr) — element exist karta hai?",
      "array_map(fn, $arr) — har element transform karo",
      "array_filter($arr, fn) — filter karo",
      "implode(',', $arr) — array to string",
      "explode(',', $str) — string to array",
    ],
    revision: [
      "Indexed: $arr[0], Associative: $arr['key'], Multi: $arr[0]['key']",
      "$arr[] = val — end mein add shortcut",
      "array_map/filter/reduce = functional array operations",
      "implode/explode — array aur string ke beech convert",
    ],
  },
  {
    id: "php-oop",
    title: "OOP in PHP",
    emoji: "📐",
    category: "Intermediate",
    description: "Classes, objects, inheritance, aur PHP mein OOP concepts",
    sections: [
      {
        heading: "Classes aur Objects",
        content: `OOP mein real-world entities ko classes ke roop mein represent karte hain. Class ek blueprint hai, object ek instance.`,
        code: `<?php
// Class define karo
class User {
    // Properties (attributes)
    private string $name;
    private string $email;
    protected int $age;
    public static int $count = 0; // static — all instances share

    // Constructor
    public function __construct(string $name, string $email, int $age) {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
        self::$count++;
    }

    // Getter (accessor)
    public function getName(): string {
        return $this->name;
    }

    // Setter (mutator)
    public function setEmail(string $email): void {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new InvalidArgumentException("Invalid email");
        }
        $this->email = $email;
    }

    // Method
    public function greet(): string {
        return "Namaste, main {$this->name} hoon!";
    }

    // Static method
    public static function getCount(): int {
        return self::$count;
    }

    // Magic methods
    public function __toString(): string {
        return "{$this->name} ({$this->email})";
    }
}

// Object create karo
$user1 = new User("Rahul", "rahul@example.com", 25);
$user2 = new User("Priya", "priya@example.com", 22);

echo $user1->greet();         // Namaste, main Rahul hoon!
echo $user1->getName();       // Rahul
echo User::getCount();        // 2 (static)
echo $user1;                  // Rahul (rahul@example.com) via __toString
?>`,
        language: "php",
      },
      {
        heading: "Inheritance aur Interfaces",
        content: `Inheritance se ek class doosri class ki properties aur methods inherit kar sakti hai.`,
        code: `<?php
// Base class (Parent)
abstract class Animal {
    protected string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    // Abstract method — child mein implement karna zaroori
    abstract public function sound(): string;

    // Concrete method — inherit ho jaata hai
    public function introduce(): string {
        return "Main {$this->name} hoon aur awaaz: " . $this->sound();
    }
}

// Child class
class Dog extends Animal {
    public function sound(): string {
        return "Bhow Bhow!";
    }

    // Method override karo
    public function introduce(): string {
        return parent::introduce() . " 🐕";
    }
}

class Cat extends Animal {
    public function sound(): string {
        return "Meow!";
    }
}

$dog = new Dog("Tommy");
$cat = new Cat("Kitty");
echo $dog->introduce(); // Main Tommy hoon aur awaaz: Bhow Bhow! 🐕
echo $cat->sound();     // Meow!

// Interface — contract define karo
interface Printable {
    public function print(): string;
    public function toPDF(): void;
}

interface Exportable {
    public function toCSV(): string;
}

// Multiple interfaces implement kar sakte hain
class Invoice implements Printable, Exportable {
    public function print(): string { return "Invoice printed"; }
    public function toPDF(): void { /* PDF generate */ }
    public function toCSV(): string { return "id,amount,date"; }
}

// Trait — mixin ki tarah (multiple "inheritance")
trait Timestampable {
    private DateTime $createdAt;

    public function setCreatedAt(): void {
        $this->createdAt = new DateTime();
    }

    public function getCreatedAt(): string {
        return $this->createdAt->format('Y-m-d H:i:s');
    }
}

class Post {
    use Timestampable;  // trait include karo
    public string $title;
}
?>`,
        language: "php",
        tip: "PHP mein multiple inheritance nahi hoti (ek se zyada classes extend nahi kar sakte), lekin multiple interfaces implement kar sakte hain aur Traits use kar sakte hain.",
      },
    ],
    mcqs: [
      {
        q: "PHP mein parent class ke constructor ko call karne ke liye?",
        options: ["super()", "parent::__construct()", "base()", "$parent->__construct()"],
        correct: 1,
        explain: "PHP mein parent class ke methods access karne ke liye parent:: keyword use karo.",
      },
    ],
    cheatsheet: [
      "class Child extends Parent — inheritance",
      "abstract class — object nahi ban sakta, blueprint only",
      "interface — method signatures define karo",
      "trait — mixin (multiple 'inheritance' workaround)",
      "parent:: — parent class methods access karo",
      "self:: — current class static members",
      "$this-> — current object properties/methods",
    ],
    revision: [
      "abstract class = incomplete class (object nahi ban sakta)",
      "interface = contract (kya implement karna hai)",
      "trait = copy-paste code (mixin)",
      "PHP mein multiple interfaces, ek hi class extend",
    ],
  },
  {
    id: "php-mysql",
    title: "PHP + MySQL — Database",
    emoji: "🗄️",
    category: "Intermediate",
    description: "PDO se MySQL connect karo aur CRUD operations karo",
    sections: [
      {
        heading: "PDO se MySQL connect karo",
        content: `PHP mein database connect karne ke do ways hain — mysqli aur PDO. **PDO use karo** — multiple databases support karta hai aur prepared statements se SQL injection se bachata hai.`,
        code: `<?php
// config/database.php
$host = 'localhost';
$dbname = 'my_database';
$username = 'root';
$password = '';

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8mb4",
        $username,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,   // exceptions throw karo
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC, // array return karo
            PDO::ATTR_EMULATE_PREPARES => false,           // real prepared statements
        ]
    );
    echo "Database connected!";
} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}`,
        language: "php",
        warning: "Kabhi bhi user input directly SQL mein mat rakho — SQL Injection ka risk. Hamesha Prepared Statements use karo!",
      },
      {
        heading: "CRUD Operations with PDO",
        content: ``,
        code: `<?php
// CREATE — naya user add karo
function createUser(PDO $pdo, string $name, string $email): int {
    $sql = "INSERT INTO users (name, email, created_at) VALUES (?, ?, NOW())";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$name, $email]);
    return (int) $pdo->lastInsertId();
}

// READ — saare users
function getAllUsers(PDO $pdo, int $limit = 10, int $offset = 0): array {
    $stmt = $pdo->prepare("SELECT * FROM users LIMIT ? OFFSET ?");
    $stmt->execute([$limit, $offset]);
    return $stmt->fetchAll(); // array of arrays
}

// READ — ek user by ID
function getUserById(PDO $pdo, int $id): ?array {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
    $stmt->execute([$id]);
    $user = $stmt->fetch();
    return $user ?: null;
}

// UPDATE
function updateUser(PDO $pdo, int $id, string $name, string $email): bool {
    $stmt = $pdo->prepare("UPDATE users SET name = ?, email = ? WHERE id = ?");
    return $stmt->execute([$name, $email, $id]);
}

// DELETE
function deleteUser(PDO $pdo, int $id): bool {
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    return $stmt->execute([$id]);
}

// Named parameters (zyada readable)
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email AND age > :age");
$stmt->execute([':email' => $email, ':age' => $minAge]);

// Transaction — ya sab hoga ya kuch nahi
try {
    $pdo->beginTransaction();
    
    $pdo->prepare("UPDATE accounts SET balance = balance - ? WHERE id = ?")
        ->execute([1000, $senderId]);
    
    $pdo->prepare("UPDATE accounts SET balance = balance + ? WHERE id = ?")
        ->execute([1000, $receiverId]);
    
    $pdo->commit();
    echo "Transfer successful!";
} catch (Exception $e) {
    $pdo->rollBack();
    echo "Transfer failed: " . $e->getMessage();
}
?>`,
        language: "php",
        tip: "Named parameters (:name) use karo positional (?) ki jagah — zyada readable aur order matter nahi karta.",
      },
    ],
    mcqs: [
      {
        q: "SQL Injection se bachne ke liye kya use karein?",
        options: [
          "htmlspecialchars()",
          "PDO Prepared Statements",
          "mysql_real_escape_string()",
          "addslashes()",
        ],
        correct: 1,
        explain: "PDO Prepared Statements sabse safe hai. User input aur SQL query alag rehte hain — injection impossible hoti hai.",
      },
    ],
    cheatsheet: [
      "new PDO('mysql:host=...', user, pass) — connect karo",
      "$pdo->prepare($sql) — SQL prepare karo",
      "$stmt->execute([$val]) — execute karo",
      "$stmt->fetch() — ek row",
      "$stmt->fetchAll() — sab rows",
      "$pdo->lastInsertId() — last inserted ID",
      "beginTransaction() → commit() / rollBack()",
    ],
    revision: [
      "PDO = Database-agnostic (MySQL, PostgreSQL, SQLite sab)",
      "Prepared Statements = SQL Injection se protection",
      "? ya :name — user values ko safely inject karo",
      "Transaction = ya sab hoga ya rollback",
    ],
  },
  {
    id: "php-forms",
    title: "Forms, Sessions aur Security",
    emoji: "🔒",
    category: "Intermediate",
    description: "Form handling, session management, aur PHP security best practices",
    sections: [
      {
        heading: "Form Handling — GET aur POST",
        content: `PHP mein form data $_GET, $_POST, aur $_FILES se access karte hain.`,
        code: `<?php
// HTML Form:
// <form method="POST" action="process.php">
//   <input name="email" type="email">
//   <input name="password" type="password">
//   <button type="submit">Login</button>
// </form>

// process.php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Input sanitize karo hamesha!
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    $password = trim($_POST['password'] ?? '');

    // Validation
    $errors = [];
    if (!$email) $errors[] = "Valid email dalo";
    if (strlen($password) < 8) $errors[] = "Password 8+ characters";

    if (empty($errors)) {
        // Process karo
        echo "Form valid!";
    } else {
        foreach ($errors as $error) {
            echo "<p class='error'>$error</p>";
        }
    }
}

// File Upload
if (isset($_FILES['photo'])) {
    $file = $_FILES['photo'];
    $maxSize = 5 * 1024 * 1024; // 5MB
    $allowed = ['image/jpeg', 'image/png', 'image/webp'];

    if ($file['error'] === UPLOAD_ERR_OK
        && $file['size'] <= $maxSize
        && in_array($file['type'], $allowed)) {
        
        $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
        $newName = uniqid() . '.' . $ext;
        move_uploaded_file($file['tmp_name'], "uploads/$newName");
        echo "File uploaded: $newName";
    }
}
?>`,
        language: "php",
      },
      {
        heading: "Sessions aur Cookies",
        content: `Sessions server par user data store karte hain. Cookies browser mein.`,
        code: `<?php
// SESSION
session_start(); // File ke top par zaroor call karo

// Login ke baad session set karo
$_SESSION['user_id'] = 1;
$_SESSION['user_email'] = 'rahul@example.com';
$_SESSION['role'] = 'admin';
$_SESSION['logged_in'] = true;

// Session check karo
if (!isset($_SESSION['logged_in']) || !$_SESSION['logged_in']) {
    header('Location: /login.php');
    exit; // header ke baad exit karna zaroori!
}

// Role check
if ($_SESSION['role'] !== 'admin') {
    http_response_code(403);
    die('Permission denied');
}

// Logout — session destroy karo
session_unset();     // sab session variables hatao
session_destroy();   // session file delete karo
setcookie(session_name(), '', time() - 3600, '/'); // cookie bhi delete karo
header('Location: /login.php');
exit;

// COOKIES
// Set cookie (browser mein save hota hai)
setcookie(
    'user_theme',           // naam
    'dark',                 // value
    time() + (30 * 24 * 3600), // 30 din tak
    '/',                    // path
    '',                     // domain
    true,                   // HTTPS only
    true                    // HttpOnly (JS access nahi kar sakta)
);

// Cookie read karo
$theme = $_COOKIE['user_theme'] ?? 'light';

// CSRF Protection
// Form mein hidden token add karo:
session_start();
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));
// Form mein: <input type="hidden" name="csrf" value="<?= $_SESSION['csrf_token'] ?>">

// Submit pe verify karo:
if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf'] ?? '')) {
    die('CSRF attack detected!');
}
?>`,
        language: "php",
        tip: "Session ID regenerate karo login ke baad — session fixation attack se bachata hai: session_regenerate_id(true);",
        warning: "Cookies mein sensitive data mat rakho — HttpOnly: true aur Secure: true hamesha set karo.",
      },
    ],
    cheatsheet: [
      "session_start() — file ke top par (har page)",
      "$_SESSION['key'] = val — session set karo",
      "$_POST['field'] — form POST data",
      "$_GET['param'] — URL query params",
      "filter_input() — safe input filtering",
      "setcookie(name, val, expiry) — cookie set karo",
      "header('Location: /url') + exit — redirect karo",
    ],
    revision: [
      "Session = server par, Cookie = browser mein",
      "session_start() — har page par pehle call karo",
      "CSRF token — form submissions protect karo",
      "filter_input() — user input hamesha sanitize karo",
    ],
  },
  {
    id: "php-api",
    title: "PHP REST API banao",
    emoji: "🔌",
    category: "Intermediate",
    description: "Pure PHP mein REST API create karo",
    sections: [
      {
        heading: "PHP se JSON API kaise banate hain",
        content: `PHP mein REST API banana aasaan hai — JSON response bhejo aur HTTP methods handle karo.`,
        code: `<?php
// api/users.php

// CORS headers (agar frontend alag domain par ho)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// OPTIONS preflight request handle karo
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Database connection
require_once '../config/database.php';

// HTTP method se route decide karo
$method = $_SERVER['REQUEST_METHOD'];
$id = isset($_GET['id']) ? (int)$_GET['id'] : null;

function sendResponse(array $data, int $statusCode = 200): void {
    http_response_code($statusCode);
    echo json_encode(['success' => true, 'data' => $data]);
    exit;
}

function sendError(string $message, int $statusCode = 400): void {
    http_response_code($statusCode);
    echo json_encode(['success' => false, 'message' => $message]);
    exit;
}

switch ($method) {
    case 'GET':
        if ($id) {
            $user = getUserById($pdo, $id);
            if (!$user) sendError("User nahi mila", 404);
            sendResponse($user);
        } else {
            $page = (int)($_GET['page'] ?? 1);
            $limit = (int)($_GET['limit'] ?? 10);
            sendResponse(getAllUsers($pdo, $limit, ($page - 1) * $limit));
        }
        break;

    case 'POST':
        $body = json_decode(file_get_contents('php://input'), true);
        if (!$body) sendError("Invalid JSON body");

        $name = trim($body['name'] ?? '');
        $email = filter_var($body['email'] ?? '', FILTER_VALIDATE_EMAIL);

        if (!$name || !$email) sendError("Name aur valid email required");

        $userId = createUser($pdo, $name, $email);
        sendResponse(getUserById($pdo, $userId), 201);
        break;

    case 'PUT':
        if (!$id) sendError("ID required");
        $body = json_decode(file_get_contents('php://input'), true);
        if (updateUser($pdo, $id, $body['name'], $body['email'])) {
            sendResponse(getUserById($pdo, $id));
        }
        sendError("Update failed", 500);
        break;

    case 'DELETE':
        if (!$id) sendError("ID required");
        if (!getUserById($pdo, $id)) sendError("User nahi mila", 404);
        deleteUser($pdo, $id);
        http_response_code(204);
        exit;
        break;

    default:
        sendError("Method not allowed", 405);
}
?>`,
        language: "php",
        tip: "Production mein Apache .htaccess ya Nginx config se pretty URLs setup karo: /api/users/1 ki jagah /api/users.php?id=1 nahi.",
      },
    ],
    cheatsheet: [
      "header('Content-Type: application/json') — JSON response",
      "json_encode($data) — PHP array to JSON",
      "json_decode($json, true) — JSON to PHP array",
      "file_get_contents('php://input') — request body",
      "http_response_code(201) — status code set karo",
      "$_SERVER['REQUEST_METHOD'] — GET/POST/PUT/DELETE",
    ],
    revision: [
      "header() se Content-Type aur Status Code set karo",
      "php://input se POST/PUT body milti hai",
      "json_encode/decode — PHP ↔ JSON conversion",
      "switch($method) se routing karo",
    ],
  },
  {
    id: "php-arrays",
    title: "Arrays Deep Dive",
    emoji: "🗂️",
    category: "Basics",
    description: "Indexed, associative, multidimensional arrays aur powerful array functions",
    sections: [
      {
        heading: "Array Types aur Creation",
        content: `PHP mein 3 types ki arrays hain:
- **Indexed** — numeric keys (0, 1, 2...)
- **Associative** — string keys (key => value)
- **Multidimensional** — arrays inside arrays`,
        code: `<?php
// Indexed array
$fruits = ["apple", "banana", "mango"];
$fruits[] = "orange";  // append
echo $fruits[0];       // "apple"

// Associative array
$user = [
    "name"  => "Ali",
    "age"   => 25,
    "email" => "ali@test.com",
];
echo $user["name"];  // "Ali"

// Multidimensional
$students = [
    ["name" => "Ali",  "grade" => "A"],
    ["name" => "Sara", "grade" => "B"],
];
echo $students[0]["name"];  // "Ali"

// Array functions
count($fruits);          // 4
in_array("mango", $fruits);  // true
array_key_exists("name", $user);  // true
array_keys($user);       // ["name", "age", "email"]
array_values($user);     // ["Ali", 25, "ali@test.com"]`,
        language: "php",
      },
      {
        heading: "Array Manipulation Functions",
        content: `PHP mein powerful built-in array functions:`,
        code: `<?php
$nums = [3, 1, 4, 1, 5, 9, 2, 6];

// Sort karo (modifies original)
sort($nums);          // indexed: [1, 1, 2, 3, 4, 5, 6, 9]
rsort($nums);         // reverse sort
asort($assoc);        // associative (values), preserve keys
ksort($assoc);        // associative (keys)

// Filter
$evens = array_filter($nums, fn($n) => $n % 2 === 0);

// Map — transform
$doubled = array_map(fn($n) => $n * 2, $nums);

// Reduce — single value
$sum = array_reduce($nums, fn($carry, $n) => $carry + $n, 0);

// Slice aur Splice
$slice = array_slice($nums, 1, 3);  // from index 1, length 3
array_splice($nums, 1, 2, [99, 88]); // replace 2 elements at index 1

// Merge aur Unique
$merged = array_merge($arr1, $arr2);
$unique = array_unique($nums);  // duplicates remove

// Search
$key = array_search("mango", $fruits);  // index/key return
$pos = array_column($students, "name");  // column extract
usort($students, fn($a, $b) => strcmp($a['name'], $b['name']));`,
        language: "php",
        tip: "array_map, array_filter, array_reduce — PHP mein ye JavaScript jaise functional operations hain. Loop ki jagah prefer karo!",
      },
    ],
    mcqs: [
      { q: "array_filter() kya return karta hai?", options: ["Filtered values ka new indexed array", "Filtered values, original keys preserve", "Boolean", "Count of filtered items"], correct: 1, explain: "array_filter() original keys preserve karta hai — agar re-indexed chahiye toh array_values(array_filter(...)) use karo." },
      { q: "PHP mein array append kaise karein?", options: ["$arr.push(val)", "$arr[] = val", "append($arr, val)", "$arr->add(val)"], correct: 1, explain: "$arr[] = val PHP mein array mein element append karta hai — yahi idiomatic PHP way hai." },
    ],
    cheatsheet: [
      "count($arr) — length",
      "in_array(val, $arr) — exists check",
      "array_push($arr, val) ya $arr[] = val",
      "array_map(fn, $arr) — transform",
      "array_filter($arr, fn) — filter",
      "array_reduce($arr, fn, init) — single value",
      "array_merge($a, $b) — merge",
      "array_unique($arr) — duplicates remove",
      "sort/rsort/asort/ksort — sorting",
    ],
    revision: [
      "3 types: indexed, associative, multidimensional",
      "$arr[] = val — append shorthand",
      "array_map = transform, array_filter = select",
      "array_reduce = accumulate to single value",
      "usort() = custom sort with comparator",
    ],
  },
  {
    id: "php-sessions",
    title: "Sessions, Cookies & File Handling",
    emoji: "🍪",
    category: "Intermediate",
    description: "User sessions manage karna, cookies set karna, aur file upload/handling",
    sections: [
      {
        heading: "Sessions — Server-side State",
        content: `Session = server pe user ka data store karo. Session ID cookie mein store hoti hai.`,
        code: `<?php
session_start();  // MUST be called first, before any output!

// Session data set karo
$_SESSION['user_id'] = 42;
$_SESSION['username'] = 'Ali';
$_SESSION['role'] = 'admin';

// Session data access
if (isset($_SESSION['user_id'])) {
    $userId = $_SESSION['user_id'];
    echo "Welcome, " . $_SESSION['username'];
}

// Session destroy (logout)
session_start();
$_SESSION = [];           // sab clear karo
session_destroy();        // session delete karo

// Session config
ini_set('session.gc_maxlifetime', 3600);  // 1 hour
session_regenerate_id(true);  // Security: new ID on login

// Authentication check helper
function requireLogin() {
    session_start();
    if (!isset($_SESSION['user_id'])) {
        header('Location: /login.php');
        exit();
    }
}`,
        language: "php",
      },
      {
        heading: "File Upload & Handling",
        content: `PHP mein file upload \`$_FILES\` superglobal se handle hota hai.`,
        code: `<?php
// File upload handle karo
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['image'])) {
    $file = $_FILES['image'];
    
    // Validation
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    $maxSize = 5 * 1024 * 1024;  // 5MB
    
    if (!in_array($file['type'], $allowedTypes)) {
        die("Only JPEG, PNG, GIF allowed");
    }
    if ($file['size'] > $maxSize) {
        die("File too large (max 5MB)");
    }
    if ($file['error'] !== UPLOAD_ERR_OK) {
        die("Upload error: " . $file['error']);
    }
    
    // Unique filename
    $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = uniqid() . '.' . strtolower($ext);
    $uploadPath = __DIR__ . '/uploads/' . $filename;
    
    if (move_uploaded_file($file['tmp_name'], $uploadPath)) {
        echo "Uploaded: /uploads/" . $filename;
    }
}

// File read/write
$content = file_get_contents('data.txt');
file_put_contents('log.txt', date('Y-m-d') . ": Event\n", FILE_APPEND);`,
        language: "php",
        warning: "User-uploaded files ko never directly run mat karo! Type validate karo, unique names use karo, web-accessible directory se bahar store karo.",
      },
    ],
    mcqs: [
      { q: "session_start() kab call karna chahiye?", options: ["File ke end mein", "Kisi bhi HTML output se pehle — file ke top pe", "Kahi bhi", "Sirf POST requests mein"], correct: 1, explain: "session_start() koi bhi output (HTML, spaces) bhejne se pehle call karna zaroori hai — warna 'Cannot modify header information' error aata hai." },
      { q: "File upload ke baad move_uploaded_file() kyun use karte hain?", options: ["File rename karna", "Tmp directory se destination pe safely move, security checks ke saath", "File compress karna", "File delete karna"], correct: 1, explain: "move_uploaded_file() verify karta hai ki file actually HTTP upload hai (not file system attack) aur safely move karta hai." },
    ],
    cheatsheet: [
      "session_start() — every page pe pehle",
      "$_SESSION['key'] = val — session set",
      "session_destroy() — logout",
      "session_regenerate_id(true) — security on login",
      "$_FILES['input']['tmp_name'] — uploaded file path",
      "move_uploaded_file(tmp, dest) — save file",
      "file_get_contents(path) — file read",
      "file_put_contents(path, data, FILE_APPEND) — write",
    ],
    revision: [
      "Sessions = server-side state, session_start() pehle",
      "session_destroy() = logout",
      "File upload = $_FILES superglobal",
      "Always validate: type, size, error code",
      "move_uploaded_file() = safe file move",
    ],
  },
  {
    id: "php-composer",
    title: "Namespaces & Composer",
    emoji: "📦",
    category: "Intermediate",
    description: "PHP namespaces se code organize karo, Composer se packages manage karo",
    sections: [
      {
        heading: "Namespaces — Code Organization",
        content: `Namespaces se class name conflicts avoid karo aur code organize karo.
- PSR-4 autoloading = folder structure = namespace structure`,
        code: `<?php
// File: src/Services/EmailService.php
namespace App\\Services;

use App\\Models\\User;
use Illuminate\\Mail\\Mailer;  // third-party

class EmailService {
    private Mailer $mailer;
    
    public function __construct(Mailer $mailer) {
        $this->mailer = $mailer;
    }
    
    public function sendWelcome(User $user): bool {
        // ...
    }
}

// File: index.php — use karna
use App\\Services\\EmailService;
use App\\Models\\User;

$service = new EmailService($mailer);

// Alias
use App\\Services\\EmailService as Email;
$email = new Email($mailer);`,
        language: "php",
      },
      {
        heading: "Composer — PHP Package Manager",
        content: `Composer = PHP ka npm/pip — packages download aur autoloading manage karta hai.`,
        code: `# Package install karo
composer require guzzlehttp/guzzle
composer require --dev phpunit/phpunit

# composer.json
{
    "name": "myapp/api",
    "require": {
        "php": ">=8.1",
        "guzzlehttp/guzzle": "^7.0",
        "vlucas/phpdotenv": "^5.0"
    },
    "require-dev": {
        "phpunit/phpunit": "^10.0"
    },
    "autoload": {
        "psr-4": {
            "App\\\\": "src/"
        }
    }
}

# Autoload regenerate karo
composer dump-autoload

# Update packages
composer update
composer install  # composer.lock se (deployment)`,
        language: "bash",
        tip: "composer install vendor/autoload.php include karo — phir automatically sab classes load hongi. vendor/ folder git mein mat dalo (.gitignore mein add karo).",
      },
      {
        heading: "Autoload Usage",
        content: `vendor/autoload.php include karo — phir sab namespaced classes automatically load hongi.`,
        code: `<?php
// index.php — autoloader include
require __DIR__ . '/vendor/autoload.php';

// Ab koi bhi App\\ namespace class auto-load hogi!
use App\\Services\\EmailService;
use Dotenv\\Dotenv;

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->load();

$service = new EmailService();`,
      },
    ],
    mcqs: [
      { q: "Composer install vs composer update mein fark?", options: ["Koi fark nahi", "install = composer.lock se exact versions, update = latest versions aur lock update", "update faster hai", "install production ke liye, update development"], correct: 1, explain: "install uses composer.lock exact versions (deployment ke liye consistent). update latest allowed versions install karta hai aur lock file update karta hai." },
      { q: "PSR-4 autoloading kya hai?", options: ["PHP security standard", "Namespace → folder structure mapping — files automatically load hongi", "Package naming convention", "Testing standard"], correct: 1, explain: "PSR-4 = App\\Services\\Email → src/Services/Email.php. Namespace aur folder structure match hone pe Composer automatically files load karta hai." },
    ],
    cheatsheet: [
      "composer require package/name — install",
      "composer require --dev pkg — dev only",
      "composer install — lock file se",
      "composer update — latest versions",
      "composer dump-autoload — autoloader regenerate",
      "vendor/autoload.php — include karo",
      "namespace App\\Services; — declare",
      "use App\\Services\\Email; — import",
    ],
    revision: [
      "Namespaces = class name conflicts avoid",
      "PSR-4 = namespace ↔ folder structure",
      "Composer = PHP package manager",
      "composer install = lock file (deployment)",
      "vendor/autoload.php = autoloader include karo",
    ],
  },
  {
    id: "php-errors",
    title: "Error Handling & Exceptions",
    emoji: "⚠️",
    category: "Intermediate",
    description: "try-catch, custom exceptions, error logging, aur PHP error types",
    sections: [
      {
        heading: "try-catch-finally",
        content: `PHP 7+ mein try-catch se errors handle karo gracefully.`,
        code: `<?php
// Basic exception handling
try {
    $result = divideNumbers(10, 0);
    echo $result;
} catch (DivisionByZeroError $e) {
    error_log("Division error: " . $e->getMessage());
    echo "Cannot divide by zero";
} catch (InvalidArgumentException $e) {
    echo "Invalid input: " . $e->getMessage();
} catch (Exception $e) {
    echo "Error occurred: " . $e->getMessage();
} finally {
    // Hamesha run hoga (success ya failure)
    closeConnection();
}

// Custom Exception
class ValidationException extends RuntimeException {
    private array $errors;
    
    public function __construct(array $errors) {
        parent::__construct("Validation failed");
        $this->errors = $errors;
    }
    
    public function getErrors(): array {
        return $this->errors;
    }
}

// Throw karo
function validateUser(array $data): void {
    $errors = [];
    if (empty($data['name'])) $errors['name'] = 'Name required';
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Valid email required';
    }
    if (!empty($errors)) throw new ValidationException($errors);
}

// Catch karo
try {
    validateUser(['name' => '', 'email' => 'bad']);
} catch (ValidationException $e) {
    http_response_code(422);
    echo json_encode(['errors' => $e->getErrors()]);
}`,
        language: "php",
      },
    ],
    mcqs: [
      { q: "finally block kab run hota hai?", options: ["Sirf success pe", "Sirf exception pe", "Hamesha — exception ho ya na ho", "Sirf return se pehle"], correct: 2, explain: "finally block hamesha run hota hai — exception catch ho ya na ho, return karo ya throw karo. Resource cleanup (DB connection close, file handle) ke liye perfect." },
    ],
    cheatsheet: [
      "try { } catch (ExcType $e) { } finally { }",
      "throw new Exception('message')",
      "class MyEx extends RuntimeException { }",
      "$e->getMessage() — error message",
      "$e->getCode() — error code",
      "error_log('msg') — server log mein write",
      "set_exception_handler(fn) — global handler",
    ],
    revision: [
      "try-catch = graceful error handling",
      "finally = cleanup, hamesha run hota hai",
      "Custom exceptions = specific error types",
      "throw = exception trigger karo",
      "error_log() = server log mein write karo",
    ],
  },
];

export const phpInterviews = [
  {
    id: 101,
    level: "Beginner" as const,
    tags: ["basics"],
    question: "PHP mein == aur === mein kya fark hai?",
    answer: `**== (Loose comparison):**
Type conversion karke compare karta hai.
- 0 == "0" → true
- 0 == false → true
- "" == false → true

**=== (Strict comparison):**
Type aur value dono same honi chahiye.
- 0 === "0" → false (int vs string)
- 0 === false → false (int vs bool)
- 1 === 1 → true

**Best practice:** Hamesha === use karo unexpected results se bachne ke liye.`,
    code: `var_dump(0 == "foo");   // true (!)
var_dump(0 === "foo");  // false (correct!)
var_dump("1" == 1);     // true
var_dump("1" === 1);    // false`,
  },
  {
    id: 102,
    level: "Beginner" as const,
    tags: ["oop"],
    question: "PHP mein access modifiers kya hote hain?",
    answer: `PHP mein teen access modifiers hain:

**public:** Kahi se bhi access ho sakta hai — class ke andar, bahar, child class
**protected:** Sirf class ke andar aur child classes mein accessible
**private:** Sirf us class ke andar accessible, child class mein nahi

**Rule of thumb:**
- Properties ko private ya protected rakho (encapsulation)
- Methods ko public rakho jo API hai
- Helper methods ko private rakho`,
    code: `class User {
    public string $name;     // kahi se bhi
    protected int $age;      // class + children
    private string $password; // sirf is class mein

    public function login(string $pass): bool {
        return $this->password === $pass; // private access karo
    }
}`,
  },
  {
    id: 103,
    level: "Intermediate" as const,
    tags: ["security"],
    question: "SQL Injection kya hai? Kaise bachein?",
    answer: `SQL Injection ek attack hai jisme attacker form fields mein SQL code inject karta hai.

**Example attack:**
Username field mein likho: ' OR '1'='1
SQL ban jaata hai: SELECT * FROM users WHERE username='' OR '1'='1'
→ Sab users return ho jaate hain!

**Bachne ke tarike:**
1. **PDO Prepared Statements** — Best solution
2. **Input validation** — expected format check karo
3. **Least privilege** — DB user ko minimum permissions do
4. **WAF** — Web Application Firewall`,
    code: `// VULNERABLE (mat karo!)
$sql = "SELECT * FROM users WHERE email = '$email'";

// SAFE (Prepared Statements)
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
$stmt->execute([$email]);`,
  },
  {
    id: 104,
    level: "Intermediate" as const,
    tags: ["php8"],
    question: "PHP 8 ke new features kaunse hain?",
    answer: `PHP 8.0/8.1/8.2 mein bahut powerful features aaye:

**PHP 8.0:**
- **Named Arguments** — order matter nahi karta
- **Match expression** — switch ka better version
- **Nullsafe operator (?->)** — null check chain
- **Constructor promotion** — property declaration shortcut
- **Union types** — int|string

**PHP 8.1:**
- **Enums** — type-safe constants
- **readonly properties** — immutable properties
- **Fibers** — coroutines (async-like)
- **never return type**

**PHP 8.2:**
- **readonly classes**
- **DNF types** (A&B)|C`,
    code: `// Named arguments
htmlspecialchars(string: $html, flags: ENT_QUOTES);

// Match expression
$result = match($status) {
    'active' => 'hara',
    'inactive' => 'lal',
    default => 'neela',
};

// Nullsafe operator
$country = $user?->getAddress()?->getCountry();

// Constructor promotion
class User {
    public function __construct(
        private string $name,    // property auto-declare
        private string $email,
    ) {}
}

// Enum
enum Status: string {
    case Active = 'active';
    case Inactive = 'inactive';
}`,
  },
  {
    id: 106,
    level: "Beginner" as const,
    tags: ["oop"],
    question: "PHP mein Trait kya hai? Abstract class se kya fark hai?",
    answer: `**Trait:** PHP mein multiple inheritance nahi hai — Traits ka solution hai. Ek ya zyada traits use karo ek class mein.

**Trait vs Abstract class:**
- Trait: code reuse ka mechanism, instantiate nahi ho sakta, state bhi rakh sakta hai
- Abstract class: class hierarchy, single inheritance
- Class multiple traits use kar sakti hai, lekin sirf ek class extend kar sakti hai

**Conflict resolution:** Agar do traits same method define karein → insteadof ya as se resolve karo`,
    code: `<?php
trait Loggable {
    public function log(string $message): void {
        echo "[LOG] " . get_class($this) . ": $message\n";
    }
}

trait Cacheable {
    private array $cache = [];
    
    public function remember(string $key, callable $fn): mixed {
        if (!isset($this->cache[$key])) {
            $this->cache[$key] = $fn();
        }
        return $this->cache[$key];
    }
}

class UserService {
    use Loggable, Cacheable;  // multiple traits!
    
    public function getUser(int $id): array {
        return $this->remember("user_$id", function() use ($id) {
            $this->log("Fetching user $id");
            return ['id' => $id, 'name' => 'Ali'];
        });
    }
}`,
  },
  {
    id: 107,
    level: "Intermediate" as const,
    tags: ["oop"],
    question: "PHP mein magic methods kya hain? Important ones explain karo.",
    answer: `Magic methods __ (double underscore) se shuru hote hain — PHP automatically call karta hai certain situations mein.

**Important magic methods:**
- **__construct()** — object create hone pe
- **__destruct()** — object destroy hone pe
- **__get($name)** — inaccessible property read pe
- **__set($name, $value)** — inaccessible property write pe
- **__isset($name)** — isset()/empty() inaccessible property pe
- **__toString()** — object ko string mein convert karne pe
- **__invoke()** — object function ki tarah call karne pe
- **__clone()** — clone karne pe
- **__call($name, $args)** — undefined method call pe`,
    code: `<?php
class MagicClass {
    private array $data = [];
    
    // Dynamic property access
    public function __get(string $name): mixed {
        return $this->data[$name] ?? null;
    }
    
    public function __set(string $name, mixed $value): void {
        $this->data[$name] = $value;
    }
    
    public function __isset(string $name): bool {
        return isset($this->data[$name]);
    }
    
    // Object as string
    public function __toString(): string {
        return json_encode($this->data);
    }
    
    // Object as function
    public function __invoke(int $x): int {
        return $x * 2;
    }
}

$obj = new MagicClass();
$obj->name = "Ali";     // __set called
echo $obj->name;        // __get called → "Ali"
echo $obj;              // __toString → {"name":"Ali"}
echo $obj(5);           // __invoke → 10
isset($obj->name);      // __isset → true`,
  },
  {
    id: 108,
    level: "Intermediate" as const,
    tags: ["oop"],
    question: "PHP mein late static binding (static::) kya hai?",
    answer: `Late Static Binding = static:: ka use karo parent class mein, lekin runtime pe calling class resolve ho — self:: hamesha defining class return karta hai.

**Problem with self::**
Parent class mein self:: use karo → hamesha parent class refer karega, child class nahi.

**static:: solution:**
Runtime pe actual called class use karta hai — polymorphism ke saath kaam karta hai.

**Use case:** Factory methods, Fluent interfaces, Singleton pattern`,
    code: `<?php
class Model {
    // self:: — always Model (wrong for children!)
    public static function createSelf(): static {
        return new self();  // always Model
    }
    
    // static:: — runtime pe correct class!
    public static function create(): static {
        return new static();  // User, Post, etc.
    }
    
    public static function getClass(): string {
        return static::class;  // late binding
    }
}

class User extends Model {
    public string $type = 'user';
}

class Post extends Model {}

$model = Model::create();  // Model instance
$user = User::create();    // User instance ✅ (not Model!)
$post = Post::create();    // Post instance ✅

User::getClass();   // "User" (not "Model"!)
Model::getClass();  // "Model"

// Fluent interface / Method chaining
class QueryBuilder {
    protected array $wheres = [];
    
    public static function query(): static {
        return new static();  // returns correct child class
    }
    
    public function where(string $condition): static {
        $this->wheres[] = $condition;
        return $this;  // returns same type
    }
}`,
  },
  {
    id: 109,
    level: "Intermediate" as const,
    tags: ["oop", "interfaces"],
    question: "PHP mein Interface aur Abstract Class ka practical difference kya hai?",
    answer: `**Interface:**
- Contract define karta hai — koi implementation nahi (PHP 8+ mein default methods allowed)
- Multiple implement kar sakte hain
- Properties nahi rakh sakta
- Sab methods public hote hain
- "Can-do" relationship

**Abstract Class:**
- Partial implementation ho sakta hai
- Single extend kar sakte hain
- Properties rakh sakta hai (state)
- Methods koi bhi access modifier
- "Is-a" relationship

**Rule of thumb:** Interface = behavior contract, Abstract = shared implementation`,
    code: `<?php
interface Payable {
    public function pay(float $amount): bool;
    public function refund(float $amount): bool;
}

interface Notifiable {
    public function notify(string $message): void;
}

// Multiple interfaces implement kar sakte hain!
abstract class BaseGateway implements Payable, Notifiable {
    protected string $apiKey;
    protected array $logs = [];
    
    public function __construct(string $apiKey) {
        $this->apiKey = $apiKey;
    }
    
    // Common implementation
    public function notify(string $message): void {
        $this->logs[] = date('Y-m-d') . ": $message";
    }
    
    // Must implement in children
    abstract protected function buildRequest(float $amount): array;
}

class StripeGateway extends BaseGateway {
    public function pay(float $amount): bool {
        $request = $this->buildRequest($amount);
        $this->notify("Stripe payment: $amount");
        return true;  // simplified
    }
    
    public function refund(float $amount): bool { ... }
    protected function buildRequest(float $amount): array { ... }
}`,
  },
  {
    id: 110,
    level: "Intermediate" as const,
    tags: ["functions"],
    question: "PHP mein Closures aur Anonymous Functions kya hain?",
    answer: `**Anonymous function:** Naam ke bina function — variable mein store ya argument ki tarah pass karo.

**Closure:** Anonymous function jo outer scope ke variables capture kare — use keyword se.

**Arrow functions (PHP 7.4+):** fn() => expr — automatically outer scope capture karta hai (use keyword ki zaroorat nahi)

**Fayde:**
- Callbacks pass karna
- Array functions (array_map/filter) ke saath
- Dependency injection
- Event handlers`,
    code: `<?php
// Anonymous function
$greet = function(string $name): string {
    return "Hello, $name!";
};
echo $greet("Ali");  // "Hello, Ali!"

// Closure with use (capture variable)
$multiplier = 3;
$multiply = function(int $n) use ($multiplier): int {
    return $n * $multiplier;
};
echo $multiply(5);  // 15

// By reference (mutable capture)
$counter = 0;
$increment = function() use (&$counter): void {
    $counter++;  // modifies outer variable!
};
$increment(); $increment();
echo $counter;  // 2

// Arrow function PHP 7.4+ (auto-capture)
$tax = 0.18;
$withTax = fn($price) => $price * (1 + $tax);  // no 'use' needed!
echo $withTax(100);  // 118

// With array functions
$users = [['name' => 'Ali', 'age' => 25], ['name' => 'Sara', 'age' => 17]];

$adults = array_filter($users, fn($u) => $u['age'] >= 18);
$names = array_map(fn($u) => strtoupper($u['name']), $users);
$total = array_reduce($users, fn($sum, $u) => $sum + $u['age'], 0);`,
  },
  {
    id: 111,
    level: "Intermediate" as const,
    tags: ["php8", "types"],
    question: "PHP mein type declarations aur strict_types kya hain?",
    answer: `**Type declarations:** Function parameters, return types aur properties ke liye types declare karo.

**strict_types=1:** File ke shuru mein — coercion band, exact type match required.

**PHP 8+ types:**
- **Union types:** int|string
- **Nullable:** ?int (int ya null)
- **mixed:** koi bhi type
- **never:** function kabhi return nahi karta
- **Intersection types:** A&B (PHP 8.1)
- **Enum** (PHP 8.1)
- **readonly** properties (PHP 8.1)`,
    code: `<?php
declare(strict_types=1);  // strict mode on!

// Basic type hints
function add(int $a, int $b): int {
    return $a + $b;
}

add(1, 2);     // ✅
add(1, "2");   // ❌ TypeError in strict mode (would work without)

// Nullable
function findUser(?int $id): ?array {
    if ($id === null) return null;
    return ['id' => $id];
}

// Union types (PHP 8.0)
function format(int|float $num): string {
    return number_format($num, 2);
}

// Return type void
function logMessage(string $msg): void {
    echo $msg;
    // return; // ok, but no value
}

// PHP 8.1 readonly
class Point {
    public function __construct(
        public readonly float $x,
        public readonly float $y,
    ) {}
}

$p = new Point(1.5, 2.5);
$p->x;       // ✅ read ok
$p->x = 3;  // ❌ Error: readonly property!

// Enums (PHP 8.1)
enum Status: string {
    case Active = 'active';
    case Inactive = 'inactive';
    case Pending = 'pending';
}`,
  },
  {
    id: 112,
    level: "Intermediate" as const,
    tags: ["database"],
    question: "PDO aur MySQLi mein kya fark hai? Prepared statements kaise kaam karte hain?",
    answer: `**PDO (PHP Data Objects):**
- Multiple databases support (MySQL, PostgreSQL, SQLite, etc.)
- Object-oriented API
- Named parameters (:name) support
- Exception-based error handling

**MySQLi:**
- Sirf MySQL
- Procedural aur OO dono APIs
- ? placeholders sirf

**Prepared Statements (dono mein):**
Query prepare karo → parameters bind karo → execute karo. SQL injection impossible — parameters database driver handle karta hai.`,
    code: `<?php
// PDO
$pdo = new PDO('mysql:host=localhost;dbname=mydb', 'user', 'pass');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Named parameters
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email AND active = :active");
$stmt->execute([':email' => $email, ':active' => 1]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// Positional parameters
$stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->execute([$name, $email]);
$newId = $pdo->lastInsertId();

// Fetch all
$users = $pdo->query("SELECT * FROM users")->fetchAll(PDO::FETCH_ASSOC);

// Transaction
$pdo->beginTransaction();
try {
    $pdo->prepare("UPDATE accounts SET balance = balance - ? WHERE id = ?")->execute([$amount, $fromId]);
    $pdo->prepare("UPDATE accounts SET balance = balance + ? WHERE id = ?")->execute([$amount, $toId]);
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    throw $e;
}`,
  },
  {
    id: 113,
    level: "Intermediate" as const,
    tags: ["arrays"],
    question: "PHP mein important array functions kaunse hain?",
    answer: `PHP mein array manipulation ke liye 70+ functions hain. Important ones:

**Transformation:** array_map, array_filter, array_reduce, array_walk
**Sorting:** sort, rsort, asort, arsort, ksort, usort
**Search:** in_array, array_search, array_key_exists
**Manipulation:** array_merge, array_push/pop/shift/unshift, array_splice
**Info:** count, array_keys, array_values, array_unique
**Slice/Split:** array_slice, array_chunk
**Combine:** array_combine, array_zip_key`,
    code: `<?php
$nums = [3, 1, 4, 1, 5, 9, 2, 6];

// map — transform
$doubled = array_map(fn($n) => $n * 2, $nums);  // [6,2,8,2,10,18,4,12]

// filter — select (keys preserve!)
$evens = array_filter($nums, fn($n) => $n % 2 === 0);
$evens = array_values($evens);  // re-index

// reduce — fold
$sum = array_reduce($nums, fn($carry, $n) => $carry + $n, 0);  // 31

// Sorting
sort($nums);      // [1,1,2,3,4,5,6,9] — modifies in place
$sorted = $nums;  // work on copy

// Custom sort
$users = [['name' => 'Zara', 'age' => 25], ['name' => 'Ali', 'age' => 20]];
usort($users, fn($a, $b) => $a['age'] <=> $b['age']);  // sort by age

// array_unique — remove duplicates
$unique = array_unique([1, 2, 2, 3, 3, 3]);  // [1, 2, 3]

// array_column — extract column
$names = array_column($users, 'name');    // ['Ali', 'Zara']
$byId = array_column($users, null, 'id'); // index by id

// array_chunk — paginate
$pages = array_chunk($items, 10);  // split into groups of 10

// in_array
in_array('Ali', $names);           // true
in_array('Ali', $names, true);     // strict check`,
  },
  {
    id: 114,
    level: "Intermediate" as const,
    tags: ["sessions", "auth"],
    question: "PHP mein sessions aur cookies kaise kaam karte hain?",
    answer: `**HTTP stateless hai** — Sessions aur cookies state maintain karne ke liye hain.

**Sessions:**
- Server pe data store hota hai (file ya database)
- Browser ko sirf session ID milta hai (cookie mein)
- Zyada secure — sensitive data server pe
- session_start() se shuru karo

**Cookies:**
- Browser mein data store hota hai
- Har request mein server ko bhejte hain
- Size limit: ~4KB
- User modify kar sakta hai — sensitive data mat rakho

**Security:**
- session_regenerate_id() — login ke baad (session fixation prevent)
- HttpOnly + Secure cookies
- SameSite attribute`,
    code: `<?php
// SESSION
session_start();  // always first!

// Store data
$_SESSION['user_id'] = 123;
$_SESSION['username'] = 'Ali';

// Read data
$userId = $_SESSION['user_id'] ?? null;

// Logout — destroy session
session_destroy();
session_unset();

// Regenerate ID (security!)
session_regenerate_id(true);  // login ke baad karo

// COOKIES
// Set cookie
setcookie(
    'theme',
    'dark',
    time() + (86400 * 30),  // 30 days
    '/',                     // path
    '',                      // domain
    true,                    // HTTPS only
    true                     // HttpOnly
);

// Read cookie
$theme = $_COOKIE['theme'] ?? 'light';

// Delete cookie (past expiry)
setcookie('theme', '', time() - 3600);

// JSON in cookie (max ~4KB)
setcookie('prefs', json_encode(['lang' => 'en', 'theme' => 'dark']));
$prefs = json_decode($_COOKIE['prefs'] ?? '{}', true);`,
  },
  {
    id: 115,
    level: "Intermediate" as const,
    tags: ["security"],
    question: "PHP mein XSS attack kya hai? Kaise bachein?",
    answer: `**XSS (Cross-Site Scripting):** Attacker malicious JavaScript inject karta hai jo doosre users ke browser mein execute hota hai.

**Types:**
- **Stored XSS:** DB mein save hota hai (comments, profiles)
- **Reflected XSS:** URL/form se directly reflect hota hai
- **DOM XSS:** Client-side JavaScript mein

**Protection:**
1. **htmlspecialchars()** — output escape karo
2. **Content Security Policy (CSP)** header
3. **Input validation** — expected format check karo
4. **HttpOnly cookies** — JS se access nahi`,
    code: `<?php
// VULNERABLE — NEVER DO THIS!
echo $_GET['name'];           // <script>alert('XSS')</script>
echo "<h1>$username</h1>";    // if username has JS

// SAFE — Always escape output!
echo htmlspecialchars($_GET['name'], ENT_QUOTES, 'UTF-8');
echo htmlspecialchars($username, ENT_QUOTES, 'UTF-8');

// Helper function
function e(string $str): string {
    return htmlspecialchars($str, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

echo "<h1>" . e($username) . "</h1>";

// In template
?>
<h1><?= e($title) ?></h1>
<p><?= e($description) ?></p>

<?php
// Content Security Policy header
header("Content-Security-Policy: default-src 'self'; script-src 'self'");

// Input validation (whitelist approach)
$allowed_sorts = ['name', 'email', 'created_at'];
$sort = in_array($_GET['sort'], $allowed_sorts) ? $_GET['sort'] : 'name';

// Strip tags (if HTML not needed)
$clean = strip_tags($_POST['input']);`,
  },
  {
    id: 116,
    level: "Intermediate" as const,
    tags: ["strings"],
    question: "PHP mein important string functions kaunse hain?",
    answer: `PHP mein 100+ string functions hain. Interview aur daily use ke liye important ones:

**Case:** strtolower, strtoupper, ucfirst, ucwords
**Search:** strpos, strrpos, str_contains, str_starts_with, str_ends_with (PHP 8)
**Replace:** str_replace, str_ireplace, preg_replace
**Split/Join:** explode, implode/join, str_split
**Trim:** trim, ltrim, rtrim
**Length:** strlen, mb_strlen (multibyte)
**Pad:** str_pad, str_repeat
**Format:** sprintf, number_format, date`,
    code: `<?php
$str = "  Hello, World!  ";

// Trim
trim($str);             // "Hello, World!"
ltrim($str);            // "Hello, World!  "

// Case
strtoupper("hello");    // "HELLO"
strtolower("HELLO");    // "hello"
ucfirst("hello world"); // "Hello world"
ucwords("hello world"); // "Hello World"

// Search (PHP 8 preferred)
str_contains("Hello World", "World");   // true ✅
str_starts_with("Hello", "He");         // true
str_ends_with("Hello", "lo");           // true

// Old way (still works)
strpos("Hello World", "World");  // 6 (or false if not found!)
strpos("Hello World", "world");  // false (case-sensitive)
stripos("Hello World", "world"); // 6 (case-insensitive)

// Replace
str_replace("World", "PHP", "Hello World");  // "Hello PHP"
str_replace(['a','e','i'], '*', 'apple');     // "*ppl*"

// Split/Join
$parts = explode(",", "a,b,c,d");   // ["a","b","c","d"]
implode(" | ", $parts);              // "a | b | c | d"

// sprintf formatting
sprintf("%.2f", 3.14159);           // "3.14"
sprintf("%05d", 42);                // "00042"
sprintf("Name: %s, Age: %d", $name, $age);

// Multibyte (Urdu/Arabic/Chinese safe!)
mb_strlen("سلام");      // 4 (not 8!)
mb_strtoupper("ali");   // "ALI"`,
  },
  {
    id: 117,
    level: "Advanced" as const,
    tags: ["advanced", "oop"],
    question: "PHP mein static properties aur late static binding properly kab use karein?",
    answer: `**Static properties:** Class level pe — sab instances share karte hain. Instance create kiye bina accessible.

**Static variables (function mein):** Function call ke darmiyan value yaad rakhti hai.

**Kab use karein:**
- Utility/helper functions (instantiation ki zaroorat nahi)
- Singleton pattern
- Shared state (counter, config)
- Factory methods

**Kab avoid karein:**
- Testing mein problem (state persist hoti hai)
- Global state create hota hai — coupling badhti hai
- Dependency injection prefer karo`,
    code: `<?php
class Database {
    private static ?Database $instance = null;
    private static int $queryCount = 0;
    
    private function __construct(private PDO $pdo) {}
    
    // Singleton pattern
    public static function getInstance(): static {
        if (static::$instance === null) {
            static::$instance = new static(
                new PDO('mysql:host=localhost', 'user', 'pass')
            );
        }
        return static::$instance;
    }
    
    public function query(string $sql): array {
        static::$queryCount++;
        return $this->pdo->query($sql)->fetchAll();
    }
    
    public static function getQueryCount(): int {
        return static::$queryCount;
    }
}

// Usage
$db = Database::getInstance();
$db->query("SELECT * FROM users");
Database::getQueryCount();  // 1

// Static function variable
function generateId(): int {
    static $id = 0;  // persists between calls!
    return ++$id;
}

generateId();  // 1
generateId();  // 2
generateId();  // 3`,
  },
  {
    id: 118,
    level: "Advanced" as const,
    tags: ["advanced", "generators"],
    question: "PHP mein Generators kya hain? Large data ke saath kaise use karein?",
    answer: `Generator = function jo yield use karta hai — pause aur resume ho sakta hai. Ek baar mein ek value return karta hai instead of complete array.

**Memory benefit:** 1 million rows process karo without loading sab memory mein!

**yield keyword:** Value return karo aur pause karo. Next() pe resume.

**yield from:** Generator se generator delegate karo.

**Use cases:** Large file reading, database cursor, infinite sequences`,
    code: `<?php
// Without generator — memory issue!
function getAllUsers(): array {
    return $db->query("SELECT * FROM users")->fetchAll();  // 1M rows in memory!
}

// With generator — memory efficient!
function getUsers(PDO $pdo): Generator {
    $stmt = $pdo->query("SELECT * FROM users");
    while ($row = $stmt->fetch()) {
        yield $row;  // ek ek row return karo
    }
}

// Sirf ek row memory mein at a time!
foreach (getUsers($pdo) as $user) {
    processUser($user);
}

// Large file reading
function readLargeFile(string $path): Generator {
    $file = fopen($path, 'r');
    while (!feof($file)) {
        yield fgets($file);  // one line at a time
    }
    fclose($file);
}

foreach (readLargeFile('huge.csv') as $line) {
    process($line);
}

// Yield key => value
function indexedUsers(PDO $pdo): Generator {
    $stmt = $pdo->query("SELECT id, name FROM users");
    while ($row = $stmt->fetch()) {
        yield $row['id'] => $row['name'];  // key => value
    }
}

foreach (indexedUsers($pdo) as $id => $name) {
    echo "$id: $name\n";
}

// Generator memory comparison
// Array: 1M items → ~100MB RAM
// Generator: 1M items → ~1KB RAM`,
  },
  {
    id: 119,
    level: "Advanced" as const,
    tags: ["advanced", "oop"],
    question: "PHP mein SPL (Standard PHP Library) ke useful classes kaunse hain?",
    answer: `SPL = Standard PHP Library — built-in data structures aur algorithms PHP mein.

**Data Structures:**
- **SplStack** — LIFO stack
- **SplQueue** — FIFO queue
- **SplMinHeap/SplMaxHeap** — priority queue
- **SplDoublyLinkedList** — doubly linked list

**File Handling:**
- **SplFileObject** — line-by-line file reading (memory efficient)
- **DirectoryIterator** — directory listing

**Iterators:**
- **ArrayIterator** — array ko iterator mein convert
- **RecursiveDirectoryIterator** — recursive directory walk
- **LimitIterator** — iterator pe limit/offset`,
    code: `<?php
// SplStack (LIFO)
$stack = new SplStack();
$stack->push("first");
$stack->push("second");
$stack->push("third");
echo $stack->pop();   // "third"
echo $stack->top();   // "second"

// SplQueue (FIFO)
$queue = new SplQueue();
$queue->enqueue("task1");
$queue->enqueue("task2");
echo $queue->dequeue();  // "task1"

// SplMinHeap (priority queue)
$heap = new SplMinHeap();
$heap->insert(5);
$heap->insert(1);
$heap->insert(3);
echo $heap->extract();  // 1 (minimum first!)

// SplFileObject — large file handling
$file = new SplFileObject('large.csv');
$file->setFlags(SplFileObject::READ_CSV);

foreach ($file as $row) {
    if ($file->eof()) break;
    process($row);  // one row at a time
}

// DirectoryIterator
$dir = new DirectoryIterator('/path/to/dir');
foreach ($dir as $file) {
    if ($file->isFile() && $file->getExtension() === 'php') {
        echo $file->getFilename() . "\n";
    }
}

// RecursiveDirectoryIterator
$iterator = new RecursiveIteratorIterator(
    new RecursiveDirectoryIterator('/src')
);
foreach ($iterator as $file) {
    echo $file->getPathname() . "\n";
}`,
  },
  {
    id: 120,
    level: "Beginner" as const,
    tags: ["basics", "oop"],
    question: "PHP mein constructor property promotion kya hai? (PHP 8.0)",
    answer: `Constructor property promotion = constructor parameters ko class properties mein automatically declare karo — boilerplate code dramatically reduce hota hai.

**Pehle (PHP 7):** Property declare karo, constructor parameter lo, assign karo — teen steps.
**Baad (PHP 8):** Constructor mein public/protected/private likho — automatically property ban jaati hai.

**readonly ke saath (PHP 8.1):** Immutable value objects banana bilkul easy.`,
    code: `<?php
// PHP 7 style (verbose!)
class UserOld {
    public string $name;
    public string $email;
    private int $age;
    
    public function __construct(string $name, string $email, int $age) {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }
}

// PHP 8.0 — Constructor Promotion (clean!)
class User {
    public function __construct(
        public string $name,
        public string $email,
        private int $age,
        protected ?string $avatar = null,  // default value
    ) {}
    
    public function getAge(): int {
        return $this->age;
    }
}

$user = new User("Ali", "ali@example.com", 25);
echo $user->name;   // "Ali"
echo $user->email;  // "ali@example.com"

// PHP 8.1 readonly — immutable DTO!
class CreateUserRequest {
    public function __construct(
        public readonly string $name,
        public readonly string $email,
        public readonly string $password,
    ) {}
}

$req = new CreateUserRequest("Ali", "ali@test.com", "secret");
$req->name;        // "Ali" ✅
$req->name = "X";  // ❌ Error: readonly!`,
  },
  {
    id: 105,
    level: "Advanced" as const,
    tags: ["performance"],
    question: "PHP application performance optimize kaise karein?",
    answer: `**Code Level:**
- OPcache enable karo (PHP bytecode cache)
- Unnecessary queries avoid karo (N+1 problem)
- Proper data structures use karo
- array_map/filter > loops for functional operations

**Database:**
- Indexes add karo frequently queried columns par
- Lazy loading use karo
- Connection pooling (PgBouncer for PostgreSQL)
- Query caching

**Caching:**
- Redis/Memcached — database results cache karo
- Page caching — static HTML serve karo
- CDN — static assets

**Infrastructure:**
- PHP-FPM + Nginx (Apache se faster)
- OPcache configuration optimize karo
- Memory limit appropriately set karo`,
  },
];
