import type { Chapter } from "./chapters";

export const reactChapters: Chapter[] = [
  {
    id: "react-intro",
    title: "React Kya Hai? JSX aur Components",
    emoji: "⚛️",
    category: "Basics",
    description: "React introduction, JSX, functional components, aur props",
    sections: [
      {
        heading: "React kya hai?",
        content: `React ek JavaScript library hai UI banane ke liye — Facebook ne banaya. Component-based, declarative, aur efficient.

**Key Concepts:**
- **Component** — Reusable UI pieces
- **JSX** — HTML-like syntax in JavaScript
- **State** — Component ka internal data
- **Props** — Parent se child ko data
- **Virtual DOM** — Efficient updates

**React kyun popular hai:**
- Component reuse → fast development
- Virtual DOM → fast rendering
- Huge ecosystem (React Router, Redux, etc.)
- React Native → mobile apps bhi`,
        diagram: `
REACT COMPONENT TREE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

     App
    /   \\
  Nav   Main
  / \\    / \\
Logo Menu Card Card
          |    |
         Btn  Btn

Props flow: Parent → Child (down)
Events flow: Child → Parent (up via callbacks)
State: Component ke andar

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `// Create React App (simplest)
npx create-react-app my-app
cd my-app
npm start

// Vite (recommended, faster)
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev`,
        language: "bash",
      },
      {
        heading: "JSX aur Functional Components",
        content: `JSX = JavaScript XML. HTML jaisa syntax jo JavaScript mein likhte hain.`,
        code: `// Basic Functional Component
// Component naam UpperCase se shuru hona chahiye!
function Welcome() {
  return <h1>Namaste React!</h1>;
}

// Arrow function component
const Button = () => {
  return <button className="btn">Click karo</button>; // class nahi, className!
};

// JSX Rules:
// 1. Single root element (ya Fragment)
// 2. className (class nahi)
// 3. camelCase attributes (onClick, onChange)
// 4. Self-closing tags zaruri (<img />, <br />)

function App() {
  const name = "Rahul";
  const items = ["Apple", "Banana", "Mango"];
  const isLoggedIn = true;

  return (
    <>  {/* Fragment — unnecessary div avoid karo */}
      <h1>Hello, {name}!</h1>   {/* Expression curly braces mein */}
      
      {/* Conditional rendering */}
      {isLoggedIn ? <p>Welcome back!</p> : <p>Please login</p>}
      {isLoggedIn && <button>Logout</button>}  {/* Short circuit */}
      
      {/* List rendering */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>  {/* key zaruri hai lists mein! */}
        ))}
      </ul>
      
      {/* Inline styles */}
      <p style={{ color: 'red', fontSize: '16px' }}>Red text</p>
    </>
  );
}

export default App;`,
        language: "tsx",
      },
      {
        heading: "Props — Parent to Child data bhejo",
        content: ``,
        code: `// TypeScript ke saath props define karo
interface UserCardProps {
  name: string;
  email: string;
  age?: number;           // optional
  role?: 'admin' | 'user'; // union type
  onDelete: (id: number) => void; // function prop
  children?: React.ReactNode;     // nested JSX
}

// Component
function UserCard({ name, email, age = 18, role = 'user', onDelete, children }: UserCardProps) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{email}</p>
      <span className={\`badge \${role}\`}>{role}</span>
      {age && <small>Age: {age}</small>}
      {children}  {/* nested content */}
      <button onClick={() => onDelete(1)}>Delete</button>
    </div>
  );
}

// Parent mein use karo
function App() {
  const handleDelete = (id: number) => {
    console.log('Delete user:', id);
  };

  return (
    <UserCard
      name="Rahul Kumar"
      email="rahul@example.com"
      age={25}
      role="admin"
      onDelete={handleDelete}
    >
      <p>Custom content yahan aayega (children prop)</p>
    </UserCard>
  );
}`,
        language: "tsx",
        tip: "Props read-only hoti hain — kabhi modify mat karo directly. State se data change karo aur nayi props pass karo.",
      },
    ],
    mcqs: [
      {
        q: "React mein lists render karte waqt key prop kyun zaruri hai?",
        options: [
          "CSS styling ke liye",
          "React ko efficiently update aur re-order karne mein help karta hai",
          "List items unique naam dene ke liye",
          "API calls ke liye",
        ],
        correct: 1,
        explain: "key prop React Virtual DOM ko batata hai ki kaunsa item kaunsa hai — efficient updates aur reordering ke liye. Unique stable ID use karo (index nahi ideally).",
      },
    ],
    cheatsheet: [
      "function Comp() { return <JSX /> } — functional component",
      "{expression} — JSX mein JS expressions",
      "className — HTML class ki jagah",
      "items.map(item => <li key={id}>{item}</li>) — list render",
      "condition && <Comp /> — conditional render",
      "props = parent se data, read-only",
    ],
    revision: [
      "React = component-based UI library",
      "JSX = JS mein HTML-like syntax",
      "Props = parent → child data flow",
      "key prop = list items ke liye unique identifier",
    ],
  },
  {
    id: "react-hooks",
    title: "Hooks — useState, useEffect aur more",
    emoji: "🪝",
    category: "Basics",
    description: "React Hooks deeply — state management, side effects, aur more",
    sections: [
      {
        heading: "useState — Component State",
        content: `useState se component ka internal state manage karo. State change hone par component re-render hota hai.`,
        code: `import { useState } from 'react';

// Basic counter
function Counter() {
  const [count, setCount] = useState(0); // [state, setter]
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(prev => prev - 1)}>-1</button> {/* functional update */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// Object state
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value })); // spread karo, specific field update karo
  };

  return (
    <form>
      <input name="name" value={user.name} onChange={handleChange} placeholder="Naam" />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" />
      <p>Hello, {user.name}!</p>
    </form>
  );
}

// Array state
function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos(prev => [...prev, input]); // spread karo + new item
    setInput('');
  };

  const removeTodo = (index: number) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo, i) => (
        <div key={i}>
          {todo}
          <button onClick={() => removeTodo(i)}>×</button>
        </div>
      ))}
    </div>
  );
}`,
        language: "tsx",
        warning: "State directly mutate mat karo: todos.push(item) — yeh re-render nahi karega! Hamesha new value set karo: setTodos([...todos, item])",
      },
      {
        heading: "useEffect — Side Effects",
        content: `useEffect se component ke outside kaam karo — API calls, subscriptions, timers.`,
        code: `import { useState, useEffect } from 'react';

// Basic useEffect
function DataFetcher() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Effect function
    let isMounted = true; // cleanup ke liye

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://api.example.com/users');
        const data = await res.json();
        if (isMounted) setUsers(data); // unmounted component pe setState avoid
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchUsers();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []); // [] = sirf mount pe run karo

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// Dependency array examples
useEffect(() => {
  // Har render pe run karo (dependency nahi)
});

useEffect(() => {
  // Sirf mount pe run karo (empty array)
}, []);

useEffect(() => {
  // userId change hone par run karo
  fetchUser(userId);
}, [userId]); // dependency

useEffect(() => {
  // Timer example
  const timer = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return () => clearInterval(timer); // cleanup — memory leak avoid
}, []);`,
        language: "tsx",
        tip: "useEffect dependency array mein sab variables add karo jo effect mein use hote hain — React eslint rules automatically suggest karte hain.",
      },
      {
        heading: "useRef, useMemo, useCallback",
        content: ``,
        code: `import { useRef, useMemo, useCallback, useState } from 'react';

// useRef — DOM element access ya mutable value (re-render nahi)
function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef(0); // mutable, re-render nahi trigger

  useEffect(() => {
    renderCount.current++; // no re-render
    console.log('Render count:', renderCount.current);
  });

  return (
    <input
      ref={inputRef}
      placeholder="Click button to focus"
    />
  );
}

// useMemo — expensive calculation cache karo
function ExpensiveList({ items, filter }: Props) {
  // Sirf filter ya items change hone par recalculate
  const filteredItems = useMemo(() => {
    console.log('Filtering...');
    return items.filter(item => item.name.includes(filter));
  }, [items, filter]); // dependencies

  return <ul>{filteredItems.map(i => <li key={i.id}>{i.name}</li>)}</ul>;
}

// useCallback — function reference stable rakho
function ParentComponent() {
  const [count, setCount] = useState(0);

  // Bina useCallback: har render pe naya function = child re-render
  // useCallback ke saath: same function reference, child stable
  const handleItemClick = useCallback((id: number) => {
    console.log('Clicked:', id);
  }, []); // no dependencies — function never changes

  const handleSearch = useCallback((query: string) => {
    // search logic
  }, []);  // stable reference

  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>+{count}</button>
      <ChildList onItemClick={handleItemClick} /> {/* No unnecessary re-renders */}
    </>
  );
}

// Custom Hook — reusable stateful logic
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}

// Use karo:
const [theme, setTheme] = useLocalStorage('theme', 'light');`,
        language: "tsx",
        tip: "useMemo/useCallback premature optimization se bachao — sirf tab use karo jab real performance issue ho. React DevTools Profiler se measure karo pehle.",
      },
    ],
    mcqs: [
      {
        q: "useEffect mein empty dependency array ([]) kab use karte hain?",
        options: [
          "Har render pe run karne ke liye",
          "Sirf component mount pe ek baar run karne ke liye",
          "State change hone par run karne ke liye",
          "Never",
        ],
        correct: 1,
        explain: "useEffect(() => {}, []) — sirf component mount hone par ek baar run hota hai. Cleanup function return karo unmount pe.",
      },
    ],
    cheatsheet: [
      "useState(initial) → [value, setter]",
      "setters mein functional update: prev => prev + 1",
      "useEffect(fn, []) — mount only",
      "useEffect(fn, [dep]) — dep change hone par",
      "useRef — DOM ref ya mutable value",
      "useMemo(() => calc, [deps]) — expensive computation cache",
      "useCallback(fn, [deps]) — stable function reference",
    ],
    revision: [
      "useState = component local state, change → re-render",
      "useEffect = side effects (API, timer, subscription)",
      "State directly mutate mat karo → new value set karo",
      "useMemo/useCallback = performance optimization",
    ],
  },
  {
    id: "react-context",
    title: "Context API aur State Management",
    emoji: "🌐",
    category: "Intermediate",
    description: "Global state management with Context API aur Redux intro",
    sections: [
      {
        heading: "Context API — Props Drilling Avoid Karo",
        content: `Props Drilling = ek data ko 5-6 levels neeche pass karna. Context se globally share karo.`,
        code: `import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Context type define karo
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

// 2. Context create karo
const AuthContext = createContext<AuthContextType | null>(null);

// 3. Custom hook
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside AuthProvider');
  return ctx;
}

// 4. Provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setUser(data.user);
      localStorage.setItem('token', data.access_token);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

// main.tsx mein wrap karo
// <AuthProvider><App /></AuthProvider>

// Kisi bhi component mein use karo:
function Navbar() {
  const { user, logout } = useAuth(); // no props drilling!
  return (
    <nav>
      {user ? (
        <><span>Hello, {user.name}</span><button onClick={logout}>Logout</button></>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
}`,
        language: "tsx",
        tip: "Context re-renders sab consumers ko trigger karta hai. Large state ko multiple contexts mein split karo ya useReducer use karo complex state ke liye.",
      },
    ],
    cheatsheet: [
      "createContext(defaultValue) — context create karo",
      "useContext(MyContext) — context consume karo",
      "<Provider value={...}> — value provide karo",
      "Custom hook = useMyContext() — type-safe access",
      "useReducer — complex state logic",
      "Context for: theme, auth, language, cart",
    ],
    revision: [
      "Context = global state (props drilling avoid)",
      "Provider → useContext → Consumer",
      "Custom hook use karo context access ke liye",
      "Performance: context split karo (AuthCtx, ThemeCtx)",
    ],
  },
  {
    id: "react-router",
    title: "React Router aur API Integration",
    emoji: "🗺️",
    category: "Intermediate",
    description: "Client-side routing aur backend API se data fetch karo",
    sections: [
      {
        heading: "React Router v6 — Routing setup",
        content: ``,
        code: `npm install react-router-dom

// src/main.tsx
import { BrowserRouter } from 'react-router-dom';

<BrowserRouter>
  <App />
</BrowserRouter>

// App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      
      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={user ? <Dashboard /> : <Navigate to="/login" replace />}
      />
      
      {/* Nested routes */}
      <Route path="/users" element={<UsersLayout />}>
        <Route index element={<UsersList />} />          {/* /users */}
        <Route path=":id" element={<UserDetail />} />    {/* /users/123 */}
        <Route path=":id/edit" element={<UserEdit />} /> {/* /users/123/edit */}
      </Route>
      
      {/* Auth routes */}
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// Navigation hooks
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams();          // URL params
  const navigate = useNavigate();      // programmatic navigation
  const location = useLocation();      // current route info

  return (
    <div>
      <h1>User #{id}</h1>
      <Link to="/users">← Wapas jaao</Link>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate('/users', { replace: true })}>Users</button>
    </div>
  );
}`,
        language: "tsx",
      },
      {
        heading: "API Integration — Data fetch karo",
        content: ``,
        code: `// Custom hook for API calls — reusable
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController(); // cancel on unmount

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem('token');
        
        const res = await fetch(url, {
          signal: controller.signal,
          headers: {
            'Authorization': \`Bearer \${token}\`,
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(\`HTTP error! status: \${res.status}\`);
        }

        const json = await res.json();
        setData(json.data || json);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort(); // cleanup — cancel pending request
  }, [url]);

  return { data, loading, error };
}

// Use karo:
interface User { id: number; name: string; email: string; }

function UsersList() {
  const { data: users, loading, error } = useFetch<User[]>('/api/users');

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>
          <Link to={\`/users/\${user.id}\`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
}

// Axios (better fetch alternative)
npm install axios

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 10000,
});

// Request interceptor — token add karo
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});

// Response interceptor — errors handle karo
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Use karo
const { data } = await api.get('/users');
await api.post('/users', { name, email });
await api.delete(\`/users/\${id}\`);`,
        language: "tsx",
        tip: "React Query (TanStack Query) use karo complex data fetching ke liye — caching, loading states, error handling, refetching sab built-in.",
      },
    ],
    cheatsheet: [
      "<Routes><Route path='/p' element={<Comp />}/></Routes>",
      "useNavigate() — programmatic navigation",
      "useParams() — URL params (:id)",
      "useLocation() — current route info",
      "<Link to='/path'> — navigation link",
      "<Navigate to='/login' replace /> — redirect",
      "AbortController — fetch cancel on unmount",
    ],
    revision: [
      "React Router v6 = Routes + Route components",
      "useNavigate() = programmatic navigation",
      "Protected route = user check karo, Navigate to login",
      "AbortController = prevent memory leaks on unmount",
    ],
  },
];

