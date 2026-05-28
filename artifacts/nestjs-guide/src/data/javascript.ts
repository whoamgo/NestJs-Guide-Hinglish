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
    id: "js-closures-deep",
    title: "Closures — Deep Theory",
    emoji: "🔒",
    category: "Deep Theory",
    description: "Lexical environments, closure applications, module pattern, currying, memoization — closure ka poora theory",
    sections: [
      {
        heading: "Lexical Environment — Closure ka Foundation",
        content: `Closure samajhne ke liye pehle **Lexical Environment** samajhna zaroori hai.

**Lexical Environment** = do cheezein:
1. **Environment Record** — is scope ke sabhi variables aur functions
2. **Outer Reference** — parent scope ka reference

Jab function execute hota hai, ek naya Lexical Environment create hota hai. Function apne outer environment ka reference hamesha **yaad rakhta hai** — yahi closure hai.

**Key insight:** Function jahan define hua hai, uska environment capture karta hai — jahan se call hua hai woh nahi.`,
        code: `// Lexical Environment visualization
function outer() {
  let x = 10;  // outer's Env Record: { x: 10 }

  function inner() {
    let y = 20;  // inner's Env Record: { y: 20 }
    // inner's outer ref → outer's Env Record
    console.log(x + y);  // 30 — x from outer env!
  }

  return inner;
}

const fn = outer();  // outer() returns, stack frame gone
fn();  // 30 — but x still accessible! Closure!

// ─── Why? ───────────────────────────────────────
// inner function has a [[Environment]] slot
// pointing to outer's env record
// As long as inner exists, outer's env record stays in memory

// Each call creates a NEW closure
function makeAdder(x) {
  return (y) => x + y;  // x captured in closure
}

const add5  = makeAdder(5);   // closure: { x: 5 }
const add10 = makeAdder(10);  // closure: { x: 10 }

console.log(add5(3));   // 8
console.log(add10(3));  // 13
// add5 aur add10 ka x alag hai — separate closures!`,
        language: "javascript",
        tip: "Closure = function + uska lexical environment (yaaddasht). Outer function return ho jaaye phir bhi captured variables live rehte hain.",
      },
      {
        heading: "Classic Closure Pitfall — Loop Problem",
        content: `Loops mein closures ek common pitfall create karte hain jo interviews mein zaroor poochha jaata hai.`,
        code: `// ❌ Classic Bug — var with closure in loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3  (NOT 0, 1, 2!)
// WHY? var is function-scoped — only ONE 'i' exists
// By the time callbacks run, loop ended, i = 3

// ✅ Fix 1 — let (block scope = new i per iteration)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2 ✓

// ✅ Fix 2 — IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(() => console.log(j), 100);
  })(i);  // i ka current value pass karo
}
// Output: 0, 1, 2 ✓

// ✅ Fix 3 — bind
for (var i = 0; i < 3; i++) {
  setTimeout(console.log.bind(null, i), 100);
}`,
        language: "javascript",
        warning: "var loop mein closure = classic bug. Hamesha let use karo loops mein. Interview mein zaroor explain karo yeh pitfall!",
      },
      {
        heading: "Closure Applications — Real Patterns",
        content: `Closures sirf theory nahi — real production code mein har jagah use hote hain:`,
        code: `// 1. DATA PRIVACY / ENCAPSULATION
function createBankAccount(initialBalance) {
  let balance = initialBalance;  // private!

  return {
    deposit: (amt) => { balance += amt; return balance; },
    withdraw: (amt) => {
      if (amt > balance) throw new Error("Insufficient funds");
      balance -= amt;
      return balance;
    },
    getBalance: () => balance,  // read-only access
  };
}

const account = createBankAccount(1000);
account.deposit(500);    // 1500
account.withdraw(200);   // 1300
// account.balance  // undefined — truly private!

// 2. PARTIAL APPLICATION
function multiply(x, y) { return x * y; }

function partial(fn, ...args) {
  return (...remainingArgs) => fn(...args, ...remainingArgs);
}

const double = partial(multiply, 2);
const triple = partial(multiply, 3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// 3. CURRYING — function jo ek ek argument lete hain
const curry = fn => {
  const arity = fn.length;
  return function curried(...args) {
    if (args.length >= arity) return fn(...args);
    return (...more) => curried(...args, ...more);
  };
};

const add = curry((a, b, c) => a + b + c);
add(1)(2)(3);   // 6
add(1, 2)(3);   // 6
add(1)(2, 3);   // 6

// 4. MEMOIZATION — expensive computation cache
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Cache hit!');
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  // simulate heavy computation
  return n * n * n;
});

expensiveCalc(5);  // computed: 125
expensiveCalc(5);  // Cache hit! 125`,
        language: "javascript",
        tip: "Closures = data privacy, partial application, currying, memoization. React useState hook internally bhi closure use karta hai!",
      },
    ],
    mcqs: [
      { q: "Closure mein kya capture hota hai?", options: ["Sirf variables ki values (snapshot)", "Variables ka reference (live binding)", "Function ka return value", "Global scope"], correct: 1, explain: "Closure variables ka reference capture karta hai, copy nahi. Isliye var loop bug hota hai — sab callbacks same 'i' reference share karte hain." },
      { q: "Memoization pattern mein closure ka kya role hai?", options: ["Function ko fast banata hai directly", "Cache object ko function ke saath private rakhta hai", "Recursion handle karta hai", "Async operations manage karta hai"], correct: 1, explain: "Memoize function mein cache Map closure ke through function ke saath privately associate rehti hai. Bahar se access nahi — encapsulation." },
      { q: "Currying kya hai?", options: ["Function multiple return values deta hai", "Function ko multiple arguments mein tod deta hai ek ek karke", "Async function pattern", "Error handling pattern"], correct: 1, explain: "Currying: f(a, b, c) ko f(a)(b)(c) mein transform karna. Partial application easy hoti hai — reusable specialized functions banao." },
    ],
    cheatsheet: [
      "Closure = function + uska captured lexical scope",
      "var loop bug → let use karo ya IIFE",
      "Partial application = fn ke kuch args pehle fix karo",
      "Currying = f(a,b,c) → f(a)(b)(c)",
      "Memoization = closure se private cache",
      "Data privacy = closure se private variables",
    ],
    revision: [
      "Lexical Environment = variables + outer reference",
      "Closure = outer function return ho jaaye, inner variables still alive",
      "var loop bug = shared reference, let = new binding per iteration",
      "Memoization = closure + cache = expensive compute optimize karo",
      "Currying + Partial Application = functional programming patterns",
    ],
  },
  {
    id: "js-prototypes-deep",
    title: "Prototypes & Prototype Chain",
    emoji: "⛓️",
    category: "Deep Theory",
    description: "JS ka actual inheritance mechanism — [[Prototype]], Object.create, constructor functions, prototype chain deep dive",
    sections: [
      {
        heading: "Prototype Chain — JS ka Actual Inheritance",
        content: `JavaScript mein classes actually **prototype-based** hai — class syntax sirf syntactic sugar hai.

Har object mein ek hidden **[[Prototype]]** slot hota hai jo ek aur object ko point karta hai. Property access pe JS pehle object mein dhundta hai, phir prototype mein, phir prototype ke prototype mein — yahan tak ki **null** milta hai.

**Chain:** object → Object.prototype → null

Ye chain hi "inheritance" implement karta hai JS mein.`,
        code: `// Every object has a [[Prototype]]
const obj = { name: "Ali" };

// obj.__proto__ === Object.prototype (access via __proto__)
// Better: Object.getPrototypeOf(obj) === Object.prototype

// Property lookup chain:
console.log(obj.name);        // "Ali" — own property ✓
console.log(obj.toString());  // "[object Object]" — from Object.prototype!
console.log(obj.missing);     // undefined — chain end (null)

// ─── Visualizing the chain ─────────────────────────
// obj           → Object.prototype → null
// { name:"Ali" }  { toString, hasOwnProperty, ... }

// hasOwnProperty — chain traverse nahi karta
obj.hasOwnProperty('name');     // true — own property
obj.hasOwnProperty('toString'); // false — inherited

// Object.create — explicitly prototype set karo
const animal = {
  speak() {
    return \`\${this.name} makes a sound\`;
  }
};

const dog = Object.create(animal);  // dog's [[Prototype]] = animal
dog.name = "Rex";
dog.bark = () => "Woof!";

console.log(dog.speak());  // "Rex makes a sound" — from animal!
console.log(dog.bark());   // "Woof!" — own method

// Chain: dog → animal → Object.prototype → null`,
        language: "javascript",
        tip: "__proto__ avoid karo in production — read-only access ke liye Object.getPrototypeOf(obj) use karo.",
      },
      {
        heading: "Constructor Functions — Classes se Pehle",
        content: `ES6 se pehle, inheritance **constructor functions** aur **prototype property** se hoti thi. Classes internally yahi karte hain.`,
        code: `// Constructor function (Pascal Case convention)
function Person(name, age) {
  // 'this' = naya object jo 'new' ne banaya
  this.name = name;
  this.age = age;
}

// Methods prototype pe daalo — memory efficient!
// (har instance ka apna copy nahi banta)
Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

Person.prototype.toString = function() {
  return \`Person(\${this.name}, \${this.age})\`;
};

const ali = new Person("Ali", 25);
const sara = new Person("Sara", 22);

ali.greet();   // "Hi, I'm Ali"
sara.greet();  // "Hi, I'm Sara"

// Dono instances SAME greet function share karte hain (memory efficient!)
ali.greet === sara.greet;  // true — same prototype method

// What 'new' does internally:
function myNew(Constructor, ...args) {
  // 1. Blank object banao
  const obj = Object.create(Constructor.prototype);
  // 2. Constructor call karo with this = new obj
  const result = Constructor.apply(obj, args);
  // 3. Return: if constructor returns object, that; else our obj
  return (typeof result === 'object' && result !== null) ? result : obj;
}

// Class vs Constructor Function — same thing!
class PersonClass {
  constructor(name) { this.name = name; }
  greet() { return \`Hi, I'm \${this.name}\`; }
}
// PersonClass.prototype.greet exists — same as above!
typeof PersonClass;  // "function" — classes ARE functions!`,
        language: "javascript",
      },
      {
        heading: "Prototype Inheritance — Chain Extend Karna",
        content: `Prototype chain extend karke inheritance implement karo:`,
        code: `// ─── Old way (ES5) ───────────────────────────────
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return \`\${this.name} makes a sound\`;
};

function Dog(name, breed) {
  Animal.call(this, name);  // "super()" equivalent
  this.breed = breed;
}

// Dog.prototype ko Animal.prototype se link karo
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;  // fix constructor reference

Dog.prototype.bark = function() {
  return "Woof!";
};

const rex = new Dog("Rex", "Lab");
rex.speak();  // "Rex makes a sound" — from Animal!
rex.bark();   // "Woof!" — from Dog
rex instanceof Dog;    // true
rex instanceof Animal; // true

// Chain: rex → Dog.prototype → Animal.prototype → Object.prototype → null

// ─── Modern way (ES6 Class) ── same under the hood ─
class AnimalClass {
  constructor(name) { this.name = name; }
  speak() { return \`\${this.name} makes a sound\`; }
}

class DogClass extends AnimalClass {
  constructor(name, breed) {
    super(name);         // Animal.call(this, name)
    this.breed = breed;
  }
  bark() { return "Woof!"; }
}

// Object.getPrototypeOf(DogClass.prototype) === AnimalClass.prototype ✓
// Classes just make this setup automatic!

// ─── Mixin Pattern — multiple inheritance ─────────
const Swimmer = {
  swim() { return \`\${this.name} is swimming\`; }
};
const Runner = {
  run() { return \`\${this.name} is running\`; }
};

// Mix into a class
class Athlete {
  constructor(name) { this.name = name; }
}
Object.assign(Athlete.prototype, Swimmer, Runner);

const athlete = new Athlete("Virat");
athlete.swim();  // "Virat is swimming"
athlete.run();   // "Virat is running"`,
        language: "javascript",
        tip: "Classes = syntactic sugar. Prototype chain samajhna important hai kyunki debugging mein prototype methods stack trace mein aate hain.",
      },
    ],
    mcqs: [
      { q: "Object.create(proto) kya karta hai?", options: ["Object copy karta hai", "Naya object banata hai jiska [[Prototype]] = proto", "proto ko delete karta hai", "Object freeze karta hai"], correct: 1, explain: "Object.create(proto) ek blank object banata hai jiska [[Prototype]] explicitly proto set hota hai. Yeh prototypal inheritance ka cleanest way hai." },
      { q: "new keyword internally kya karta hai?", options: ["Sirf object banata hai", "Object.create + constructor call + return", "Memory allocate karta hai sirf", "Class instantiate karta hai"], correct: 1, explain: "new karta hai: 1) Object.create(Constructor.prototype) 2) constructor call with this = new object 3) return new object (unless constructor returns object)." },
      { q: "Constructor function mein methods prototype pe kyun daalte hain?", options: ["Required syntax hai", "Memory efficiency — sab instances same method share karte hain", "Faster execution", "Private access ke liye"], correct: 1, explain: "Methods this.method = fn se define karo toh har instance ka apna copy banta hai. prototype.method se ek hi copy — sab instances share karte hain. Memory efficient!" },
    ],
    cheatsheet: [
      "Object.__proto__ / Object.getPrototypeOf(obj) — chain access",
      "Object.create(proto) — prototype set karke object banao",
      "Constructor.prototype.method = fn — shared methods",
      "new Constructor() → Object.create + call + return",
      "instanceof — chain mein check karo",
      "hasOwnProperty — apna vs inherited distinguish karo",
      "class = syntactic sugar over prototypes",
    ],
    revision: [
      "Every object has [[Prototype]] → chain ends at null",
      "Property lookup: own → prototype → prototype.prototype → null",
      "Object.create(proto) = explicit prototype set",
      "new keyword = create + constructor call + return",
      "Methods on prototype = memory efficient (shared)",
      "Classes = constructor functions + prototype chain (sugar)",
    ],
  },
  {
    id: "js-promises-deep",
    title: "Promises — Deep Dive",
    emoji: "🤝",
    category: "Deep Theory",
    description: "Promise states, chaining, error propagation, Promise combinators, async patterns — poori theory",
    sections: [
      {
        heading: "Promise States & Internal Mechanics",
        content: `Promise ek object hai jo future value represent karta hai. Internally **3 states** hain — sirf ek direction change hoti hai (irreversible).

**States:**
- **Pending** — initial state, result unknown
- **Fulfilled** — success, value available
- **Rejected** — failure, reason available

**Key property:** State change **ek baar** hoti hai — fulfilled se rejected nahi ho sakta. Yeh "settled" state hai.`,
        code: `// Promise create karna
const p = new Promise((resolve, reject) => {
  // Executor immediately run hota hai (synchronous!)
  console.log("Executor running");  // synchronous!

  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve({ data: "user info" });  // FULFILLED
    } else {
      reject(new Error("Failed to fetch"));  // REJECTED
    }
  }, 1000);
});

// ─── Internal state transitions ───────────────────
// Promise { <pending> }
// → resolve() called → Promise { <fulfilled>: value }
// → reject() called  → Promise { <rejected>: reason }
// (once settled, further resolve/reject calls ignored)

// .then() / .catch() / .finally() — handlers register karo
p.then(
  value => console.log("✅ Success:", value),    // fulfilled
  reason => console.log("❌ Error:", reason)      // rejected
);

// Better pattern — separate .catch()
p
  .then(value => console.log("✅ Success:", value))
  .catch(err => console.log("❌ Error:", err.message))
  .finally(() => console.log("🏁 Done — always runs"));

// Promise.resolve / Promise.reject — instant settled promises
const resolved = Promise.resolve(42);  // immediately fulfilled
const rejected = Promise.reject(new Error("oops")); // immediately rejected

// Don't forget to handle rejected!
rejected.catch(err => console.log(err.message));  // "oops"`,
        language: "javascript",
      },
      {
        heading: "Promise Chaining & Error Propagation",
        content: `**.then()** hamesha **naya Promise** return karta hai — isliye chain kar sakte ho. Error handling mein yeh behavior crucial hai.`,
        code: `// Each .then() returns a NEW promise
fetch('/api/user/1')
  .then(response => {
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    return response.json();          // returns value → next .then gets it
  })
  .then(user => {
    console.log(user.name);
    return fetch(\`/api/posts/\${user.id}\`);  // return promise → chains!
  })
  .then(res => res.json())
  .then(posts => console.log(posts.length))
  .catch(err => {
    // ANY error in the chain lands here!
    console.error("Something failed:", err.message);
  });

// ─── Error propagation rules ──────────────────────
Promise.resolve('start')
  .then(v => { throw new Error("step 2 failed!"); })  // throw
  .then(v => console.log("skip! (never runs)"))        // SKIPPED
  .then(v => console.log("also skip"))                 // SKIPPED
  .catch(err => {
    console.log("Caught:", err.message);  // "step 2 failed!"
    return "recovered";  // return value → fulfilled promise!
  })
  .then(v => console.log("Back to normal:", v));  // "Back to normal: recovered"

// ─── Returning vs not returning ───────────────────
// WRONG — fire and forget (chain breaks)
.then(user => {
  fetch('/api/log');  // NOT returned — chain won't wait!
  return user;
})

// CORRECT
.then(user => {
  return fetch('/api/log').then(() => user);  // wait, then pass user
})`,
        language: "javascript",
        tip: ".then() mein return karna crucial hai — return na karo toh chain undefined receive karta hai aur async operations ka wait nahi karta!",
      },
      {
        heading: "Promise Combinators — All Flavors",
        content: `4 Promise combinators hain — sab ka alag behavior hai. Interview mein differences zaroor poochhte hain.`,
        code: `const p1 = Promise.resolve(1);
const p2 = new Promise(res => setTimeout(() => res(2), 100));
const p3 = Promise.reject(new Error("p3 failed"));
const p4 = Promise.resolve(4);

// ─── 1. Promise.all([]) ───────────────────────────
// Sab fulfill hone pe resolve
// ANY reject → immediately reject (fast-fail)
Promise.all([p1, p2, p4])
  .then(([a, b, c]) => console.log(a, b, c));  // 1, 2, 4
  // (waits for slowest)

Promise.all([p1, p3, p4])
  .catch(err => console.log("all failed:", err.message));  // "p3 failed"

// ─── 2. Promise.allSettled([]) ───────────────────
// Sab settle hone pe resolve (koi fast-fail nahi)
// Result: [{status, value/reason}, ...]
Promise.allSettled([p1, p3, p4])
  .then(results => {
    results.forEach(r => {
      if (r.status === 'fulfilled') console.log("✅", r.value);
      else console.log("❌", r.reason.message);
    });
  });
// ✅ 1  ❌ p3 failed  ✅ 4

// ─── 3. Promise.race([]) ─────────────────────────
// Jo pehle settle ho (fulfilled ya rejected)
Promise.race([
  new Promise(res => setTimeout(() => res("slow"), 500)),
  new Promise(res => setTimeout(() => res("fast"), 100)),
])
.then(winner => console.log(winner));  // "fast"

// Timeout pattern
function withTimeout(promise, ms) {
  const timeout = new Promise((_, rej) =>
    setTimeout(() => rej(new Error("Timeout!")), ms)
  );
  return Promise.race([promise, timeout]);
}

// ─── 4. Promise.any([]) ──────────────────────────
// Pehla FULFILLED promise (rejects ignore karo)
// Sab reject hone pe → AggregateError
Promise.any([p3, p1, p4])
  .then(first => console.log("First success:", first));  // 1

// ─── Comparison summary ───────────────────────────
// all        — sab chahiye, ek fail = sab fail
// allSettled — sab ka result chahiye (win ya lose)
// race       — jo pehle settle ho (any state)
// any        — pehla success chahiye`,
        language: "javascript",
      },
    ],
    mcqs: [
      { q: "Promise.allSettled aur Promise.all mein main fark kya hai?", options: ["allSettled faster hai", "allSettled kabhi reject nahi hoti, sab results deti hai", "all zyada promises handle karta hai", "allSettled sirf fulfilled promises return karta hai"], correct: 1, explain: "Promise.all fast-fail karta hai — ek reject hone pe sab fail. Promise.allSettled sab settle hone ka wait karta hai aur har promise ka status+value/reason deta hai." },
      { q: ".then() mein return karna kyun zaroori hai?", options: ["Syntax requirement hai", "Chain ko next .then mein value pass karta hai aur async wait karta hai", "Error prevent karta hai", "Performance improve karta hai"], correct: 1, explain: "Return karo toh next .then ko value milti hai. Promise return karo toh chain us promise ke settle hone ka wait karta hai. Return na karo toh chain immediately undefined ke saath aage badh jaata hai." },
      { q: "Promise.any() kab reject hogi?", options: ["Jab pehla promise reject ho", "Jab majority reject hoon", "Jab sab promises reject hoon — AggregateError", "Kabhi nahi"], correct: 2, explain: "Promise.any() tab reject hoti hai jab sab input promises reject ho jaayein — AggregateError return karta hai sab reasons ke saath." },
    ],
    cheatsheet: [
      "new Promise((resolve, reject) => {}) — create",
      "Promise.resolve(val) / Promise.reject(err)",
      ".then(onFulfill, onReject) — handlers",
      ".catch(err => {}) — error handler",
      ".finally(() => {}) — always runs",
      "Promise.all — sab chahiye, fast-fail",
      "Promise.allSettled — sab results chahiye",
      "Promise.race — pehla settled",
      "Promise.any — pehla fulfilled",
    ],
    revision: [
      "3 states: pending → fulfilled / rejected (irreversible)",
      ".then() hamesha new Promise return karta hai — chaining possible",
      "Error chain mein travel karta hai pehle .catch() tak",
      "Promise.all = fast-fail, allSettled = all results, any = first win, race = first settled",
      "Async/await = Promise ki clean syntax, internally same",
    ],
  },
  {
    id: "js-es6-advanced",
    title: "ES6+ Advanced Features",
    emoji: "✨",
    category: "Deep Theory",
    description: "Optional chaining, nullish coalescing, generators, iterators, Symbol, WeakMap, Proxy — modern JS deep dive",
    sections: [
      {
        heading: "Optional Chaining, Nullish Coalescing & Logical Assignment",
        content: `Modern JS operators jo code cleaner aur safer banate hain:`,
        code: `// ─── Optional Chaining (?.) ──────────────────────
const user = {
  name: "Ali",
  address: {
    city: "Mumbai",
    // street: undefined
  }
};

// Without ?. — crash!
// user.address.street.name  // TypeError!

// With ?. — safely undefined
user?.address?.street?.name;      // undefined (no crash)
user?.phone?.number;               // undefined

// With arrays and methods
const users = [{ name: "Ali" }];
users?.[0]?.name;                  // "Ali"
users?.[5]?.name;                  // undefined
user.greet?.();                    // undefined (method may not exist)

// ─── Nullish Coalescing (??) ──────────────────────
// Only null/undefined ko replace karo (NOT 0, "", false)
const count = 0;
const name = "";

// || (OR) problem — falsy values bhi replace ho jaate hain
count || 10;   // 10 — WRONG! 0 valid hai
name || "Ali"; // "Ali" — WRONG! "" valid ho sakta hai

// ?? — only null/undefined
count ?? 10;   // 0 — CORRECT!
name ?? "Ali"; // "" — CORRECT!
null ?? "default";      // "default"
undefined ?? "default"; // "default"
0 ?? "default";         // 0

// ─── Logical Assignment ──────────────────────────
let a = null;
let b = 0;
let c = "hello";

// ??= — assign only if null/undefined
a ??= "default";    // a = "default"
b ??= "default";    // b = 0 (not null/undefined!)

// ||= — assign if falsy
b ||= 42;           // b = 42 (0 is falsy)
c ||= "other";      // c = "hello" (truthy, no change)

// &&= — assign if truthy
c &&= c.toUpperCase();  // c = "HELLO" (truthy)
a &&= "new";            // a = "default" (truthy after ??=)`,
        language: "javascript",
        tip: "?? vs || yaad rakho: ?? sirf null/undefined check karta hai. 0 ya '' valid values hain toh always ?? use karo.",
      },
      {
        heading: "Iterators & Generators",
        content: `**Iterators** = custom iteration protocol. **Generators** = lazy sequences jo on-demand values produce karte hain.`,
        code: `// ─── Iterator Protocol ───────────────────────────
// Iterable = object with Symbol.iterator method
// Iterator = object with .next() method → { value, done }

// Custom iterator — range
function range(start, end, step = 1) {
  return {
    [Symbol.iterator]() {  // makes it iterable!
      let current = start;
      return {
        next() {
          if (current <= end) {
            const value = current;
            current += step;
            return { value, done: false };
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
}

// Iterable objects work with for...of, spread, destructuring
for (const n of range(1, 5)) {
  console.log(n);  // 1, 2, 3, 4, 5
}

const arr = [...range(0, 10, 2)];  // [0, 2, 4, 6, 8, 10]
const [first, second] = range(1, 100);  // first=1, second=2

// ─── Generators — function* ───────────────────────
// yield = pause + return value
// next() = resume

function* numberGen() {
  console.log("Step 1");
  yield 1;
  console.log("Step 2");
  yield 2;
  console.log("Step 3");
  yield 3;
}

const gen = numberGen();
gen.next();  // logs "Step 1", returns { value: 1, done: false }
gen.next();  // logs "Step 2", returns { value: 2, done: false }
gen.next();  // logs "Step 3", returns { value: 3, done: false }
gen.next();  //               returns { value: undefined, done: true }

// Generators are lazy — values on demand!
function* infiniteCounter(start = 0) {
  while (true) {
    yield start++;  // infinite, but only computes when asked
  }
}

const counter = infiniteCounter(5);
counter.next().value;  // 5
counter.next().value;  // 6
// ...never ends but never crashes!

// Practical: async generators (for streaming data)
async function* streamUsers() {
  const pages = ['/api/users?page=1', '/api/users?page=2'];
  for (const url of pages) {
    const res = await fetch(url);
    yield await res.json();
  }
}

for await (const page of streamUsers()) {
  console.log(page.users);
}`,
        language: "javascript",
      },
      {
        heading: "Symbol, WeakMap, WeakSet & Proxy",
        content: `Advanced ES6+ features jo expert-level JS mein use hote hain:`,
        code: `// ─── Symbol — unique identifiers ─────────────────
const id1 = Symbol("id");
const id2 = Symbol("id");
id1 === id2;  // false! Hamesha unique

// Use case: Object ki hidden/private-like property
const _id = Symbol("_id");
const user = {
  name: "Ali",
  [_id]: "secret123",    // Symbol key
};

user[_id];  // "secret123"
Object.keys(user);   // ["name"] — Symbol hidden!
JSON.stringify(user);  // {"name":"Ali"} — Symbol excluded!

// Built-in symbols
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
[] instanceof MyArray;  // true (custom instanceof)

// ─── WeakMap — weak references ────────────────────
const weakMap = new WeakMap();  // keys must be objects!

let obj = { name: "Ali" };
weakMap.set(obj, { accessCount: 0 });

weakMap.get(obj).accessCount++;
weakMap.get(obj).accessCount++;
console.log(weakMap.get(obj));  // { accessCount: 2 }

// When obj is GC'd, WeakMap entry automatically removed!
obj = null;  // obj can be garbage collected now
// No memory leak — that's the point!

// Use case: private data for DOM elements
const cache = new WeakMap();
function getComputedData(element) {
  if (!cache.has(element)) {
    cache.set(element, heavyComputation(element));
  }
  return cache.get(element);
}

// ─── Proxy — meta-programming ─────────────────────
const handler = {
  get(target, prop) {
    console.log(\`Getting \${prop}\`);
    return prop in target ? target[prop] : \`No property \${prop}!\`;
  },
  set(target, prop, value) {
    if (typeof value !== 'string') throw new TypeError("Must be string!");
    target[prop] = value;
    return true;  // success
  }
};

const proxy = new Proxy({}, handler);
proxy.name = "Ali";  // set trap called
proxy.name;          // "Getting name" → "Ali"
proxy.missing;       // "Getting missing" → "No property missing!"
// proxy.age = 25;   // TypeError: Must be string!

// Reactive data (Vue.js ke andar similar logic hai!)`,
        language: "javascript",
        tip: "WeakMap DOM elements ke saath private data associate karne ke liye perfect hai — element remove hone pe memory automatically free hoti hai.",
      },
    ],
    mcqs: [
      { q: "?? (nullish coalescing) aur || (OR) mein kab fark padta hai?", options: ["Performance mein", "0 ya empty string pe — || replace karta hai, ?? nahi", "Syntax mein", "Async code mein"], correct: 1, explain: "|| falsy values pe fallback karta hai: 0, '', false, null, undefined. ?? sirf null/undefined pe. count ?? 10 → 0 rakhega; count || 10 → 10 kar dega (wrong for valid 0!)." },
      { q: "Generator function mein yield kya karta hai?", options: ["Function end karta hai", "Function pause karta hai aur value return karta hai, phir resume hota hai", "Async value await karta hai", "Error throw karta hai"], correct: 1, explain: "yield generator ko pause karta hai. .next() call pe resume. Lazy evaluation enable karta hai — infinite sequences possible without crashing." },
      { q: "Symbol keys object mein kyun use karte hain?", options: ["Performance ke liye", "Hidden/meta properties — Object.keys() mein nahi aate, JSON mein bhi nahi", "Type safety ke liye", "Memory saving ke liye"], correct: 1, explain: "Symbol keys Object.keys(), for...in, JSON.stringify() mein nahi aate. Private-like properties ya meta behavior (Symbol.iterator, Symbol.hasInstance) ke liye use hote hain." },
    ],
    cheatsheet: [
      "obj?.prop?.method?.() — optional chaining",
      "val ?? 'default' — null/undefined only fallback",
      "a ??= 'val' — assign if null/undefined",
      "Symbol('desc') — unique identifier, always different",
      "function* gen() { yield 1; yield 2; } — generator",
      "gen.next() → { value, done }",
      "new WeakMap() — weak refs, GC-friendly",
      "new Proxy(target, handler) — intercept operations",
    ],
    revision: [
      "?. — safe navigation, undefined on missing (no crash)",
      "?? — null/undefined fallback only (not 0, '', false)",
      "Symbol = guaranteed unique, hidden from Object.keys/JSON",
      "Generator = lazy sequence, yield = pause + return",
      "WeakMap = weak object keys, automatic GC on key removal",
      "Proxy = intercept object operations (get/set/delete)",
    ],
  },
  {
    id: "js-dom-deep",
    title: "DOM Manipulation — Deep Dive",
    emoji: "🌳",
    category: "Deep Theory",
    description: "DOM tree, querySelector, event system, bubbling/capturing, delegation, performance — poori theory",
    sections: [
      {
        heading: "DOM Tree & Efficient Selection",
        content: `**DOM (Document Object Model)** = HTML ka JavaScript representation. Browser HTML parse karke ek tree banata hai.

Best practices for DOM selection:
- **querySelector/querySelectorAll** — CSS selector syntax, most flexible
- **getElementById** — fastest for id-based lookup
- Cache DOM references — baar baar query mat karo`,
        code: `// DOM Selection — best practices
const btn = document.getElementById('submit-btn');  // fastest
const form = document.querySelector('#login-form'); // CSS selector
const inputs = document.querySelectorAll('.input-field'); // NodeList
const links = document.getElementsByTagName('a');  // HTMLCollection (live!)

// querySelectorAll returns STATIC NodeList
// getElementsByTagName returns LIVE HTMLCollection (updates automatically)

// ─── Cache DOM references ──────────────────────────
// ❌ BAD — DOM query har baar
function updateBad() {
  document.getElementById('counter').textContent++;  // query each time!
}

// ✅ GOOD — cache once
const counter = document.getElementById('counter');
function updateGood() {
  counter.textContent = parseInt(counter.textContent) + 1;
}

// ─── DOM Traversal ────────────────────────────────
const parent = document.querySelector('.container');
parent.children;           // direct element children (HTMLCollection)
parent.firstElementChild;  // first element child
parent.lastElementChild;   // last element child
parent.childNodes;         // all nodes (including text/comments!)

const child = document.querySelector('.item');
child.parentElement;       // direct parent
child.nextElementSibling;  // next sibling element
child.closest('.wrapper'); // nearest ancestor matching selector

// ─── Efficient DOM creation ───────────────────────
// ❌ BAD — innerHTML in loop (reparse + rerender each time)
items.forEach(item => {
  container.innerHTML += \`<div>\${item.name}</div>\`;
});

// ✅ GOOD — DocumentFragment (batch DOM insertion)
const fragment = document.createDocumentFragment();
items.forEach(item => {
  const div = document.createElement('div');
  div.textContent = item.name;  // safe! no XSS
  div.className = 'item';
  fragment.appendChild(div);
});
container.appendChild(fragment);  // ONE DOM update!`,
        language: "javascript",
      },
      {
        heading: "Event System — Bubbling, Capturing & Delegation",
        content: `JavaScript events 3 phases mein travel karte hain. Yeh samajhna event delegation ke liye critical hai.

**Event Flow (3 phases):**
1. **Capturing** — root se target tak (top → down)
2. **Target** — actual element pe event
3. **Bubbling** — target se root tak (bottom → up)

Default mein events **bubble** karte hain (capturing nahi).`,
        code: `// Event Propagation demonstration
document.querySelector('.outer').addEventListener('click', e => {
  console.log('outer — bubbling');
});
document.querySelector('.inner').addEventListener('click', e => {
  console.log('inner — bubbling');
});

// Click on .inner → logs: "inner", then "outer" (bubbling up!)

// ─── Capturing phase ─────────────────────────────
// 3rd argument true = capturing phase
document.querySelector('.outer').addEventListener('click', e => {
  console.log('outer — CAPTURING');  // runs BEFORE .inner
}, true);

// Full click on .inner:
// "outer — CAPTURING"  (phase 1: capture)
// "inner — bubbling"   (phase 2: target)
// "outer — bubbling"   (phase 3: bubble)

// ─── stopPropagation ─────────────────────────────
document.querySelector('.inner').addEventListener('click', e => {
  e.stopPropagation();  // bubble rok do!
  console.log('inner only');
});
// Click on .inner → only "inner only" (outer not triggered)

// preventDefault vs stopPropagation
link.addEventListener('click', e => {
  e.preventDefault();   // browser default stop (navigation stop)
  e.stopPropagation();  // bubble stop
});

// ─── EVENT DELEGATION — Performance Pattern ──────
// Instead of listener on EACH item, ONE listener on parent
// ❌ Bad — 1000 list items = 1000 listeners!
document.querySelectorAll('.todo-item').forEach(item => {
  item.addEventListener('click', handleClick);
});

// ✅ Good — ONE listener, delegation to children
document.querySelector('.todo-list').addEventListener('click', e => {
  const item = e.target.closest('.todo-item');
  if (!item) return;  // click on non-item area

  const action = e.target.dataset.action;  // data-action attribute

  if (action === 'complete') markComplete(item);
  if (action === 'delete') deleteItem(item);
});

// Works for DYNAMICALLY ADDED items too! (new items auto-handled)`,
        language: "javascript",
        tip: "Event delegation = performance + dynamic elements. Parent pe listener daalo, target.closest() se specific child find karo. React's synthetic events bhi delegation use karte hain!",
      },
      {
        heading: "DOM Performance & Modern APIs",
        content: `DOM manipulation slow ho sakta hai — reflows aur repaints costly hain. Modern APIs se performance improve karo.`,
        code: `// ─── Reflow vs Repaint ───────────────────────────
// Reflow (expensive!) = layout recalculate — width, height, position
// Repaint (cheaper) = visual update — color, background, visibility

// ❌ Layout thrashing — alternating read/write forces reflow each time
function badLayout() {
  elements.forEach(el => {
    const width = el.offsetWidth;  // READ — triggers reflow
    el.style.width = width + 10 + 'px';  // WRITE — invalidates layout
    // Next iteration: READ forces reflow again!
  });
}

// ✅ Batch reads, then batch writes
function goodLayout() {
  const widths = elements.map(el => el.offsetWidth);  // all READS first
  elements.forEach((el, i) => {
    el.style.width = widths[i] + 10 + 'px';  // all WRITES after
  });
}

// ─── requestAnimationFrame — smooth animations ────
function animateBox(element) {
  let position = 0;
  function frame() {
    position += 2;
    element.style.left = position + 'px';
    if (position < 200) {
      requestAnimationFrame(frame);  // next paint pe run karo
    }
  }
  requestAnimationFrame(frame);
}

// ─── IntersectionObserver — lazy loading ─────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;  // load image when visible
      observer.unobserve(img);    // one-time load
    }
  });
}, { threshold: 0.1 });  // 10% visible hone pe trigger

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});

// ─── MutationObserver — DOM changes watch karo ───
const mutationObserver = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    console.log('DOM changed:', mutation.type);
  });
});

mutationObserver.observe(document.body, {
  childList: true,   // direct children changes
  subtree: true,     // all descendants
  attributes: true,  // attribute changes
});`,
        language: "javascript",
      },
    ],
    mcqs: [
      { q: "Event delegation kyon use karte hain?", options: ["Events faster hote hain", "Dynamic elements handle + kam listeners = better performance", "Capturing phase enable karne ke liye", "stopPropagation ke liye"], correct: 1, explain: "Event delegation: parent pe ek listener = hundreds of children handle karo. Dynamic elements (baad mein add hone wale) automatically handle hote hain. Memory aur performance efficient." },
      { q: "Event bubbling kya hai?", options: ["Event target element se root tak travel karta hai", "Event root se target tak travel karta hai", "Event sirf target pe fire hota hai", "Async events handle karna"], correct: 0, explain: "Bubbling = target se upar parent → parent.parent → document.body → document → window. stopPropagation() se rokate hain." },
      { q: "Layout thrashing kyun avoid karna chahiye?", options: ["JavaScript slow ho jaata hai", "CSS apply nahi hota", "Read/write alternate karne se browser baar baar layout recalculate karta hai — costly!", "Events fire nahi hote"], correct: 2, explain: "Alternating DOM reads (offsetWidth) aur writes (style change) se browser har iteration pe layout recalculate (reflow) karta hai. Batch karo: pehle sab reads, phir sab writes." },
    ],
    cheatsheet: [
      "document.querySelector('#id .class') — CSS selector",
      "element.closest('.selector') — nearest ancestor",
      "addEventListener('click', fn) — event listener add",
      "e.target — actual clicked element",
      "e.currentTarget — element listener is on",
      "e.stopPropagation() — bubbling rok do",
      "e.preventDefault() — browser default rok do",
      "createDocumentFragment() — batch DOM insert",
      "requestAnimationFrame(fn) — smooth animation",
      "new IntersectionObserver(fn) — lazy load",
    ],
    revision: [
      "DOM = HTML ka tree representation in memory",
      "3 phases: capture (down) → target → bubble (up)",
      "Event delegation = parent listener → children handle",
      "Layout thrashing = read+write mix → expensive reflows",
      "Batch DOM changes with DocumentFragment",
      "IntersectionObserver = lazy loading (visibility check)",
      "requestAnimationFrame = smooth 60fps animations",
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
  {
    id: "js-dates",
    title: "JavaScript Dates",
    titleEn: "JavaScript Dates",
    emoji: "📅",
    category: "Beginner",
    description: "Date object, date create karna, methods, formatting, aur date calculations JavaScript mein",
    descriptionEn: "Date object, creating dates, methods, formatting, and date calculations in JavaScript",
    sections: [
      {
        heading: "Date Object — Create aur Access",
        content: `**Date object** = JavaScript mein date aur time represent karta hai — milliseconds since Jan 1, 1970 (Unix epoch) mein internally store hota hai.

**4 ways to create Date:**`,
        code: `// 4 ways to create a Date
const now = new Date();                        // current date + time
const fromMs = new Date(0);                    // Jan 1, 1970 UTC
const fromStr = new Date("2024-08-15");        // string se
const fromParts = new Date(2024, 7, 15, 10, 30, 0); // year, month(0-indexed!), day, h, m, s

// ⚠️ Month is 0-indexed! January = 0, December = 11
new Date(2024, 0, 1);   // January 1, 2024
new Date(2024, 11, 31); // December 31, 2024

// Get methods
const d = new Date();
d.getFullYear()    // 2024
d.getMonth()       // 0-11 (0 = January)
d.getDate()        // 1-31 (day of month)
d.getDay()         // 0-6 (0 = Sunday, 1 = Monday...)
d.getHours()       // 0-23
d.getMinutes()     // 0-59
d.getSeconds()     // 0-59
d.getMilliseconds()// 0-999
d.getTime()        // milliseconds since epoch

// Set methods
const d2 = new Date();
d2.setFullYear(2025);
d2.setMonth(5);    // June
d2.setDate(15);
d2.setHours(10, 30, 0); // hours, minutes, seconds

// Quick timestamp
Date.now()         // current timestamp (ms) — no new Date() needed
+new Date()        // same — unary + converts to number`,
        language: "javascript",
      },
      {
        heading: "Date Formatting aur Calculations",
        content: `**Built-in formatting:** \`toLocaleDateString()\`, \`toLocaleTimeString()\`, \`toISOString()\`

**Date math:** Timestamps subtract/add karo — milliseconds mein.`,
        code: `const d = new Date("2024-08-15T10:30:00");

// Built-in string methods
d.toString()           // "Thu Aug 15 2024 10:30:00 GMT+0500"
d.toDateString()       // "Thu Aug 15 2024"
d.toTimeString()       // "10:30:00 GMT+0500"
d.toISOString()        // "2024-08-15T05:30:00.000Z" (UTC)
d.toLocaleDateString() // "8/15/2024" (locale dependent)
d.toLocaleTimeString() // "10:30:00 AM"

// Intl.DateTimeFormat — proper localization
const formatter = new Intl.DateTimeFormat('en-PK', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  hour: '2-digit',
  minute: '2-digit',
});
formatter.format(d);   // "Thursday, August 15, 2024 at 10:30 AM"

// Urdu locale
new Intl.DateTimeFormat('ur-PK').format(d);

// Custom format — manual
function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // +1!
  const yyyy = date.getFullYear();
  return \`\${dd}/\${mm}/\${yyyy}\`;  // "15/08/2024"
}

// Date calculations
const start = new Date("2024-01-01");
const end = new Date("2024-12-31");
const diffMs = end - start;                    // difference in ms
const diffDays = diffMs / (1000 * 60 * 60 * 24); // convert to days
console.log(\`\${diffDays} days between dates\`); // 365

// Add days to date
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
const nextWeek = addDays(new Date(), 7);

// Days until a date
function daysUntil(targetDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);  // midnight pe set karo
  const diff = new Date(targetDate) - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
console.log(\`\${daysUntil("2024-12-31")} days until New Year!\`);

// Compare dates
const d1 = new Date("2024-01-15");
const d2 = new Date("2024-03-20");
d1 < d2   // true — d1 is earlier
d1 > d2   // false
d1.getTime() === d2.getTime()  // strict equality check`,
        language: "javascript",
        tip: "Dates ke saath kaam karte waqt timezone bahut important hai! new Date('2024-08-15') midnight UTC se create hota hai — timezone se alag ho sakta hai. Production apps mein dayjs ya date-fns library use karo.",
      },
    ],
    mcqs: [
      {
        q: "new Date(2024, 1, 1) mein month 1 ka matlab kya hai?",
        options: ["January", "February", "March", "Invalid"],
        correct: 1,
        explain: "JavaScript mein months 0-indexed hain — 0=January, 1=February... 11=December. Bahut common mistake hai yeh!",
      },
    ],
    cheatsheet: [
      "new Date() — current date/time",
      "getFullYear(), getMonth() (0-indexed!), getDate()",
      "getDay() — 0=Sunday, 6=Saturday",
      "toISOString() — '2024-08-15T10:30:00.000Z'",
      "date1 - date2 — difference in milliseconds",
      "Date.now() — current timestamp (ms)",
      "Intl.DateTimeFormat — proper locale formatting",
    ],
    revision: [
      "Month 0-indexed — January = 0, December = 11",
      "getDate() = day of month, getDay() = day of week",
      "toISOString() = UTC format",
      "Date math = timestamps subtract karo",
      "Intl.DateTimeFormat = locale-aware formatting",
    ],
  },
  {
    id: "js-json",
    title: "JSON Methods",
    titleEn: "JSON Methods",
    emoji: "📋",
    category: "Beginner",
    description: "JSON.parse(), JSON.stringify(), nested data handle karna, error handling, aur API data ke saath kaam karna",
    descriptionEn: "JSON.parse(), JSON.stringify(), handling nested data, error handling, and working with API data",
    sections: [
      {
        heading: "JSON.stringify() — JS to JSON",
        content: `**JSON.stringify()** = JavaScript object/array → JSON string.

**Parameters:** \`JSON.stringify(value, replacer, space)\`
- **replacer:** Keys filter karo ya values transform karo
- **space:** Indentation for pretty printing`,
        code: `// Basic stringify
const user = {
  name: "Ali Khan",
  age: 25,
  skills: ["JavaScript", "Python"],
  address: { city: "Lahore", country: "Pakistan" },
  active: true,
  score: null,
};

const jsonStr = JSON.stringify(user);
// '{"name":"Ali Khan","age":25,"skills":["JavaScript","Python"],...}'

// Pretty print — indent = 2 spaces
const pretty = JSON.stringify(user, null, 2);
console.log(pretty);
// {
//   "name": "Ali Khan",
//   "age": 25,
//   ...
// }

// Replacer — specific keys rakhho (whitelist)
JSON.stringify(user, ['name', 'age']);
// '{"name":"Ali Khan","age":25}'

// Replacer function — values transform karo
JSON.stringify(user, (key, value) => {
  if (key === 'age') return undefined;  // age remove karo
  if (typeof value === 'number') return value * 2;
  return value;
});

// Type conversions in JSON
JSON.stringify({
  fn: function() {},    // undefined — removed!
  sym: Symbol('x'),     // undefined — removed!
  undef: undefined,     // undefined — removed!
  nan: NaN,             // null
  inf: Infinity,        // null
  date: new Date(),     // string (ISO format)
  regex: /abc/,         // {} (empty object!)
});

// toJSON() — custom serialization
class User {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  toJSON() {
    return { name: this.name }; // password serialize nahi hogi!
  }
}
JSON.stringify(new User("Ali", "secret123"));
// '{"name":"Ali"}' — password gone!`,
        language: "javascript",
      },
      {
        heading: "JSON.parse() — JSON to JS",
        content: `**JSON.parse()** = JSON string → JavaScript object/array.

**Reviver:** Values transform karo parse ke waqt (opposite of replacer).

**Error handling:** Invalid JSON = SyntaxError — hamesha try/catch use karo!`,
        code: `// Basic parse
const jsonStr = '{"name":"Ali","age":25,"skills":["JS","Python"]}';
const user = JSON.parse(jsonStr);
console.log(user.name);        // "Ali"
console.log(user.skills[0]);   // "JS"

// Nested objects bhi parse hote hain
const data = JSON.parse('{"user":{"id":1,"name":"Ali"},"posts":[1,2,3]}');
data.user.name;    // "Ali"
data.posts.length; // 3

// Reviver — values transform karo while parsing
const withDates = JSON.parse(
  '{"name":"Ali","createdAt":"2024-01-15T10:30:00.000Z"}',
  (key, value) => {
    // Date strings ko Date objects mein convert karo
    if (key === 'createdAt') return new Date(value);
    return value;
  }
);
console.log(withDates.createdAt instanceof Date); // true!
console.log(withDates.createdAt.getFullYear());   // 2024

// Error handling — MUST use try/catch!
function safeParseJSON(str) {
  try {
    return { data: JSON.parse(str), error: null };
  } catch (e) {
    return { data: null, error: e.message };
  }
}

const { data, error } = safeParseJSON('{"invalid": json}');
// error: "Unexpected token j in JSON at position 12"

// Deep clone using JSON (simple objects ke liye)
const original = { a: 1, b: { c: 2 }, d: [1, 2, 3] };
const clone = JSON.parse(JSON.stringify(original)); // deep copy!
clone.b.c = 999;
console.log(original.b.c); // 2 — original unchanged!

// Limitations of JSON clone:
// ❌ Functions, undefined, Symbol, Date → lost/changed
// ❌ Circular references → error
// ✅ Use structuredClone() for better deep clone (modern browsers)
const betterClone = structuredClone(original);

// Real-world: API response handle karo
async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  if (!response.ok) throw new Error(\`HTTP \${response.status}\`);

  // response.json() internally JSON.parse() karta hai
  const user = await response.json();
  return user;
}

// localStorage ke saath JSON
localStorage.setItem('cart', JSON.stringify([{id:1, qty:2}]));
const cart = JSON.parse(localStorage.getItem('cart') || '[]');`,
        language: "javascript",
        tip: "JSON.parse() hamesha try/catch mein wrap karo — invalid JSON pe SyntaxError throw hoti hai. User input ya external API data kabhi bhi corrupt ho sakta hai. response.json() bhi internally JSON.parse() karta hai — yeh bhi fail ho sakta hai!",
      },
      {
        heading: "JSON — Common Patterns aur Tips",
        content: `**JSON valid types:** string, number, boolean, null, array, object — Functions/undefined/Symbol allowed nahi!

**Common use cases:** API responses, localStorage, config files, data transfer.`,
        code: `// JSON valid types sirf:
// string, number, boolean, null, array, object
'{"valid": true}'                           // ✓
'{"str": "hello", "num": 42, "arr": [1,2]}'// ✓
'{"fn": function(){}}' // ✗ INVALID JSON

// Check if string is valid JSON
function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

// Safely get nested value (optional chaining)
const data = JSON.parse(apiResponse);
const city = data?.user?.address?.city ?? 'Unknown';

// API response normalize karo
function normalizeUser(apiUser) {
  return {
    id: apiUser.id,
    name: \`\${apiUser.first_name} \${apiUser.last_name}\`,
    email: apiUser.email_address,
    createdAt: new Date(apiUser.created_at),
    isActive: apiUser.status === 'active',
  };
}

// Batch API calls + JSON
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
]);

// JSON Schema validation (basic)
function validateUser(obj) {
  const required = ['name', 'email', 'age'];
  for (const field of required) {
    if (!(field in obj)) throw new Error(\`Missing field: \${field}\`);
  }
  if (typeof obj.age !== 'number') throw new Error('age must be number');
  if (!obj.email.includes('@')) throw new Error('Invalid email');
  return true;
}

// Config file pattern
const config = JSON.parse(
  document.getElementById('app-config')?.textContent || '{}'
);`,
        language: "javascript",
      },
    ],
    mcqs: [
      {
        q: "JSON.stringify() undefined values ke saath kya karta hai?",
        options: ["'undefined' string mein convert karta hai", "null mein convert karta hai", "Object se remove kar deta hai", "Error throw karta hai"],
        correct: 2,
        explain: "JSON.stringify() object properties ko remove kar deta hai jab value undefined, Function, ya Symbol ho. Array mein undefined ko null mein convert karta hai.",
      },
      {
        q: "JSON.parse() invalid JSON string pe kya return karta hai?",
        options: ["null", "undefined", "SyntaxError throw karta hai", "Empty object {}"],
        correct: 2,
        explain: "Invalid JSON pe JSON.parse() SyntaxError throw karta hai. Isliye hamesha try/catch use karna zaroori hai user input ya external data ke saath.",
      },
    ],
    cheatsheet: [
      "JSON.stringify(obj, null, 2) — pretty print",
      "JSON.parse(str) — JSON to JS object",
      "Try/catch — hamesha JSON.parse wrap karo",
      "response.json() — fetch API ka JSON parse",
      "JSON.parse(JSON.stringify(obj)) — basic deep clone",
      "structuredClone(obj) — better deep clone",
      "toJSON() method — custom serialization",
    ],
    revision: [
      "JSON types: string, number, boolean, null, array, object only",
      "undefined/Function/Symbol = stringify mein remove ho jaate hain",
      "JSON.parse() SyntaxError throw karta hai — try/catch use karo",
      "response.json() = async JSON parse",
      "localStorage = hamesha stringify/parse karo",
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
    id: 607,
    level: "Intermediate" as const,
    tags: ["scope", "closures"],
    question: "Closure kya hai? Real-world example do.",
    answer: `Closure = function + uska lexical environment. Jab inner function outer function ke variables ko yaad rakhta hai even after outer function return ho jaaye.

**Kaise kaam karta hai:**
Outer function execute hoti hai, return ho jaati hai, lekin inner function uske variables ka reference hold karta hai.

**Real-world uses:**
- Private variables (data encapsulation)
- Factory functions
- Memoization
- Event handlers with captured state`,
    code: `// Counter example
function makeCounter() {
  let count = 0;           // outer variable
  return {
    increment: () => ++count,  // closure over 'count'
    decrement: () => --count,
    get: () => count,
  };
}

const c1 = makeCounter();
const c2 = makeCounter();   // separate instance!
c1.increment(); // 1
c1.increment(); // 2
c2.increment(); // 1 (independent)

// Private variable pattern
function createUser(name) {
  let _password = null;  // truly private!
  return {
    getName: () => name,
    setPassword: (p) => { _password = p; },
    checkPassword: (p) => _password === p,
  };
}`,
  },
  {
    id: 608,
    level: "Intermediate" as const,
    tags: ["async", "promises"],
    question: "Promise kya hai? .then/.catch/.finally explain karo.",
    answer: `Promise = asynchronous operation ka future result represent karta hai. 3 states: pending, fulfilled, rejected.

**Methods:**
- **.then(onFulfilled)** — success pe run hota hai, new Promise return karta hai
- **.catch(onRejected)** — error pe run hota hai
- **.finally(fn)** — success ya failure dono pe run hota hai (cleanup)

**Promise combinators:**
- **Promise.all()** — sab resolve hone ka wait karo (koi ek fail → all fail)
- **Promise.allSettled()** — sab settle hone ka wait karo (fail bhi include)
- **Promise.race()** — pehla settle hone wala return karo
- **Promise.any()** — pehla resolve hone wala return karo`,
    code: `// Basic promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("done!"), 1000);
});

p.then(val => console.log(val))   // "done!"
 .catch(err => console.error(err))
 .finally(() => console.log("cleanup"));

// Promise.all — parallel
const [user, posts] = await Promise.all([
  fetch('/api/user').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
]);

// Chaining
fetch('/api/user')
  .then(r => r.json())
  .then(user => fetch(\`/api/posts/\${user.id}\`))
  .then(r => r.json())
  .catch(err => console.error('Failed:', err));`,
  },
  {
    id: 609,
    level: "Intermediate" as const,
    tags: ["async"],
    question: "async/await kya hai? Error handling kaise karte hain?",
    answer: `async/await = Promises ka syntactic sugar — async code ko synchronous jaisa likhne deta hai.

**async function:**
- Hamesha Promise return karta hai
- Await use karne ke liye function async hona chahiye

**await:**
- Promise resolve hone ka wait karta hai
- Sirf async function ke andar use kar sakte ho

**Error handling:**
- try/catch blocks use karo
- Ya .catch() add karo async function call pe

**await vs .then:** Same result, await zyada readable hai`,
    code: `// Without async/await
function getData() {
  return fetch('/api/user')
    .then(r => r.json())
    .then(user => fetch(\`/api/posts/\${user.id}\`))
    .then(r => r.json());
}

// With async/await (same thing, cleaner)
async function getData() {
  const userRes = await fetch('/api/user');
  const user = await userRes.json();
  const postsRes = await fetch(\`/api/posts/\${user.id}\`);
  return postsRes.json();
}

// Error handling
async function safeGet() {
  try {
    const data = await getData();
    return data;
  } catch (err) {
    console.error('Error:', err.message);
    return null;
  }
}

// Parallel (don't await sequentially!)
const [a, b] = await Promise.all([fetchA(), fetchB()]);`,
  },
  {
    id: 610,
    level: "Beginner" as const,
    tags: ["es6", "syntax"],
    question: "Spread (...) aur Rest (...) operator mein kya fark hai?",
    answer: `Dono ka syntax same (...) hai lekin context alag hai.

**Spread:** Iterable ko expand karta hai (array/object unpack)
- Array copy karo, merge karo
- Function call mein args pass karo
- Object spread karo

**Rest:** Multiple values ko ek variable mein collect karta hai
- Function parameters ke liye
- Destructuring mein

**Rule:** Assignment ka left side = Rest, right side = Spread`,
    code: `// SPREAD — expand karo
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];    // [1,2,3,4,5] — copy + extend

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };  // { a:1, b:2, c:3 }

Math.max(...arr1);                // Math.max(1, 2, 3)

// REST — collect karo
function sum(...nums) {           // rest parameter
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4);                  // 10

// Destructuring with rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first=1, second=2, rest=[3,4,5]

const { a, ...others } = { a: 1, b: 2, c: 3 };
// a=1, others={b:2, c:3}`,
  },
  {
    id: 611,
    level: "Beginner" as const,
    tags: ["es6", "syntax"],
    question: "Destructuring kya hai? Array aur Object destructuring explain karo.",
    answer: `Destructuring = array ya object se values nikaal ke variables mein assign karo — compact syntax mein.

**Array destructuring:** Position-based
**Object destructuring:** Property name-based

**Features:**
- Default values set karo
- Rename karo (aliasing)
- Nested destructure karo
- Function parameters mein use karo`,
    code: `// Array destructuring
const [a, b, c] = [1, 2, 3];
const [x, , z] = [1, 2, 3];      // skip middle
const [p = 10] = [];              // default value → 10

// Swap variables!
let m = 1, n = 2;
[m, n] = [n, m];                  // m=2, n=1

// Object destructuring
const { name, age } = { name: "Ali", age: 25 };

// Rename
const { name: userName } = { name: "Ali" };
// userName = "Ali"

// Default + rename
const { score = 0, level: lvl = "Beginner" } = {};

// Nested
const { address: { city } } = { address: { city: "Lahore" } };

// In function parameters
function greet({ name, age = 18 }) {
  return \`\${name} is \${age}\`;
}
greet({ name: "Ali" });`,
  },
  {
    id: 612,
    level: "Intermediate" as const,
    tags: ["es6", "data-structures"],
    question: "Map aur Object mein kya fark hai? Set kya hota hai?",
    answer: `**Map vs Object:**
- Map: any type ki key (object, function, etc.). Object: sirf string/symbol keys
- Map: insertion order preserve karta hai. Object: bhi karta hai (modern JS) lekin keys string bante hain
- Map.size property hai. Object ke liye Object.keys().length
- Map iteration direct (for...of). Object ke liye Object.entries()
- Map: pure data ke liye better. Object: structured records ke liye

**Set:**
- Unique values ki collection — duplicates allowed nahi
- Any type store kar sakte ho
- has(), add(), delete() methods
- Duplicate remove karne ka easy way: [...new Set(arr)]`,
    code: `// Map
const map = new Map();
map.set('name', 'Ali');
map.set(42, 'answer');
map.set({}, 'object key!');
map.get('name');    // "Ali"
map.size;           // 3
map.has('name');    // true

for (const [key, val] of map) { ... }

// Set
const set = new Set([1, 2, 2, 3, 3, 3]);
console.log([...set]);  // [1, 2, 3] — unique only!

set.add(4);
set.has(2);    // true
set.delete(1);

// Remove duplicates from array
const unique = [...new Set([1, 2, 2, 3, 3])];
// [1, 2, 3]`,
  },
  {
    id: 613,
    level: "Intermediate" as const,
    tags: ["es6", "functions"],
    question: "Arrow function aur regular function mein kya fark hai?",
    answer: `**Syntax:** Arrow function compact hai.

**this binding (main difference):**
- Regular function: apna this hota hai (call context pe depend)
- Arrow function: lexical this — surrounding scope ka this use karta hai

**Other differences:**
- Arrow function mein arguments object nahi hota
- Arrow function constructor (new) nahi ban sakta
- Arrow function prototype property nahi hoti
- Arrow function hamesha anonymous hai (naam nahi)

**Kab kya use karein:**
- Methods: regular function (this chahiye)
- Callbacks, array methods, short functions: arrow`,
    code: `// Regular function — dynamic this
const obj = {
  name: "Ali",
  greet: function() { return this.name; },  // "Ali" ✅
  greetArrow: () => this.name,              // undefined ❌ (window.name)
};

// Constructor — only regular function
function Person(name) { this.name = name; }
const p = new Person("Ali");  // ✅

const Arrow = (name) => { this.name = name; };
// new Arrow(); // ❌ TypeError: Arrow is not a constructor

// Practical: timer with arrow
class Counter {
  count = 0;
  start() {
    setInterval(() => {
      this.count++;  // ✅ lexical this = Counter instance
    }, 1000);
  }
}

// Short syntax
const double = x => x * 2;
const add = (a, b) => a + b;
const getUser = () => ({ name: "Ali" });  // object: wrap in ()`,
  },
  {
    id: 614,
    level: "Intermediate" as const,
    tags: ["performance", "patterns"],
    question: "Debounce aur Throttle kya hain? Fark explain karo.",
    answer: `Dono function calls ko limit karne ke techniques hain — performance optimization ke liye.

**Debounce:** Function tab call karo jab events ki "burst" ruk jaaye. Delay ke baad sirf ek baar.
- **Use case:** Search input, window resize, form validation
- User type karta rahta hai → timer reset hota hai → typing rukne ke X ms baad call

**Throttle:** Function time interval mein sirf ek baar call karo — events aate rahein.
- **Use case:** Scroll handlers, mouse move, API calls on scroll
- X ms mein guaranteed ek call, chahe events kitne bhi aayein

**Trick to remember:** Debounce = "wait ho jaao", Throttle = "regular interval pe"`,
    code: `// Debounce implementation
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Use: search input
const onSearch = debounce((query) => {
  fetch(\`/api/search?q=\${query}\`);
}, 300);  // 300ms ruko

input.addEventListener('input', e => onSearch(e.target.value));

// Throttle implementation
function throttle(fn, limit) {
  let inThrottle = false;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => { inThrottle = false; }, limit);
    }
  };
}

// Use: scroll handler
const onScroll = throttle(() => updatePosition(), 100);
window.addEventListener('scroll', onScroll);`,
  },
  {
    id: 615,
    level: "Intermediate" as const,
    tags: ["patterns", "scope"],
    question: "IIFE kya hai? Kab use karte hain?",
    answer: `IIFE = Immediately Invoked Function Expression. Define hote hi execute ho jaata hai.

**Syntax:** (function() { ... })() ya (() => { ... })()

**Kyun use karein:**
1. **Scope isolation** — global scope pollute mat karo
2. **Private variables** — variables bahar accessible nahi hote
3. **Module pattern** (ES6 modules se pehle)
4. **Avoid naming conflicts** — libraries mein
5. **Async IIFE** — top-level await ke bina async code

**Modern JS mein:** ES6 modules (import/export) ne IIFE ki zaroorat kam kar di, lekin still useful hai for initialization code.`,
    code: `// Basic IIFE
(function() {
  const secret = "private!";
  console.log("runs immediately!");
})();
// console.log(secret); // ❌ ReferenceError

// Arrow IIFE
(() => {
  console.log("arrow IIFE");
})();

// With return value
const result = (function() {
  const PI = 3.14159;
  return { area: r => PI * r * r };
})();
result.area(5);  // 78.5

// Async IIFE (top-level async)
(async () => {
  const data = await fetch('/api/init').then(r => r.json());
  init(data);
})();

// Passing globals safely (old jQuery style)
(function($, window, undefined) {
  // $ = jQuery, guaranteed
})(jQuery, window);`,
  },
  {
    id: 616,
    level: "Advanced" as const,
    tags: ["patterns", "functional"],
    question: "Currying kya hai? Memoization kya hai?",
    answer: `**Currying:** Function jo multiple arguments lete hai use ek chain of functions mein convert karo — ek ek argument lete hain.
f(a, b, c) → f(a)(b)(c)

**Fayde:**
- Partial application (kuch arguments pehle fix karo)
- Reusable functions banana
- Functional composition

**Memoization:** Function results cache karo — same arguments pe dobara compute mat karo.

**Fayde:**
- Expensive calculations optimize karo
- Pure functions ke liye perfect (same input → same output)
- Fibonacci, DP problems`,
    code: `// Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...more) => curried(...args, ...more);
  };
}

const add = curry((a, b, c) => a + b + c);
add(1)(2)(3);     // 6
add(1, 2)(3);     // 6
const add5 = add(5);  // partial application
add5(3)(2);       // 10

// Practical: reusable filter
const filterBy = curry((key, value, arr) =>
  arr.filter(item => item[key] === value)
);
const getAdmins = filterBy('role', 'admin');
getAdmins(users);  // filter users where role='admin'

// Memoization
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const fib = memoize(function(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});
fib(40);  // instant after first call!`,
  },
  {
    id: 617,
    level: "Intermediate" as const,
    tags: ["es2020", "syntax"],
    question: "Optional chaining (?.) aur Nullish coalescing (??) kya hain?",
    answer: `**Optional chaining (?.):** Property access ya method call karo bina explicit null check ke. Agar intermediate value null/undefined hai toh undefined return karo instead of throwing error.

**Nullish coalescing (??):** Left side null ya undefined hai toh right side return karo. (|| se fark: || falsy check karta hai — 0, "", false bhi)

**?.() — optional method call**
**?.[] — optional computed property**`,
    code: `const user = null;

// Without optional chaining
const city = user && user.address && user.address.city; // tedious!

// With optional chaining
const city = user?.address?.city;     // undefined (no error!)
const len = user?.name?.length;       // undefined

// Optional method call
user?.sendEmail();                    // no error if user is null

// Optional array access
const first = arr?.[0];              // undefined if arr is null

// Nullish coalescing
const name = user?.name ?? "Guest";  // "Guest" if null/undefined
const count = data?.count ?? 0;      // 0 if null/undefined

// ?? vs ||
const a = 0 || "default";   // "default" (0 is falsy — BAD!)
const b = 0 ?? "default";   // 0 (0 is not null/undefined — GOOD!)

const score = user?.score ?? 0;      // 0 if not set
const port = process.env.PORT ?? 3000;`,
  },
  {
    id: 618,
    level: "Intermediate" as const,
    tags: ["arrays", "functional"],
    question: "Array methods: map, filter, reduce deeply explain karo.",
    answer: `Yeh teen methods functional programming ka core hain — original array modify nahi karte, new value return karte hain.

**map():** Har element transform karo → same length ka new array
**filter():** Condition ke basis pe elements rakho → same ya chhota array
**reduce():** Array ko single value mein fold karo → any type

**Combination:** Chaining karo — filter → map → reduce
**Performance tip:** reduce() ek hi pass mein sab kuch kar sakta hai`,
    code: `const users = [
  { name: "Ali", age: 25, active: true },
  { name: "Sara", age: 17, active: false },
  { name: "Raza", age: 30, active: true },
];

// map — transform
const names = users.map(u => u.name);
// ["Ali", "Sara", "Raza"]

const doubled = [1,2,3].map(x => x * 2);
// [2, 4, 6]

// filter — select
const adults = users.filter(u => u.age >= 18);
// [Ali, Raza]

const actives = users.filter(u => u.active);

// reduce — aggregate
const totalAge = users.reduce((sum, u) => sum + u.age, 0);
// 72

// Group by (reduce advanced)
const grouped = users.reduce((acc, u) => {
  const key = u.active ? 'active' : 'inactive';
  acc[key] = acc[key] || [];
  acc[key].push(u.name);
  return acc;
}, {});
// { active: ["Ali", "Raza"], inactive: ["Sara"] }

// Chaining
const result = users
  .filter(u => u.active)    // sirf active
  .map(u => u.name)         // sirf names
  .join(", ");              // "Ali, Raza"`,
  },
  {
    id: 619,
    level: "Beginner" as const,
    tags: ["es6", "syntax"],
    question: "Template literals kya hain? Tagged templates kya hain?",
    answer: `**Template literals:** Backticks (\`) use karte hain. String interpolation, multiline strings aur expressions embed karne ke liye.

**Tagged templates:** Template literal ke pehle function naam likho — function string parts aur interpolated values receive karta hai. Advanced use case.`,
    code: `// Basic interpolation
const name = "Ali";
const age = 25;
const msg = \`Hello \${name}, you are \${age} years old!\`;

// Expression embed
const total = \`Total: \${2 + 3 * 4}\`;   // "Total: 14"
const status = \`User is \${user.active ? "active" : "inactive"}\`;

// Multiline (no \\n needed!)
const html = \`
  <div class="card">
    <h1>\${title}</h1>
    <p>\${description}</p>
  </div>
\`;

// Nested templates
const list = items.map(i => \`<li>\${i.name}</li>\`).join('');
const ul = \`<ul>\${list}</ul>\`;

// Tagged templates
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =>
    result + str + (values[i] !== undefined
      ? \`<mark>\${values[i]}</mark>\`
      : ''), '');
}

const output = highlight\`Hello \${name}, age \${age}!\`;
// "Hello <mark>Ali</mark>, age <mark>25</mark>!"`,
  },
  {
    id: 620,
    level: "Intermediate" as const,
    tags: ["es6", "modules"],
    question: "ES6 Modules (import/export) kya hain? CommonJS se kya fark hai?",
    answer: `**ES6 Modules (ESM):**
- import/export syntax
- Static — compile time pe resolve hote hain
- Top-level await support
- Browser aur Node.js (with .mjs ya "type":"module") mein kaam karta hai
- Tree-shakeable (bundlers unused code remove kar sakte hain)

**CommonJS (CJS):**
- require()/module.exports syntax
- Dynamic — runtime pe resolve hote hain
- Node.js ka original module system
- Synchronous

**Named vs Default exports:**
- Named: multiple exports per file
- Default: ek per file, import karte waqt koi bhi naam de sakte ho`,
    code: `// ES6 named exports
export const PI = 3.14;
export function add(a, b) { return a + b; }
export class User { ... }

// ES6 default export
export default class AuthService { ... }

// Import named
import { PI, add } from './math.js';
import { User as UserModel } from './models.js';

// Import default
import AuthService from './auth.js';

// Import all
import * as MathUtils from './math.js';
MathUtils.add(1, 2);

// CommonJS (Node.js old style)
const express = require('express');
module.exports = { add, PI };
module.exports = AuthService;  // default-like

// Dynamic import (code splitting)
const module = await import('./heavyModule.js');
const { process } = await import(\`./handlers/\${type}.js\`);`,
  },
  {
    id: 621,
    level: "Advanced" as const,
    tags: ["advanced", "generators"],
    question: "Generator functions kya hain? Kab use karte hain?",
    answer: `Generator = function* jo pause aur resume ho sakta hai. yield keyword se value return karta hai aur pause hota hai.

**Iterator protocol implement karta hai:**
- next() call karo → { value, done }
- yield expression se value return karo
- Caller control karta hai execution

**Uses:**
- Infinite sequences (lazy evaluation)
- Custom iterators
- Async flow control (Redux-saga)
- Pagination`,
    code: `// Basic generator
function* counter(start = 0) {
  while (true) {
    yield start++;    // pause, return value
  }
}

const gen = counter(1);
gen.next();  // { value: 1, done: false }
gen.next();  // { value: 2, done: false }

// Finite generator
function* range(from, to) {
  for (let i = from; i <= to; i++) yield i;
}

for (const n of range(1, 5)) console.log(n);  // 1,2,3,4,5
const arr = [...range(1, 5)];  // [1,2,3,4,5]

// Fibonacci (infinite)
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
Array.from({ length: 8 }, () => fib.next().value);
// [0, 1, 1, 2, 3, 5, 8, 13]

// Two-way communication
function* calculator() {
  let result = 0;
  while (true) {
    const input = yield result;
    result += input;
  }
}`,
  },
  {
    id: 622,
    level: "Beginner" as const,
    tags: ["basics", "types"],
    question: "typeof, instanceof, aur Object.is() mein kya fark hai?",
    answer: `**typeof:** Value ka primitive type string mein return karta hai. Gotchas: typeof null = "object" (bug!), typeof function = "function".

**instanceof:** Object prototype chain check karta hai — "kya yeh is class ka instance hai?"

**Object.is():** Strict equality like === lekin 2 edge cases sahi handle karta hai:
- NaN === NaN → false, Object.is(NaN, NaN) → true
- -0 === +0 → true, Object.is(-0, +0) → false`,
    code: `// typeof
typeof 42;          // "number"
typeof "hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" ← famous bug!
typeof {};          // "object"
typeof [];          // "object" (array bhi object hai!)
typeof function(){}; // "function"
typeof Symbol();    // "symbol"

// Array check
Array.isArray([]);  // true ✅

// instanceof
class Animal {}
class Dog extends Animal {}

const d = new Dog();
d instanceof Dog;     // true
d instanceof Animal;  // true (prototype chain!)
d instanceof Object;  // true (sab object hain!)

[] instanceof Array;   // true
[] instanceof Object;  // true

// Object.is() edge cases
NaN === NaN;            // false (unexpected!)
Object.is(NaN, NaN);    // true ✅

-0 === +0;              // true
Object.is(-0, +0);      // false ✅`,
  },
  {
    id: 623,
    level: "Advanced" as const,
    tags: ["advanced", "proxy"],
    question: "Proxy aur Reflect kya hain? Real use case do.",
    answer: `**Proxy:** Object operations ko intercept aur customize karo — get, set, delete, etc.

**Reflect:** Built-in object operations ke liye methods — Proxy handlers mein use karo default behavior ke liye.

**Proxy traps:** get, set, has, deleteProperty, apply, construct, etc.

**Real use cases:**
- Validation (set trap mein type check)
- Logging/debugging (get/set track karo)
- Default values (get trap mein undefined handle)
- Reactive systems (Vue 3 reactivity Proxy pe based hai!)
- API mocking`,
    code: `// Validation proxy
function createValidatedUser(data) {
  return new Proxy(data, {
    set(target, prop, value) {
      if (prop === 'age' && typeof value !== 'number') {
        throw new TypeError('age must be a number');
      }
      if (prop === 'email' && !value.includes('@')) {
        throw new Error('Invalid email');
      }
      target[prop] = value;
      return true;  // success signal
    },
    get(target, prop) {
      if (prop in target) return target[prop];
      return \`Property '\${prop}' not found\`;  // default
    }
  });
}

const user = createValidatedUser({ name: "Ali" });
user.age = 25;     // ✅
user.age = "old";  // ❌ TypeError

// Reactive proxy (simplified Vue-like)
function reactive(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;
      onChange(prop, value);  // notify!
      return true;
    }
  });
}

const state = reactive({ count: 0 }, (key, val) => {
  console.log(\`\${key} changed to \${val}\`);
  render();
});
state.count++;  // logs: "count changed to 1"`,
  },
  {
    id: 624,
    level: "Intermediate" as const,
    tags: ["errors", "basics"],
    question: "JavaScript mein error types kya hain? Custom errors kaise banate hain?",
    answer: `**Built-in Error types:**
- **Error** — base class
- **TypeError** — wrong type pe operation (null.property)
- **ReferenceError** — undefined variable use karo
- **SyntaxError** — invalid syntax
- **RangeError** — value range se bahar (new Array(-1))
- **URIError** — malformed URI

**Custom Errors:** Error class extend karo — better error handling, instanceof check, extra properties add karo.`,
    code: `// Built-in errors
try {
  null.property;       // TypeError
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.name);    // "TypeError"
  console.log(e.message); // "Cannot read properties..."
  console.log(e.stack);   // stack trace
}

// Custom error
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NotFoundError extends Error {
  constructor(resource, id) {
    super(\`\${resource} with id \${id} not found\`);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

// Usage
function validateAge(age) {
  if (typeof age !== 'number') {
    throw new ValidationError('Age must be a number', 'age');
  }
  if (age < 0) throw new RangeError('Age cannot be negative');
}

try {
  validateAge("old");
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.field);    // "age"
  }
}`,
  },
  {
    id: 625,
    level: "Intermediate" as const,
    tags: ["async", "advanced"],
    question: "WeakMap aur WeakRef kya hain? Garbage collection se kya connection hai?",
    answer: `**WeakMap:**
- Keys sirf objects ho sakti hain
- Keys weakly held — agar object ka koi reference nahi, garbage collect ho jaata hai
- Non-iterable (keys enumerate nahi kar sakte)
- Size property nahi

**Use case:** Private data store karo object ke saath bina memory leak ke — object destroy hone pe automatically cleanup.

**WeakRef:**
- Object ka weak reference rakho
- deref() se access karo — null aa sakta hai agar GC ne collect kar liya
- Caching ke liye useful (cache object GC se protected nahi hoga)`,
    code: `// WeakMap — private data pattern
const _private = new WeakMap();

class BankAccount {
  constructor(balance) {
    _private.set(this, { balance });  // private!
  }
  
  deposit(amount) {
    const data = _private.get(this);
    data.balance += amount;
  }
  
  getBalance() {
    return _private.get(this).balance;
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
acc.getBalance();  // 1500
// acc.balance → undefined (truly private!)

// When 'acc' is garbage collected, WeakMap entry auto-removed!

// WeakRef
let bigObject = { data: new Array(10000).fill('x') };
const ref = new WeakRef(bigObject);

bigObject = null;  // allow GC

// Later...
const obj = ref.deref();
if (obj) {
  console.log(obj.data.length);  // still alive
} else {
  console.log("GC ne collect kar liya!");
}`,
  },
  {
    id: 626,
    level: "Intermediate" as const,
    tags: ["patterns", "oop"],
    question: "Class fields, private fields (#), aur static class features kya hain?",
    answer: `**Public class fields:** Class body mein declare karo — constructor mein this.x = y ki zaroorat nahi.

**Private fields (#):** # prefix se genuinely private — class ke bahar access nahi, prototype chain mein nahi.

**Static fields/methods:** Class level pe — instance nahi chahiye. Utility methods, constants, factory patterns.

**Static private:** # aur static dono — class ke andar sirf.`,
    code: `class User {
  // Public field (default value)
  role = 'user';
  isActive = true;
  
  // Private field (# prefix)
  #password;
  #loginAttempts = 0;
  
  // Static field
  static userCount = 0;
  static #maxAttempts = 3;  // static private
  
  constructor(name, password) {
    this.name = name;
    this.#password = password;
    User.userCount++;
  }
  
  // Private method
  #validatePassword(pass) {
    return this.#password === pass;
  }
  
  login(pass) {
    if (this.#loginAttempts >= User.#maxAttempts) {
      throw new Error('Account locked');
    }
    if (!this.#validatePassword(pass)) {
      this.#loginAttempts++;
      return false;
    }
    return true;
  }
  
  // Static factory method
  static createAdmin(name) {
    const user = new User(name, Math.random().toString());
    user.role = 'admin';
    return user;
  }
}

const admin = User.createAdmin("Ali");
admin.#password;  // ❌ SyntaxError (truly private!)
User.userCount;   // 1 (static)`,
  },
  {
    id: 627,
    level: "Advanced" as const,
    tags: ["advanced", "async"],
    question: "AbortController kya hai? Fetch request cancel kaise karein?",
    answer: `AbortController = fetch requests ya koi bhi AbortSignal support karne wali async operation cancel karne ka standard way.

**Problem without it:**
- User page change kare → stale response aaye → state update kare → bug!
- Component unmount → memory leak

**Use cases:**
- React useEffect cleanup mein fetch cancel karo
- User ne naya search kiya → pehla cancel karo
- Timeout implement karo`,
    code: `// Basic cancellation
const controller = new AbortController();
const { signal } = controller;

fetch('/api/slow-data', { signal })
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('Request cancelled!');
    } else {
      throw err;
    }
  });

// Cancel after 5 seconds
setTimeout(() => controller.abort(), 5000);

// React useEffect pattern
useEffect(() => {
  const controller = new AbortController();
  
  async function fetchData() {
    try {
      const res = await fetch('/api/data', { 
        signal: controller.signal 
      });
      const data = await res.json();
      setData(data);  // safe — won't run if aborted
    } catch (err) {
      if (err.name !== 'AbortError') setError(err);
    }
  }
  
  fetchData();
  return () => controller.abort();  // cleanup!
}, [userId]);

// Search with debounce + abort
let searchController;
async function search(query) {
  searchController?.abort();  // cancel previous
  searchController = new AbortController();
  const data = await fetch(\`/search?q=\${query}\`, {
    signal: searchController.signal
  }).then(r => r.json());
  return data;
}`,
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
