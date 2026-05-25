import type { Chapter } from "./chapters";

export const apiChapters: Chapter[] = [
  {
    id: "api-intro",
    title: "API Kya Hai? REST Principles",
    emoji: "🔌",
    category: "Basics",
    description: "API fundamentals, REST architecture, aur design principles",
    sections: [
      {
        heading: "API kya hai?",
        content: `API = Application Programming Interface. Do applications ke beech communication ka contract.

**Real-world analogy:**
Restaurant mein waiter = API. Tum order do (request), waiter kitchen le jaaye, khana leke aaye (response). Kitchen implementation tum nahi jante.

**Types of APIs:**
- **REST** — Most popular, HTTP based
- **GraphQL** — Query-based, flexible
- **SOAP** — XML-based, older
- **WebSocket** — Real-time, bidirectional
- **gRPC** — Binary, high performance

**REST = Representational State Transfer:**
Roy Fielding ne 2000 mein define kiya. 6 constraints.`,
        diagram: `
REST API ARCHITECTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  CLIENT                        SERVER
  (Browser/Mobile/App)          (Your API)
       │                             │
       │  HTTP Request               │
       │  GET /api/v1/users/123      │
       │  Headers: Authorization     │
       │  Body: (empty for GET)      │
       │ ───────────────────────────►│
       │                             │
       │                    Process request
       │                    Database query
       │                    Business logic
       │                             │
       │  HTTP Response              │
       │  Status: 200 OK             │
       │  Content-Type: application/json
       │  Body: { "id": 123, ...}   │
       │ ◄───────────────────────────│

REST Constraints:
1. Client-Server — separate concerns
2. Stateless — server stores no client state
3. Cacheable — responses can be cached
4. Uniform Interface — consistent URLs
5. Layered System — middleware possible
6. Code on Demand — optional JS from server

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# REST API URL Design Examples

# RESOURCES (nouns, not verbs)
GET    /api/v1/users           # List all users
POST   /api/v1/users           # Create user
GET    /api/v1/users/:id       # Get user by ID
PUT    /api/v1/users/:id       # Replace user
PATCH  /api/v1/users/:id       # Partial update
DELETE /api/v1/users/:id       # Delete user

# Nested resources (relationships)
GET    /api/v1/users/:id/posts        # User's posts
POST   /api/v1/users/:id/posts        # Create post for user
GET    /api/v1/users/:id/posts/:postId

# Query parameters — filtering, sorting, pagination
GET /api/v1/users?page=1&limit=10
GET /api/v1/users?sort=name&order=asc
GET /api/v1/users?search=rahul&role=admin

# AVOID (verbs in URLs — not RESTful):
# GET /api/getUsers       ❌
# POST /api/createUser    ❌
# GET /api/deleteUser/1   ❌`,
        language: "bash",
        tip: "URLs resources represent karte hain (nouns) — actions HTTP methods se hoti hain (verbs). /users/1/ban ki jagah PATCH /users/1 with {status: 'banned'} better hai.",
      },
      {
        heading: "HTTP Methods aur Status Codes",
        content: `HTTP methods aur status codes ka sahi use REST API ka foundation hai.`,
        code: `# HTTP Methods
GET     — Read only, idempotent, cacheable
POST    — Create resource, not idempotent
PUT     — Replace resource (full update), idempotent
PATCH   — Partial update, not always idempotent
DELETE  — Delete resource, idempotent
OPTIONS — CORS preflight, available methods check
HEAD    — GET without body (headers only)

# Status Codes (100+ hain, common important ones):

# 2xx SUCCESS
200 OK           — Standard success
201 Created      — POST success (new resource)
204 No Content   — DELETE success (empty body)
206 Partial      — Range request success

# 3xx REDIRECT
301 Moved Permanently — permanent redirect
302 Found             — temporary redirect
304 Not Modified      — cached response valid

# 4xx CLIENT ERRORS (client ki galti)
400 Bad Request       — Invalid input/syntax
401 Unauthorized      — Authentication required/failed
403 Forbidden         — Authenticated but no permission
404 Not Found         — Resource nahi mila
405 Method Not Allowed — Wrong HTTP method
409 Conflict          — Duplicate/state conflict
410 Gone              — Resource deleted permanently
422 Unprocessable     — Validation failed
429 Too Many Requests — Rate limit exceeded

# 5xx SERVER ERRORS (server ki galti)
500 Internal Server Error — Generic server error
502 Bad Gateway           — Upstream server issue
503 Service Unavailable   — Server down/overloaded
504 Gateway Timeout       — Upstream timeout`,
        language: "text",
        tip: "401 vs 403: 401 = 'Kaun ho tum? Login karo'. 403 = 'Main tum ko jaanta hoon lekin permission nahi'. Common interview question!",
      },
    ],
    mcqs: [
      {
        q: "REST API mein resource create karne ke liye kaunsa HTTP method use karte hain?",
        options: ["GET", "CREATE", "POST", "PUT"],
        correct: 2,
        explain: "POST new resource create karne ke liye. Response mein 201 Created status aur naye resource ka URL Location header mein bhejo.",
      },
      {
        q: "Status code 401 aur 403 mein kya fark hai?",
        options: [
          "Same hain, dono forbidden hain",
          "401 = Authentication missing/invalid, 403 = Authenticated but no permission",
          "401 = Server error, 403 = Client error",
          "401 = Not Found, 403 = Forbidden",
        ],
        correct: 1,
        explain: "401 = Unauthorized: token nahi ya invalid. Server ko pata nahi kaun ho. 403 = Forbidden: authenticated ho lekin is resource access nahi.",
      },
    ],
    cheatsheet: [
      "GET = read, POST = create, PUT = replace, PATCH = partial, DELETE = delete",
      "200 OK, 201 Created, 204 No Content",
      "400 Bad Request, 401 Unauth, 403 Forbidden, 404 Not Found",
      "409 Conflict (duplicate), 422 Validation, 429 Rate Limit",
      "500 Server Error, 503 Service Unavailable",
      "Idempotent = baar baar same request same result (GET, PUT, DELETE)",
    ],
    revision: [
      "REST = stateless, uniform interface, client-server",
      "URLs = nouns (resources), Methods = verbs (actions)",
      "2xx = success, 4xx = client error, 5xx = server error",
      "401 = authentication, 403 = authorization",
    ],
  },
  {
    id: "api-design",
    title: "API Design Best Practices",
    emoji: "📐",
    category: "Intermediate",
    description: "Versioning, pagination, error handling, aur API design patterns",
    sections: [
      {
        heading: "Request aur Response Design",
        content: `Consistent API design se frontend developers aur API consumers ka kaam easy hota hai.`,
        code: `// Consistent Response Format
{
  "success": true,
  "data": { ... } or [ ... ],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 245,
    "totalPages": 25
  },
  "message": "Users fetched successfully"
}

// Error Response
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Input validation failed",
    "details": [
      { "field": "email", "message": "Valid email required" },
      { "field": "age", "message": "Must be 18+" }
    ]
  },
  "timestamp": "2024-01-01T00:00:00Z",
  "path": "/api/v1/users"
}

// Pagination standard
GET /api/v1/users?page=1&limit=10&sort=createdAt&order=desc&search=rahul

Response:
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10,
    "hasNext": true,
    "hasPrev": false,
    "nextPage": 2,
    "prevPage": null
  }
}

// Cursor-based pagination (better for large datasets)
GET /api/v1/posts?cursor=eyJpZCI6MTAwfQ&limit=20

Response:
{
  "data": [...],
  "cursor": {
    "next": "eyJpZCI6ODB9",
    "hasMore": true
  }
}`,
        language: "json",
      },
      {
        heading: "Versioning — API changes manage karo",
        content: `API version karo taaki existing clients break na hon jab changes karo.`,
        code: `# Versioning strategies:

# 1. URL Path versioning (most common, recommended)
GET /api/v1/users
GET /api/v2/users    ← v2 mein breaking changes

# 2. Query parameter versioning
GET /api/users?version=1

# 3. Header versioning
GET /api/users
Accept: application/vnd.myapi.v1+json

# 4. Subdomain versioning
https://v1.api.example.com/users
https://v2.api.example.com/users

# Deprecation strategy:
# 1. New version release karo
# 2. Old version par deprecation warning add karo (header mein)
# 3. Documentation update karo
# 4. Clients ko migrate karne ka time do (6-12 months)
# 5. Old version sunset karo

# Deprecation header:
Deprecation: true
Sunset: Sat, 31 Dec 2024 23:59:59 GMT
Link: </api/v2/users>; rel="successor-version"

# HATEOAS — Hypermedia links in response
{
  "data": { "id": 1, "name": "Rahul" },
  "links": {
    "self": "/api/v1/users/1",
    "posts": "/api/v1/users/1/posts",
    "update": { "href": "/api/v1/users/1", "method": "PATCH" },
    "delete": { "href": "/api/v1/users/1", "method": "DELETE" }
  }
}`,
        language: "text",
        tip: "URL path versioning (/v1/, /v2/) sabse clear aur popular hai — developer ko URL se hi version pata chalta hai.",
      },
    ],
    mcqs: [
      {
        q: "Idempotent request kya hoti hai?",
        options: [
          "Jo sirf ek baar send ho sakti hai",
          "Jo baar baar bhejne par same result de",
          "Jo cache ho sakti hai",
          "Jo authentication require na kare",
        ],
        correct: 1,
        explain: "Idempotent = ek ya zyada baar request bhejo, result same rahega. GET, PUT, DELETE idempotent hain. POST idempotent nahi (har baar naya resource).",
      },
    ],
    cheatsheet: [
      "Versioning: /api/v1/ URL mein (recommended)",
      "Pagination: page+limit ya cursor-based",
      "Consistent response: { success, data, meta, error }",
      "Filtering: ?search=x&status=active",
      "Sorting: ?sort=name&order=asc",
      "Rate limit headers: X-RateLimit-Limit, Remaining, Reset",
    ],
    revision: [
      "Consistent response format = frontend ka kaam easy",
      "URL versioning = /v1/, /v2/ (most common)",
      "Pagination meta = total, page, hasNext, hasPrev",
      "Deprecation = header mein warn karo, sunset date do",
    ],
  },
  {
    id: "api-auth",
    title: "API Authentication — JWT, OAuth, API Keys",
    emoji: "🔐",
    category: "Intermediate",
    description: "Different authentication methods aur security best practices",
    sections: [
      {
        heading: "Authentication Types comparison",
        content: ``,
        diagram: `
API AUTHENTICATION METHODS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  API KEY:
  Client → Request + API key in header/query → Server
  Simple, server-side validation, no expiry by default
  Use: Server-to-server, simple integrations

  JWT (JSON Web Tokens):
  1. Client → POST /login (credentials)
  2. Server → Access Token (15min) + Refresh Token (7d)
  3. Client → Request + Bearer token in header
  4. Server → Verify signature, extract claims
  5. Token expire? → Use refresh token → new access token
  
  OAUTH 2.0 (Third-party login):
  1. User clicks "Login with Google"
  2. Redirect to Google's auth server
  3. User grants permission
  4. Redirect back with authorization code
  5. Exchange code for access token
  6. Use token to get user info

  SESSION-BASED:
  1. Login → Server creates session, sends cookie
  2. Browser sends cookie automatically
  3. Server validates session ID
  Good for: Traditional web apps

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// API Key authentication
// Header mein bhejo:
Authorization: Bearer sk-1234567890abcdef

// Ya custom header:
X-API-Key: sk-1234567890abcdef

// Server side validate karo:
const apiKey = req.headers['x-api-key'] || req.query.api_key;
const client = await db.query('SELECT * FROM api_keys WHERE key = ? AND is_active = 1', [apiKey]);
if (!client) return res.status(401).json({ error: 'Invalid API key' });

// JWT
// Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0In0.signature

// OAuth 2.0 flows:
// Authorization Code — web/mobile apps
// Client Credentials — server-to-server
// Implicit — deprecated (security issues)
// PKCE — mobile apps (secure)

// Security best practices
// 1. HTTPS always (never HTTP in production)
// 2. Short token expiry (15-30min for access tokens)
// 3. Refresh token rotation (naya refresh token bhejo har baar)
// 4. Token revocation list (blacklist)
// 5. Rate limiting on auth endpoints
// 6. Account lockout after failed attempts
// 7. Sensitive data payload mein mat rakho (decodable!)
// 8. CORS properly configure karo`,
        language: "javascript",
        tip: "JWT payload base64 encoded hai — decode karna easy hai! Sensitive data (SSN, credit card) JWT mein kabhi mat rakho. Sirf user ID, email, role rakho.",
      },
    ],
    cheatsheet: [
      "JWT: Authorization: Bearer <token>",
      "API Key: X-API-Key header ya ?api_key param",
      "OAuth: Authorization Code flow (web apps)",
      "PKCE: OAuth for mobile (no client secret)",
      "Access token: short-lived (15min)",
      "Refresh token: long-lived (7-30 days), rotate karo",
    ],
    revision: [
      "API Key = simple, server-to-server",
      "JWT = stateless, self-contained (no DB lookup)",
      "OAuth = third-party login (Google, GitHub)",
      "HTTPS = always in production, no exceptions",
    ],
  },
  {
    id: "api-graphql",
    title: "GraphQL Basics",
    emoji: "⬡",
    category: "Advanced",
    description: "GraphQL kya hai, REST se comparison, aur basic queries",
    sections: [
      {
        heading: "GraphQL kya hai?",
        content: `GraphQL Facebook ka query language hai APIs ke liye. REST ke problems solve karta hai.

**REST ke problems jo GraphQL solve karta hai:**
- **Over-fetching:** User chahiye sirf name+email, par server poori profile bhejta hai
- **Under-fetching:** User aur unke posts chahiye — 2 API calls (N+1)
- **Multiple endpoints:** REST mein har resource ka alag endpoint

**GraphQL solution:**
- Ek endpoint: /graphql
- Client decides kya chahiye
- Single request mein related data`,
        code: `# Install (with Apollo Server + Express)
npm install @apollo/server graphql

// Schema define karo
const typeDefs = \`#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: ID!
    title: String!
    content: String
    author: User!
    createdAt: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    updateUser(id: ID!, name: String): User!
    deleteUser(id: ID!): Boolean!
  }
\`;

// Resolvers
const resolvers = {
  Query: {
    users: () => db.query('SELECT * FROM users'),
    user: (_, { id }) => db.queryOne('SELECT * FROM users WHERE id = ?', [id]),
    posts: () => db.query('SELECT * FROM posts'),
  },

  User: {
    // Related data resolver
    posts: (user) => db.query('SELECT * FROM posts WHERE user_id = ?', [user.id]),
  },

  Mutation: {
    createUser: async (_, { name, email }) => {
      const result = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
      return db.queryOne('SELECT * FROM users WHERE id = ?', [result.insertId]);
    },
    deleteUser: async (_, { id }) => {
      await db.query('DELETE FROM users WHERE id = ?', [id]);
      return true;
    },
  },
};

// Client se query:
query {
  user(id: "1") {
    name       # sirf naam chahiye
    email
    posts {    # related posts bhi ek hi request mein
      title
      createdAt
    }
  }
}

# Response (exactly what you asked for):
{
  "data": {
    "user": {
      "name": "Rahul Kumar",
      "email": "rahul@example.com",
      "posts": [
        { "title": "Hello World", "createdAt": "2024-01-01" }
      ]
    }
  }
}`,
        language: "javascript",
        tip: "GraphQL REST se replace nahi karta — dono ke apne use cases hain. GraphQL complex data relationships mein better, REST simple CRUD ke liye fine.",
      },
    ],
    cheatsheet: [
      "type = GraphQL type define karo",
      "! = non-nullable field",
      "[Type] = array",
      "Query = read operations",
      "Mutation = write operations",
      "Subscription = real-time updates",
      "Resolver = kaise data fetch karo",
    ],
    revision: [
      "GraphQL = single endpoint, client decides response shape",
      "REST vs GraphQL: REST simple, GraphQL flexible",
      "Over-fetching = REST problem, GraphQL fix",
      "Resolver = actual data fetching logic",
    ],
  },
];

