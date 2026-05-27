import type { Chapter } from "./chapters";

export const pythonChapters: Chapter[] = [
  {
    id: "py-intro",
    title: "Python Kya Hai? — Introduction",
    titleEn: "What is Python? — Introduction",
    emoji: "🐍",
    category: "Basics",
    description: "Python ki history, uses, installation, IDE setup aur pehla program",
    descriptionEn: "Python history, uses, installation, IDE setup and your first program",
    sections: [
      {
        heading: "Python kya hai? Simple bhasha mein",
        content: `Python ek **high-level, interpreted programming language** hai jo 1991 mein Guido van Rossum ne banai. Python ka naam Python snake se nahi, balki "Monty Python's Flying Circus" comedy show se aaya hai!

**Python itni popular kyun hai?**
- **Simple syntax** — English jaisi padhi jaati hai, C/Java se bohot asaan
- **Versatile** — web development, AI, data science, automation, game dev — sab mein use hoti hai
- **Huge community** — duniya mein sabse zyada users Python ke hain
- **Free & Open Source** — koi charge nahi

**Python kahan use hoti hai:**
- 🌐 **Web Development** — Django, Flask, FastAPI
- 🤖 **AI / Machine Learning** — TensorFlow, PyTorch, scikit-learn
- 📊 **Data Science** — NumPy, Pandas, Matplotlib
- ⚙️ **Automation / Scripting** — files, emails, web scraping
- 🎮 **Game Development** — Pygame
- 🔬 **Scientific Computing** — NASA, CERN bhi use karti hain!

**Companies using Python:** Google, Instagram, Netflix, Spotify, NASA, YouTube, Dropbox`,
        diagram: `
PYTHON ECOSYSTEM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

              🐍 Python
               │
    ┌──────────┼──────────┐
    │          │          │
  Web Dev   Data/AI   Automation
    │          │          │
  Django    NumPy     Selenium
  Flask     Pandas    BeautifulSoup
  FastAPI   PyTorch   Schedule
            Keras     smtplib

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        tip: "Python mein indentation (spacing) bahut important hai. Tab ya 4 spaces use karo — mix mat karo kabhi.",
      },
      {
        heading: "Installation aur IDE Setup",
        content: `**Python Install karo:**
1. python.org pe jao → Download Python 3.x (latest)
2. Install karte waqt ✅ "Add Python to PATH" zaroor check karo
3. Terminal mein verify karo: \`python --version\`

**Best IDEs:**
- **VS Code** (recommended) — free, fast, extensions
- **PyCharm** — Python ke liye special IDE
- **Jupyter Notebook** — Data science ke liye perfect
- **IDLE** — Python ke saath aata hai, beginner ke liye`,
        code: `# Terminal mein Python verify karo
python --version      # Output: Python 3.12.0
python3 --version     # Linux/Mac pe

# pip (package manager) verify karo
pip --version

# Python interactive shell start karo
python
>>> print("Hello, Python!")
Hello, Python!
>>> 2 + 2
4
>>> exit()

# Pehla script banao: hello.py
print("Namaste Duniya!")
print("Python seekhna shuru ho gaya!")

# Script run karo:
python hello.py`,
        language: "python",
      },
      {
        heading: "Pehla Program — Python ka Structure",
        content: `Python mein koi boilerplate nahi hota — seedha code likhna shuru karo!`,
        code: `# yeh ek comment hai — # se shuru hota hai
# Python run hone pe yeh lines execute nahi hoti

# Variables — type declare nahi karte Python mein
name = "Rahul"
age = 25
city = "Delhi"

# Output print karo
print("Mera naam:", name)
print("Meri age:", age)
print("Mera shehar:", city)

# f-string se formatting (Python 3.6+)
print(f"Main {name} hun, {age} saal ka hun, {city} mein rehta hun.")

# Multiple values ek print mein
print(name, age, city, sep=" | ")  # Output: Rahul | 25 | Delhi

# Output:
# Mera naam: Rahul
# Meri age: 25
# Mera shehar: Delhi
# Main Rahul hun, 25 saal ka hun, Delhi mein rehta hun.
# Rahul | 25 | Delhi`,
        language: "python",
        tip: "Python case-sensitive hai — 'name' aur 'Name' do alag variables hain. Hamesha lowercase names use karo (snake_case: my_variable).",
      },
    ],
    sectionsEn: [
      {
        heading: "What is Python? Simply explained",
        content: `Python is a **high-level, interpreted programming language** created by Guido van Rossum in 1991. The name came from "Monty Python's Flying Circus" — not the snake!

**Why is Python so popular?**
- **Simple syntax** — reads like English, much easier than C/Java
- **Versatile** — web dev, AI, data science, automation, games — all use Python
- **Huge community** — one of the largest programming communities worldwide
- **Free & Open Source** — no cost at all

**Where Python is used:**
- 🌐 **Web Development** — Django, Flask, FastAPI
- 🤖 **AI / Machine Learning** — TensorFlow, PyTorch, scikit-learn
- 📊 **Data Science** — NumPy, Pandas, Matplotlib
- ⚙️ **Automation** — files, emails, web scraping
- 🔬 **Scientific Computing** — used by NASA and CERN!`,
        code: `# Verify Python is installed:
python --version      # Python 3.12.0

# Your first Python script (hello.py):
name = "Rahul"
age = 25
print(f"Hello! I am {name}, {age} years old.")

# Run it:
# python hello.py`,
        language: "python",
        tip: "Indentation (spacing) is critical in Python — use 4 spaces consistently. Never mix tabs and spaces.",
      },
    ],
    mcqs: [
      {
        q: "Python kab banai gayi aur kisne banai?",
        options: ["1985, Bill Gates", "1991, Guido van Rossum", "2000, Linus Torvalds", "1995, Brendan Eich"],
        correct: 1,
        explain: "Python 1991 mein Guido van Rossum ne banai. Naam 'Monty Python' show se aaya, snake se nahi.",
      },
      {
        q: "Python mein code block kaise define karte hain?",
        options: ["Curly braces { }", "BEGIN...END keywords", "Indentation (spaces/tabs)", "Parentheses ( )"],
        correct: 2,
        explain: "Python mein code blocks indentation se define hote hain — 4 spaces standard hai. C/Java ke curly braces nahi hote.",
      },
      {
        q: "Python ka package manager kya hai?",
        options: ["npm", "pip", "composer", "maven"],
        correct: 1,
        explain: "pip (Pip Installs Packages) Python ka package manager hai. 'pip install pandas' se libraries install hoti hain.",
      },
    ],
    mcqsEn: [
      {
        q: "Who created Python and when?",
        options: ["Bill Gates, 1985", "Guido van Rossum, 1991", "Linus Torvalds, 2000", "Brendan Eich, 1995"],
        correct: 1,
        explain: "Python was created by Guido van Rossum in 1991. The name comes from 'Monty Python's Flying Circus'.",
      },
    ],
    cheatsheet: [
      "python hello.py — script run karo",
      "python --version — Python version check",
      "pip install package — library install karo",
      "# comment — single line comment",
      "print() — output print karo",
      "Python indentation-based hai — 4 spaces use karo",
    ],
    cheatsheetEn: [
      "python hello.py — run a script",
      "python --version — check Python version",
      "pip install package — install a library",
      "# comment — single line comment",
      "print() — output to console",
      "Python uses indentation — 4 spaces standard",
    ],
    revision: [
      "Python = high-level, interpreted, versatile language (1991)",
      "Simple syntax — C/Java se zyada readable",
      "pip = package manager, python.org se download",
      "Indentation = code blocks define karta hai (mandatory)",
    ],
    revisionEn: [
      "Python = high-level, interpreted, versatile language (1991)",
      "Simple English-like syntax — easier than C/Java",
      "pip = package manager for installing libraries",
      "Indentation defines code blocks — it is mandatory",
    ],
  },

  {
    id: "py-variables",
    title: "Variables & Data Types",
    titleEn: "Variables & Data Types",
    emoji: "📦",
    category: "Basics",
    description: "Integer, float, string, boolean — Python ke saare data types aur type conversion",
    descriptionEn: "Integer, float, string, boolean — all Python data types and type conversion",
    sections: [
      {
        heading: "Variables — Data store karne ke containers",
        content: `Python mein variable banane ke liye **type declare nahi karna** — directly value assign karo. Python khud type samajh leta hai (dynamic typing).`,
        code: `# Numbers
age = 25              # int (integer — whole number)
price = 99.99         # float (decimal number)
big_number = 1_000_000  # underscore readable format ke liye

# Text
name = "Rahul"         # str (string — double quotes)
city = 'Delhi'         # str (single quotes bhi chalti hain)
bio = """Yeh ek
multi-line
string hai"""          # triple quotes = multiline string

# Boolean
is_student = True      # bool (True ya False — capital T/F)
is_working = False

# None (koi value nahi — like null in other languages)
result = None

# Type check karo
print(type(age))        # <class 'int'>
print(type(price))      # <class 'float'>
print(type(name))       # <class 'str'>
print(type(is_student)) # <class 'bool'>

# Multiple assignment ek hi line mein
x, y, z = 10, 20, 30
a = b = c = 0   # sab ko same value

print(x, y, z)  # 10 20 30`,
        language: "python",
        tip: "Python mein variable names snake_case mein likhte hain: my_variable, user_age, total_price. CamelCase classes ke liye hoti hai.",
      },
      {
        heading: "Type Conversion — Ek type se doosri",
        content: `Kabhi kabhi data convert karna padta hai — jaise user se liya string "25" ko number 25 mein.`,
        code: `# String → Number
age_str = "25"
age_int = int(age_str)    # "25" → 25
price_str = "99.99"
price_float = float(price_str)  # "99.99" → 99.99

# Number → String
num = 42
num_str = str(num)        # 42 → "42"

# int ↔ float
x = int(3.9)    # 3 (floor — decimal part cut hoti hai)
y = float(5)    # 5.0

# String → List of characters
chars = list("Python")  # ['P', 'y', 't', 'h', 'o', 'n']

# Boolean conversions
print(bool(0))      # False  (0 = False)
print(bool(1))      # True   (koi bhi non-zero = True)
print(bool(""))     # False  (empty string = False)
print(bool("hi"))   # True   (non-empty string = True)
print(bool(None))   # False

# REAL USE CASE: user input
user_input = input("Apni age batao: ")  # input() hamesha string deta hai
age = int(user_input)                   # convert karo number mein
next_year = age + 1
print(f"Agle saal tum {next_year} ke hoge")`,
        language: "python",
        warning: "int('abc') error dega — convert karne se pehle check karo ki string valid number hai. Try-except use karo aise cases mein.",
      },
      {
        heading: "Python Data Types — Complete Overview",
        content: `Python mein built-in data types ki full list:`,
        diagram: `
PYTHON DATA TYPES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  NUMERIC          TEXT           BOOLEAN
  ┌──────┐        ┌──────┐       ┌───────┐
  │ int  │        │ str  │       │ bool  │
  │  42  │        │"Hi"  │       │ True  │
  ├──────┤        └──────┘       │ False │
  │float │                       └───────┘
  │ 3.14 │
  ├──────┤        SEQUENCE       MAPPING
  │complex│       ┌──────┐       ┌──────┐
  │ 2+3j │       │ list │       │ dict │
  └──────┘        │[1,2] │       │{k:v} │
                  ├──────┤       └──────┘
  NONE            │tuple │
  ┌──────┐        │(1,2) │       SET
  │ None │        ├──────┤       ┌──────┐
  └──────┘        │range │       │ set  │
                  └──────┘       │{1,2} │
                                 └──────┘
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Python ke saare basic types ek jagah
x = 42                    # int
y = 3.14                  # float
z = 2 + 3j                # complex (imaginary numbers)
name = "Python"            # str
flag = True                # bool
nothing = None             # NoneType

# Collection types (aage detail mein)
my_list = [1, 2, 3, "four"]     # list — mutable, ordered
my_tuple = (1, 2, 3)            # tuple — immutable, ordered
my_set = {1, 2, 3}              # set — unique values only
my_dict = {"name": "Rahul", "age": 25}  # dict — key:value pairs

# Size check karo
import sys
print(sys.getsizeof(42))       # int kitni memory leta hai
print(sys.getsizeof("Hello"))  # str kitni memory leti hai`,
        language: "python",
      },
    ],
    sectionsEn: [
      {
        heading: "Variables — Containers for storing data",
        content: `In Python, you don't need to declare a type — just assign a value. Python figures out the type automatically (dynamic typing).`,
        code: `# Python data types
age = 25              # int
price = 99.99         # float
name = "Rahul"        # str
is_student = True     # bool
result = None         # NoneType

# Check the type
print(type(age))      # <class 'int'>
print(type(name))     # <class 'str'>

# Multiple assignment
x, y, z = 10, 20, 30
a = b = c = 0`,
        language: "python",
        tip: "Use snake_case for variable names: my_variable, user_age, total_price. CamelCase is reserved for class names.",
      },
      {
        heading: "Type Conversion — Converting between types",
        content: `Sometimes you need to convert data — like converting the string '25' from user input into the number 25.`,
        code: `# Converting types:
int("25")      # "25" → 25
float("3.14")  # "3.14" → 3.14
str(42)        # 42 → "42"
bool(0)        # False
bool(1)        # True
bool("")       # False (empty = False)

# Real use case: user input is always a string
age = int(input("Enter your age: "))
print(f"Next year you will be {age + 1}")`,
        language: "python",
        warning: "int('abc') raises a ValueError. Always validate user input or use try-except when converting.",
      },
    ],
    mcqs: [
      {
        q: "Python mein type declare karna padta hai?",
        options: ["Haan, hamesha", "Kabhi kabhi", "Nahi, Python automatically detect karta hai", "Sirf global variables ke liye"],
        correct: 2,
        explain: "Python dynamically typed hai — variable banate waqt type declare nahi karna. Python runtime pe type detect karta hai.",
      },
      {
        q: "int('3.14') ka result kya hoga?",
        options: ["3", "3.14", "ValueError (error)", "4"],
        correct: 2,
        explain: "int() seedha string se decimal nahi convert kar sakta. Pehle float('3.14') karo phir int() karo, ya try-except use karo.",
      },
      {
        q: "None kya represent karta hai?",
        options: ["0", "False", "Empty string", "Koi value nahi (absence of value)"],
        correct: 3,
        explain: "None Python mein null/nil jaisa hai — koi value nahi. Function kuch return nahi kare toh None return karta hai implicitly.",
      },
    ],
    mcqsEn: [
      {
        q: "Do you need to declare variable types in Python?",
        options: ["Yes, always", "Sometimes", "No, Python detects types automatically", "Only for global variables"],
        correct: 2,
        explain: "Python is dynamically typed — you never declare types. Python infers the type from the assigned value at runtime.",
      },
      {
        q: "What does int('3.14') return?",
        options: ["3", "3.14", "ValueError", "4"],
        correct: 2,
        explain: "int() cannot directly convert a decimal string. You must first do float('3.14'), then int().",
      },
    ],
    cheatsheet: [
      "int, float, str, bool, None — basic types",
      "type(x) — variable ka type check karo",
      "int(), float(), str() — type convert karo",
      "x, y = 10, 20 — multiple assignment",
      "input() — hamesha string return karta hai",
      "bool(0/None/'') = False, baaki sab True",
    ],
    cheatsheetEn: [
      "int, float, str, bool, None — basic types",
      "type(x) — check the type of a variable",
      "int(), float(), str() — explicit type conversion",
      "x, y = 10, 20 — multiple assignment in one line",
      "input() — always returns a string",
      "bool(0/None/'') = False, everything else = True",
    ],
    revision: [
      "Python dynamically typed — type declare nahi karte",
      "int, float, str, bool, None — 5 basic types yaad rakho",
      "int() / float() / str() = type conversion",
      "input() hamesha string deta hai — convert karna padta hai",
    ],
    revisionEn: [
      "Python is dynamically typed — no type declaration needed",
      "int, float, str, bool, None — the 5 basic types",
      "int() / float() / str() — explicit type conversion",
      "input() always returns a string — convert before using",
    ],
  },

  {
    id: "py-operators",
    title: "Operators — Calculations aur Comparisons",
    titleEn: "Operators — Calculations and Comparisons",
    emoji: "🔢",
    category: "Basics",
    description: "Arithmetic, comparison, logical, aur assignment operators Python mein",
    descriptionEn: "Arithmetic, comparison, logical, and assignment operators in Python",
    sections: [
      {
        heading: "Arithmetic Operators",
        content: `Math ke kaam ke liye arithmetic operators:`,
        code: `a = 17
b = 5

print(a + b)   # 22   — Addition
print(a - b)   # 12   — Subtraction
print(a * b)   # 85   — Multiplication
print(a / b)   # 3.4  — Division (float result)
print(a // b)  # 3    — Floor Division (integer result)
print(a % b)   # 2    — Modulo (remainder)
print(a ** b)  # 1419857 — Exponentiation (17^5)

# Real examples:
total = 100
gst = total * 0.18          # 18% GST
final = total + gst
print(f"Total with GST: ₹{final}")  # ₹118.0

# Even/Odd check karo
num = 42
if num % 2 == 0:
    print("Even number")
else:
    print("Odd number")

# Math functions
import math
print(math.sqrt(144))    # 12.0 — square root
print(math.ceil(3.2))    # 4    — upar round
print(math.floor(3.9))   # 3    — neeche round
print(abs(-15))          # 15   — absolute value`,
        language: "python",
        tip: "/ hamesha float return karta hai (17/5 = 3.4). // integer floor division karta hai (17//5 = 3).",
      },
      {
        heading: "Comparison & Logical Operators",
        content: `Comparison operators kuch compare karte hain aur True/False return karte hain. Logical operators conditions combine karte hain.`,
        code: `# COMPARISON OPERATORS (True/False return karte hain)
a, b = 10, 20

print(a == b)   # False  — equal to
print(a != b)   # True   — not equal
print(a > b)    # False  — greater than
print(a < b)    # True   — less than
print(a >= b)   # False  — greater than or equal
print(a <= b)   # True   — less than or equal

# ─────────────────────────────────────
# LOGICAL OPERATORS
x = True
y = False

print(x and y)  # False — dono True tabhi True
print(x or y)   # True  — ek bhi True toh True
print(not x)    # False — opposite

# Real example — login check
age = 22
has_id = True
is_vip = False

# Condition 1: 18+ AND ID hai
if age >= 18 and has_id:
    print("Entry milegi!")

# Condition 2: VIP hai YA 18+ hai
if is_vip or age >= 18:
    print("Andar aa sakte ho")

# ─────────────────────────────────────
# IDENTITY OPERATORS
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)   # True  — values same hain
print(a is b)   # False — different objects in memory
print(a is c)   # True  — same object

# None check ke liye 'is' use karo
result = None
if result is None:
    print("Koi result nahi")

# MEMBERSHIP OPERATORS
fruits = ["apple", "mango", "banana"]
print("mango" in fruits)     # True
print("grape" not in fruits) # True`,
        language: "python",
      },
      {
        heading: "Assignment Operators — Shorthand",
        content: `Shorthand assignment operators code ko concise banate hain:`,
        code: `x = 10

x += 5    # x = x + 5  → 15
x -= 3    # x = x - 3  → 12
x *= 2    # x = x * 2  → 24
x /= 4    # x = x / 4  → 6.0
x //= 2   # x = x // 2 → 3.0
x **= 3   # x = x ** 3 → 27.0
x %= 5    # x = x % 5  → 2.0

# Walrus operator := (Python 3.8+) — assign + use
# Useful in while loops
import re
data = "user:Rahul age:25"

if match := re.search(r"age:(\d+)", data):
    print(f"Age found: {match.group(1)}")  # Age found: 25

# while loop mein useful
while chunk := input("Type something (blank to stop): "):
    print(f"You typed: {chunk}")`,
        language: "python",
        tip: "Walrus operator (:=) Python 3.8+ mein hai — assignment aur evaluation ek saath karo. Loops mein bohot useful hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "Arithmetic Operators",
        content: `Python arithmetic operators for mathematical calculations:`,
        code: `a, b = 17, 5

a + b    # 22   Addition
a - b    # 12   Subtraction
a * b    # 85   Multiplication
a / b    # 3.4  Division (always float)
a // b   # 3    Floor division (integer)
a % b    # 2    Modulo (remainder)
a ** b   # 1419857  Exponentiation

# Practical example
total = 1000
discount = total * 0.10    # 10% off
final = total - discount
print(f"After discount: ₹{final}")  # ₹900.0`,
        language: "python",
        tip: "/ always returns a float. Use // for integer division.",
      },
      {
        heading: "Comparison & Logical Operators",
        content: `Comparison operators return True/False. Logical operators combine multiple conditions.`,
        code: `# Comparison
10 == 20   # False
10 != 20   # True
10 < 20    # True

# Logical
True and False  # False (both must be True)
True or False   # True  (at least one must be True)
not True        # False (opposite)

# Real example
age = 22
has_id = True
if age >= 18 and has_id:
    print("Entry allowed!")

# Membership
fruits = ["apple", "mango"]
print("mango" in fruits)      # True
print("grape" not in fruits)  # True`,
        language: "python",
      },
    ],
    mcqs: [
      {
        q: "17 / 5 ka result kya hoga Python mein?",
        options: ["3", "3.4", "2", "Error"],
        correct: 1,
        explain: "Python 3 mein / hamesha float return karta hai. 17/5 = 3.4. Integer result ke liye // use karo: 17//5 = 3.",
      },
      {
        q: "True and False ka result?",
        options: ["True", "False", "None", "Error"],
        correct: 1,
        explain: "and operator ke liye dono True hone chahiye. True and False = False.",
      },
      {
        q: "a is b aur a == b mein kya fark hai?",
        options: [
          "Koi fark nahi",
          "== values compare karta hai, is memory address compare karta hai",
          "is values compare karta hai, == types",
          "is strings ke liye hai, == numbers ke liye",
        ],
        correct: 1,
        explain: "== values compare karta hai. is same memory object check karta hai. None check ke liye hamesha 'is None' use karo.",
      },
    ],
    mcqsEn: [
      {
        q: "What does 17 / 5 return in Python 3?",
        options: ["3", "3.4", "2", "Error"],
        correct: 1,
        explain: "In Python 3, / always returns a float. 17/5 = 3.4. Use // for integer division: 17//5 = 3.",
      },
    ],
    cheatsheet: [
      "+ - * / // % ** — arithmetic operators",
      "/ = float result, // = integer floor division",
      "% = remainder (even/odd check ke liye useful)",
      "** = power (2**10 = 1024)",
      "== != > < >= <= — comparison (True/False)",
      "and or not — logical operators",
      "in / not in — membership check",
      "is / is not — identity (memory) check",
      "+= -= *= /= — shorthand assignment",
    ],
    cheatsheetEn: [
      "+ - * / // % ** — arithmetic operators",
      "/ = float, // = integer floor division",
      "% = modulo/remainder",
      "** = exponentiation (2**10 = 1024)",
      "== != > < >= <= — comparison",
      "and or not — logical operators",
      "in / not in — membership test",
      "is / is not — identity (memory address) test",
    ],
    revision: [
      "/ = float, // = integer division (17/5=3.4, 17//5=3)",
      "% = remainder — even/odd check ke liye use karo",
      "and = dono True, or = ek True, not = opposite",
      "is = same object (None check ke liye), == = same value",
    ],
    revisionEn: [
      "/ returns float, // returns integer (floor division)",
      "% = remainder — useful for even/odd, cycling",
      "and = both must be True, or = at least one, not = opposite",
      "is = same object in memory, == = equal values",
    ],
  },

  {
    id: "py-input-output",
    title: "Input & Output — User se Interact Karo",
    titleEn: "Input & Output — Interacting with Users",
    emoji: "💬",
    category: "Basics",
    description: "input() aur print() — Python mein user interaction aur output formatting",
    descriptionEn: "input() and print() — user interaction and output formatting in Python",
    sections: [
      {
        heading: "print() — Sab kuch Output karo",
        content: `print() Python ka sabse zyada use hone wala function hai. Yeh console pe text, numbers, ya kuch bhi print karta hai.`,
        code: `# Basic print
print("Hello World!")
print(42)
print(3.14)
print(True)

# Multiple values — comma se
print("Name:", "Rahul", "Age:", 25)
# Output: Name: Rahul Age: 25

# sep parameter — separator change karo
print("A", "B", "C", sep="-")    # A-B-C
print("A", "B", "C", sep="")     # ABC
print(1, 2, 3, sep=", ")          # 1, 2, 3

# end parameter — default newline change karo
print("Hello", end=" ")
print("World")     # Hello World (same line)

print("Line 1", end="\n")  # default
print("Line 2")

# ─────────────────────────────────────
# STRING FORMATTING (3 ways)

name = "Rahul"
age = 25
score = 95.67

# 1. f-string (BEST — Python 3.6+)
print(f"Mera naam {name} hai, age {age} hai")
print(f"Score: {score:.2f}")    # 2 decimal places: 95.67
print(f"Score: {score:.0f}")    # 0 decimal places: 96
print(f"{name:>10}")            # right align 10 chars:      Rahul
print(f"{name:<10}!")           # left align: Rahul     !
print(f"{42:05d}")              # zero pad: 00042

# 2. .format() method
print("Naam: {}, Age: {}".format(name, age))
print("Score: {:.2f}".format(score))

# 3. % formatting (purana tarika)
print("Naam: %s, Age: %d" % (name, age))`,
        language: "python",
        tip: "f-string sabse clean aur readable hai. Hamesha f-string use karo unless purani Python (2.x) support karna ho.",
      },
      {
        heading: "input() — User se Data Lo",
        content: `input() function user se keyboard input leta hai. Yaad raho — **hamesha string return karta hai**.`,
        code: `# Basic input
name = input("Apna naam batao: ")
print(f"Hello, {name}!")

# Number input — convert karna padta hai
age = int(input("Apni age batao: "))
print(f"Agle saal tum {age + 1} ke honge")

# Float input
price = float(input("Price enter karo: "))
gst = price * 0.18
print(f"GST ke saath: ₹{price + gst:.2f}")

# ─────────────────────────────────────
# SAFE INPUT — try-except ke saath
def get_int(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("❌ Sirf number enter karo!")

age = get_int("Apni age batao: ")
print(f"Tumhari age: {age}")

# ─────────────────────────────────────
# Multiple inputs ek line mein
# User types: "10 20 30"
a, b, c = map(int, input("3 numbers enter karo (space se): ").split())
print(f"Sum: {a + b + c}")

# List of numbers input
numbers = list(map(int, input("Numbers: ").split()))
print(f"Sum: {sum(numbers)}")
print(f"Max: {max(numbers)}")`,
        language: "python",
        warning: "input() hamesha string return karta hai. 'age + 1' karoge toh TypeError aayega agar int() se convert nahi kiya.",
      },
    ],
    sectionsEn: [
      {
        heading: "print() — Output everything",
        content: `print() is the most used function in Python. It outputs text, numbers, or anything to the console.`,
        code: `# Basic print
print("Hello World!")
print(42, 3.14, True)

# f-strings — best for formatting (Python 3.6+)
name, age, score = "Rahul", 25, 95.67
print(f"Name: {name}, Age: {age}")
print(f"Score: {score:.2f}")    # 2 decimal places
print(f"{name:>10}")            # right-align in 10 chars

# Separator and end
print("A", "B", "C", sep="-")  # A-B-C
print("Hello", end=" "); print("World")  # Hello World`,
        language: "python",
        tip: "Always use f-strings for string formatting — they are the most readable and fastest option.",
      },
      {
        heading: "input() — Receiving user data",
        content: `input() reads from the keyboard and **always returns a string**. Always convert if you need a number.`,
        code: `name = input("Enter your name: ")
age = int(input("Enter your age: "))  # convert to int
print(f"Next year you'll be {age + 1}")

# Multiple inputs on one line
a, b = map(int, input("Enter two numbers: ").split())
print(f"Sum: {a + b}")`,
        language: "python",
        warning: "input() always returns a string. Doing age + 1 will raise a TypeError unless you convert with int().",
      },
    ],
    mcqs: [
      {
        q: "f-string mein 2 decimal places print karne ke liye kya likhte hain?",
        options: ["f\"{x.2}\"", "f\"{x:.2f}\"", "f\"{x:2d}\"", "f\"{x,2}\""],
        correct: 1,
        explain: "f\"{score:.2f}\" — .2f matlab 2 decimal places float. 95.6789 → 95.68",
      },
      {
        q: "input() ka return type kya hota hai?",
        options: ["int", "float", "str", "depends on what user types"],
        correct: 2,
        explain: "input() hamesha str (string) return karta hai, chahe user number type kare. Convert karna padta hai: int(input()).",
      },
    ],
    mcqsEn: [
      {
        q: "How do you print a float to 2 decimal places with an f-string?",
        options: ["f\"{x.2}\"", "f\"{x:.2f}\"", "f\"{x:2d}\"", "f\"{x,2}\""],
        correct: 1,
        explain: "f\"{score:.2f}\" — .2f means 2 decimal float. 95.6789 → 95.68",
      },
    ],
    cheatsheet: [
      "print(val) — output karo",
      "print(a, b, sep=\",\") — custom separator",
      "print(x, end=\"\") — no newline",
      "f\"Hello {name}\" — f-string",
      "f\"{x:.2f}\" — 2 decimal places",
      "input(\"prompt: \") — user input (always str)",
      "int(input()) — integer input",
      "map(int, input().split()) — multiple int inputs",
    ],
    cheatsheetEn: [
      "print(val) — output to console",
      "print(a, b, sep=\",\") — custom separator",
      "print(x, end=\"\") — no trailing newline",
      "f\"Hello {name}\" — f-string interpolation",
      "f\"{x:.2f}\" — format to 2 decimal places",
      "input(\"prompt: \") — user input (always a string)",
      "int(input()) — read an integer",
      "map(int, input().split()) — read multiple integers",
    ],
    revision: [
      "f-string = f\"Hello {name}\" — best formatting method",
      "input() = hamesha string return karta hai",
      "int(input()) = integer input lena",
      "print(sep=, end=) = output control karo",
    ],
    revisionEn: [
      "f-string = f\"Hello {name}\" — best formatting method",
      "input() always returns a string — convert when needed",
      "int(input()) = read an integer from user",
      "print(sep=, end=) = control separator and line ending",
    ],
  },

  {
    id: "py-conditionals",
    title: "Conditional Statements — if, elif, else",
    titleEn: "Conditional Statements — if, elif, else",
    emoji: "🔀",
    category: "Basics",
    description: "if, elif, else se decisions lo — Python ka control flow",
    descriptionEn: "Make decisions with if, elif, else — Python control flow",
    sections: [
      {
        heading: "if / elif / else — Decisions lena",
        content: `Conditional statements programs ko decisions lene dete hain. Condition True hone par ek block run karo, False hone par doosra.`,
        code: `# Basic if-else
age = 20

if age >= 18:
    print("Tum adult ho")
    print("Vote kar sakte ho")
else:
    print("Tum minor ho")
    print("18 ke baad aana")

# ─────────────────────────────────────
# if-elif-else — multiple conditions
marks = 78

if marks >= 90:
    grade = "A+"
elif marks >= 80:
    grade = "A"
elif marks >= 70:
    grade = "B"
elif marks >= 60:
    grade = "C"
elif marks >= 40:
    grade = "D"
else:
    grade = "F"

print(f"Marks: {marks} → Grade: {grade}")  # Grade: B

# ─────────────────────────────────────
# Nested if
salary = 50000
experience = 3

if salary > 40000:
    if experience >= 2:
        print("Senior Developer position ke liye eligible")
    else:
        print("Experience zyada chahiye")
else:
    print("Salary requirement meet nahi ki")

# ─────────────────────────────────────
# Ternary (one-liner) — simple conditions ke liye
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Adult

# Multiple ternary
score = 75
result = "Pass" if score >= 60 else "Fail"
category = "High" if score >= 80 else "Medium" if score >= 60 else "Low"
print(result, category)  # Pass Medium`,
        language: "python",
        tip: "Python mein colon (:) mandatory hai if/elif/else ke baad, aur body indented honi chahiye.",
      },
      {
        heading: "match Statement (Python 3.10+) — Switch-Case",
        content: `Python 3.10 mein match statement aaya — C/Java ke switch-case jaisa lekin zyada powerful.`,
        code: `# match-case (Python 3.10+)
command = "quit"

match command:
    case "start":
        print("Program shuru ho raha hai...")
    case "stop" | "quit" | "exit":  # multiple patterns
        print("Program band ho raha hai...")
    case "help":
        print("Available commands: start, stop, help")
    case _:  # default case
        print(f"Unknown command: {command}")

# ─────────────────────────────────────
# Status code handler
status_code = 404

match status_code:
    case 200:
        message = "OK — Success"
    case 201:
        message = "Created"
    case 400:
        message = "Bad Request"
    case 404:
        message = "Not Found"
    case 500:
        message = "Internal Server Error"
    case _:
        message = "Unknown Status"

print(message)  # Not Found

# ─────────────────────────────────────
# Guard conditions in match
point = (3, 0)

match point:
    case (0, 0):
        print("Origin")
    case (x, 0):
        print(f"X-axis par: {x}")
    case (0, y):
        print(f"Y-axis par: {y}")
    case (x, y):
        print(f"Point at ({x}, {y})")`,
        language: "python",
        tip: "match-case Python 3.10+ mein available hai. Purani versions mein if-elif chain use karo.",
      },
    ],
    sectionsEn: [
      {
        heading: "if / elif / else — Making decisions",
        content: `Conditional statements let programs make decisions. Run one block if a condition is True, another block if it's False.`,
        code: `# Basic if-elif-else
marks = 78

if marks >= 90:
    grade = "A+"
elif marks >= 80:
    grade = "A"
elif marks >= 70:
    grade = "B"
else:
    grade = "F"

print(f"Grade: {grade}")  # Grade: B

# Ternary operator (one-liner)
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)  # Adult`,
        language: "python",
        tip: "In Python, the colon (:) is mandatory after if/elif/else, and the body must be indented.",
      },
    ],
    mcqs: [
      {
        q: "Python mein switch-case Python 3.10 se kya hai?",
        options: ["switch statement", "case statement", "match statement", "select statement"],
        correct: 2,
        explain: "Python 3.10 mein match-case aaya jo switch-case ka Python version hai. Older versions mein if-elif chain use karo.",
      },
      {
        q: "Ternary operator ka syntax kya hai Python mein?",
        options: [
          "condition ? true_val : false_val",
          "true_val if condition else false_val",
          "if(condition) true_val else false_val",
          "condition then true_val else false_val",
        ],
        correct: 1,
        explain: "Python ternary: value_if_true if condition else value_if_false. Example: 'Adult' if age >= 18 else 'Minor'",
      },
    ],
    mcqsEn: [
      {
        q: "What is the Python equivalent of switch-case (Python 3.10+)?",
        options: ["switch statement", "case statement", "match statement", "select statement"],
        correct: 2,
        explain: "Python 3.10 introduced match-case, which is the Python equivalent of switch-case. Use if-elif for older versions.",
      },
    ],
    cheatsheet: [
      "if condition: — basic condition",
      "elif condition: — else if",
      "else: — otherwise",
      "x if cond else y — ternary one-liner",
      "match val: case x: — Python 3.10+ switch",
      "case _ : — default case in match",
      "colon (:) zaroori hai condition ke baad",
      "indentation = code block define karta hai",
    ],
    cheatsheetEn: [
      "if condition: — basic condition check",
      "elif condition: — else if",
      "else: — default fallback",
      "x if cond else y — ternary expression",
      "match val: case x: — Python 3.10+ switch-case",
      "case _: — default case",
      "Colon (:) is mandatory after condition",
    ],
    revision: [
      "if/elif/else = decisions lena — indented blocks",
      "Ternary = value_if_true if condition else value_if_false",
      "match-case = Python 3.10+ switch-case equivalent",
      "Kisi bhi block ke end mein else optional hai",
    ],
    revisionEn: [
      "if/elif/else = decision making — indented code blocks",
      "Ternary = value_if_true if condition else value_if_false",
      "match-case = Python 3.10+ switch-case equivalent",
      "else block is optional — acts as default fallback",
    ],
  },

  {
    id: "py-loops",
    title: "Loops — Kaam Repeat Karo",
    titleEn: "Loops — Repeating Tasks",
    emoji: "🔁",
    category: "Basics",
    description: "for aur while loops, nested loops, break, continue, aur else",
    descriptionEn: "for and while loops, nested loops, break, continue, and else clauses",
    sections: [
      {
        heading: "for Loop — Sequence pe iterate karo",
        content: `for loop kisi bhi iterable (list, string, range, etc.) ke har element pe iterate karta hai.`,
        code: `# List pe loop
fruits = ["apple", "mango", "banana", "grapes"]
for fruit in fruits:
    print(f"Fruit: {fruit}")

# Range ke saath — n baar karo
for i in range(5):           # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):        # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 20, 5):    # 0, 5, 10, 15 (step 5)
    print(i)

for i in range(10, 0, -1):   # 10, 9, 8...1 (reverse)
    print(i)

# String pe loop — har character
for char in "Python":
    print(char)   # P y t h o n (ek ek karke)

# enumerate — index bhi chahiye
subjects = ["Math", "Science", "English"]
for idx, subject in enumerate(subjects):
    print(f"{idx+1}. {subject}")
# 1. Math  2. Science  3. English

# zip — do lists ek saath
names = ["Rahul", "Priya", "Ali"]
scores = [85, 92, 78]
for name, score in zip(names, scores):
    print(f"{name}: {score}")

# List comprehension — short for loop
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

even = [x for x in range(20) if x % 2 == 0]
print(even)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`,
        language: "python",
        tip: "List comprehension Python ka unique feature hai — ek line mein naya list banao. [expression for item in iterable if condition]",
      },
      {
        heading: "while Loop + break/continue",
        content: `while loop tab tak run karta hai jab tak condition True hoti hai. break se niklo, continue se skip karo.`,
        code: `# Basic while
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1  # zaroor increment karo warna infinite loop!

# ─────────────────────────────────────
# break — loop se baahar niklo
for i in range(10):
    if i == 5:
        print("5 mila, band karo!")
        break
    print(i)
# 0 1 2 3 4  aur phir "5 mila, band karo!"

# continue — current iteration skip karo
for i in range(10):
    if i % 2 == 0:    # even skip karo
        continue
    print(i)          # sirf odd print hoga: 1 3 5 7 9

# ─────────────────────────────────────
# while True — infinite loop (controlled exit)
while True:
    user = input("Command (quit to exit): ")
    if user.lower() == "quit":
        print("Goodbye!")
        break
    print(f"Command received: {user}")

# ─────────────────────────────────────
# for-else / while-else (unique Python feature!)
# else tab chalta hai jab loop normally complete ho (break nahi hua)
target = 7
numbers = [1, 3, 5, 8, 9]

for num in numbers:
    if num == target:
        print(f"{target} mila!")
        break
else:
    print(f"{target} nahi mila list mein")  # yeh chalega

# Nested loops
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i}x{j}={i*j}", end="\t")
    print()   # newline
# 1x1=1  1x2=2  1x3=3
# 2x1=2  2x2=4  2x3=6
# 3x1=3  3x2=6  3x3=9`,
        language: "python",
        warning: "while loop mein counter zaroor increment karo warna infinite loop ho jaati hai aur program hang kar jaata hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "for Loop — Iterate over sequences",
        content: `The for loop iterates over any iterable (list, string, range, etc.) and runs for each element.`,
        code: `# Loop over list
fruits = ["apple", "mango", "banana"]
for fruit in fruits:
    print(fruit)

# range() — run N times
for i in range(5):        # 0,1,2,3,4
    print(i)

for i in range(1, 6):     # 1,2,3,4,5
    print(i)

# enumerate — get index and value
for idx, fruit in enumerate(fruits):
    print(f"{idx+1}. {fruit}")

# List comprehension — one-line list creation
squares = [x**2 for x in range(1, 6)]   # [1,4,9,16,25]
evens = [x for x in range(20) if x % 2 == 0]`,
        language: "python",
        tip: "List comprehension is a uniquely Pythonic way to create lists: [expression for item in iterable if condition]",
      },
      {
        heading: "while Loop + break/continue",
        content: `while runs as long as the condition is True. break exits the loop, continue skips to the next iteration.`,
        code: `count = 0
while count < 5:
    print(count)
    count += 1  # always increment or infinite loop!

# break — exit loop early
for i in range(10):
    if i == 5: break
    print(i)  # prints 0-4

# continue — skip current iteration
for i in range(10):
    if i % 2 == 0: continue
    print(i)  # prints 1,3,5,7,9

# for-else — else runs if loop wasn't broken
for num in [1, 3, 5, 8]:
    if num == 7: break
else:
    print("7 not found")  # this runs`,
        language: "python",
        warning: "In a while loop, always update the counter or condition. Forgetting this causes an infinite loop.",
      },
    ],
    mcqs: [
      {
        q: "range(2, 10, 3) se kya values generate hongi?",
        options: ["2, 5, 8", "2, 3, 4, 5", "3, 6, 9", "2, 4, 6, 8, 10"],
        correct: 0,
        explain: "range(start, stop, step): 2 se shuru, 10 se pehle tak, step 3: 2, 5, 8.",
      },
      {
        q: "for-else mein else kab execute hota hai?",
        options: [
          "Jab loop mein error aaye",
          "Hamesha loop ke baad",
          "Jab loop break se exit nahi hua hota",
          "Jab loop ki koi iteration na ho",
        ],
        correct: 2,
        explain: "for-else mein else sirf tab chalata hai jab loop normally complete ho — break se exit nahi hua. Search patterns ke liye useful hai.",
      },
    ],
    mcqsEn: [
      {
        q: "What values does range(2, 10, 3) generate?",
        options: ["2, 5, 8", "2, 3, 4, 5", "3, 6, 9", "2, 4, 6, 8, 10"],
        correct: 0,
        explain: "range(start, stop, step): starts at 2, stops before 10, steps by 3: 2, 5, 8.",
      },
    ],
    cheatsheet: [
      "for x in iterable: — basic for loop",
      "range(n) — 0 to n-1",
      "range(start, stop, step) — custom range",
      "enumerate(list) — index + value",
      "zip(a, b) — do lists parallel loop",
      "break — loop se exit karo",
      "continue — current iteration skip karo",
      "[x for x in list if cond] — list comprehension",
      "for-else: else = loop break ke bina complete hua",
    ],
    cheatsheetEn: [
      "for x in iterable: — basic for loop",
      "range(n) — generates 0 to n-1",
      "range(start, stop, step) — custom range",
      "enumerate(list) — yields (index, value) pairs",
      "zip(a, b) — iterate two lists in parallel",
      "break — exit the loop immediately",
      "continue — skip to the next iteration",
      "[x for x in list if cond] — list comprehension",
    ],
    revision: [
      "for = known iterations, while = condition-based",
      "range(start, stop, step) = number sequence",
      "break = exit, continue = skip current",
      "List comprehension = [expr for x in it if cond]",
      "for-else: else jab break nahi hua",
    ],
    revisionEn: [
      "for = known number of iterations, while = condition-based",
      "range(start, stop, step) = generates a number sequence",
      "break = exit loop, continue = skip current iteration",
      "List comprehension = [expr for x in it if cond]",
      "for-else: else clause runs when no break occurred",
    ],
  },

  {
    id: "py-strings",
    title: "Strings — Text Manipulation",
    titleEn: "Strings — Text Manipulation",
    emoji: "📝",
    category: "Basics",
    description: "String methods, slicing, formatting — Python mein text ka complete guide",
    descriptionEn: "String methods, slicing, formatting — the complete guide to text in Python",
    sections: [
      {
        heading: "String Basics aur Methods",
        content: `String immutable hoti hai Python mein — ek baar bani toh change nahi hoti, naya string banta hai.`,
        code: `text = "Hello, Python World!"

# Basic info
print(len(text))        # 20 — length
print(text[0])          # H  — first char (0-indexed)
print(text[-1])         # !  — last char
print(text[7:13])       # Python — slicing [start:end]
print(text[::2])        # Hlo yhnWrd — step 2
print(text[::-1])       # !dlroW nohtyP ,olleH — reverse

# ─────────────────────────────────────
# CASE METHODS
s = "  hello PYTHON world  "
print(s.upper())          # HELLO PYTHON WORLD
print(s.lower())          # hello python world
print(s.title())          # Hello Python World
print(s.capitalize())     # Hello python world
print(s.swapcase())       # HELLO python WORLD
print(s.strip())          # whitespace hata do (dono sides)
print(s.lstrip())         # sirf left side
print(s.rstrip())         # sirf right side

# ─────────────────────────────────────
# SEARCH METHODS
text = "Python is awesome and Python is fun"
print(text.find("Python"))      # 0 (first occurrence index)
print(text.rfind("Python"))     # 20 (last occurrence)
print(text.count("Python"))     # 2 (kitni baar hai)
print(text.startswith("Python")) # True
print(text.endswith("fun"))      # True
print("123".isdigit())           # True — sirf digits
print("abc".isalpha())           # True — sirf letters
print("abc123".isalnum())        # True — letters + digits
print("  ".isspace())            # True — sirf whitespace

# ─────────────────────────────────────
# MODIFY METHODS
text = "Python is great"
print(text.replace("great", "awesome"))  # Python is awesome
print(text.replace("is", "IS", 1))       # sirf 1st replace

# Split aur Join
csv = "Rahul,Priya,Ali,Sara"
names = csv.split(",")           # list ban gayi
print(names)  # ['Rahul', 'Priya', 'Ali', 'Sara']

words = ["Python", "is", "fun"]
joined = " ".join(words)         # list → string
print(joined)  # Python is fun

sentence = "  too  many   spaces  "
cleaned = " ".join(sentence.split())  # extra spaces remove
print(cleaned)  # too many spaces`,
        language: "python",
      },
      {
        heading: "String Formatting — f-strings Deep Dive",
        content: `f-strings Python ka best formatting tool hai. Complex formatting bhi ho sakti hai:`,
        code: `name = "Rahul"
age = 25
price = 1234567.89
pi = 3.14159265

# Basic
print(f"Naam: {name}, Age: {age}")

# Numbers format karo
print(f"Price: ₹{price:,.2f}")    # ₹1,234,567.89 (commas + 2 decimal)
print(f"Pi: {pi:.4f}")            # 3.1416 (4 decimal)
print(f"Percentage: {0.856:.1%}") # 85.6%
print(f"Binary: {42:b}")          # 101010
print(f"Hex: {255:x}")            # ff

# Alignment
for item, qty, cost in [("Apple", 5, 25.50), ("Mango", 3, 45.00)]:
    print(f"{item:<10} {qty:>5} {cost:>8.2f}")
# Apple          5    25.50
# Mango          3    45.00

# Expression in f-string
nums = [1, 2, 3, 4, 5]
print(f"Sum: {sum(nums)}, Avg: {sum(nums)/len(nums):.1f}")

# Multiline f-string
info = (
    f"Name: {name}\n"
    f"Age: {age}\n"
    f"Status: {'Adult' if age >= 18 else 'Minor'}"
)
print(info)`,
        language: "python",
        tip: "f-string mein koi bhi expression likh sakte ho — calculations, function calls, conditions sab kuch.",
      },
    ],
    sectionsEn: [
      {
        heading: "String Basics and Methods",
        content: `Strings are immutable in Python — once created they can't be changed. Methods return new strings.`,
        code: `text = "Hello, Python!"

# Basic operations
len(text)         # 14 — length
text[0]           # 'H' — first character
text[-1]          # '!' — last character
text[7:13]        # 'Python' — slicing

# Common methods
text.upper()       # HELLO, PYTHON!
text.lower()       # hello, python!
text.strip()       # remove leading/trailing whitespace
text.replace("Python", "World")  # replace
text.split(", ")   # ['Hello', 'Python!'] — split to list
", ".join(["a", "b"])  # 'a, b' — list to string

# Search
text.find("Python")      # 7 (index)
text.count("l")          # 2 (occurrences)
text.startswith("Hello") # True
"123".isdigit()          # True`,
        language: "python",
        tip: "Strings are immutable — methods return new strings, they don't modify the original.",
      },
    ],
    mcqs: [
      {
        q: "\"Python\"[::-1] ka result kya hoga?",
        options: ["nohtyP", "Python", "P", "Error"],
        correct: 0,
        explain: "[::-1] reverse slicing hai — step -1 matlab ulta chalega. \"Python\"[::-1] = \"nohtyP\".",
      },
      {
        q: "\"hello world\".split() kya return karega?",
        options: ["\"hello\", \"world\"", "['hello', 'world']", "('hello', 'world')", "Error"],
        correct: 1,
        explain: "split() bina argument ke whitespace pe split karta hai. Return type list hoti hai: ['hello', 'world'].",
      },
      {
        q: "f-string mein float ko 2 decimal aur comma-separated thousands format?",
        options: ["f\"{x:.2}\"", "f\"{x:,.2f}\"", "f\"{x:2.f}\"", "f\"{x|,.2f}\""],
        correct: 1,
        explain: "f\"{x:,.2f}\" — comma hazar ke separator ke liye, .2f 2 decimal places. 1234567.89 → 1,234,567.89.",
      },
    ],
    mcqsEn: [
      {
        q: "What does \"Python\"[::-1] return?",
        options: ["nohtyP", "Python", "P", "Error"],
        correct: 0,
        explain: "[::-1] is reverse slicing — step -1 means go backwards. \"Python\"[::-1] = \"nohtyP\".",
      },
    ],
    cheatsheet: [
      "len(s) — length",
      "s[i] — character at index i",
      "s[start:end:step] — slicing",
      "s[::-1] — reverse",
      "s.upper() / s.lower() / s.title()",
      "s.strip() — whitespace remove (both sides)",
      "s.replace(old, new) — replace",
      "s.split(sep) — string → list",
      "sep.join(list) — list → string",
      "s.find(sub) — index (−1 if not found)",
      "s.count(sub) — count occurrences",
      "f\"{x:,.2f}\" — comma + 2 decimal",
    ],
    cheatsheetEn: [
      "len(s) — string length",
      "s[i] — character at index",
      "s[start:end:step] — slicing",
      "s[::-1] — reverse a string",
      "s.upper() / s.lower() / s.title()",
      "s.strip() — remove whitespace both ends",
      "s.replace(old, new) — replace substring",
      "s.split(sep) — split to list",
      "sep.join(list) — join list to string",
      "f\"{x:,.2f}\" — thousands comma + 2 decimal places",
    ],
    revision: [
      "String immutable hai — methods new string return karte hain",
      "Slicing: s[start:end:step], s[::-1] = reverse",
      "split() → list, join() → string",
      "f\"{x:,.2f}\" = comma-separated 2-decimal float",
    ],
    revisionEn: [
      "Strings are immutable — methods return new strings",
      "Slicing: s[start:end:step], s[::-1] reverses",
      "split() → list, join() → string",
      "f\"{x:,.2f}\" = comma-separated with 2 decimal places",
    ],
  },

  {
    id: "py-lists-collections",
    title: "Lists, Tuples, Sets, Dictionaries",
    titleEn: "Lists, Tuples, Sets & Dictionaries",
    emoji: "📚",
    category: "Intermediate",
    description: "Python ke 4 main collection types — kab kaunsa use karna hai aur kyun",
    descriptionEn: "Python's 4 main collection types — when to use each and why",
    sections: [
      {
        heading: "List — Mutable Ordered Collection",
        content: `List Python ka sabse commonly used collection hai. Ordered, mutable (change ho sakti hai), duplicates allow.`,
        code: `# List banao
fruits = ["apple", "mango", "banana"]
mixed = [1, "two", 3.0, True, None]  # mixed types allowed
nested = [[1,2], [3,4], [5,6]]

# CRUD Operations
fruits.append("grapes")           # end mein add
fruits.insert(1, "kiwi")          # index 1 pe insert
fruits.extend(["pear", "plum"])   # list extend karo

print(fruits[0])        # apple
print(fruits[-1])       # plum
print(fruits[1:3])      # ['kiwi', 'mango']

fruits.remove("banana")  # value se remove (first occurrence)
fruits.pop()             # last item remove aur return
fruits.pop(0)            # index 0 remove

del fruits[0]            # delete by index

# Info methods
print(len(fruits))            # length
print(fruits.count("mango"))  # occurrences
print(fruits.index("mango"))  # first index
print("mango" in fruits)      # True/False

# Sort
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
numbers.sort()               # in-place ascending
numbers.sort(reverse=True)   # in-place descending
sorted_copy = sorted(numbers)  # new sorted list (original unchanged)

# Reverse
fruits.reverse()             # in-place
fruits[::-1]                 # new reversed list

# Copy (important!)
original = [1, 2, 3]
shallow = original.copy()    # shallow copy
import copy
deep = copy.deepcopy(original)  # deep copy (nested lists ke liye)`,
        language: "python",
        tip: "list.sort() original ko modify karta hai, sorted() naya list return karta hai. Dono ka fark yaad rakho.",
      },
      {
        heading: "Dictionary — Key-Value Storage",
        content: `Dictionary key:value pairs store karta hai. Unordered (Python 3.7+ mein insertion order maintain hoti hai), mutable, keys unique.`,
        code: `# Dict banao
student = {
    "name": "Rahul",
    "age": 20,
    "grade": "A",
    "subjects": ["Math", "Science"]
}

# Access
print(student["name"])          # Rahul
print(student.get("age"))       # 20
print(student.get("phone", "N/A"))  # N/A (default if not found)

# Add / Update
student["email"] = "rahul@gmail.com"  # add
student["age"] = 21                    # update

# Remove
del student["grade"]           # key delete
removed = student.pop("email") # remove aur return
student.clear()                # sab kuch clear

# Iterate
person = {"name": "Priya", "city": "Delhi", "age": 25}

for key in person:              # keys
    print(key)

for value in person.values():   # values
    print(value)

for key, value in person.items():  # key-value pairs
    print(f"{key}: {value}")

# Dict methods
print(list(person.keys()))    # ['name', 'city', 'age']
print(list(person.values()))  # ['Priya', 'Delhi', 25]
print("name" in person)       # True (key check)

# Dict comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# Merge dicts (Python 3.9+)
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}
merged = dict1 | dict2
print(merged)  # {'a':1, 'b':2, 'c':3, 'd':4}`,
        language: "python",
      },
      {
        heading: "Tuple aur Set — Quick Guide",
        content: `Tuple = immutable list. Set = unique values only, fast lookup.`,
        code: `# TUPLE — immutable (change nahi kar sakte)
coords = (10.5, 20.3)      # location coordinates
rgb = (255, 0, 128)        # color
point = (3,)               # single element tuple (comma zaroori!)

x, y = coords              # unpacking
print(x, y)                # 10.5 20.3

# Tuple methods (limited)
t = (1, 2, 3, 2, 1)
print(t.count(2))   # 2
print(t.index(3))   # 2

# Tuple vs List use karo?
# Tuple: fixed data (coordinates, RGB), faster, hashable (dict key ban sakta)
# List: mutable data (shopping cart, user list)

# ─────────────────────────────────────
# SET — unique values, fast lookup
my_set = {1, 2, 3, 4, 5}
my_set.add(6)          # element add
my_set.discard(3)      # safe remove (error nahi)
my_set.remove(2)       # remove (KeyError if not found)

# Set operations
a = {1, 2, 3, 4, 5}
b = {3, 4, 5, 6, 7}

print(a & b)   # {3, 4, 5}   — Intersection (common)
print(a | b)   # {1,2,3,4,5,6,7} — Union (sab)
print(a - b)   # {1, 2}      — Difference (a mein, b mein nahi)
print(a ^ b)   # {1,2,6,7}   — Symmetric difference

# Duplicates remove karna
numbers = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(numbers))   # duplicates hat gayi
print(unique)  # [1, 2, 3, 4] (order change ho sakta hai)`,
        language: "python",
        tip: "Set mein membership test (x in s) O(1) time mein hota hai — list se bahut fast. Large data mein lookups ke liye set use karo.",
      },
    ],
    sectionsEn: [
      {
        heading: "List — Mutable Ordered Collection",
        content: `List is Python's most commonly used collection. Ordered, mutable, allows duplicates.`,
        code: `fruits = ["apple", "mango", "banana"]

# Add items
fruits.append("grapes")         # add to end
fruits.insert(1, "kiwi")        # insert at index
fruits.extend(["pear", "plum"]) # add multiple

# Remove items
fruits.remove("banana")  # by value
fruits.pop()             # remove last
fruits.pop(0)            # remove by index

# Sort
fruits.sort()                    # sort in-place
sorted_copy = sorted(fruits)     # returns new sorted list

# List comprehension
squares = [x**2 for x in range(1, 6)]  # [1,4,9,16,25]`,
        language: "python",
        tip: "sort() modifies the original list. sorted() returns a new sorted list without changing the original.",
      },
      {
        heading: "Dictionary — Key-Value Storage",
        content: `Dictionary stores key:value pairs. Keys must be unique. Python 3.7+ maintains insertion order.`,
        code: `student = {"name": "Rahul", "age": 20}

# Access
student["name"]                   # "Rahul"
student.get("phone", "N/A")       # "N/A" (safe access)

# Iterate
for key, value in student.items():
    print(f"{key}: {value}")

# Dict comprehension
squares = {x: x**2 for x in range(1, 6)}

# Merge (Python 3.9+)
merged = dict1 | dict2`,
        language: "python",
      },
    ],
    mcqs: [
      {
        q: "Set mein duplicate values add karne ka kya hoga?",
        options: ["Duplicate add ho jaayegi", "Error aayega", "Silently ignore ho jaayega — sirf unique", "Set double size ho jaayegi"],
        correct: 2,
        explain: "Set sirf unique values store karta hai. Duplicate add karne par koi error nahi aata — silently ignore hota hai.",
      },
      {
        q: "list.sort() aur sorted(list) mein kya fark hai?",
        options: [
          "Koi fark nahi",
          "sort() in-place modify karta hai, sorted() new list return karta hai",
          "sorted() in-place karta hai, sort() new list",
          "sort() sirf numbers ke liye hai",
        ],
        correct: 1,
        explain: "list.sort() original list ko modify karta hai aur None return karta hai. sorted() original unchanged rakkhta hai aur new sorted list return karta hai.",
      },
      {
        q: "Tuple aur List mein main difference?",
        options: [
          "Tuple ordered nahi hota",
          "List sirf numbers store kar sakti hai",
          "Tuple immutable hai (change nahi ho sakta)",
          "Tuple sorted rehta hai automatically",
        ],
        correct: 2,
        explain: "Tuple immutable hai — create hone ke baad elements change/add/remove nahi ho sakte. List mutable hai.",
      },
    ],
    mcqsEn: [
      {
        q: "What happens when you add a duplicate value to a set?",
        options: ["It gets added", "Raises an error", "Silently ignored — sets only store unique values", "Set doubles in size"],
        correct: 2,
        explain: "Sets only store unique values. Adding a duplicate silently does nothing — no error is raised.",
      },
      {
        q: "What is the key difference between list.sort() and sorted(list)?",
        options: [
          "No difference",
          "sort() modifies in-place, sorted() returns a new list",
          "sorted() modifies in-place, sort() returns new list",
          "sort() only works on numbers",
        ],
        correct: 1,
        explain: "list.sort() modifies the original list and returns None. sorted() leaves the original unchanged and returns a new sorted list.",
      },
    ],
    cheatsheet: [
      "list = [] — mutable, ordered, duplicates OK",
      "tuple = () — immutable, ordered, duplicates OK",
      "set = {} — mutable, unordered, UNIQUE only",
      "dict = {k:v} — mutable, key-value, unique keys",
      "append() add end, insert(i) add at index",
      "remove(v) value se, pop(i) index se",
      "a & b intersection, a | b union, a - b difference",
      "d.get(key, default) — safe access",
      "d.items() — (key, value) pairs",
    ],
    cheatsheetEn: [
      "list = [] — mutable, ordered, allows duplicates",
      "tuple = () — immutable, ordered, allows duplicates",
      "set = {} — mutable, unordered, UNIQUE values only",
      "dict = {k:v} — mutable key-value mapping",
      "append() end mein, insert(i,v) at index",
      "remove(v) by value, pop(i) by index",
      "a & b intersection, a | b union, a - b difference",
      "d.get(key, default) — safe dictionary access",
    ],
    revision: [
      "List = mutable ordered, Tuple = immutable ordered",
      "Set = unique values + fast lookup (O(1))",
      "Dict = key:value pairs, keys unique",
      "sort() in-place, sorted() new list return",
      "Duplicates remove: list(set(my_list))",
    ],
    revisionEn: [
      "List = mutable ordered, Tuple = immutable ordered",
      "Set = unique values + O(1) lookup speed",
      "Dict = key:value pairs, unique keys",
      "sort() modifies in-place, sorted() returns new list",
      "Remove duplicates: list(set(my_list))",
    ],
  },

  {
    id: "py-functions",
    title: "Functions — Code Reuse Karo",
    titleEn: "Functions — Reusable Code Blocks",
    emoji: "⚙️",
    category: "Intermediate",
    description: "Parameters, return, lambda, *args/**kwargs, aur recursion",
    descriptionEn: "Parameters, return, lambda, *args/**kwargs, and recursion",
    sections: [
      {
        heading: "Functions — Basics se Advanced",
        content: `Function ek reusable code block hai. Ek baar likhao, baar baar use karo.`,
        code: `# Basic function
def greet(name):
    """Docstring: Kya karta hai yeh function."""
    return f"Hello, {name}!"

print(greet("Rahul"))   # Hello, Rahul!

# ─────────────────────────────────────
# Default parameters
def introduce(name, age=18, city="Unknown"):
    return f"{name}, {age} saal, {city} se"

print(introduce("Priya"))           # Priya, 18 saal, Unknown se
print(introduce("Ali", 25))         # Ali, 25 saal, Unknown se
print(introduce("Sara", city="Mumbai", age=22))  # keyword args

# ─────────────────────────────────────
# *args — variable positional arguments
def add_all(*numbers):
    return sum(numbers)

print(add_all(1, 2, 3))        # 6
print(add_all(1, 2, 3, 4, 5))  # 15

# **kwargs — variable keyword arguments
def user_info(**details):
    for key, value in details.items():
        print(f"  {key}: {value}")

user_info(name="Rahul", age=25, city="Delhi", hobby="coding")

# Combined: normal, *args, **kwargs
def full_func(required, *args, **kwargs):
    print(f"Required: {required}")
    print(f"Args: {args}")
    print(f"Kwargs: {kwargs}")

full_func("hello", 1, 2, 3, name="Rahul", age=25)

# ─────────────────────────────────────
# Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)  # tuple return

minimum, maximum = min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {minimum}, Max: {maximum}")`,
        language: "python",
        tip: "**kwargs se flexible APIs banate hain. Config options, print() jaise functions isi pattern use karte hain.",
      },
      {
        heading: "Lambda, Map, Filter, Reduce",
        content: `Lambda = anonymous (naam ke bina) function. Ek line mein simple functions.`,
        code: `# Lambda syntax: lambda arguments: expression
add = lambda x, y: x + y
print(add(3, 4))  # 7

square = lambda x: x ** 2
is_even = lambda x: x % 2 == 0

# ─────────────────────────────────────
# map() — list ke har element pe function apply karo
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Named function bhi de sakte ho
def double(x): return x * 2
doubled = list(map(double, numbers))

# ─────────────────────────────────────
# filter() — condition true wale rakho
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4]

words = ["Python", "is", "awesome", "AI"]
long_words = list(filter(lambda w: len(w) > 3, words))
print(long_words)  # ['Python', 'awesome']

# ─────────────────────────────────────
# sorted() with key function
students = [
    {"name": "Rahul", "score": 85},
    {"name": "Priya", "score": 92},
    {"name": "Ali", "score": 78},
]

# Score ke basis pe sort karo
by_score = sorted(students, key=lambda s: s["score"], reverse=True)
for s in by_score:
    print(f"{s['name']}: {s['score']}")

# String list case-insensitive sort
names = ["Banana", "apple", "Cherry", "date"]
names.sort(key=str.lower)
print(names)  # ['apple', 'Banana', 'Cherry', 'date']`,
        language: "python",
      },
      {
        heading: "Recursion — Function khud ko call kare",
        content: `Recursive function woh hai jo apne aap ko call karta hai. Base case zaroori hai — warna infinite loop!`,
        code: `# Factorial — n! = n × (n-1) × ... × 1
def factorial(n):
    if n <= 1:         # BASE CASE — yahan recursion rukti hai
        return 1
    return n * factorial(n - 1)  # recursive call

print(factorial(5))  # 120 (5×4×3×2×1)

# Fibonacci sequence
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print([fibonacci(i) for i in range(10)])
# [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# Binary search — recursive
def binary_search(arr, target, low, high):
    if low > high:
        return -1  # not found

    mid = (low + high) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search(arr, target, mid+1, high)
    else:
        return binary_search(arr, target, low, mid-1)

nums = [1, 3, 5, 7, 9, 11, 13, 15]
print(binary_search(nums, 7, 0, len(nums)-1))  # 3 (index)`,
        language: "python",
        warning: "Python mein default recursion limit 1000 hai (sys.getrecursionlimit()). Deep recursion ke liye iterative approach ya sys.setrecursionlimit() use karo.",
      },
    ],
    sectionsEn: [
      {
        heading: "Functions — Basics to Advanced",
        content: `A function is a reusable block of code. Write once, use many times.`,
        code: `# Basic function
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Rahul"))           # Hello, Rahul!
print(greet("Priya", "Hi"))    # Hi, Priya!

# *args — variable positional arguments
def add_all(*numbers):
    return sum(numbers)

add_all(1, 2, 3, 4, 5)  # 15

# **kwargs — variable keyword arguments
def user_info(**details):
    for key, val in details.items():
        print(f"{key}: {val}")

user_info(name="Rahul", age=25, city="Delhi")

# Multiple return values
def min_max(nums):
    return min(nums), max(nums)

lo, hi = min_max([3, 1, 9, 4])
print(lo, hi)  # 1 9`,
        language: "python",
        tip: "Use **kwargs to build flexible functions that accept arbitrary keyword arguments — similar to how Python's own print() works.",
      },
      {
        heading: "Lambda, Map, Filter",
        content: `Lambda creates anonymous functions in one line. map() and filter() apply functions to sequences.`,
        code: `# Lambda
square = lambda x: x ** 2
is_even = lambda x: x % 2 == 0

# map — apply function to every element
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))  # [1,4,9,16,25]

# filter — keep elements where condition is True
evens = list(filter(lambda x: x%2==0, numbers))  # [2, 4]

# sorted with key
students = [{"name": "Rahul", "score": 85}, {"name": "Priya", "score": 92}]
by_score = sorted(students, key=lambda s: s["score"], reverse=True)`,
        language: "python",
      },
    ],
    mcqs: [
      {
        q: "*args aur **kwargs mein fark?",
        options: [
          "Koi fark nahi",
          "*args positional arguments tuple, **kwargs keyword arguments dict",
          "*args list, **kwargs set",
          "**kwargs positional, *args keyword",
        ],
        correct: 1,
        explain: "*args function ko variable number of positional arguments receive karne deta hai (tuple mein). **kwargs keyword arguments dict mein deta hai.",
      },
      {
        q: "Recursion mein base case kyun zaroori hai?",
        options: [
          "Performance ke liye",
          "Code readable banane ke liye",
          "Infinite loop rokne ke liye — recursion yahan rukti hai",
          "Return type define karne ke liye",
        ],
        correct: 2,
        explain: "Base case woh condition hai jahan recursion rok jaati hai. Bina base case ke function infinitely khud ko call karta hai jab tak stack overflow na ho.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the difference between *args and **kwargs?",
        options: [
          "No difference",
          "*args = variable positional args (tuple), **kwargs = variable keyword args (dict)",
          "*args = list, **kwargs = set",
          "**kwargs = positional, *args = keyword",
        ],
        correct: 1,
        explain: "*args lets a function accept any number of positional arguments (stored as tuple). **kwargs accepts any keyword arguments (stored as dict).",
      },
    ],
    cheatsheet: [
      "def func(param): return val — basic function",
      "def func(a, b=10): — default parameter",
      "*args — variable positional args (tuple)",
      "**kwargs — variable keyword args (dict)",
      "lambda x: x*2 — anonymous function",
      "map(func, list) — apply function to all",
      "filter(func, list) — keep true results",
      "sorted(list, key=func) — custom sort",
      "Base case zaroori in recursion!",
    ],
    cheatsheetEn: [
      "def func(param): return val — basic function",
      "def func(a, b=10): — default parameter",
      "*args — variable positional arguments (tuple)",
      "**kwargs — variable keyword arguments (dict)",
      "lambda x: x*2 — anonymous one-liner function",
      "map(func, list) — apply to every element",
      "filter(func, list) — keep elements where True",
      "sorted(list, key=func) — sort with custom key",
      "Recursion always needs a base case!",
    ],
    revision: [
      "def func(*args, **kwargs) = flexible parameters",
      "Lambda = lambda x: expr (one-liner anonymous func)",
      "map() = apply, filter() = select, sorted(key=) = custom sort",
      "Recursion = base case + recursive call",
    ],
    revisionEn: [
      "def func(*args, **kwargs) = flexible parameter handling",
      "lambda x: expr = anonymous one-liner function",
      "map() = transform, filter() = select, sorted(key=) = custom sort",
      "Recursion = base case + smaller recursive call",
    ],
  },

  {
    id: "py-modules",
    title: "Modules & Packages — Code Organize Karo",
    titleEn: "Modules & Packages — Organizing Code",
    emoji: "📦",
    category: "Intermediate",
    description: "import, custom modules, packages, __name__, aur Python Standard Library",
    descriptionEn: "import, custom modules, packages, __name__, and the Python Standard Library",
    sections: [
      {
        heading: "Modules — Code ko Files mein Todna",
        content: `Module ek Python file (.py) hai jisme functions, classes, variables hote hain. Import karke doosri files mein use karo.`,
        code: `# ─────────────────────────────────────
# math_utils.py (apna module)
def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

PI = 3.14159

# ─────────────────────────────────────
# main.py — module import karo
import math_utils             # pure module import
print(math_utils.add(3, 4))   # 7
print(math_utils.PI)           # 3.14159

from math_utils import add, PI  # specific import
print(add(3, 4))               # 7 (direct access)

from math_utils import multiply as mul  # alias
print(mul(3, 4))               # 12

from math_utils import *  # sab import (avoid in production)

# ─────────────────────────────────────
# Built-in Standard Library Modules
import math
print(math.sqrt(144))     # 12.0
print(math.pi)            # 3.14159...
print(math.ceil(3.2))     # 4
print(math.floor(3.7))    # 3
print(math.log(100, 10))  # 2.0

import random
print(random.randint(1, 100))  # 1-100 random int
print(random.choice(["a", "b", "c"]))  # random element
items = [1, 2, 3, 4, 5]
random.shuffle(items)  # list shuffle karo

import os
print(os.getcwd())              # current directory
print(os.listdir("."))          # files list
os.makedirs("new_folder", exist_ok=True)

import sys
print(sys.version)              # Python version
print(sys.path)                 # module search paths

import datetime
now = datetime.datetime.now()
print(now.strftime("%d/%m/%Y %H:%M"))  # 25/01/2025 14:30

import json
data = {"name": "Rahul", "age": 25}
json_str = json.dumps(data, indent=2)   # dict → JSON string
back = json.loads(json_str)             # JSON string → dict`,
        language: "python",
      },
      {
        heading: "__name__ == \"__main__\" — Script vs Module",
        content: `Yeh Python ka important pattern hai — file directly run ho toh kuch code chale, import ho toh nahi.`,
        code: `# calculator.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

# Yeh code sirf tab chalega jab file directly run ho
# Import hone par nahi chalega
if __name__ == "__main__":
    print("Calculator script directly chal raha hai!")
    print(add(10, 5))      # 15
    print(subtract(10, 5)) # 5

# ─────────────────────────────────────
# Package structure (folder = package)
#
# myproject/
#   main.py
#   utils/           ← package (folder)
#     __init__.py    ← package marker (empty ya initialization code)
#     string_utils.py
#     math_utils.py
#   data/
#     __init__.py
#     database.py

# Import from package
from utils.string_utils import clean_text
from utils import math_utils

# ─────────────────────────────────────
# pip se third-party packages
# pip install requests
import requests
response = requests.get("https://api.github.com")
print(response.status_code)  # 200
print(response.json())       # JSON response

# Virtual environment (best practice)
# python -m venv venv        ← create
# source venv/bin/activate   ← activate (Linux/Mac)
# venv\\Scripts\\activate    ← activate (Windows)
# pip install -r requirements.txt  ← install dependencies`,
        language: "python",
        tip: "Hamesha virtual environment use karo — different projects ki alag-alag dependencies hoti hain. venv se isolation milti hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "Modules — Splitting code into files",
        content: `A module is a Python file (.py) containing functions, classes, and variables. Import it to use in other files.`,
        code: `# Import a built-in module
import math
import random
import os
import json
import datetime

# Use them
math.sqrt(144)          # 12.0
random.randint(1, 100)  # random number 1-100
os.getcwd()             # current directory
json.dumps({"a": 1})    # dict to JSON string

# Import specific things
from math import sqrt, pi
print(sqrt(16), pi)    # 4.0  3.14159...

# Import your own module (math_utils.py):
from math_utils import add, multiply`,
        language: "python",
        tip: "Always use virtual environments (venv) — each project has its own dependencies and won't conflict with others.",
      },
    ],
    mcqs: [
      {
        q: "if __name__ == \"__main__\": kyun use karte hain?",
        options: [
          "Python ka requirement hai",
          "File directly run ho toh code chale, import ho toh nahi",
          "Performance improve hoti hai",
          "Memory save hoti hai",
        ],
        correct: 1,
        explain: "Jab Python file directly run hoti hai toh __name__ == '__main__'. Import hone par '__main__' nahi hota. Isse test code aur main code separate hota hai.",
      },
      {
        q: "Virtual environment kyun use karte hain?",
        options: [
          "Python faster chalti hai",
          "Different projects ki alag-alag dependencies isolate hoti hain",
          "Code secure hota hai",
          "pip faster hota hai",
        ],
        correct: 1,
        explain: "Virtual environment alag folder mein packages install karta hai. Alag projects ke liye alag versions chahiye ho sakte hain — conflict nahi hoti.",
      },
    ],
    mcqsEn: [
      {
        q: "Why do we use if __name__ == '__main__':?",
        options: [
          "Python requires it",
          "Code only runs when file is executed directly, not when imported",
          "Improves performance",
          "Saves memory",
        ],
        correct: 1,
        explain: "When a file runs directly, __name__ is '__main__'. When imported, it's the module name. This pattern separates runnable scripts from importable modules.",
      },
    ],
    cheatsheet: [
      "import module — module import karo",
      "from module import func — specific import",
      "import module as alias — rename",
      "if __name__ == '__main__': — script vs module",
      "pip install package — third-party install",
      "python -m venv venv — virtual environment banao",
      "math, random, os, json, datetime — common stdlib",
      "__init__.py — package marker",
    ],
    cheatsheetEn: [
      "import module — import a module",
      "from module import func — import specific item",
      "import module as alias — import with alias",
      "if __name__ == '__main__': — run only when executed directly",
      "pip install package — install third-party package",
      "python -m venv venv — create virtual environment",
      "math, random, os, json, datetime — common stdlib modules",
    ],
    revision: [
      "Module = Python file, Package = folder with __init__.py",
      "import math / from math import sqrt — two ways",
      "__name__ == '__main__' = direct execution guard",
      "pip + venv = package management best practice",
    ],
    revisionEn: [
      "Module = a Python file, Package = folder with __init__.py",
      "import math or from math import sqrt — two import styles",
      "__name__ == '__main__' = runs only when executed directly",
      "pip + venv = proper package management",
    ],
  },

  {
    id: "py-exceptions",
    title: "Exception Handling — Errors ko Handle Karo",
    titleEn: "Exception Handling — Dealing with Errors",
    emoji: "⚠️",
    category: "Intermediate",
    description: "try, except, finally, custom exceptions — program crash se bachao",
    descriptionEn: "try, except, finally, custom exceptions — prevent your program from crashing",
    sections: [
      {
        heading: "Try-Except — Errors Gracefully Handle Karo",
        content: `Exception handling se program crash hone se bachata hai. Jab koi error aaye, usse gracefully handle karo.`,
        code: `# Basic try-except
try:
    num = int(input("Number enter karo: "))
    result = 100 / num
    print(f"Result: {result}")
except ValueError:
    print("❌ Valid number nahi diya!")
except ZeroDivisionError:
    print("❌ Zero se divide nahi kar sakte!")

# ─────────────────────────────────────
# Multiple exceptions + else + finally
def read_file(filename):
    try:
        file = open(filename, 'r')
        content = file.read()
        return content
    except FileNotFoundError:
        print(f"❌ File '{filename}' nahi mili")
        return None
    except PermissionError:
        print(f"❌ File read karne ki permission nahi")
        return None
    except Exception as e:       # any other error
        print(f"❌ Koi error aaya: {e}")
        return None
    else:
        # try successfully complete hua (no exception)
        print("✅ File successfully read!")
    finally:
        # HAMESHA chalega — exception ho ya na ho
        print("File operation complete")
        try:
            file.close()
        except:
            pass

# ─────────────────────────────────────
# Common Python Exceptions
# ValueError — wrong value type: int("abc")
# TypeError — wrong type: "hello" + 5
# IndexError — list out of range: [1,2][5]
# KeyError — dict key not found: {"a":1}["b"]
# FileNotFoundError — file nahi mili
# ZeroDivisionError — 10/0
# AttributeError — wrong attribute: None.upper()
# ImportError — module nahi mila

# Exception info
try:
    result = 1 / 0
except ZeroDivisionError as e:
    print(f"Error type: {type(e).__name__}")
    print(f"Error message: {e}")
    # Error type: ZeroDivisionError
    # Error message: division by zero`,
        language: "python",
        tip: "except Exception as e — sab errors catch karta hai. Specific exceptions pehle likho, generic baad mein. Most specific → least specific order.",
      },
      {
        heading: "Custom Exceptions — Apne Errors Banao",
        content: `Real projects mein custom exceptions se descriptive errors milte hain:`,
        code: `# Custom exception class (Exception se inherit karo)
class ValidationError(Exception):
    """Input validation failure."""
    pass

class AgeError(ValidationError):
    """Invalid age."""
    def __init__(self, age, min_age=18):
        self.age = age
        self.min_age = min_age
        super().__init__(f"Age {age} accepted nahi — minimum {min_age} chahiye")

class InsufficientFundsError(Exception):
    def __init__(self, required, available):
        super().__init__(
            f"Insufficient funds: ₹{required} chahiye, ₹{available} available"
        )
        self.required = required
        self.available = available

# ─────────────────────────────────────
# Use custom exceptions
def register_user(name, age):
    if not name:
        raise ValidationError("Name khali nahi ho sakta")
    if age < 18:
        raise AgeError(age)
    return {"name": name, "age": age, "registered": True}

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(amount, balance)
    return balance - amount

# Catch custom exceptions
try:
    user = register_user("", 15)
except AgeError as e:
    print(f"Age Error: {e}")
    print(f"Provided: {e.age}, Required: {e.min_age}")
except ValidationError as e:
    print(f"Validation Error: {e}")

try:
    new_balance = withdraw(500, 1000)
except InsufficientFundsError as e:
    print(e)
    print(f"Shortfall: ₹{e.required - e.available}")`,
        language: "python",
        tip: "Custom exceptions se code readable hota hai aur errors zyada descriptive hote hain. Hamesha Exception se inherit karo.",
      },
    ],
    sectionsEn: [
      {
        heading: "Try-Except — Handle errors gracefully",
        content: `Exception handling prevents programs from crashing. Catch errors and respond gracefully.`,
        code: `# Basic try-except-else-finally
try:
    num = int(input("Enter number: "))
    result = 100 / num
    print(f"Result: {result}")
except ValueError:
    print("Not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("Success!")     # runs only if no exception
finally:
    print("Always runs")  # cleanup code here

# Common exceptions
# ValueError — wrong value: int("abc")
# TypeError — wrong type: "hello" + 5
# IndexError — out of range: [1,2][5]
# KeyError — dict key missing: d["x"]
# FileNotFoundError — file missing
# ZeroDivisionError — x/0`,
        language: "python",
        tip: "Order exceptions from most specific to most general. Python checks them top to bottom.",
      },
    ],
    mcqs: [
      {
        q: "finally block kab execute hota hai?",
        options: [
          "Sirf exception aane par",
          "Sirf success hone par",
          "Hamesha — exception ho ya na ho",
          "Sirf return statement ke baad",
        ],
        correct: 2,
        explain: "finally HAMESHA execute hota hai — chahe try block successful ho ya exception aaye. File close/connection cleanup ke liye perfect.",
      },
      {
        q: "Custom exception banane ke liye kaunsi class se inherit karte hain?",
        options: ["Error", "Exception", "BaseException", "RuntimeError"],
        correct: 1,
        explain: "Custom exceptions Exception class se inherit karte hain. BaseException bhi ho sakti hai lekin Exception recommended hai user-defined errors ke liye.",
      },
    ],
    mcqsEn: [
      {
        q: "When does the finally block execute?",
        options: [
          "Only when an exception occurs",
          "Only when no exception occurs",
          "Always — regardless of whether an exception occurred",
          "Only after a return statement",
        ],
        correct: 2,
        explain: "finally ALWAYS runs — whether or not an exception was raised. It's the right place for cleanup code (closing files, connections).",
      },
    ],
    cheatsheet: [
      "try: — code try karo",
      "except ErrorType: — specific error catch",
      "except Exception as e: — sab errors + error object",
      "else: — sirf success hone par",
      "finally: — hamesha (cleanup)",
      "raise Exception('msg') — error throw karo",
      "class MyError(Exception): pass — custom exception",
      "ValueError, TypeError, IndexError, KeyError — common exceptions",
    ],
    cheatsheetEn: [
      "try: — attempt the code",
      "except ErrorType: — catch specific error",
      "except Exception as e: — catch all + get error object",
      "else: — runs only if no exception occurred",
      "finally: — always runs (cleanup code)",
      "raise Exception('msg') — manually raise an error",
      "class MyError(Exception): — create custom exception",
    ],
    revision: [
      "try-except-else-finally = complete error handling",
      "finally = cleanup code (hamesha chalta hai)",
      "raise = manually error throw karo",
      "Custom exception = Exception se inherit karo",
      "Specific exceptions pehle, generic baad mein",
    ],
    revisionEn: [
      "try-except-else-finally = complete error handling pattern",
      "finally = cleanup code that always runs",
      "raise = manually throw an exception",
      "Custom exception = inherit from Exception",
      "Order from most specific to most general",
    ],
  },

  {
    id: "py-file-handling",
    title: "File Handling — Files Read/Write Karo",
    titleEn: "File Handling — Reading and Writing Files",
    emoji: "📄",
    category: "Intermediate",
    description: "Text files, CSV, JSON, aur binary files Python mein handle karo",
    descriptionEn: "Handle text files, CSV, JSON, and binary files in Python",
    sections: [
      {
        heading: "File Read/Write — Basics",
        content: `Python mein files kholne ke liye open() function use karte hain. **with statement** automatically file close karta hai.`,
        code: `# ─────────────────────────────────────
# FILE WRITE (naya file banao ya overwrite)
with open("students.txt", "w", encoding="utf-8") as f:
    f.write("Rahul,85\\n")
    f.write("Priya,92\\n")
    f.write("Ali,78\\n")

# APPEND (existing file mein add karo)
with open("students.txt", "a") as f:
    f.write("Sara,88\\n")

# ─────────────────────────────────────
# FILE READ
# Method 1: Pure file read
with open("students.txt", "r", encoding="utf-8") as f:
    content = f.read()     # puri file ek string mein
    print(content)

# Method 2: Line by line
with open("students.txt", "r") as f:
    for line in f:
        line = line.strip()  # newline remove
        name, score = line.split(",")
        print(f"{name}: {score} marks")

# Method 3: All lines as list
with open("students.txt", "r") as f:
    lines = f.readlines()   # list of strings
    for line in lines:
        print(line.strip())

# ─────────────────────────────────────
# File modes:
# "r"  — read (default)
# "w"  — write (create/overwrite)
# "a"  — append
# "rb" — read binary (images, PDFs)
# "wb" — write binary
# "r+" — read + write

# File existence check
import os
if os.path.exists("students.txt"):
    print("File exists!")

# File info
print(os.path.getsize("students.txt"))   # size in bytes
print(os.path.basename("path/file.txt")) # file.txt
print(os.path.dirname("path/file.txt"))  # path`,
        language: "python",
        tip: "Hamesha 'with open()' use karo — yeh automatically file close karta hai, chahe exception aaye. Manual f.close() bhool jaane ka risk nahi.",
      },
      {
        heading: "CSV aur JSON Files",
        content: `Real data aksar CSV ya JSON format mein hota hai. Python mein inhe handle karna bahut asaan hai.`,
        code: `# ─────────────────────────────────────
# CSV (Comma Separated Values)
import csv

# CSV Write
students = [
    ["Name", "Score", "Grade"],
    ["Rahul", 85, "A"],
    ["Priya", 92, "A+"],
    ["Ali", 78, "B"],
]
with open("students.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(students)

# CSV Read
with open("students.csv", "r") as f:
    reader = csv.DictReader(f)  # dict format
    for row in reader:
        print(f"{row['Name']}: {row['Score']}")

# ─────────────────────────────────────
# JSON (JavaScript Object Notation)
import json

# Python dict → JSON file
config = {
    "app_name": "MyApp",
    "version": "1.0.0",
    "database": {
        "host": "localhost",
        "port": 5432,
    },
    "features": ["auth", "payments", "chat"],
}

with open("config.json", "w") as f:
    json.dump(config, f, indent=4)  # pretty print

# JSON file → Python dict
with open("config.json", "r") as f:
    loaded_config = json.load(f)
    print(loaded_config["app_name"])     # MyApp
    print(loaded_config["database"]["host"])  # localhost

# String ↔ dict
json_string = json.dumps(config)    # dict → str
data = json.loads(json_string)      # str → dict`,
        language: "python",
        warning: "json.dump() file mein write karta hai, json.dumps() string return karta hai. json.load() file se read karta hai, json.loads() string se.",
      },
    ],
    sectionsEn: [
      {
        heading: "File Read/Write Basics",
        content: `Use Python's open() function to work with files. The with statement automatically closes the file even if an error occurs.`,
        code: `# Write to a file
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("Hello, File!\\n")
    f.write("Second line\\n")

# Append to existing file
with open("data.txt", "a") as f:
    f.write("Third line\\n")

# Read entire file
with open("data.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

# File modes: r=read, w=write, a=append, rb/wb=binary`,
        language: "python",
        tip: "Always use 'with open()' — it automatically closes the file even if an exception is raised inside the block.",
      },
    ],
    mcqs: [
      {
        q: "json.dump() aur json.dumps() mein kya fark hai?",
        options: [
          "Koi fark nahi",
          "dump() file mein likhta hai, dumps() string return karta hai",
          "dumps() file mein, dump() string return",
          "dump() faster hai",
        ],
        correct: 1,
        explain: "json.dump(data, file) — file object mein write karta hai. json.dumps(data) — JSON string return karta hai. 's' = string.",
      },
      {
        q: "with open() kyun use karte hain?",
        options: [
          "File faster open hoti hai",
          "Context manager — automatic close, exception hone par bhi",
          "Only for reading",
          "Binary files ke liye",
        ],
        correct: 1,
        explain: "with statement context manager use karta hai. File automatically close hoti hai block ke end mein — exception aaye ya nahi.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the difference between json.dump() and json.dumps()?",
        options: [
          "No difference",
          "dump() writes to a file, dumps() returns a string",
          "dumps() writes to file, dump() returns string",
          "dump() is faster",
        ],
        correct: 1,
        explain: "json.dump(data, file) writes to a file object. json.dumps(data) returns a JSON string. The 's' in dumps stands for 'string'.",
      },
    ],
    cheatsheet: [
      "open(file, mode, encoding='utf-8') — file open",
      "with open() as f: — auto-close context manager",
      "f.read() — puri file string mein",
      "f.readlines() — list of lines",
      "f.write(text) — write",
      "csv.reader(f) — CSV read",
      "csv.DictReader(f) — CSV as dict",
      "json.dump(data, f) — dict → JSON file",
      "json.load(f) — JSON file → dict",
      "json.dumps(data) — dict → JSON string",
      "json.loads(string) — JSON string → dict",
    ],
    cheatsheetEn: [
      "open(file, mode, encoding='utf-8') — open a file",
      "with open() as f: — auto-close context manager",
      "f.read() — read entire file as string",
      "f.readlines() — read all lines as list",
      "f.write(text) — write to file",
      "csv.DictReader(f) — read CSV as dicts",
      "json.dump(data, f) — write dict to JSON file",
      "json.load(f) — read JSON file to dict",
      "json.dumps(data) — dict to JSON string",
    ],
    revision: [
      "with open() = automatic close (best practice)",
      "Modes: r=read, w=write(overwrite), a=append",
      "csv.DictReader = header row se key-value",
      "json.dump/load = file, json.dumps/loads = string",
    ],
    revisionEn: [
      "with open() = automatic close (always use this)",
      "Modes: r=read, w=write(overwrites), a=append",
      "csv.DictReader = reads rows as dictionaries",
      "json.dump/load = file, json.dumps/loads = string",
    ],
  },

  {
    id: "py-advanced",
    title: "Advanced Python — Decorators, Generators, Iterators",
    titleEn: "Advanced Python — Decorators, Generators, Iterators",
    emoji: "🚀",
    category: "Advanced",
    description: "Python ke powerful advanced features — decorators, generators, iterators, context managers",
    descriptionEn: "Python's powerful advanced features — decorators, generators, iterators, context managers",
    sections: [
      {
        heading: "Decorators — Functions ko Wrap Karo",
        content: `Decorator ek function hai jo doosre function ko wrap karta hai — bina original function modify kiye extra functionality add karo.`,
        code: `# Basic decorator
def timer(func):
    """Function ka execution time measure karo."""
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} chalane mein {end-start:.4f} seconds lage")
        return result
    return wrapper

@timer  # yeh same hai: greet = timer(greet)
def slow_greet(name):
    import time
    time.sleep(0.1)
    return f"Hello, {name}!"

print(slow_greet("Rahul"))
# slow_greet chalane mein 0.1003 seconds lage
# Hello, Rahul!

# ─────────────────────────────────────
# Login required decorator
def login_required(func):
    def wrapper(*args, **kwargs):
        is_logged_in = kwargs.get('user') is not None
        if not is_logged_in:
            return "❌ Pehle login karo!"
        return func(*args, **kwargs)
    return wrapper

@login_required
def get_profile(user=None):
    return f"Profile: {user['name']}"

print(get_profile())                          # ❌ Pehle login karo!
print(get_profile(user={"name": "Rahul"}))   # Profile: Rahul

# ─────────────────────────────────────
# functools.wraps — metadata preserve karo
from functools import wraps

def my_decorator(func):
    @wraps(func)  # original function ka naam/docstring preserve
    def wrapper(*args, **kwargs):
        print(f"Before {func.__name__}")
        result = func(*args, **kwargs)
        print(f"After {func.__name__}")
        return result
    return wrapper`,
        language: "python",
        tip: "@wraps(func) hamesha decorator mein use karo — original function ka __name__ aur __doc__ preserve karta hai.",
      },
      {
        heading: "Generators — Memory Efficient Sequences",
        content: `Generator ek special function hai jo values ek ek karke yield karta hai — puri list memory mein load nahi hoti.`,
        code: `# Regular function vs Generator
def get_squares_list(n):
    """List mein sab squares store karta hai — memory use"""
    return [i**2 for i in range(n)]

def get_squares_gen(n):
    """Generator — ek ek karke yield karta hai"""
    for i in range(n):
        yield i**2  # yield = return but remembers state

# Generator use karo
gen = get_squares_gen(5)
print(next(gen))    # 0
print(next(gen))    # 1
print(next(gen))    # 4

# Loop mein
for square in get_squares_gen(5):
    print(square)   # 0, 1, 4, 9, 16

# Generator expression (list comprehension jaisi, () ke saath)
squares_gen = (x**2 for x in range(1000000))  # memory efficient!
squares_list = [x**2 for x in range(1000000)] # 8MB+ memory!

# ─────────────────────────────────────
# Real use: large file processing
def read_large_file(filename):
    """File ek ek line yield karo — puri file load nahi"""
    with open(filename, 'r') as f:
        for line in f:
            yield line.strip()

for line in read_large_file("huge_data.txt"):
    process(line)  # ek time pe ek line

# Infinite sequence (possible only with generators!)
def infinite_counter(start=0):
    count = start
    while True:
        yield count
        count += 1

counter = infinite_counter()
for _ in range(5):
    print(next(counter))   # 0, 1, 2, 3, 4`,
        language: "python",
        tip: "Generators bahut memory efficient hain. 10 million numbers generate karna ho toh list 400MB+ RAM legi, generator sirf kuch KB.",
      },
      {
        heading: "Context Managers — with Statement Custom Banao",
        content: `Context managers resource management ke liye hain. 'with' ke saath use hote hain.`,
        code: `# Custom context manager using class
class Timer:
    def __enter__(self):
        import time
        self.start = time.time()
        print("Timer start!")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        elapsed = time.time() - self.start
        print(f"Timer stop! {elapsed:.3f} seconds")
        return False  # exception propagate karne do

with Timer():
    import time
    time.sleep(0.5)
    print("Kuch kaam kar raha hun...")

# Output:
# Timer start!
# Kuch kaam kar raha hun...
# Timer stop! 0.501 seconds

# ─────────────────────────────────────
# contextlib se simple approach
from contextlib import contextmanager

@contextmanager
def managed_resource(name):
    print(f"Opening {name}")
    try:
        yield name.upper()
    finally:
        print(f"Closing {name}")

with managed_resource("database") as db:
    print(f"Using {db}")

# Output:
# Opening database
# Using DATABASE
# Closing database`,
        language: "python",
      },
    ],
    sectionsEn: [
      {
        heading: "Decorators — Wrapping Functions",
        content: `A decorator is a function that wraps another function — adding extra functionality without modifying the original.`,
        code: `from functools import wraps
import time

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.time()-start:.4f}s")
        return result
    return wrapper

@timer
def slow_task():
    time.sleep(0.1)
    return "done"

slow_task()  # slow_task took 0.1003s`,
        language: "python",
        tip: "Always use @wraps(func) inside your decorator to preserve the original function's __name__ and __doc__.",
      },
      {
        heading: "Generators — Memory Efficient Sequences",
        content: `Generators yield values one at a time — perfect for large datasets where loading everything into memory is not practical.`,
        code: `def squares(n):
    for i in range(n):
        yield i ** 2    # yield pauses, remembers state

# Use as iterator
for sq in squares(5):
    print(sq)   # 0, 1, 4, 9, 16

# Generator expression (memory efficient)
gen = (x**2 for x in range(1_000_000))  # uses ~100 bytes
lst = [x**2 for x in range(1_000_000)]  # uses ~8 MB`,
        language: "python",
        tip: "Generator expressions use parentheses () instead of brackets []. They are memory-efficient for large sequences.",
      },
    ],
    mcqs: [
      {
        q: "Decorator kya karta hai?",
        options: [
          "Variables ko decorate karta hai",
          "Function ko wrap karke extra functionality add karta hai without modification",
          "Classes ke liye CSS lagata hai",
          "Comments add karta hai",
        ],
        correct: 1,
        explain: "Decorator ek higher-order function hai jo doosre function ko wrap karta hai. Original function change kiye bina logging, timing, auth add kar sakte hain.",
      },
      {
        q: "Generator aur regular function mein main fark?",
        options: [
          "Generator faster hai",
          "Generator yield use karta hai — values lazily produce karta hai, memory efficient",
          "Generator return nahi kar sakta",
          "Generator sirf numbers ke liye hai",
        ],
        correct: 1,
        explain: "Generator yield use karta hai — ek ek value produce karta hai on demand. Puri sequence memory mein nahi rakhta. Large data ke liye ideal.",
      },
    ],
    mcqsEn: [
      {
        q: "What does a decorator do?",
        options: [
          "Decorates variables",
          "Wraps a function to add extra behavior without modifying the original",
          "Adds CSS to classes",
          "Adds comments",
        ],
        correct: 1,
        explain: "A decorator is a higher-order function that wraps another function. It adds functionality like logging, timing, or auth without touching the original code.",
      },
    ],
    cheatsheet: [
      "@decorator — function pe apply karo",
      "def decorator(func): def wrapper(): return wrapper",
      "@wraps(func) — metadata preserve karo",
      "yield — generator ke liye (return ki jagah)",
      "next(gen) — next value lo",
      "(x for x in list) — generator expression",
      "__enter__ / __exit__ — context manager",
      "@contextmanager — simple context manager",
    ],
    cheatsheetEn: [
      "@decorator — apply to a function",
      "def decorator(func): def wrapper(): return wrapper",
      "@wraps(func) — preserve original function metadata",
      "yield — pause and produce a value (generator)",
      "next(gen) — get next value from generator",
      "(x for x in list) — generator expression",
      "__enter__ / __exit__ — context manager protocol",
      "@contextmanager — quick context manager with yield",
    ],
    revision: [
      "Decorator = function wrap karo, @syntax use karo",
      "@wraps(func) = name/docstring preserve karo",
      "Generator = yield se lazy values, memory efficient",
      "Context manager = with block, __enter__/__exit__",
    ],
    revisionEn: [
      "Decorator = wrap a function, apply with @ syntax",
      "@wraps(func) = preserve name and docstring",
      "Generator = uses yield, produces values lazily (memory efficient)",
      "Context manager = used with 'with', has __enter__/__exit__",
    ],
  },

  {
    id: "py-oop",
    title: "OOP in Python — Classes aur Objects",
    titleEn: "OOP in Python — Classes and Objects",
    emoji: "🏗️",
    category: "Advanced",
    description: "Classes, inheritance, polymorphism, encapsulation — Python mein Object-Oriented Programming",
    descriptionEn: "Classes, inheritance, polymorphism, encapsulation — Object-Oriented Programming in Python",
    sections: [
      {
        heading: "Classes aur Objects — Real-world ko Code mein",
        content: `Class ek blueprint hai. Object us blueprint se banaya hua instance hai.`,
        code: `# Class define karo
class BankAccount:
    # Class variable — sab instances share karte hain
    bank_name = "Python Bank"
    total_accounts = 0

    def __init__(self, owner, initial_balance=0):
        """Constructor — object banate waqt call hota hai"""
        self.owner = owner              # instance variable
        self.__balance = initial_balance  # private (name mangling)
        BankAccount.total_accounts += 1

    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Amount positive hona chahiye")
        self.__balance += amount
        return self.__balance

    def withdraw(self, amount):
        if amount > self.__balance:
            raise ValueError("Insufficient funds!")
        self.__balance -= amount
        return self.__balance

    def get_balance(self):     # getter
        return self.__balance

    @property
    def balance(self):         # property decorator
        return self.__balance

    def __str__(self):         # string representation
        return f"Account({self.owner}, ₹{self.__balance})"

    def __repr__(self):
        return f"BankAccount(owner='{self.owner}', balance={self.__balance})"

# Objects banao
acc1 = BankAccount("Rahul", 10000)
acc2 = BankAccount("Priya")

acc1.deposit(5000)
acc1.withdraw(2000)
print(acc1)                   # Account(Rahul, ₹13000)
print(acc1.balance)           # 13000 (property)
print(BankAccount.total_accounts)  # 2`,
        language: "python",
      },
      {
        heading: "Inheritance — Parent se Child",
        content: `Inheritance se existing class ki properties/methods reuse karo, extend karo.`,
        code: `# Parent class
class Animal:
    def __init__(self, name, sound):
        self.name = name
        self.sound = sound

    def speak(self):
        return f"{self.name} says {self.sound}!"

    def __str__(self):
        return f"{self.__class__.__name__}: {self.name}"

# Child classes — inheritance
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Woof")  # parent constructor call
        self.breed = breed

    def fetch(self):  # extra method
        return f"{self.name} is fetching the ball!"

    def speak(self):  # override parent method
        return f"{self.name} barks: WOOF WOOF!"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")

    def speak(self):  # polymorphism
        return f"{self.name} purrs: Meooww..."

# Polymorphism — same interface, different behavior
animals = [Dog("Bruno", "Labrador"), Cat("Whiskers"), Dog("Rex", "German Shepherd")]
for animal in animals:
    print(animal.speak())  # har animal apna speak() call karta hai

# isinstance check
print(isinstance(animals[0], Dog))     # True
print(isinstance(animals[0], Animal))  # True (inheritance)
print(isinstance(animals[1], Dog))     # False

# ─────────────────────────────────────
# Abstract class
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self): pass

    @abstractmethod
    def perimeter(self): pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        import math
        return math.pi * self.radius ** 2

    def perimeter(self):
        import math
        return 2 * math.pi * self.radius`,
        language: "python",
        tip: "super().__init__() parent class ka constructor call karta hai. Yaad raho — inheritance mein parent constructor call karna hamesha zaroori hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "Classes and Objects — Blueprints",
        content: `A class is a blueprint. An object is an instance created from that blueprint.`,
        code: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance   # private attribute

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if amount > self.__balance:
            raise ValueError("Insufficient funds")
        self.__balance -= amount

    @property
    def balance(self):          # read-only property
        return self.__balance

    def __str__(self):
        return f"Account({self.owner}, ₹{self.__balance})"

acc = BankAccount("Rahul", 10000)
acc.deposit(5000)
print(acc.balance)   # 15000
print(acc)           # Account(Rahul, ₹15000)`,
        language: "python",
        tip: "Use @property for read-only attributes and double underscore __ for private attributes (name mangling).",
      },
    ],
    mcqs: [
      {
        q: "__init__ method kya karta hai?",
        options: [
          "Class delete karta hai",
          "Object banate waqt automatically call hota hai — initialization",
          "Class import karta hai",
          "Memory free karta hai",
        ],
        correct: 1,
        explain: "__init__ constructor hai — object create hone par automatically call hota hai. Instance variables initialize karta hai.",
      },
      {
        q: "super() kyun use karte hain inheritance mein?",
        options: [
          "Performance ke liye",
          "Parent class ke methods/constructor call karne ke liye",
          "Child class delete karne ke liye",
          "Private variables access karne ke liye",
        ],
        correct: 1,
        explain: "super() parent class reference deta hai. super().__init__() se parent ka constructor call karte hain jo parent ke instance variables initialize karta hai.",
      },
    ],
    mcqsEn: [
      {
        q: "What does the __init__ method do?",
        options: [
          "Deletes the class",
          "Automatically called when an object is created — initializes it",
          "Imports the class",
          "Frees memory",
        ],
        correct: 1,
        explain: "__init__ is the constructor — it is automatically called when an object is instantiated. It initializes instance variables.",
      },
    ],
    cheatsheet: [
      "class ClassName: — class define karo",
      "def __init__(self, ...): — constructor",
      "self.x = val — instance variable",
      "__x = val — private (name mangling)",
      "@property — getter as property",
      "class Child(Parent): — inheritance",
      "super().__init__() — parent constructor call",
      "def method(self): override — method override",
      "__str__ — print() ke liye string",
      "from abc import ABC, abstractmethod — abstract class",
    ],
    cheatsheetEn: [
      "class ClassName: — define a class",
      "def __init__(self, ...): — constructor",
      "self.x = val — instance variable",
      "__x = val — private attribute (name mangling)",
      "@property — expose getter as attribute",
      "class Child(Parent): — inheritance",
      "super().__init__() — call parent constructor",
      "Override a method by redefining it in child",
      "__str__ — string for print()",
      "ABC + @abstractmethod — abstract base class",
    ],
    revision: [
      "Class = blueprint, Object = instance",
      "__init__ = constructor (auto-call on creation)",
      "Inheritance: class Child(Parent) + super()",
      "Polymorphism = same method, different behavior",
      "__ prefix = private attribute",
    ],
    revisionEn: [
      "Class = blueprint, Object = instance of a class",
      "__init__ = constructor, runs automatically on creation",
      "Inheritance: class Child(Parent) + super().__init__()",
      "Polymorphism = same method name, different behavior",
      "__ prefix = private attribute (name mangling)",
    ],
  },

  {
    id: "py-libraries",
    title: "Python Libraries — NumPy, Pandas, Matplotlib",
    titleEn: "Python Libraries — NumPy, Pandas, Matplotlib",
    emoji: "📊",
    category: "Advanced",
    description: "Data science ki trifecta — NumPy arrays, Pandas DataFrames, Matplotlib graphs",
    descriptionEn: "The data science trifecta — NumPy arrays, Pandas DataFrames, Matplotlib graphs",
    sections: [
      {
        heading: "NumPy — Fast Numerical Computing",
        content: `NumPy (Numerical Python) arrays Python lists se 50x+ fast hote hain. Scientific computing ka foundation.`,
        code: `# pip install numpy
import numpy as np

# NumPy array banao
arr = np.array([1, 2, 3, 4, 5])
print(arr)           # [1 2 3 4 5]
print(arr.dtype)     # int64
print(arr.shape)     # (5,)

# Special arrays
zeros = np.zeros((3, 4))          # 3x4 zeros matrix
ones = np.ones((2, 3))            # 2x3 ones matrix
identity = np.eye(3)              # 3x3 identity matrix
range_arr = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)  # [0., .25, .5, .75, 1.]

# ─────────────────────────────────────
# 2D Arrays (Matrix)
matrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(matrix.shape)   # (3, 3)
print(matrix[1, 2])   # 6 (row 1, col 2)
print(matrix[0, :])   # [1 2 3] (row 0)
print(matrix[:, 1])   # [2 5 8] (col 1)

# ─────────────────────────────────────
# Vectorized operations (fast!)
arr = np.array([1, 2, 3, 4, 5])
print(arr * 2)         # [2 4 6 8 10] — har element pe
print(arr ** 2)        # [1 4 9 16 25]
print(arr + arr)       # [2 4 6 8 10]
print(np.sqrt(arr))    # [1. 1.41 1.73 2. 2.24]

# Statistics
data = np.array([85, 92, 78, 95, 88, 76, 90])
print(f"Mean: {np.mean(data):.1f}")
print(f"Median: {np.median(data):.1f}")
print(f"Std Dev: {np.std(data):.1f}")
print(f"Min: {np.min(data)}, Max: {np.max(data)}")

# Random
random_arr = np.random.randint(1, 100, size=(3, 3))
print(random_arr)`,
        language: "python",
        tip: "NumPy operations pure Python loops se 50-100x fast hain kyunki internally C mein implement hain. Large datasets ke liye hamesha NumPy use karo.",
      },
      {
        heading: "Pandas — Data Analysis",
        content: `Pandas = Python's Excel. DataFrames se tabular data ko easily analyze karo.`,
        code: `# pip install pandas
import pandas as pd

# DataFrame banao
data = {
    "Name": ["Rahul", "Priya", "Ali", "Sara", "Mohit"],
    "Age": [25, 22, 28, 24, 30],
    "Score": [85, 92, 78, 95, 88],
    "City": ["Delhi", "Mumbai", "Delhi", "Pune", "Mumbai"],
}
df = pd.DataFrame(data)
print(df)
print(df.shape)    # (5, 4) — rows, columns
print(df.dtypes)   # column data types
print(df.describe())  # statistics: mean, std, min, max

# Access data
print(df["Name"])              # column access
print(df[["Name", "Score"]])   # multiple columns
print(df.iloc[0])              # row by index
print(df.loc[df["City"] == "Delhi"])  # filter rows

# ─────────────────────────────────────
# Data Operations
# Sort
df_sorted = df.sort_values("Score", ascending=False)

# Filter
high_scorers = df[df["Score"] > 85]
delhi_students = df[df["City"] == "Delhi"]

# Add column
df["Grade"] = df["Score"].apply(
    lambda x: "A+" if x >= 90 else "A" if x >= 80 else "B"
)

# Group by
city_avg = df.groupby("City")["Score"].mean()
print(city_avg)

# Missing values
df["Phone"] = [None, "9876543210", None, "9111222333", None]
print(df.isnull().sum())        # count missing values
df["Phone"].fillna("Unknown", inplace=True)
df.dropna(inplace=True)         # rows with any NaN drop karo

# CSV read/write
df.to_csv("students.csv", index=False)
df_loaded = pd.read_csv("students.csv")`,
        language: "python",
      },
      {
        heading: "Matplotlib — Data Visualize Karo",
        content: `Matplotlib se beautiful graphs banao — line, bar, pie, scatter, histogram.`,
        code: `# pip install matplotlib
import matplotlib.pyplot as plt
import numpy as np

# Line plot
x = np.linspace(0, 10, 100)
plt.figure(figsize=(10, 4))
plt.plot(x, np.sin(x), label="sin(x)", color="blue")
plt.plot(x, np.cos(x), label="cos(x)", color="red", linestyle="--")
plt.title("Sine aur Cosine Functions")
plt.xlabel("X")
plt.ylabel("Y")
plt.legend()
plt.grid(True)
plt.show()

# Bar chart
subjects = ["Math", "Science", "English", "Hindi", "CS"]
scores = [85, 92, 78, 88, 95]
colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"]

plt.figure(figsize=(8, 5))
bars = plt.bar(subjects, scores, color=colors)
plt.bar_label(bars, fmt="%.0f")  # bar pe label
plt.title("Subject-wise Scores")
plt.ylabel("Score")
plt.ylim(0, 100)
plt.show()

# Pie chart
cities = ["Delhi", "Mumbai", "Bangalore", "Pune", "Others"]
population = [32, 25, 18, 12, 13]

plt.figure(figsize=(7, 7))
plt.pie(population, labels=cities, autopct="%1.1f%%", startangle=90)
plt.title("City Population Distribution")
plt.show()

# Histogram
data = np.random.normal(70, 10, 1000)  # 1000 random scores
plt.figure(figsize=(8, 5))
plt.hist(data, bins=30, color="skyblue", edgecolor="black")
plt.title("Score Distribution")
plt.xlabel("Score")
plt.ylabel("Frequency")
plt.show()`,
        language: "python",
        tip: "plt.figure(figsize=(width, height)) se plot ka size set karo. plt.savefig('plot.png') se image save karo.",
      },
    ],
    sectionsEn: [
      {
        heading: "NumPy — Fast Numerical Computing",
        content: `NumPy arrays are 50-100x faster than Python lists. They are the foundation of all scientific Python.`,
        code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
matrix = np.zeros((3, 3))      # 3x3 zeros
identity = np.eye(3)           # identity matrix

# Vectorized operations (no loops needed!)
arr * 2        # [2, 4, 6, 8, 10]
arr ** 2       # [1, 4, 9, 16, 25]
np.sqrt(arr)   # [1.0, 1.41, 1.73, 2.0, 2.24]

# Statistics
data = np.array([85, 92, 78, 95, 88])
np.mean(data)    # 87.6
np.std(data)     # 5.9
np.median(data)  # 88.0`,
        language: "python",
        tip: "NumPy operations are 50-100x faster than pure Python loops because they are implemented in C internally.",
      },
    ],
    mcqs: [
      {
        q: "Pandas mein df.groupby('City')['Score'].mean() kya karta hai?",
        options: [
          "Sab scores mean karta hai",
          "City ke basis pe group karta hai aur har city ka average score calculate",
          "Score column sort karta hai",
          "City filter karta hai",
        ],
        correct: 1,
        explain: "groupby('City') city ke basis pe data group karta hai. ['Score'].mean() har city group ka average score nikalta hai.",
      },
      {
        q: "NumPy arrays Python lists se kyun fast hain?",
        options: [
          "Smaller memory use karte hain",
          "Python mein implement hain",
          "C mein implement hain + contiguous memory + vectorization",
          "Multi-threading use karte hain",
        ],
        correct: 2,
        explain: "NumPy arrays internally C mein implement hain, contiguous memory use karte hain, aur SIMD vectorization se parallel operations hoti hain.",
      },
    ],
    mcqsEn: [
      {
        q: "What does df.groupby('City')['Score'].mean() do?",
        options: [
          "Calculates the mean of all scores",
          "Groups data by city and calculates average score per city",
          "Sorts by Score",
          "Filters by City",
        ],
        correct: 1,
        explain: "groupby('City') groups rows by city value. ['Score'].mean() then calculates the average score for each city group.",
      },
    ],
    cheatsheet: [
      "np.array([1,2,3]) — array banao",
      "np.zeros((m,n)) — zeros matrix",
      "arr * 2 — vectorized operation",
      "np.mean/std/median(arr) — statistics",
      "pd.DataFrame(dict) — DataFrame banao",
      "df['col'] — column access",
      "df[df['col'] > val] — filter rows",
      "df.groupby('col')['val'].mean() — group statistics",
      "df.to_csv() / pd.read_csv() — CSV I/O",
      "plt.plot() / plt.bar() / plt.pie() — graphs",
      "plt.show() — graph display karo",
    ],
    cheatsheetEn: [
      "np.array([1,2,3]) — create array",
      "np.zeros((m,n)) — zeros matrix",
      "arr * 2 — vectorized element-wise operation",
      "np.mean/std/median(arr) — statistics",
      "pd.DataFrame(dict) — create DataFrame",
      "df['col'] — access column",
      "df[df['col'] > val] — filter rows by condition",
      "df.groupby('col').mean() — group aggregation",
      "plt.plot() / plt.bar() / plt.hist() — plot types",
      "plt.show() — display the plot",
    ],
    revision: [
      "NumPy = fast arrays (C backend), vectorized ops",
      "Pandas = Excel for Python — DataFrame, Series",
      "df.groupby().agg() = group aur aggregate",
      "Matplotlib = graphs — plot/bar/pie/hist",
    ],
    revisionEn: [
      "NumPy = fast numerical arrays (C backend), vectorized ops",
      "Pandas = Python's Excel — DataFrame and Series",
      "df.groupby().agg() = group and aggregate data",
      "Matplotlib = visualization — plot/bar/pie/hist/scatter",
    ],
  },

  {
    id: "py-database",
    title: "Database Connectivity — MySQL",
    titleEn: "Database Connectivity — MySQL with Python",
    emoji: "🗄️",
    category: "Advanced",
    description: "Python se MySQL connect karo — CRUD operations, SQLAlchemy ORM",
    descriptionEn: "Connect Python to MySQL — CRUD operations, connection pooling, SQLAlchemy ORM",
    sections: [
      {
        heading: "MySQL se Connect karo — mysql-connector",
        content: `Python se MySQL database connect karo aur queries run karo.`,
        code: `# pip install mysql-connector-python

import mysql.connector
from mysql.connector import Error

# Connection
def get_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="yourpassword",
        database="school_db"
    )

# ─────────────────────────────────────
# Create table
def create_table():
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            age INT,
            score FLOAT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)
    conn.commit()
    cursor.close()
    conn.close()
    print("Table created!")

# ─────────────────────────────────────
# INSERT (parameterized query — SQL injection safe)
def insert_student(name, age, score):
    conn = get_connection()
    cursor = conn.cursor()
    query = "INSERT INTO students (name, age, score) VALUES (%s, %s, %s)"
    cursor.execute(query, (name, age, score))
    conn.commit()
    student_id = cursor.lastrowid
    cursor.close()
    conn.close()
    print(f"Student added with ID: {student_id}")
    return student_id

# SELECT
def get_all_students():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)  # dict format
    cursor.execute("SELECT * FROM students ORDER BY score DESC")
    students = cursor.fetchall()
    cursor.close()
    conn.close()
    return students

# UPDATE
def update_score(student_id, new_score):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE students SET score = %s WHERE id = %s",
        (new_score, student_id)
    )
    conn.commit()
    affected = cursor.rowcount
    cursor.close()
    conn.close()
    return affected

# DELETE
def delete_student(student_id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM students WHERE id = %s", (student_id,))
    conn.commit()
    cursor.close()
    conn.close()

# Use karo
insert_student("Rahul", 20, 85.5)
insert_student("Priya", 22, 92.0)
students = get_all_students()
for s in students:
    print(f"{s['id']}: {s['name']} — {s['score']}")`,
        language: "python",
        warning: "KABHI BAHI string formatting se queries mat banao: f\"SELECT * WHERE name='{name}'\". SQL Injection ka risk hai. Hamesha parameterized queries (%s) use karo.",
        tip: "dictionary=True cursor se fetchall() dicts return karta hai. s['name'] likhna s[0] se zyada readable hai.",
      },
      {
        heading: "SQLAlchemy — Python ORM",
        content: `SQLAlchemy se SQL queries likhne ki zaroorat nahi — Python classes se database control karo.`,
        code: `# pip install sqlalchemy pymysql

from sqlalchemy import create_engine, Column, Integer, String, Float, DateTime
from sqlalchemy.orm import declarative_base, Session
from datetime import datetime

# Database connection
engine = create_engine("mysql+pymysql://user:pass@localhost/school_db", echo=True)
Base = declarative_base()

# Model define karo
class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    age = Column(Integer)
    score = Column(Float)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"Student(id={self.id}, name={self.name}, score={self.score})"

# Tables create karo
Base.metadata.create_all(engine)

# CRUD with Session
with Session(engine) as session:
    # CREATE
    new_student = Student(name="Rahul", age=20, score=85.5)
    session.add(new_student)
    session.commit()

    # READ
    students = session.query(Student).order_by(Student.score.desc()).all()
    for s in students:
        print(s)

    # FILTER
    top_students = session.query(Student).filter(Student.score > 80).all()
    rahul = session.query(Student).filter_by(name="Rahul").first()

    # UPDATE
    rahul.score = 90.0
    session.commit()

    # DELETE
    session.delete(rahul)
    session.commit()`,
        language: "python",
        tip: "SQLAlchemy ORM ke saath SQL likhne ki zaroorat nahi. Models Python classes hote hain aur automatically SQL generate hoti hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "Connecting to MySQL — mysql-connector",
        content: `Use mysql-connector-python to connect to MySQL from Python.`,
        code: `# pip install mysql-connector-python
import mysql.connector

conn = mysql.connector.connect(
    host="localhost", user="root",
    password="secret", database="mydb"
)
cursor = conn.cursor(dictionary=True)

# Always use parameterized queries — NEVER string format!
cursor.execute(
    "INSERT INTO students (name, score) VALUES (%s, %s)",
    ("Rahul", 85.5)
)
conn.commit()

cursor.execute("SELECT * FROM students WHERE score > %s", (80,))
students = cursor.fetchall()
for s in students:
    print(s["name"], s["score"])

cursor.close()
conn.close()`,
        language: "python",
        warning: "NEVER use string formatting to build SQL queries: f\"WHERE name='{name}'\". This is vulnerable to SQL injection. Always use parameterized queries with %s.",
      },
    ],
    mcqs: [
      {
        q: "SQL Injection se bachne ka best tarika Python mein?",
        options: [
          "Input validate karo",
          "Parameterized queries (%s) use karo",
          "f-strings avoid karo",
          "Admin user avoid karo",
        ],
        correct: 1,
        explain: "Parameterized queries (%s placeholders) SQL injection se best protection dete hain. MySQL connector values ko automatically escape karta hai.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the best way to prevent SQL injection in Python?",
        options: [
          "Validate input manually",
          "Use parameterized queries with %s",
          "Avoid f-strings",
          "Use a non-admin user",
        ],
        correct: 1,
        explain: "Parameterized queries (%s placeholders) are the standard defense against SQL injection. The connector automatically escapes values.",
      },
    ],
    cheatsheet: [
      "pip install mysql-connector-python — install",
      "mysql.connector.connect(host, user, pass, db) — connect",
      "cursor = conn.cursor(dictionary=True) — dict results",
      "cursor.execute(query, (params,)) — run query",
      "conn.commit() — changes save karo",
      "cursor.fetchall() — sab results",
      "cursor.fetchone() — ek result",
      "cursor.lastrowid — last inserted ID",
      "Hamesha %s use karo, string format mat karo!",
    ],
    cheatsheetEn: [
      "pip install mysql-connector-python — install",
      "mysql.connector.connect(host, user, pass, db) — connect",
      "cursor = conn.cursor(dictionary=True) — dict results",
      "cursor.execute(sql, (params,)) — parameterized query",
      "conn.commit() — save changes",
      "cursor.fetchall() — get all results",
      "cursor.fetchone() — get first result",
      "Always use %s for parameters — never string format!",
    ],
    revision: [
      "mysql-connector-python = MySQL connection",
      "Parameterized queries (%s) = SQL injection protection",
      "conn.commit() = changes permanently save karo",
      "SQLAlchemy = ORM — Python classes se database control",
    ],
    revisionEn: [
      "mysql-connector-python = MySQL connectivity",
      "Parameterized queries (%s) = SQL injection protection",
      "conn.commit() = permanently save changes",
      "SQLAlchemy = ORM for database-as-Python-classes",
    ],
  },

  {
    id: "py-automation",
    title: "Automation with Python",
    titleEn: "Automation with Python",
    emoji: "🤖",
    category: "Advanced",
    description: "Web scraping, email automation, file automation, aur scheduled tasks Python se",
    descriptionEn: "Web scraping, email automation, file automation, and scheduled tasks with Python",
    sections: [
      {
        heading: "Web Scraping — Websites se Data Nikalo",
        content: `Web scraping se websites ka data automatically extract karo — products, prices, news sab kuch.`,
        code: `# pip install requests beautifulsoup4 selenium

import requests
from bs4 import BeautifulSoup

# Basic scraping
def scrape_page(url):
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0"
    }
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # error throw agar 404/500 etc
    return BeautifulSoup(response.content, "html.parser")

# Wikipedia example
soup = scrape_page("https://en.wikipedia.org/wiki/Python_(programming_language)")

# Title
title = soup.find("h1").text
print(f"Title: {title}")

# All headings
headings = soup.find_all("h2")
for h in headings[:5]:
    print(f"  - {h.text.strip()}")

# All links
links = soup.find_all("a", href=True)
for link in links[:5]:
    print(f"  {link.text}: {link['href']}")

# ─────────────────────────────────────
# Requests mein retry logic
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

session = requests.Session()
retry = Retry(total=3, backoff_factor=1)
adapter = HTTPAdapter(max_retries=retry)
session.mount("https://", adapter)

response = session.get("https://api.example.com/data")
data = response.json()

# ─────────────────────────────────────
# JSON API scraping
response = requests.get(
    "https://jsonplaceholder.typicode.com/posts",
    params={"userId": 1, "_limit": 5}
)
posts = response.json()
for post in posts:
    print(f"[{post['id']}] {post['title'][:50]}")`,
        language: "python",
        warning: "Web scraping se pehle website ki robots.txt check karo aur Terms of Service padho. Kuch sites scraping ban karti hain. Respect rate limits.",
      },
      {
        heading: "Email Automation + File Automation",
        content: `Emails automatically bhejo aur files/folders programmatically manage karo.`,
        code: `# EMAIL AUTOMATION
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(to_email, subject, body, attachment=None):
    msg = MIMEMultipart()
    msg["From"] = "sender@gmail.com"
    msg["To"] = to_email
    msg["Subject"] = subject

    msg.attach(MIMEText(body, "html"))  # HTML email

    # Gmail ke saath (app password use karo)
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login("sender@gmail.com", "app_password_here")
        smtp.send_message(msg)
    print(f"Email sent to {to_email}!")

# Use karo
send_email(
    "recipient@example.com",
    "Your Order Confirmation",
    "<h1>Order #12345 confirmed!</h1><p>Thank you for shopping!</p>"
)

# ─────────────────────────────────────
# FILE AUTOMATION
import os
import shutil
from pathlib import Path

# Folder mein sab files organize karo by extension
def organize_downloads(folder):
    categories = {
        "Images": [".jpg", ".jpeg", ".png", ".gif", ".webp"],
        "Documents": [".pdf", ".docx", ".txt", ".xlsx"],
        "Videos": [".mp4", ".avi", ".mkv", ".mov"],
        "Code": [".py", ".js", ".html", ".css"],
    }

    folder = Path(folder)
    for file in folder.iterdir():
        if file.is_file():
            ext = file.suffix.lower()
            # Kaunsi category mein hai?
            for category, extensions in categories.items():
                if ext in extensions:
                    dest = folder / category
                    dest.mkdir(exist_ok=True)
                    shutil.move(str(file), str(dest / file.name))
                    print(f"Moved: {file.name} → {category}/")
                    break

# organize_downloads("/home/user/Downloads")

# ─────────────────────────────────────
# Scheduled automation
import schedule
import time

def daily_backup():
    print("Daily backup running...")
    shutil.copytree("./data", f"./backups/backup_{time.strftime('%Y%m%d')}")

schedule.every().day.at("02:00").do(daily_backup)
schedule.every(30).minutes.do(lambda: print("Health check OK"))

while True:
    schedule.run_pending()
    time.sleep(60)`,
        language: "python",
        tip: "Gmail ke liye App Password generate karo (2FA enable hona chahiye) — normal password work nahi karega SMTP mein.",
      },
    ],
    sectionsEn: [
      {
        heading: "Web Scraping — Extract data from websites",
        content: `Web scraping automatically extracts data from websites — prices, news, products, etc.`,
        code: `# pip install requests beautifulsoup4
import requests
from bs4 import BeautifulSoup

response = requests.get("https://example.com")
soup = BeautifulSoup(response.content, "html.parser")

# Extract elements
title = soup.find("h1").text
all_links = soup.find_all("a", href=True)
price = soup.find("span", class_="price").text

# JSON API
data = requests.get("https://api.example.com/products").json()
for item in data:
    print(item["name"], item["price"])`,
        language: "python",
        warning: "Always check a site's robots.txt and Terms of Service before scraping. Respect rate limits and don't overload servers.",
      },
    ],
    mcqs: [
      {
        q: "BeautifulSoup kya karta hai?",
        options: [
          "HTML/CSS banata hai",
          "HTTP requests bhejta hai",
          "HTML/XML parse karta hai — web scraping ke liye",
          "Database queries karta hai",
        ],
        correct: 2,
        explain: "BeautifulSoup HTML/XML documents parse karta hai aur elements easily find karne ke tools deta hai (find, find_all). Requests library se page download karo phir BS4 se parse karo.",
      },
    ],
    mcqsEn: [
      {
        q: "What does BeautifulSoup do?",
        options: [
          "Creates HTML/CSS",
          "Sends HTTP requests",
          "Parses HTML/XML — enables web scraping",
          "Runs database queries",
        ],
        correct: 2,
        explain: "BeautifulSoup parses HTML/XML documents and provides easy tools to find elements. Use requests to download the page, then BS4 to parse it.",
      },
    ],
    cheatsheet: [
      "requests.get(url) — page download karo",
      "BeautifulSoup(html, 'html.parser') — parse karo",
      "soup.find('tag') — first matching element",
      "soup.find_all('tag') — sab matching elements",
      "element['attr'] — attribute value",
      "smtplib.SMTP_SSL — email bhejo",
      "schedule.every().day.at('09:00').do(func) — schedule",
      "shutil.move() / shutil.copytree() — file operations",
    ],
    cheatsheetEn: [
      "requests.get(url) — download a page",
      "BeautifulSoup(html, 'html.parser') — parse HTML",
      "soup.find('tag') — first matching element",
      "soup.find_all('tag', class_='x') — all matches",
      "element['href'] — get attribute value",
      "smtplib.SMTP_SSL — send emails",
      "schedule.every().day.at('09:00').do(func) — schedule tasks",
      "shutil.move() / copy() — file operations",
    ],
    revision: [
      "requests = HTTP, BeautifulSoup = HTML parse",
      "soup.find() = first, soup.find_all() = all matches",
      "smtplib = email send, App Password use karo Gmail pe",
      "schedule library = periodic automated tasks",
    ],
    revisionEn: [
      "requests = HTTP requests, BeautifulSoup = HTML parsing",
      "soup.find() = first match, soup.find_all() = all matches",
      "smtplib = send emails, use App Password for Gmail",
      "schedule library = run tasks at regular intervals",
    ],
  },

  {
    id: "py-ml-intro",
    title: "Machine Learning — Python ke saath Introduction",
    titleEn: "Machine Learning — Introduction with Python",
    emoji: "🧠",
    category: "Advanced",
    description: "Machine Learning concepts, scikit-learn se pehla ML model, data preprocessing",
    descriptionEn: "Machine Learning concepts, first ML model with scikit-learn, data preprocessing",
    sections: [
      {
        heading: "Machine Learning kya hai?",
        content: `Machine Learning (ML) ek AI technique hai jisme machines **data se khud seekhti hain** — explicitly program karne ki zaroorat nahi.

**ML ke types:**
- **Supervised Learning** — labelled data se seekhna (classification, regression)
  - Example: Spam filter — emails labelled "spam"/"not spam" se seekhna
- **Unsupervised Learning** — unlabelled data mein patterns dhundna
  - Example: Customer segmentation — customers ko groups mein todna
- **Reinforcement Learning** — rewards/penalties se seekhna
  - Example: Chess AI, robotics

**ML Workflow:**
1. Data Collect karo
2. Data Clean/Preprocess karo
3. Model Choose karo (algorithm)
4. Model Train karo
5. Model Evaluate karo
6. Model Deploy karo`,
        diagram: `
ML WORKFLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Raw Data
     │
     ▼
  Data Cleaning & Preprocessing
  (missing values, scaling, encoding)
     │
     ▼
  Feature Engineering
  (relevant features select karo)
     │
     ▼
  Train/Test Split (80/20)
     │
     ┌──────────────┘
     │
  Train Model         Test Data
  (80% data)            (20%)
     │                   │
     ▼                   ▼
  Trained Model ──► Evaluate
  (learns patterns)  (accuracy, etc.)
     │
     ▼
  Deploy & Predict

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# pip install scikit-learn pandas numpy matplotlib

# ─────────────────────────────────────
# FIRST ML MODEL — Iris Classification
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report
import pandas as pd

# 1. Data load karo
iris = load_iris()
X = iris.data       # Features (sepal/petal length/width)
y = iris.target     # Labels (0=Setosa, 1=Versicolor, 2=Virginica)

print(f"Dataset shape: {X.shape}")  # (150, 4)
print(f"Classes: {iris.target_names}")

# 2. Train/Test split (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 3. Feature scaling (important for distance-based models)
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)  # fit + transform
X_test = scaler.transform(X_test)        # sirf transform (not fit!)

# 4. Model banao aur train karo
model = KNeighborsClassifier(n_neighbors=5)
model.fit(X_train, y_train)

# 5. Predict karo
y_pred = model.predict(X_test)

# 6. Evaluate karo
accuracy = accuracy_score(y_test, y_pred)
print(f"Accuracy: {accuracy:.2%}")   # ~97%

print("Classification Report:")
print(classification_report(y_test, y_pred, target_names=iris.target_names))`,
        language: "python",
      },
      {
        heading: "Common ML Algorithms — Quick Overview",
        content: `scikit-learn mein bahut saare algorithms ready-made hain. Ek common interface hai — fit(), predict(), score().`,
        code: `from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.model_selection import cross_val_score
import numpy as np

# Sab models ka same interface hai!
models = {
    "Logistic Regression": LogisticRegression(),
    "Decision Tree": DecisionTreeClassifier(),
    "Random Forest": RandomForestClassifier(n_estimators=100),
    "Gradient Boosting": GradientBoostingClassifier(),
    "SVM": SVC(),
}

# Compare all models (cross-validation)
from sklearn.datasets import load_breast_cancer
X, y = load_breast_cancer(return_X_y=True)

for name, model in models.items():
    scores = cross_val_score(model, X, y, cv=5, scoring="accuracy")
    print(f"{name}: {scores.mean():.3f} (+/- {scores.std():.3f})")

# ─────────────────────────────────────
# LINEAR REGRESSION — price prediction
from sklearn.datasets import make_regression
import matplotlib.pyplot as plt

X, y = make_regression(n_samples=100, n_features=1, noise=20, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

lr = LinearRegression()
lr.fit(X_train, y_train)

print(f"R² Score: {lr.score(X_test, y_test):.3f}")

# ─────────────────────────────────────
# Data Preprocessing — real-world steps
import pandas as pd
from sklearn.preprocessing import LabelEncoder, OneHotEncoder

df = pd.DataFrame({
    "age": [25, None, 30, 22, 35],    # None = missing value
    "city": ["Delhi", "Mumbai", "Delhi", "Pune", "Mumbai"],
    "income": [50000, 70000, None, 45000, 90000],
    "bought": [1, 0, 1, 0, 1],
})

# Missing values handle karo
df["age"].fillna(df["age"].median(), inplace=True)
df["income"].fillna(df["income"].mean(), inplace=True)

# Categorical encoding
le = LabelEncoder()
df["city_encoded"] = le.fit_transform(df["city"])
print(df)`,
        language: "python",
        tip: "Hamesha X_test pe sirf transform() karo, fit_transform() mat karo. Scaler training data se seekhe, test data pe apply karo.",
      },
    ],
    sectionsEn: [
      {
        heading: "What is Machine Learning?",
        content: `Machine Learning (ML) is an AI technique where machines **learn from data** without being explicitly programmed for every case.

**ML Types:**
- **Supervised Learning** — learns from labelled data (classification, regression)
- **Unsupervised Learning** — finds patterns in unlabelled data (clustering)
- **Reinforcement Learning** — learns from rewards and penalties

**ML Workflow:**
1. Collect Data → 2. Clean & Preprocess → 3. Split Train/Test
→ 4. Train Model → 5. Evaluate → 6. Deploy`,
        code: `# First ML model with scikit-learn
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score

# Load dataset
X, y = load_iris(return_X_y=True)

# Split: 80% train, 20% test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Scale features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)   # only transform, not fit!

# Train model
model = KNeighborsClassifier(n_neighbors=5)
model.fit(X_train, y_train)

# Evaluate
print(f"Accuracy: {accuracy_score(y_test, model.predict(X_test)):.2%}")`,
        language: "python",
        tip: "On test data, always use only transform(), never fit_transform(). The scaler should learn parameters only from training data.",
      },
    ],
    mcqs: [
      {
        q: "Train/Test split kyun karte hain?",
        options: [
          "Code faster run karne ke liye",
          "Model unseen data pe evaluate karne ke liye — overfitting detect karo",
          "Memory save karne ke liye",
          "Data clean karne ke liye",
        ],
        correct: 1,
        explain: "Train set se model seekhta hai. Test set unseen data represent karta hai — real-world mein model kaise perform karega. Bina test set ke overfitting detect nahi hoti.",
      },
      {
        q: "StandardScaler kya karta hai?",
        options: [
          "Data sort karta hai",
          "Features ko scale karta hai (mean=0, std=1) — distance-based models ke liye zaroori",
          "Missing values fill karta hai",
          "Categories encode karta hai",
        ],
        correct: 1,
        explain: "StandardScaler har feature ko mean 0, standard deviation 1 pe scale karta hai. KNN, SVM jaese algorithms distance calculate karte hain — unscaled features dominance create karti hain.",
      },
    ],
    mcqsEn: [
      {
        q: "Why do we split data into train and test sets?",
        options: [
          "To make code run faster",
          "To evaluate the model on unseen data and detect overfitting",
          "To save memory",
          "To clean the data",
        ],
        correct: 1,
        explain: "The model learns from training data. The test set represents unseen real-world data. Without it, you cannot detect overfitting.",
      },
    ],
    cheatsheet: [
      "train_test_split(X, y, test_size=0.2) — split data",
      "scaler.fit_transform(X_train) — train pe fit + transform",
      "scaler.transform(X_test) — test pe sirf transform",
      "model.fit(X_train, y_train) — train karo",
      "model.predict(X_test) — predict karo",
      "accuracy_score(y_test, y_pred) — accuracy check",
      "cross_val_score(model, X, y, cv=5) — cross validation",
      "LabelEncoder — categorical → numbers",
      "fillna(median()) — missing values handle",
    ],
    cheatsheetEn: [
      "train_test_split(X, y, test_size=0.2) — split data",
      "scaler.fit_transform(X_train) — fit and scale train data",
      "scaler.transform(X_test) — scale test data (no fitting!)",
      "model.fit(X_train, y_train) — train the model",
      "model.predict(X_test) — make predictions",
      "accuracy_score(y_test, y_pred) — check accuracy",
      "cross_val_score(model, X, y, cv=5) — cross-validate",
      "LabelEncoder — encode categorical to numbers",
    ],
    revision: [
      "ML = data se seekhna (supervised/unsupervised/RL)",
      "Workflow: collect → clean → split → train → evaluate → deploy",
      "train_test_split = 80/20, fit only on train data",
      "scikit-learn: fit() → predict() → score() uniform API",
      "Preprocessing: scaling, encoding, missing values handle",
    ],
    revisionEn: [
      "ML = machines learn from data (supervised/unsupervised/RL)",
      "Workflow: collect → clean → split → train → evaluate → deploy",
      "train_test_split = 80/20, always fit only on training data",
      "scikit-learn: uniform API — fit() → predict() → score()",
      "Preprocessing: scaling, encoding, handling missing values",
    ],
  },
];

