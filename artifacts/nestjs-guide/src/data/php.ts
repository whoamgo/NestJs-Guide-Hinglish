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
