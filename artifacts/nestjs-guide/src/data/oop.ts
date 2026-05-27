import type { Chapter } from "./chapters";

export const oopChapters: Chapter[] = [
  {
    id: "oop-intro",
    title: "OOP Kya Hai? 4 Pillars",
    emoji: "🏗️",
    category: "Basics",
    description: "Object-Oriented Programming ke core concepts aur 4 main pillars",
    sections: [
      {
        heading: "OOP kya hai aur kyun use karein?",
        content: `OOP = Object-Oriented Programming. Yeh ek programming paradigm hai jisme code ko real-world objects ke roop mein organize karte hain.

**Procedural vs OOP:**
- Procedural: Functions aur variables alag hote hain
- OOP: Data (properties) aur behavior (methods) ek class mein band hote hain

**OOP ke 4 Pillars:**
1. **Encapsulation** — Data chupaao
2. **Inheritance** — Properties inherit karo
3. **Polymorphism** — Ek interface, alag behavior
4. **Abstraction** — Complexity chupaao

**OOP kyun?**
- Reusable code
- Maintainable (change karna easy)
- Real-world model
- Team development easy`,
        diagram: `
4 PILLARS OF OOP:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ┌─────────────────┐   ┌─────────────────┐
  │  ENCAPSULATION  │   │   INHERITANCE   │
  │                 │   │                 │
  │  Data private   │   │  Child extends  │
  │  Access via     │   │  Parent class   │
  │  methods only   │   │  properties     │
  └─────────────────┘   └─────────────────┘

  ┌─────────────────┐   ┌─────────────────┐
  │  POLYMORPHISM   │   │  ABSTRACTION    │
  │                 │   │                 │
  │  Same method    │   │  Hide complex   │
  │  different      │   │  Show simple    │
  │  behavior       │   │  interface only │
  └─────────────────┘   └─────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// Real-world example: BankAccount
class BankAccount {
    private float $balance;    // ENCAPSULATION — private data
    private string $owner;
    private array $transactions = [];

    public function __construct(string $owner, float $initialBalance = 0) {
        $this->owner = $owner;
        $this->balance = $initialBalance;
    }

    // Public interface — implementation hidden
    public function deposit(float $amount): void {
        if ($amount <= 0) throw new Exception("Amount positive hona chahiye");
        $this->balance += $amount;
        $this->transactions[] = ['type' => 'credit', 'amount' => $amount];
    }

    public function withdraw(float $amount): void {
        if ($amount > $this->balance) throw new Exception("Insufficient balance");
        $this->balance -= $amount;
        $this->transactions[] = ['type' => 'debit', 'amount' => $amount];
    }

    public function getBalance(): float {
        return $this->balance;
    }
}

$account = new BankAccount("Rahul", 5000);
$account->deposit(2000);
$account->withdraw(1000);
echo $account->getBalance(); // 6000
// $account->balance = -99999; // ERROR! private hai`,
        language: "typescript",
      },
    ],
    mcqs: [
      {
        q: "Encapsulation kya achieve karta hai?",
        options: [
          "Code ko faster banata hai",
          "Data ko external access se protect karta hai",
          "Multiple classes ko ek mein merge karta hai",
          "Code duplicate karta hai",
        ],
        correct: 1,
        explain: "Encapsulation data ko private rakhta hai aur sirf controlled interface (getters/setters) se access allow karta hai.",
      },
    ],
    cheatsheet: [
      "Encapsulation = data private + methods public",
      "Inheritance = extends keyword",
      "Polymorphism = same method, different behavior",
      "Abstraction = complexity hide karo",
      "Class = blueprint, Object = instance",
      "Constructor = object creation pe automatically call",
    ],
    revision: [
      "4 Pillars: Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Class = blueprint, Object = real instance",
      "private = sirf class mein, protected = + children, public = sab",
    ],
  },
  {
    id: "oop-inheritance",
    title: "Inheritance aur Polymorphism",
    emoji: "🧬",
    category: "Basics",
    description: "Parent-child relationships aur method overriding",
    sections: [
      {
        heading: "Inheritance — Properties aur Methods inherit karo",
        content: `Inheritance mein ek class (child) doosri class (parent) se properties aur methods inherit karti hai. DRY principle follow hota hai.

**Types of Inheritance:**
- Single: ek parent
- Multilevel: A → B → C
- Hierarchical: ek parent, multiple children
- Multiple: Zyaatar languages mein nahi (PHP: Traits)`,
        code: `// TypeScript example (sab languages mein concept same hai)

// Parent class
class Vehicle {
  constructor(
    protected make: string,
    protected model: string,
    protected year: number,
    private engineRunning = false
  ) {}

  startEngine(): void {
    this.engineRunning = true;
    console.log(\`\${this.make} \${this.model} ka engine start!\`);
  }

  stopEngine(): void {
    this.engineRunning = false;
  }

  isRunning(): boolean {
    return this.engineRunning;
  }

  describe(): string {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }
}

// Child class — inherit karta hai
class Car extends Vehicle {
  constructor(
    make: string,
    model: string,
    year: number,
    private doors: number = 4
  ) {
    super(make, model, year);  // parent constructor call karo
  }

  // Method override
  describe(): string {
    return \`\${super.describe()} — \${this.doors} door car\`;
  }

  honk(): void {
    console.log("Beep Beep!");
  }
}

class ElectricCar extends Car {
  constructor(make: string, model: string, year: number, private batteryKWh: number) {
    super(make, model, year);
  }

  // Override — electric car mein engine nahi
  startEngine(): void {
    console.log(\`\${this.make} electric motor start (silent!)\`);
  }

  getRange(): number {
    return this.batteryKWh * 6; // approximate km
  }
}

const car = new Car("Toyota", "Camry", 2023);
car.startEngine();        // Toyota Camry ka engine start!
car.honk();               // Beep Beep!
console.log(car.describe()); // 2023 Toyota Camry — 4 door car

const tesla = new ElectricCar("Tesla", "Model 3", 2024, 75);
tesla.startEngine();      // Tesla electric motor start (silent!)
console.log(tesla.getRange()); // 450`,
        language: "typescript",
      },
      {
        heading: "Polymorphism — Ek interface, alag behavior",
        content: `Polymorphism = "many forms". Ek method ka naam same hai lekin alag alag classes mein alag behavior.

**Types:**
1. **Runtime/Dynamic** — Method overriding (inheritance ke through)
2. **Compile-time/Static** — Method overloading (TypeScript mein limited)`,
        code: `// Polymorphism example — shape area calculate
abstract class Shape {
  abstract area(): number;
  abstract perimeter(): number;

  describe(): string {
    return \`Area: \${this.area().toFixed(2)}, Perimeter: \${this.perimeter().toFixed(2)}\`;
  }
}

class Circle extends Shape {
  constructor(private radius: number) { super(); }

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) { super(); }

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

class Triangle extends Shape {
  constructor(private a: number, private b: number, private c: number) { super(); }

  area(): number {
    const s = (this.a + this.b + this.c) / 2;
    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }

  perimeter(): number {
    return this.a + this.b + this.c;
  }
}

// POLYMORPHISM — same method, different behavior
const shapes: Shape[] = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(3, 4, 5),
];

shapes.forEach(shape => {
  console.log(shape.constructor.name + ": " + shape.describe());
});
// Circle: Area: 78.54, Perimeter: 31.42
// Rectangle: Area: 24.00, Perimeter: 20.00
// Triangle: Area: 6.00, Perimeter: 12.00

// Har shape ka area() method alag kaam karta hai — POLYMORPHISM!`,
        language: "typescript",
        tip: "Polymorphism ka fayda: naya shape add karo (Hexagon) bina existing code change kiye — sirf Shape extend karo!",
      },
    ],
    mcqs: [
      {
        q: "Method Overriding kab hoti hai?",
        options: [
          "Jab ek class mein same naam ke multiple methods hon",
          "Jab child class parent class ka method redefine kare",
          "Jab do alag classes same method naam use karein",
          "Jab static method override ho",
        ],
        correct: 1,
        explain: "Method Overriding tab hoti hai jab child class parent class ka exact same method naam aur signature use karke nayi implementation provide kare.",
      },
    ],
    cheatsheet: [
      "extends — inheritance",
      "super() — parent constructor call",
      "super.method() — parent method call",
      "abstract — subclass mein implement karna zaroori",
      "override — method overriding (TypeScript)",
      "instanceof — type check karo",
    ],
    revision: [
      "Inheritance = extends, super() for parent constructor",
      "Override = child mein parent method redefine",
      "abstract class = incomplete blueprint",
      "Polymorphism = shapes.forEach(s => s.area()) — alag result",
    ],
  },
  {
    id: "oop-solid",
    title: "SOLID Principles",
    emoji: "💪",
    category: "Intermediate",
    description: "5 principles jo code ko clean, maintainable banate hain",
    sections: [
      {
        heading: "S — Single Responsibility Principle",
        content: `**SRP:** Ek class ki sirf ek responsibility honi chahiye. Ek reason to change.

**Violation kaise dikhti hai:** User class jo email bhi bhejti hai, database mein bhi save karti hai, aur PDF bhi generate karti hai.

**Fix:** Har kaam ke liye alag class.`,
        code: `// BAD — User class ke paas bahut zyada responsibilities
class UserBad {
  saveToDatabase(user: any) { /* DB logic */ }
  sendWelcomeEmail(email: string) { /* Email logic */ }
  generatePDFReport() { /* PDF logic */ }
  validateEmail(email: string) { return true; }
}

// GOOD — Har class ki ek responsibility
class User {
  constructor(public name: string, public email: string) {}
}

class UserRepository {
  save(user: User): void { /* DB logic only */ }
  findById(id: number): User | null { return null; }
}

class UserMailer {
  sendWelcome(user: User): void { /* Email only */ }
}

class UserValidator {
  validate(user: User): string[] {
    const errors: string[] = [];
    if (!user.name) errors.push("Name required");
    if (!user.email.includes('@')) errors.push("Invalid email");
    return errors;
  }
}`,
        language: "typescript",
      },
      {
        heading: "O, L, I, D — Baaki Principles",
        content: ``,
        code: `// O — Open/Closed Principle
// Open for extension, closed for modification
// BAD: Har nayi payment method pe switch-case mein change karo
// GOOD: Interface extend karo

interface PaymentProcessor {
  process(amount: number): boolean;
}

class CreditCard implements PaymentProcessor {
  process(amount: number) { return true; }
}

class UPI implements PaymentProcessor {
  process(amount: number) { return true; }
}

// Naya payment add karo bina existing code change kiye:
class Crypto implements PaymentProcessor {
  process(amount: number) { return true; }
}

// ─────────────────────────────────────────

// L — Liskov Substitution Principle
// Child class parent ki jagah use ho sake, behavior kharab na ho
// BAD: Square extends Rectangle — setWidth ne height bhi change kar di!
// GOOD: Alag hierarchy ya composition

// ─────────────────────────────────────────

// I — Interface Segregation Principle
// Ek bada interface ki jagah chote specific interfaces

// BAD
interface Animal {
  walk(): void;
  swim(): void;
  fly(): void; // Sab animals nahi uda sakte!
}

// GOOD
interface Walkable { walk(): void; }
interface Swimmable { swim(): void; }
interface Flyable { fly(): void; }

class Duck implements Walkable, Swimmable, Flyable {
  walk() {}
  swim() {}
  fly() {}
}

class Dog implements Walkable, Swimmable {
  walk() {}
  swim() {}
}

// ─────────────────────────────────────────

// D — Dependency Inversion Principle
// High-level modules should not depend on low-level modules
// Both should depend on abstractions

// BAD: Service directly MySQL use karta hai
class OrderServiceBad {
  private db = new MySQLDatabase(); // tight coupling!
  createOrder(data: any) { this.db.save(data); }
}

// GOOD: Abstract interface pe depend karo
interface Database {
  save(data: any): void;
  find(id: number): any;
}

class OrderService {
  constructor(private db: Database) {} // inject karo

  createOrder(data: any) { this.db.save(data); }
}

// Test mein mock inject karo:
class MockDatabase implements Database {
  save(data: any) { /* no-op for testing */ }
  find(id: number) { return {}; }
}

const service = new OrderService(new MockDatabase()); // testable!`,
        language: "typescript",
        tip: "SOLID principles ek saath apply karo. DIP + SRP ka combination = highly testable, maintainable code.",
      },
    ],
    mcqs: [
      {
        q: "SOLID mein 'D' ka matlab kya hai?",
        options: [
          "Data Isolation Principle",
          "Dependency Inversion Principle",
          "Dynamic Interface Principle",
          "Dependency Integration Principle",
        ],
        correct: 1,
        explain: "D = Dependency Inversion Principle — High-level modules low-level pe nahi, dono abstractions pe depend karein.",
      },
      {
        q: "Open/Closed Principle kya kehta hai?",
        options: [
          "Code open source hona chahiye",
          "Classes public honi chahiye",
          "Extension ke liye open, modification ke liye closed",
          "Functions open aur methods closed",
        ],
        correct: 2,
        explain: "OCP kehta hai: naya behavior add karna ho toh existing code change mat karo — extend karo (inheritance ya composition se).",
      },
    ],
    cheatsheet: [
      "S: Ek class = ek responsibility",
      "O: Extend karo, modify mat karo",
      "L: Child parent ki jagah use ho sake",
      "I: Chote specific interfaces",
      "D: Abstractions pe depend karo, concrete classes pe nahi",
    ],
    revision: [
      "SOLID = S(ingle) O(pen-Closed) L(iskov) I(nterface) D(ependency)",
      "SRP = ek class, ek reason to change",
      "DIP = interface pe depend karo → testing easy",
      "ISP = choti interfaces > ek badi interface",
    ],
  },
  {
    id: "oop-patterns",
    title: "Design Patterns",
    emoji: "🎨",
    category: "Advanced",
    description: "Common design patterns jo interviews mein puchhe jaate hain",
    sections: [
      {
        heading: "Creational Patterns — Object creation",
        content: `Design patterns tried-and-tested solutions hain common programming problems ke liye.

**Singleton Pattern:**
Ensure karo ki ek class ka sirf ek hi instance bane.`,
        code: `// 1. SINGLETON — ek hi instance
class DatabaseConnection {
  private static instance: DatabaseConnection | null = null;
  private connection: any = null;

  private constructor() {
    // private constructor — new se create nahi ho sakta bahar se
    this.connection = { host: 'localhost', port: 5432 };
  }

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  query(sql: string) {
    return \`Executing: \${sql}\`;
  }
}

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
console.log(db1 === db2); // true — same instance!

// ─────────────────────────────────────────

// 2. FACTORY — object creation logic centralize karo
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string) { console.log('[Console]', msg); }
}

class FileLogger implements Logger {
  log(msg: string) { console.log('[File]', msg); }
}

class LoggerFactory {
  static create(type: 'console' | 'file'): Logger {
    switch (type) {
      case 'console': return new ConsoleLogger();
      case 'file': return new FileLogger();
      default: throw new Error('Unknown logger type');
    }
  }
}

const logger = LoggerFactory.create('console');
logger.log('App started!');

// ─────────────────────────────────────────

// 3. BUILDER — complex object step by step banao
class QueryBuilder {
  private table = '';
  private conditions: string[] = [];
  private orderByClause = '';
  private limitClause = '';

  from(table: string): this { this.table = table; return this; }
  where(condition: string): this { this.conditions.push(condition); return this; }
  orderBy(column: string, dir = 'ASC'): this { this.orderByClause = \`\${column} \${dir}\`; return this; }
  limit(n: number): this { this.limitClause = String(n); return this; }

  build(): string {
    let sql = \`SELECT * FROM \${this.table}\`;
    if (this.conditions.length) sql += ' WHERE ' + this.conditions.join(' AND ');
    if (this.orderByClause) sql += ' ORDER BY ' + this.orderByClause;
    if (this.limitClause) sql += ' LIMIT ' + this.limitClause;
    return sql;
  }
}

const query = new QueryBuilder()
  .from('users')
  .where('age > 18')
  .where('isActive = true')
  .orderBy('name')
  .limit(10)
  .build();
// SELECT * FROM users WHERE age > 18 AND isActive = true ORDER BY name ASC LIMIT 10`,
        language: "typescript",
      },
      {
        heading: "Behavioral Patterns — Object communication",
        content: ``,
        code: `// OBSERVER PATTERN — event-driven programming
interface Observer {
  update(event: string, data: any): void;
}

class EventEmitter {
  private listeners: Map<string, Observer[]> = new Map();

  subscribe(event: string, observer: Observer): void {
    const obs = this.listeners.get(event) || [];
    this.listeners.set(event, [...obs, observer]);
  }

  emit(event: string, data: any): void {
    const obs = this.listeners.get(event) || [];
    obs.forEach(o => o.update(event, data));
  }
}

class EmailNotifier implements Observer {
  update(event: string, data: any) {
    console.log(\`Email bheja: \${event} - \${JSON.stringify(data)}\`);
  }
}

class SMSNotifier implements Observer {
  update(event: string, data: any) {
    console.log(\`SMS bheja: \${event}\`);
  }
}

const emitter = new EventEmitter();
emitter.subscribe('user.registered', new EmailNotifier());
emitter.subscribe('user.registered', new SMSNotifier());
emitter.emit('user.registered', { name: 'Rahul', email: 'r@r.com' });
// Email bheja: user.registered - {"name":"Rahul",...}
// SMS bheja: user.registered

// ─────────────────────────────────────────

// STRATEGY PATTERN — algorithm ko runtime mein swap karo
interface SortStrategy {
  sort(data: number[]): number[];
}

class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    // bubble sort implementation
    return [...data].sort((a, b) => a - b);
  }
}

class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    return [...data].sort((a, b) => a - b);
  }
}

class Sorter {
  constructor(private strategy: SortStrategy) {}

  setStrategy(strategy: SortStrategy) {
    this.strategy = strategy;
  }

  sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

const sorter = new Sorter(new BubbleSort());
console.log(sorter.sort([3, 1, 4, 1, 5]));
sorter.setStrategy(new QuickSort()); // runtime mein swap!`,
        language: "typescript",
        tip: "Singleton real-world use: Database connection, Logger, Config manager. Observer: Event systems, real-time notifications. Strategy: Payment methods, sorting algorithms.",
      },
    ],
    mcqs: [
      {
        q: "Singleton pattern ka main purpose kya hai?",
        options: [
          "Multiple instances banana",
          "Class ko abstract banana",
          "Sirf ek instance ensure karna",
          "Inheritance avoid karna",
        ],
        correct: 2,
        explain: "Singleton pattern ensure karta hai ki ek class ka global ek hi instance ho — database connections, loggers ke liye useful.",
      },
    ],
    cheatsheet: [
      "Singleton: private constructor + static getInstance()",
      "Factory: create() method — type se object banao",
      "Builder: method chaining — complex object step by step",
      "Observer: subscribe/emit — event-driven",
      "Strategy: runtime mein algorithm swap karo",
    ],
    revision: [
      "Creational: Singleton, Factory, Builder — object creation",
      "Structural: Adapter, Decorator, Proxy — structure",
      "Behavioral: Observer, Strategy, Command — communication",
    ],
  },
];

