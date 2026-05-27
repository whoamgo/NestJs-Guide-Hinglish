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
  {
    id: "node-docker",
    title: "Docker aur Containerization",
    titleEn: "Docker and Containerization",
    emoji: "🐳",
    category: "Advanced",
    description: "Node.js apps Docker mein containerize karo — Dockerfile, docker-compose, production best practices",
    descriptionEn: "Containerize Node.js apps with Docker — Dockerfile, docker-compose, production best practices",
    sections: [
      {
        heading: "Docker kya hai? Node.js ke saath kyon?",
        content: `**Docker** = Lightweight containers — application aur dependencies ek saath package karo.

**Fayde:**
- "Works on my machine" problem khatam
- Dev, staging, production identical environment
- Easy scaling (multiple containers)
- Kubernetes pe deploy karna easy

**Key concepts:**
- **Image:** Read-only template — Dockerfile se build
- **Container:** Running instance of image
- **Volume:** Persistent data (container delete pe data bache)
- **Network:** Containers communicate karein`,
        code: `# Dockerfile — Node.js app ke liye
FROM node:20-alpine AS base
WORKDIR /app

# Dependencies separately (layer caching!)
FROM base AS deps
COPY package*.json ./
RUN npm ci --only=production

# Build stage (TypeScript)
FROM base AS builder
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production image — minimal
FROM node:20-alpine AS production
WORKDIR /app

# Non-root user (security!)
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1))"

CMD ["node", "dist/main.js"]`,
        language: "dockerfile",
      },
      {
        heading: "docker-compose — Multi-container Setup",
        content: `**docker-compose:** Multiple containers define + ek command se sab start karo.

**.dockerignore:** node_modules, .git, logs — image mein include mat karo.`,
        code: `# docker-compose.yml
version: '3.8'

services:
  app:
    build:
      context: .
      target: production
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mysql://user:pass@mysql:3306/mydb
      - REDIS_URL=redis://redis:6379
    depends_on:
      mysql:
        condition: service_healthy
      redis:
        condition: service_started
    restart: unless-stopped
  
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: mydb
      MYSQL_USER: user
      MYSQL_PASSWORD: pass
    volumes:
      - mysql_data:/var/lib/mysql  # persistent!
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 5
  
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data
  
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro

volumes:
  mysql_data:
  redis_data:

# Commands:
# docker-compose up -d        -- start all
# docker-compose logs -f app  -- logs follow
# docker-compose down -v      -- stop + volumes delete`,
        language: "yaml",
        tip: "Multi-stage Dockerfile use karo — production image mein dev dependencies nahi jaayenge. Image size 500MB se 150MB ho jaata hai.",
      },
    ],
    cheatsheet: [
      "docker build -t myapp . — image build",
      "docker run -p 3000:3000 myapp — container start",
      "docker-compose up -d — all services start",
      "docker-compose logs -f app — logs follow",
      "FROM node:20-alpine — lightweight base image",
      "COPY package*.json . && npm ci — layer cache",
      ".dockerignore — node_modules etc exclude karo",
    ],
    revision: [
      "Multi-stage Dockerfile = smaller production image",
      "Non-root user = security best practice",
      "docker-compose = local dev multi-container",
      "HEALTHCHECK = container health monitoring",
      "Volumes = persistent data (DB etc)",
    ],
  },
  {
    id: "node-logging",
    title: "Structured Logging aur Monitoring",
    titleEn: "Structured Logging and Monitoring",
    emoji: "📊",
    category: "Intermediate",
    description: "Winston, Pino structured logging — log levels, correlation IDs, production monitoring",
    descriptionEn: "Winston, Pino structured logging — log levels, correlation IDs, production monitoring",
    sections: [
      {
        heading: "Structured Logging kya hai aur kyon?",
        content: `**console.log()** production mein enough nahi — searchable, parseable logs chahiye.

**Structured logging:** JSON format — log aggregation tools (ELK, Datadog) parse kar sakein.

**Log levels:**
- ERROR: System broken, immediate action
- WARN: Something unusual, watch out
- INFO: Normal operations (requests, startup)
- DEBUG: Detailed debugging info (dev only)
- TRACE: Very verbose (avoid in prod)

**Pino** = Fastest Node.js logger (vs Winston slower lekin more features).`,
        code: `// npm install pino pino-http
const pino = require('pino');

const logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    formatters: {
        level: (label) => ({ level: label }),  // numeric nahi, string
    },
    base: {
        service: 'user-api',
        version: process.env.APP_VERSION || '1.0.0',
        env: process.env.NODE_ENV,
    },
    // Development mein pretty print
    transport: process.env.NODE_ENV !== 'production'
        ? { target: 'pino-pretty', options: { colorize: true } }
        : undefined,
});

// Usage
logger.info({ userId: 123, action: 'login' }, 'User logged in');
logger.error({ err: error, userId: 123 }, 'Login failed');
logger.warn({ ip: req.ip, attempts: 5 }, 'Too many login attempts');

// Child logger — context add karo
const requestLogger = logger.child({ requestId: uuid() });
requestLogger.info('Processing request');
requestLogger.info({ dbQuery: 'users' }, 'DB query started');`,
        language: "javascript",
      },
      {
        heading: "Correlation IDs aur Request Logging",
        content: `**Correlation ID:** Har request ko unique ID — distributed systems mein trace karo.
**Request middleware:** Automatic request/response logging.`,
        code: `const { v4: uuidv4 } = require('uuid');
const pinoHttp = require('pino-http');

// Request logging middleware
const httpLogger = pinoHttp({
    logger,
    genReqId: (req) => req.headers['x-request-id'] || uuidv4(),
    customLogLevel: (req, res, err) => {
        if (res.statusCode >= 500 || err) return 'error';
        if (res.statusCode >= 400) return 'warn';
        return 'info';
    },
    customSuccessMessage: (req, res) =>
        \`\${req.method} \${req.url} → \${res.statusCode}\`,
    serializers: {
        req: (req) => ({
            method: req.method,
            url: req.url,
            ip: req.ip,
            userId: req.user?.id,
        }),
        res: (res) => ({
            statusCode: res.statusCode,
            responseTime: res.responseTime,
        }),
    },
});

app.use(httpLogger);

// Request ID propagate karo
app.use((req, res, next) => {
    res.setHeader('X-Request-ID', req.id);  // client ko bhi bhejo
    next();
});

// Downstream services ko bhi bhejo
const fetchWithCorrelation = (url, req) =>
    fetch(url, {
        headers: { 'X-Request-ID': req.id }
    });

// Log output (JSON):
// {"level":"info","time":1234567890,"service":"user-api",
//  "req":{"method":"POST","url":"/api/users","userId":123},
//  "res":{"statusCode":201,"responseTime":45}}`,
        language: "javascript",
        tip: "Production mein LOG_LEVEL=warn ya error set karo — info logs production mein too verbose hote hain. Errors + warnings capture karo.",
      },
    ],
    cheatsheet: [
      "pino/winston — structured JSON logging",
      "logger.child({requestId}) — request context",
      "Log levels: error > warn > info > debug > trace",
      "X-Request-ID header — distributed tracing",
      "LOG_LEVEL env var — runtime log level control",
    ],
    revision: [
      "JSON logs = machines parse kar sakein (ELK, Datadog)",
      "Child logger = request-scoped context",
      "Correlation ID = distributed request tracing",
      "Production: warn/error level only",
      "Sensitive data (passwords, tokens) log mat karo!",
    ],
  },
  {
    id: "node-api-design",
    title: "REST API Design Best Practices",
    titleEn: "REST API Design Best Practices",
    emoji: "🎯",
    category: "Intermediate",
    description: "RESTful API design — naming, versioning, pagination, error responses, OpenAPI",
    descriptionEn: "RESTful API design — naming, versioning, pagination, error responses, OpenAPI docs",
    sections: [
      {
        heading: "REST API conventions aur naming",
        content: `**REST** = Representational State Transfer — HTTP methods + nouns.

**Resource naming (nouns, not verbs):**
- ✅ GET /users, POST /users, GET /users/123
- ❌ GET /getUsers, POST /createUser

**HTTP methods:**
- GET = Read (idempotent, cacheable)
- POST = Create (non-idempotent)
- PUT = Replace entire resource
- PATCH = Partial update
- DELETE = Remove

**Status codes:**
- 200 OK, 201 Created, 204 No Content
- 400 Bad Request, 401 Unauthorized, 403 Forbidden
- 404 Not Found, 409 Conflict, 422 Validation Error
- 500 Internal Server Error`,
        code: `// Express REST API — proper structure
const router = express.Router();

// GET /api/v1/users — paginated list
router.get('/', authenticate, async (req, res, next) => {
    try {
        const { page = 1, limit = 20, sort = 'createdAt', order = 'desc', search } = req.query;
        
        const { users, total } = await userService.findAll({
            page: +page, limit: +limit, sort, order, search
        });
        
        res.json({
            data: users,
            meta: {
                page: +page,
                limit: +limit,
                total,
                totalPages: Math.ceil(total / +limit),
                hasNext: +page * +limit < total,
            }
        });
    } catch (err) { next(err); }
});

// GET /api/v1/users/:id
router.get('/:id', authenticate, async (req, res, next) => {
    try {
        const user = await userService.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found', code: 'USER_NOT_FOUND' });
        res.json({ data: user });
    } catch (err) { next(err); }
});

// POST /api/v1/users
router.post('/', authenticate, authorize('admin'), validate(createUserSchema), async (req, res, next) => {
    try {
        const user = await userService.create(req.body);
        res.status(201).json({ data: user });
    } catch (err) {
        if (err.code === 'DUPLICATE_EMAIL')
            return res.status(409).json({ error: 'Email already exists', code: 'DUPLICATE_EMAIL' });
        next(err);
    }
});

// Standard error response format
// { error: "human readable", code: "MACHINE_CODE", details: [...] }`,
        language: "javascript",
      },
      {
        heading: "API Versioning aur OpenAPI Docs",
        content: `**Versioning:** Breaking changes pe new version — backward compatibility maintain karo.
**OpenAPI/Swagger:** Auto-generated docs + testing interface.`,
        code: `// Versioning strategies
// 1. URL versioning (most common)
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

// 2. Header versioning
app.use((req, res, next) => {
    req.version = req.headers['api-version'] || 'v1';
    next();
});

// OpenAPI with swagger-jsdoc
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: { title: 'My API', version: '1.0.0' },
        components: {
            securitySchemes: {
                bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }
            }
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ['./src/routes/*.js'],  // JSDoc comments se generate
};

/**
 * @openapi
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *     responses:
 *       200:
 *         description: Users list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data: { type: array, items: { $ref: '#/components/schemas/User' } }
 */

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(options)));
// /api-docs → Swagger UI!`,
        language: "javascript",
        tip: "API versioning: URL versioning (/v1) sabse simple aur visible hai. Header versioning clean lekin harder to test.",
      },
    ],
    cheatsheet: [
      "GET/POST/PUT/PATCH/DELETE — correct HTTP methods",
      "/api/v1/resources — plural nouns, versioned",
      "201 Created + Location header — POST response",
      "{ data, meta: { page, total } } — list response",
      "{ error, code, details } — error response format",
      "/api-docs — Swagger UI auto-generated",
    ],
    revision: [
      "Nouns nahi verbs: /users not /getUsers",
      "Status codes sahi use karo — 200/201/400/401/404/409",
      "Pagination: page, limit, total, hasNext",
      "Versioning: /api/v1/ URL mein",
      "Error format: { error, code } — machine readable",
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
  {
    id: "node-fs",
    title: "File System & Streams",
    emoji: "📁",
    category: "Intermediate",
    description: "fs module se files read/write karna, streams se large files efficiently handle karna",
    sections: [
      {
        heading: "fs Module — File Operations",
        content: `Node.js ka built-in \`fs\` module file system operations ke liye hai.
- **Sync methods** — blocking (development only)
- **Async callbacks** — old style, prefer promises
- **fs/promises** — modern async/await style`,
        code: `const fs = require('fs/promises');  // modern
const path = require('path');

// Read file
async function readConfig() {
  const filePath = path.join(__dirname, 'config.json');
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content);
}

// Write file
async function saveData(data) {
  await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf-8');
}

// Append to file
await fs.appendFile('logs.txt', \`[\${new Date().toISOString()}] Request\n\`);

// File/directory info
const stats = await fs.stat('config.json');
console.log(stats.isFile(), stats.size, stats.mtime);

// Directory operations
await fs.mkdir('uploads', { recursive: true });  // create (no error if exists)
const files = await fs.readdir('./uploads');
await fs.unlink('temp.txt');  // delete file
await fs.rename('old.txt', 'new.txt');  // move/rename`,
        language: "javascript",
      },
      {
        heading: "Streams — Large Files Efficiently",
        content: `Streams = data ko pieces mein process karo — memory efficient!
- **Readable** — data source (file, HTTP request)
- **Writable** — data destination (file, HTTP response)
- **Transform** — data modify karo (compression, encryption)
- **pipe()** — streams connect karo`,
        code: `const fs = require('fs');
const zlib = require('zlib');

// Large file copy (streaming — memory efficient!)
async function copyLargeFile(src, dest) {
  const readable = fs.createReadStream(src, { highWaterMark: 64 * 1024 });
  const writable = fs.createWriteStream(dest);
  
  // pipe = readable → writable
  readable.pipe(writable);
  
  return new Promise((resolve, reject) => {
    writable.on('finish', resolve);
    readable.on('error', reject);
  });
}

// File compress karo (pipe chain)
fs.createReadStream('big-file.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('big-file.txt.gz'));

// HTTP response mein file stream karo (Express)
app.get('/download/:file', (req, res) => {
  const filePath = path.join('uploads', req.params.file);
  res.setHeader('Content-Disposition', \`attachment; filename="\${req.params.file}"\`);
  fs.createReadStream(filePath).pipe(res);
  // File puri memory mein load nahi hogi!
});`,
        language: "javascript",
        tip: "Large files ko never readFile karo — stream use karo! readFile poori file memory mein load karta hai, stream chunks mein process karta hai.",
      },
    ],
    mcqs: [
      { q: "Streams ka main advantage kya hai?", options: ["Faster processing", "Memory efficient — large data chunks mein process karo", "Simple code", "Better error handling"], correct: 1, explain: "Streams large files/data ko puri tarah memory mein load kiye bina process karte hain. 10GB file stream se serve kar sakte ho bina 10GB RAM ke!" },
      { q: "path.join() kyun use karte hain?", options: ["Faster file access", "OS-specific path separators handle karo (Windows vs Unix)", "Path encryption", "Relative to absolute convert"], correct: 1, explain: "path.join() Windows (\\) aur Unix (/) ke liye correct path separators use karta hai — cross-platform code ke liye zaroori." },
    ],
    cheatsheet: [
      "const fs = require('fs/promises') — modern async fs",
      "await fs.readFile(path, 'utf-8') — file read",
      "await fs.writeFile(path, data) — file write",
      "await fs.mkdir(path, {recursive:true}) — directory",
      "fs.createReadStream(path) — readable stream",
      "readable.pipe(writable) — stream connect",
      "path.join(__dirname, 'file.txt') — safe path",
    ],
    revision: [
      "fs/promises = modern async file operations",
      "Stream = chunks mein process, memory efficient",
      "pipe() = readable stream ko writable se connect",
      "path.join() = OS-safe paths",
      "Large files = always stream, never readFile",
    ],
  },
  {
    id: "node-security",
    title: "Security Best Practices",
    emoji: "🔐",
    category: "Intermediate",
    description: "Helmet, rate limiting, input validation, SQL injection prevention, aur CORS",
    sections: [
      {
        heading: "Common Security Vulnerabilities",
        content: `Node.js/Express apps ke liye common security threats:
- **SQL/NoSQL Injection** — malicious queries
- **XSS** — malicious scripts inject karna
- **CSRF** — cross-site request forgery
- **Rate limiting** — brute force attacks
- **Dependency vulnerabilities** — npm audit`,
        code: `const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();

// Helmet — security headers set karo (one line!)
app.use(helmet());
// Yeh set karta hai:
// Content-Security-Policy, X-XSS-Protection, 
// X-Frame-Options, Strict-Transport-Security, etc.

// CORS — allowed origins
app.use(cors({
  origin: ['https://myapp.com', 'https://admin.myapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Rate Limiting — brute force protection
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,                      // 5 attempts
  message: { error: 'Too many attempts, try after 15 minutes' },
  standardHeaders: true,
});
app.post('/auth/login', loginLimiter, loginHandler);

const apiLimiter = rateLimit({ windowMs: 60000, max: 100 });
app.use('/api', apiLimiter);`,
        language: "javascript",
      },
      {
        heading: "Input Validation & SQL Injection Prevention",
        content: `User input hamesha validate aur sanitize karo. Parameterized queries use karo!`,
        code: `const { z } = require('zod');

// Zod se input validation
const createUserSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().toLowerCase(),
  age: z.number().int().min(18).max(120),
  role: z.enum(['user', 'admin']).default('user'),
});

// Route mein validate karo
app.post('/users', async (req, res) => {
  const result = createUserSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ errors: result.error.flatten() });
  }
  const validData = result.data;  // clean, validated data
});

// SQL Injection Prevention — parameterized queries!
// ❌ NEVER DO THIS
const query = \`SELECT * FROM users WHERE email = '\${req.body.email}'\`;
// email = "' OR 1=1 --" → dumps all users!

// ✅ Always parameterized
const user = await db.query(
  'SELECT * FROM users WHERE email = ?',
  [req.body.email]  // safely escaped
);

// Sensitive data — hash passwords
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;
const hash = await bcrypt.hash(password, SALT_ROUNDS);
const match = await bcrypt.compare(plainPassword, hash);`,
        language: "javascript",
        warning: "Kabhi bhi passwords plain text mein store mat karo! bcrypt ya argon2 use karo. SALT_ROUNDS minimum 10 rakho.",
      },
    ],
    mcqs: [
      { q: "helmet() kya karta hai?", options: ["HTTPS redirect", "Security-related HTTP headers set karta hai", "Input validation", "Password hashing"], correct: 1, explain: "helmet() security HTTP headers automatically set karta hai — XSS Protection, Content Security Policy, X-Frame-Options, etc. One line security boost!" },
      { q: "SQL injection prevent karne ka sahi tarika?", options: ["Input trim karo", "Parameterized queries / prepared statements use karo", "Special chars replace karo", "HTTPS use karo"], correct: 1, explain: "Parameterized queries user input ko always safely escape karte hain. String concatenation se SQL queries kabhi mat banao!" },
    ],
    cheatsheet: [
      "app.use(helmet()) — security headers",
      "rateLimit({windowMs, max}) — brute force protection",
      "cors({origin: [...]}) — allowed origins",
      "db.query('SELECT ? FROM', [val]) — parameterized",
      "bcrypt.hash(pass, 12) — password hash",
      "bcrypt.compare(plain, hash) — verify",
      "npm audit — dependency vulnerabilities check",
    ],
    revision: [
      "Helmet = security HTTP headers one liner",
      "Rate limiting = brute force attacks prevent",
      "Parameterized queries = SQL injection prevent",
      "Never plain text passwords — bcrypt use karo",
      "CORS = allowed origins restrict karo",
    ],
  },
  {
    id: "node-deployment",
    title: "Environment Config & Production",
    emoji: "🚀",
    category: "Advanced",
    description: "dotenv, config management, PM2, logging with pino/winston, aur production tips",
    sections: [
      {
        heading: "Environment Variables & Config",
        content: `Secrets aur config ko code se alag rakho — environment variables use karo!`,
        code: `// .env file (NEVER commit to git!)
// DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
// JWT_SECRET=super-secret-key-here
// NODE_ENV=development
// PORT=3000

// dotenv setup
require('dotenv').config();

// Better: typed config validation
const { z } = require('zod');

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
});

// App start pe validate karo — fail fast!
const env = envSchema.parse(process.env);

module.exports = {
  isDev: env.NODE_ENV === 'development',
  port: env.PORT,
  db: { url: env.DATABASE_URL },
  jwt: { secret: env.JWT_SECRET },
};

// .gitignore mein add karo:
// .env
// .env.local
// node_modules/`,
        language: "javascript",
      },
      {
        heading: "PM2 — Production Process Manager",
        content: `PM2 production mein Node.js apps manage karta hai — auto restart, clustering, logging.`,
        code: `# PM2 install
npm install -g pm2

# Start karo
pm2 start app.js --name "my-api"
pm2 start npm --name "my-app" -- start  # npm start

# Cluster mode (all CPU cores use karo!)
pm2 start app.js -i max --name "api-cluster"

# Status, logs, monitoring
pm2 status
pm2 logs my-api
pm2 monit  # real-time dashboard

# Restart, reload (zero downtime), stop
pm2 restart my-api
pm2 reload my-api   # zero-downtime (cluster mode)
pm2 stop my-api

# Startup script (system reboot ke baad auto start)
pm2 startup
pm2 save

# ecosystem.config.js — config file
module.exports = {
  apps: [{
    name: 'my-api',
    script: './dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env_production: {
      NODE_ENV: 'production',
      PORT: 8080,
    }
  }]
};`,
        language: "bash",
        tip: "Production mein pm2 cluster mode use karo — multiple CPU cores utilize hotige aur ek process crash hone pe doosre serve karte rahenge!",
      },
    ],
    mcqs: [
      { q: ".env file ko git mein commit kyun nahi karna chahiye?", options: ["Large file hai", "Secrets expose ho jaayenge — public repo mein sab dekh saktey hain", "Performance issues", "Syntax errors"], correct: 1, explain: ".env mein database passwords, API keys, JWT secrets hote hain. .gitignore mein add karo! .env.example commit karo (without values) documentation ke liye." },
      { q: "PM2 cluster mode ka faida kya hai?", options: ["Single process", "Multiple CPU cores utilize, ek crash pe doosre serve karte hain", "Less memory", "Simpler debugging"], correct: 1, explain: "Cluster mode multiple process instances spawn karta hai — har CPU core ek process. Better performance + high availability ek process fail hone pe." },
    ],
    cheatsheet: [
      "require('dotenv').config() — .env load karo",
      "process.env.VAR_NAME — env variable access",
      "pm2 start app.js -i max — cluster mode",
      "pm2 reload app — zero-downtime reload",
      "pm2 logs — application logs",
      "pm2 startup && pm2 save — auto-start on reboot",
    ],
    revision: [
      ".env file = secrets store karo, never git commit",
      "Validate env variables app start pe (fail fast)",
      "PM2 = process manager, auto restart, cluster mode",
      "Cluster mode = all CPU cores utilize",
      "pm2 save + startup = system reboot pe auto start",
    ],
  },
  {
    id: "node-streams",
    title: "Streams & Buffers",
    emoji: "🌊",
    category: "Intermediate",
    description: "Node.js Streams — large files bina memory issue ke process karo, piping, Transform streams",
    sections: [
      {
        heading: "Streams Kya Hain?",
        content: `Stream = data ka continuous flow — poora file memory mein load kiye bina chunks mein process karo.

**4 Types:**
- **Readable** — source se data (fs.createReadStream)
- **Writable** — destination pe data (fs.createWriteStream)
- **Duplex** — dono (TCP socket)
- **Transform** — read karo, transform karo, write karo (zlib.createGzip)

**Problem without streams:**
100MB file read karo → 100MB RAM use. Streams se → sirf chunk (64KB default) RAM mein.`,
        diagram: `Without streams:           With streams:
[File 100MB]               [File 100MB]
     ↓                          ↓ chunk
[RAM: 100MB]               [RAM: 64KB]
     ↓                          ↓
[Process]                  [Process chunk]
                               ↓ next chunk
                           [Process chunk]`,
      },
      {
        heading: "Streams aur Piping",
        content: `pipe() streams ko connect karta hai — readable se writable tak:`,
        code: `const fs = require('fs');
const zlib = require('zlib');
const { Transform } = require('stream');

// ─── File copy with stream ─────────────────────────
fs.createReadStream('input.txt')
  .pipe(fs.createWriteStream('output.txt'));

// ─── Compression stream ────────────────────────────
// 1GB file compress karo — sirf 64KB RAM use hoga!
fs.createReadStream('big-file.log')
  .pipe(zlib.createGzip())           // Transform: compress
  .pipe(fs.createWriteStream('big-file.log.gz'));

// ─── Custom Transform Stream ──────────────────────
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    // chunk process karo
    this.push(chunk.toString().toUpperCase());
    callback();  // done, next chunk maango
  }
});

fs.createReadStream('data.txt')
  .pipe(upperCaseTransform)
  .pipe(fs.createWriteStream('upper.txt'));

// ─── HTTP streaming response ──────────────────────
const express = require('express');
const app = express();

app.get('/download', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  // File directly response mein pipe karo
  fs.createReadStream('large-file.txt').pipe(res);
  // Client ko data milta rehta hai — poori file download hone ka wait nahi!
});

// ─── Stream events ────────────────────────────────
const readable = fs.createReadStream('file.txt');
readable.on('data', (chunk) => console.log('Got chunk:', chunk.length));
readable.on('end', () => console.log('Done!'));
readable.on('error', (err) => console.error(err));`,
        language: "javascript",
        tip: "pipe() error handle nahi karta — pipeline() use karo ya error events listen karo. pipeline() automatically sab streams clean up karta hai error pe.",
      },
    ],
    mcqs: [
      { q: "Streams ka main advantage kya hai large files ke liye?", options: ["Faster processing", "Low memory usage — poori file memory mein load nahi karna", "Better error handling", "Simpler code"], correct: 1, explain: "Streams data ko chunks mein process karte hain — constant memory use (chunk size). Without streams, 1GB file = 1GB RAM. With streams = 64KB chunk size = minimal RAM." },
      { q: "pipe() aur pipeline() mein kya fark hai?", options: ["Koi fark nahi", "pipeline() error handling + cleanup automatic karta hai", "pipe() faster hai", "pipeline() async hai"], correct: 1, explain: "pipe() error handling nahi karta — stream destroy nahi hota error pe. pipeline(src, ...transforms, dest, cb) automatically sab streams destroy karta hai error ya completion pe." },
    ],
    cheatsheet: [
      "fs.createReadStream(path) — file read stream",
      "fs.createWriteStream(path) — file write stream",
      "readable.pipe(writable) — connect streams",
      "pipeline(src, transform, dest, cb) — with error handling",
      "new Transform({ transform(chunk, enc, cb) {} })",
      "stream.on('data'/'end'/'error', handler)",
    ],
    revision: [
      "Streams = chunks mein process, low memory constant",
      "Readable → Transform → Writable = processing pipeline",
      "pipe() = connect karo, pipeline() = error-safe connect",
      "HTTP response mein pipe = streaming downloads",
      "Transform = read, modify, write in one step",
    ],
  },
  {
    id: "node-events",
    title: "EventEmitter & Event-Driven Architecture",
    emoji: "📡",
    category: "Intermediate",
    description: "EventEmitter, custom events, event-driven patterns, aur Node.js event loop samjho",
    sections: [
      {
        heading: "EventEmitter — Custom Events",
        content: `Node.js EventEmitter observer pattern implement karta hai — loose coupling ke liye.`,
        code: `const EventEmitter = require('events');

// ─── Custom EventEmitter ───────────────────────────
class OrderService extends EventEmitter {
  async createOrder(orderData) {
    // Order create karo
    const order = await db.orders.create(orderData);

    // Events emit karo — ye service ka kaam complete hua
    this.emit('order:created', order);
    this.emit('order:payment-pending', order.id, order.amount);

    return order;
  }

  async processPayment(orderId, amount) {
    const result = await paymentGateway.charge(amount);
    if (result.success) {
      this.emit('order:paid', orderId);
    } else {
      this.emit('order:payment-failed', orderId, result.error);
    }
  }
}

const orderService = new OrderService();

// ─── Listeners — decoupled handlers ───────────────
// Email service ko pata nahi hai OrderService ke baare mein
orderService.on('order:created', async (order) => {
  await emailService.sendConfirmation(order.userId, order.id);
  console.log('Confirmation email sent!');
});

// Inventory service
orderService.on('order:created', async (order) => {
  await inventory.reserve(order.items);
});

// Analytics
orderService.on('order:paid', (orderId) => {
  analytics.track('payment_success', { orderId });
});

// One-time listener (once)
orderService.once('order:first-ever', () => {
  console.log('First order! Celebrate!');
});

// ─── Error handling ───────────────────────────────
orderService.on('error', (err) => {
  console.error('OrderService error:', err);
  // Bina error listener ke 'error' event = uncaught exception crash!
});

// Remove listener
const handler = (order) => console.log(order);
orderService.on('order:created', handler);
orderService.off('order:created', handler);  // remove`,
        language: "javascript",
        tip: "Hamesha 'error' event listener add karo — bina iske 'error' emit hone pe process crash kar jaata hai!",
      },
      {
        heading: "Event Loop — Node.js ke Andar",
        content: `Event Loop = Node.js ki heartbeat — asynchronous code kaise kaam karta hai:`,
        diagram: `Event Loop Phases (simplified):

  ┌─────────────────────────────┐
  │           timers            │  ← setTimeout, setInterval callbacks
  ├─────────────────────────────┤
  │      pending callbacks      │  ← I/O errors, etc.
  ├─────────────────────────────┤
  │           I/O               │  ← File, Network callbacks (majority)
  ├─────────────────────────────┤
  │            poll             │  ← New I/O events wait karo
  ├─────────────────────────────┤
  │           check             │  ← setImmediate callbacks
  ├─────────────────────────────┤
  │        close callbacks      │  ← socket.on('close', ...)
  └─────────────────────────────┘
         ↑ loop again

  Between each phase: process.nextTick() + Promises (microtasks)
  Microtasks = I/O se pehle run! (nextTick > Promises > I/O)`,
        code: `// Event Loop execution order demonstrate karo
console.log('1 - Synchronous');

setTimeout(() => console.log('5 - setTimeout (timers phase)'), 0);

setImmediate(() => console.log('6 - setImmediate (check phase)'));

Promise.resolve().then(() => console.log('3 - Promise (microtask)'));

process.nextTick(() => console.log('2 - nextTick (microtask, first!)'));

console.log('4 is wrong...');
// Actually: 1, synchronous end, THEN 2 (nextTick), 3 (promise), 4? no...
// Output: 1, "4 is wrong", 2 (nextTick), 3 (Promise), 5 (setTimeout), 6 (setImmediate)

// ─── ACTUAL ORDER ─────────────────────────────────
// 1. All synchronous code
// 2. process.nextTick callbacks (current phase end pe)
// 3. Promises (.then callbacks)
// 4. setTimeout/setInterval (timers phase)
// 5. setImmediate (check phase)`,
        language: "javascript",
      },
    ],
    mcqs: [
      { q: "EventEmitter 'error' event bina listener ke kya karta hai?", options: ["Ignore karta hai", "Process crash kar jaata hai — uncaught exception", "Console log karta hai", "Event queue mein wait karta hai"], correct: 1, explain: "'error' event special hai — agar koi listener nahi hai toh Node.js Error throw karta hai jo process crash kar deta hai. Hamesha error listener add karo: emitter.on('error', handler)." },
      { q: "Microtasks (nextTick, Promises) event loop mein kab run hote hain?", options: ["Timers ke baad", "Har event loop phase ke baad — I/O se pehle", "Sirf end mein", "Kisi bhi time"], correct: 1, explain: "Microtasks (process.nextTick + Promise callbacks) har event loop phase ke baad run hote hain — next phase start hone se pehle. nextTick Promise se pehle run hota hai." },
    ],
    cheatsheet: [
      "class Svc extends EventEmitter {}",
      "this.emit('event', data) — event emit",
      "emitter.on('event', handler) — listen",
      "emitter.once('event', handler) — one-time",
      "emitter.off('event', handler) — remove",
      "hamesha .on('error', handler) — crash prevent",
      "nextTick > Promise > setTimeout > setImmediate",
    ],
    revision: [
      "EventEmitter = observer pattern, loose coupling",
      "emit = event bhejo, on = suno, once = ek baar suno",
      "'error' event = hamesha listener chahiye",
      "Event Loop: sync → nextTick → Promise → I/O → timers",
      "setImmediate = current I/O ke baad, setTimeout = timer ke baad",
    ],
  },
  {
    id: "node-websocket",
    title: "WebSockets & Real-time (Socket.io)",
    emoji: "⚡",
    category: "Advanced",
    description: "Real-time bidirectional communication — chat apps, live notifications, Socket.io setup",
    sections: [
      {
        heading: "WebSocket vs HTTP",
        content: `**HTTP:** Client request → Server response → connection close. Ek direction, client initiate karta hai.
**WebSocket:** One-time handshake → persistent connection → **both sides** anytime message bhej saktey hain!

**Use cases:** Chat apps, live scores, collaborative editing, real-time notifications, multiplayer games.`,
        diagram: `HTTP:                    WebSocket:
Client → [req] → Server  Client ──────── Server
Client ← [res] ← Server     ↕ (anytime!)   ↕
connection close          persistent connection`,
      },
      {
        heading: "Socket.io Server & Client",
        content: `Socket.io = WebSocket + fallback (polling) + rooms + namespaces:`,
        code: `// ─── SERVER (server.js) ───────────────────────────
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:3000' }
});

// Connection event
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // ─── Join room (chat rooms, game rooms) ─────────
  socket.on('join-room', (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit('user-joined', socket.id);
  });

  // ─── Chat message ────────────────────────────────
  socket.on('send-message', ({ roomId, message, sender }) => {
    // Room ke sabko broadcast karo (sender except)
    socket.to(roomId).emit('new-message', { message, sender, time: Date.now() });
  });

  // ─── Disconnect ───────────────────────────────────
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Specific socket ko message
io.to(socketId).emit('private-msg', data);
// Sab connected users ko
io.emit('announcement', 'Server maintenance in 5 min');
// Room ke sab users ko (including sender)
io.to(roomId).emit('room-update', data);

httpServer.listen(3001);

// ─── CLIENT (React) ────────────────────────────────
import { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

function Chat({ roomId, username }) {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef<Socket>();

  useEffect(() => {
    socketRef.current = io('http://localhost:3001');
    const socket = socketRef.current;

    socket.emit('join-room', roomId);

    socket.on('new-message', (data) => {
      setMessages(prev => [...prev, data]);
    });

    socket.on('user-joined', (userId) => {
      setMessages(prev => [...prev, { system: true, text: \`\${userId} joined\` }]);
    });

    return () => { socket.disconnect(); };  // cleanup!
  }, [roomId]);

  const sendMessage = (text: string) => {
    socketRef.current?.emit('send-message', {
      roomId, message: text, sender: username
    });
    setMessages(prev => [...prev, { message: text, sender: 'You' }]);
  };

  return (/* JSX */);
}`,
        language: "javascript",
        tip: "socket.to(room).emit = room ke sab (excluding sender). io.to(room).emit = room ke sab (including sender). socket.emit = sirf us ek user ko.",
      },
    ],
    mcqs: [
      { q: "WebSocket HTTP se kaise alag hai?", options: ["Faster hai", "Persistent bidirectional connection — server bhi anytime client ko bhej sakta hai", "Secure hai", "Simpler hai"], correct: 1, explain: "HTTP request-response, one-directional (client always initiates). WebSocket = one-time handshake se persistent bidirectional channel — server push kar sakta hai bina client request ke." },
      { q: "socket.to(room).emit vs io.to(room).emit mein kya fark?", options: ["Koi fark nahi", "socket.to = sender except, io.to = including sender", "io.to faster hai", "socket.to broadcast hai"], correct: 1, explain: "socket.to(room) = room ke sab users ko except jo send kar raha hai. io.to(room) = room ke sab users ko including sender." },
    ],
    cheatsheet: [
      "io.on('connection', socket => {}) — new client",
      "socket.emit('event', data) — sirf us client ko",
      "socket.to(room).emit() — room ko except sender",
      "io.to(room).emit() — room ko including sender",
      "io.emit() — sab connected clients",
      "socket.join(room) — room join",
      "socket.on('disconnect', cb) — client gone",
    ],
    revision: [
      "WebSocket = persistent bidirectional, HTTP = request-response",
      "Socket.io = WebSocket + rooms + namespaces + fallback",
      "io.on('connection') = har naye client ke liye",
      "socket.to() = excluding sender, io.to() = including sender",
      "useRef socket store karo React mein — cleanup on unmount",
    ],
  },
  {
    id: "node-typescript",
    title: "Node.js with TypeScript",
    emoji: "🔷",
    category: "Intermediate",
    description: "TypeScript Node.js setup, types, Express typing, path aliases, aur compilation",
    sections: [
      {
        heading: "TypeScript Node.js Setup",
        content: `TypeScript Node.js project setup karna:`,
        code: `# ─── Setup ────────────────────────────────────────
npm init -y
npm install typescript ts-node @types/node --save-dev
npm install express
npm install @types/express --save-dev

# tsconfig.json generate karo
npx tsc --init

# ─── tsconfig.json (recommended settings) ──────────
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    // Path aliases
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@controllers/*": ["src/controllers/*"],
      "@services/*": ["src/services/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

# ─── package.json scripts ─────────────────────────
{
  "scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "typecheck": "tsc --noEmit"
  }
}`,
        language: "bash",
        tip: "ts-node-dev = ts-node + nodemon. Development mein fast restart. Production ke liye tsc se compile karo → node dist/ chalao.",
      },
      {
        heading: "Typed Express + Middleware",
        content: `Express TypeScript mein properly type karna:`,
        code: `import express, { Request, Response, NextFunction, Router } from 'express';

// ─── Custom typed Request ──────────────────────────
interface AuthRequest extends Request {
  user?: { id: number; email: string; role: string };
}

// ─── Typed Route Params & Body ────────────────────
interface CreateUserBody {
  name: string;
  email: string;
  password: string;
}

interface UserParams {
  id: string;
}

const router = Router();

// GET /users/:id — typed params
router.get('/users/:id', async (
  req: Request<UserParams>,
  res: Response
) => {
  const userId = parseInt(req.params.id);  // string → number
  const user = await UserService.findById(userId);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

// POST /users — typed body
router.post('/users', async (
  req: Request<{}, {}, CreateUserBody>,
  res: Response
) => {
  const { name, email, password } = req.body;  // fully typed!
  const user = await UserService.create({ name, email, password });
  res.status(201).json(user);
});

// ─── Typed Middleware ─────────────────────────────
function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  req.user = verifyToken(token);  // req pe user attach
  next();
}

// ─── Error Handler ────────────────────────────────
// 4 parameters = Express error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});`,
        language: "typescript",
      },
    ],
    mcqs: [
      { q: "Request<Params, ResBody, ReqBody, Query> mein 3rd generic kya hai?", options: ["Response body", "Request params", "Request body type (req.body)", "Query string"], correct: 2, explain: "Request<Params, ResponseBody, RequestBody, QueryString> — 3rd generic = req.body ka type. POST/PUT handlers mein request body type define karte hain yahan." },
      { q: "Production mein TypeScript Node app kaise run karte hain?", options: ["ts-node se", "tsc compile → node dist/", "tsx se", "babel se"], correct: 1, explain: "Production mein: tsc se JavaScript compile karo → dist/ folder. Phir node dist/index.js. ts-node/tsx development tools hain — runtime TypeScript compilation production mein slow hai." },
    ],
    cheatsheet: [
      "ts-node-dev --respawn src/index.ts — dev server",
      "tsc && node dist/ — production",
      "Request<Params, Res, Body, Query> — typed request",
      "interface AuthReq extends Request { user?: User }",
      "@types/express — Express type definitions",
      "paths in tsconfig — import aliases",
      "strict: true — best TypeScript practices",
    ],
    revision: [
      "ts-node-dev = dev, tsc → node dist = production",
      "Request<P,Rb,Qb,Q> generics se typed routes",
      "Custom interface extends Request — user attach pattern",
      "4-param function = Express error handler",
      "paths config = @/services/... import aliases",
    ],
  },
  {
    id: "node-redis",
    title: "Caching with Redis",
    emoji: "⚡",
    category: "Advanced",
    description: "Redis setup, caching strategies, session store, rate limiting, pub/sub with Node.js",
    sections: [
      {
        heading: "Redis Kya Hai aur Kyun?",
        content: `Redis = in-memory data store — database se 100x fast reads.

**Use cases:**
- **Caching** — database queries cache karo
- **Sessions** — user sessions store karo
- **Rate limiting** — API calls count karo
- **Pub/Sub** — microservices communication
- **Queues** — background jobs`,
      },
      {
        heading: "Redis Caching Patterns",
        content: `ioredis se Redis Node.js mein use karo:`,
        code: `const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: 6379,
  password: process.env.REDIS_PASSWORD,
});

// ─── Cache-Aside Pattern ──────────────────────────
// 1. Cache check karo, 2. Miss pe DB se, 3. Cache mein save
async function getUser(userId) {
  const cacheKey = \`user:\${userId}\`;

  // Check cache
  const cached = await redis.get(cacheKey);
  if (cached) {
    console.log('Cache HIT!');
    return JSON.parse(cached);
  }

  // Cache miss — DB se fetch
  console.log('Cache MISS — fetching from DB');
  const user = await db.users.findById(userId);

  // Cache mein save karo (1 hour TTL)
  await redis.setex(cacheKey, 3600, JSON.stringify(user));

  return user;
}

// ─── Cache Invalidation ───────────────────────────
async function updateUser(userId, data) {
  await db.users.update(userId, data);
  await redis.del(\`user:\${userId}\`);  // cache invalidate karo!
}

// ─── Rate Limiting with Redis ─────────────────────
async function rateLimitMiddleware(req, res, next) {
  const key = \`rate:\${req.ip}\`;
  const limit = 100;  // 100 requests per window
  const window = 60;  // 60 seconds

  const current = await redis.incr(key);  // increment counter
  if (current === 1) {
    await redis.expire(key, window);  // first request pe TTL set karo
  }

  if (current > limit) {
    return res.status(429).json({
      error: 'Too many requests',
      retryAfter: await redis.ttl(key)
    });
  }

  res.setHeader('X-RateLimit-Remaining', limit - current);
  next();
}

// ─── Session Store ────────────────────────────────
const session = require('express-session');
const RedisStore = require('connect-redis').default;

app.use(session({
  store: new RedisStore({ client: redis }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, maxAge: 24 * 60 * 60 * 1000 }
}));`,
        language: "javascript",
        tip: "setex key = set + expire ek saath. TTL (Time-To-Live) hamesha set karo — warna Redis memory bhar jaati hai stale data se!",
      },
    ],
    mcqs: [
      { q: "Cache-Aside pattern mein data kab cache mein jaata hai?", options: ["Hamesha pehle se", "Cache miss pe — DB se fetch ke baad", "User login pe", "App start pe"], correct: 1, explain: "Cache-Aside (Lazy Loading): 1. Cache check karo, 2. Miss pe DB se fetch, 3. Cache mein save. Sirf actually requested data cache hota hai — memory efficient." },
      { q: "Redis mein TTL kyun set karna chahiye?", options: ["Performance ke liye", "Security ke liye", "Stale data auto expire ho — memory leaks prevent", "Required hai"], correct: 2, explain: "TTL bina cache forever rehta hai — stale/outdated data serve hoga aur Redis memory bhar jaayegi. TTL = automatic expiry = always fresh data guarantee + controlled memory usage." },
    ],
    cheatsheet: [
      "redis.get(key) — value fetch",
      "redis.setex(key, ttl, value) — set with expiry",
      "redis.del(key) — cache invalidate",
      "redis.incr(key) — atomic counter (rate limiting)",
      "redis.expire(key, seconds) — TTL set",
      "redis.ttl(key) — remaining time",
      "JSON.stringify/parse — object store karo",
    ],
    revision: [
      "Redis = in-memory, 100x faster than DB",
      "Cache-Aside = check → miss → DB → cache",
      "setex = set + expire ek command",
      "Cache invalidate karo data update pe",
      "Rate limiting = incr + expire pattern",
    ],
  },
  {
    id: "node-testing",
    title: "Testing Node.js — Jest & Supertest",
    emoji: "🧪",
    category: "Advanced",
    description: "Unit tests, integration tests, API testing with Supertest, mocking, coverage",
    sections: [
      {
        heading: "Testing Setup — Jest",
        content: `Jest = Node.js testing framework — built-in assertions, mocks, coverage:`,
        code: `# Install
npm install jest @types/jest ts-jest --save-dev
npm install supertest @types/supertest --save-dev

# package.json
{
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "testMatch": ["**/*.test.ts"],
    "coverageThreshold": {
      "global": { "lines": 80 }
    }
  },
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}`,
        language: "bash",
      },
      {
        heading: "Unit Tests & API Integration Tests",
        content: `Unit tests aur Supertest se API testing:`,
        code: `// ─── Unit Test — Service Layer ────────────────────
// userService.test.ts
import { UserService } from '../services/UserService';
import { UserRepository } from '../repositories/UserRepository';

// Mock repository
jest.mock('../repositories/UserRepository');
const mockRepo = UserRepository as jest.Mocked<typeof UserRepository>;

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new UserService(new UserRepository());
  });

  it('findById existing user return kare', async () => {
    const mockUser = { id: 1, name: 'Alice', email: 'alice@test.com' };
    mockRepo.prototype.findById.mockResolvedValue(mockUser);

    const result = await service.findById(1);

    expect(result).toEqual(mockUser);
    expect(mockRepo.prototype.findById).toHaveBeenCalledWith(1);
  });

  it('findById null pe error throw kare', async () => {
    mockRepo.prototype.findById.mockResolvedValue(null);
    await expect(service.findById(999)).rejects.toThrow('User not found');
  });
});

// ─── API Integration Test — Supertest ─────────────
// app.test.ts
import request from 'supertest';
import app from '../app';  // Express app

describe('POST /api/users', () => {
  it('valid data pe user create kare', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Bob', email: 'bob@test.com', password: 'secret123' })
      .expect(201)
      .expect('Content-Type', /json/);

    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name: 'Bob',
      email: 'bob@test.com',
    });
    expect(response.body.password).toBeUndefined();  // password exposed mat karo!
  });

  it('invalid email pe 400 return kare', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Bob', email: 'not-email', password: '123' })
      .expect(400);

    expect(response.body.errors).toBeDefined();
  });
});`,
        language: "typescript",
        tip: "Supertest actual HTTP server start nahi karta — app export karo (app.listen() bina) aur Supertest directly inject karta hai. Fast aur no port conflicts!",
      },
    ],
    mcqs: [
      { q: "jest.mock() kya karta hai?", options: ["Test slow karta hai", "Module ko mock se replace karta hai — actual implementation call nahi hoti", "Error throw karta hai", "Coverage improve karta hai"], correct: 1, explain: "jest.mock('./module') = actual module ki jagah mock version use karo. Unit tests mein dependencies isolate karne ke liye — test sirf ek unit ko test kare, baaki mock." },
      { q: "Supertest se API test karne ka advantage kya hai?", options: ["Faster tests", "Actual HTTP server start kiye bina full request-response cycle test", "Better coverage", "TypeScript support"], correct: 1, explain: "Supertest Express app directly inject karta hai — actual server start nahi hota, no port binding, no async server setup. Fast, isolated API testing." },
    ],
    cheatsheet: [
      "jest.fn() — mock function",
      "jest.mock('./module') — module mock",
      "mockFn.mockResolvedValue(data) — async mock",
      "expect(fn).rejects.toThrow('msg') — error test",
      "request(app).get('/route').expect(200) — Supertest",
      ".send(body) — request body",
      ".expect('Content-Type', /json/) — header check",
    ],
    revision: [
      "Unit test = service isolate, dependencies mock karo",
      "jest.mock = module replace with mock",
      "mockFn.mockResolvedValue = async mock return value",
      "Supertest = HTTP test bina server start kiye",
      "beforeEach clearAllMocks = tests isolate karo",
    ],
  },
  {
    id: "node-queue",
    title: "Job Queues — BullMQ",
    emoji: "📋",
    category: "Advanced",
    description: "Background jobs, email queues, retry logic, scheduled jobs with BullMQ + Redis",
    sections: [
      {
        heading: "Job Queue Kyun Chahiye?",
        content: `HTTP request mein heavy tasks mat karo — user wait karega!

**Queue wale kaam:**
- Email sending (SMTP slow hai)
- Image processing/resize
- PDF generation
- 3rd party API calls
- Scheduled tasks (cron)
- Retry logic for failures`,
        diagram: `Without Queue:
HTTP Request → [Email Send (slow)] → Response (5 sec wait!)

With Queue:
HTTP Request → Queue job → Response (instant!)
                              ↓ (background)
                    Worker → Email Send`,
      },
      {
        heading: "BullMQ Setup",
        content: `BullMQ = Redis-backed job queue — most popular Node.js queue library:`,
        code: `const { Queue, Worker, QueueEvents } = require('bullmq');

const connection = { host: 'localhost', port: 6379 };

// ─── Producer — job add karo ───────────────────────
const emailQueue = new Queue('email', { connection });
const imageQueue = new Queue('image-processing', { connection });

// Job add karo
await emailQueue.add('welcome-email', {
  to: 'user@example.com',
  name: 'Alice',
  templateId: 'welcome',
}, {
  attempts: 3,          // 3 baar retry
  backoff: { type: 'exponential', delay: 2000 },  // 2s, 4s, 8s
  removeOnComplete: 100,  // 100 completed jobs keep karo
  removeOnFail: 50,       // 50 failed jobs keep karo
});

// Delayed job (1 hour baad run)
await emailQueue.add('reminder', data, { delay: 60 * 60 * 1000 });

// Repeating job (every day at 9am)
await emailQueue.add('daily-report', {}, {
  repeat: { cron: '0 9 * * *' }
});

// ─── Worker — job process karo ─────────────────────
const emailWorker = new Worker('email', async (job) => {
  console.log('Processing job:', job.id, job.name);
  const { to, name, templateId } = job.data;

  // Heavy work karo
  await sendEmail({ to, subject: 'Welcome!', template: templateId, data: { name } });

  // Progress update (optional)
  await job.updateProgress(100);

  return { sent: true };  // job result
}, {
  connection,
  concurrency: 5,  // 5 jobs ek saath process karo
});

// Worker events
emailWorker.on('completed', (job, result) => {
  console.log(\`Job \${job.id} completed\`, result);
});
emailWorker.on('failed', (job, err) => {
  console.error(\`Job \${job?.id} failed:\`, err.message);
});

// ─── Express endpoint ─────────────────────────────
app.post('/register', async (req, res) => {
  const user = await UserService.create(req.body);

  // Queue mein daalo — request block mat karo!
  await emailQueue.add('welcome-email', {
    to: user.email,
    name: user.name,
    templateId: 'welcome'
  });

  res.status(201).json({ user });  // instant response!
});`,
        language: "javascript",
        tip: "Worker separate process/server pe run karo main app se — agar email service down ho toh main app affect nahi hogi. Microservices pattern!",
      },
    ],
    mcqs: [
      { q: "Job queue ka main benefit kya hai?", options: ["Faster code", "HTTP response fast — heavy tasks background mein", "Better security", "Simpler code"], correct: 1, explain: "Queue = HTTP request instantly respond karo, heavy task background mein async process karo. User ko wait nahi karna pata. Email, image processing, PDF generation sab queue mein daalo." },
      { q: "BullMQ mein attempts aur backoff kya karta hai?", options: ["Speed improve karta hai", "Job retry karta hai failure pe — exponential delay ke saath", "Concurrency set karta hai", "Memory optimize karta hai"], correct: 1, explain: "attempts = kitni baar retry karo failure pe. backoff = retries ke beech delay (exponential = 2s, 4s, 8s, ...). Transient failures (network, 3rd party APIs) automatically handle ho jaate hain." },
    ],
    cheatsheet: [
      "new Queue('name', {connection}) — queue create",
      "queue.add('jobName', data, opts) — job add",
      "new Worker('name', async job => {}, opts) — processor",
      "attempts + backoff — automatic retry",
      "delay: ms — delayed job",
      "cron: '0 9 * * *' — scheduled job",
      "concurrency — parallel jobs count",
    ],
    revision: [
      "Queue = HTTP se alag heavy tasks run karo",
      "Producer = job add, Worker = job process",
      "attempts + exponential backoff = reliable retries",
      "Delayed jobs = schedule future tasks",
      "Worker separate service mein = fault isolation",
    ],
  },
  {
    id: "node-graphql",
    title: "GraphQL with Node.js",
    emoji: "◈",
    category: "Advanced",
    description: "GraphQL schema, resolvers, mutations, Apollo Server, REST vs GraphQL comparison",
    sections: [
      {
        heading: "GraphQL Kya Hai?",
        content: `GraphQL = query language for APIs — client decide karta hai exactly kya data chahiye.

**REST problems GraphQL solve karta hai:**
- **Over-fetching** — /users 50 fields laata hai, 3 chahiye
- **Under-fetching** — /user/1 → /posts?userId=1 → /comments?postId=... (N+1)
- **Multiple endpoints** — sirf ek /graphql endpoint

**GraphQL benefits:**
- Exactly wahi fields maango jo chahiye
- Related data ek query mein
- Strongly typed schema
- Self-documenting API`,
        diagram: `REST:                        GraphQL:
GET /users          →        query {
GET /users/1/posts  →          user(id: 1) {
GET /posts/5/comments→           name
(3 requests!)                    posts {
                                   title
                                   comments { body }
                                 }
                               }
                             }   (1 request!)`,
      },
      {
        heading: "Apollo Server Setup",
        content: `Apollo Server se GraphQL API banao:`,
        code: `const { ApolloServer, gql } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

// ─── Schema (Type Definitions) ────────────────────
const typeDefs = gql\`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    author: User!
    createdAt: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts(limit: Int = 10): [Post!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
    createPost(title: String!, body: String!, authorId: ID!): Post!
    deletePost(id: ID!): Boolean!
  }
\`;

// ─── Resolvers ────────────────────────────────────
const resolvers = {
  Query: {
    users: () => db.users.findAll(),
    user: (_, { id }) => db.users.findById(id),
    posts: (_, { limit }) => db.posts.findAll({ limit }),
  },

  Mutation: {
    createUser: async (_, { name, email, password }) => {
      const hashed = await bcrypt.hash(password, 10);
      return db.users.create({ name, email, password: hashed });
    },
    createPost: (_, { title, body, authorId }) =>
      db.posts.create({ title, body, authorId }),
    deletePost: async (_, { id }) => {
      await db.posts.delete(id);
      return true;
    },
  },

  // Nested resolver — User.posts
  User: {
    posts: (parent) => db.posts.findByAuthorId(parent.id),
    // parent = User object from parent resolver
  },

  Post: {
    author: (parent) => db.users.findById(parent.authorId),
  },
};

// ─── Server ───────────────────────────────────────
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => ({
    user: await getUserFromToken(req.headers.authorization)
  }),
});

// ─── Query Example ────────────────────────────────
// Client se:
// query GetUser($id: ID!) {
//   user(id: $id) {
//     name
//     posts { title }
//   }
// }`,
        language: "javascript",
        tip: "N+1 problem: User.posts resolver har user ke liye alag DB query karta hai. DataLoader (batching) se solve karo — 1000 users ke posts 1 DB call mein!",
      },
    ],
    mcqs: [
      { q: "GraphQL mein over-fetching problem kya hai?", options: ["Server pe extra load", "API se zyada data aata hai jo chahiye — bandwidth waste", "Query slow hai", "Security issue"], correct: 1, explain: "REST /users 50 fields return karta hai lekin sirf name+email chahiye — bandwidth waste. GraphQL mein exactly wahi fields maango jo chahiye — no more, no less." },
      { q: "GraphQL resolver mein `parent` argument kya hai?", options: ["Root query object", "Parent type ka resolved value — nested resolvers mein pass hota hai", "Request object", "Schema definition"], correct: 1, explain: "parent = upar wale resolver ka result. User.posts mein parent = User object jo Query.user ne return kiya. Isse nested data efficiently fetch kar sakte ho." },
    ],
    cheatsheet: [
      "typeDefs = schema (types, Query, Mutation)",
      "resolvers = actual functions jo data return karein",
      "Query { users: () => db.all() } — list",
      "Mutation { create: (_, args) => db.create(args) }",
      "User { posts: (parent) => db.byUserId(parent.id) }",
      "context = auth, DB connection per request",
      "! = non-nullable, [] = list type",
    ],
    revision: [
      "GraphQL = ek endpoint, client decides what data",
      "typeDefs = schema contract, resolvers = implementations",
      "Nested resolvers = parent ke ID se related data fetch",
      "N+1 problem = DataLoader se solve karo",
      "context = request-level auth/DB injection",
    ],
  },
  {
    id: "node-microservices",
    title: "Microservices Architecture",
    emoji: "🏗️",
    category: "Advanced",
    description: "Monolith vs Microservices, REST inter-service communication, message queues, API Gateway",
    sections: [
      {
        heading: "Monolith vs Microservices",
        content: `**Monolith:** Sab code ek app mein — simple but scale karna mushkil.
**Microservices:** Har feature alag service — independent deploy, scale, fail.

**Kab Microservices:**
- Different parts ko alag scale karna ho (checkout service > browse service)
- Different teams alag kaam karein
- Different tech stack (ML service Python, main app Node)
- Large team (Conway's Law)

**Kab Monolith:**
- Small team, early startup
- Functionality clear nahi hai abhi
- Operational complexity avoid karna`,
        diagram: `Monolith:                    Microservices:
┌─────────────────┐          ┌──────────┐ ┌──────────┐
│  Users           │          │  Users   │ │  Orders  │
│  Orders          │    →     │  Service │ │  Service │
│  Payments        │          └──────────┘ └──────────┘
│  Notifications   │          ┌──────────┐ ┌──────────┐
└─────────────────┘          │ Payments │ │  Notifs  │
                              │ Service  │ │  Service │
                              └──────────┘ └──────────┘`,
      },
      {
        heading: "Service Communication Patterns",
        content: `Services aapas mein communicate karne ke do tarike:`,
        code: `// ─── 1. Synchronous — REST/HTTP ───────────────────
// Order service → User service se user check karo
class OrderService {
  async createOrder(userId, items) {
    // HTTP call to User Service
    const userRes = await fetch(\`\${USER_SERVICE_URL}/users/\${userId}\`);
    if (!userRes.ok) throw new Error('User not found');
    const user = await userRes.json();

    const order = await db.orders.create({ userId, items });

    // HTTP call to Notification Service
    await fetch(\`\${NOTIFICATION_SERVICE_URL}/notify\`, {
      method: 'POST',
      body: JSON.stringify({ userId, event: 'order_created', orderId: order.id })
    });

    return order;
  }
}

// ─── 2. Async — Message Queue (Event-Driven) ────────
// Services loosely coupled — ek fail ho toh doosre impact nahi
const { Queue } = require('bullmq');
const notificationQueue = new Queue('notifications', { connection });

class OrderService {
  async createOrder(userId, items) {
    const order = await db.orders.create({ userId, items });

    // Event publish karo — Notification Service subscribe karega
    await notificationQueue.add('order-created', {
      userId,
      orderId: order.id,
      email: items[0].name
    });

    return order;  // wait nahi karo notification ke liye
  }
}

// Notification Service — Worker
const worker = new Worker('notifications', async (job) => {
  if (job.name === 'order-created') {
    await emailService.sendOrderConfirmation(job.data);
  }
}, { connection });

// ─── API Gateway Pattern ──────────────────────────
// Single entry point — routes to different services
app.use('/api/users/*', proxy({ target: USER_SERVICE_URL }));
app.use('/api/orders/*', proxy({ target: ORDER_SERVICE_URL }));
app.use('/api/payments/*', proxy({ target: PAYMENT_SERVICE_URL }));`,
        language: "javascript",
        tip: "Start with modular monolith — clear service boundaries rakho code mein. Jab actual scale/team issue aaye tab extract karo microservice. Premature microservices = distributed monolith (worst of both worlds)!",
      },
    ],
    mcqs: [
      { q: "Microservices mein event-driven architecture ka faida kya hai?", options: ["Faster communication", "Loose coupling — ek service fail ho toh doosri affect nahi", "Simpler code", "Better security"], correct: 1, explain: "Event-driven (async via queue) = services loosely coupled. Notification service down ho toh Order service chal rahi hai — order create hoga, notification baad mein retry hogi. Sync REST mein → notification fail = order fail." },
      { q: "Kab Monolith prefer karna chahiye?", options: ["Hamesha", "Small team, early stage, unclear boundaries", "Large scale apps", "Multiple teams"], correct: 1, explain: "Early stage mein boundaries clear nahi hoti. Monolith se shuru karo — modular code rakho. Jab actual scale issues aayein tab extract karo. 'Distributed monolith' avoid karo." },
    ],
    cheatsheet: [
      "Sync = HTTP/REST (tight coupling, simple)",
      "Async = Message Queue (loose coupling, resilient)",
      "API Gateway = single entry, proxy to services",
      "Service discovery = DNS ya Kubernetes services",
      "Circuit breaker = failing service pe calls stop karo",
      "Modular monolith → extract microservices when needed",
    ],
    revision: [
      "Microservices = independent deploy, scale, fail",
      "Sync (HTTP) = simple, tight coupling",
      "Async (Queue) = resilient, loose coupling",
      "API Gateway = single entry point",
      "Monolith first → microservices jab actual need ho",
    ],
  },
  {
    id: "node-best-practices",
    title: "Best Practices & Clean Architecture",
    emoji: "✅",
    category: "Advanced",
    description: "Project structure, error handling, validation, logging, SOLID principles Node.js mein",
    sections: [
      {
        heading: "Project Structure — Layered Architecture",
        content: `Clean architecture = separated concerns, testable, maintainable:`,
        diagram: `src/
├── controllers/     ← HTTP layer: req/res handle
│   └── userController.ts
├── services/        ← Business logic: rules, workflows
│   └── UserService.ts
├── repositories/    ← Data layer: DB queries
│   └── UserRepository.ts
├── models/          ← Data types, schemas (Prisma/TypeORM)
│   └── User.ts
├── middleware/      ← Auth, validation, rate limit
│   └── authMiddleware.ts
├── routes/          ← Express routes
│   └── userRoutes.ts
├── utils/           ← Helpers, formatters
├── config/          ← App config, env vars
└── app.ts           ← Express setup

Rule: Controller → Service → Repository
Controller business logic nahi jaanta
Service DB nahi jaanta
Repository business logic nahi jaanta`,
      },
      {
        heading: "Error Handling & Validation",
        content: `Production-grade error handling patterns:`,
        code: `// ─── Custom Error Classes ─────────────────────────
class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

class NotFoundError extends AppError {
  constructor(resource: string) {
    super(\`\${resource} not found\`, 404, 'NOT_FOUND');
  }
}

class ValidationError extends AppError {
  constructor(public fields: Record<string, string>) {
    super('Validation failed', 400, 'VALIDATION_ERROR');
  }
}

// ─── Async error wrapper ───────────────────────────
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Controller mein use karo — no try/catch har jagah!
router.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await UserService.findById(req.params.id);
  if (!user) throw new NotFoundError('User');  // automatic 404!
  res.json(user);
}));

// ─── Global Error Handler ─────────────────────────
app.use((err, req, res, next) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const isDev = process.env.NODE_ENV === 'development';

  res.status(statusCode).json({
    error: {
      message: err.message,
      code: err.code || 'INTERNAL_ERROR',
      ...(isDev && { stack: err.stack }),  // dev only!
    }
  });
});

// ─── Input Validation — Zod ───────────────────────
import { z } from 'zod';

const createUserSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(8).regex(/[A-Z]/).regex(/[0-9]/),
  age: z.number().int().min(13).max(120).optional(),
});

function validateBody(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: result.error.flatten().fieldErrors,
      });
    }
    req.body = result.data;  // parsed + typed
    next();
  };
}

router.post('/users', validateBody(createUserSchema), createUserHandler);`,
        language: "typescript",
        tip: "asyncHandler wrapper se har route mein try/catch nahi likhna padta — error automatically next() mein jaata hai global error handler ke paas.",
      },
    ],
    mcqs: [
      { q: "Controller layer mein business logic kyun nahi honi chahiye?", options: ["Performance issue", "Testing aur reuse mushkil hogi — service layer mein rakho", "Security issue", "TypeScript requirement"], correct: 1, explain: "Controller = HTTP handling only (req parse, res send). Business logic service mein rakho — test easily (bina HTTP), reuse easily (multiple controllers/queues/CLI se call)." },
      { q: "asyncHandler wrapper ka benefit kya hai?", options: ["Code faster hai", "Har route mein try/catch nahi likhna — errors auto next() mein jaate hain", "Memory save hoti hai", "TypeScript support"], correct: 1, explain: "asyncHandler = Promise.resolve(fn).catch(next). Async route errors automatically Express error handler mein jaate hain. DRY code — no repeated try/catch in every route." },
    ],
    cheatsheet: [
      "Controller → Service → Repository — layered arch",
      "class AppError extends Error { statusCode }",
      "asyncHandler = auto catch + next(err)",
      "Global error handler = 4 param middleware",
      "Zod.safeParse = validation with typed result",
      "NODE_ENV=development mein stack show karo only",
    ],
    revision: [
      "Controller = HTTP only, Service = business logic, Repository = DB",
      "Custom error classes = structured error responses",
      "asyncHandler = no try/catch in every route",
      "Zod = runtime validation + TypeScript types",
      "Global error handler = centralized error responses",
    ],
  },
  // ─── Interview Questions ──────────────────────────────────────────────────
  {
    id: 410,
    level: "Beginner" as const,
    tags: ["streams"],
    question: "Node.js Streams kya hain? Regular file read se kaise different hain?",
    answer: `Regular readFileSync/readFile: Poori file memory mein load hoti hai — 100MB file = 100MB RAM.

Streams: Data ko chunks mein process karo — constant memory (default chunk ~64KB).

4 types:
1. Readable — source se data (fs.createReadStream)
2. Writable — destination pe data (fs.createWriteStream)
3. Duplex — dono directions (TCP socket)
4. Transform — read + transform + write (zlib.createGzip)

pipe() streams ko connect karta hai. Real-world: File serve karo, CSV parse karo, compress karo — sab streams se efficiently.`,
    code: `// Without stream: 1GB RAM
const data = fs.readFileSync('big.log');

// With stream: ~64KB RAM
fs.createReadStream('big.log')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('big.log.gz'));`,
  },
  {
    id: 411,
    level: "Intermediate" as const,
    tags: ["streams"],
    question: "pipe() aur pipeline() mein kya fark hai? Kab kaunsa use karein?",
    answer: `pipe(): Streams connect karta hai lekin error handling automatic nahi karta.
- Error pe stream destroy nahi hota
- Memory leaks possible hain

pipeline(): Error handling + cleanup automatic hai.
- Koi bhi stream error pe sab destroy ho jaate hain
- Callback se completion/error track karo
- util.promisify se async/await ke saath use karo

Rule: Production mein hamesha pipeline() use karo. pipe() sirf simple cases mein jahan errors ka risk na ho.`,
    code: `const { pipeline } = require('stream/promises');

// Safe — errors automatically handle + cleanup
await pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('output.gz')
);`,
  },
  {
    id: 412,
    level: "Beginner" as const,
    tags: ["events"],
    question: "EventEmitter mein 'error' event special kyun hai?",
    answer: `'error' event Node.js mein special hai — agar koi listener registered nahi hai aur 'error' emit hota hai, Node.js process crash kar deta hai (uncaught exception).

Yeh behavior other events se alag hai — other events bina listener ke silently ignore hote hain.

Fix: Hamesha error listener add karo:
emitter.on('error', (err) => { console.error(err); })

Best practice: EventEmitter extend karo toh apna error handling add karo. Production mein error monitoring service (Sentry) pe bhejo.`,
    code: `// ❌ DANGEROUS — process crash!
const emitter = new EventEmitter();
emitter.emit('error', new Error('crash!'));

// ✅ SAFE
emitter.on('error', (err) => {
  console.error('Handled:', err.message);
  // Sentry.captureException(err);
});`,
  },
  {
    id: 413,
    level: "Advanced" as const,
    tags: ["events", "event-loop"],
    question: "process.nextTick() aur Promise.resolve().then() mein kya fark hai?",
    answer: `Dono microtasks hain — I/O callbacks se pehle run hote hain. Lekin order mein fark:

process.nextTick() Promises se PEHLE run hota hai.

Execution order:
1. Synchronous code
2. process.nextTick callbacks
3. Promise callbacks (.then, async/await)
4. I/O callbacks (fs, network)
5. setTimeout/setInterval
6. setImmediate

process.nextTick overuse dangerous hai — infinite recursion se Event Loop starve ho sakta hai (I/O callbacks kabhi run nahi honge).

Use setImmediate agar current phase ke baad chahiye, process.nextTick agar current operation ke immediately baad.`,
    code: `console.log('1 sync');
process.nextTick(() => console.log('2 nextTick'));
Promise.resolve().then(() => console.log('3 promise'));
setTimeout(() => console.log('4 setTimeout'), 0);
console.log('5 sync');
// Output: 1, 5, 2, 3, 4`,
  },
  {
    id: 414,
    level: "Beginner" as const,
    tags: ["websocket"],
    question: "WebSocket aur HTTP mein kya fark hai? Kab WebSocket use karein?",
    answer: `HTTP: Request-Response — client hamesha pehle bhejta hai, connection close ho jaati hai.
WebSocket: Ek baar handshake → persistent bidirectional connection — server bhi anytime bhej sakta hai.

WebSocket kab:
✅ Chat applications
✅ Live scores/stock prices
✅ Multiplayer games
✅ Collaborative editing (Google Docs jaisa)
✅ Real-time notifications

HTTP kab (HTTP polling ya SSE):
✅ One-directional server → client updates
✅ Simple notifications (SSE better hai)
✅ REST APIs

Socket.io = WebSocket + fallback + rooms + namespaces — most popular choice.`,
  },
  {
    id: 415,
    level: "Intermediate" as const,
    tags: ["websocket"],
    question: "Socket.io mein socket.to() aur io.to() mein kya fark hai?",
    answer: `socket.to(room).emit() — room ke sab users ko EXCEPT sender
io.to(room).emit() — room ke sab users ko INCLUDING sender
socket.emit() — sirf us ek client ko
io.emit() — sab connected clients ko (global broadcast)

Examples:
- Chat message: socket.to(roomId).emit() — sender ko apna msg already show hai
- System announcement: io.to(roomId).emit() — sab users ko
- Private message: io.to(targetSocketId).emit() — specific user ko

Memory: socket = excluding self, io = including self.`,
  },
  {
    id: 416,
    level: "Beginner" as const,
    tags: ["typescript"],
    question: "Node.js mein TypeScript setup ke liye kya zaruri hai?",
    answer: `Dependencies:
npm install typescript ts-node @types/node --save-dev

tsconfig.json key settings:
- target: "ES2020" — modern JS features
- module: "commonjs" — Node.js require
- outDir: "./dist" — compiled output
- rootDir: "./src" — source files
- strict: true — type safety

Dev: ts-node-dev --respawn src/index.ts (auto-restart on file change)
Build: tsc (TypeScript → JavaScript in dist/)
Production: node dist/index.js

@types/express — Express TypeScript definitions
@types/node — Node.js built-ins types`,
  },
  {
    id: 417,
    level: "Intermediate" as const,
    tags: ["typescript"],
    question: "Express TypeScript mein Request ka generic type kaise use karte hain?",
    answer: `Request<Params, ResponseBody, RequestBody, QueryString> — 4 generic type parameters.

Common usage:
- Request<{ id: string }> — req.params.id typed
- Request<{}, {}, CreateUserDto> — req.body typed
- Request<{}, {}, {}, { page: string }> — req.query typed

Custom middleware ke liye interface extend karo:
interface AuthRequest extends Request { user?: JwtPayload }

Benefits: req.params.id automatically string hai, req.body fields typed hain, TypeScript autocomplete milta hai.`,
    code: `router.post('/users',
  async (req: Request<{}, {}, { name: string; email: string }>, res) => {
    const { name, email } = req.body;  // fully typed!
    const user = await createUser(name, email);
    res.status(201).json(user);
  }
);`,
  },
  {
    id: 418,
    level: "Intermediate" as const,
    tags: ["redis"],
    question: "Cache-Aside pattern kya hai? Redis mein implement kaise karte hain?",
    answer: `Cache-Aside (Lazy Loading): Application cache manage karta hai — DB directly cache se communicate nahi karta.

Flow:
1. Cache check karo (Redis GET)
2. Cache HIT → return cached value
3. Cache MISS → DB se fetch karo
4. DB result Redis mein save karo (setex with TTL)
5. Return result

TTL kyun: Stale data prevent karo, memory overflow avoid karo.
Cache invalidation: Data update pe redis.del(key) karo.

Alternative: Write-Through (write pe cache update) — consistency better lekin overhead zyada.`,
    code: `async function getUser(id) {
  const cached = await redis.get(\`user:\${id}\`);
  if (cached) return JSON.parse(cached);  // HIT!

  const user = await db.findById(id);     // MISS
  await redis.setex(\`user:\${id}\`, 3600, JSON.stringify(user));
  return user;
}`,
  },
  {
    id: 419,
    level: "Beginner" as const,
    tags: ["redis"],
    question: "Redis mein TTL (Time-To-Live) kyun set karna chahiye? setex kya karta hai?",
    answer: `TTL bina: Cache data forever rehta hai — stale/outdated data serve hoga, Redis memory bhar jaayegi.

setex(key, seconds, value) = SET + EXPIRE ek atomic command mein.
Equivalent to: SET key value + EXPIRE key seconds

TTL ke benefits:
1. Automatic expiry — fresh data guarantee
2. Memory management — stale entries clean ho jaate hain
3. Data consistency — DB change hone pe stale cache expire ho jaata hai

Guideline: Frequently changing data = small TTL (60s). Stable data = larger TTL (1hr, 24hr).`,
    code: `// setex = set + expire in one command
await redis.setex('user:1', 3600, JSON.stringify(user));  // 1 hour

// vs (less atomic)
await redis.set('user:1', JSON.stringify(user));
await redis.expire('user:1', 3600);`,
  },
  {
    id: 420,
    level: "Beginner" as const,
    tags: ["testing"],
    question: "Node.js mein Jest setup kaise karte hain aur unit test kya hota hai?",
    answer: `Unit test: Ek function/class isolate karke test karo — baki sab mock karo.

Setup:
npm install jest @types/jest ts-jest --save-dev

package.json:
{ "jest": { "preset": "ts-jest", "testEnvironment": "node" } }

Test structure:
describe('Group') → it/test('case') → expect().toBe/toEqual/...

Mocking:
jest.fn() — mock function
jest.mock('./module') — entire module mock
mockFn.mockResolvedValue(data) — async mock`,
    code: `describe('UserService', () => {
  it('should find user by id', async () => {
    const mockRepo = { findById: jest.fn().mockResolvedValue({ id: 1, name: 'Alice' }) };
    const service = new UserService(mockRepo as any);

    const user = await service.findById(1);

    expect(user.name).toBe('Alice');
    expect(mockRepo.findById).toHaveBeenCalledWith(1);
  });
});`,
  },
  {
    id: 421,
    level: "Intermediate" as const,
    tags: ["testing"],
    question: "Supertest se API integration tests kaise likhte hain?",
    answer: `Supertest Express app ko directly inject karta hai — actual HTTP server start karne ki zarurat nahi. Fast, no port conflicts.

Important: app.listen() call mat karo test file mein — app sirf export karo.

Pattern:
1. request(app) — inject app
2. .get/.post/.put/.delete — HTTP method
3. .send(body) — request body (POST/PUT ke liye)
4. .set('Authorization', token) — headers
5. .expect(statusCode) — status assert
6. response.body — response data check karo`,
    code: `import request from 'supertest';
import app from '../app';

it('POST /users creates user', async () => {
  const res = await request(app)
    .post('/api/users')
    .send({ name: 'Bob', email: 'bob@test.com', password: 'Pass123!' })
    .expect(201);

  expect(res.body.id).toBeDefined();
  expect(res.body.password).toBeUndefined();  // password hidden!
});`,
  },
  {
    id: 422,
    level: "Beginner" as const,
    tags: ["queue"],
    question: "Job Queue kyun use karte hain? HTTP request mein kya problem hai heavy tasks ke liye?",
    answer: `HTTP request mein heavy task karo toh:
- User 5-30 second wait karega
- Server thread block hoga (multiple requests slow)
- Timeout ho sakta hai (30s+ operations)
- Error pe retry mechanism nahi

Queue solution:
1. HTTP request → Queue mein job daalo → Instant response (200ms)
2. Background Worker → Job process karo (5 minutes bhi chalega)
3. Retry automatic on failure
4. User notify karo webhook/email se jab complete ho

Best for: Email sending, PDF generation, image resize, 3rd party API calls, large exports.`,
  },
  {
    id: 423,
    level: "Intermediate" as const,
    tags: ["queue"],
    question: "BullMQ mein job retry aur backoff kaise configure karte hain?",
    answer: `attempts: Kitni baar retry karo failure pe (default: 0 = no retry)
backoff: Retries ke beech delay strategy

Backoff types:
- fixed: Hamesha same delay (backoff: { type: 'fixed', delay: 5000 })
- exponential: Delay double hota jaata hai (2s, 4s, 8s, 16s...)

Exponential backoff kyun:
- Network issues usually temporary hote hain
- Immediate retry often fails again
- Increasing delay gives service time to recover

Transient failures handle karo (network timeout, 3rd party rate limit) automatically bina manual intervention ke.`,
    code: `await queue.add('send-email', data, {
  attempts: 5,           // 5 baar try karo
  backoff: {
    type: 'exponential',
    delay: 2000          // 2s, 4s, 8s, 16s, 32s
  },
  removeOnComplete: 100,
  removeOnFail: 50,
});`,
  },
  {
    id: 424,
    level: "Intermediate" as const,
    tags: ["graphql"],
    question: "GraphQL REST se kaise better hai over-fetching aur under-fetching ke liye?",
    answer: `Over-fetching (REST): GET /users → 50 fields return hote hain, sirf name+email chahiye.
Under-fetching (REST): GET /user/1 + GET /posts?userId=1 + GET /comments?postId=5 — 3 requests!

GraphQL: Client exactly specify karo kya chahiye.

Benefits:
1. Ek endpoint (/graphql) — sab operations
2. Exactly wahi data aata hai jo request kiya
3. Related data ek query mein (no N+1 calls from client)
4. Strongly typed schema — self-documenting
5. GraphQL Playground — built-in docs

Tradeoff: REST se zyada setup, caching complex, file uploads harder.`,
    code: `query GetUser($id: ID!) {
  user(id: $id) {
    name          # sirf yeh 3 fields
    email
    posts {
      title       # nested data — 1 request!
    }
  }
}`,
  },
  {
    id: 425,
    level: "Advanced" as const,
    tags: ["graphql"],
    question: "GraphQL N+1 problem kya hai aur DataLoader se kaise solve karte hain?",
    answer: `N+1 problem: 10 users ke posts fetch karo → 1 query (users) + 10 queries (posts per user) = 11 DB calls!

Example: User.posts resolver = (parent) => db.posts.findByUserId(parent.id)
→ 10 users = 10 separate DB calls (N+1!)

DataLoader solution:
- Requests batch karta hai — 10 findByUserId calls → 1 IN query
- Results cache karta hai — same ID ke liye ek baar se zyada DB call nahi

Implementation:
1. DataLoader instance per request banao
2. batch function = IDs array → data array (same order)
3. resolver mein loader.load(parent.id) call karo

Result: N+1 → 2 queries (1 users + 1 posts batch).`,
    code: `const postsLoader = new DataLoader(async (userIds) => {
  const posts = await db.posts.findAll({ where: { userId: userIds } });
  return userIds.map(id => posts.filter(p => p.userId === id));
});

// Resolver — sirf load() call karo, batching automatic!
User: { posts: (parent) => postsLoader.load(parent.id) }`,
  },
  {
    id: 426,
    level: "Intermediate" as const,
    tags: ["microservices"],
    question: "Synchronous vs Asynchronous microservice communication — kab kaunsa use karein?",
    answer: `Synchronous (HTTP/REST/gRPC):
✅ Immediate response chahiye (user ke liye)
✅ Simple query (data read)
❌ Tight coupling — dependent service down = failure

Asynchronous (Message Queue: BullMQ, RabbitMQ, Kafka):
✅ Loose coupling — ek fail ho toh doosre impact nahi
✅ Retry automatic
✅ Heavy work background mein
❌ Debugging complex
❌ Eventual consistency

Rule of thumb:
- User-facing real-time → Sync HTTP
- Background work, notifications, events → Async Queue
- High throughput, event streaming → Kafka`,
  },
  {
    id: 427,
    level: "Beginner" as const,
    tags: ["architecture"],
    question: "Controller-Service-Repository pattern kyun use karte hain?",
    answer: `Separation of Concerns — har layer ka ek kaam:

Controller: HTTP layer — req parse, validate, res bhejo. Business logic nahi.
Service: Business logic — rules, workflows, calculations. DB nahi directly.
Repository: Data layer — DB queries. Business logic nahi.

Benefits:
1. Testability: Service test karo bina HTTP, bina real DB
2. Reusability: Same service use karo HTTP + WebSocket + CLI se
3. Maintainability: Change chahiye? Sirf us layer ko touch karo
4. Readability: Har file ka purpose clear hai

Violation: Controller mein direct DB query = bad pattern. Service mein res.json() = bad pattern.`,
  },
  {
    id: 428,
    level: "Intermediate" as const,
    tags: ["architecture"],
    question: "asyncHandler wrapper pattern kya hai aur kyun use karte hain?",
    answer: `Problem: Async Express routes mein errors manually catch karke next() pass karna padta hai.

asyncHandler = wrapper jo async function ko wrap karta hai:
(fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

Benefits:
1. No try/catch har route mein
2. Thrown errors automatically next(err) se jaate hain
3. DRY code — 1 line vs 5 lines per route
4. Consistent error handling

Global error handler: 4-parameter middleware (err, req, res, next) sab errors handle karta hai.`,
    code: `const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Clean route — no try/catch
router.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await UserService.findById(req.params.id);
  if (!user) throw new NotFoundError('User');  // auto → 404!
  res.json(user);
}));`,
  },
  {
    id: 429,
    level: "Intermediate" as const,
    tags: ["architecture"],
    question: "Zod se input validation kyun better hai manual check se?",
    answer: `Manual validation:
if (!body.name || body.name.length < 2) return res.status(400).json({error: '...'})
— verbose, error-prone, no TypeScript types, inconsistent

Zod benefits:
1. Declarative schema — kya chahiye clearly define
2. TypeScript types automatic — z.infer<typeof schema>
3. Detailed error messages — exact field + message
4. Composable — schemas combine kar sakte ho
5. Transform — parse aur validate ek saath (string to number coercion)
6. safeParse — throw nahi karta — success/error object return

.parse() throws on invalid, .safeParse() returns { success, data, error } — non-throwing.`,
    code: `const schema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  age: z.number().int().min(13).optional(),
});

type CreateUser = z.infer<typeof schema>;  // TypeScript type free!

const result = schema.safeParse(req.body);
if (!result.success) {
  return res.status(400).json({ errors: result.error.flatten() });
}
const user = await createUser(result.data);  // typed!`,
  },
  {
    id: 430,
    level: "Intermediate" as const,
    tags: ["redis"],
    question: "Redis rate limiting kaise implement karte hain?",
    answer: `Sliding window rate limit with Redis INCR + EXPIRE:

1. Key: rate:{ip} — per IP counter
2. INCR key — counter badhao (atomic)
3. First request pe EXPIRE set karo — window start
4. Counter > limit → 429 Too Many Requests
5. TTL se remaining window time milta hai

Atomicity: INCR Redis mein atomic hai — concurrent requests safe hain.

Real-world: express-rate-limit + redis-store use karo production mein — battle-tested implementation.

Distributed systems mein Redis rate limiting centralized hai — multiple app instances bhi sahi count karein.`,
    code: `async function rateLimitMiddleware(req, res, next) {
  const key = \`rate:\${req.ip}\`;
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);  // 1 min window

  if (count > 100) {
    return res.status(429).json({
      error: 'Too many requests',
      retryAfter: await redis.ttl(key)
    });
  }
  next();
}`,
  },
  {
    id: 431,
    level: "Advanced" as const,
    tags: ["architecture", "microservices"],
    question: "Circuit Breaker pattern kya hai? Node.js mein kab zaruri hai?",
    answer: `Circuit Breaker: Failing service pe calls temporarily stop karo — cascade failures prevent karo.

3 states:
- CLOSED: Normal operation, requests pass hote hain
- OPEN: Failures threshold exceed → requests instantly fail (no wait)
- HALF-OPEN: Kuch requests allow karo — service recover hua? CLOSED. Nahi? OPEN.

Kab zaruri:
- Microservices architecture
- External API calls (payment gateway, email service)
- Database connection issues

Libraries: opossum (Node.js), cockatiel

Without circuit breaker: 1 service slow → sab services slow (thread pool exhaustion).`,
  },
  {
    id: 432,
    level: "Advanced" as const,
    tags: ["performance", "cluster"],
    question: "Node.js cluster module kya hai? PM2 cluster mode se kya fark hai?",
    answer: `Node.js single-threaded hai — ek process ek CPU core use karta hai.

Cluster module: Multiple child processes (workers) spawn karo — sab same port pe listen karte hain. OS connections distribute karta hai.

PM2 cluster mode: pm2 start app.js -i max
- 'max' = sab available CPU cores
- Zero-downtime reload: pm2 reload (rolling restart)
- Auto restart on crash
- Memory monitoring + auto-restart on leak

PM2 vs native cluster:
- PM2 = production-ready, monitoring built-in, logs, startup scripts
- Native cluster = more control, no extra dependency

Worker threads vs cluster:
- cluster = separate Node.js processes (memory isolated)
- worker_threads = same process, shared memory (CPU-intensive tasks)`,
  },
  {
    id: 433,
    level: "Beginner" as const,
    question: "Node.js mein Event Loop kya hai? Call Stack, Callback Queue explain karo.",
    answer: `Event Loop: Node.js ka heart — single thread hone ke bawajood async kaam kaise karta hai.

Components:
1. Call Stack: Synchronous code execute hota hai (LIFO)
2. Web APIs/libuv: Async ops handle (setTimeout, fs, HTTP)
3. Callback Queue (Macro): setTimeout, setInterval callbacks
4. Microtask Queue: Promise.then, queueMicrotask — PRIORITY!
5. Event Loop: Call stack empty? Microtasks pehle, phir callbacks

Order:
console.log('1');
setTimeout(() => console.log('4'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('2');
// Output: 1, 2, 3, 4
// Microtask (Promise) setTimeout se pehle!

Event loop phases (libuv):
1. timers (setTimeout, setInterval)
2. pending callbacks
3. idle, prepare
4. poll (I/O wait — blocking agar nothing)
5. check (setImmediate)
6. close callbacks

setImmediate vs setTimeout(fn, 0): I/O callback mein setImmediate pehle, bahar se uncertain.`,
    tags: ["event-loop", "async", "fundamentals"],
  },
  {
    id: 434,
    level: "Beginner" as const,
    question: "Node.js mein require() aur ES modules (import/export) mein kya fark hai?",
    answer: `CommonJS (require): Node.js ka original module system.
ES Modules (import): Modern JavaScript standard — tree-shakeable.

CommonJS:
const express = require('express');
const { Router } = require('express');
module.exports = { myFunc };
module.exports.myFunc = myFunc;

// Dynamic require (runtime)
const config = require(\`./config/\${env}\`);

ES Modules:
import express from 'express';
import { Router } from 'express';
export const myFunc = () => {};
export default myFunc;

// Dynamic import (lazy)
const module = await import('./heavy-module.js');

Differences:
- CJS = synchronous, ESM = async (top-level await)
- CJS = runtime evaluation, ESM = static analysis (tree-shaking!)
- ESM = .mjs extension ya "type":"module" in package.json
- CJS files mein __dirname, __filename available — ESM mein nahi

// ESM mein __dirname:
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));`,
    tags: ["modules", "commonjs", "esm"],
  },
  {
    id: 435,
    level: "Intermediate" as const,
    question: "Express.js mein middleware kya hai? Error handling middleware kaise likhte hain?",
    answer: `Middleware: Request-response cycle mein function — (req, res, next) signature.

Types:
1. Application-level: app.use()
2. Router-level: router.use()
3. Error-handling: 4 parameters (err, req, res, next)
4. Built-in: express.json(), express.static()
5. Third-party: cors, helmet, morgan

// Custom middleware
const requestLogger = (req, res, next) => {
    console.log(\`\${req.method} \${req.path} \${Date.now()}\`);
    next();  // zaroori! nahi toh request hang ho jaayegi
};

// Auth middleware
const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        req.user = await verifyToken(token);
        next();
    } catch (err) {
        next(err);  // error middleware pe bhejo
    }
};

// Error handling middleware — 4 params zaroori!
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({
        error: err.message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
};

// Order matters!
app.use(requestLogger);
app.use('/api', router);
app.use(errorHandler);  // sab se last!`,
    tags: ["express", "middleware", "error-handling"],
  },
  {
    id: 436,
    level: "Intermediate" as const,
    question: "Node.js mein streams kya hain? Pipe kaise use karte hain?",
    answer: `Streams: Data ko chunks mein process karo — puri file memory mein load karne ki zarurat nahi.

4 types:
1. Readable: Data source (fs.createReadStream, HTTP req)
2. Writable: Data sink (fs.createWriteStream, HTTP res)
3. Duplex: Dono (TCP socket)
4. Transform: Read + modify + write (zlib, crypto)

// Bina stream — MEMORY PROBLEM!
const data = fs.readFileSync('huge-file.csv');  // 2GB file = 2GB RAM!

// Stream — memory efficient
const readable = fs.createReadStream('huge-file.csv');
const writable = fs.createWriteStream('output.csv');

readable.pipe(writable);  // automatic backpressure!

// Transform stream — CSV compress karo
const zlib = require('zlib');
fs.createReadStream('data.csv')
    .pipe(zlib.createGzip())        // compress
    .pipe(fs.createWriteStream('data.csv.gz'));

// HTTP response streaming
app.get('/large-file', (req, res) => {
    res.setHeader('Content-Type', 'text/csv');
    fs.createReadStream('large.csv').pipe(res);
    // File read + network write concurrently — fast!
});

// Custom transform stream
const { Transform } = require('stream');
const upperCase = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    }
});`,
    tags: ["streams", "performance", "file-handling"],
  },
  {
    id: 437,
    level: "Intermediate" as const,
    question: "Node.js mein JWT authentication kaise implement karte hain?",
    answer: `JWT (JSON Web Token): Stateless authentication — server pe session store nahi karna.

Structure: header.payload.signature (Base64URL encoded)

npm install jsonwebtoken bcryptjs

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Login route
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const accessToken = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '15m' }   // short-lived!
    );
    const refreshToken = jwt.sign(
        { userId: user.id },
        process.env.REFRESH_SECRET,
        { expiresIn: '7d' }
    );
    
    res.json({ accessToken, refreshToken });
});

// Auth middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token' });
    
    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Protected route
app.get('/profile', authenticate, (req, res) => {
    res.json({ userId: req.user.userId });
});`,
    tags: ["jwt", "authentication", "security"],
  },
  {
    id: 438,
    level: "Intermediate" as const,
    question: "Node.js mein environment variables aur configuration kaise manage karte hain?",
    answer: `dotenv: .env file se environment variables load karo.
npm install dotenv

// app.js — sab se pehle!
require('dotenv').config();

// .env file (NEVER commit to git!)
DATABASE_URL=mysql://user:pass@localhost:3306/mydb
JWT_SECRET=super-secret-key-min-32-chars
NODE_ENV=development
PORT=3000
REDIS_URL=redis://localhost:6379

// Config module — validated, typed config
const config = {
    port: parseInt(process.env.PORT) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        url: process.env.DATABASE_URL,
        poolSize: parseInt(process.env.DB_POOL_SIZE) || 10,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES || '15m',
    },
    isProduction: process.env.NODE_ENV === 'production',
    isDevelopment: process.env.NODE_ENV === 'development',
};

// Validate required env vars on startup
const required = ['DATABASE_URL', 'JWT_SECRET'];
for (const key of required) {
    if (!process.env[key]) {
        throw new Error(\`Missing required env var: \${key}\`);
    }
}

module.exports = config;

// .gitignore mein add karo:
// .env
// .env.local`,
    tags: ["configuration", "environment", "security"],
  },
  {
    id: 439,
    level: "Advanced" as const,
    question: "Node.js mein database connection pooling kya hai aur kyon zaroori hai?",
    answer: `Connection Pooling: Database connections reuse karo — har request pe naya connection nahi banao.

Kyon zaroori:
- DB connection expensive (TCP handshake, auth, SSL)
- Max connections limited hoti hain (MySQL default 151)
- Pool = connections ready-to-use maintain karo

// mysql2 pool
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    database: 'mydb',
    user: 'root',
    password: 'pass',
    connectionLimit: 10,    // max simultaneous connections
    queueLimit: 0,          // queue unlimited (0 = no limit)
    waitForConnections: true,
    idleTimeout: 60000,     // 60s idle pe connection release
    enableKeepAlive: true,
});

// Usage — connection automatically pool se milta/return hota hai
async function getUsers() {
    const [rows] = await pool.execute('SELECT * FROM users WHERE active = ?', [1]);
    return rows;  // connection automatically released!
}

// Sequelize pool config
const sequelize = new Sequelize(config.db.url, {
    pool: {
        max: 10,
        min: 2,
        acquire: 30000,  // max ms connection acquire wait
        idle: 10000,     // connection idle ms before release
    }
});

// Health check
app.get('/health', async (req, res) => {
    await pool.execute('SELECT 1');
    res.json({ status: 'ok', db: 'connected' });
});`,
    tags: ["database", "connection-pool", "performance"],
  },
  {
    id: 440,
    level: "Advanced" as const,
    question: "Node.js mein performance profiling aur memory leaks kaise detect karte hain?",
    answer: `Memory Leak: Memory allocate hoti hai lekin kabhi free nahi hoti — time ke saath RAM badhta rehta hai.

Common causes:
- Global variables mein data accumulate karna
- Event listeners remove nahi karna
- Closures mein large data hold karna
- Caches unbounded grow karna

Detection tools:

1. --inspect flag:
node --inspect app.js
# Chrome DevTools → chrome://inspect
# Memory snapshots, heap profiling

2. clinic.js (npm install -g clinic):
clinic doctor -- node app.js
clinic heap -- node app.js  # heap profiling

3. Code pe:
// Heap snapshot
const v8 = require('v8');
const snapshot = v8.writeHeapSnapshot();

// Memory usage monitor
setInterval(() => {
    const mem = process.memoryUsage();
    console.log({
        rss: (mem.rss / 1024 / 1024).toFixed(2) + 'MB',
        heapUsed: (mem.heapUsed / 1024 / 1024).toFixed(2) + 'MB',
    });
}, 10000);

Common fixes:
// Bad — event listener leak!
function badCode() {
    emitter.on('data', handler);  // remove nahi kiya
}

// Good
function goodCode() {
    const handler = (data) => process(data);
    emitter.on('data', handler);
    return () => emitter.off('data', handler);  // cleanup
}`,
    tags: ["performance", "memory-leak", "debugging"],
  },
  {
    id: 441,
    level: "Advanced" as const,
    question: "Node.js mein graceful shutdown kaise implement karte hain?",
    answer: `Graceful Shutdown: Server band hone pe existing requests complete karo, new accept mat karo.

Kyon zaroori: Deployment ke waqt (SIGTERM) in-flight requests drop nahi honni chahiye.

const express = require('express');
const app = express();

const server = app.listen(3000, () => console.log('Server started'));

// Graceful shutdown handler
async function shutdown(signal) {
    console.log(\`Received \${signal}. Graceful shutdown...\`);
    
    // 1. Naya connections accept karna band karo
    server.close(async () => {
        console.log('HTTP server closed');
        
        try {
            // 2. Database connections close karo
            await db.pool.end();
            await redis.quit();
            
            // 3. Background jobs finish karo
            await jobQueue.close();
            
            console.log('Cleanup complete');
            process.exit(0);
        } catch (err) {
            console.error('Shutdown error:', err);
            process.exit(1);
        }
    });
    
    // Force shutdown after 30s (hanging requests)
    setTimeout(() => {
        console.error('Force shutdown after timeout');
        process.exit(1);
    }, 30000);
}

process.on('SIGTERM', () => shutdown('SIGTERM'));  // PM2, Kubernetes
process.on('SIGINT', () => shutdown('SIGINT'));    // Ctrl+C

// Unhandled errors
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    shutdown('uncaughtException');
});

process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
    shutdown('unhandledRejection');
});`,
    tags: ["deployment", "graceful-shutdown", "production"],
  },
  {
    id: 442,
    level: "Advanced" as const,
    question: "Node.js mein caching strategies kya hain? Redis integration kaise karte hain?",
    answer: `Caching levels:
1. In-Memory (node-cache, Map): Process mein — fastest, restart pe clear
2. Redis: External — multiple instances share, persist
3. CDN: Static assets, edge locations

Redis with ioredis:
const Redis = require('ioredis');
const redis = new Redis(process.env.REDIS_URL);

// Cache middleware
const cache = (ttl = 300) => async (req, res, next) => {
    const key = \`cache:\${req.method}:\${req.originalUrl}\`;
    
    const cached = await redis.get(key);
    if (cached) {
        return res.json(JSON.parse(cached));  // Cache hit!
    }
    
    // Original response intercept karo
    const originalJson = res.json.bind(res);
    res.json = (data) => {
        redis.setex(key, ttl, JSON.stringify(data));  // Cache save
        return originalJson(data);
    };
    
    next();
};

// Usage
app.get('/api/products', cache(600), getProducts);

// Cache invalidation
async function updateProduct(id, data) {
    await db.update(id, data);
    // Cache clear karo
    await redis.del(\`cache:GET:/api/products\`);
    await redis.del(\`cache:GET:/api/products/\${id}\`);
}

// Cache patterns:
// Cache-aside: App check kare, miss pe DB se lo, cache mein save karo
// Write-through: Write pe DB + cache dono update karo
// Write-back: Cache update karo, DB baad mein (risky)`,
    tags: ["caching", "redis", "performance"],
  },
];

