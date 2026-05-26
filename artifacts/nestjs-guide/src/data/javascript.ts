import type { Chapter } from "./chapters";
import type { InterviewQ } from "./interview";

export const jsChapters: Chapter[] = [
  {
    id: "js-intro",
    title: "JavaScript Introduction",
    emoji: "🌐",
    category: "Basics",
    description: "JavaScript kya hai, browser mein kaise kaam karta hai, aur pehla program likhna",
    sections: [
      {
        heading: "JavaScript kya hai?",
        content: `JavaScript (JS) ek **programming language** hai jo web pages ko interactive banata hai.
- **HTML** = structure (skeleton)
- **CSS** = styling (kapde)
- **JavaScript** = behaviour (movement, logic)

Pehle sirf browsers mein chalta tha. Ab **Node.js** ki wajah se server pe bhi chalta hai.
JavaScript **dynamically typed**, **interpreted**, aur **single-threaded** language hai.`,
        tip: "JavaScript aur Java alag hain! Naam confuse mat karo — dono completely different languages hain.",
      },
      {
        heading: "Script Tag — HTML mein JS add karna",
        content: `HTML file mein JavaScript add karne ke 2 tarike:
- **Inline:** HTML ke andar \`<script>\` tag mein
- **External:** alag .js file link karo (best practice)

\`<script>\` tag ko \`<body>\` ke end mein rakho — page pehle load ho, phir JS chale.`,
        code: `<!-- Inline script -->
<script>
  console.log("Hello World!");
  alert("Namaste!");
</script>

<!-- External script (best practice) -->
<script src="app.js" defer></script>
<!-- defer = HTML parse hone ke baad run karo -->`,
        language: "html",
      },
      {
        heading: "Console — Developer ka best friend",
        content: `Browser DevTools ka **Console tab** JS output dikhata hai.
- \`console.log()\` — value print karo
- \`console.error()\` — error print karo
- \`console.warn()\` — warning
- \`console.table()\` — array/object table format mein

**F12** (ya right-click → Inspect) se DevTools kholo.`,
        code: `console.log("Hello", "World");       // Hello World
console.log(42, true, [1,2,3]);     // multiple values

console.error("Something went wrong!");
console.warn("Be careful!");

const users = [{name: "Ali", age: 25}, {name: "Sara", age: 22}];
console.table(users);               // table format

console.log(typeof "hello");        // "string"
console.log(typeof 42);             // "number"`,
        language: "javascript",
      },
    ],
    mcqs: [
      { q: "JavaScript kahan run hoti hai?", options: ["Sirf browser mein", "Sirf server pe", "Browser aur server dono pe (Node.js ke saath)", "Sirf mobile apps mein"], correct: 2, explain: "JavaScript originally browser ke liye thi lekin Node.js aane ke baad server pe bhi run hoti hai." },
      { q: "<script> tag ko body ke end mein kyun rakhte hain?", options: ["Security ke liye", "HTML parse hone ke baad JS chale, faster load", "CSS ke baad chalana zaroori hai", "Koi fark nahi padta"], correct: 1, explain: "Body end mein rakhne se HTML pehle render hoti hai, phir JS chalta hai — better user experience." },
      { q: "console.log() ka use kya hai?", options: ["Alert box dikhana", "Page ko refresh karna", "Output/values print karna debug ke liye", "Variables delete karna"], correct: 2, explain: "console.log() developer tool hai — values print karo, debug karo. Users ko nahi dikhta." },
    ],
    cheatsheet: [
      "console.log(val) — value print karo",
      "console.error(msg) — error print karo",
      "typeof val — data type check karo",
      "<script defer src='app.js'> — external JS file",
      "alert('msg') — popup dialog",
      "prompt('msg') — user se input lo",
    ],
    revision: [
      "JavaScript = HTML + CSS ke saath web ka third pillar",
      "Browser + Node.js = JS dono jagah chalta hai",
      "console.log() = developer ka debug tool",
      "defer attribute = HTML parse ke baad script run karo",
      "typeof = variable ka type check karo",
    ],
  },
  {
    id: "js-variables",
    title: "Variables & Data Types",
    emoji: "📦",
    category: "Basics",
    description: "var, let, const — kab kya use karein, aur JavaScript ke saare data types",
    sections: [
      {
        heading: "var, let, const — Differences",
        content: `JavaScript mein 3 tarike se variables declare karte hain:
- **var** — old style, function scope, avoid karo
- **let** — block scope, reassign kar sakte hain
- **const** — block scope, reassign nahi kar sakte

**Rule of thumb:** Hamesha \`const\` use karo. Agar reassign zaroori ho toh \`let\`. \`var\` use mat karo (hoisting aur scope issues).`,
        code: `const name = "Ali";      // cannot be reassigned
let age = 25;           // can be reassigned
age = 26;               // ok!
// name = "Sara";       // Error! const reassign nahi hoti

var old = "bad";        // avoid! function-scoped, hoisting issues

// Block scope example
if (true) {
  let blockVar = "inside";
  const blockConst = "also inside";
  // var leaks out of block!
}
// console.log(blockVar); // Error — let is block-scoped
// console.log(old);      // Works — var leaks!`,
        language: "javascript",
      },
      {
        heading: "Primitive Data Types",
        content: `JavaScript mein **7 primitive types** hain:
- **string** — text: \`"hello"\`, \`'world'\`, \`\`template\`\`
- **number** — integers aur decimals: \`42\`, \`3.14\`, \`-5\`
- **boolean** — \`true\` ya \`false\`
- **null** — intentionally koi value nahi (tum set karte ho)
- **undefined** — value assign nahi hui (JS default)
- **symbol** — unique identifier (ES6)
- **bigint** — very large integers: \`9007199254740991n\``,
        code: `// Strings
const str1 = "double quotes";
const str2 = 'single quotes';
const str3 = \`template literal: \${str1}\`;  // interpolation!

// Numbers
const int = 42;
const float = 3.14;
const negative = -100;
console.log(0.1 + 0.2);  // 0.30000000000000004 (floating point!)

// Boolean
const isLoggedIn = true;
const isEmpty = false;

// Null vs Undefined
let declared;           // undefined (auto)
let empty = null;       // null (you set it)
console.log(typeof null);  // "object" (JS bug, historical)`,
        language: "javascript",
      },
      {
        heading: "Type Coercion & Type Conversion",
        content: `JavaScript **automatically** types convert karta hai (coercion) — ye kabhi kabhi unexpected hota hai!

**Explicit conversion** (safe):
- \`Number()\`, \`String()\`, \`Boolean()\`
- \`parseInt()\`, \`parseFloat()\`

**Truthy vs Falsy:** Jo values \`false\` ki tarah behave karein:
Falsy: \`false\`, \`0\`, \`""\`, \`null\`, \`undefined\`, \`NaN\`
Truthy: baaki sab (including \`"0"\`, \`[]\`, \`{}\`)`,
        code: `// Implicit coercion (dangerous!)
console.log("5" + 3);    // "53" (string concat!)
console.log("5" - 3);    // 2 (number subtraction)
console.log(true + 1);   // 2
console.log(null + 1);   // 1

// Explicit conversion (safe)
Number("42");       // 42
Number("hello");    // NaN
Number(true);       // 1
String(42);         // "42"
Boolean(0);         // false
Boolean("hello");   // true

// parseInt / parseFloat
parseInt("42px");   // 42 (ignores px!)
parseFloat("3.14"); // 3.14

// NaN check
isNaN("hello");     // true
Number.isNaN(NaN);  // true (better)`,
        language: "javascript",
        warning: "'==' coercion karta hai — hamesha '===' (strict equality) use karo jo type bhi check kare.",
      },
    ],
    mcqs: [
      { q: "const se declare variable ko kyun reassign nahi kar sakte?", options: ["Const immutable hoti hai completely", "Block scope hai", "Const binds the variable to the value — rebinding nahi ho sakta", "Runtime error aata hai sirf strict mode mein"], correct: 2, explain: "const variable binding ko lock karta hai. Objects ke liye const ka matlab hai reference change nahi ho sakta, lekin object ke properties change ho sakti hain." },
      { q: "typeof null kya return karta hai?", options: ["null", "undefined", "object", "boolean"], correct: 2, explain: "typeof null === 'object' ek famous JavaScript bug hai jo backwards compatibility ke liye fix nahi kiya gaya." },
      { q: "Kaunsi values JavaScript mein falsy hain?", options: ["0, '', null, undefined, NaN, false", "Sirf false aur null", "0, '', null", "Koi bhi empty value"], correct: 0, explain: "Exactly 6 falsy values hain: false, 0, '' (empty string), null, undefined, NaN." },
    ],
    cheatsheet: [
      "const name = val — immutable binding",
      "let name = val — mutable, block-scoped",
      "typeof val — type check karo",
      "Number(val) — number mein convert",
      "String(val) — string mein convert",
      "Boolean(val) — boolean mein convert",
      "parseInt('42px') — string se integer",
      "=== — strict equality (type + value)",
    ],
    revision: [
      "const > let > var — preference order",
      "7 primitives: string, number, boolean, null, undefined, symbol, bigint",
      "typeof null === 'object' — JS ka famous bug",
      "Falsy values: false, 0, '', null, undefined, NaN",
      "=== use karo, == se bachao (coercion hoti hai)",
    ],
  },
  {
    id: "js-functions",
    title: "Functions & Scope",
    emoji: "⚙️",
    category: "Basics",
    description: "Function declaration, expression, arrow functions, scope aur closures",
    sections: [
      {
        heading: "Function Declare Karne Ke Tarike",
        content: `JavaScript mein functions 3+ ways se define kar sakte hain:
- **Function Declaration** — hoisted, naam se call kar sakte ho pehle bhi
- **Function Expression** — variable mein store, not hoisted
- **Arrow Function** — ES6, concise syntax, apna \`this\` nahi hota`,
        code: `// 1. Function Declaration (hoisted)
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Ali"));  // works even before declaration!

// 2. Function Expression (not hoisted)
const multiply = function(a, b) {
  return a * b;
};

// 3. Arrow Function (modern, preferred)
const add = (a, b) => a + b;            // implicit return
const square = n => n * n;              // single param, no ()
const sayHi = () => console.log("Hi!"); // no params

// Default parameters
const greetUser = (name = "Guest") => \`Hello, \${name}!\`;
console.log(greetUser());       // "Hello, Guest!"
console.log(greetUser("Sara")); // "Hello, Sara!"`,
        language: "javascript",
      },
      {
        heading: "Scope — Variable kahan accessible hai?",
        content: `**Scope** decide karta hai ki variable kahan accessible hai:
- **Global Scope** — poore code mein
- **Function Scope** — sirf us function mein (var)
- **Block Scope** — sirf us block mein (let, const)
- **Lexical Scope** — inner functions outer scope access kar sakte hain`,
        code: `const globalVar = "I'm global";

function outer() {
  const outerVar = "I'm in outer";

  function inner() {
    const innerVar = "I'm in inner";
    console.log(globalVar); // ✅ global access
    console.log(outerVar);  // ✅ lexical scope
    console.log(innerVar);  // ✅ own scope
  }

  inner();
  // console.log(innerVar); // ❌ innerVar not accessible
}

// Block scope
{
  let blockLet = "block only";
  var blockVar = "leaks out!";
}
// console.log(blockLet); // ❌ Error
console.log(blockVar);    // ✅ var leaks!`,
        language: "javascript",
      },
      {
        heading: "Closures — Powerful Pattern",
        content: `**Closure** = ek function jo apne outer function ke variables ko yaad rakhta hai, even after outer function return ho jaaye.

Closure automatically ban jaata hai jab inner function outer scope ke variables use karta hai.`,
        code: `// Closure example — counter
function makeCounter() {
  let count = 0;  // private variable!

  return {
    increment: () => ++count,
    decrement: () => --count,
    value: () => count,
  };
}

const counter = makeCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.value());     // 1

// count variable bahar se directly accessible nahi!
// console.log(count); // ❌ ReferenceError

// Practical: memoization
function memoize(fn) {
  const cache = {};
  return (n) => cache[n] ?? (cache[n] = fn(n));
}`,
        language: "javascript",
        tip: "Closures se private state create kar sakte ho JS mein — yahi pattern React hooks bhi andar use karta hai!",
      },
    ],
    mcqs: [
      { q: "Arrow functions aur regular functions mein main difference kya hai?", options: ["Arrow functions faster hain", "Arrow functions ka apna 'this' nahi hota", "Arrow functions async nahi ho sakte", "Arrow functions parameters nahi le sakte"], correct: 1, explain: "Arrow functions lexically 'this' bind karte hain — apna 'this' context nahi banate. Isliye event handlers aur callbacks mein useful hain." },
      { q: "Closure kya hai?", options: ["Ek function jo return nahi karta", "Inner function jo outer scope variables yaad rakhta hai", "Global variable", "Async function"], correct: 1, explain: "Closure = inner function ka outer scope variables ko remember karna even after outer function execute ho jaaye." },
      { q: "Function declaration vs function expression mein hoisting ka fark?", options: ["Dono hoisted hain", "Dono hoisted nahi hain", "Declaration hoisted hai, expression nahi", "Expression hoisted hai, declaration nahi"], correct: 2, explain: "Function declarations puri tarah hoisted hoti hain — define hone se pehle call kar sakte ho. Expressions (const fn = function) hoist nahi hote." },
    ],
    cheatsheet: [
      "const fn = (a, b) => a + b — arrow function",
      "const fn = (a = 0) => a — default parameter",
      "...args — rest parameters (array collect karo)",
      "fn(...arr) — spread karo",
      "Closure = inner fn + outer variables",
      "IIFE: (function(){ ... })() — immediately invoke",
    ],
    revision: [
      "Arrow functions = concise + lexical this",
      "let/const = block scope, var = function scope",
      "Lexical scope = inner functions outer scope access karte hain",
      "Closure = outer variables yaad rakhna",
      "Default params: function greet(name = 'Guest')",
    ],
  },
  {
    id: "js-arrays",
    title: "Arrays & Array Methods",
    emoji: "📋",
    category: "Basics",
    description: "Arrays create karna, powerful built-in methods: map, filter, reduce, find, aur zyada",
    sections: [
      {
        heading: "Array Basics",
        content: `Array = ordered list of values.
- Zero-indexed: pehla element index 0 pe hai
- Mixed types ho sakti hain (not recommended)
- Dynamic size — JS arrays automatically resize hote hain`,
        code: `const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);      // "apple"
console.log(fruits.length);  // 3

// Add / Remove
fruits.push("orange");       // end mein add
fruits.pop();                // end se remove
fruits.unshift("grape");     // start mein add
fruits.shift();              // start se remove

// Slice (original change nahi hota)
const sliced = fruits.slice(1, 3);  // index 1 to 2

// Splice (modify in place)
fruits.splice(1, 1, "kiwi"); // index 1 pe 1 element hata ke "kiwi" daal do

// Destructuring
const [first, second, ...rest] = fruits;`,
        language: "javascript",
      },
      {
        heading: "Functional Array Methods (Most Important!)",
        content: `Ye methods original array ko change nahi karte — new array/value return karte hain:
- **map()** — har element transform karo, same length array return
- **filter()** — condition match karne wale elements return karo
- **reduce()** — sab elements ko ek value mein combine karo
- **find()** — pehla matching element return karo
- **some()** — koi ek match karta hai? true/false
- **every()** — sab match karte hain? true/false
- **forEach()** — sab pe kuch karo, nothing return`,
        code: `const numbers = [1, 2, 3, 4, 5, 6];

// map — transform
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10, 12]

// filter — conditions
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]

// reduce — accumulate
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 21

// find — pehla match
const firstBig = numbers.find(n => n > 3);
// 4

// some — koi ek > 5?
const hasLarge = numbers.some(n => n > 5);  // true

// every — sab > 0?
const allPositive = numbers.every(n => n > 0);  // true

// Chain karein!
const result = numbers
  .filter(n => n % 2 === 0)    // [2, 4, 6]
  .map(n => n * n)              // [4, 16, 36]
  .reduce((a, b) => a + b, 0); // 56`,
        language: "javascript",
        tip: "map, filter, reduce chain karo — functional style readable aur powerful hai!",
      },
      {
        heading: "Spread, Sort, aur Useful Methods",
        content: `Aur bhi important array methods:
- **spread (...)** — array copy/merge karo
- **sort()** — alphabetically ya custom sort
- **flat()** — nested arrays flatten karo
- **includes()** — element hai ki nahi
- **indexOf()** — element ka index`,
        code: `// Spread — copy aur merge
const a = [1, 2, 3];
const b = [4, 5, 6];
const merged = [...a, ...b];     // [1, 2, 3, 4, 5, 6]
const copy = [...a];             // shallow copy

// Sort (mutates original!)
const names = ["Zara", "Ali", "Bob"];
names.sort();  // alphabetical — ["Ali", "Bob", "Zara"]

// Number sort (custom comparator!)
const nums = [10, 1, 21, 2];
nums.sort((a, b) => a - b);  // [1, 2, 10, 21] ascending
nums.sort((a, b) => b - a);  // [21, 10, 2, 1] descending

// flat — nested flatten
const nested = [1, [2, 3], [4, [5, 6]]];
nested.flat();    // [1, 2, 3, 4, [5, 6]]
nested.flat(2);   // [1, 2, 3, 4, 5, 6]

// includes
[1,2,3].includes(2);  // true
["a","b"].includes("c"); // false`,
        language: "javascript",
      },
    ],
    mcqs: [
      { q: "map() aur forEach() mein kya fark hai?", options: ["map modifies original, forEach nahi karta", "map new array return karta hai, forEach kuch return nahi karta", "forEach faster hai", "Koi fark nahi"], correct: 1, explain: "map() ek new transformed array return karta hai. forEach() sirf side effects ke liye hai — kuch return nahi karta." },
      { q: "filter() kya return karta hai?", options: ["Original array modified", "Sirf pehla matching element", "Sab matching elements ka new array", "True ya false"], correct: 2, explain: "filter() ek new array return karta hai jisme sirf woh elements hain jo callback mein true return karte hain." },
      { q: "Array sort() numbers ke liye kaise karna chahiye?", options: ["arr.sort() directly", "arr.sort((a,b) => a - b)", "arr.sort(numeric)", "arr.sortNumbers()"], correct: 1, explain: "Default sort() strings ki tarah sort karta hai — 10 1 se pehle aata hai! Numbers ke liye (a,b) => a-b comparator zaroori hai." },
    ],
    cheatsheet: [
      "arr.push(el) — end mein add",
      "arr.pop() — end se remove",
      "arr.map(fn) — transform, new array",
      "arr.filter(fn) — filter, new array",
      "arr.reduce(fn, init) — single value",
      "arr.find(fn) — pehla match",
      "arr.includes(val) — boolean",
      "[...arr] — spread/copy",
      "arr.slice(from, to) — portion nikaalo",
    ],
    revision: [
      "map = transform, filter = select, reduce = accumulate",
      "forEach = side effects only, kuch return nahi",
      "sort() numbers ke liye custom comparator chahiye",
      "spread [...arr] = shallow copy",
      "flat() = nested arrays flatten karo",
    ],
  },
  {
    id: "js-objects",
    title: "Objects & Destructuring",
    emoji: "🗂️",
    category: "Basics",
    description: "Object literals, methods, destructuring, spread, aur JSON handling",
    sections: [
      {
        heading: "Objects — Key-Value Pairs",
        content: `Object = related data aur functions ka collection (key-value pairs).
- Keys hamesha strings hain (internally)
- Values kuch bhi ho sakti hain
- Methods = object ke andar functions`,
        code: `const user = {
  name: "Ali",
  age: 25,
  email: "ali@example.com",
  isActive: true,
  address: {              // nested object
    city: "Mumbai",
    country: "India",
  },
  greet() {               // method shorthand
    return \`Hi, I'm \${this.name}\`;
  },
};

// Access properties
console.log(user.name);          // dot notation
console.log(user["email"]);      // bracket notation (dynamic keys)
console.log(user.address.city);  // nested

// Add / update / delete
user.phone = "+91-9999999999";   // add
user.age = 26;                   // update
delete user.isActive;            // delete`,
        language: "javascript",
      },
      {
        heading: "Destructuring — Cleaner Code",
        content: `Destructuring se object ya array se values easily extract karo.
- Variable naming: same key name ya rename kar sakte ho
- Default values set kar sakte ho
- Nested destructuring bhi possible hai`,
        code: `const user = { name: "Ali", age: 25, city: "Mumbai" };

// Object destructuring
const { name, age } = user;
console.log(name, age); // "Ali" 25

// Rename
const { name: userName, age: userAge } = user;

// Default value
const { role = "user" } = user;  // role not in object → "user"

// Nested destructuring
const { address: { city } = {} } = user;

// Array destructuring
const [first, second, , fourth] = [10, 20, 30, 40];
console.log(first, second, fourth);  // 10 20 40

// Function params destructuring (very common!)
function displayUser({ name, age, role = "user" }) {
  console.log(\`\${name} (\${age}) — \${role}\`);
}
displayUser(user);`,
        language: "javascript",
      },
      {
        heading: "Spread, Object Methods, aur JSON",
        content: `Object ke saath useful operations:
- **Spread (...)** — copy/merge objects
- **Object.keys/values/entries()** — object iterate karo
- **JSON.stringify/parse()** — JSON conversion`,
        code: `const base = { name: "Ali", role: "user" };
const admin = { ...base, role: "admin", level: 5 };
// { name: "Ali", role: "admin", level: 5 }

// Object.keys, values, entries
const obj = { a: 1, b: 2, c: 3 };
Object.keys(obj);     // ["a", "b", "c"]
Object.values(obj);   // [1, 2, 3]
Object.entries(obj);  // [["a",1], ["b",2], ["c",3]]

// Iterate
Object.entries(obj).forEach(([key, value]) => {
  console.log(\`\${key}: \${value}\`);
});

// JSON
const json = JSON.stringify({ name: "Ali", age: 25 });
// '{"name":"Ali","age":25}'
const back = JSON.parse(json);
// { name: "Ali", age: 25 }

// Deep copy (simple)
const copy = JSON.parse(JSON.stringify(obj));`,
        language: "javascript",
        warning: "JSON.parse(JSON.stringify()) se deep copy hoti hai lekin functions, undefined, Date objects copy nahi hote!",
      },
    ],
    mcqs: [
      { q: "Object spread (...) kya karta hai?", options: ["Object delete karta hai", "Object ki properties copy/merge karta hai", "Object ko freeze karta hai", "Deep copy karta hai"], correct: 1, explain: "Spread operator object ki properties shallow copy karta hai. Nested objects reference copy hote hain, deep copy nahi." },
      { q: "const { name } = user; kya hai?", options: ["Function call", "Object destructuring", "Array method", "JSON parsing"], correct: 1, explain: "Object destructuring se user.name ki value directly name variable mein extract ho jaati hai." },
      { q: "JSON.stringify() kya karta hai?", options: ["JSON ko object mein convert", "Object ko JSON string mein convert", "JSON ko validate karta hai", "JSON ko delete karta hai"], correct: 1, explain: "JSON.stringify() JavaScript object ko JSON string mein convert karta hai (API calls ke liye useful)." },
    ],
    cheatsheet: [
      "const { key } = obj — destructure",
      "const { key: newName } = obj — rename",
      "const { key = default } = obj — default value",
      "{ ...obj } — shallow copy",
      "{ ...a, ...b } — merge objects",
      "Object.keys(obj) — keys array",
      "Object.entries(obj) — [key, val] pairs",
      "JSON.stringify(obj) — to JSON string",
      "JSON.parse(str) — to JS object",
    ],
    revision: [
      "Objects = key-value pairs, methods bhi ho sakte hain",
      "Destructuring = clean extraction from objects/arrays",
      "Spread = shallow copy/merge",
      "Object.entries() = forEach ke saath iterate karo",
      "JSON.stringify/parse = API communication aur deep copy",
    ],
  },
  {
    id: "js-dom",
    title: "DOM Manipulation",
    emoji: "🖥️",
    category: "Intermediate",
    description: "Document Object Model — HTML elements JS se select, modify, create karna",
    sections: [
      {
        heading: "DOM kya hai?",
        content: `DOM (Document Object Model) = browser ka HTML ka JavaScript-readable tree representation.
Jab browser HTML parse karta hai, DOM tree banata hai — har HTML element ek node hota hai.
JavaScript is tree ko read aur modify kar sakta hai — yahi interactivity ka base hai!`,
        diagram: `HTML Document
└── <html>
    ├── <head>
    │   └── <title>My Page</title>
    └── <body>
        ├── <h1 id="title">Hello</h1>
        └── <ul class="list">
            ├── <li>Item 1</li>
            └── <li>Item 2</li>`,
      },
      {
        heading: "Elements Select Karna",
        content: `DOM elements select karne ke modern aur old ways:
- **querySelector()** — CSS selector se pehla element (modern, use this)
- **querySelectorAll()** — sab matching elements (NodeList)
- **getElementById()** — id se (fast, specific)
- **getElementsByClassName()** — class se (old style)`,
        code: `// Modern (recommended)
const title = document.querySelector('#title');       // by ID
const btn = document.querySelector('.btn');           // by class
const input = document.querySelector('input[type=text]'); // attribute

const allItems = document.querySelectorAll('.item');  // NodeList
allItems.forEach(item => console.log(item.textContent));

// Old style (still common)
const header = document.getElementById('header');
const cards = document.getElementsByClassName('card'); // HTMLCollection

// Traversal
const parent = element.parentElement;
const children = element.children;
const next = element.nextElementSibling;`,
        language: "javascript",
      },
      {
        heading: "Elements Modify Karna",
        content: `Selected elements modify karne ke ways:
- **textContent** — plain text (safe)
- **innerHTML** — HTML string (XSS risk!)
- **classList** — classes add/remove/toggle
- **style** — inline styles
- **setAttribute/getAttribute** — attributes`,
        code: `const el = document.querySelector('#myDiv');

// Content
el.textContent = "New text";            // safe
el.innerHTML = "<strong>Bold</strong>"; // HTML parse hoga

// Classes
el.classList.add('active');
el.classList.remove('hidden');
el.classList.toggle('dark');            // add/remove toggle
el.classList.contains('active');        // true/false

// Styles
el.style.color = "red";
el.style.backgroundColor = "#f0f0f0";  // camelCase!
el.style.display = "none";             // hide

// Attributes
el.setAttribute('data-id', '42');
el.getAttribute('data-id');            // "42"
el.removeAttribute('disabled');

// Create and append
const newDiv = document.createElement('div');
newDiv.textContent = "New element";
newDiv.className = "card";
document.body.appendChild(newDiv);
// or: parent.insertBefore(newDiv, existingChild);`,
        language: "javascript",
        warning: "innerHTML use karte waqt user input directly mat dalo — XSS (Cross-site scripting) attack ho sakta hai! textContent safe hai.",
      },
    ],
    mcqs: [
      { q: "querySelector aur getElementById mein kya fark hai?", options: ["getElementById faster hai lekin sirf IDs ke liye, querySelector koi bhi CSS selector", "Dono same hain", "querySelector purana hai", "getElementById zyada powerful hai"], correct: 0, explain: "getElementById sirf ID se element dhundta hai (fast). querySelector koi bhi CSS selector use kar sakta hai — zyada flexible." },
      { q: "innerHTML use karne ka risk kya hai?", options: ["Slow performance", "XSS attack — user input directly inject mat karo", "Memory leak", "Events remove ho jaate hain"], correct: 1, explain: "innerHTML HTML parse karta hai — agar user input seedha daal do toh attacker malicious scripts inject kar sakta hai (XSS)." },
      { q: "classList.toggle() kya karta hai?", options: ["Sab classes remove karta hai", "Class add karta hai agar nahi hai, remove karta hai agar hai", "Class rename karta hai", "Sirf add karta hai"], correct: 1, explain: "toggle() = agar class hai toh remove, nahi hai toh add. Dark mode jaise features ke liye perfect!" },
    ],
    cheatsheet: [
      "document.querySelector(sel) — pehla match",
      "document.querySelectorAll(sel) — sab matches",
      "el.textContent = 'text' — safe text set",
      "el.innerHTML = '<b>html</b>' — HTML parse (XSS risk!)",
      "el.classList.add/remove/toggle('cls')",
      "el.style.property = 'value'",
      "document.createElement('tag') — new element",
      "parent.appendChild(el) — DOM mein add",
    ],
    revision: [
      "DOM = HTML ka JS-readable tree",
      "querySelector = CSS selector se element dhundho",
      "textContent = safe, innerHTML = XSS risk",
      "classList.add/remove/toggle = class management",
      "createElement + appendChild = dynamic content",
    ],
  },
  {
    id: "js-events",
    title: "Events & Event Handling",
    emoji: "🖱️",
    category: "Intermediate",
    description: "Click, input, submit events — addEventListener, event object, delegation",
    sections: [
      {
        heading: "Events kya hain?",
        content: `Events = user actions ya browser notifications:
- **Mouse:** click, dblclick, mouseover, mouseout, mousemove
- **Keyboard:** keydown, keyup, keypress
- **Form:** submit, input, change, focus, blur
- **Window:** load, resize, scroll, hashchange

Event handling ke 3 ways (addEventListener best hai):`,
        code: `const btn = document.querySelector('#btn');

// ❌ Old way (inline HTML) — avoid
// <button onclick="doSomething()">

// ❌ Old way (on-property) — only one listener!
btn.onclick = () => console.log("clicked");

// ✅ Modern way — multiple listeners possible!
btn.addEventListener('click', (event) => {
  console.log("Button clicked!", event);
});

// Remove listener
function handler() { console.log("once"); }
btn.addEventListener('click', handler);
btn.removeEventListener('click', handler); // same reference chahiye!`,
        language: "javascript",
      },
      {
        heading: "Event Object",
        content: `Har event handler ek **event object** receive karta hai:
- **event.target** — jis element pe event hua
- **event.currentTarget** — jis element pe listener laga hai
- **event.preventDefault()** — default browser action rok do
- **event.stopPropagation()** — bubbling rok do`,
        code: `// Form submit prevent karo
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();  // page reload nahi hoga!
  const data = new FormData(e.target);
  console.log(Object.fromEntries(data));
});

// Keyboard events
document.addEventListener('keydown', (e) => {
  console.log(e.key);    // "Enter", "a", "ArrowUp"
  console.log(e.code);   // "KeyA", "Enter"
  console.log(e.ctrlKey, e.shiftKey, e.altKey); // modifiers
  if (e.key === 'Escape') closeModal();
});

// Mouse position
document.addEventListener('mousemove', (e) => {
  console.log(e.clientX, e.clientY);  // viewport position
  console.log(e.pageX, e.pageY);      // page position
});`,
        language: "javascript",
      },
      {
        heading: "Event Delegation — Performance Pattern",
        content: `**Event Delegation** = parent pe ek listener lao, children ke events handle karo.
- 1000 items pe 1000 listeners lagana **bad** hai
- Parent pe ek listener lagao — **good**

event.target se decide karo konse child pe click hua.`,
        code: `// Bad — har item pe alag listener
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', handleClick);  // ❌ 100 listeners!
});

// Good — delegation (one listener on parent)
const list = document.querySelector('#list');
list.addEventListener('click', (e) => {
  const item = e.target.closest('.item');  // pehla matching ancestor
  if (!item) return;
  
  console.log('Clicked:', item.dataset.id);
  
  // Delete button check
  if (e.target.classList.contains('delete-btn')) {
    item.remove();
  }
});

// Naye dynamically added items bhi handle honge! 🎉

// Debounce — resize/scroll pe performance
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
window.addEventListener('resize', debounce(handleResize, 200));`,
        language: "javascript",
        tip: "Event delegation especially useful hai jab dynamically items add ho rahe hain — new items pe automatically listener kaam karta hai!",
      },
    ],
    mcqs: [
      { q: "event.preventDefault() kya karta hai?", options: ["Event propagation rokta hai", "Default browser action rokta hai (form submit, link navigate)", "Event listener remove karta hai", "Event object reset karta hai"], correct: 1, explain: "preventDefault() browser ka default behavior rokta hai — form submit pe page reload, anchor tag pe navigation, etc." },
      { q: "Event delegation kyun use karte hain?", options: ["Faster execution ke liye", "Ek parent listener se many children handle karo, dynamic items bhi", "Events reuse karne ke liye", "Error handling ke liye"], correct: 1, explain: "Delegation se performance better hoti hai (ek listener vs many) aur dynamically added elements bhi automatically handle hote hain." },
      { q: "addEventListener ka advantage onlick property pe?", options: ["Faster hai", "Multiple listeners same event pe add kar sakte hain", "Better browser support", "Less memory use"], correct: 1, explain: "addEventListener multiple listeners add kar sakta hai. onclick property se sirf ek listener ho sakta hai — naya set karne pe purana replace ho jaata hai." },
    ],
    cheatsheet: [
      "el.addEventListener('click', fn) — event listener",
      "e.preventDefault() — browser default rokna",
      "e.stopPropagation() — bubbling rokna",
      "e.target — click hua element",
      "e.currentTarget — listener wala element",
      "e.target.closest('.sel') — ancestor find karo",
      "debounce(fn, delay) — resize/scroll optimize karo",
    ],
    revision: [
      "addEventListener = multiple listeners, flexible",
      "event.target = actual clicked element",
      "preventDefault() = form reload, link navigate rokna",
      "Event delegation = parent pe listener, children handle",
      "Debounce = frequent events throttle karo",
    ],
  },
  {
    id: "js-es6",
    title: "ES6+ Modern Features",
    emoji: "✨",
    category: "Intermediate",
    description: "Template literals, optional chaining, nullish coalescing, modules, aur modern JS features",
    sections: [
      {
        heading: "Template Literals, Spread, Rest",
        content: `ES6 (2015) aur aage ke versions mein aaye powerful features:`,
        code: `// Template literals
const name = "Ali";
const age = 25;
const msg = \`Hello, \${name}! You are \${age} years old.\`;
// Multiline
const html = \`
  <div class="card">
    <h2>\${name}</h2>
    <p>Age: \${age}</p>
  </div>
\`;

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  // [1, 2, 3, 4, 5]
const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Rest parameters
function sum(...nums) {    // nums = array
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5);  // 15

// Short-circuit aur ternary
const result = isLoggedIn ? "Welcome" : "Please login";
const value = null || "default";  // "default"
const val2 = 0 || "fallback";     // "fallback" (0 falsy!)`,
        language: "javascript",
      },
      {
        heading: "Optional Chaining & Nullish Coalescing",
        content: `2020 mein aaye 2 bahut useful operators:
- **Optional chaining (?.)** — safely access nested properties
- **Nullish coalescing (??)** — only null/undefined pe fallback (0, '' not included)`,
        code: `const user = {
  name: "Ali",
  address: {
    city: "Mumbai"
  }
};

// Without optional chaining (verbose)
const city = user && user.address && user.address.city;

// With optional chaining ✅
const city2 = user?.address?.city;          // "Mumbai"
const zip = user?.address?.zipCode;         // undefined (no error!)
const phone = user?.phone?.number;          // undefined

// Methods bhi
const len = user?.getName?.();              // undefined if no method

// Arrays
const first = users?.[0]?.name;

// Nullish coalescing (??) vs OR (||)
const count = 0;
console.log(count || 10);   // 10 (0 is falsy!)
console.log(count ?? 10);   // 0 (?? only null/undefined)

const name2 = null ?? "Guest";   // "Guest"
const name3 = "" ?? "Guest";     // "" (?? doesn't treat "" as nullish)`,
        language: "javascript",
        tip: "?? use karo jab 0 ya empty string valid values hain. || sirf undefined/null check ke liye mat use karo.",
      },
      {
        heading: "ES Modules — import/export",
        content: `Modern JavaScript mein code modules mein organize karo:
- **Named exports** — multiple exports per file
- **Default export** — ek main export per file
- Browser mein \`type="module"\` attribute lagao`,
        code: `// math.js — named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// user.js — default export
export default class User {
  constructor(name) { this.name = name; }
  greet() { return \`Hi, I'm \${this.name}\`; }
}

// main.js — importing
import User from './user.js';              // default import
import { add, multiply, PI } from './math.js'; // named imports
import * as Math from './math.js';         // namespace import
import { add as addNumbers } from './math.js'; // rename

const u = new User("Ali");
console.log(u.greet());
console.log(add(2, 3));
console.log(Math.PI);`,
        language: "javascript",
      },
    ],
    mcqs: [
      { q: "?? (nullish coalescing) aur || (OR) mein kya fark hai?", options: ["Koi fark nahi", "?? sirf null/undefined pe fallback deta hai, || kisi bhi falsy pe", "|| zyada modern hai", "?? boolean ke liye, || strings ke liye"], correct: 1, explain: "|| ke liye 0, '', false bhi fallback trigger karte hain. ?? sirf null aur undefined ke liye fallback deta hai." },
      { q: "Optional chaining (?.) ka main faida kya hai?", options: ["Performance improvement", "Nested property access mein TypeError prevent karna", "Async operations ke liye", "Array access ke liye"], correct: 1, explain: "?. null/undefined property pe access karte waqt TypeError throw nahi karta — undefined return karta hai. Deep nested objects ke liye bahut useful." },
      { q: "ES module mein default export kaise import karte hain?", options: ["import { default } from 'file'", "import * from 'file'", "import MyName from 'file'", "require('file')"], correct: 2, explain: "Default export ko koi bhi naam de sakte ho import karte waqt — curly braces nahi lagte: import AnyName from './file'" },
    ],
    cheatsheet: [
      "`Hello ${name}` — template literal",
      "obj?.prop?.nested — optional chaining",
      "val ?? 'default' — nullish coalescing",
      "val || 'fallback' — OR (falsy pe fallback)",
      "export const fn = () => {} — named export",
      "export default MyClass — default export",
      "import Name from './file' — default import",
      "import { fn } from './file' — named import",
    ],
    revision: [
      "Template literals = backtick + ${} interpolation",
      "Optional chaining (?.) = safe nested access",
      "Nullish (??) = only null/undefined, not 0 or ''",
      "Named exports = curly braces, default = no braces",
      "Spread = copy/merge, Rest = collect into array",
    ],
  },
  {
    id: "js-async",
    title: "Promises & Async/Await",
    emoji: "⏳",
    category: "Intermediate",
    description: "Callbacks se Promises tak, async/await, fetch API se data lena",
    sections: [
      {
        heading: "Why Async? — Callbacks Problem",
        content: `JavaScript **single-threaded** hai — ek time pe ek kaam. Lekin network requests, file reads time lete hain.

**Async** = kaam start karo, complete hone ka wait mat karo — baaki code chalta rahe.

Pehle **callbacks** use hote the — but Callback Hell!`,
        code: `// Callback Hell — pyramid of doom ❌
getUser(userId, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      getLikes(comments[0].id, function(likes) {
        // 4 levels deep — unmanageable!
        console.log(likes);
      }, handleError);
    }, handleError);
  }, handleError);
}, handleError);

// Promises se same kaam ✅
getUser(userId)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => getLikes(comments[0].id))
  .then(likes => console.log(likes))
  .catch(handleError);  // ek hi catch!`,
        language: "javascript",
      },
      {
        heading: "Promises — Concept aur Usage",
        content: `Promise = future value ka representation. 3 states:
- **Pending** — still working
- **Fulfilled** — success (resolve)
- **Rejected** — failed (reject)`,
        code: `// Promise banana
const fetchData = (id) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (id > 0) resolve({ id, name: "Ali" });  // success
    else reject(new Error("Invalid ID"));        // failure
  }, 1000);
});

// Promise use karna
fetchData(1)
  .then(data => {
    console.log("Got:", data);
    return data.name;  // next .then ko pass
  })
  .then(name => console.log("Name:", name))
  .catch(err => console.error("Error:", err.message))
  .finally(() => console.log("Done — always runs!"));

// Parallel promises
Promise.all([fetchData(1), fetchData(2), fetchData(3)])
  .then(([u1, u2, u3]) => console.log(u1, u2, u3));
// Sab complete hone pe resolve

Promise.race([slow(), fast()])
  .then(first => console.log("First one:", first));
// Jo pehle complete ho`,
        language: "javascript",
      },
      {
        heading: "Async/Await — Clean Syntax",
        content: `**async/await** Promises ke upar syntactic sugar hai. Code synchronous jaisa dikhta hai lekin actually async hota hai.`,
        code: `// Async function declare karo
async function fetchUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Fetch failed:", error.message);
    throw error;  // re-throw agar caller handle kare
  }
}

// Use karo
async function main() {
  const user = await fetchUser(1);
  console.log(user.name);
  
  // Parallel — await Promise.all
  const [posts, comments] = await Promise.all([
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json()),
  ]);
  
  console.log(posts.length, comments.length);
}

main().catch(console.error);`,
        language: "javascript",
        tip: "Parallel async operations ke liye await Promise.all([...]) use karo — sequential await se kaam slow ho jaata hai!",
      },
    ],
    mcqs: [
      { q: "async function kya return karta hai?", options: ["Directly value", "Hamesha ek Promise", "undefined", "Error object"], correct: 1, explain: "Async functions hamesha Promise return karte hain. Return kiya value Promise.resolve(value) mein wrap ho jaata hai." },
      { q: "Promise.all() kab reject hoga?", options: ["Jab pehli promise reject ho", "Jab sab reject hon", "Jab 50% reject hon", "Kabhi nahi"], correct: 0, explain: "Promise.all() fast-fail hai — ek bhi promise reject ho toh poora Promise.all() reject ho jaata hai." },
      { q: "try/catch async/await ke saath kyun use karte hain?", options: ["Performance ke liye", "Async errors catch karne ke liye (.catch() ki tarah)", "Required syntax hai", "Multiple async ops ke liye"], correct: 1, explain: "await pe error aaye toh try/catch se handle karo — yahi .catch() ka async/await equivalent hai." },
    ],
    cheatsheet: [
      "async function fn() { await ... } — async func",
      "const val = await promise — wait for resolve",
      "try { await } catch(e) { } — error handling",
      "Promise.all([p1, p2]) — parallel, sab chahiye",
      "Promise.race([p1, p2]) — jo pehle complete ho",
      "Promise.allSettled([...]) — sab results chahiye",
      "fetch(url).then(r => r.json()) — HTTP request",
    ],
    revision: [
      "Promise = future value, 3 states: pending/fulfilled/rejected",
      "async/await = Promises ki clean syntax",
      "try/catch = async errors handle karo",
      "Promise.all = parallel execution",
      "await ke baad code async hone ke bawajood sync jaisa dikhta hai",
    ],
  },
  {
    id: "js-classes",
    title: "Classes & OOP in JavaScript",
    emoji: "🏗️",
    category: "Advanced",
    description: "ES6 Classes, inheritance, static methods, private fields, aur prototype chain",
    sections: [
      {
        heading: "ES6 Classes",
        content: `JavaScript mein OOP ES6 se class syntax aaya. Lekin internally ye prototype-based hai.
- **constructor()** — object create hone pe run hota hai
- **methods** — prototype pe define hote hain
- **static** — class pe, instance pe nahi`,
        code: `class Animal {
  #name;        // private field (ES2022)
  #sound;

  constructor(name, sound) {
    this.#name = name;
    this.#sound = sound;
    this.legs = 4;  // public property
  }

  speak() {
    return \`\${this.#name} says \${this.#sound}!\`;
  }

  get name() { return this.#name; }  // getter
  set name(val) {
    if (typeof val !== 'string') throw new Error('Must be string');
    this.#name = val;
  }

  static create(name, sound) {  // factory method
    return new Animal(name, sound);
  }
}

const dog = new Animal("Dog", "Woof");
console.log(dog.speak());      // "Dog says Woof!"
console.log(dog.name);         // getter
// console.log(dog.#name);     // ❌ Private!

const cat = Animal.create("Cat", "Meow");  // static`,
        language: "javascript",
      },
      {
        heading: "Inheritance — extends & super",
        content: `**extends** se class inherit karo. **super** se parent class access karo.`,
        code: `class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  describe() {
    return \`\${this.brand} going at \${this.speed}km/h\`;
  }
  toString() { return \`[\${this.brand}]\`; }
}

class Car extends Vehicle {
  constructor(brand, speed, doors) {
    super(brand, speed);  // parent constructor
    this.doors = doors;
  }
  
  // Override parent method
  describe() {
    return \`\${super.describe()} with \${this.doors} doors\`;
  }
}

class ElectricCar extends Car {
  constructor(brand, speed, doors, range) {
    super(brand, speed, doors);
    this.range = range;
  }
  describe() {
    return \`⚡ \${super.describe()}, range: \${this.range}km\`;
  }
}

const tesla = new ElectricCar("Tesla", 250, 4, 600);
console.log(tesla.describe());
console.log(tesla instanceof Car);      // true
console.log(tesla instanceof Vehicle);  // true`,
        language: "javascript",
        tip: "Child constructor mein this use karne se pehle super() call karna zaroori hai warna error aayega!",
      },
    ],
    mcqs: [
      { q: "Private class fields (#) kab available hue?", options: ["ES6 (2015)", "ES2018", "ES2022", "Always available"], correct: 2, explain: "Private fields (#) ES2022 mein officially available hue. Pehle _ prefix convention use hoti thi (not truly private)." },
      { q: "static method kaise call karte hain?", options: ["new ClassName().method()", "ClassName.method()", "this.method()", "super.method()"], correct: 1, explain: "Static methods class pe call hote hain, instance pe nahi: Animal.create() — instance.create() error dega." },
      { q: "super() child constructor mein kyun zaroori hai?", options: ["Parent methods access ke liye", "this initialize karne ke liye — super() ke baad this available", "Performance ke liye", "Optional hai always"], correct: 1, explain: "extends use karte waqt super() se parent constructor run hota hai jo this initialize karta hai. super() ke baad hi this use kar sakte ho." },
    ],
    cheatsheet: [
      "class Foo { } — class declaration",
      "constructor(params) { } — initialization",
      "#field — private field",
      "static method() { } — class method",
      "class Bar extends Foo — inheritance",
      "super(params) — parent constructor call",
      "super.method() — parent method call",
      "instanceof — type check",
    ],
    revision: [
      "JS classes = syntactic sugar over prototypes",
      "# prefix = private fields (ES2022)",
      "static = instance pe nahi, class pe call hota",
      "extends = inherit, super = parent access",
      "getter/setter = property-like method access",
    ],
  },
  {
    id: "js-storage",
    title: "Local Storage & Web APIs",
    emoji: "💾",
    category: "Advanced",
    description: "localStorage, sessionStorage, fetch API, aur useful browser APIs",
    sections: [
      {
        heading: "localStorage aur sessionStorage",
        content: `Browser mein data persist karne ke 2 Web Storage options:
- **localStorage** — tab/browser band karo phir bhi data rehta hai
- **sessionStorage** — tab band hone pe data delete
- Sirf strings store hoti hain — JSON.stringify/parse use karo
- ~5MB limit per origin`,
        code: `// localStorage — persist across sessions
localStorage.setItem('token', 'abc123');
localStorage.getItem('token');    // "abc123"
localStorage.removeItem('token');
localStorage.clear();             // sab delete

// Object store karna
const user = { name: "Ali", age: 25 };
localStorage.setItem('user', JSON.stringify(user));
const stored = JSON.parse(localStorage.getItem('user'));

// Helper functions (best practice)
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

// sessionStorage — same API, tab scope
sessionStorage.setItem('tempData', '{"step": 2}');`,
        language: "javascript",
      },
      {
        heading: "Fetch API — HTTP Requests",
        content: `Fetch API se server se data lo ya bhejo:`,
        code: `// GET request
async function getUsers() {
  const response = await fetch('/api/users');
  
  if (!response.ok) {
    throw new Error(\`HTTP \${response.status}\`);
  }
  
  return response.json();  // JSON parse karo
}

// POST request
async function createUser(userData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${localStorage.getItem('token')}\`,
    },
    body: JSON.stringify(userData),
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  
  return response.json();
}

// Usage
try {
  const user = await createUser({ name: "Ali", email: "ali@test.com" });
  saveToStorage('currentUser', user);
} catch (err) {
  console.error('Failed:', err.message);
}`,
        language: "javascript",
        tip: "fetch() network errors pe reject karta hai lekin 4xx/5xx status codes pe nahi! response.ok check karna zaroori hai.",
      },
    ],
    mcqs: [
      { q: "localStorage aur sessionStorage mein main fark?", options: ["Storage size", "localStorage persists browser close ke baad, sessionStorage nahi", "sessionStorage faster hai", "localStorage sirf strings support karta hai"], correct: 1, explain: "localStorage data permanently store karta hai (jab tak manually clear na karo). sessionStorage tab close hone pe delete ho jaata hai." },
      { q: "fetch() kab reject hota hai?", options: ["Jab server 404 return kare", "Jab server 500 return kare", "Sirf network failure pe (DNS, connection)", "Jab JSON invalid ho"], correct: 2, explain: "fetch() sirf network-level errors pe reject karta hai. 4xx aur 5xx responses fulfilled Promise return karte hain — response.ok manually check karo!" },
    ],
    cheatsheet: [
      "localStorage.setItem(key, JSON.stringify(val))",
      "JSON.parse(localStorage.getItem(key))",
      "localStorage.removeItem(key)",
      "fetch(url) — GET request",
      "fetch(url, {method:'POST', body:JSON.stringify(d), headers:{...}})",
      "response.ok — success check (status 200-299)",
      "response.json() — JSON parse (async)",
    ],
    revision: [
      "localStorage = persistent, sessionStorage = tab-scoped",
      "Hamesha JSON.stringify/parse use karo objects ke liye",
      "fetch() 4xx/5xx pe reject nahi karta — response.ok check karo",
      "Authorization header = 'Bearer ' + token",
      "Try/catch = fetch errors handle karo",
    ],
  },
];