export const oopInterviews = [
  {
    id: 201,
    level: "Beginner" as const,
    tags: ["basics"],
    question: "OOP ke 4 pillars kaunse hain? Explain karo.",
    answer: `**1. Encapsulation:**
Data aur methods ko ek class mein band karo. Data private rakho, access sirf methods se. Example: BankAccount.balance private hai, deposit()/withdraw() se access.

**2. Inheritance:**
Child class parent class se properties/methods inherit kare. Code reuse. extends keyword.

**3. Polymorphism:**
Ek method naam, alag behavior. Runtime polymorphism (method override) most common.

**4. Abstraction:**
Complex implementation hide karo, simple interface show karo. Abstract classes aur interfaces use karo.`,
  },
  {
    id: 202,
    level: "Beginner" as const,
    tags: ["basics"],
    question: "Abstract Class aur Interface mein kya fark hai?",
    answer: `**Abstract Class:**
- Partially implemented ho sakti hai (kuch methods implemented, kuch abstract)
- State (properties) rakh sakti hai
- Ek hi extend kar sakte hain
- "Is-a" relationship
- Example: abstract class Animal { abstract sound(); move() { ... } }

**Interface:**
- Sirf method signatures define karta hai (no implementation — except default methods in Java)
- Multiple implement kar sakte hain
- "Can-do" / "Has-ability" relationship
- Example: interface Flyable { fly(): void; }

**Kab kya use karein:**
- Shared code chahiye → Abstract class
- Multiple behaviors chahiye → Interface
- IS-A relation → Abstract class
- CAN-DO behavior → Interface`,
    code: `abstract class Animal {
  abstract sound(): string;   // must implement
  move(): void { console.log('moving'); } // optional override
}

interface Flyable {
  fly(): void;
}

class Eagle extends Animal implements Flyable {
  sound() { return 'screech'; }
  fly() { console.log('flying high'); }
}`,
  },
  {
    id: 203,
    level: "Intermediate" as const,
    tags: ["solid"],
    question: "SOLID principles kya hain? Example do.",
    answer: `**S — Single Responsibility:**
Ek class = ek responsibility. UserRepository sirf DB, UserMailer sirf email.

**O — Open/Closed:**
Extension ke liye open, modification ke liye closed. New payment type? Interface implement karo, existing code change mat karo.

**L — Liskov Substitution:**
Child class parent ki jagah use ho sake bina behavior kharab kiye. Square extends Rectangle mein setWidth ne height change kar di — violation!

**I — Interface Segregation:**
Bade interface mat banao. Swimmable, Flyable alag alag — Dog sirf Swimmable implement kare.

**D — Dependency Inversion:**
Concrete pe nahi, abstraction pe depend karo. Service constructor mein Database interface inject karo, not MySQLDatabase directly.`,
  },
  {
    id: 205,
    level: "Intermediate" as const,
    tags: ["patterns"],
    question: "Singleton Pattern kya hai? Thread-safety kaise ensure karein?",
    answer: `Singleton = ek class ka sirf ek instance — global access point ke saath.

**Implementation requirements:**
1. Private constructor — direct instantiation band
2. Private static instance variable
3. Public static getInstance() method

**Use cases:** Database connection, Logger, Config manager, Cache

**Problems:**
- Global state → tight coupling
- Testing mein mock karna mushkil
- Multi-threading mein race condition (language-specific)

**Modern approach:** Dependency injection prefer karo — testability better`,
    code: `// Basic Singleton (JavaScript)
class Logger {
  private static instance: Logger;
  private logs: string[] = [];
  
  private constructor() {}  // prevent direct instantiation
  
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }
  
  log(message: string): void {
    const entry = \`[\${new Date().toISOString()}] \${message}\`;
    this.logs.push(entry);
    console.log(entry);
  }
  
  getLogs(): string[] {
    return [...this.logs];
  }
}

// Usage
const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();
console.log(logger1 === logger2);  // true — same instance!

logger1.log("App started");
logger2.log("User logged in");
Logger.getInstance().getLogs();  // both logs here`,
  },
  {
    id: 206,
    level: "Intermediate" as const,
    tags: ["patterns"],
    question: "Factory Pattern kya hai? Abstract Factory se kya fark hai?",
    answer: `**Factory Method Pattern:**
Subclasses decide karein kaun sa object create karna hai — parent class mein creation logic define karo, subclass mein implement karo.

**Simple Factory:** (Factory Method ka simplified version) — ek static method jo type ke basis pe object return kare.

**Abstract Factory:** Related objects ki family create karo bina concrete classes specify kiye. "Factory of factories."

**Kab use karein:**
- Object creation complex ho
- Different environments (dev/prod)
- Plugin systems`,
    code: `// Simple Factory
class ShapeFactory {
  static create(type: 'circle' | 'square' | 'triangle', size: number): Shape {
    switch (type) {
      case 'circle':   return new Circle(size);
      case 'square':   return new Square(size);
      case 'triangle': return new Triangle(size);
      default: throw new Error(\`Unknown shape: \${type}\`);
    }
  }
}

const shape = ShapeFactory.create('circle', 5);

// Factory Method Pattern
abstract class Notification {
  abstract createSender(): Sender;  // factory method
  
  send(msg: string): void {
    const sender = this.createSender();  // subclass decides
    sender.send(msg);
  }
}

class EmailNotification extends Notification {
  createSender(): Sender { return new EmailSender(); }
}

class SMSNotification extends Notification {
  createSender(): Sender { return new SMSSender(); }
}

// Abstract Factory
interface UIFactory {
  createButton(): Button;
  createInput(): Input;
  createModal(): Modal;
}

class MaterialUIFactory implements UIFactory {
  createButton() { return new MaterialButton(); }
  createInput()  { return new MaterialInput(); }
  createModal()  { return new MaterialModal(); }
}

class BootstrapFactory implements UIFactory {
  createButton() { return new BootstrapButton(); }
  createInput()  { return new BootstrapInput(); }
  createModal()  { return new BootstrapModal(); }
}`,
  },
  {
    id: 207,
    level: "Intermediate" as const,
    tags: ["patterns"],
    question: "Observer Pattern kya hai? Real-world examples do.",
    answer: `Observer = Subject (publisher) apni state changes ke baare mein Observers (subscribers) ko notify karta hai.

**Components:**
- **Subject/Observable:** State rakhta hai, observers ka list, notify karta hai
- **Observer:** update() method implement karta hai

**Fayde:**
- Loose coupling — Subject observers ki details nahi jaanta
- Multiple observers ek subject pe
- Runtime mein observers add/remove karo

**Real examples:**
- Event listeners (click, input)
- Vue/React reactivity
- Redux store subscriptions
- Stock price alerts`,
    code: `// Observer Pattern
interface Observer {
  update(event: string, data: any): void;
}

class EventEmitter {
  private listeners = new Map<string, Set<Observer>>();
  
  subscribe(event: string, observer: Observer): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(observer);
    
    // Unsubscribe function return karo
    return () => this.listeners.get(event)?.delete(observer);
  }
  
  emit(event: string, data?: any): void {
    this.listeners.get(event)?.forEach(obs => obs.update(event, data));
  }
}

// Real example: Shopping Cart
class Cart extends EventEmitter {
  private items: CartItem[] = [];
  
  addItem(item: CartItem): void {
    this.items.push(item);
    this.emit('item:added', item);
    this.emit('cart:updated', this.getTotal());
  }
  
  getTotal(): number {
    return this.items.reduce((sum, i) => sum + i.price, 0);
  }
}

// Observers
const priceDisplay: Observer = {
  update: (event, total) => {
    if (event === 'cart:updated') updateUI(total);
  }
};

const analyticsTracker: Observer = {
  update: (event, item) => {
    if (event === 'item:added') trackEvent('add_to_cart', item);
  }
};

const cart = new Cart();
const unsubPrice = cart.subscribe('cart:updated', priceDisplay);
cart.subscribe('item:added', analyticsTracker);

cart.addItem({ name: "Book", price: 500 });  // both observers notified!`,
  },
  {
    id: 208,
    level: "Intermediate" as const,
    tags: ["patterns"],
    question: "Strategy Pattern kya hai? Example do.",
    answer: `Strategy = algorithms ko interchangeable banao — runtime mein swap karo bina client code change kiye.

**Problem:** Ek function mein bahut saare if/else ya switch — hard to extend.

**Solution:** Har algorithm ko alag class mein encapsulate karo (Strategy). Context class strategy use karta hai.

**SOLID violation fix:** Open/Closed Principle — new strategy add karo bina existing code change kiye.

**Real uses:**
- Payment methods (Stripe, PayPal, Cash)
- Sorting algorithms
- Discount calculation
- Authentication strategies`,
    code: `// Without Strategy (bad — lots of if/else)
function calculateDiscount(type: string, price: number) {
  if (type === 'regular') return price * 0.05;
  if (type === 'premium') return price * 0.15;
  if (type === 'vip') return price * 0.25;
  if (type === 'employee') return price * 0.40;
  return 0;
}

// With Strategy Pattern (good — extensible)
interface DiscountStrategy {
  calculate(price: number): number;
}

class RegularDiscount implements DiscountStrategy {
  calculate(price: number) { return price * 0.05; }
}

class PremiumDiscount implements DiscountStrategy {
  calculate(price: number) { return price * 0.15; }
}

class VIPDiscount implements DiscountStrategy {
  calculate(price: number) { return price * 0.25; }
}

class Order {
  private discount: DiscountStrategy;
  
  constructor(private price: number, userType: string) {
    // Strategy map — no if/else!
    const strategies: Record<string, DiscountStrategy> = {
      regular: new RegularDiscount(),
      premium: new PremiumDiscount(),
      vip: new VIPDiscount(),
    };
    this.discount = strategies[userType] || new RegularDiscount();
  }
  
  getFinalPrice(): number {
    return this.price - this.discount.calculate(this.price);
  }
  
  // Runtime swap
  setDiscount(strategy: DiscountStrategy): void {
    this.discount = strategy;
  }
}`,
  },
  {
    id: 209,
    level: "Intermediate" as const,
    tags: ["patterns"],
    question: "Builder Pattern kya hai? Kab use karein?",
    answer: `Builder = Complex object step-by-step construct karo — ek ek part set karo, phir build karo.

**Problem it solves:**
- Telescope constructor problem: constructor(a, b, c, d, e, f) — confusing!
- Optional fields ke saath complex objects
- Same construction process, different representations

**Benefits:**
- Readable code — method chaining
- Optional fields handle
- Immutable objects create karo
- Validation build step mein`,
    code: `// Without Builder (ugly!)
const request = new HttpRequest(
  'GET', 'https://api.example.com', null, 
  { Authorization: 'Bearer token' }, 
  5000, true, 'json', null
);

// With Builder (readable!)
class HttpRequestBuilder {
  private method = 'GET';
  private url = '';
  private headers: Record<string, string> = {};
  private body: any = null;
  private timeout = 30000;
  private withCredentials = false;
  
  setMethod(method: string): this {
    this.method = method;
    return this;  // chaining!
  }
  
  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  
  addHeader(key: string, value: string): this {
    this.headers[key] = value;
    return this;
  }
  
  withAuth(token: string): this {
    return this.addHeader('Authorization', \`Bearer \${token}\`);
  }
  
  setBody(body: any): this {
    this.body = body;
    return this;
  }
  
  setTimeout(ms: number): this {
    this.timeout = ms;
    return this;
  }
  
  build(): HttpRequest {
    if (!this.url) throw new Error('URL is required');
    return new HttpRequest(this);
  }
}

// Usage — much cleaner!
const request = new HttpRequestBuilder()
  .setMethod('POST')
  .setUrl('https://api.example.com/users')
  .withAuth(token)
  .addHeader('Content-Type', 'application/json')
  .setBody({ name: 'Ali', email: 'ali@test.com' })
  .setTimeout(5000)
  .build();`,
  },
  {
    id: 210,
    level: "Intermediate" as const,
    tags: ["patterns"],
    question: "Decorator Pattern kya hai? HOF se kaise relate karta hai?",
    answer: `Decorator = Existing object ya function mein dynamically behavior add karo — original modify kiye bina.

**Types:**
1. **Class Decorator:** Object wrap karo same interface ke saath
2. **Function Decorator:** Higher-order function (wrap karo)
3. **TypeScript/Python Decorators:** Syntax sugar (@decorator)

**Fayde:**
- Single Responsibility — concerns separate karo
- Open/Closed — original class change mat karo
- Stackable — multiple decorators chain karo

**Real uses:** Logging, caching, auth, retry, rate limiting`,
    code: `// Function Decorator
function withLogging<T extends (...args: any[]) => any>(fn: T): T {
  return ((...args: any[]) => {
    console.log(\`Calling \${fn.name} with\`, args);
    const result = fn(...args);
    console.log(\`\${fn.name} returned\`, result);
    return result;
  }) as T;
}

const add = (a: number, b: number) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3);  // logs input and output

// Caching decorator
function withCache<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map();
  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Cache hit!');
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

// Stack decorators!
const smartFetch = withLogging(withCache(fetchData));

// Class Decorator Pattern
interface TextProcessor {
  process(text: string): string;
}

class PlainText implements TextProcessor {
  process(text: string) { return text; }
}

class BoldDecorator implements TextProcessor {
  constructor(private wrapped: TextProcessor) {}
  process(text: string) { return \`**\${this.wrapped.process(text)}**\`; }
}

class UpperCaseDecorator implements TextProcessor {
  constructor(private wrapped: TextProcessor) {}
  process(text: string) { return this.wrapped.process(text).toUpperCase(); }
}

// Combine decorators
const processor = new BoldDecorator(new UpperCaseDecorator(new PlainText()));
processor.process("hello");  // **HELLO**`,
  },
  {
    id: 211,
    level: "Intermediate" as const,
    tags: ["patterns"],
    question: "Repository Pattern kya hai? Service Layer ke saath kaise use karein?",
    answer: `**Repository Pattern:** Data access logic ko abstract karo — business logic ko database details se alag karo.

**Layers:**
- **Controller/Route** → request handle karo
- **Service** → business logic
- **Repository** → data access (DB queries)
- **Model/Entity** → data structure

**Fayde:**
- Database change karo (MySQL → MongoDB) bina service change kiye
- Testing mein mock repository inject karo
- Clean separation of concerns

**Interface use karo:** Repository interface define karo → concrete implementations swap ho sakein`,
    code: `// Repository Interface
interface UserRepository {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(filters?: UserFilters): Promise<User[]>;
  save(user: Partial<User>): Promise<User>;
  update(id: number, data: Partial<User>): Promise<User>;
  delete(id: number): Promise<void>;
}

// MySQL implementation
class MySQLUserRepository implements UserRepository {
  constructor(private db: Database) {}
  
  async findById(id: number): Promise<User | null> {
    const [row] = await this.db.query(
      'SELECT * FROM users WHERE id = ?', [id]
    );
    return row || null;
  }
  
  async save(data: Partial<User>): Promise<User> {
    const [result] = await this.db.query(
      'INSERT INTO users SET ?', [data]
    );
    return this.findById(result.insertId)!;
  }
}

// Service uses repository (not DB directly!)
class UserService {
  constructor(private users: UserRepository) {}  // interface inject!
  
  async register(data: RegisterDTO): Promise<User> {
    const existing = await this.users.findByEmail(data.email);
    if (existing) throw new ConflictError('Email already exists');
    
    const hashed = await bcrypt.hash(data.password, 12);
    return this.users.save({ ...data, password: hashed });
  }
}

// Testing with mock!
class MockUserRepository implements UserRepository {
  private users: User[] = [];
  async findById(id: number) { return this.users.find(u => u.id === id) || null; }
  async save(data: Partial<User>) { ... }
}

const service = new UserService(new MockUserRepository());  // testable!`,
  },
  {
    id: 212,
    level: "Advanced" as const,
    tags: ["patterns"],
    question: "Command Pattern aur CQRS kya hain?",
    answer: `**Command Pattern:** Request ko object mein encapsulate karo — undo/redo, queue, logging ke liye.

**Components:**
- **Command:** Interface with execute() (aur undo())
- **Invoker:** Command execute karta hai
- **Receiver:** Actual work karta hai

**CQRS (Command Query Responsibility Segregation):**
- Commands = writes (state change karo)
- Queries = reads (data return karo, state change nahi)
- Different models for reading and writing

**Benefits:** Undo/redo support, audit log, queueing, optimistic concurrency`,
    code: `// Command Pattern
interface Command {
  execute(): void;
  undo(): void;
}

class TextEditor {
  private content = '';
  private history: Command[] = [];
  
  executeCommand(cmd: Command): void {
    cmd.execute();
    this.history.push(cmd);
  }
  
  undoLast(): void {
    this.history.pop()?.undo();
  }
}

class InsertTextCommand implements Command {
  constructor(
    private editor: TextEditor,
    private text: string,
    private position: number
  ) {}
  
  execute(): void {
    this.editor.insert(this.text, this.position);
  }
  
  undo(): void {
    this.editor.delete(this.position, this.text.length);
  }
}

// CQRS
class CreateOrderCommand {
  constructor(
    public readonly userId: number,
    public readonly items: OrderItem[],
    public readonly paymentMethod: string
  ) {}
}

class GetOrdersByUserQuery {
  constructor(
    public readonly userId: number,
    public readonly page: number = 1
  ) {}
}

// Handlers
class CreateOrderHandler {
  async handle(cmd: CreateOrderCommand): Promise<Order> {
    // validate → save → publish event
    return this.orderRepo.save(cmd);
  }
}

class GetOrdersHandler {
  async handle(query: GetOrdersByUserQuery): Promise<Order[]> {
    return this.readModel.getByUser(query.userId, query.page);
  }
}`,
  },
  {
    id: 213,
    level: "Advanced" as const,
    tags: ["patterns", "solid"],
    question: "Composition over Inheritance kya hai? Kab prefer karein?",
    answer: `**Inheritance (IS-A):** Child class parent se sab kuch inherit karta hai — tight coupling, fragile base class problem.

**Composition (HAS-A):** Objects mein doosre objects compose karo — behaviors inject karo.

**Composition fayde:**
- Loose coupling
- Runtime behavior change
- Multiple "behaviors" combine karo (no diamond problem)
- Testing easy (mock components)
- Fragile base class problem nahi

**Rule:** "Favor composition over inheritance" — GoF Design Patterns

**Kab inheritance:** True IS-A relationship, code reuse in hierarchy aur overriding makes sense`,
    code: `// Inheritance problem
class Animal {
  eat() { /* eat */ }
  sleep() { /* sleep */ }
}

class Dog extends Animal {
  bark() { /* bark */ }
  fetch() { /* fetch */ }
}

class RobotDog extends Dog {
  // ❌ RobotDog doesn't eat or sleep! Inherits useless methods
  // ❌ Can't easily add fly() to some animals only
}

// Composition solution
const canEat = {
  eat() { console.log('eating'); }
};

const canSleep = {
  sleep() { console.log('sleeping'); }
};

const canBark = {
  bark() { console.log('woof!'); }
};

const canFly = {
  fly() { console.log('flying!'); }
};

// Mix behaviors freely!
function createDog(name: string) {
  return { name, ...canEat, ...canSleep, ...canBark };
}

function createRobotDog(name: string) {
  return { name, ...canBark, ...canFly };  // no eat/sleep!
}

function createFlyingDog(name: string) {
  return { name, ...canEat, ...canSleep, ...canBark, ...canFly };
}

// Real example: React (composition vs inheritance)
// React explicitly says: use composition, not inheritance!`,
  },
  {
    id: 214,
    level: "Advanced" as const,
    tags: ["patterns", "advanced"],
    question: "Proxy Pattern kya hai? Real-world examples kya hain?",
    answer: `Proxy = Real object ki jagah koi aur object — same interface, extra functionality.

**Types:**
- **Virtual Proxy:** Lazy initialization (expensive object tab banao jab actually chahiye)
- **Protection Proxy:** Access control
- **Remote Proxy:** Remote object ko local represent karo
- **Caching Proxy:** Results cache karo
- **Logging Proxy:** Requests log karo

**JavaScript Proxy object** — language-level proxy

**Examples:** ORM lazy loading, CDN, API gateway, Spring AOP`,
    code: `// Protection Proxy
interface UserService {
  getUser(id: number): User;
  deleteUser(id: number): void;
  updateUser(id: number, data: Partial<User>): User;
}

class RealUserService implements UserService {
  getUser(id: number) { /* DB query */ }
  deleteUser(id: number) { /* DB delete */ }
  updateUser(id: number, data: Partial<User>) { /* DB update */ }
}

class UserServiceProxy implements UserService {
  constructor(
    private real: RealUserService,
    private currentUser: { role: string }
  ) {}
  
  getUser(id: number) {
    return this.real.getUser(id);  // everyone can read
  }
  
  deleteUser(id: number) {
    if (this.currentUser.role !== 'admin') {
      throw new ForbiddenError('Only admins can delete users');
    }
    return this.real.deleteUser(id);
  }
  
  updateUser(id: number, data: Partial<User>) {
    if (this.currentUser.role === 'admin' || this.currentUser.id === id) {
      return this.real.updateUser(id, data);
    }
    throw new ForbiddenError('Cannot update other users');
  }
}

// Caching Proxy
class CachingUserService implements UserService {
  private cache = new Map<number, User>();
  
  getUser(id: number) {
    if (!this.cache.has(id)) {
      this.cache.set(id, this.real.getUser(id));
    }
    return this.cache.get(id)!;
  }
}`,
  },
  {
    id: 215,
    level: "Intermediate" as const,
    tags: ["oop", "advanced"],
    question: "Value Object vs Entity kya hain? DDD mein kya role hai?",
    answer: `**Domain-Driven Design (DDD) ke concepts:**

**Entity:**
- Identity se identify hota hai (ID)
- Mutable state ho sakta hai
- Lifecycle hota hai
- Example: User, Order, Product

**Value Object:**
- Value se identify hota hai (no ID)
- Immutable — change karna = naya object
- Interchangeable — same value = equal
- Example: Email, Money, Address, Color

**Fayde of Value Objects:**
- Self-validating
- Encapsulate business rules
- Nullify primitive obsession
- Thread-safe (immutable)`,
    code: `// Primitive obsession (bad)
function createUser(email: string, age: number) {
  if (!email.includes('@')) throw new Error('Invalid email');  // scattered validation!
  if (age < 0) throw new Error('Invalid age');
  return { email, age };
}

// Value Objects (good)
class Email {
  readonly value: string;
  
  constructor(email: string) {
    if (!email.includes('@') || !email.includes('.')) {
      throw new Error(\`Invalid email: \${email}\`);
    }
    this.value = email.toLowerCase();
  }
  
  equals(other: Email): boolean {
    return this.value === other.value;
  }
  
  getDomain(): string {
    return this.value.split('@')[1];
  }
  
  toString(): string {
    return this.value;
  }
}

class Money {
  constructor(
    readonly amount: number,
    readonly currency: string
  ) {
    if (amount < 0) throw new Error('Amount cannot be negative');
  }
  
  add(other: Money): Money {
    if (this.currency !== other.currency) throw new Error('Currency mismatch');
    return new Money(this.amount + other.amount, this.currency);  // new object!
  }
  
  equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
}

// Entity
class Order {
  readonly id: string;  // identity!
  private total: Money;
  
  constructor(id: string, items: OrderItem[]) {
    this.id = id;
    this.total = new Money(0, 'PKR');
  }
  
  addItem(item: OrderItem) {
    // Entity mutates, Value Object creates new
    this.total = this.total.add(item.price);
  }
}`,
  },
  {
    id: 204,
    level: "Intermediate" as const,
    tags: ["patterns"],
    question: "Dependency Injection kya hai? Kaise implement karte hain?",
    answer: `Dependency Injection = Class apni dependencies khud nahi banati — bahar se inject ki jaati hain.

**Without DI (bad):**
Class ke andar new Database() — tight coupling, testing impossible.

**With DI (good):**
Constructor mein interface inject karo — loose coupling, testable.

**Types:**
1. Constructor injection (preferred)
2. Setter injection
3. Property injection

**Fayde:**
- Loose coupling
- Easy testing (mock inject karo)
- Flexibility (implementation swap karo)
- Follows DIP (SOLID)`,
    code: `// Without DI — tightly coupled
class OrderService {
  private db = new MySQLDatabase(); // hard-coded!
}

// With DI — loose coupling
interface Database { save(data: any): void; }

class OrderService {
  constructor(private db: Database) {} // injected!
  createOrder(data: any) { this.db.save(data); }
}

// Test mein:
const mockDb = { save: jest.fn() };
const service = new OrderService(mockDb);`,
  },
];