export const pythonInterviews = [
  {
    q: "Python mutable aur immutable types kya hain?",
    a: "Mutable = change ho sakta hai: list, dict, set. Immutable = change nahi ho sakta: int, float, str, tuple, bool. String immutable hai isliye methods new string return karte hain.",
    tags: ["basics", "types"],
  },
  {
    q: "Python mein *args aur **kwargs ka kya use hai?",
    a: "*args function ko variable number of positional arguments accept karne deta hai (tuple mein). **kwargs variable keyword arguments accept karta hai (dict mein). Combined: def func(*args, **kwargs).",
    tags: ["functions", "intermediate"],
  },
  {
    q: "Python mein list comprehension kya hai?",
    a: "List comprehension ek compact syntax hai naya list banane ke liye: [expression for item in iterable if condition]. Example: [x**2 for x in range(10) if x%2==0].",
    tags: ["lists", "basics"],
  },
  {
    q: "Python mein decorator kya hai?",
    a: "Decorator ek higher-order function hai jo doosre function ko wrap karta hai. @syntax use karte hain. @wraps(func) se metadata preserve karo. Logging, auth, timing ke liye use hota hai.",
    tags: ["advanced", "functions"],
  },
  {
    q: "Generator aur list mein kya fark hai?",
    a: "List sab values memory mein store karta hai. Generator ek ek value lazily yield karta hai — memory efficient. (x for x in list) generator expression hai.",
    tags: ["advanced", "memory"],
  },
  {
    q: "GIL (Global Interpreter Lock) kya hai?",
    a: "GIL CPython ka mutex hai jo ek time pe sirf ek thread ko Python bytecode execute karne deta hai. CPU-bound tasks ke liye multiprocessing use karo (multi-core). I/O-bound ke liye threading/asyncio theek hai.",
    tags: ["advanced", "concurrency"],
  },
];
