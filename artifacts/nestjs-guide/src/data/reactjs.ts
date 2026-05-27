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
  {
    id: "react-reducer",
    title: "useReducer & useRef",
    emoji: "🎛️",
    category: "Intermediate",
    description: "Complex state management useReducer se, aur DOM/values access useRef se",
    sections: [
      {
        heading: "useReducer — Complex State",
        content: `useReducer = useState ka powerful alternative complex state ke liye.
- Multiple related state values
- Complex state transitions
- Ek action se multiple state changes`,
        code: `import { useReducer } from 'react';

type State = {
  items: string[];
  loading: boolean;
  error: string | null;
};

type Action = 
  | { type: 'ADD_ITEM'; payload: string }
  | { type: 'REMOVE_ITEM'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string };

const initialState: State = { items: [], loading: false, error: null };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter((_, i) => i !== action.payload) };
    case 'SET_LOADING':
      return { ...state, loading: action.payload, error: null };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const addItem = (text: string) => dispatch({ type: 'ADD_ITEM', payload: text });
  const removeItem = (i: number) => dispatch({ type: 'REMOVE_ITEM', payload: i });
  
  return (
    <div>
      {state.error && <p className="error">{state.error}</p>}
      {state.items.map((item, i) => (
        <div key={i}>{item} <button onClick={() => removeItem(i)}>Remove</button></div>
      ))}
    </div>
  );
}`,
        language: "tsx",
        tip: "useReducer tab use karo jab 3+ related state variables hon ya ek action multiple values update kare. Simple state ke liye useState hi better hai.",
      },
      {
        heading: "useRef — DOM Access & Mutable Values",
        content: `useRef ke 2 main uses:
1. **DOM element access** — focus, scroll, media control
2. **Mutable value store** — re-render trigger kiye bina`,
        code: `import { useRef, useEffect } from 'react';

// DOM access
function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    inputRef.current?.focus();  // auto focus on mount
  }, []);
  
  const clearAndFocus = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }
  };
  
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Search..." />
      <button onClick={clearAndFocus}>Clear</button>
    </div>
  );
}

// Mutable value (no re-render)
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  
  const start = () => {
    intervalRef.current = setInterval(() => setCount(c => c + 1), 1000);
  };
  
  const stop = () => {
    clearInterval(intervalRef.current);  // no re-render needed
  };
  
  // Previous value track karo
  const prevCount = useRef<number>();
  useEffect(() => {
    prevCount.current = count;  // after render update
  });
  
  return <p>Count: {count}, Prev: {prevCount.current}</p>;
}`,
        language: "tsx",
      },
    ],
    mcqs: [
      { q: "useReducer useState se kab better hai?", options: ["Hamesha", "Jab state simple ho", "Jab 3+ related state values hon ya complex transitions", "Performance ke liye hamesha"], correct: 2, explain: "useReducer complex state logic ke liye hai — multiple related values, complex transitions. Simple single value ke liye useState hi fine hai." },
      { q: "useRef ka main feature kya hai?", options: ["State management", "Mutable value jo re-render trigger nahi karta, DOM access bhi", "Side effects handle karna", "Context create karna"], correct: 1, explain: "useRef.current change karne se component re-render nahi hota. Isliye timers, intervals, DOM refs ke liye perfect hai." },
    ],
    cheatsheet: [
      "const [state, dispatch] = useReducer(reducer, init)",
      "dispatch({ type: 'ACTION', payload: val })",
      "const ref = useRef<HTMLInputElement>(null)",
      "ref.current?.focus() — DOM method call",
      "ref.current = value — mutable, no re-render",
    ],
    revision: [
      "useReducer = complex state, predictable transitions",
      "reducer(state, action) => newState — pure function",
      "useRef = DOM access + mutable values without re-render",
      "ref.current change = no re-render (unlike useState)",
      "useRef prev value trick = track previous render value",
    ],
  },
  {
    id: "react-forms",
    title: "Forms & Validation",
    emoji: "📝",
    category: "Intermediate",
    description: "Controlled components, React Hook Form, aur Zod se form validation",
    sections: [
      {
        heading: "Controlled vs Uncontrolled Forms",
        content: `React mein 2 form approaches:
- **Controlled** — state se value manage karo (recommended)
- **Uncontrolled** — DOM se directly value lo (useRef)`,
        code: `import { useState } from 'react';

// Controlled Form (recommended)
function LoginForm() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };
  
  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.email.includes('@')) newErrors.email = 'Valid email required';
    if (form.password.length < 8) newErrors.password = 'Min 8 characters';
    return newErrors;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    // Submit!
    console.log('Form data:', form);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" value={form.email} onChange={handleChange} />
      {errors.email && <span className="error">{errors.email}</span>}
      <input name="password" type="password" value={form.password} onChange={handleChange} />
      {errors.password && <span className="error">{errors.password}</span>}
      <button type="submit">Login</button>
    </form>
  );
}`,
        language: "tsx",
      },
      {
        heading: "React Hook Form — Production Ready",
        content: `React Hook Form (RHF) = minimal re-renders, easy validation, great performance.`,
        code: `import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schema define karo
const schema = z.object({
  name: z.string().min(2, 'Naam kam se kam 2 characters'),
  email: z.string().email('Valid email chahiye'),
  age: z.coerce.number().min(18, 'Must be 18+'),
  role: z.enum(['user', 'admin']),
});

type FormData = z.infer<typeof schema>;

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  
  const onSubmit = async (data: FormData) => {
    await createUser(data);  // async submit
    reset();  // form clear
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" />
      {errors.name && <p>{errors.name.message}</p>}
      
      <input {...register('email')} type="email" />
      {errors.email && <p>{errors.email.message}</p>}
      
      <input {...register('age')} type="number" />
      {errors.age && <p>{errors.age.message}</p>}
      
      <select {...register('role')}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}`,
        language: "tsx",
        tip: "React Hook Form + Zod = best combo. RHF handles form state, Zod handles validation — dono typescript friendly hain!",
      },
    ],
    mcqs: [
      { q: "Controlled form mein input value kahan stored hoti hai?", options: ["DOM mein", "React state mein", "useRef mein", "Local storage mein"], correct: 1, explain: "Controlled inputs mein value React state se aati hai aur onChange se update hoti hai. React DOM ka single source of truth hota hai." },
      { q: "React Hook Form uncontrolled approach kyun use karta hai?", options: ["Code simple hai", "Fewer re-renders — har keystroke pe re-render nahi", "Better validation", "TypeScript support"], correct: 1, explain: "RHF internally refs use karta hai — har keystroke pe component re-render nahi hota. Large forms ke liye significantly better performance." },
    ],
    cheatsheet: [
      "const { register, handleSubmit, formState } = useForm()",
      "{...register('fieldName')} — input register karo",
      "handleSubmit(onSubmit) — form submit",
      "errors.fieldName?.message — error display",
      "zodResolver(schema) — Zod integration",
      "z.infer<typeof schema> — TypeScript type",
      "reset() — form clear karo",
    ],
    revision: [
      "Controlled = state driven, Uncontrolled = ref/DOM",
      "React Hook Form = minimal re-renders, great performance",
      "Zod + RHF = type-safe validation",
      "register() = input ko form se connect karo",
      "handleSubmit = validation ke baad call karo",
    ],
  },
  {
    id: "react-state-mgmt",
    title: "State Management (Redux & Zustand)",
    emoji: "🗄️",
    category: "Advanced",
    description: "Global state kab chahiye, Zustand se simple setup, aur Redux Toolkit",
    sections: [
      {
        heading: "Kab Global State Chahiye?",
        content: `Pehle Context + useState try karo. Global state library kab zaruri hai:
- **Multiple pages** same data share karein
- **Server cache** (user, products, etc.)
- **Deep prop drilling** — 5+ levels
- **Complex actions** — undo/redo, optimistic updates`,
        diagram: `Component Tree pe State Decision:

Single component → useState
2-3 components  → props drilling
Many components → Context API
Complex/large app → Zustand / Redux Toolkit`,
      },
      {
        heading: "Zustand — Simple & Powerful",
        content: `Zustand = minimal, no boilerplate global state library.`,
        code: `import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: () => number;
}

// Store create karo
const useCartStore = create<CartState>()(
  persist(  // localStorage mein persist
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),
      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        })),
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
    }),
    { name: 'cart-storage' }  // localStorage key
  )
);

// Use karo — kisi bhi component mein!
function CartCount() {
  const count = useCartStore(state => state.items.length);
  return <span>{count}</span>;
}

function AddToCart({ product }) {
  const addItem = useCartStore(state => state.addItem);
  return <button onClick={() => addItem(product)}>Add</button>;
}`,
        language: "tsx",
        tip: "Zustand Redux se much simpler hai — no actions, reducers, providers. Small to medium apps ke liye Zustand, large enterprise ke liye Redux Toolkit.",
      },
    ],
    mcqs: [
      { q: "Zustand vs Redux Toolkit — Zustand kab better choice hai?", options: ["Large enterprise apps", "Small to medium apps — less boilerplate, simpler setup", "Hamesha", "Real-time apps"], correct: 1, explain: "Zustand minimal setup mein global state deta hai. Redux Toolkit large teams, complex state, time-travel debugging ke liye better. Small-medium apps pe Zustand win karta hai." },
      { q: "Zustand persist middleware kya karta hai?", options: ["State encrypt karta hai", "State localStorage mein save karta hai — reload pe bhi state rehti hai", "State compress karta hai", "State validate karta hai"], correct: 1, explain: "persist middleware automatically state ko localStorage (ya sessionStorage) mein save karta hai. Page reload ke baad bhi state rehydrate ho jaati hai." },
    ],
    cheatsheet: [
      "create<State>()((set, get) => ({...})) — store",
      "useStore(state => state.value) — select state",
      "useStore(state => state.action) — select action",
      "set(state => ({...})) — state update",
      "get() — current state read karo",
      "persist(store, {name: 'key'}) — localStorage",
    ],
    revision: [
      "Global state: Context → Zustand → Redux (complexity order)",
      "Zustand = create() + use in any component",
      "set() = state update, get() = state read",
      "persist middleware = localStorage sync",
      "Select only needed state = no unnecessary re-renders",
    ],
  },
  {
    id: "react-lifecycle",
    title: "useEffect Deep Dive & Lifecycle",
    emoji: "🔄",
    category: "Core",
    description: "Component lifecycle, useEffect ke har pattern, cleanup, aur dependency array mastery",
    sections: [
      {
        heading: "useEffect — Lifecycle Mapping",
        content: `useEffect teen class component lifecycle methods replace karta hai:
- **componentDidMount** → useEffect(() => {...}, [])
- **componentDidUpdate** → useEffect(() => {...}, [deps])
- **componentWillUnmount** → useEffect cleanup function`,
        diagram: `Class Lifecycle → Hooks Mapping:

componentDidMount    →  useEffect(() => { ... }, [])
componentDidUpdate   →  useEffect(() => { ... }, [val])
componentWillUnmount →  useEffect(() => { return () => cleanup() }, [])
shouldComponentUpdate→  React.memo + useMemo`,
      },
      {
        heading: "useEffect ke Saare Patterns",
        content: `Har pattern ka alag use case hai:`,
        code: `import { useState, useEffect, useRef } from 'react';

// ─── Pattern 1: Run once (mount pe) ───────────────
useEffect(() => {
  fetchInitialData();
}, []);  // empty array = run once

// ─── Pattern 2: Dependency pe run karo ────────────
useEffect(() => {
  fetchUser(userId);  // userId change hone pe fetch
}, [userId]);

// ─── Pattern 3: Cleanup (subscriptions, timers) ───
useEffect(() => {
  const timer = setInterval(() => setCount(c => c + 1), 1000);
  return () => clearInterval(timer);  // cleanup!
}, []);

// ─── Pattern 4: Event listener ────────────────────
useEffect(() => {
  const handler = (e) => setKey(e.key);
  window.addEventListener('keydown', handler);
  return () => window.removeEventListener('keydown', handler);
}, []);

// ─── Pattern 5: Async inside useEffect ─────────────
useEffect(() => {
  let cancelled = false;  // race condition prevent

  async function load() {
    const data = await fetchData(id);
    if (!cancelled) setData(data);  // unmount ke baad setState mat karo
  }

  load();
  return () => { cancelled = true; };
}, [id]);`,
        language: "tsx",
        tip: "useEffect direct async nahi ho sakta — inner async function banao ya IIFE use karo. Race conditions ke liye cancelled flag use karo.",
      },
      {
        heading: "useRef — DOM & Mutable Values",
        content: `useRef do kamon ke liye — DOM access aur re-render trigger kiye bina value store karna.`,
        code: `function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout>();
  const inputRef = useRef<HTMLInputElement>(null);

  // Timer start/stop — ref se interval track karo
  const start = () => {
    timerRef.current = setInterval(
      () => setCount(c => c + 1), 1000
    );
  };
  const stop = () => clearInterval(timerRef.current);

  // DOM focus
  const focusInput = () => inputRef.current?.focus();

  // Previous value track karo
  const prevCountRef = useRef(0);
  useEffect(() => {
    prevCountRef.current = count;  // render ke baad update
  });
  const prevCount = prevCountRef.current;

  return (
    <div>
      <p>Now: {count}, Prev: {prevCount}</p>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}`,
        language: "tsx",
        tip: "useRef change se re-render nahi hota — mutable container hai. useState = UI update chahiye, useRef = just value store karo.",
      },
    ],
    mcqs: [
      { q: "useEffect(() => {...}, []) kab run hota hai?", options: ["Har render pe", "Sirf mount pe (ek baar)", "Sirf unmount pe", "Kabhi nahi"], correct: 1, explain: "Empty dependency array = component mount pe sirf ek baar run. componentDidMount equivalent." },
      { q: "useEffect cleanup function kab call hoti hai?", options: ["Before every re-render + unmount", "Sirf unmount pe", "Sirf re-render pe", "Kabhi nahi"], correct: 0, explain: "Cleanup function next effect run se pehle (re-render pe) aur component unmount pe call hoti hai. Previous side effects clean karne ke liye." },
    ],
    cheatsheet: [
      "useEffect(() => {}, []) — once on mount",
      "useEffect(() => {}, [dep]) — dep change pe",
      "return () => cleanup() — unmount/re-run se pehle",
      "useRef<T>(null) — DOM ref ya mutable value",
      "ref.current — ref value access",
      "cancelled flag — async race conditions prevent",
    ],
    revision: [
      "Empty deps = mount once, deps = on change, no deps = every render",
      "Cleanup = subscriptions, timers, listeners hatao",
      "Async useEffect = inner async function banao",
      "useRef = re-render trigger nahi karta",
      "Race conditions = cancelled flag pattern use karo",
    ],
  },
  {
    id: "react-performance",
    title: "Performance Optimization",
    emoji: "⚡",
    category: "Advanced",
    description: "React.memo, useMemo, useCallback — unnecessary re-renders rokna aur app fast banana",
    sections: [
      {
        heading: "Re-render Kyun Hota Hai?",
        content: `React component re-render kab hota hai — yeh samajhna optimization ka pehla step hai:
1. **State change** — component ka apna state change ho
2. **Parent re-render** — parent render ho toh child bhi
3. **Context change** — subscribed context update ho
4. **Props change** — props ki value/reference change ho`,
        diagram: `Re-render Chain:

Parent re-renders
  └── Child A (re-renders — even if props same!)
      └── Child B (re-renders)
          └── Child C (re-renders)

With React.memo:
Parent re-renders
  └── Child A (SKIPPED — same props)  ← optimization!`,
      },
      {
        heading: "React.memo — Component Memoization",
        content: `React.memo wraps component — same props pe re-render skip karta hai.`,
        code: `import { memo, useState } from 'react';

// ─── Without memo — har parent render pe re-renders ──
function ExpensiveChild({ name, count }: { name: string; count: number }) {
  console.log('ExpensiveChild rendered!');  // bahut baar aayega
  return <div>{name}: {count}</div>;
}

// ─── With memo — only when props actually change ───
const MemoizedChild = memo(function ExpensiveChild({
  name, count
}: { name: string; count: number }) {
  console.log('MemoizedChild rendered!');  // sirf tab jab name/count change ho
  return <div>{name}: {count}</div>;
});

// Custom comparison function (deep equality, etc.)
const MemoizedWithCustom = memo(UserCard, (prevProps, nextProps) => {
  return prevProps.user.id === nextProps.user.id;  // true = skip re-render
});

function Parent() {
  const [counter, setCounter] = useState(0);
  const [name] = useState('Alice');

  return (
    <div>
      <button onClick={() => setCounter(c => c + 1)}>
        Click: {counter}
      </button>
      {/* counter change pe MemoizedChild re-render nahi hoga */}
      <MemoizedChild name={name} count={42} />
    </div>
  );
}`,
        language: "tsx",
        tip: "React.memo sirf props comparison karta hai (shallow). Objects/arrays ke liye useMemo se stable reference do.",
      },
      {
        heading: "useMemo & useCallback",
        content: `useMemo = expensive value memoize karo. useCallback = function reference stable rakho.`,
        code: `import { useState, useMemo, useCallback, memo } from 'react';

function ProductList({ products, onSelect }) {
  // ─── useMemo: expensive computation memoize ───────
  const sortedProducts = useMemo(() => {
    console.log('Sorting...');  // sirf products change pe
    return [...products].sort((a, b) => a.price - b.price);
  }, [products]);  // products change hone pe recalculate

  const total = useMemo(
    () => products.reduce((sum, p) => sum + p.price, 0),
    [products]
  );

  return (
    <div>
      <p>Total: ₹{total}</p>
      {sortedProducts.map(p => (
        <ProductCard key={p.id} product={p} onSelect={onSelect} />
      ))}
    </div>
  );
}

function Parent() {
  const [count, setCount] = useState(0);
  const [products] = useState([...]);

  // ─── useCallback: stable function reference ────────
  // Without: har render pe naya function → ProductCard re-renders
  // With: same reference → ProductCard memo works!
  const handleSelect = useCallback((id: number) => {
    console.log('Selected:', id);
    // setSelectedId(id);
  }, []);  // no deps = never changes

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>{count}</button>
      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}`,
        language: "tsx",
        tip: "Rule of thumb: useMemo = expensive calculations (O(n²)+), useCallback = functions jo memo ke saath pass ho rahi hain. Har jagah mat lagao — premature optimization costly hai!",
      },
    ],
    mcqs: [
      { q: "React.memo kya karta hai?", options: ["State memoize karta hai", "Same props pe component re-render skip karta hai", "useEffect optimize karta hai", "Bundle size reduce karta hai"], correct: 1, explain: "React.memo wraps component and does shallow props comparison. Same props pe previous render output return karta hai bina re-rendering ke." },
      { q: "useCallback aur useMemo mein kya fark hai?", options: ["Koi fark nahi", "useCallback function memoize karta hai, useMemo value memoize karta hai", "useMemo faster hai", "useCallback async ke liye hai"], correct: 1, explain: "useCallback(() => fn, deps) = memoized function return karta hai. useMemo(() => value, deps) = memoized value return karta hai. useCallback(fn, deps) === useMemo(() => fn, deps)." },
    ],
    cheatsheet: [
      "memo(Component) — same props pe skip re-render",
      "useMemo(() => expensive(), [deps]) — value cache",
      "useCallback(() => fn(), [deps]) — function reference stable",
      "memo + useCallback = child optimization combo",
      "React DevTools Profiler — re-renders visualize karo",
    ],
    revision: [
      "Re-render: state/props/context change, parent re-render",
      "React.memo = shallow props compare, skip if same",
      "useMemo = expensive computations cache karo",
      "useCallback = stable function reference for memo children",
      "Premature optimization mat karo — profile first!",
    ],
  },
  {
    id: "react-custom-hooks",
    title: "Custom Hooks",
    emoji: "🪝",
    category: "Intermediate",
    description: "Logic reuse karo custom hooks se — useFetch, useLocalStorage, useDebounce aur more",
    sections: [
      {
        heading: "Custom Hook Kya Hai?",
        content: `Custom hook = "use" se shuru hone wala function jo React hooks use karta hai. Logic reuse ka best pattern — DRY code!

**Rules:**
- Naam hamesha "use" se shuru karo: useFetch, useAuth
- Sirf React functions ke andar call karo
- Conditionally mat call karo`,
      },
      {
        heading: "useFetch — Data Fetching Hook",
        content: `API calls ko reusable hook mein encapsulate karo:`,
        code: `import { useState, useEffect, useCallback } from 'react';

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
        return res.json();
      })
      .then(json => { if (!cancelled) { setData(json); setLoading(false); } })
      .catch(err => { if (!cancelled) { setError(err.message); setLoading(false); } });

    return () => { cancelled = true; };
  }, [url, trigger]);

  const refetch = useCallback(() => setTrigger(t => t + 1), []);
  return { data, loading, error, refetch };
}

// Usage — simple!
function UserProfile({ userId }: { userId: number }) {
  const { data, loading, error, refetch } = useFetch<User>(
    \`/api/users/\${userId}\`
  );

  if (loading) return <Spinner />;
  if (error) return <Error msg={error} onRetry={refetch} />;
  return <div>{data?.name}</div>;
}`,
        language: "tsx",
        tip: "Generic type <T> se useFetch kisi bhi data type ke saath kaam karta hai — type-safe aur reusable!",
      },
      {
        heading: "useLocalStorage & useDebounce",
        content: `Common utility hooks jo har app mein kaam aate hain:`,
        code: `// ─── useLocalStorage ─────────────────────────────
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch { return initialValue; }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function
      ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue] as const;
}

// ─── useDebounce — search input ke liye ───────────
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);  // cleanup on value change
  }, [value, delay]);

  return debouncedValue;
}

// ─── Usage ────────────────────────────────────────
function SearchBox() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);  // 500ms wait
  const { data } = useFetch(\`/api/search?q=\${debouncedQuery}\`);

  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <input onChange={e => setQuery(e.target.value)} />
      <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
        {theme}
      </button>
    </div>
  );
}`,
        language: "tsx",
      },
    ],
    mcqs: [
      { q: "Custom hook ka naam kis se shuru hona chahiye?", options: ["hook", "use", "custom", "get"], correct: 1, explain: "'use' prefix React ke liye signal hai ki yeh hook hai — rules of hooks apply honge. 'use' se shuru nahi kiya toh React hooks ke rules enforce nahi honge." },
      { q: "Custom hooks ka main benefit kya hai?", options: ["Performance better hoti hai", "Logic reuse across components — DRY code", "Bundle size chhota hota hai", "TypeScript support milta hai"], correct: 1, explain: "Custom hooks stateful logic extract karte hain components se — same logic multiple components mein reuse ho sakti hai bina code duplication ke." },
    ],
    cheatsheet: [
      "function useMyHook() { ... } — naam 'use' se shuru",
      "Generic <T> — type-safe reusable hooks",
      "cancelled flag — async cleanup",
      "useCallback inside hook — stable references",
      "useState + useEffect + return = custom hook pattern",
    ],
    revision: [
      "Custom hooks = 'use' se shuru, React hooks use karein",
      "useFetch = data, loading, error, refetch pattern",
      "useDebounce = input delay — har keystroke pe API call mat karo",
      "useLocalStorage = useState + localStorage sync",
      "Hooks compose hote hain — hooks ke andar hooks use karo",
    ],
  },
  {
    id: "react-typescript",
    title: "React with TypeScript",
    emoji: "🔷",
    category: "Intermediate",
    description: "Props typing, generics, event handlers, useState/useRef types — TypeScript React mastery",
    sections: [
      {
        heading: "Component Props Typing",
        content: `TypeScript React mein props define karne ke patterns:`,
        code: `import { ReactNode, FC, ComponentPropsWithoutRef } from 'react';

// ─── Interface vs Type — dono kaam karte hain ─────
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  children?: ReactNode;  // JSX content
}

// FC<Props> ya function(props: Props) — dono ok hain
// FC avoid karo React 18 mein — explicit typing better hai
function Button({ label, onClick, variant = 'primary', disabled, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {children ?? label}
    </button>
  );
}

// ─── HTML element extend karo ─────────────────────
interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
  error?: string;
}
// Ab sare HTML input attributes automatically milenge!
function Input({ label, error, ...rest }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}`,
        language: "tsx",
        tip: "ComponentPropsWithoutRef<'input'> se native HTML attributes inherit karo — sab HTML props automatically type-safe ho jaate hain.",
      },
      {
        heading: "Hooks aur Events Typing",
        content: `useState, useRef, event handlers — sab typed:`,
        code: `import { useState, useRef, useEffect } from 'react';

// ─── useState typing ─────────────────────────────
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);

// ─── useRef typing ───────────────────────────────
const inputRef = useRef<HTMLInputElement>(null);
const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

// ─── Event Handlers ──────────────────────────────
// onClick
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
};

// onChange input
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setQuery(e.target.value);
};

// onSubmit
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
};

// ─── Generic Component ────────────────────────────
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage — fully type-safe
<List
  items={users}
  keyExtractor={u => u.id.toString()}
  renderItem={u => <span>{u.name}</span>}
/>`,
        language: "tsx",
      },
    ],
    mcqs: [
      { q: "ReactNode aur ReactElement mein kya fark hai?", options: ["Koi fark nahi", "ReactNode = string/number/null/JSX sab kuch, ReactElement = sirf JSX", "ReactElement broader hai", "Dono same hain"], correct: 1, explain: "ReactNode = ReactElement | string | number | boolean | null | undefined — kuch bhi jo render ho sakta hai. ReactElement = sirf JSX element ({type, props, key}). children prop ke liye ReactNode use karo." },
      { q: "ComponentPropsWithoutRef<'input'> kya karta hai?", options: ["Input banata hai", "All native HTML input attributes type mein include karta hai", "Event handlers add karta hai", "CSS classes add karta hai"], correct: 1, explain: "ComponentPropsWithoutRef<'button'/'input'/etc.> native HTML element ke saare props extract karta hai — aap apne custom props extend kar sakte ho without repeating all HTML attributes." },
    ],
    cheatsheet: [
      "interface Props { name: string; age?: number }",
      "function Comp({ name }: Props) — destructured",
      "useState<Type>(initial) — typed state",
      "useRef<HTMLInputElement>(null) — typed ref",
      "React.ChangeEvent<HTMLInputElement> — input event",
      "React.MouseEvent<HTMLButtonElement> — click event",
      "ReactNode — children prop type",
      "ComponentPropsWithoutRef<'button'> — extend HTML element",
    ],
    revision: [
      "Interface ya type dono kaam karte hain props ke liye",
      "ReactNode = kuch bhi renderable (string, JSX, null)",
      "Generic components <T> = type-safe reusable components",
      "Events: ChangeEvent, MouseEvent, FormEvent — generics mein element type do",
      "ComponentPropsWithoutRef se HTML attributes extend karo",
    ],
  },
  {
    id: "react-patterns",
    title: "Design Patterns",
    emoji: "🧩",
    category: "Advanced",
    description: "Compound Components, Render Props, HOC, aur Composition patterns",
    sections: [
      {
        heading: "Compound Components Pattern",
        content: `Compound components = related components jo saath kaam karte hain, state internally share karke. Jaise HTML <select> + <option>.`,
        code: `import { createContext, useContext, useState, ReactNode } from 'react';

// ─── Compound Components — Tabs example ──────────
interface TabsContextType {
  activeTab: string;
  setActiveTab: (id: string) => void;
}
const TabsContext = createContext<TabsContextType | null>(null);

function Tabs({ children, defaultTab }: { children: ReactNode; defaultTab: string }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

function TabList({ children }: { children: ReactNode }) {
  return <div className="tab-list">{children}</div>;
}

function Tab({ id, children }: { id: string; children: ReactNode }) {
  const ctx = useContext(TabsContext)!;
  return (
    <button
      className={ctx.activeTab === id ? 'active' : ''}
      onClick={() => ctx.setActiveTab(id)}
    >
      {children}
    </button>
  );
}

function TabPanel({ id, children }: { id: string; children: ReactNode }) {
  const { activeTab } = useContext(TabsContext)!;
  return activeTab === id ? <div>{children}</div> : null;
}

// Attach as static properties (optional but common)
Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

// ─── Clean Usage! ─────────────────────────────────
function App() {
  return (
    <Tabs defaultTab="home">
      <Tabs.List>
        <Tabs.Tab id="home">Home</Tabs.Tab>
        <Tabs.Tab id="profile">Profile</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel id="home"><HomeContent /></Tabs.Panel>
      <Tabs.Panel id="profile"><ProfileContent /></Tabs.Panel>
    </Tabs>
  );
}`,
        language: "tsx",
        tip: "Compound components internal state share karte hain Context ke through — consumer ko state manage nahi karna padta.",
      },
      {
        heading: "Higher-Order Components (HOC) & Render Props",
        content: `HOC = component leta hai, enhanced component return karta hai. Render Props = function as prop pattern.`,
        code: `// ─── HOC Pattern ─────────────────────────────────
function withAuth<P extends object>(Component: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const { user, loading } = useAuth();
    if (loading) return <Spinner />;
    if (!user) return <Navigate to="/login" />;
    return <Component {...props} />;
  };
}

// Usage
const ProtectedDashboard = withAuth(Dashboard);

// ─── Render Props Pattern ─────────────────────────
function MouseTracker({
  render
}: {
  render: (pos: { x: number; y: number }) => ReactNode
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <div onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}>
      {render(pos)}  {/* consumer decides what to render */}
    </div>
  );
}

// Usage
<MouseTracker render={({ x, y }) => (
  <p>Mouse: {x}, {y}</p>
)} />

// Modern alternative — Custom Hook (simpler!)
function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return pos;
}`,
        language: "tsx",
        tip: "Modern React mein Custom Hooks > Render Props > HOC. HOC aaj bhi useful hai for cross-cutting concerns (auth, logging). Render Props component rendering flexibility deta hai.",
      },
    ],
    mcqs: [
      { q: "Compound Components pattern ka main benefit kya hai?", options: ["Better performance", "Internal state share — consumer ko state manage nahi karna", "Less code", "Better TypeScript support"], correct: 1, explain: "Compound components Context ke through internal state share karte hain. User ko low-level state management nahi karna padta — bas components compose karo." },
      { q: "Modern React mein HOC ko mostly kis se replace kiya gaya?", options: ["Render Props se", "Class Components se", "Custom Hooks se", "Context API se"], correct: 2, explain: "Custom Hooks HOC aur Render Props dono ko mostly replace kar dete hain — simpler, composable, no wrapper hell. HOC abhi bhi auth/logging jaise cross-cutting concerns mein useful hai." },
    ],
    cheatsheet: [
      "Compound: Context + sub-components sharing state",
      "HOC: function(Component) => EnhancedComponent",
      "Render Props: render={(data) => <JSX />}",
      "Custom Hooks > Render Props > HOC (modern preference)",
      "withAuth(Component) = HOC for route protection",
    ],
    revision: [
      "Compound = related components internally share state via Context",
      "HOC = component enhance karo — auth, logging, analytics",
      "Render Props = rendering control consumer ko do",
      "Custom Hooks = modern way to share stateful logic",
      "Composition over inheritance — React ka core philosophy",
    ],
  },
  {
    id: "react-suspense",
    title: "Suspense, Error Boundaries & Portals",
    emoji: "🌀",
    category: "Advanced",
    description: "React.Suspense, Error Boundaries, Portals, aur lazy loading",
    sections: [
      {
        heading: "React.lazy & Suspense — Code Splitting",
        content: `Lazy loading = component pehle load mat karo — pehli baar use hone par fetch karo. Bundle size chhoti hoti hai!`,
        code: `import { lazy, Suspense } from 'react';

// ─── Lazy Import ───────────────────────────────────
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
const Profile = lazy(() => import('./pages/Profile'));

// ─── Suspense Boundary ────────────────────────────
function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>  {/* loading UI */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

// ─── Nested Suspense ──────────────────────────────
function ProfilePage() {
  return (
    <div>
      <ProfileHeader />  {/* eager loaded */}
      <Suspense fallback={<Skeleton />}>
        <ProfilePosts />   {/* lazy — posts load hone tak skeleton */}
      </Suspense>
    </div>
  );
}`,
        language: "tsx",
        tip: "Route-level lazy loading = biggest bundle size win. Har route apni chunk hogi — initial load fast!",
      },
      {
        heading: "Error Boundaries",
        content: `Error Boundaries JavaScript errors catch karte hain component tree mein — class component hai (hooks nahi).`,
        code: `import { Component, ReactNode, ErrorInfo } from 'react';

interface Props { children: ReactNode; fallback?: ReactNode; }
interface State { hasError: boolean; error?: Error; }

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error caught:', error, info.componentStack);
    // Sentry/monitoring pe bhejo
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="error-ui">
          <h2>Kuch galat ho gaya!</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// ─── Portals — render outside root div ────────────
import { createPortal } from 'react-dom';

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body  // body mein render hoga, not inside component tree
  );
}`,
        language: "tsx",
        tip: "Portals modals, tooltips, dropdowns ke liye perfect hain — CSS z-index aur overflow issues automatically solve ho jaate hain kyunki DOM mein body ke andar render hota hai.",
      },
    ],
    mcqs: [
      { q: "React.lazy kab use karte hain?", options: ["Performance optimize karne ke liye hamesha", "Route-level code splitting — initial bundle size chhoti karo", "Testing ke liye", "SSR ke liye"], correct: 1, explain: "React.lazy + Suspense = code splitting. Har lazy import alag chunk banta hai — sirf tab load hota hai jab chahiye. Routes ke liye most effective." },
      { q: "Error Boundary class component kyun hai?", options: ["Hooks se fast hai", "getDerivedStateFromError aur componentDidCatch hooks mein available nahi hain", "TypeScript support", "Performance"], correct: 1, explain: "Error boundaries ke liye required lifecycle methods (getDerivedStateFromError, componentDidCatch) React hooks mein equivalent nahi hain abhi tak. Class component rakhna padta hai." },
    ],
    cheatsheet: [
      "lazy(() => import('./Component')) — dynamic import",
      "<Suspense fallback={<Loader />}> — loading UI",
      "ErrorBoundary class component — errors catch karo",
      "getDerivedStateFromError — error state set karo",
      "createPortal(jsx, document.body) — DOM mein bahar render",
    ],
    revision: [
      "React.lazy = dynamic import, Suspense = loading fallback",
      "Route-level lazy loading = fastest initial load",
      "Error Boundary = crash se UI protect karo",
      "Portals = DOM hierarchy se bahar render (modals)",
      "Nested Suspense = different loading states per section",
    ],
  },
  {
    id: "react-query",
    title: "Data Fetching — TanStack Query",
    emoji: "📡",
    category: "Advanced",
    description: "TanStack Query (React Query) se server state manage karo — caching, background refresh, mutations",
    sections: [
      {
        heading: "Server State vs Client State",
        content: `**Client State** = UI state (modal open, form values, theme) → useState/Zustand
**Server State** = server se data (users, products) → TanStack Query

Server state mein challenges:
- Caching (baar baar API call mat karo)
- Background refetching (stale data update karo)
- Loading/error states har jagah
- Optimistic updates`,
      },
      {
        heading: "useQuery — Data Fetch Karo",
        content: `TanStack Query setup aur useQuery hook:`,
        code: `// ─── Setup ────────────────────────────────────────
import { QueryClient, QueryClientProvider, useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,  // 5 min stale
      retry: 2,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyApp />
    </QueryClientProvider>
  );
}

// ─── useQuery ─────────────────────────────────────
function UserList() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['users'],  // cache key — unique identifier
    queryFn: () => fetch('/api/users').then(r => r.json()),
    staleTime: 60_000,    // 1 min fresh maan lo
    gcTime: 5 * 60_000,  // 5 min cache mein rakho
  });

  if (isLoading) return <Spinner />;
  if (isError) return <Error msg={error.message} />;
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

// Dynamic query (id pe depend kare)
function UserDetail({ userId }: { userId: number }) {
  const { data: user } = useQuery({
    queryKey: ['users', userId],  // userId change = new cache entry
    queryFn: () => fetchUser(userId),
    enabled: !!userId,  // userId ho tabhi fetch karo
  });
  return <div>{user?.name}</div>;
}`,
        language: "tsx",
        tip: "queryKey = cache ka address. Same key pe koi bhi component useQuery karega toh cached data milega — no duplicate API calls!",
      },
      {
        heading: "useMutation — Data Update Karo",
        content: `Create/update/delete operations ke liye useMutation:`,
        code: `function CreateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newUser: { name: string; email: string }) =>
      fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      }).then(r => r.json()),

    // Success pe users list invalidate karo → auto refetch
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },

    // Optimistic update pattern
    onMutate: async (newUser) => {
      await queryClient.cancelQueries({ queryKey: ['users'] });
      const previous = queryClient.getQueryData(['users']);
      queryClient.setQueryData(['users'], (old: User[]) => [
        ...old, { ...newUser, id: Date.now() }  // temp id
      ]);
      return { previous };  // rollback ke liye
    },
    onError: (err, newUser, context) => {
      queryClient.setQueryData(['users'], context?.previous);  // rollback!
    },
  });

  return (
    <form onSubmit={e => {
      e.preventDefault();
      mutation.mutate({ name: 'Alice', email: 'alice@test.com' });
    }}>
      <button disabled={mutation.isPending}>
        {mutation.isPending ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}`,
        language: "tsx",
      },
    ],
    mcqs: [
      { q: "TanStack Query ka main benefit kya hai?", options: ["TypeScript support", "Server state management — caching, background sync, loading/error states automatic", "Bundle size chhoti", "CSS management"], correct: 1, explain: "TanStack Query server state (API data) ke complex problems solve karta hai — caching, deduplication, background refetching, stale-while-revalidate. Manual useEffect + useState se much better." },
      { q: "queryKey kya karta hai?", options: ["API endpoint define karta hai", "Cache identifier — same key = same cached data", "Authentication handle karta hai", "Error handling"], correct: 1, explain: "queryKey = cache key. ['users'] se start hokar ['users', 1] tak — hierarchical. invalidateQueries(['users']) = sab 'users' queries invalidate. Component mount pe same key = cache se data, no re-fetch." },
    ],
    cheatsheet: [
      "QueryClientProvider + QueryClient — setup",
      "useQuery({ queryKey, queryFn }) — data fetch",
      "queryKey: ['resource', id] — dynamic cache key",
      "enabled: !!id — conditional fetch",
      "useMutation({ mutationFn, onSuccess }) — create/update",
      "queryClient.invalidateQueries(['key']) — refetch trigger",
      "staleTime = fresh data kitni der, gcTime = cache kitni der",
    ],
    revision: [
      "Server state ≠ Client state — TanStack Query server ke liye",
      "queryKey = cache address, same key = shared cache",
      "useQuery = fetch + cache + loading/error automatic",
      "useMutation = POST/PUT/DELETE + invalidate on success",
      "Optimistic update = UI pehle update, API ke baad confirm/rollback",
    ],
  },
  {
    id: "react-testing",
    title: "Testing — Jest & React Testing Library",
    emoji: "🧪",
    category: "Advanced",
    description: "Unit tests, integration tests, mocking — RTL philosophy aur practical patterns",
    sections: [
      {
        heading: "Testing Philosophy — RTL Way",
        content: `React Testing Library philosophy: **Test your app the way users use it** — not implementation details.

❌ **Avoid:** Testing component state, refs, internal methods
✅ **Test:** What user sees (text, buttons, inputs), behavior (click → result)

**Selectors priority (best to worst):**
1. getByRole (accessibility-first)
2. getByLabelText (forms)
3. getByText (visible text)
4. getByTestId (last resort)`,
      },
      {
        heading: "Component Testing — Practical Examples",
        content: `Practical testing patterns:`,
        code: `import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// ─── Simple Component Test ─────────────────────────
describe('Button', () => {
  it('click pe onClick call ho', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    await userEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled hone pe click work na kare', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Disabled</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});

// ─── Async — API Call Test ─────────────────────────
describe('UserList', () => {
  it('users fetch karke display kare', async () => {
    // API mock karo
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
    });

    render(<UserList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Alice')).toBeInTheDocument();
      expect(screen.getByText('Bob')).toBeInTheDocument();
    });
  });
});

// ─── Form Test ────────────────────────────────────
it('form submit pe correct data bheje', async () => {
  const onSubmit = jest.fn();
  render(<LoginForm onSubmit={onSubmit} />);

  await userEvent.type(screen.getByLabelText(/email/i), 'test@test.com');
  await userEvent.type(screen.getByLabelText(/password/i), 'secret123');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(onSubmit).toHaveBeenCalledWith({
    email: 'test@test.com',
    password: 'secret123',
  });
});`,
        language: "tsx",
        tip: "userEvent > fireEvent — userEvent real browser events simulate karta hai (pointer events, focus, etc.). More realistic testing.",
      },
    ],
    mcqs: [
      { q: "RTL mein best selector kaun sa hai?", options: ["getByTestId", "getByClassName", "getByRole", "getByRef"], correct: 2, explain: "getByRole accessibility-first hai — screenreader jaise dhundho. Semantic HTML force karta hai. getByTestId last resort — test IDs add karne padte hain markup mein." },
      { q: "waitFor() kab use karte hain?", options: ["Sync operations ke liye", "Async operations — API calls, state updates ke liye", "Error testing ke liye", "Mock ke liye"], correct: 1, explain: "waitFor async operations complete hone tak wait karta hai. API calls, setTimeout, promises ke baad DOM updates check karne ke liye use karo." },
    ],
    cheatsheet: [
      "render(<Component />) — component mount",
      "screen.getByRole('button', {name: /text/i}) — selector",
      "await userEvent.click(element) — click simulate",
      "await userEvent.type(input, 'text') — typing simulate",
      "jest.fn() — mock function",
      "waitFor(() => expect(...)) — async assertions",
      "jest.mock('./api') — module mock",
    ],
    revision: [
      "Test user behavior, not implementation details",
      "getByRole > getByText > getByTestId (selector priority)",
      "userEvent = realistic events, fireEvent = low-level",
      "jest.fn() = mock functions, mockResolvedValue = async mock",
      "waitFor = async DOM updates ka wait karo",
    ],
  },
  {
    id: "react-styling",
    title: "Styling — Tailwind, CSS Modules & Animations",
    emoji: "🎨",
    category: "Intermediate",
    description: "Tailwind CSS, CSS Modules, conditional classes, aur Framer Motion basics",
    sections: [
      {
        heading: "Tailwind CSS in React",
        content: `Tailwind = utility-first CSS — classes directly HTML mein. Fast prototyping, consistent design system.`,
        code: `// ─── Basic Tailwind ───────────────────────────────
function Card({ title, desc, featured }: CardProps) {
  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <p className="mt-2 text-gray-600">{desc}</p>
    </div>
  );
}

// ─── Conditional Classes — clsx/cn utility ─────────
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// cn = clsx + tailwind-merge (conflicts resolve karta hai)
const cn = (...inputs) => twMerge(clsx(inputs));

function Button({ variant, size, className, ...props }) {
  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-colors",
        // variant classes
        variant === 'primary' && "bg-blue-600 text-white hover:bg-blue-700",
        variant === 'secondary' && "bg-gray-100 text-gray-900 hover:bg-gray-200",
        variant === 'danger' && "bg-red-600 text-white hover:bg-red-700",
        // size classes
        size === 'sm' && "px-3 py-1.5 text-sm",
        size === 'md' && "px-4 py-2 text-base",
        size === 'lg' && "px-6 py-3 text-lg",
        className  // caller ki custom classes override kar sakti hain
      )}
      {...props}
    />
  );
}

// ─── CSS Modules (scoped CSS) ──────────────────────
// Button.module.css — class names auto-scoped hote hain
import styles from './Button.module.css';

function ButtonCSS({ children }) {
  return <button className={styles.button}>{children}</button>;
}`,
        language: "tsx",
        tip: "clsx + tailwind-merge = best combo. clsx conditional classes handle karta hai, twMerge conflicting Tailwind classes resolve karta hai (e.g., p-2 aur p-4 dono ho toh p-4 wins).",
      },
      {
        heading: "Framer Motion — Animations",
        content: `Framer Motion = production-grade animations React ke liye.`,
        code: `import { motion, AnimatePresence } from 'framer-motion';

// ─── Basic Animation ───────────────────────────────
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>

// ─── AnimatePresence — mount/unmount animations ────
function Notification({ message, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="notification"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="notification"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── List animations ─────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

<motion.ul variants={container} initial="hidden" animate="show">
  {items.map(i => (
    <motion.li key={i.id} variants={item}>{i.name}</motion.li>
  ))}
</motion.ul>`,
        language: "tsx",
      },
    ],
    mcqs: [
      { q: "tailwind-merge kyun use karte hain?", options: ["Performance ke liye", "Conflicting Tailwind classes resolve karne ke liye", "Bundle size ke liye", "TypeScript support"], correct: 1, explain: "twMerge conflicting Tailwind classes handle karta hai — agar 'p-2 p-4' do toh p-4 win karta hai. Without merge dono classes apply honge aur CSS specificity issues aate hain." },
      { q: "AnimatePresence kab zaruri hai?", options: ["Hamesha", "Jab component unmount hone pe animation chahiye (exit animation)", "Mount pe animation ke liye", "Loops ke liye"], correct: 1, explain: "AnimatePresence exit animations enable karta hai. Without it, component unmount hote hi gayab ho jaata hai — exit animation play nahi hoti. Modals, notifications, page transitions ke liye essential." },
    ],
    cheatsheet: [
      "cn(clsx, twMerge) — conditional + merge classes",
      "styles.className — CSS Modules scoped",
      "motion.div — animated element",
      "initial/animate/exit — animation states",
      "AnimatePresence — unmount animations",
      "variants + staggerChildren — list animations",
      "transition={{ duration, ease }} — timing control",
    ],
    revision: [
      "Tailwind = utility classes, fast development, consistent design",
      "clsx = conditional classes, twMerge = conflict resolution",
      "CSS Modules = scoped CSS, no global conflicts",
      "Framer Motion = initial→animate→exit lifecycle",
      "AnimatePresence = exit animations enable karta hai",
    ],
  },
  {
    id: "react-nextjs",
    title: "Next.js Fundamentals",
    emoji: "▲",
    category: "Advanced",
    description: "Next.js App Router, Server Components, SSR vs SSG, routing, aur data fetching",
    sections: [
      {
        heading: "Next.js Kya Hai aur Kyun?",
        content: `Next.js = React framework with:
- **File-based routing** — folder = route
- **Server Components** — server pe render, client ko HTML
- **SSR/SSG** — SEO friendly
- **Image optimization, API routes, middleware** — batteries included

**React vs Next.js:**
- React: SPA — client pe render, SEO weak
- Next.js: Server side rendering — fast first load, SEO strong`,
        diagram: `Next.js App Router Structure:

app/
  layout.tsx          ← root layout (always renders)
  page.tsx            ← / route
  about/
    page.tsx          ← /about
  blog/
    [slug]/
      page.tsx        ← /blog/anything (dynamic)
  api/
    users/
      route.ts        ← /api/users (API endpoint)`,
      },
      {
        heading: "Server vs Client Components",
        content: `App Router mein default = Server Component. 'use client' directive se Client Component banate hain.`,
        code: `// ─── Server Component (default) ──────────────────
// app/users/page.tsx
// - Server pe run hota hai
// - Database/API directly access kar sakta hai
// - No useState, useEffect, onClick, browser APIs
async function UsersPage() {
  // Server pe directly fetch — no API needed!
  const users = await db.query('SELECT * FROM users');
  // Ya external API
  const data = await fetch('https://api.example.com/users').then(r => r.json());

  return (
    <div>
      <h1>Users</h1>
      {users.map(u => <UserCard key={u.id} user={u} />)}
    </div>
  );
}

// ─── Client Component ─────────────────────────────
// components/SearchBox.tsx
'use client';  // ← yeh directive client component banata hai

import { useState } from 'react';

function SearchBox() {
  const [query, setQuery] = useState('');  // useState OK hai ab
  return (
    <input
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}

// ─── Mixed: Server + Client ────────────────────────
// app/products/page.tsx (Server Component)
async function ProductsPage() {
  const products = await fetchProducts();  // server pe
  return (
    <div>
      <SearchBox />       {/* Client Component */}
      <ProductList products={products} />  {/* Server Component */}
    </div>
  );
}`,
        language: "tsx",
        tip: "Server Components tree ke upar rakho, Client Components tree ke neeche (leaves). Client boundary mein sirf interactive parts aane chahiye.",
      },
    ],
    mcqs: [
      { q: "Next.js App Router mein default component type kya hai?", options: ["Client Component", "Server Component", "Hybrid Component", "Static Component"], correct: 1, explain: "App Router mein components by default Server Components hain. 'use client' directive se Client Component banate hain. Server Components = no React hooks, but direct server access." },
      { q: "Next.js ko React se kaun sa main advantage hai SEO ke liye?", options: ["Better CSS", "Server-side rendering — initial HTML server pe generate hota hai, crawler readable", "Faster JavaScript", "Better TypeScript"], correct: 1, explain: "React SPA client pe render karta hai — crawler empty HTML dekhta hai, SEO suffer karta hai. Next.js SSR/SSG se server HTML send karta hai — Google properly index kar sakta hai." },
    ],
    cheatsheet: [
      "app/page.tsx — / route",
      "app/[slug]/page.tsx — dynamic route",
      "'use client' — Client Component",
      "async function Page() — Server Component",
      "fetch() server component mein — direct API call",
      "app/api/route.ts — API endpoint",
      "layout.tsx — shared UI wrapper",
    ],
    revision: [
      "Server Components = server pe render, no hooks, direct DB access",
      "Client Components = 'use client', useState/useEffect OK",
      "App Router = folder structure = routes",
      "[slug] folder = dynamic route params",
      "Server → Client pass karo props se, Client → Server nahi",
    ],
  },
  {
    id: "react-deployment",
    title: "Build, Deploy & Production",
    emoji: "🚀",
    category: "Advanced",
    description: "Vite build optimization, environment variables, Vercel/Netlify deploy, performance tips",
    sections: [
      {
        heading: "Production Build & Optimization",
        content: `Vite se production build karna aur optimize karna:`,
        code: `// vite.config.ts — production optimization
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Code splitting — manual chunks
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],  // vendor chunk alag
          router: ['react-router-dom'],
          query: ['@tanstack/react-query'],
        },
      },
    },
    // Source maps production mein (optional, error tracking ke liye)
    sourcemap: false,
    // Chunk size warning
    chunkSizeWarningLimit: 500,  // KB
  },
});

// ─── Environment Variables ─────────────────────────
// .env files:
// .env              — hamesha
// .env.development  — dev only
// .env.production   — prod only

// VITE_ prefix zaruri hai browser mein expose ke liye!
// VITE_API_URL=https://api.myapp.com
// VITE_STRIPE_KEY=pk_live_...

// Code mein:
const apiUrl = import.meta.env.VITE_API_URL;
const isProd = import.meta.env.PROD;  // built-in

// ─── Build Commands ───────────────────────────────
// npm run build    → dist/ folder
// npm run preview  → dist/ ko locally serve karo
// npm run lint     → code quality check`,
        language: "typescript",
        tip: "manualChunks se vendor libraries alag chunk mein — user ko baar baar vendor JS download nahi karna padta (cached rehta hai).",
      },
      {
        heading: "Vercel/Netlify Deploy",
        content: `React app ko production mein deploy karna:`,
        code: `# ─── Vercel (recommended for Next.js + React) ────────
# 1. Install Vercel CLI
npm i -g vercel

# 2. Project connect karo
vercel login
vercel  # guided setup

# 3. Auto-deploy: GitHub se connect karo Vercel dashboard mein
# Every push to main = auto deploy!

# ─── Netlify ──────────────────────────────────────
# netlify.toml — config file
[build]
  command = "npm run build"
  publish = "dist"    # Vite output folder

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
# ↑ SPA ke liye zaruri — sab routes index.html pe jaayein

# ─── Performance Checklist ────────────────────────
# 1. Lazy load routes
# 2. Image optimization (next/image ya lazy loading)
# 3. Bundle analyze: npx vite-bundle-visualizer
# 4. Remove unused dependencies
# 5. Enable gzip/brotli (hosting pe automatic hota hai)
# 6. CDN ke liye static assets

# ─── Bundle Analysis ──────────────────────────────
npx vite-bundle-visualizer
# Interactive treemap — konsa package kitna space le raha hai`,
        language: "bash",
        tip: "SPA deploy karte waqt Netlify/Apache mein redirect rule zaruri hai — /* → index.html. Bina iske direct URL navigate karne pe 404 aata hai.",
      },
    ],
    mcqs: [
      { q: "Vite environment variable VITE_ prefix kyun chahiye?", options: ["Convention hai", "Security — browser bundle mein sirf VITE_ prefix wale variables expose hote hain", "TypeScript requirement", "Build optimization"], correct: 1, explain: "Vite security ke liye sirf VITE_ prefix variables ko client bundle mein include karta hai. Without prefix variables server-side/build-time only rehte hain — accidentally secrets expose nahi hote." },
      { q: "SPA ke liye /* → /index.html redirect kyun chahiye?", options: ["Performance", "SEO", "User /about pe directly jaaye toh hosting 404 na de — React router handle kare", "Caching"], correct: 2, explain: "React SPA mein routing client-side hai. /about koi physical file nahi hai. Direct navigate pe server 404 dega. Redirect se index.html serve hota hai → React Router URL handle karta hai." },
    ],
    cheatsheet: [
      "npm run build → dist/ production bundle",
      "VITE_KEY=value → import.meta.env.VITE_KEY",
      "manualChunks → vendor libraries alag chunk",
      "netlify.toml → /* redirect to index.html",
      "vite-bundle-visualizer → bundle size analyze",
      "vercel → zero-config React/Next deploy",
    ],
    revision: [
      "VITE_ prefix = browser mein expose, without = hidden",
      ".env.production = production pe auto load",
      "manualChunks = vendor libraries cache-friendly",
      "SPA deploy = /* → index.html redirect required",
      "Bundle analyze karo pehle optimize karo",
    ],
  },
];
