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