export const reactInterviews = [
  {
    id: 501,
    level: "Beginner" as const,
    tags: ["basics"],
    question: "Virtual DOM kya hai? Real DOM se kaise better hai?",
    answer: `Virtual DOM = Real DOM ka lightweight JavaScript representation (plain object tree).

**Real DOM se problem:**
- DOM manipulation expensive hai (browser layout recalculate karta hai)
- Frequent updates → slow performance

**Virtual DOM ka process (Reconciliation):**
1. State change → Virtual DOM mein new tree banao
2. Old aur new Virtual DOM compare karo (diffing algorithm)
3. Sirf changed parts ko Real DOM mein update karo (patching)

**Fayde:**
- Batch updates — multiple state changes ek saath apply
- Minimal DOM operations
- Framework-managed — tum sirf state manage karo

**Misconception:** Virtual DOM "Real DOM se fast" nahi hai — DOM manipulation aur usse better optimize karta hai.`,
  },
  {
    id: 502,
    level: "Intermediate" as const,
    tags: ["hooks"],
    question: "useEffect cleanup function kyun zaroori hai?",
    answer: `Cleanup function memory leaks aur stale state updates prevent karta hai.

**Kab cleanup zaruri hai:**
1. **Event listeners:** add karo → cleanup mein remove karo
2. **Timers:** setInterval/setTimeout → clearInterval/clearTimeout
3. **Subscriptions:** WebSocket, Redux → unsubscribe
4. **Async operations:** AbortController se cancel karo

**Cleanup kab run hota hai:**
- Component unmount hone par
- Next effect run hone se pehle (dependencies change)

**Stale state problem:**
Async function chalti hai, component unmount ho jaata hai, phir setState call hoti hai → warning + potential bugs`,
    code: `useEffect(() => {
  const timer = setInterval(() => setCount(c => c + 1), 1000);
  
  return () => clearInterval(timer); // cleanup!
}, []);

// Fetch cleanup
useEffect(() => {
  const controller = new AbortController();
  fetch('/api/data', { signal: controller.signal })
    .then(r => r.json()).then(setData);
  
  return () => controller.abort(); // cancel on unmount
}, []);`,
  },
  {
    id: 503,
    level: "Intermediate" as const,
    tags: ["performance"],
    question: "React mein re-renders kaise optimize karein?",
    answer: `**Causes of unnecessary re-renders:**
1. Parent re-render → children bhi re-render
2. Context value change → all consumers re-render
3. New function/object reference har render pe

**Solutions:**

1. **React.memo():** Component ko memoize karo — props same hoon toh re-render nahi
2. **useMemo():** Expensive computation memoize karo
3. **useCallback():** Function reference stable rakho
4. **Context split karo:** Alag alag concerns ke liye alag context

**Kab optimize karein:**
React DevTools Profiler se measure karo first — premature optimization se bachao!`,
    code: `// React.memo — same props pe re-render nahi
const UserCard = React.memo(({ name, onDelete }: Props) => {
  console.log('UserCard rendered');
  return <div>{name}<button onClick={onDelete}>Delete</button></div>;
});

// useCallback se function stable rakho
const handleDelete = useCallback((id: number) => {
  deleteUser(id);
}, []); // stable — UserCard re-render nahi karega

// useMemo — expensive computation
const sorted = useMemo(
  () => users.sort((a, b) => a.name.localeCompare(b.name)),
  [users]
);`,
  },
  {
    id: 504,
    level: "Advanced" as const,
    tags: ["patterns"],
    question: "Custom Hooks kya hain? Real example do.",
    answer: `Custom Hook = reusable stateful logic ka function jo 'use' se start hota hai.

**Rules:**
- Naam 'use' se shuru hono (useMyHook)
- Sirf React hooks use karo andar
- Component ke bahar call mat karo

**Common Custom Hooks:**
- useFetch — API data fetching
- useLocalStorage — localStorage sync
- useDebounce — input delay
- useWindowSize — responsive design
- useOnClickOutside — dropdown close`,
    code: `// useDebounce — search input ke liye
function useDebounce<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer); // cleanup
  }, [value, delay]);

  return debounced;
}

// Use karo:
function SearchBar() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) fetchResults(debouncedQuery);
  }, [debouncedQuery]); // sirf 500ms baad call hoga

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}`,
  },
];