export const jsInterviews: InterviewQ[] = [
  {
    id: 601,
    level: "Beginner" as const,
    tags: ["basics"],
    question: "var, let, const mein kya fark hai?",
    answer: `**var:**
- Function scope (block mein bhi accessible)
- Hoisted (declaration upar aati hai, undefined value ke saath)
- Re-declare kar sakte ho
- Modern JS mein avoid karo

**let:**
- Block scope
- Hoisted but not initialized (Temporal Dead Zone)
- Re-assign kar sakte ho, re-declare nahi
- Loops aur mutable variables ke liye

**const:**
- Block scope
- Hoisted but not initialized
- Re-assign nahi kar sakte (binding constant)
- Hamesha prefer karo jab reassign na ho

**Rule:** const by default, let agar reassign ho, var kabhi nahi.`,
    code: `var x = 1;
var x = 2;  // ✅ re-declare ok (bad!)

let y = 1;
// let y = 2; // ❌ SyntaxError

const z = {};
z.name = "Ali";  // ✅ object properties change ho sakte hain
// z = {};       // ❌ rebinding nahi`,
  },
  {
    id: 602,
    level: "Beginner" as const,
    tags: ["basics", "types"],
    question: "== aur === mein kya fark hai?",
    answer: `**== (Loose Equality):**
- Type coercion karta hai — types ko match karne ki koshish
- "5" == 5 → true (string convert hoti hai number mein)
- null == undefined → true
- Unexpected results de sakta hai

**=== (Strict Equality):**
- Type aur value dono check karta hai
- "5" === 5 → false (different types)
- No type conversion
- Hamesha === use karo

**Rule:** Hamesha === use karo unless specifically type coercion chahiye (rare case).`,
    code: `// == coercion examples (avoid!)
console.log(0 == false);   // true
console.log("" == false);  // true
console.log(null == undefined); // true
console.log(0 == "");      // true

// === strict (use this)
console.log(0 === false);  // false (different types)
console.log(1 === "1");    // false
console.log(null === undefined); // false`,
  },
  {
    id: 603,
    level: "Intermediate" as const,
    tags: ["concepts", "scope"],
    question: "Hoisting kya hai? Examples do.",
    answer: `Hoisting = JS engine declarations ko execution se pehle upar le jaata hai (conceptually).

**var hoisting:**
- Declaration hoisted hoti hai (undefined ke saath)
- Initialization nahi hoti

**function declaration hoisting:**
- Pura function hoisted hota hai — define hone se pehle call kar sakte ho

**let/const hoisting:**
- Hoisted hote hain lekin Temporal Dead Zone (TDZ) mein — use karne se pehle error

**Practical impact:** Function declarations hamesha call kar sakte ho file mein kahin bhi. var use mat karo — unexpected undefined values.`,
    code: `// var hoisting
console.log(x); // undefined (not error!)
var x = 5;
// Actually: var x; console.log(x); x = 5;

// Function declaration hoisted
sayHi(); // "Hi!" — works!
function sayHi() { console.log("Hi!"); }

// let — Temporal Dead Zone
// console.log(y); // ReferenceError!
let y = 10;

// Function expression NOT hoisted
// greet(); // TypeError: greet is not a function
const greet = () => "Hello";`,
  },
  {
    id: 604,
    level: "Intermediate" as const,
    tags: ["async", "events"],
    question: "Event Loop kaise kaam karta hai? Microtasks vs Macrotasks?",
    answer: `JavaScript single-threaded hai lekin async operations handle kar sakta hai Event Loop ki wajah se.

**Flow:**
1. Synchronous code → Call Stack mein run hota hai
2. Async operation (setTimeout, fetch) → Web APIs ko bhejo
3. Complete hone pe → Callback Queue (macrotask) ya Microtask Queue mein
4. Event Loop: Call Stack khali? → Pehle microtasks, phir macrotasks

**Microtasks (pehle run hote hain):**
- Promise .then/.catch/.finally
- queueMicrotask()
- MutationObserver

**Macrotasks (baad mein):**
- setTimeout, setInterval
- I/O operations
- UI rendering`,
    code: `console.log('1 - sync');

setTimeout(() => console.log('2 - macrotask'), 0);

Promise.resolve()
  .then(() => console.log('3 - microtask'))
  .then(() => console.log('4 - microtask 2'));

console.log('5 - sync');

// Output order: 1, 5, 3, 4, 2
// Sync → Microtasks → Macrotasks`,
  },
  {
    id: 605,
    level: "Intermediate" as const,
    tags: ["this", "scope"],
    question: "'this' keyword kaise kaam karta hai JavaScript mein?",
    answer: `'this' execution context pe depend karta hai — where aur how function call hua.

**Global context:** window (browser) ya global (Node)
**Object method:** object itself
**Constructor:** newly created object
**Arrow function:** enclosing scope ka 'this' (apna nahi)
**Event handler:** element jo event fire kiya
**Explicit binding:** call/apply/bind se set karo

**Common gotcha:** setTimeout ke andar 'this' lose ho jaata hai — arrow function use karo.`,
    code: `// Object method
const user = {
  name: "Ali",
  greet() { return this.name; },         // "Ali"
  greetArrow: () => this.name,           // undefined! (lexical this)
};

// Constructor
function User(name) { this.name = name; }
const u = new User("Ali");  // this = new object

// Arrow function — lexical this
class Timer {
  count = 0;
  start() {
    setInterval(() => {
      this.count++;  // ✅ lexical this — Timer instance
    }, 1000);
    // setInterval(function() { this.count } — ❌ this = window)
  }
}

// Explicit binding
function greet(greeting) { return \`\${greeting}, \${this.name}\`; }
greet.call({ name: "Ali" }, "Hello");   // "Hello, Ali"
greet.apply({ name: "Ali" }, ["Hi"]);  // "Hi, Ali"
const boundGreet = greet.bind({ name: "Ali" });`,
  },
  {
    id: 606,
    level: "Advanced" as const,
    tags: ["patterns", "advanced"],
    question: "Prototype chain kya hai? Explain karo.",
    answer: `JavaScript prototype-based inheritance use karta hai. Har object mein ek internal [[Prototype]] link hota hai.

**Chain kaise kaam karta hai:**
1. Property access hoti hai
2. Object pe nahi mili → prototype check karo
3. Prototype pe nahi mili → prototype ka prototype
4. null pe pahuncho → undefined

**Practical impact:**
- Array methods (map, filter) Array.prototype pe hain
- hasOwnProperty se khud ke vs inherited properties distinguish karo
- Classes internally prototypes use karti hain`,
    code: `const animal = { eat: true };
const dog = Object.create(animal);  // dog's prototype = animal
dog.bark = true;

console.log(dog.bark);          // true (own property)
console.log(dog.eat);           // true (from prototype!)
console.log(dog.fly);           // undefined (chain end)

dog.hasOwnProperty('bark');     // true
dog.hasOwnProperty('eat');      // false (inherited)

// Class uses prototypes internally
class Animal { speak() { } }
class Dog extends Animal { }

const d = new Dog();
// d.__proto__ === Dog.prototype
// Dog.prototype.__proto__ === Animal.prototype
// Animal.prototype.__proto__ === Object.prototype
// Object.prototype.__proto__ === null`,
  },
];
