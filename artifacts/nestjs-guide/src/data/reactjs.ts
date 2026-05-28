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
  {
    id: "react-advanced-hooks",
    title: "Advanced Hooks — useReducer, useId, useSyncExternalStore",
    titleEn: "Advanced Hooks — useReducer, useId, useSyncExternalStore",
    emoji: "🪝",
    category: "Advanced",
    description: "Complex state management aur modern React hooks — useReducer, useId, useImperativeHandle",
    descriptionEn: "Complex state management and modern React hooks — useReducer, useId, useImperativeHandle",
    sections: [
      {
        heading: "useReducer — Complex State Logic",
        content: `**useReducer** = useState ka powerful alternative — complex state logic, actions, Redux-like pattern.

**Kab useReducer:**
- Multiple related state fields
- Next state depends on previous
- Complex update logic
- State transitions well-defined honi chahiye`,
        code: `import { useReducer } from 'react';

// State type
type CartState = {
    items: CartItem[];
    total: number;
    discount: number;
};

// Action types
type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: string }
    | { type: 'APPLY_DISCOUNT'; payload: number }
    | { type: 'CLEAR' };

// Reducer — pure function
function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_ITEM':
            const items = [...state.items, action.payload];
            return {
                ...state,
                items,
                total: items.reduce((sum, item) => sum + item.price, 0),
            };
        case 'REMOVE_ITEM':
            const filtered = state.items.filter(i => i.id !== action.payload);
            return { ...state, items: filtered, total: filtered.reduce((s, i) => s + i.price, 0) };
        case 'APPLY_DISCOUNT':
            return { ...state, discount: action.payload };
        case 'CLEAR':
            return { items: [], total: 0, discount: 0 };
        default:
            return state;
    }
}

const initialState: CartState = { items: [], total: 0, discount: 0 };

function Cart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    
    return (
        <div>
            <p>Total: {state.total * (1 - state.discount / 100)}</p>
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}>
                Add
            </button>
            <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear</button>
        </div>
    );
}`,
        language: "tsx",
      },
      {
        heading: "useImperativeHandle aur forwardRef",
        content: `**forwardRef:** Parent component child ke DOM element ya methods access kar sake.
**useImperativeHandle:** forwardRef ke saath — specific methods expose karo (full DOM nahi).

**Kab use:** Custom input components, modal open/close, video player controls.`,
        code: `import { useRef, useImperativeHandle, forwardRef } from 'react';

// Child component — methods expose karo
interface InputRef {
    focus: () => void;
    clear: () => void;
    getValue: () => string;
}

const SmartInput = forwardRef<InputRef, { placeholder?: string }>(
    ({ placeholder }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);
        
        useImperativeHandle(ref, () => ({
            focus: () => inputRef.current?.focus(),
            clear: () => {
                if (inputRef.current) inputRef.current.value = '';
            },
            getValue: () => inputRef.current?.value ?? '',
        }));
        
        return <input ref={inputRef} placeholder={placeholder} />;
    }
);

// Parent — child methods call karo
function Form() {
    const inputRef = useRef<InputRef>(null);
    
    const handleSubmit = () => {
        const value = inputRef.current?.getValue();
        console.log('Value:', value);
        inputRef.current?.clear();
    };
    
    return (
        <>
            <SmartInput ref={inputRef} placeholder="Enter text..." />
            <button onClick={() => inputRef.current?.focus()}>Focus</button>
            <button onClick={handleSubmit}>Submit & Clear</button>
        </>
    );
}`,
        language: "tsx",
        tip: "useImperativeHandle sirf zaroori methods expose karo — pura DOM ref expose karna encapsulation break karta hai.",
      },
    ],
    cheatsheet: [
      "useReducer(reducer, initialState) — complex state",
      "dispatch({ type: 'ACTION', payload: data })",
      "forwardRef((props, ref) => ...) — ref forward karo",
      "useImperativeHandle(ref, () => ({ method })) — expose",
      "useId() — unique IDs generate (SSR safe)",
    ],
    revision: [
      "useReducer = useState + action pattern",
      "Reducer = pure function (state, action) => newState",
      "forwardRef = parent ko child ref access dena",
      "useImperativeHandle = selective method expose",
      "dispatch() = action bhejo reducer ko",
    ],
  },
  {
    id: "react-performance-deep",
    title: "React Performance Optimization",
    titleEn: "React Performance Optimization",
    emoji: "🚀",
    category: "Advanced",
    description: "React.memo, profiling, bundle optimization, aur rendering best practices",
    descriptionEn: "React.memo, profiling, bundle optimization, and rendering best practices",
    sections: [
      {
        heading: "React.memo aur Re-render prevent karna",
        content: `**Re-render kab hota hai:** State change, props change, parent re-render.
**React.memo:** Functional component memoize karo — props same hon toh re-render skip.

**Warning:** Har component pe memo mat lagao — comparison ka bhi cost hai!`,
        code: `import { memo, useMemo, useCallback, useState } from 'react';

// React.memo — props comparison
const ExpensiveList = memo(({ items, onDelete }: {
    items: string[];
    onDelete: (id: string) => void;
}) => {
    console.log('ExpensiveList rendered!');
    return <ul>{items.map(item => <li key={item}>{item}</li>)}</ul>;
});

// Custom comparison function
const UserCard = memo(({ user }: { user: User }) => {
    return <div>{user.name}</div>;
}, (prevProps, nextProps) => {
    // true = same = skip re-render
    return prevProps.user.id === nextProps.user.id &&
           prevProps.user.name === nextProps.user.name;
});

function Parent() {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState(['a', 'b', 'c']);
    
    // useCallback — function stable raho (memo ke liye zaroori)
    const handleDelete = useCallback((id: string) => {
        setItems(prev => prev.filter(item => item !== id));
    }, []);  // no deps — never recreate
    
    // useMemo — expensive computation
    const sortedItems = useMemo(() => {
        return [...items].sort();
    }, [items]);  // sirf items change pe sort karo
    
    return (
        <>
            <button onClick={() => setCount(c => c + 1)}>
                Count: {count}
            </button>
            {/* Count change pe ExpensiveList re-render nahi karega! */}
            <ExpensiveList items={sortedItems} onDelete={handleDelete} />
        </>
    );
}`,
        language: "tsx",
      },
      {
        heading: "Profiling aur Bundle Optimization",
        content: `**React DevTools Profiler:** Kaunsa component kitni baar render hua, kitna time liya.
**Bundle analysis:** webpack-bundle-analyzer — largest chunks identify karo.
**Virtualization:** react-window — 1000+ items efficiently render karo.`,
        code: `// React DevTools Profiler — browser mein
// Components tab → ⏺ Record → Interact → Stop → Flamegraph

// Virtualization — 10000 items efficiently
import { FixedSizeList } from 'react-window';

function VirtualList({ items }: { items: string[] }) {
    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
        <div style={style}>Item {items[index]}</div>
    );
    
    return (
        <FixedSizeList
            height={400}
            width="100%"
            itemCount={items.length}
            itemSize={50}  // row height
        >
            {Row}
        </FixedSizeList>
    );
}

// Bundle optimization
// 1. Tree shaking — named imports use karo
import { debounce } from 'lodash-es';  // not import _ from 'lodash'

// 2. Dynamic imports — code splitting
const Chart = lazy(() => import('./Chart'));

// 3. Image optimization
<img loading="lazy" src={src} alt={alt} />

// 4. Production build check
// npm run build -- --stats
// npx webpack-bundle-analyzer stats.json`,
        language: "tsx",
        tip: "Premature optimization avoid karo. Pehle profile karo, phir optimize. React DevTools Profiler se actual bottlenecks identify karo.",
      },
    ],
    cheatsheet: [
      "React.memo(Component) — props same? skip render",
      "useMemo(() => expensive(), [deps]) — value cache",
      "useCallback(fn, [deps]) — function stable rakhna",
      "React DevTools Profiler — rendering analyze",
      "react-window FixedSizeList — long list virtualize",
      "lazy() + Suspense — code splitting",
    ],
    revision: [
      "memo = props change nahi → re-render skip",
      "useMemo = value memoize, useCallback = function memoize",
      "Virtualization = sirf visible items render",
      "Profile first, optimize later (DevTools)",
      "memo + useCallback = sath mein use karo",
    ],
  },
  {
    id: "react-architecture",
    title: "React Project Architecture",
    titleEn: "React Project Architecture",
    emoji: "🏛️",
    category: "Advanced",
    description: "React apps ko scalable banao — folder structure, custom hooks, separation of concerns",
    descriptionEn: "Scale React apps — folder structure, custom hooks, separation of concerns",
    sections: [
      {
        heading: "Folder Structure aur Feature-based Organization",
        content: `**2 approaches:**
1. **Type-based:** components/, hooks/, utils/, pages/ — small apps ke liye
2. **Feature-based:** features/auth/, features/cart/ — large apps ke liye (recommended)

**Feature-based structure:**
\`\`\`
src/
├── features/
│   ├── auth/
│   │   ├── components/     LoginForm, RegisterForm
│   │   ├── hooks/          useAuth, useLogin
│   │   ├── api/            authApi.ts
│   │   ├── store/          authSlice.ts
│   │   └── index.ts        public API
│   └── products/
│       ├── components/     ProductCard, ProductList
│       ├── hooks/          useProducts, useCart
│       └── index.ts
├── shared/
│   ├── components/         Button, Input, Modal (reusable)
│   ├── hooks/              useDebounce, useLocalStorage
│   └── utils/              formatDate, formatCurrency
├── app/
│   ├── store.ts            Redux store
│   ├── router.tsx          Routes
│   └── App.tsx
└── main.tsx
\`\`\``,
        code: `// Custom hook — logic extract karo component se
// hooks/useProducts.ts
import { useState, useEffect, useCallback } from 'react';
import { productApi } from '../api/productApi';

export function useProducts(categoryId?: string) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    
    useEffect(() => {
        const controller = new AbortController();
        
        setLoading(true);
        productApi.getAll(categoryId, controller.signal)
            .then(setProducts)
            .catch(err => {
                if (err.name !== 'AbortError') setError(err);
            })
            .finally(() => setLoading(false));
        
        return () => controller.abort();
    }, [categoryId]);
    
    const deleteProduct = useCallback(async (id: string) => {
        await productApi.delete(id);
        setProducts(prev => prev.filter(p => p.id !== id));
    }, []);
    
    return { products, loading, error, deleteProduct };
}

// Component — sirf UI (no business logic)
function ProductList({ categoryId }: { categoryId: string }) {
    const { products, loading, error, deleteProduct } = useProducts(categoryId);
    
    if (loading) return <Spinner />;
    if (error) return <ErrorMessage error={error} />;
    
    return (
        <ul>
            {products.map(p => (
                <ProductCard key={p.id} product={p} onDelete={deleteProduct} />
            ))}
        </ul>
    );
}`,
        language: "tsx",
        tip: "Custom hooks main benefit: reusability + testability. Business logic hooks mein, presentation components mein sirf UI.",
      },
    ],
    cheatsheet: [
      "Feature-based folders — large apps ke liye",
      "Custom hooks — logic extract + reuse karo",
      "index.ts — feature ka public API",
      "Shared folder — truly reusable components only",
      "API layer separate — components direct fetch nahi",
    ],
    revision: [
      "Feature-based > type-based for large apps",
      "Custom hook = logic + state extract karo",
      "Component = UI sirf, hook = logic + data",
      "index.ts = barrel exports, clean imports",
      "Separation of concerns = test karna easy hota hai",
    ],
  },
  {
    id: "react-lists-conditionals",
    title: "Lists, Keys aur Conditional Rendering",
    titleEn: "Lists, Keys and Conditional Rendering",
    emoji: "📋",
    category: "Beginner",
    description: "map() se lists render karna, keys ka importance, conditional rendering — &&, ternary, early return",
    descriptionEn: "Rendering lists with map(), importance of keys, conditional rendering — &&, ternary, early return",
    sections: [
      {
        heading: "Lists Render karna — map() aur Keys",
        content: `**React mein lists** = JavaScript \`map()\` se render hoti hain — har item ek JSX element.

**Key prop:** React ko unique identifier chahiye DOM efficiently update karne ke liye — keys changes track karta hai.

**Key rules:**
- Sibling mein unique honi chahiye (globally nahi)
- Stable honi chahiye — index use karna avoid karo (order changes toh bugs)
- String ya number — objects nahi`,
        code: `// Basic list rendering
const fruits = ['Apple', 'Banana', 'Cherry'];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={fruit}>{fruit}</li>  {/* key = unique string */}
      ))}
    </ul>
  );
}

// Objects ki list — ID as key (best practice)
const users = [
  { id: 1, name: 'Ali Khan', role: 'admin' },
  { id: 2, name: 'Sara Ahmed', role: 'user' },
  { id: 3, name: 'Bilal Malik', role: 'user' },
];

function UserList() {
  return (
    <ul className="user-list">
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong>
          <span className={"badge " + user.role}>{user.role}</span>
        </li>
      ))}
    </ul>
  );
}

// Component mein extract karo — clean!
function UserCard({ user }) {
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.role}</p>
    </div>
  );
}

function UserGrid({ users }) {
  return (
    <div className="grid">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// Filtering + mapping
function ActiveUsers({ users }) {
  return (
    <ul>
      {users
        .filter(u => u.isActive)           // filter first
        .sort((a, b) => a.name.localeCompare(b.name))  // sort
        .map(u => <li key={u.id}>{u.name}</li>)        // render
      }
    </ul>
  );
}

// ⚠️ Index as key — AVOID!
// {items.map((item, index) => <li key={index}>{item}</li>)}
// Problem: items reorder hon toh React confused ho jaata hai`,
        language: "tsx",
      },
      {
        heading: "Conditional Rendering — 4 Tarike",
        content: `React mein condition ke basis pe kuch show/hide karne ke **4 main patterns** hain:

1. **if/else** — simple, readable
2. **Ternary (? :)** — inline, 2 options
3. **&& (short circuit)** — sirf ek option
4. **Early return** — complex conditions ke liye`,
        code: `// 1. if/else — function level
function UserGreeting({ user, isLoading, error }) {
  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!user) return <p>No user found</p>;
  
  return <h1>Welcome, {user.name}!</h1>;  // happy path
}

// 2. Ternary — inline, 2 options
function LoginButton({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

// 3. && — sirf show karo, hide nahi
function Notification({ count, message }) {
  return (
    <div>
      {count > 0 && <span className="badge">{count}</span>}
      {message && <p className="alert">{message}</p>}
      
      {/* ⚠️ 0 && ... = "0" render karta hai! */}
      {count !== 0 && <span>{count}</span>}  {/* safe */}
    </div>
  );
}

// 4. Switch pattern — multiple states
function Status({ status }) {
  const content = {
    loading: <Spinner />,
    error: <ErrorCard />,
    empty: <EmptyState />,
    success: <DataTable />,
  }[status];
  
  return <div>{content}</div>;
}

// Real-world: Permission-based UI
function AdminPanel({ user }) {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      {user.role === 'admin' && <Link to="/users">Users</Link>}
      {user.permissions.includes('billing') && (
        <Link to="/billing">Billing</Link>
      )}
      {(user.role === 'admin' || user.role === 'manager') && (
        <Link to="/reports">Reports</Link>
      )}
    </nav>
  );
}`,
        language: "tsx",
        tip: "Early return pattern bahut clean hota hai — loading, error, empty states pehle handle karo. Main JSX sirf happy path ke liye rakhho. Ternary 2 options ke liye, && sirf ek option ke liye.",
      },
    ],
    mcqs: [
      {
        q: "React lists mein key prop kyun zaroori hai?",
        options: [
          "CSS styling ke liye",
          "React ko efficiently DOM update karne mein help karta hai — changes track karta hai",
          "Server-side rendering ke liye",
          "Performance optimization nahi karta",
        ],
        correct: 1,
        explain: "Key prop React ko batata hai kaunsa item add/remove/reorder hua. Bina keys ke React puri list re-render karta hai — keys se sirf changed items update hote hain.",
      },
    ],
    cheatsheet: [
      "arr.map(item => <Li key={item.id} />)",
      "key = stable unique ID — index avoid karo",
      "&& — sirf show, 0 se bachne ke liye !== 0 check",
      "? : — 2 options show/hide",
      "Early return = loading/error pehle handle karo",
      "filter().map() — filter phir render",
    ],
    revision: [
      "Lists = map() — har item JSX return karo",
      "Key = stable unique value (ID, not index)",
      "&& short-circuit — 0 bug se savdhan!",
      "Ternary = 2 options, && = 1 option",
      "Early return = multiple states handle karo cleanly",
    ],
  },
  {
    id: "react-portals-transitions",
    title: "Portals aur Transitions",
    titleEn: "Portals and Transitions",
    emoji: "🚪",
    category: "Intermediate",
    description: "ReactDOM.createPortal se modal render karna, useTransition aur useDeferredValue se smooth UX",
    descriptionEn: "Render modals with ReactDOM.createPortal, smooth UX with useTransition and useDeferredValue",
    sections: [
      {
        heading: "React Portals — DOM ke Bahar Render Karo",
        content: `**Portal** = Component ko DOM tree ke kisi bhi node mein render karo — parent component ke bahar.

**Kab use karein:**
- Modals / Dialogs — z-index aur overflow issues avoid karo
- Tooltips — parent overflow:hidden se bahar
- Notifications / Toast — page ke upar fixed position
- Dropdown menus — parent clipping se bahar

**Key insight:** Portal ka event bubbling still kaam karta hai React tree se — DOM tree se nahi!`,
        code: `// Basic Portal — document.body mein render karo
import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}  // overlay click rok
      >
        <button className="close-btn" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>,
    document.body  // portal target — body mein render hoga!
  );
}

// Usage
function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div style={{ overflow: 'hidden' }}>  {/* overflow hidden parent */}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      {/* Portal parent ke overflow se affect nahi hota! */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hello from Portal!</h2>
        <p>Yeh DOM mein body ke andar hai, React tree mein App ke andar.</p>
      </Modal>
    </div>
  );
}

// Dedicated portal container — best practice
// index.html mein add karo:
// <div id="modal-root"></div>

function ModalPortal({ children }) {
  const portalRoot = document.getElementById('modal-root')!;
  return createPortal(children, portalRoot);
}

// Toast notification portal
function ToastPortal({ toasts }) {
  return createPortal(
    <div className="toast-container">
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>,
    document.body
  );
}`,
        language: "tsx",
      },
      {
        heading: "useTransition aur useDeferredValue",
        content: `**useTransition:** Non-urgent state updates mark karo — React urgent updates (typing) pehle handle kare.

**useDeferredValue:** Value ka deferred copy — heavy re-renders delay karo.

**Use case:** Search input — typing responsive rakhho, results rendering slow bhi ho toh theek.`,
        code: `import { useState, useTransition, useDeferredValue, memo } from 'react';

// useTransition — urgent vs non-urgent updates
function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    
    // Urgent: input update immediately
    setQuery(value);
    
    // Non-urgent: results update mein delay theek hai
    startTransition(() => {
      const filtered = expensiveSearch(value);  // heavy operation
      setResults(filtered);
    });
  }

  return (
    <div>
      <input value={query} onChange={handleSearch} placeholder="Search..." />
      
      {isPending && <span className="loading">Searching...</span>}
      
      <ResultsList results={results} />  {/* slower update allowed */}
    </div>
  );
}

// useDeferredValue — value ka deferred copy
function FilteredList({ items }: { items: string[] }) {
  const [filter, setFilter] = useState('');
  const deferredFilter = useDeferredValue(filter);  // lags behind filter
  
  // filter ke saath input responsive, deferredFilter se heavy rendering
  const filtered = useMemo(
    () => items.filter(item => item.toLowerCase().includes(deferredFilter.toLowerCase())),
    [items, deferredFilter]  // deferred value use karo!
  );
  
  const isStale = filter !== deferredFilter;  // pending ho toh stale
  
  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      
      <ul style={{ opacity: isStale ? 0.5 : 1 }}>  {/* stale = dim */}
        {filtered.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

// useTransition vs useDeferredValue:
// useTransition = state update ko non-urgent mark karo (you control setter)
// useDeferredValue = prop/value ko defer karo (you don't control setter)
// Both prevent urgent updates (typing) from being blocked by heavy renders`,
        language: "tsx",
        tip: "useTransition = tumhare paas setter hai (state), useDeferredValue = prop aata hai bahar se. Dono Concurrent React features hain — React 18+. isPending se loading indicator dikhao user experience ke liye.",
      },
    ],
    cheatsheet: [
      "createPortal(jsx, domNode) — bahar render karo",
      "Portal = z-index/overflow issues fix karo",
      "useTransition → [isPending, startTransition]",
      "startTransition(() => heavyStateUpdate())",
      "useDeferredValue(val) — deferred copy",
      "isPending = true jab transition pending ho",
    ],
    revision: [
      "Portal = DOM mein kahin bhi render karo",
      "Modal/Toast/Tooltip = common portal use cases",
      "Event bubbling portal mein React tree se hota hai",
      "useTransition = non-urgent state updates",
      "useDeferredValue = prop/value defer karo",
      "isPending se loading state dikhao",
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
  // ─── Interview Questions ──────────────────────────────────────────────────
  {
    id: 510,
    level: "Beginner" as const,
    tags: ["lifecycle", "hooks"],
    question: "Class component lifecycle methods aur hooks mein kya mapping hai?",
    answer: `componentDidMount → useEffect(() => { ... }, [])
componentDidUpdate → useEffect(() => { ... }, [deps])
componentWillUnmount → useEffect cleanup function
shouldComponentUpdate → React.memo + useMemo

Hooks ka faida: logic reuse karo (custom hooks), less boilerplate, no 'this' confusion.`,
  },
  {
    id: 511,
    level: "Beginner" as const,
    tags: ["hooks", "ref"],
    question: "useRef aur useState mein kya fark hai? Kab useRef use karna chahiye?",
    answer: `useState: value change pe component re-render hota hai.
useRef: value change pe re-render NAHI hota — mutable container hai.

useRef kab use karo:
1. DOM elements access karo: inputRef.current.focus()
2. Mutable values store karo jo UI mein show nahi hoti (timer IDs, previous values)
3. Instance variables like class mein (across renders persist, without re-render)

Rule: Re-render chahiye → useState. Sirf value store karo → useRef.`,
    code: `const timerRef = useRef<NodeJS.Timeout>();
const inputRef = useRef<HTMLInputElement>(null);

// DOM access
inputRef.current?.focus();

// Timer track karo (re-render nahi)
timerRef.current = setInterval(() => ..., 1000);
clearInterval(timerRef.current);`,
  },
  {
    id: 512,
    level: "Intermediate" as const,
    tags: ["performance", "memo"],
    question: "React.memo kab kaam nahi karta? Iske limitations kya hain?",
    answer: `React.memo shallow comparison karta hai. Ye cases mein kaam nahi karta:

1. Object/Array props: har render pe naya reference banta hai
   { user: { name: 'Alice' } } — har baar naya object = memo useless

2. Function props: har render pe naya function reference
   onClick={() => doSomething()} — naya function = re-render

Solutions:
- Objects ke liye: useMemo se stable reference do
- Functions ke liye: useCallback use karo
- Custom comparison: memo(Component, (prev, next) => deepEqual(prev, next))`,
    code: `// ❌ Fails — har render pe naya object
<MemoComp config={{ theme: 'dark' }} />

// ✅ Works — stable reference
const config = useMemo(() => ({ theme: 'dark' }), []);
<MemoComp config={config} />

// ❌ Fails — naya function
<MemoComp onClick={() => console.log('click')} />

// ✅ Works
const handleClick = useCallback(() => console.log('click'), []);
<MemoComp onClick={handleClick} />`,
  },
  {
    id: 513,
    level: "Intermediate" as const,
    tags: ["performance"],
    question: "useMemo aur useCallback mein kya fark hai? Internally dono same hain?",
    answer: `useCallback(fn, deps) = fn ko memoize karo, function return karta hai.
useMemo(() => value, deps) = value compute karke memoize karta hai, value return karta hai.

Internally: useCallback(fn, deps) === useMemo(() => fn, deps) — dono same implementation!

useCallback kab: function ko memo ke saath child mein pass karo
useMemo kab: expensive computation — sorting, filtering O(n²)+

Golden rule: Over-optimize mat karo. Profiler se measure karo pehle.
Every useMemo/useCallback bhi memory + comparison overhead hai!`,
  },
  {
    id: 514,
    level: "Beginner" as const,
    tags: ["custom-hooks"],
    question: "Custom Hook banane ke rules kya hain?",
    answer: `Rules of Custom Hooks:
1. Naam hamesha 'use' se shuru karo: useFetch, useAuth, useDebounce
2. Andar React hooks call karo (useState, useEffect, etc.)
3. Conditionally call mat karo (if ke andar hooks nahi)
4. Loop mein call mat karo
5. Regular JavaScript function ke andar call mat karo

'use' prefix kyun: React ko pata chale ki yeh hook hai — lint rules enforce kare, rules of hooks apply ho.

Benefits: Logic reuse across components, DRY code, testable logic.`,
  },
  {
    id: 515,
    level: "Intermediate" as const,
    tags: ["custom-hooks"],
    question: "useDebounce hook kaise kaam karta hai? Kab use karte hain?",
    answer: `useDebounce: value ko delay ke baad update karta hai. Rapid changes pe unnecessary operations prevent karta hai.

Kab use karo:
- Search input: har keystroke pe API call nahi, 500ms wait karo
- Window resize: continuous events throttle karo
- Form validation: user type kar raha hai toh validate mat karo

Implementation: useEffect mein setTimeout, return mein clearTimeout (cleanup). Jab value change ho toh previous timer cancel ho jaata hai — sirf last value ke baad delay delay milta hai.`,
    code: `function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);  // cancel on next change
  }, [value, delay]);
  return debounced;
}`,
  },
  {
    id: 516,
    level: "Beginner" as const,
    tags: ["typescript"],
    question: "React TypeScript mein ReactNode aur ReactElement mein kya fark hai?",
    answer: `ReactElement: Sirf JSX elements — { type, props, key } object. React.createElement se bana hua.

ReactNode: Kuch bhi jo render ho sakta hai:
- ReactElement (JSX)
- string
- number
- boolean
- null / undefined
- ReactNode[]

Children prop ke liye ReactNode use karo — strings, numbers, null sab accept karta hai.
Return type mein ReactElement use karo — specific JSX return chahiye.`,
    code: `// children prop — ReactNode (anything renderable)
interface Props {
  children: ReactNode;  // string/JSX/null sab OK
  header: ReactElement; // sirf JSX element
}`,
  },
  {
    id: 517,
    level: "Intermediate" as const,
    tags: ["typescript"],
    question: "ComponentPropsWithoutRef kya hai aur native HTML elements extend karne ke liye kyun use karte hain?",
    answer: `ComponentPropsWithoutRef<'button'> native HTML element ke sare props extract karta hai.

Faida: Apne custom props + sare native HTML props automatically milte hain — type-safe aur DRY.

Without it: onClick, disabled, className, type, aria-* — sab manually define karo.
With it: Sirf extra props define karo, native sab inherit ho jaate hain.

...rest pattern se native props forward karo element pe.`,
    code: `interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'danger';
  loading?: boolean;
}

function Button({ variant, loading, children, ...rest }: ButtonProps) {
  return (
    <button {...rest} disabled={loading || rest.disabled}>
      {loading ? <Spinner /> : children}
    </button>
  );
}
// Ab onClick, type, className sab automatically milenge!`,
  },
  {
    id: 518,
    level: "Advanced" as const,
    tags: ["patterns"],
    question: "Compound Components pattern kya hai? Kab use karna chahiye?",
    answer: `Compound Components: Related components jo internal state share karte hain Context ke through. Consumer ko state manage nahi karna padta.

Example: Tabs, Accordion, Select, Menu components.

Kab use karo:
- Multiple related sub-components ek state share karein
- Consumer ko flexible composition chahiye
- API clean rakhni ho (no prop drilling)

Alternatives: Render Props, HOC — lekin Compound Components mein consumer ka control zyada hota hai.`,
    code: `// Usage — clean!
<Tabs defaultTab="home">
  <Tabs.List>
    <Tabs.Tab id="home">Home</Tabs.Tab>
    <Tabs.Tab id="settings">Settings</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel id="home"><HomeContent /></Tabs.Panel>
  <Tabs.Panel id="settings"><SettingsContent /></Tabs.Panel>
</Tabs>`,
  },
  {
    id: 519,
    level: "Intermediate" as const,
    tags: ["patterns"],
    question: "HOC (Higher-Order Component) kya hai? Modern React mein isका alternative kya hai?",
    answer: `HOC: Function jo component leta hai, enhanced component return karta hai.
Pattern: withAuth(Dashboard) → ProtectedDashboard

Use cases (abhi bhi valid):
- Authentication/authorization
- Analytics/logging
- Feature flags
- Theme injection

Modern alternative: Custom Hooks! Most HOC use cases custom hooks se better handle hote hain.
- Less "wrapper hell" in DevTools
- Easier to understand data flow
- No naming conflicts

HOC abhi bhi valid hai: class components enhance karna, existing patterns mein.`,
  },
  {
    id: 520,
    level: "Intermediate" as const,
    tags: ["suspense"],
    question: "React.lazy aur Suspense se code splitting kaise karte hain?",
    answer: `React.lazy = dynamic import jo Suspense ke saath component lazy load karta hai.

Process:
1. lazy(() => import('./HeavyComponent')) — webpack/vite alag chunk banata hai
2. <Suspense fallback={<Loader />}> — loading ke waqt fallback show karo
3. Component pehli baar render pe chunk download hota hai

Best for: Route-level splitting — har route alag chunk = fast initial load.

Bundle impact: 100KB + 50KB + 80KB lazy routes → initial bundle sirf shared code (~30KB).`,
    code: `const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  return (
    <Suspense fallback={<PageSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}`,
  },
  {
    id: 521,
    level: "Intermediate" as const,
    tags: ["error-boundary"],
    question: "Error Boundary kya hai? Kab zaruri hai? Class component kyun hai?",
    answer: `Error Boundary: Component tree mein JavaScript errors catch karta hai — crash hone se poori app ki jagah error UI dikhao.

Kab use karo:
- Critical sections ko isolate karo (dashboard, chart widgets)
- 3rd party components wrap karo
- Suspense ke saath (lazy loading errors)

Class component kyun: getDerivedStateFromError aur componentDidCatch lifecycle methods hooks mein equivalent nahi hain. React team ne abhi tak functional equivalent nahi banaya (React 18+).

Note: Error Boundary sirf render/lifecycle errors catch karta hai. Event handlers, async code, aur server-side rendering errors nahi pakadta.`,
  },
  {
    id: 522,
    level: "Intermediate" as const,
    tags: ["portals"],
    question: "React Portals kya hain? Kab use karte hain?",
    answer: `Portal: Component ko DOM hierarchy se bahar render karo — body ya kisi aur container mein.

ReactDOM.createPortal(jsx, document.body)

Kab use karo:
- Modals — parent ke overflow/z-index se escape karo
- Tooltips — positioning issues avoid karo
- Dropdowns — viewport se clipping prevent karo
- Notifications/toasts

Benefit: Component React tree mein hi rehta hai (context, events work), lekin DOM mein bahar hai. CSS stacking context issues solve hote hain.`,
    code: `import { createPortal } from 'react-dom';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box">{children}</div>
    </div>,
    document.body  // body mein render!
  );
}`,
  },
  {
    id: 523,
    level: "Intermediate" as const,
    tags: ["tanstack-query"],
    question: "TanStack Query (React Query) server state management ke liye kyun better hai useEffect se?",
    answer: `useEffect + fetch approach mein:
- Har component mein loading, error, data state manually manage karo
- No caching — same data ke liye multiple requests
- No background refetch
- Race conditions handle karo
- Stale data manually invalidate karo

TanStack Query deta hai:
- Automatic caching — same queryKey = shared cache
- Background refetching (window focus, network reconnect)
- Loading/error states automatic
- Deduplication — same query multiple components = ek request
- Stale-while-revalidate pattern
- Optimistic updates support

"Server state" alag concept hai "client state" se — TanStack Query specifically server state ke liye design hua hai.`,
  },
  {
    id: 524,
    level: "Intermediate" as const,
    tags: ["tanstack-query"],
    question: "queryKey ka role kya hai TanStack Query mein?",
    answer: `queryKey = cache ka unique identifier.

Rules:
- Same queryKey = same cached data (sab components share karein)
- Array use karo: ['users'], ['users', userId], ['posts', { status: 'published' }]
- Nested: ['users', 1] aur ['users', 2] alag cache entries
- queryKey change hone pe automatically refetch

invalidateQueries(['users']) — 'users' se shuru hone wali sab queries invalid ho jaati hain (refetch trigger).

Naming convention: ['resource', id/filters] — hierarchical approach best practice.`,
    code: `// Separate cache entries
useQuery({ queryKey: ['users'], queryFn: fetchUsers })
useQuery({ queryKey: ['users', userId], queryFn: () => fetchUser(userId) })
useQuery({ queryKey: ['users', { role: 'admin' }], queryFn: fetchAdmins })

// Invalidate all users queries
queryClient.invalidateQueries({ queryKey: ['users'] })`,
  },
  {
    id: 525,
    level: "Advanced" as const,
    tags: ["tanstack-query"],
    question: "Optimistic updates TanStack Query mein kaise implement karte hain?",
    answer: `Optimistic update: API response ka wait nahi karo — UI pehle update karo, phir confirm/rollback.

Pattern:
1. onMutate: current cache snapshot lo, UI optimistically update karo
2. onError: rollback to previous snapshot
3. onSettled: hamesha invalidate karo (server state sync karo)

Use cases: Like buttons, cart add/remove, todo check/uncheck — instant feedback user ko.`,
    code: `const mutation = useMutation({
  mutationFn: toggleLike,
  onMutate: async (postId) => {
    await queryClient.cancelQueries(['posts']);
    const prev = queryClient.getQueryData(['posts']);
    queryClient.setQueryData(['posts'], (old) =>
      old.map(p => p.id === postId ? {...p, liked: !p.liked} : p)
    );
    return { prev };  // rollback context
  },
  onError: (err, vars, ctx) => queryClient.setQueryData(['posts'], ctx.prev),
  onSettled: () => queryClient.invalidateQueries(['posts']),
});`,
  },
  {
    id: 526,
    level: "Beginner" as const,
    tags: ["testing"],
    question: "React Testing Library ka testing philosophy kya hai?",
    answer: `RTL philosophy: "Test your app the way users use it" — implementation details nahi.

DO test:
- User kya dekhta hai (text, labels, buttons)
- User actions (click, type, submit)
- Resulting UI changes

DON'T test:
- Component state directly
- Internal methods
- React lifecycle

Query priority (best to worst):
1. getByRole — accessibility-first
2. getByLabelText — form fields
3. getByText — visible text
4. getByTestId — last resort

Benefit: Implementation change karo (useState → useReducer, class → hooks) — tests break nahi honge!`,
  },
  {
    id: 527,
    level: "Intermediate" as const,
    tags: ["testing"],
    question: "userEvent aur fireEvent mein kya fark hai?",
    answer: `fireEvent: Low-level DOM events directly fire karo.
userEvent: Real browser user interactions simulate karo — pointer events, focus, input events chain.

userEvent zyada realistic hai:
- click = pointerdown + mousedown + pointerup + mouseup + click sab fire hote hain
- type = har character ke liye keydown + keypress + input + keyup

Use userEvent unless:
- Very specific edge case
- Performance-critical test
- fireEvent ka specific event chahiye

Install: @testing-library/user-event`,
    code: `// ✅ Prefer userEvent
await userEvent.click(button)
await userEvent.type(input, 'hello world')
await userEvent.clear(input)
await userEvent.selectOptions(select, 'option-value')

// ❌ Less realistic
fireEvent.click(button)
fireEvent.change(input, { target: { value: 'hello' } })`,
  },
  {
    id: 528,
    level: "Intermediate" as const,
    tags: ["testing"],
    question: "jest.mock() kab use karte hain aur kab nahi?",
    answer: `jest.mock() kab use karo:
- External APIs / fetch calls mock karo
- Slow dependencies (database, file system)
- Non-deterministic values (Date.now, Math.random)
- Unit tests mein — ek unit isolate karo

jest.mock() kab nahi:
- Integration tests mein actual implementations test karo
- Simple pure functions — mock ki zarurat nahi
- Over-mocking se tests brittle ho jaate hain

Best practice:
- Mock boundaries pe karo (API calls, external services)
- Internal module functions mock mat karo
- MSW (Mock Service Worker) HTTP mocking ke liye better alternative`,
  },
  {
    id: 529,
    level: "Beginner" as const,
    tags: ["styling"],
    question: "Tailwind CSS utility-first approach ka main benefit kya hai?",
    answer: `Utility-first benefits:
1. CSS file badhta nahi — fixed utility set reuse hota hai
2. Design system automatic — predefined scale (spacing, colors, fonts)
3. Responsive inline — md:text-lg lg:text-xl directly in HTML
4. No naming overhead — .card__header--primary jaisi names nahi
5. Purging — production mein unused classes remove ho jaate hain (tiny bundle)

Downsides:
- Long class strings
- HTML messy lagta hai initially
- Custom designs ke liye config extend karna padta hai

clsx + tailwind-merge = conditional classes + conflict resolution, ye pair must-have hai.`,
  },
  {
    id: 530,
    level: "Intermediate" as const,
    tags: ["styling", "animations"],
    question: "Framer Motion mein AnimatePresence kyun zaruri hai?",
    answer: `AnimatePresence: React tree se component remove hone pe exit animation play karne deta hai.

Without AnimatePresence:
- Component unmount → DOM se instantly gayab
- exit prop ignore hota hai

With AnimatePresence:
- exit animation complete hone ke baad component remove hota hai
- Multiple items ke liye key prop zaruri (sibling disambiguation)

Use cases:
- Modals (fade out before removing)
- Page transitions
- List item removal animation
- Notifications/toasts`,
    code: `<AnimatePresence>
  {isVisible && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}  // AnimatePresence ke bina ignore
    >
      Modal content
    </motion.div>
  )}
</AnimatePresence>`,
  },
  {
    id: 531,
    level: "Intermediate" as const,
    tags: ["nextjs"],
    question: "Next.js Server Components aur Client Components mein kab kya use karte hain?",
    answer: `Server Components (default):
✅ Database directly access karo
✅ API keys safe hain (client bundle mein nahi jaate)
✅ Large dependencies server pe rakhte hain
❌ useState, useEffect, onClick use nahi kar sakte
❌ Browser APIs nahi

Client Components ('use client' directive):
✅ Interactivity — useState, useEffect, event handlers
✅ Browser APIs (localStorage, navigator)
✅ Real-time features
❌ Server-only resources nahi

Strategy: Server Component tree ke upar, Client Components leaves mein. Sirf interactive parts Client banao.`,
    code: `// Server Component — database directly!
async function ProductList() {
  const products = await db.products.findAll();  // server pe
  return products.map(p => <ProductCard key={p.id} product={p} />);
}

// Client Component — interactive part
'use client';
function AddToCart({ productId }) {
  const [added, setAdded] = useState(false);  // OK hai
  return <button onClick={() => setAdded(true)}>Add to Cart</button>;
}`,
  },
  {
    id: 532,
    level: "Beginner" as const,
    tags: ["nextjs"],
    question: "Next.js App Router mein dynamic routes kaise banate hain?",
    answer: `App Router file-based routing use karta hai:
- app/page.tsx → /
- app/about/page.tsx → /about
- app/blog/[slug]/page.tsx → /blog/anything (dynamic)
- app/shop/[...path]/page.tsx → /shop/a/b/c (catch-all)

Dynamic params access:
async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;  // URL se mila
}

layout.tsx: Shared wrapper — siblings mein re-render nahi hota!
loading.tsx: Automatic Suspense boundary
error.tsx: Automatic Error Boundary`,
    code: `// app/blog/[slug]/page.tsx
export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  const post = await fetchPost(params.slug);
  return <article>{post.content}</article>;
}`,
  },
  {
    id: 533,
    level: "Intermediate" as const,
    tags: ["deployment"],
    question: "SPA (React + Vite) deploy karte waqt /* → index.html redirect kyun chahiye?",
    answer: `React SPA client-side routing use karta hai — actual files nahi hote /about, /dashboard ke liye.

Problem without redirect:
- User types: yourdomain.com/about
- Server dhundta hai: /about/index.html
- File nahi milti → 404 error

With redirect:
- /* → index.html
- index.html load hota hai → React app boot → React Router /about handle karta hai

Netlify: netlify.toml mein [[redirects]] add karo
Vercel: automatically handled (zero config)
Apache: .htaccess RewriteRule

Build output: npm run build → dist/ folder. Preview: npm run preview.`,
  },
  {
    id: 534,
    level: "Advanced" as const,
    tags: ["performance", "nextjs"],
    question: "React 18 Concurrent Features kya hain? useTransition aur useDeferredValue explain karo.",
    answer: `React 18 Concurrent Mode: Rendering interruptible hai — urgent updates (user input) non-urgent updates (data render) se interrupt kar sakte hain.

useTransition: State update non-urgent mark karo
- isPending: loading state automatically
- Heavy state updates background mein

useDeferredValue: Derived value defer karo
- Input typing ke waqt list filter nahi hogi turant
- User typing experience fast rehti hai

Difference: useTransition = state setter wrap, useDeferredValue = value wrap.`,
    code: `// useTransition
const [isPending, startTransition] = useTransition();
const handleSearch = (query) => {
  startTransition(() => setSearchResults(filter(data, query)));
};
// isPending = true jab filter chal raha ho

// useDeferredValue
const [query, setQuery] = useState('');
const deferredQuery = useDeferredValue(query);
// query = instant update (input responsive)
// deferredQuery = delayed (list filter slow)`,
  },
  {
    id: 535,
    level: "Advanced" as const,
    tags: ["patterns", "context"],
    question: "Context API ke performance issues kaise fix karte hain?",
    answer: `Problem: Context value change pe ALL consumers re-render karte hain.

Solutions:

1. Context split karo: Alag contexts alag concerns ke liye
   AuthContext (rarely changes) + ThemeContext + CartContext

2. Memoize context value:
   const value = useMemo(() => ({ user, login, logout }), [user])

3. Selector pattern (Zustand jaisa):
   Custom hook mein sirf needed value subscribe karo

4. State colocation: Context sirf global state ke liye — local state component mein

When Context is NOT the answer: Prop drilling 2-3 levels = just pass props. Context = many components, different nesting levels.`,
    code: `// Split context
const AuthContext = createContext(null);  // user state
const AuthDispatchContext = createContext(null);  // actions only

// Consumers of actions won't re-render when user changes!
function LoginButton() {
  const { login } = useContext(AuthDispatchContext);  // stable
  return <button onClick={login}>Login</button>;
}`,
  },
  {
    id: 536,
    level: "Beginner" as const,
    question: "React mein Virtual DOM kya hai? Reconciliation kaise kaam karta hai?",
    answer: `Virtual DOM: Real DOM ka lightweight JavaScript representation — memory mein.

Process:
1. State change → New Virtual DOM tree create hota hai
2. Diff algorithm: Old vDOM vs New vDOM compare — kya kya change hua?
3. Batch update: Sirf changed parts real DOM mein update hote hain

Reconciliation rules (Diffing algorithm):
- Different element type → Pura tree replace
- Same element type → Props update, children diff
- Keys → Lists mein elements efficiently track karo

Why fast: Real DOM manipulation slow (reflow, repaint). Batch + minimal updates = performance.

React Fiber (React 16+): Reconciliation interruptible — urgent updates (user input) non-urgent se interrupt kar sakte hain.

Key lesson: Key prop sirf lists mein use karo unique IDs se — array index avoid karo (reorder pe bugs).`,
    tags: ["virtual-dom", "reconciliation"],
  },
  {
    id: 537,
    level: "Beginner" as const,
    question: "useState aur useRef mein kya fark hai? Kab useRef use karo?",
    answer: `useState: Re-render trigger karta hai jab value change ho.
useRef: Value persist karo without re-render — mutable ref object.

const [count, setCount] = useState(0);  // change → re-render
const countRef = useRef(0);             // change → NO re-render

useRef use cases:
1. DOM element access karna
   const inputRef = useRef(null);
   <input ref={inputRef} />
   inputRef.current.focus();  // programmatic focus

2. Previous value store karna
   const prevCount = useRef(count);
   useEffect(() => { prevCount.current = count; });

3. Timer IDs store karna
   const timerRef = useRef(null);
   timerRef.current = setTimeout(fn, 1000);
   clearTimeout(timerRef.current);  // cleanup

4. Flag variables (isMounted, isFirstRender)

Rule: Agar value change pe render chahiye → useState. Agar sirf value store karna hai → useRef.`,
    tags: ["hooks", "useref", "usestate"],
  },
  {
    id: 538,
    level: "Intermediate" as const,
    question: "useCallback aur useMemo kab use karein? Overuse se kya problem hoti hai?",
    answer: `useMemo: Expensive calculation memoize karo — deps change pe recalculate.
useCallback: Function memoize karo — deps change pe recreate nahi hota.

const expensiveValue = useMemo(() => {
    return data.filter(item => item.active).reduce(...);
}, [data]);  // sirf data change pe recalculate

const handleClick = useCallback((id) => {
    dispatch({ type: 'DELETE', payload: id });
}, [dispatch]);  // dispatch change pe recreate

Kab use karein:
- useMemo: Genuinely expensive computation (sorting large arrays, complex math)
- useCallback: Child component memo() wrapped ho, aur function prop jaata ho

Overuse problem:
- Har function pe useCallback mat lagao — overhead bhi hai!
- Premature optimization: Profile karo pehle
- Extra complexity, bugs (stale closures)

Rule of thumb: Profile first (React DevTools Profiler), then optimize. useCallback only when:
Child is React.memo() wrapped AND function prop pass ho rahe ho.`,
    tags: ["hooks", "performance", "memoization"],
  },
  {
    id: 539,
    level: "Intermediate" as const,
    question: "React mein error boundaries kya hain? Kaise implement karte hain?",
    answer: `Error Boundary: React component jo child tree mein JavaScript errors catch kare — crash prevent karo, fallback UI dikhao.

Class component (sirf class-based possible hai — hooks mein nahi):
class ErrorBoundary extends Component {
    state = { hasError: false, error: null };
    
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    
    componentDidCatch(error, errorInfo) {
        // Error logging service pe bhejo
        logError(error, errorInfo.componentStack);
    }
    
    render() {
        if (this.state.hasError) {
            return <div>Something went wrong! <button onClick={() => this.setState({ hasError: false })}>Retry</button></div>;
        }
        return this.props.children;
    }
}

// Usage
<ErrorBoundary fallback={<ErrorPage />}>
    <UserProfile />
</ErrorBoundary>

Library: react-error-boundary (functional + hooks).

Note: Error boundaries sirf render, lifecycle, constructors mein errors catch karte hain. Event handlers mein nahi (try-catch use karo).`,
    tags: ["error-handling", "error-boundary"],
  },
  {
    id: 540,
    level: "Intermediate" as const,
    question: "React mein controlled vs uncontrolled components kya hain?",
    answer: `Controlled: Form data React state mein — onChange se sync.
Uncontrolled: Form data DOM mein — ref se access karo.

// Controlled — React state = single source of truth
function ControlledForm() {
    const [name, setName] = useState('');
    
    return (
        <input
            value={name}          // state se value
            onChange={e => setName(e.target.value)}  // state update
        />
    );
}

// Uncontrolled — DOM manages value
function UncontrolledForm() {
    const inputRef = useRef(null);
    
    const handleSubmit = () => {
        console.log(inputRef.current.value);  // submit pe read karo
    };
    
    return <input ref={inputRef} defaultValue="initial" />;
}

Controlled use karo when:
- Instant validation
- Dynamic form (field add/remove)
- Submit disable based on form state
- Format/transform input

Uncontrolled use karo when:
- File inputs (always uncontrolled)
- Simple forms, no validation
- Third-party DOM library integration`,
    tags: ["forms", "controlled", "uncontrolled"],
  },
  {
    id: 541,
    level: "Advanced" as const,
    question: "React mein code splitting aur lazy loading kaise karte hain?",
    answer: `Code splitting: Bundle ko chunks mein divide karo — initial load fast, demand pe load.

React.lazy + Suspense:
import { lazy, Suspense } from 'react';

// Route-based splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

function App() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Suspense>
    );
}

// Component-based splitting
const HeavyChart = lazy(() => import('./HeavyChart'));
<Suspense fallback={<div>Loading chart...</div>}>
    {showChart && <HeavyChart data={data} />}
</Suspense>

Dynamic import:
// Event pe load karo
const handleClick = async () => {
    const { default: HeavyLib } = await import('heavy-library');
    HeavyLib.doSomething();
};

Benefits: Initial bundle size kam, faster first load, code sirf jab chahiye load hota hai.`,
    tags: ["code-splitting", "lazy-loading", "performance"],
  },
  {
    id: 542,
    level: "Advanced" as const,
    question: "React mein Portal kya hai? Kab use karte hain?",
    answer: `Portal: React component ko DOM mein kisi bhi node ke andar render karo — parent component ke DOM subtree se bahar.

import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
    if (!isOpen) return null;
    
    return createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')  // body ke direct child!
    );
}

// HTML
// <div id="root">...</div>
// <div id="modal-root"></div>  ← Modal yahan render hoga

Kab use karein:
- Modals/dialogs: Overflow hidden ya z-index issues bypass karo
- Tooltips: Positioned relative to viewport
- Notifications/toasts: Always on top
- Dropdown menus: Overflow containers se bahar

Key: Portal mein events still bubble through React tree (not DOM tree) — parent component ka event handler fire hoga.`,
    tags: ["portal", "modal", "advanced"],
  },
  {
    id: 543,
    level: "Intermediate" as const,
    question: "useEffect cleanup function kab aur kyun zaroori hai?",
    answer: `Cleanup function: useEffect se return karo — component unmount ya next effect run se pehle execute hoti hai.

useEffect(() => {
    // Setup
    const subscription = subscribe();
    const timer = setInterval(tick, 1000);
    
    return () => {
        // Cleanup — memory leaks prevent karo!
        subscription.unsubscribe();
        clearInterval(timer);
    };
}, [deps]);

Cleanup zaroori kab:
1. Event listeners: window.addEventListener → removeEventListener
2. Timers: setInterval/setTimeout → clearInterval/clearTimeout
3. Subscriptions: WebSocket, observable, EventEmitter
4. Fetch requests: AbortController
5. Third-party library cleanup

AbortController example:
useEffect(() => {
    const controller = new AbortController();
    
    fetch('/api/user', { signal: controller.signal })
        .then(r => r.json())
        .then(setUser)
        .catch(err => {
            if (err.name !== 'AbortError') setError(err);
        });
    
    return () => controller.abort();  // component unmount pe cancel!
}, [userId]);

Bina cleanup: Memory leaks, state updates on unmounted component warnings.`,
    tags: ["useeffect", "cleanup", "memory-leaks"],
  },
  {
    id: 544,
    level: "Advanced" as const,
    question: "React Server Components kya hain? Client Components se kya fark hai?",
    answer: `Server Components (RSC): Server pe render hote hain — JavaScript client pe nahi bheja jaata.
Client Components: Browser pe render — useState, useEffect, event handlers.

Server Components:
- 'use client' directive NAHI
- Database direct access kar sakte hain
- Secrets expose nahi (API keys server pe)
- No useState, useEffect, event handlers
- Bundle size zero — JS client ko nahi bheja

'use client'  // Client Component
import { useState } from 'react';
export function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(c => c+1)}>{count}</button>;
}

// Server Component (default in Next.js 13+ App Router)
async function UserList() {
    const users = await db.getUsers();  // direct DB!
    return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}

Rules:
- Server Component → Server/Client child import kar sakta hai
- Client Component → Server Component import NAHI kar sakta (as child pass kar sakte hain)
- Data fetching → Server mein (waterfall avoid)

Benefits: Faster initial load, less JS, server-side data access.`,
    tags: ["server-components", "nextjs", "rsc"],
  },
  {
    id: 545,
    level: "Advanced" as const,
    question: "Zustand vs Redux Toolkit — kab kaunsa use karein?",
    answer: `Redux Toolkit (RTK):
- Boilerplate kam kiya (immer, createSlice)
- DevTools excellent
- Large teams + complex state
- Middleware ecosystem
- RTK Query = data fetching built-in

import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 },
    }
});

Zustand:
- Minimal API — 10 lines mein global state
- No boilerplate
- React-agnostic
- Small/medium apps

import { create } from 'zustand';
const useStore = create(set => ({
    count: 0,
    increment: () => set(state => ({ count: state.count + 1 })),
}));

function Counter() {
    const { count, increment } = useStore();
    return <button onClick={increment}>{count}</button>;
}

Decision:
- Small-medium app → Zustand (simple, fast)
- Large app, team, complex state → Redux Toolkit
- Server state (API data) → React Query / RTK Query`,
    tags: ["state-management", "zustand", "redux"],
  },
];