export const apiInterviews = [
  {
    id: 601,
    level: "Beginner" as const,
    tags: ["basics"],
    question: "REST API kya hai? 6 constraints explain karo.",
    answer: `REST = Representational State Transfer. Roy Fielding ne define kiya 2000 mein.

**6 Constraints:**
1. **Client-Server:** UI aur data store alag — independent evolve ho sakten hain
2. **Stateless:** Server client ka koi state store nahi karta — har request self-contained
3. **Cacheable:** Response cacheable hona chahiye jab possible ho
4. **Uniform Interface:** Consistent URL structure, HTTP methods, status codes
5. **Layered System:** Client ye nahi jaanta ki directly server se baat ho rahi hai ya middleware se
6. **Code on Demand (optional):** Server client ko executable code bhej sakta hai (JS)`,
  },
  {
    id: 602,
    level: "Beginner" as const,
    tags: ["http"],
    question: "PUT aur PATCH mein kya fark hai?",
    answer: `**PUT:** Poora resource replace karo.
- Request body mein complete resource bhejo
- Jo fields nahi bheje woh null/default ho jaate hain
- Idempotent: same PUT request baar baar same result

**PATCH:** Partial update — sirf kuch fields update karo.
- Request body mein sirf changed fields bhejo
- Baaki fields unchanged rahते hain
- Usually idempotent (partial update)

**Example:**
User: {name: "Rahul", email: "r@r.com", age: 25, role: "admin"}

PUT /users/1 body: {name: "Rahul Kumar"} → {name: "Rahul Kumar", email: null, age: null, role: null}
PATCH /users/1 body: {name: "Rahul Kumar"} → {name: "Rahul Kumar", email: "r@r.com", age: 25, role: "admin"}`,
  },
  {
    id: 603,
    level: "Intermediate" as const,
    tags: ["security"],
    question: "API Security best practices kya hain?",
    answer: `**Authentication & Authorization:**
- JWT ya OAuth tokens
- Short-lived access tokens (15-30min)
- Refresh token rotation
- RBAC (Role Based Access Control)

**Input Validation:**
- Har field validate karo (type, length, format)
- Whitelist approach (expected fields only)
- SQL injection, XSS prevention

**Rate Limiting:**
- Endpoints pe request limit lagao
- Login pe strict limit (brute force prevent)
- Per-user ya per-IP

**HTTPS:**
- Production mein HTTP kabhi nahi

**Headers:**
- CORS properly configure karo
- Security headers (helmet.js)
- X-Content-Type-Options, X-Frame-Options

**Secrets:**
- API keys rotate karo regularly
- Environment variables mein store karo
- Logs mein sensitive data print mat karo`,
  },
  {
    id: 604,
    level: "Intermediate" as const,
    tags: ["design"],
    question: "API Versioning kyun zaroori hai? Strategies kya hain?",
    answer: `Versioning kyun:
- Existing clients break na hon jab API changes karo
- Different clients different versions use kar sakein
- Gradual migration possible

**Strategies:**

1. **URL Path (/v1/, /v2/)** — Most common, most clear
   GET /api/v1/users

2. **Query Parameter** — Simple lekin less clean
   GET /api/users?v=1

3. **Header** — Clean URLs lekin hard to test in browser
   Accept: application/vnd.api.v1+json

4. **Subdomain** — Complete isolation
   https://v1.api.example.com

**Best practice:**
- URL path versioning use karo
- Breaking changes only for new major version
- 6-12 months deprecation notice do
- Sunset header bhejo old versions mein`,
  },
];
