import type { Chapter } from "./chapters";

export const nodeChapters: Chapter[] = [
  {
    id: "node-intro",
    title: "Node.js Kya Hai? Setup",
    emoji: "🟢",
    category: "Basics",
    description: "Node.js introduction, event loop, aur first server",
    sections: [
      {
        heading: "Node.js kya hai?",
        content: `Node.js = JavaScript runtime built on Chrome's V8 engine. Browser ke bahar JavaScript chalao — server, desktop, IoT sab par.

**Key Features:**
- **Non-blocking I/O** — ek request ke liye wait nahi karta
- **Event-driven** — events par react karta hai
- **Single threaded** — ek thread, but async se handle karta hai
- **npm ecosystem** — 2 million+ packages

**Node.js kab use karein:**
- REST APIs
- Real-time apps (chat, gaming)
- Microservices
- File processing
- CLI tools

**Kab mat use karein:**
- CPU-intensive tasks (video processing, ML) — single thread block hoga`,
        diagram: `
NODE.JS EVENT LOOP:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Single Thread  ←───────────────────┐
       │                             │
       ▼                             │
  ┌─────────────┐                    │
  │  Call Stack │ ← JS code execute  │
  └──────┬──────┘                    │
         │ async operation?          │
         ▼                           │
  ┌─────────────┐                    │
  │  Web APIs / │ ← Timer, I/O,      │
  │  libuv      │   Network          │
  └──────┬──────┘                    │
         │ done?                     │
         ▼                           │
  ┌─────────────┐                    │
  │  Callback   │ → Event Loop ──────┘
  │  Queue      │   (keeps running)
  └─────────────┘

Key: JS never blocks — async operations delegate karo!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Node.js install karo (nvm recommended)
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 20
nvm use 20
node --version   # v20.x.x
npm --version    # 10.x.x

# Pehla Node.js program
# hello.js
console.log("Namaste World!");
console.log("Node version:", process.version);
console.log("Platform:", process.platform);

node hello.js   # Run karo`,
        language: "bash",
        tip: "nvm (Node Version Manager) use karo node install karne ke liye — multiple versions manage kar sakte ho aur switch kar sakte ho.",
      },
      {
        heading: "Modules — require aur import",
        content: `Node.js mein code modules mein organize hota hai. Purana CommonJS (require) aur naaya ES Modules (import).`,
        code: `// CommonJS (traditional, still most common)
// math.js
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

module.exports = { add, multiply };
// ya: module.exports = add; // single export

// use karo
const { add, multiply } = require('./math');
console.log(add(2, 3)); // 5

// Built-in modules
const fs = require('fs');
const path = require('path');
const http = require('http');
const os = require('os');
const events = require('events');

// ES Modules (package.json mein "type": "module" add karo)
// math.mjs ya package.json mein "type": "module"
export const add = (a, b) => a + b;
export default function greet(name) { return \`Hello \${name}\`; }

import { add } from './math.js';
import greet from './math.js';

// Built-in modules bhi import ho sakte hain
import fs from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

// __dirname replacement for ES Modules
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);`,
        language: "javascript",
      },
      {
        heading: "HTTP Server aur Express.js",
        content: ``,
        code: `// Pure Node.js HTTP server (low level)
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Namaste!' }));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => console.log('Server chal raha hai: http://localhost:3000'));

// Express.js (much better!)
npm install express

const express = require('express');
const app = express();

app.use(express.json());        // JSON body parse karo
app.use(express.urlencoded({ extended: true })); // Form data

app.get('/', (req, res) => {
    res.json({ message: 'Namaste Express!' });
});

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    res.json({ id, name: 'Rahul Kumar' });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ id: 1, name, email });
});

app.listen(3000, () => console.log('Express server: http://localhost:3000'));`,
        language: "javascript",
        tip: "Nodemon use karo development mein — file change pe auto-restart: npm install -g nodemon, phir nodemon server.js",
      },
    ],
    mcqs: [
      {
        q: "Node.js ka non-blocking I/O kya matlab hai?",
        options: [
          "Multiple threads use karta hai",
          "I/O operations ke liye wait nahi karta, aage badhta hai",
          "I/O kabhi nahi karta",
          "Sirf synchronous operations karta hai",
        ],
        correct: 1,
        explain: "Non-blocking = I/O operation start karo, callback register karo, aur aage badho. Jab I/O complete ho, callback call hoti hai.",
      },
    ],
    cheatsheet: [
      "require('./file') — CommonJS import",
      "module.exports = ... — CommonJS export",
      "import/export — ES Modules",
      "process.env.KEY — environment variables",
      "process.argv — command line arguments",
      "__dirname — current directory",
      "http.createServer(handler) — HTTP server",
    ],
    revision: [
      "Node.js = Server-side JavaScript (V8 engine)",
      "Event Loop = single thread + async callbacks",
      "Non-blocking I/O = file/network ke liye wait nahi",
      "require = CommonJS, import = ES Modules",
    ],
  },
  {
    id: "node-async",
    title: "Async JavaScript — Callbacks, Promises, Async/Await",
    emoji: "⏳",
    category: "Basics",
    description: "Asynchronous programming deeply — callbacks se async/await tak",
    sections: [
      {
        heading: "Async kya hai? Evolution",
        content: `JavaScript single threaded hai — blocking operations sab rok dete hain. Async se time-consuming operations (file read, API call, DB query) background mein hoti hain.

**Evolution:**
1. Callbacks (old, "callback hell")
2. Promises (better)
3. Async/Await (modern, cleanest)`,
        code: `// CALLBACKS — callback hell example
fs.readFile('file1.txt', 'utf8', (err, data1) => {
    if (err) return console.error(err);
    
    fs.readFile('file2.txt', 'utf8', (err, data2) => {
        if (err) return console.error(err);
        
        fs.writeFile('output.txt', data1 + data2, (err) => {
            if (err) return console.error(err);
            console.log('Done!'); // 3 levels deep — gets worse!
        });
    });
});

// PROMISES — much better
function readFilePromise(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

readFilePromise('file1.txt')
    .then(data1 => {
        return readFilePromise('file2.txt').then(data2 => data1 + data2);
    })
    .then(combined => fs.promises.writeFile('output.txt', combined))
    .then(() => console.log('Done!'))
    .catch(err => console.error(err)); // single error handler!

// ASYNC/AWAIT — cleanest (use this!)
async function processFiles() {
    try {
        const data1 = await fs.promises.readFile('file1.txt', 'utf8');
        const data2 = await fs.promises.readFile('file2.txt', 'utf8');
        await fs.promises.writeFile('output.txt', data1 + data2);
        console.log('Done!');
    } catch (err) {
        console.error('Error:', err);
    }
}

processFiles();

// Parallel execution — Promise.all
async function loadUserData(userId) {
    const [user, posts, friends] = await Promise.all([
        db.users.findById(userId),   // sab ek saath start
        db.posts.findByUser(userId),
        db.friends.findByUser(userId),
    ]);
    return { user, posts, friends };
}`,
        language: "javascript",
        tip: "Hamesha try-catch se async/await wrap karo. Promise.all se parallel operations run karo — sequential await se 3x faster ho sakta hai.",
        warning: "await sirf async functions ke andar kaam karta hai. Top-level await ES2022 mein aaya (modules mein).",
      },
    ],
    mcqs: [
      {
        q: "Promise.all() kab reject hota hai?",
        options: [
          "Jab sab promises fail ho jaayein",
          "Jab pehla promise fail ho",
          "Jab 50% promises fail hoon",
          "Kabhi reject nahi hota",
        ],
        correct: 1,
        explain: "Promise.all() fail-fast hai — koi bhi ek promise reject ho toh poora Promise.all() reject ho jaata hai. Baaki promises bhi cancel nahi hoti.",
      },
    ],
    cheatsheet: [
      "async function name() {} — async function declare",
      "await promise — result ka wait karo",
      "try/catch — async errors handle karo",
      "Promise.all([...]) — parallel execution",
      "Promise.allSettled([...]) — sab complete hone do (fail ho ya pass)",
      "Promise.race([...]) — pehla complete hone wala",
      ".then().catch() — promise chaining",
    ],
    revision: [
      "Callback hell → Promises → Async/Await",
      "async/await = synchronous jaise dikhta hai, async kaam karta hai",
      "Promise.all = parallel operations (faster!)",
      "hamesha try/catch use karo async functions mein",
    ],
  },
  {
    id: "node-express",
    title: "Express.js — Complete REST API",
    emoji: "⚡",
    category: "Intermediate",
    description: "Express.js se production-ready REST API banao",
    sections: [
      {
        heading: "Express app setup — Best Practices",
        content: ``,
        code: `// Project structure
my-api/
├── src/
│   ├── routes/
│   │   ├── users.routes.js
│   │   └── auth.routes.js
│   ├── controllers/
│   │   └── users.controller.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   ├── models/
│   │   └── user.model.js
│   └── app.js
├── .env
└── package.json

// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL }));

// Rate limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/api/', limiter);

// Body parsing
app.use(express.json({ limit: '10kb' })); // max 10kb JSON

// Routes
app.use('/api/v1/auth', require('./routes/auth.routes'));
app.use('/api/v1/users', require('./routes/users.routes'));

// 404 handler
app.use('*', (req, res) => res.status(404).json({ error: 'Route not found' }));

// Global error handler (must have 4 params)
app.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server: http://localhost:\${PORT}\`));`,
        language: "javascript",
      },
      {
        heading: "Controllers aur Middleware",
        content: ``,
        code: `// src/controllers/users.controller.js
const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next); // global error handler pe forward

const getUsers = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, search } = req.query;
    const offset = (page - 1) * limit;

    let query = 'SELECT id, name, email FROM users WHERE 1=1';
    const params = [];

    if (search) {
        query += ' AND (name LIKE ? OR email LIKE ?)';
        params.push(\`%\${search}%\`, \`%\${search}%\`);
    }

    query += ' LIMIT ? OFFSET ?';
    params.push(parseInt(limit), offset);

    const users = await db.query(query, params);
    res.json({ success: true, data: users, page: +page });
});

const getUserById = asyncHandler(async (req, res) => {
    const user = await db.query('SELECT * FROM users WHERE id = ?', [req.params.id]);
    if (!user[0]) {
        const err = new Error('User nahi mila');
        err.status = 404;
        throw err;
    }
    res.json({ success: true, data: user[0] });
});

module.exports = { getUsers, getUserById };

// src/middleware/auth.middleware.js
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token required' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};

const authorize = (...roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: 'Permission denied' });
    }
    next();
};

module.exports = { authenticate, authorize };

// src/routes/users.routes.js
const router = require('express').Router();
const { getUsers, getUserById } = require('../controllers/users.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

router.get('/', authenticate, getUsers);
router.get('/:id', authenticate, getUserById);
router.delete('/:id', authenticate, authorize('admin'), deleteUser);

module.exports = router;`,
        language: "javascript",
        tip: "asyncHandler wrapper se hamesha async errors automatically global error handler mein jaate hain — har route mein try/catch likhne ki zarurat nahi.",
      },
    ],
    cheatsheet: [
      "app.use(middleware) — global middleware",
      "app.use('/path', router) — route-specific middleware",
      "req.params — URL parameters (:id)",
      "req.query — query strings (?page=1)",
      "req.body — request body (JSON)",
      "res.json(data) — JSON response",
      "res.status(201).json(data) — custom status",
      "next(err) — error handler pe forward",
    ],
    revision: [
      "Express = minimalist web framework for Node.js",
      "Middleware = request processing pipeline",
      "asyncHandler = global error forwarding wrapper",
      "4-param middleware = error handler",
    ],
  },
  {
    id: "node-auth",
    title: "JWT Authentication — Node.js",
    emoji: "🔐",
    category: "Intermediate",
    description: "JWT tokens se secure authentication implement karo",
    sections: [
      {
        heading: "JWT Auth complete implementation",
        content: ``,
        code: `npm install jsonwebtoken bcryptjs

// src/controllers/auth.controller.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Sab fields required hain' });
    }
    if (password.length < 8) {
        return res.status(400).json({ error: 'Password 8+ characters' });
    }

    // Email already exists?
    const [existing] = await db.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existing) return res.status(409).json({ error: 'Email already registered' });

    // Password hash karo
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // User save karo
    const result = await db.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword]
    );

    const user = { id: result.insertId, name, email, role: 'user' };
    const tokens = generateTokens(user);

    res.status(201).json({ user, ...tokens });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    const [user] = await db.query(
        'SELECT * FROM users WHERE email = ? AND is_active = 1',
        [email]
    );

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    const { password: _, ...userWithoutPass } = user;
    const tokens = generateTokens(userWithoutPass);

    res.json({ user: userWithoutPass, ...tokens });
};

function generateTokens(user) {
    const access_token = jwt.sign(
        { sub: user.id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }
    );

    const refresh_token = jwt.sign(
        { sub: user.id },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: '7d' }
    );

    return { access_token, refresh_token, token_type: 'Bearer' };
}

const refreshToken = async (req, res) => {
    const { refresh_token } = req.body;
    try {
        const payload = jwt.verify(refresh_token, process.env.JWT_REFRESH_SECRET);
        const [user] = await db.query('SELECT * FROM users WHERE id = ?', [payload.sub]);
        if (!user) throw new Error('User not found');
        
        const tokens = generateTokens(user);
        res.json(tokens);
    } catch {
        res.status(401).json({ error: 'Invalid refresh token' });
    }
};

module.exports = { register, login, refreshToken };`,
        language: "javascript",
        tip: "Access token short-lived (15min), refresh token long-lived (7d). Client dono store karo — access token expire hone par refresh token se naya lo.",
      },
    ],
    cheatsheet: [
      "bcrypt.hash(pass, 12) — password hash karo",
      "bcrypt.compare(plain, hash) — verify karo",
      "jwt.sign(payload, secret, options) — token banao",
      "jwt.verify(token, secret) — token validate karo",
      "expiresIn: '15m'/'7d' — expiry set karo",
      "Authorization: Bearer <token> — header mein bhejo",
    ],
    revision: [
      "bcrypt = password hashing (one-way, secure)",
      "JWT = stateless, self-contained tokens",
      "Access token = short-lived (15min-1hr)",
      "Refresh token = long-lived, naya access token lene ke liye",
    ],
  },
  {
    id: "node-database",
    title: "Database — MySQL aur MongoDB",
    emoji: "🗄️",
    category: "Intermediate",
    description: "Node.js mein MySQL aur MongoDB se kaam karo",
    sections: [
      {
        heading: "MySQL with mysql2 package",
        content: ``,
        code: `npm install mysql2

// src/config/database.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,     // max 10 connections pool mein
    queueLimit: 0,
    charset: 'utf8mb4',
});

// Connection test karo
async function testConnection() {
    try {
        const conn = await pool.getConnection();
        console.log('MySQL connected!');
        conn.release();
    } catch (err) {
        console.error('MySQL connection failed:', err);
        process.exit(1);
    }
}

// Wrapper functions
const db = {
    async query(sql, params = []) {
        const [rows] = await pool.execute(sql, params); // execute = prepared statements
        return rows;
    },

    async queryOne(sql, params = []) {
        const rows = await this.query(sql, params);
        return rows[0] || null;
    },

    async transaction(fn) {
        const conn = await pool.getConnection();
        await conn.beginTransaction();
        try {
            const result = await fn(conn);
            await conn.commit();
            return result;
        } catch (err) {
            await conn.rollback();
            throw err;
        } finally {
            conn.release();
        }
    },
};

module.exports = { db, testConnection };

// Use karo:
const users = await db.query('SELECT * FROM users WHERE is_active = ?', [true]);
const user = await db.queryOne('SELECT * FROM users WHERE id = ?', [userId]);

// Transaction
await db.transaction(async (conn) => {
    await conn.execute('UPDATE accounts SET balance = balance - ? WHERE id = ?', [1000, 1]);
    await conn.execute('UPDATE accounts SET balance = balance + ? WHERE id = ?', [1000, 2]);
});`,
        language: "javascript",
      },
      {
        heading: "MongoDB with Mongoose",
        content: ``,
        code: `npm install mongoose

// src/config/mongoose.js
const mongoose = require('mongoose');

async function connectMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'myapp',
        });
        console.log('MongoDB connected!');
    } catch (err) {
        console.error('MongoDB error:', err);
        process.exit(1);
    }
}

// Model define karo
const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
});

// Pre-save hook — password hash
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// Method
userSchema.methods.comparePassword = async function(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);

// CRUD Operations
const users = await User.find({ isActive: true }).select('-password').limit(10);
const user = await User.findById(userId);
const newUser = await User.create({ name: 'Rahul', email: 'r@r.com', password: '12345678' });
await User.findByIdAndUpdate(userId, { name: 'Updated' }, { new: true });
await User.findByIdAndDelete(userId);`,
        language: "javascript",
        tip: "mysql2 mein execute() use karo query() ki jagah — execute prepared statements use karta hai jisme SQL injection se protection milti hai.",
      },
    ],
    cheatsheet: [
      "mysql.createPool({...}) — connection pool banao",
      "pool.execute(sql, params) — prepared statement",
      "mongoose.connect(uri) — MongoDB connect",
      "new Schema({...}) — document structure define",
      "Model.find({query}) — documents find",
      "Model.create({data}) — document create",
      "Model.findByIdAndUpdate(id, data, {new:true})",
    ],
    revision: [
      "Connection Pool = multiple connections manage karo",
      "execute() vs query() = prepared statements vs raw SQL",
      "Mongoose Schema = MongoDB document structure",
      "pre('save') hook = save se pehle logic (hashing)",
    ],
  },
];

