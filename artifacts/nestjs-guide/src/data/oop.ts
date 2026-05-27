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
  {
    id: "oop-abstract-interfaces",
    title: "Abstract Classes aur Interfaces",
    titleEn: "Abstract Classes and Interfaces",
    emoji: "📐",
    category: "Intermediate",
    description: "Abstract classes vs interfaces — kab kya use karein, contracts define karna, TypeScript implementation",
    descriptionEn: "Abstract classes vs interfaces — when to use what, defining contracts, TypeScript implementation",
    sections: [
      {
        heading: "Abstract Class kya hai?",
        content: `**Abstract class** = Partial implementation + blueprint — direct instantiate nahi ho sakta.

**Abstract methods:** Subclasses mein implement karne zaroori hain — compiler enforce karta hai.

**Kab abstract class:**
- Common implementation share karni ho
- Template method pattern use karna ho
- Constructor chahiye base class mein
- Protected state share karna ho`,
        code: `// Abstract class — partial implementation
abstract class Animal {
  constructor(protected name: string) {}

  // Concrete method — sab use karein
  eat(): void {
    console.log(\`\${this.name} is eating...\`);
  }

  move(): void {
    console.log(\`\${this.name} is moving: \${this.getMovement()}\`);
  }

  // Abstract methods — subclass MUST implement
  abstract makeSound(): string;
  protected abstract getMovement(): string;

  // Template method — algorithm structure fix
  dailyRoutine(): void {
    console.log("Waking up...");
    this.eat();
    this.move();
    console.log(this.makeSound());
    console.log("Sleeping...");
  }
}

class Dog extends Animal {
  makeSound(): string { return "Woof! Woof!"; }
  protected getMovement(): string { return "running"; }

  fetch(): void { console.log(\`\${this.name} fetching ball!\`); }
}

class Bird extends Animal {
  makeSound(): string { return "Tweet! Tweet!"; }
  protected getMovement(): string { return "flying"; }
}

// const a = new Animal("X");  // ERROR! Cannot instantiate
const dog = new Dog("Rex");
dog.dailyRoutine();   // complete routine
dog.fetch();          // Dog-specific method`,
        language: "typescript",
      },
      {
        heading: "Interface — Pure Contract",
        content: `**Interface** = Pure contract — sirf method/property signatures, koi implementation nahi.

**Multiple interfaces implement** kar sakte hain (class ek hi class extend kar sakta hai).

**Kab interface:**
- Multiple types ke liye common contract
- Third-party classes bhi conform karein (structural typing)
- Duck typing chahiye
- Data shapes define karna (DTOs, API responses)`,
        code: `// Interfaces — pure contracts
interface Flyable {
  fly(height: number): void;
  getMaxAltitude(): number;
}

interface Swimmable {
  swim(speed: number): void;
  getMaxDepth(): number;
}

interface Printable {
  toString(): string;
  serialize(): object;
}

// Multiple interfaces implement karo
class Duck implements Flyable, Swimmable, Printable {
  constructor(private name: string) {}

  fly(height: number): void {
    console.log(\`\${this.name} flying at \${height}m\`);
  }
  getMaxAltitude(): number { return 100; }

  swim(speed: number): void {
    console.log(\`\${this.name} swimming at \${speed}m/s\`);
  }
  getMaxDepth(): number { return 2; }

  toString(): string { return \`Duck(\${this.name})\`; }
  serialize(): object { return { type: "Duck", name: this.name }; }
}

// Interface for data shapes (DTOs)
interface CreateUserDTO {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly role?: "user" | "admin";
}

interface UserResponse {
  readonly id: number;
  readonly name: string;
  readonly email: string;
  readonly createdAt: Date;
}

function createUser(dto: CreateUserDTO): UserResponse {
  // validation + DB save...
  return { id: 1, ...dto, createdAt: new Date() };
}

// Interface extend
interface AdminUser extends UserResponse {
  permissions: string[];
  lastLogin: Date;
}`,
        language: "typescript",
        tip: "Rule of thumb: Interface = 'can do' (Flyable, Serializable). Abstract class = 'is a' (Animal, Vehicle). Dono saath bhi use ho sakte hain.",
      },
      {
        heading: "Abstract vs Interface — Decision Guide",
        content: `**Summary comparison:**

| Feature | Abstract Class | Interface |
|---------|---------------|-----------|
| Implementation | Partial possible | Nahi |
| Multiple | Ek hi extend | Multiple implement |
| Constructor | Haan | Nahi |
| Fields | State rakh sakta hai | Nahi (sirf signature) |
| Access modifiers | public/private/protected | Always public |
| Kab use | "Is-a" + shared code | "Can-do" / contract |

**TypeScript interface = duck typing:**
\`\`\`typescript
interface Printable { print(): void; }
class Report { print() { console.log("Report"); } }
// Report explicitly implement nahi kiya — phir bhi Printable hai!
const p: Printable = new Report();  // Works!
\`\`\``,
        code: `// Real-world example: Payment system
interface PaymentProvider {
  charge(amount: number, currency: string): Promise<string>;
  refund(transactionId: string): Promise<boolean>;
  getBalance(): Promise<number>;
}

// Abstract base — shared logic
abstract class BasePayment implements PaymentProvider {
  protected readonly apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Common validation
  protected validate(amount: number): void {
    if (amount <= 0) throw new Error("Amount must be positive");
    if (amount > 1000000) throw new Error("Amount too large");
  }

  // Template method
  async processPayment(amount: number, currency: string): Promise<string> {
    this.validate(amount);
    const txId = await this.charge(amount, currency);
    await this.logTransaction(txId, amount);
    return txId;
  }

  private async logTransaction(txId: string, amount: number): Promise<void> {
    console.log(\`Transaction \${txId}: \${amount} logged\`);
  }

  // Abstract — child must implement
  abstract charge(amount: number, currency: string): Promise<string>;
  abstract refund(txId: string): Promise<boolean>;
  abstract getBalance(): Promise<number>;
}

class StripePayment extends BasePayment {
  async charge(amount: number, currency: string): Promise<string> {
    return \`stripe_\${Date.now()}\`;
  }
  async refund(txId: string): Promise<boolean> { return true; }
  async getBalance(): Promise<number> { return 5000; }
}`,
        language: "typescript",
      },
    ],
    cheatsheet: [
      "abstract class = partial implementation + blueprint",
      "abstract method = subclass mein implement karna zaroori",
      "interface = pure contract, no implementation",
      "Multiple interfaces implement kar sakte hain",
      "abstract = 'is-a', interface = 'can-do'",
      "Interface = duck typing (structural subtyping)",
    ],
    revision: [
      "Abstract class = direct instantiate nahi hota",
      "Abstract methods = compiler enforce karta hai",
      "Interface = multiple implement, pure contract",
      "Abstract class = state + methods share karo",
      "Template method = abstract class ka killer feature",
    ],
  },
  {
    id: "oop-composition",
    title: "Composition over Inheritance",
    titleEn: "Composition over Inheritance",
    emoji: "🧩",
    category: "Advanced",
    description: "Inheritance ki limitations, composition pattern, mixins aur flexible design",
    descriptionEn: "Inheritance limitations, composition pattern, mixins and flexible design",
    sections: [
      {
        heading: "Inheritance ki problems",
        content: `**Deep inheritance** = Fragile Base Class problem — base class change karo, sab broken.

**Classic problem — "Gorilla/Banana" problem:**
> "I wanted a banana but I got a gorilla holding the banana and the entire jungle."
> — Joe Armstrong (Erlang creator)

**Problems with inheritance:**
- Tightly coupled — parent change = child break
- Deep chains = complex, hard to trace
- Multiple inheritance = Diamond problem
- Base class knowledge zaroori
- Testing hard (parent behavior bhi test karo)

**Solution: Composition** = "Has-a" instead of "Is-a"`,
        code: `// ❌ Inheritance — fragile!
class Animal {
  breathe() { console.log("breathing"); }
  eat() { console.log("eating"); }
}

class LandAnimal extends Animal {
  walk() { console.log("walking"); }
}

class SeaAnimal extends Animal {
  swim() { console.log("swimming"); }
}

// Duck problem — both walk AND swim!
// class Duck extends LandAnimal, SeaAnimal {} // NO! Multiple inheritance

// ✅ Composition — flexible!
// Behaviors as functions/objects
const walker = {
  walk: () => console.log("walking")
};

const swimmer = {
  swim: () => console.log("swimming")
};

const flyer = {
  fly: () => console.log("flying")
};

const eater = {
  eat: () => console.log("eating")
};

// Mix and match behaviors!
const duck = { ...eater, ...walker, ...swimmer, ...flyer, name: "Duck" };
const fish = { ...eater, ...swimmer, name: "Fish" };
const eagle = { ...eater, ...walker, ...flyer, name: "Eagle" };

duck.swim();  // ✓
fish.swim();  // ✓
eagle.fly();  // ✓`,
        language: "typescript",
      },
      {
        heading: "Composition with Classes aur Mixins",
        content: `**Class composition:** Objects ko properties mein inject karo — "has-a" relationship.
**Mixins:** Multiple behaviors classes mein mix karo — TypeScript mixin pattern.`,
        code: `// Composition with classes
interface Logger {
  log(message: string): void;
}

interface Validator {
  validate(data: unknown): boolean;
}

interface EventEmitter {
  emit(event: string, data: unknown): void;
  on(event: string, handler: Function): void;
}

// Concrete implementations
class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(\`[\${new Date().toISOString()}] \${message}\`);
  }
}

class SchemaValidator implements Validator {
  validate(data: unknown): boolean {
    return typeof data === "object" && data !== null;
  }
}

// UserService — composed, not inherited
class UserService {
  constructor(
    private logger: Logger,         // injected!
    private validator: Validator,   // injected!
    private db: Database,           // injected!
  ) {}

  async createUser(data: CreateUserDTO): Promise<User> {
    this.logger.log("Creating user...");

    if (!this.validator.validate(data)) {
      throw new Error("Invalid data");
    }

    const user = await this.db.create(data);
    this.logger.log(\`User created: \${user.id}\`);
    return user;
  }
}

// Easily swap implementations!
const service = new UserService(
  new ConsoleLogger(),
  new SchemaValidator(),
  new MockDatabase()  // test mein mock use karo!
);

// TypeScript Mixin pattern
type Constructor<T = {}> = new (...args: any[]) => T;

function Serializable<T extends Constructor>(Base: T) {
  return class extends Base {
    serialize(): string {
      return JSON.stringify(this);
    }
    static deserialize(json: string): T {
      return JSON.parse(json);
    }
  };
}

function Timestamped<T extends Constructor>(Base: T) {
  return class extends Base {
    createdAt = new Date();
    updatedAt = new Date();
    touch() { this.updatedAt = new Date(); }
  };
}

class BaseEntity {
  constructor(public id: number) {}
}

// Multiple behaviors mix karo!
const TimestampedSerializableEntity = Serializable(Timestamped(BaseEntity));

class User extends TimestampedSerializableEntity {
  constructor(id: number, public name: string) { super(id); }
}

const user = new User(1, "Ali");
user.serialize();   // from Serializable
user.touch();       // from Timestamped`,
        language: "typescript",
        tip: "Prefer composition when: behaviors vary independently, multiple unrelated behaviors chahiye, ya inheritance chain 2 levels se zyada ho rahi ho.",
      },
    ],
    cheatsheet: [
      "Has-a > Is-a — composition preferred",
      "Constructor injection = dependencies pass karo",
      "Behaviors = separate objects/functions",
      "Mixin = function that takes class, returns enhanced class",
      "DI = composition ka production-ready form",
    ],
    revision: [
      "Inheritance = tight coupling, fragile base class",
      "Composition = has-a, inject behavior as objects",
      "Mixin = TypeScript mein multiple behaviors add",
      "DI container = composition at scale",
      "Testing: composition = mock inject easy hai",
    ],
  },
  {
    id: "oop-advanced-patterns",
    title: "Advanced Design Patterns",
    titleEn: "Advanced Design Patterns",
    emoji: "🎭",
    category: "Advanced",
    description: "Iterator, Template Method, Chain of Responsibility, Mediator, State pattern",
    descriptionEn: "Iterator, Template Method, Chain of Responsibility, Mediator, State pattern",
    sections: [
      {
        heading: "Template Method aur Iterator Pattern",
        content: `**Template Method:** Algorithm structure define karo — steps override karein. Abstract class ka killer feature.
**Iterator:** Collection traverse karo without exposing internal structure — for...of support.`,
        code: `// Template Method Pattern
abstract class ReportGenerator {
  // Template method — final! override nahi hoga
  generateReport(data: any[]): string {
    const filtered = this.filterData(data);       // step 1
    const processed = this.processData(filtered);  // step 2
    const formatted = this.formatOutput(processed); // step 3
    return this.addHeader() + formatted + this.addFooter();
  }

  protected abstract filterData(data: any[]): any[];
  protected abstract processData(data: any[]): any[];
  protected abstract formatOutput(data: any[]): string;

  // Optional hooks — subclass override kar sakta hai
  protected addHeader(): string { return "--- Report ---\n"; }
  protected addFooter(): string { return "\n--- End ---"; }
}

class SalesReport extends ReportGenerator {
  protected filterData(data: any[]): any[] {
    return data.filter(d => d.type === "sale");
  }
  protected processData(data: any[]): any[] {
    return data.map(d => ({ ...d, total: d.qty * d.price }));
  }
  protected formatOutput(data: any[]): string {
    return data.map(d => \`\${d.name}: Rs.\${d.total}\`).join("\n");
  }
}

// Iterator Pattern
class NumberRange implements Iterable<number> {
  constructor(
    private start: number,
    private end: number,
    private step: number = 1
  ) {}

  [Symbol.iterator](): Iterator<number> {
    let current = this.start;
    const end = this.end;
    const step = this.step;

    return {
      next(): IteratorResult<number> {
        if (current <= end) {
          const value = current;
          current += step;
          return { value, done: false };
        }
        return { value: undefined as any, done: true };
      }
    };
  }
}

const range = new NumberRange(1, 10, 2);
for (const num of range) {
  console.log(num); // 1, 3, 5, 7, 9
}

console.log([...new NumberRange(1, 5)]); // [1, 2, 3, 4, 5]`,
        language: "typescript",
      },
      {
        heading: "Chain of Responsibility aur State Pattern",
        content: `**Chain of Responsibility:** Request ko handlers ki chain se pass karo — each handler decide kare process karna hai ya next pe pass.
**State Pattern:** Object ka behavior uski state pe depend kare — state change = behavior change.`,
        code: `// Chain of Responsibility — middleware chain
abstract class Handler<T> {
  private next: Handler<T> | null = null;

  setNext(handler: Handler<T>): Handler<T> {
    this.next = handler;
    return handler;  // chaining!
  }

  handle(request: T): string | null {
    if (this.next) return this.next.handle(request);
    return null;  // no handler found
  }
}

class AuthHandler extends Handler<Request> {
  handle(req: Request): string | null {
    if (!req.token) return "401: Unauthorized";
    return super.handle(req);  // next handler
  }
}

class RateLimitHandler extends Handler<Request> {
  private counts = new Map<string, number>();
  handle(req: Request): string | null {
    const count = (this.counts.get(req.ip) || 0) + 1;
    this.counts.set(req.ip, count);
    if (count > 100) return "429: Too Many Requests";
    return super.handle(req);
  }
}

class ProcessHandler extends Handler<Request> {
  handle(req: Request): string | null {
    return "200: OK";  // actual processing
  }
}

// Chain setup
const auth = new AuthHandler();
const rateLimit = new RateLimitHandler();
const process = new ProcessHandler();

auth.setNext(rateLimit).setNext(process);
auth.handle(request);  // chain se guzarta hai!

// State Pattern — Traffic Light
interface TrafficLightState {
  handle(light: TrafficLight): void;
  getColor(): string;
}

class RedState implements TrafficLightState {
  handle(light: TrafficLight): void {
    console.log("Red → switching to Green");
    light.setState(new GreenState());
  }
  getColor(): string { return "RED"; }
}

class GreenState implements TrafficLightState {
  handle(light: TrafficLight): void {
    console.log("Green → switching to Yellow");
    light.setState(new YellowState());
  }
  getColor(): string { return "GREEN"; }
}

class YellowState implements TrafficLightState {
  handle(light: TrafficLight): void {
    console.log("Yellow → switching to Red");
    light.setState(new RedState());
  }
  getColor(): string { return "YELLOW"; }
}

class TrafficLight {
  private state: TrafficLightState = new RedState();

  setState(state: TrafficLightState): void {
    this.state = state;
  }

  change(): void { this.state.handle(this); }
  getColor(): string { return this.state.getColor(); }
}

const light = new TrafficLight();
light.change();  // Red → Green
light.change();  // Green → Yellow
light.change();  // Yellow → Red`,
        language: "typescript",
        tip: "State pattern = switch/if-else ka OOP alternative. Har state apna behavior encapsulate karta hai — new state add karna easy.",
      },
    ],
    cheatsheet: [
      "Template Method = algorithm skeleton, steps override",
      "Iterator = [Symbol.iterator] implement karo",
      "Chain of Responsibility = handler.setNext(next)",
      "State = state object swap karo (not if-else)",
      "Mediator = objects directly communicate nahi karte",
    ],
    revision: [
      "Template Method = abstract class + algorithm steps",
      "Iterator = for...of support, Iterable<T> implement",
      "Chain = auth → rate-limit → process pipeline",
      "State = behavior state object se aata hai",
      "Each pattern = specific problem ka solution",
    ],
  },
  {
    id: "oop-generics-advanced",
    title: "Generics aur Type Safety",
    titleEn: "Generics and Type Safety",
    emoji: "🔧",
    category: "Advanced",
    description: "TypeScript generics deeply — constraints, conditional types, mapped types, utility types",
    descriptionEn: "TypeScript generics in depth — constraints, conditional types, mapped types, utility types",
    sections: [
      {
        heading: "Generics — Type-safe Reusable Code",
        content: `**Generic** = Type parameter — same code alag types ke saath kaam kare, type safety maintain kare.

**Without generics:** any use karo = type safety khatam.
**With generics:** Type parameter pass karo — compile-time type checking.

**Constraints:** \`<T extends Something>\` — T pe conditions lagao.`,
        code: `// Without generics — any = type safety khatam
function firstItem(arr: any[]): any {
  return arr[0];
}
const num = firstItem([1, 2, 3]);   // type: any (bad!)
num.toFixed(2);  // runtime error possible

// With generics — type safe!
function firstItem<T>(arr: T[]): T | undefined {
  return arr[0];
}
const num2 = firstItem([1, 2, 3]);    // type: number ✓
const str = firstItem(["a", "b"]);    // type: string ✓

// Generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void { this.items.push(item); }

  pop(): T | undefined { return this.items.pop(); }

  peek(): T | undefined { return this.items[this.items.length - 1]; }

  get size(): number { return this.items.length; }

  isEmpty(): boolean { return this.items.length === 0; }
}

const numStack = new Stack<number>();
numStack.push(1);
numStack.push(2);
numStack.pop(); // returns number

// Generic with constraint
interface HasId { id: number; }

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id);
}

const user = findById([{ id: 1, name: "Ali" }], 1);
// user.name works! Type inferred as { id: number, name: string }`,
        language: "typescript",
      },
      {
        heading: "Utility Types aur Conditional Types",
        content: `**Built-in utility types:** Partial, Required, Readonly, Pick, Omit, Record, ReturnType.
**Conditional types:** \`T extends U ? X : Y\` — type level if-else.
**Mapped types:** Every property transform karo.`,
        code: `// Utility Types
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  createdAt: Date;
}

type CreateUserDTO = Omit<User, "id" | "createdAt">;
// { name, email, password, role }

type UpdateUserDTO = Partial<Omit<User, "id" | "createdAt">>;
// All fields optional except id, createdAt

type UserResponse = Readonly<Omit<User, "password">>;
// No password, all readonly

type UserRole = Pick<User, "role">;
// { role: "user" | "admin" }

// Record — key-value mapping
type RolePermissions = Record<User["role"], string[]>;
const permissions: RolePermissions = {
  user: ["read"],
  admin: ["read", "write", "delete"],
};

// Conditional types
type IsArray<T> = T extends any[] ? "array" : "not-array";
type A = IsArray<string[]>;   // "array"
type B = IsArray<string>;     // "not-array"

// Unwrap array type
type ElementType<T> = T extends (infer U)[] ? U : T;
type E = ElementType<string[]>;  // string
type F = ElementType<number>;    // number

// ReturnType
async function fetchUser(): Promise<User> { ... }
type FetchResult = Awaited<ReturnType<typeof fetchUser>>;  // User

// Custom mapped type — make all methods optional
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];  // readonly remove karo
};

// Deep Partial
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};`,
        language: "typescript",
        tip: "Utility types = type transformations — avoid code duplication at type level. Real-world: DTOs, API responses, form types sab base interface se derive karo.",
      },
    ],
    cheatsheet: [
      "function fn<T>(arg: T): T — generic function",
      "T extends HasId — constraint lagao",
      "Partial<T> — sab fields optional",
      "Omit<T, 'key'> — fields remove karo",
      "Pick<T, 'a'|'b'> — sirf yeh fields rakhho",
      "Record<K, V> — key-value type map",
      "Readonly<T> — immutable type",
    ],
    revision: [
      "Generics = type parameters — reusable + type safe",
      "Constraint <T extends X> = T pe condition lagao",
      "Partial/Required/Readonly — common transforms",
      "Omit/Pick — fields add/remove from type",
      "Conditional types = type level if-else",
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
  {
    id: 216,
    level: "Beginner" as const,
    question: "Encapsulation kya hai? Real-world example de ke explain karo.",
    answer: `Encapsulation = Data aur methods ek class mein bundle karna + access control.

ATM machine example:
- PIN aur balance = private (direct access nahi)
- withdraw(), deposit(), checkBalance() = public interface

class BankAccount {
  private balance: number = 0;
  private pin: string;
  
  constructor(pin: string, initialBalance: number) {
    this.pin = pin;
    this.balance = initialBalance;
  }
  
  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this.balance += amount;
  }
  
  withdraw(pin: string, amount: number): void {
    if (pin !== this.pin) throw new Error("Wrong PIN!");
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }
  
  getBalance(): number { return this.balance; }  // read-only access
}

Benefits: Data protection, validation, implementation hide karo, change without breaking.`,
    tags: ["encapsulation", "basics"],
  },
  {
    id: 217,
    level: "Beginner" as const,
    question: "Inheritance vs Composition — difference aur kab kaunsa use karo?",
    answer: `Inheritance: "Is-a" relationship — Car is-a Vehicle.
Composition: "Has-a" relationship — Car has-a Engine.

Inheritance problems:
- Tight coupling — base class change = child break
- Deep chains = complex
- Multiple inheritance = Diamond problem

Composition benefits:
- Loose coupling — behavior inject karo
- Flexible — runtime mein swap karo
- Testing easy — mock inject karo

Rule: "Prefer composition over inheritance" (GoF book)

Kab Inheritance: 
- True "is-a" relationship
- Code genuinely share karna ho
- Polymorphism chahiye

Kab Composition:
- Behaviors independently vary karein
- Multiple unrelated behaviors
- Framework code nahi likha ja raha

Example: Logger — don't inherit, inject it!`,
    tags: ["inheritance", "composition", "design"],
  },
  {
    id: 218,
    level: "Intermediate" as const,
    question: "SOLID principles mein 'L' — Liskov Substitution Principle detail mein explain karo.",
    answer: `LSP: Subclass ko parent class ki jagah use karna possible hona chahiye — behavior break nahi hona chahiye.

Violation example:
class Rectangle {
  setWidth(w: number) { this.width = w; }
  setHeight(h: number) { this.height = h; }
  area(): number { return this.width * this.height; }
}

class Square extends Rectangle {
  setWidth(w: number) {
    this.width = w;
    this.height = w;  // LSP violation! Rectangle ka behavior different
  }
}

function testArea(rect: Rectangle) {
  rect.setWidth(4);
  rect.setHeight(5);
  console.log(rect.area()); // Rectangle: 20, Square: 25! Wrong!
}

Fix: Don't force Square extends Rectangle.
Inhe alag classes banao, dono Shape implement karein.

Signs of LSP violation:
- instanceof checks
- NotImplementedException throws
- Preconditions strengthen karna
- Postconditions weaken karna`,
    tags: ["solid", "lsp"],
  },
  {
    id: 219,
    level: "Intermediate" as const,
    question: "Method overloading aur method overriding mein kya fark hai?",
    answer: `Method Overloading: Same name, different parameters — COMPILE TIME polymorphism.
Method Overriding: Parent method redefine karo child mein — RUNTIME polymorphism.

// Overloading (TypeScript — compile time)
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any {
    return a + b;
  }
}

calc.add(1, 2);        // 3
calc.add("Hi", " Ali"); // "Hi Ali"

// Overriding (Runtime polymorphism)
class Shape {
  area(): number { return 0; }
  describe(): string { return "I am a shape"; }
}

class Circle extends Shape {
  constructor(private r: number) { super(); }
  
  area(): number {  // OVERRIDE!
    return Math.PI * this.r * this.r;
  }
  
  describe(): string {
    return super.describe() + " — Circle!";  // super call
  }
}

const s: Shape = new Circle(5);
s.area();  // calls Circle.area() — runtime dispatch!`,
    tags: ["polymorphism", "overloading", "overriding"],
  },
  {
    id: 220,
    level: "Intermediate" as const,
    question: "Abstract class aur Interface mein kya choose karein aur kyun?",
    answer: `Abstract Class use karo jab:
- Shared implementation ho (code reuse)
- Constructor logic chahiye
- Protected state share karna ho
- Template method pattern use karna ho
- Single inheritance hierarchy fine ho

Interface use karo jab:
- Pure contract define karna ho
- Multiple "behaviors" implement karna ho
- Third-party classes bhi conform karein
- Duck typing chahiye
- Data shapes define karo (DTOs)

Real decision:
abstract class Animal { eat() {} }  // shared behavior — abstract class
interface Flyable { fly(): void; }  // capability — interface

class Bird extends Animal implements Flyable {
  fly() { console.log("flying"); }
}

TypeScript tip: Interfaces = structural typing —
class Report { print() {} }
const p: Printable = new Report();  // Works even without explicit implements!`,
    tags: ["abstract", "interface", "design"],
  },
  {
    id: 221,
    level: "Intermediate" as const,
    question: "Dependency Injection kya hai? IoC Container kya hota hai?",
    answer: `DI: Dependencies bahar se inject karo — class khud nahi banati.

Without DI (tightly coupled):
class UserService {
  private db = new MySQLDatabase(); // hard-coded!
  private logger = new ConsoleLogger(); // hard-coded!
}

With DI (loose coupling):
class UserService {
  constructor(
    private db: Database,       // injected!
    private logger: Logger,     // injected!
  ) {}
}

Benefits: Testable (mock inject), swappable, single responsibility.

IoC Container: Framework jo automatically dependencies inject kare.
NestJS example:
@Injectable()
class UserService {
  constructor(private db: DatabaseService) {}  // auto-injected!
}

@Module({
  providers: [UserService, DatabaseService],
})
class AppModule {}

// NestJS automatically creates + injects DatabaseService

IoC Container karta hai:
1. Services register karo
2. Dependencies resolve karo (dependency graph)
3. Instances create + inject karo
4. Lifecycle manage karo (singleton, transient)`,
    tags: ["di", "ioc", "solid"],
  },
  {
    id: 222,
    level: "Intermediate" as const,
    question: "Polymorphism ke different types explain karo examples ke saath.",
    answer: `Polymorphism ke 4 types:

1. Compile-time (Static) — Method Overloading
class Math {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: any, b: any): any { return a + b; }
}

2. Runtime (Dynamic) — Method Overriding
const shapes: Shape[] = [new Circle(), new Square()];
shapes.forEach(s => s.area()); // each calls own area()

3. Parametric (Generics)
function identity<T>(x: T): T { return x; }
identity<number>(5);
identity<string>("hi");

4. Ad-hoc (Operator Overloading — limited in TS)
// TypeScript mein direct operator overloading nahi
// But Python mein: __add__, __mul__ etc.

Most important: Runtime polymorphism (virtual dispatch)
- Parent reference = child object
- Correct method at runtime call hoti hai
- Open for extension, closed for modification (OCP)

const payment: PaymentProvider = new StripePayment();
payment.charge(100, "USD"); // StripePayment.charge() call hogi!`,
    tags: ["polymorphism", "types"],
  },
  {
    id: 223,
    level: "Advanced" as const,
    question: "SOLID mein Open/Closed Principle kaise implement karte hain?",
    answer: `OCP: Classes extension ke liye open, modification ke liye closed.

❌ Violation — every new type = modify existing:
class ShapeArea {
  calculate(shape: Shape): number {
    if (shape.type === "circle") return Math.PI * shape.r ** 2;
    if (shape.type === "square") return shape.s ** 2;
    // New shape = modify this class!
  }
}

✅ OCP compliant:
interface Shape {
  area(): number;  // each shape calculates own area
}

class Circle implements Shape {
  constructor(private r: number) {}
  area(): number { return Math.PI * this.r ** 2; }
}

class Square implements Shape {
  constructor(private s: number) {}
  area(): number { return this.s ** 2; }
}

// New shape: just add new class — nothing changes!
class Triangle implements Shape {
  constructor(private b: number, private h: number) {}
  area(): number { return 0.5 * this.b * this.h; }
}

function totalArea(shapes: Shape[]): number {
  return shapes.reduce((sum, s) => sum + s.area(), 0);
}

Real-world: Payment methods, export formats, notification types.`,
    tags: ["solid", "ocp"],
  },
  {
    id: 224,
    level: "Advanced" as const,
    question: "Observer pattern real-world mein kahan use hota hai? Event system banana sikhao.",
    answer: `Observer = Publisher/Subscriber — jab ek object change ho, sab dependents automatically notify ho.

Real-world uses:
- DOM event listeners
- Redux state changes
- Angular services (Subject)
- Node.js EventEmitter
- Database triggers
- Stock price updates
- Chat applications

TypeScript implementation:
class EventEmitter<T extends Record<string, any>> {
  private listeners: Partial<{ [K in keyof T]: Set<(data: T[K]) => void> }> = {};

  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): () => void {
    if (!this.listeners[event]) {
      this.listeners[event] = new Set();
    }
    this.listeners[event]!.add(listener);
    return () => this.off(event, listener);  // unsubscribe function!
  }

  off<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    this.listeners[event]?.delete(listener);
  }

  emit<K extends keyof T>(event: K, data: T[K]): void {
    this.listeners[event]?.forEach(listener => listener(data));
  }
}

// Typed events
type AppEvents = {
  "user:created": { userId: string; email: string };
  "order:placed": { orderId: string; amount: number };
  "payment:failed": { orderId: string; reason: string };
};

const emitter = new EventEmitter<AppEvents>();

const unsub = emitter.on("user:created", ({ userId, email }) => {
  sendWelcomeEmail(email);
});

emitter.emit("user:created", { userId: "123", email: "ali@test.com" });
unsub(); // cleanup!`,
    tags: ["observer", "events", "patterns"],
  },
  {
    id: 225,
    level: "Advanced" as const,
    question: "Factory Method aur Abstract Factory pattern mein kya fark hai?",
    answer: `Factory Method: Ek product create karne ka method — subclass decide kare which class.
Abstract Factory: Related products ka family create karo — consistent UI kits etc.

Factory Method:
abstract class Dialog {
  // Factory method
  abstract createButton(): Button;

  render(): void {
    const button = this.createButton();  // subclass decide kare!
    button.render();
  }
}

class WindowsDialog extends Dialog {
  createButton(): Button { return new WindowsButton(); }
}

class WebDialog extends Dialog {
  createButton(): Button { return new WebButton(); }
}

Abstract Factory — families:
interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
  createInput(): Input;
}

class WindowsUIFactory implements UIFactory {
  createButton(): Button { return new WinButton(); }
  createCheckbox(): Checkbox { return new WinCheckbox(); }
  createInput(): Input { return new WinInput(); }
}

class MacUIFactory implements UIFactory {
  createButton(): Button { return new MacButton(); }
  createCheckbox(): Checkbox { return new MacCheckbox(); }
  createInput(): Input { return new MacInput(); }
}

// Consistent UI — same factory se sab components
function buildUI(factory: UIFactory) {
  return {
    button: factory.createButton(),
    checkbox: factory.createCheckbox(),
    input: factory.createInput(),
  };
}`,
    tags: ["factory", "abstract-factory", "creational"],
  },
  {
    id: 226,
    level: "Advanced" as const,
    question: "Decorator pattern kya hai? TypeScript decorators se kaise relate karta hai?",
    answer: `Decorator (Design Pattern): Object ko wrap karke behavior add karo — original change kiye bina.

interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number { return 100; }
  description(): string { return "Simple coffee"; }
}

// Decorator base
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}
  cost(): number { return this.coffee.cost(); }
  description(): string { return this.coffee.description(); }
}

class MilkDecorator extends CoffeeDecorator {
  cost(): number { return this.coffee.cost() + 20; }
  description(): string { return this.coffee.description() + ", milk"; }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number { return this.coffee.cost() + 10; }
  description(): string { return this.coffee.description() + ", sugar"; }
}

let coffee: Coffee = new SimpleCoffee();     // 100
coffee = new MilkDecorator(coffee);          // 120
coffee = new SugarDecorator(coffee);         // 130
coffee = new MilkDecorator(coffee);          // 150 (double milk!)

// TypeScript @Decorator (metadata decorators):
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${key}(\${args})\`);
    return original.apply(this, args);
  };
  return descriptor;
}

class Service {
  @Log  // same concept — wrap method!
  process(data: string): string { return data.toUpperCase(); }
}`,
    tags: ["decorator", "structural", "patterns"],
  },
  {
    id: 227,
    level: "Advanced" as const,
    question: "Repository pattern kya hai? OOP mein data access layer kaise design karein?",
    answer: `Repository pattern: Data access logic abstract karo — business logic DB se decouple.

interface UserRepository {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(filters?: UserFilters): Promise<User[]>;
  create(data: CreateUserDTO): Promise<User>;
  update(id: number, data: UpdateUserDTO): Promise<User>;
  delete(id: number): Promise<void>;
}

// MySQL implementation
class MySQLUserRepository implements UserRepository {
  constructor(private db: Pool) {}

  async findById(id: number): Promise<User | null> {
    const [rows] = await this.db.execute(
      "SELECT * FROM users WHERE id = ?", [id]
    );
    return (rows as User[])[0] || null;
  }

  async create(data: CreateUserDTO): Promise<User> {
    const [result] = await this.db.execute(
      "INSERT INTO users SET ?", [data]
    );
    return this.findById((result as any).insertId) as Promise<User>;
  }
  // ... other methods
}

// In-memory for testing!
class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];
  async findById(id: number) { return this.users.find(u => u.id === id) || null; }
  async create(data: CreateUserDTO) {
    const user = { ...data, id: Date.now() } as User;
    this.users.push(user);
    return user;
  }
  // ...
}

// UserService depends on interface — not implementation!
class UserService {
  constructor(private repo: UserRepository) {}
  async getUser(id: number) { return this.repo.findById(id); }
}`,
    tags: ["repository", "data-access", "patterns"],
  },
  {
    id: 228,
    level: "Intermediate" as const,
    question: "Static methods aur properties — kab use karein? Instance vs Static?",
    answer: `Instance methods/props: Object ke saath — har object ka apna state.
Static methods/props: Class ke saath — sab instances share karein.

class MathUtils {
  // Static — no instance needed
  static PI = 3.14159;
  
  static circleArea(r: number): number {
    return MathUtils.PI * r * r;
  }
  
  static factorial(n: number): number {
    return n <= 1 ? 1 : n * MathUtils.factorial(n - 1);
  }
}

MathUtils.circleArea(5);  // instance nahi chahiye!
new MathUtils().circleArea(5);  // anti-pattern!

class Counter {
  private static instanceCount = 0;  // shared state
  private count = 0;                  // instance state
  
  constructor() {
    Counter.instanceCount++;
  }
  
  increment() { this.count++; }
  
  static getInstanceCount() { return Counter.instanceCount; }
  getCount() { return this.count; }
}

const c1 = new Counter();
const c2 = new Counter();
Counter.getInstanceCount();  // 2

Kab static use karo:
- Utility functions (no state needed)
- Factory methods (getInstance, create)
- Constants, configuration
- Counter, ID generator (shared state)

Kab NOT static:
- Object-specific behavior
- State jo objects mein alag ho`,
    tags: ["static", "instance", "oop"],
  },
  {
    id: 229,
    level: "Intermediate" as const,
    question: "Design Patterns ke 3 categories aur their purposes explain karo.",
    answer: `Gang of Four (GoF) — 23 patterns, 3 categories:

1. CREATIONAL (Object Creation):
   - Singleton: Ek instance — DB connection, Logger
   - Factory Method: Object creation subclass decide kare
   - Abstract Factory: Related objects ka family create karo
   - Builder: Complex objects step by step — Query Builder, Pizza builder
   - Prototype: Object clone karo

2. STRUCTURAL (Object Composition):
   - Adapter: Incompatible interfaces compatible banao — old API wrapper
   - Decorator: Behavior add karo without subclassing — Middleware, logging
   - Facade: Complex subsystem ka simple interface — SDK
   - Proxy: Object access control — lazy loading, caching
   - Composite: Tree structures — File system, DOM
   - Bridge: Abstraction se implementation decouple

3. BEHAVIORAL (Object Communication):
   - Observer: Event notification — EventEmitter, Redux
   - Strategy: Runtime algorithm swap — sort strategies, payment methods
   - Command: Request encapsulate — undo/redo, transaction
   - Chain of Responsibility: Request handlers chain — middleware
   - State: Behavior state se decide ho — Traffic light, Order status
   - Template Method: Algorithm skeleton — Report generators
   - Iterator: Collection traverse — for...of, generators

Most common in interviews: Singleton, Factory, Observer, Strategy, Decorator, Repository.`,
    tags: ["design-patterns", "gof", "categories"],
  },
  {
    id: 230,
    level: "Advanced" as const,
    question: "Command pattern kya hai? Undo/Redo kaise implement karte hain?",
    answer: `Command pattern: Request ko object mein encapsulate karo — undo/redo, logging, queuing possible.

interface Command {
  execute(): void;
  undo(): void;
}

class TextEditor {
  private text = "";
  
  insertText(text: string, position: number): void {
    this.text = this.text.slice(0, position) + text + this.text.slice(position);
  }
  
  deleteText(position: number, length: number): void {
    this.text = this.text.slice(0, position) + this.text.slice(position + length);
  }
  
  getText(): string { return this.text; }
}

class InsertCommand implements Command {
  constructor(
    private editor: TextEditor,
    private text: string,
    private position: number
  ) {}
  
  execute(): void { this.editor.insertText(this.text, this.position); }
  undo(): void { this.editor.deleteText(this.position, this.text.length); }
}

class CommandHistory {
  private history: Command[] = [];
  private undone: Command[] = [];
  
  execute(command: Command): void {
    command.execute();
    this.history.push(command);
    this.undone = [];  // redo history clear
  }
  
  undo(): void {
    const command = this.history.pop();
    if (command) {
      command.undo();
      this.undone.push(command);
    }
  }
  
  redo(): void {
    const command = this.undone.pop();
    if (command) {
      command.execute();
      this.history.push(command);
    }
  }
}

const editor = new TextEditor();
const history = new CommandHistory();
history.execute(new InsertCommand(editor, "Hello", 0));
history.execute(new InsertCommand(editor, " World", 5));
history.undo();  // "Hello"
history.redo();  // "Hello World"`,
    tags: ["command", "undo-redo", "behavioral"],
  },
  {
    id: 231,
    level: "Advanced" as const,
    question: "Proxy pattern ke real use cases kya hain? Virtual proxy aur protection proxy explain karo.",
    answer: `Proxy: Real object ke access ke beech logic add karo — same interface maintain karo.

Types:
1. Virtual Proxy: Expensive object ka lazy initialization
2. Protection Proxy: Access control
3. Caching Proxy: Results cache karo
4. Logging Proxy: Calls log karo
5. Remote Proxy: Remote object represent karo

// Virtual Proxy — lazy loading
class ExpensiveService {
  constructor() {
    console.log("Loading heavy ML model...");
    // Expensive initialization!
  }
  predict(data: number[]): number { return Math.random(); }
}

class LazyServiceProxy {
  private instance: ExpensiveService | null = null;
  
  predict(data: number[]): number {
    if (!this.instance) {
      this.instance = new ExpensiveService();  // lazy!
    }
    return this.instance.predict(data);
  }
}

// Caching Proxy
class CachingApiProxy {
  private cache = new Map<string, { data: any; expires: number }>();
  
  constructor(private api: ApiService, private ttl = 60000) {}
  
  async get(url: string): Promise<any> {
    const cached = this.cache.get(url);
    if (cached && Date.now() < cached.expires) {
      return cached.data;  // cache hit!
    }
    
    const data = await this.api.get(url);
    this.cache.set(url, { data, expires: Date.now() + this.ttl });
    return data;
  }
}

// ES6 Proxy — built-in!
const handler = {
  get(target: any, key: string) {
    console.log(\`Getting \${key}\`);
    return target[key];
  },
  set(target: any, key: string, value: any) {
    if (typeof value !== typeof target[key]) throw new Error("Type mismatch!");
    target[key] = value;
    return true;
  }
};

const validated = new Proxy({ name: "Ali", age: 25 }, handler);`,
    tags: ["proxy", "structural", "caching"],
  },
  {
    id: 232,
    level: "Intermediate" as const,
    question: "Access modifiers (public, private, protected) real-world mein kaise decide karein?",
    answer: `Access modifiers = OOP ka encapsulation enforce karne ka tool.

public: Koi bhi access kar sake — API surface.
private: Sirf same class — implementation detail.
protected: Same class + subclasses — template method ke liye.
readonly: Assign once — immutable field.

Decision guide:
class UserService {
  // Public API — external code ke liye
  public async createUser(dto: CreateUserDTO): Promise<User> {
    const hashed = await this.hashPassword(dto.password);
    return this.userRepo.create({ ...dto, password: hashed });
  }
  
  public async getUserById(id: number): Promise<User | null> {
    return this.userRepo.findById(id);
  }
  
  // Private — implementation detail, test mein spy karo
  private async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }
  
  // Private — internal caching
  private readonly cache = new Map<number, User>();
  
  constructor(
    // Private injection — external code ko nahi chahiye
    private readonly userRepo: UserRepository,
    private readonly logger: Logger,
  ) {}
}

// Abstract class mein protected
abstract class BaseController {
  protected validateRequest(req: Request): void { ... }  // subclass use kare
  protected sendSuccess(res: Response, data: any): void { ... }
  
  // Public — HTTP handler
  public abstract handle(req: Request, res: Response): Promise<void>;
}

Rule: Start with private, loosen as needed.`,
    tags: ["access-modifiers", "encapsulation"],
  },
  {
    id: 233,
    level: "Advanced" as const,
    question: "Mediator pattern kya hai? Aur Facade se kaise alag hai?",
    answer: `Mediator: Objects directly communicate nahi karte — ek central mediator se.
Facade: Complex subsystem ka simple interface.

Key difference:
- Facade = simplify (complex → simple) — one-way
- Mediator = coordinate (many-to-many) — bidirectional

Mediator example — Chat room:
interface ChatMediator {
  sendMessage(message: string, from: User): void;
  addUser(user: User): void;
}

class ChatRoom implements ChatMediator {
  private users: User[] = [];
  
  addUser(user: User): void {
    this.users.push(user);
    this.sendMessage(\`\${user.name} joined the chat\`, user);
  }
  
  sendMessage(message: string, from: User): void {
    this.users
      .filter(u => u !== from)  // sender ko nahi
      .forEach(u => u.receive(message, from.name));
  }
}

class User {
  constructor(
    public name: string,
    private mediator: ChatMediator
  ) {}
  
  send(message: string): void {
    this.mediator.sendMessage(message, this);  // mediator ke through!
  }
  
  receive(message: string, from: string): void {
    console.log(\`[\${from} → \${this.name}]: \${message}\`);
  }
}

// Users directly communicate nahi karte — sab ChatRoom se!
const room = new ChatRoom();
const ali = new User("Ali", room);
const sara = new User("Sara", room);
room.addUser(ali);
room.addUser(sara);
ali.send("Hello everyone!");`,
    tags: ["mediator", "facade", "behavioral"],
  },
  {
    id: 234,
    level: "Intermediate" as const,
    question: "Mixin kya hai? TypeScript mein multiple inheritance simulate kaise karein?",
    answer: `Mixin = Multiple sources se behavior combine karo — TypeScript mein multiple inheritance workaround.

// Mixin pattern — function that takes class, returns enhanced class
type Constructor<T = {}> = new (...args: any[]) => T;

function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    createdAt = new Date();
    updatedAt = new Date();
    
    touch() { this.updatedAt = new Date(); }
  };
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActive = false;
    
    activate() { this.isActive = true; }
    deactivate() { this.isActive = false; }
  };
}

function Serializable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    serialize(): string { return JSON.stringify(this); }
    
    static deserialize<T>(json: string): T {
      return JSON.parse(json);
    }
  };
}

// Base class
class BaseEntity {
  constructor(public id: number, public name: string) {}
}

// Mix all behaviors!
const TimestampedActivatableSerializable = 
  Serializable(Activatable(Timestamped(BaseEntity)));

class Product extends TimestampedActivatableSerializable {
  constructor(id: number, name: string, public price: number) {
    super(id, name);
  }
}

const p = new Product(1, "Laptop", 50000);
p.activate();           // from Activatable
p.touch();              // from Timestamped
p.serialize();          // from Serializable
console.log(p.isActive, p.createdAt);`,
    tags: ["mixin", "multiple-inheritance", "composition"],
  },
  {
    id: 235,
    level: "Advanced" as const,
    question: "Value Object aur Entity OOP mein kya hote hain? Domain-Driven Design mein role?",
    answer: `Entity: Identity se define — ID change nahi hoti chahe properties badlein.
Value Object: Value se define — no identity, immutable, equality by value.

// Entity — ID se identify karo
class User {
  constructor(
    public readonly id: string,  // stable identity
    public name: string,          // mutable
    public email: string,         // mutable
  ) {}
  
  equals(other: User): boolean {
    return this.id === other.id;  // ID se compare!
  }
  
  updateEmail(email: string): void {
    if (!email.includes("@")) throw new Error("Invalid email");
    this.email = email;  // same entity, updated
  }
}

// Value Object — immutable, equality by value
class Money {
  constructor(
    public readonly amount: number,
    public readonly currency: string,
  ) {
    if (amount < 0) throw new Error("Amount cannot be negative");
    Object.freeze(this);  // immutable!
  }
  
  add(other: Money): Money {
    if (this.currency !== other.currency) throw new Error("Currency mismatch");
    return new Money(this.amount + other.amount, this.currency);  // new object!
  }
  
  equals(other: Money): boolean {
    return this.amount === other.amount && this.currency === other.currency;
  }
  
  toString(): string { return \`\${this.currency} \${this.amount}\`; }
}

// Usage
const price = new Money(1000, "PKR");
const tax = new Money(170, "PKR");
const total = price.add(tax);  // new Money(1170, "PKR")

// price still 1000 — immutable!

const m1 = new Money(100, "USD");
const m2 = new Money(100, "USD");
m1 === m2;          // false (different objects)
m1.equals(m2);      // true (same value!)`,
    tags: ["value-object", "entity", "ddd"],
  },
  {
    id: 236,
    level: "Advanced" as const,
    question: "OOP mein CQRS pattern kya hai? Read aur Write models kaise separate karein?",
    answer: `CQRS = Command Query Responsibility Segregation — reads aur writes alag karo.

Command: State change karta hai (Create, Update, Delete) — koi data return nahi.
Query: State read karta hai — koi side effects nahi.

// Commands — write side
interface Command {}

class CreateOrderCommand implements Command {
  constructor(
    public readonly userId: string,
    public readonly items: OrderItem[],
    public readonly shippingAddress: Address,
  ) {}
}

class CommandHandler<T extends Command> {
  handle(command: T): Promise<void> { throw new Error("Override!"); }
}

class CreateOrderCommandHandler extends CommandHandler<CreateOrderCommand> {
  constructor(
    private orderRepo: OrderRepository,
    private eventBus: EventBus,
  ) { super(); }
  
  async handle(cmd: CreateOrderCommand): Promise<void> {
    const order = Order.create(cmd.userId, cmd.items, cmd.shippingAddress);
    await this.orderRepo.save(order);
    this.eventBus.emit("order:created", { orderId: order.id });
    // Returns void — no data!
  }
}

// Queries — read side (separate model, can be denormalized!)
interface Query<TResult> {}

class GetUserOrdersQuery implements Query<OrderSummary[]> {
  constructor(
    public readonly userId: string,
    public readonly page: number = 1,
    public readonly limit: number = 20,
  ) {}
}

class GetUserOrdersHandler {
  constructor(private readDb: ReadDatabase) {}
  
  async handle(query: GetUserOrdersQuery): Promise<OrderSummary[]> {
    // Read from optimized read model (can be different DB, pre-joined)
    return this.readDb.query(\`
      SELECT o.id, o.status, o.total, COUNT(i.id) as itemCount
      FROM orders o JOIN order_items i ON o.id = i.order_id
      WHERE o.user_id = ?
      GROUP BY o.id
      LIMIT ? OFFSET ?
    \`, [query.userId, query.limit, (query.page - 1) * query.limit]);
  }
}

// Benefits: Scale reads/writes independently
// Read model = optimized for queries (denormalized, cached)
// Write model = optimized for business logic (normalized)`,
    tags: ["cqrs", "architecture", "patterns"],
  },
];