export const nodeInterviews = [
  {
    id: 401,
    level: "Beginner" as const,
    tags: ["basics"],
    question: "Node.js ka Event Loop kya hai? Kaise kaam karta hai?",
    answer: `Event Loop Node.js ko single-threaded hone ke bawajood async operations handle karne deta hai.

**Mechanism:**
1. JS code Call Stack mein execute hota hai
2. Async operation aaya (setTimeout, fs.readFile, HTTP request) → Web APIs / libuv ko bhejo
3. Call Stack aage badhta hai (blocking nahi)
4. Async operation complete → Callback Queue mein aa jaata hai
5. Event Loop check karta hai: Call Stack khali hai? → Callback Queue se uthao → execute karo

**Phases (micro to macro):**
microtasks (Promises) > setImmediate > setTimeout/setInterval > I/O

**Key:** Node.js kabhi block nahi hota — async operations delegate karta hai!`,
    code: `console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2
// Promise (microtask) setTimeout (macrotask) se pehle!`,
  },
  {
    id: 402,
    level: "Intermediate" as const,
    tags: ["async"],
    question: "Callbacks, Promises, aur Async/Await mein kya fark hai?",
    answer: `**Callbacks (oldest):**
Function ko argument ke roop mein pass karo.
Problem: Callback hell, error handling mushkil

**Promises:**
Async operation ka future value represent karta hai.
States: pending, fulfilled, rejected
.then().catch() chain karo
Better: flat structure, single error handler

**Async/Await (modern):**
Promises ke upar syntactic sugar.
Synchronous jaisa dikhta hai
try/catch se error handle karo
Cleanest aur most readable

**Kab kya use karein:**
Old APIs (fs.readFile) → promisify karo
New APIs → already promises return karte hain
Most code → async/await`,
  },
  {
    id: 403,
    level: "Intermediate" as const,
    tags: ["express"],
    question: "Express.js middleware kya hai? Types explain karo.",
    answer: `Middleware = function jo request-response cycle mein execute hota hai.

**Signature:** (req, res, next) => void

**Types:**
1. **Application-level:** app.use() — sab routes pe
2. **Router-level:** router.use() — specific routes
3. **Error-handling:** 4 params (err, req, res, next)
4. **Built-in:** express.json(), express.static()
5. **Third-party:** cors, helmet, morgan

**next() behavior:**
- next() → agle middleware ko pass karo
- next(err) → error handler ko pass karo
- next() call na karo → request stuck ho jaayega`,
    code: `// Application middleware
app.use(helmet());  // sab routes pe

// Route middleware
app.get('/admin', authenticate, authorize('admin'), handler);

// Error middleware (last mein register karo)
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
});`,
  },
  {
    id: 404,
    level: "Advanced" as const,
    tags: ["performance"],
    question: "Node.js mein CPU-intensive tasks kaise handle karein?",
    answer: `Node.js single-threaded hai — CPU-intensive task (image processing, encryption, ML) Event Loop block kar deta hai aur sab requests hang ho jaati hain.

**Solutions:**

1. **Worker Threads (worker_threads module):**
   CPU work alag thread mein run karo

2. **Child Processes (child_process module):**
   Alag Node.js process spawn karo

3. **Cluster Module:**
   Multiple processes CPU cores utilize karein

4. **Offload to Queues:**
   Heavy work background job queue mein bhejo (Bull, BullMQ)

5. **Dedicated Services:**
   Python/Go microservice se heavy computation karo`,
    code: `// Worker Threads
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', result => console.log('Result:', result));
    worker.postMessage({ numbers: [1,2,3,4,5] });
} else {
    parentPort.on('message', ({ numbers }) => {
        // CPU-intensive calculation
        const sum = numbers.reduce((a, b) => a + b, 0);
        parentPort.postMessage(sum);
    });
}`,
  },
];
