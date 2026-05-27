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
  {
    id: "py-regex",
    title: "Regular Expressions — Regex",
    titleEn: "Regular Expressions — Regex",
    emoji: "🔍",
    category: "Intermediate",
    description: "Python mein re module — patterns, groups, replace, aur practical use cases",
    descriptionEn: "Python re module — patterns, groups, replace, and practical use cases",
    sections: [
      {
        heading: "Regex kya hai aur kyun use karein?",
        content: `**Regular Expression (Regex)** = patterns define karne ka ek powerful way — text search, validate, aur replace karne ke liye.

**Kab use karein:**
- Email/phone validation
- Text se data extract karna
- String replace with patterns
- Log file parsing
- Form input sanitization

**Python mein:** \`import re\` — Standard library mein hai, koi install nahi.

**Raw strings use karo:** r"pattern" — backslash escape avoid hoti hai.

\`\`\`python
import re

# Basic search
text = "My phone is 03001234567 and email is ali@example.com"

# Phone dhundo
phone = re.search(r'0\d{10}', text)
print(phone.group())  # "03001234567"
\`\`\``,
      },
      {
        heading: "Regex patterns — cheat sheet",
        content: `**Character classes:**
- \`.\` — koi bhi character (newline ke siwa)
- \`\\d\` — digit (0-9)
- \`\\D\` — non-digit
- \`\\w\` — word character (a-z, A-Z, 0-9, _)
- \`\\W\` — non-word
- \`\\s\` — whitespace (space, tab, newline)
- \`\\S\` — non-whitespace
- \`[aeiou]\` — character set (any of these)
- \`[^aeiou]\` — negated set (none of these)
- \`[a-z]\` — range

**Quantifiers:**
- \`*\` — 0 ya zyada
- \`+\` — 1 ya zyada  
- \`?\` — 0 ya 1 (optional)
- \`{n}\` — exactly n times
- \`{n,m}\` — n to m times
- \`{n,}\` — n ya zyada

**Anchors:**
- \`^\` — string/line start
- \`$\` — string/line end
- \`\\b\` — word boundary

**Groups:**
- \`(abc)\` — capturing group
- \`(?:abc)\` — non-capturing group
- \`(?P<name>abc)\` — named group
- \`a|b\` — alternation (a ya b)`,
        code: `import re

# Email validation
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
re.match(email_pattern, "ali@example.com")  # match!
re.match(email_pattern, "not-an-email")     # None

# Pakistani phone
phone_pattern = r'^(?:0|\+92)3[0-9]{9}$'
re.match(phone_pattern, "03001234567")  # match!
re.match(phone_pattern, "+923001234567")  # match!

# URL extraction
url_pattern = r'https?://(?:www\.)?[\w.-]+\.[a-z]{2,}(?:/\S*)?'
text = "Visit https://python.org and http://www.example.com/path"
urls = re.findall(url_pattern, text)
# ['https://python.org', 'http://www.example.com/path']

# Date extraction with groups
date_pattern = r'(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})'
matches = re.findall(date_pattern, "Born 15/01/2000, married 20-06-2022")
# [('15', '01', '2000'), ('20', '06', '2022')]`,
      },
      {
        heading: "re module functions",
        content: `**Main functions:**

| Function | Use |
|----------|-----|
| \`re.match()\` | Start se match karo |
| \`re.search()\` | Anywhere match dhundo |
| \`re.findall()\` | Sab matches list mein |
| \`re.finditer()\` | Matches as iterator |
| \`re.sub()\` | Replace karo |
| \`re.split()\` | Pattern se split karo |
| \`re.compile()\` | Pattern pre-compile |

**Flags:**
- \`re.IGNORECASE\` / \`re.I\` — case-insensitive
- \`re.MULTILINE\` / \`re.M\` — ^ $ har line ke liye
- \`re.DOTALL\` / \`re.S\` — dot newline bhi match kare`,
        code: `import re

text = "Python is great. PYTHON is powerful. python rocks!"

# findall — all matches
re.findall(r'python', text, re.IGNORECASE)
# ['Python', 'PYTHON', 'python']

# sub — replace
clean = re.sub(r'\s+', ' ', "too   many    spaces")
# "too many spaces"

# Censoring
censored = re.sub(r'\b(bad|ugly|mean)\b', '***', text, flags=re.I)

# Replace with function
def double_number(match):
    return str(int(match.group()) * 2)

result = re.sub(r'\d+', double_number, "I have 5 cats and 3 dogs")
# "I have 10 cats and 6 dogs"

# split
parts = re.split(r'[,;|]+', "a,b;;c|d")
# ['a', 'b', 'c', 'd']

# Named groups
pattern = r'(?P<year>\d{4})-(?P<month>\d{2})-(?P<day>\d{2})'
match = re.search(pattern, "Today is 2024-01-15")
if match:
    print(match.group('year'))   # '2024'
    print(match.groupdict())     # {'year': '2024', 'month': '01', 'day': '15'}

# compile for performance (reuse karo)
EMAIL_RE = re.compile(
    r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
    re.IGNORECASE
)
emails = EMAIL_RE.findall(big_text)`,
      },
    ],
    cheatsheet: [
      "re.search(r'\\d+', text) — digit find karo",
      "re.findall(r'\\w+', text) — sab words",
      "re.sub(r'\\s+', ' ', text) — whitespace normalize",
      "re.compile(pattern, re.I) — case-insensitive",
      "match.group() — matched string",
      "match.groups() — capturing groups tuple",
      "(?P<name>...) — named group",
    ],
    revision: [
      "re.match() = start se, re.search() = anywhere",
      "findall = list, finditer = iterator (memory efficient)",
      "Raw strings r'' use karo — \\d \\w \\s etc.",
      "re.compile() = performance, reuse ke liye",
      "Flags: re.I (case), re.M (multiline), re.S (dotall)",
    ],
    revisionEn: [
      "re.match() = from start, re.search() = anywhere in string",
      "findall = list, finditer = iterator (memory efficient)",
      "Use raw strings r'' to avoid backslash escaping issues",
      "re.compile() = better performance when reusing patterns",
      "Flags: re.I (case-insensitive), re.M (multiline), re.S (dotall)",
    ],
  },
  {
    id: "py-requests",
    title: "Web APIs — requests Library",
    titleEn: "Web APIs — requests Library",
    emoji: "🌐",
    category: "Intermediate",
    description: "Python mein HTTP requests karna — GET, POST, headers, authentication, JSON",
    descriptionEn: "Making HTTP requests in Python — GET, POST, headers, authentication, JSON",
    sections: [
      {
        heading: "requests library kya hai?",
        content: `**requests** = Python ki most popular HTTP library — simple, human-friendly API.

**Install:**
\`\`\`bash
pip install requests
\`\`\`

**Kab use karein:**
- REST APIs consume karna
- Web scraping
- File download
- Webhook testing
- Microservices communication

**requests vs urllib:** requests much simpler — urllib Python standard library mein hai lekin verbose.`,
      },
      {
        heading: "GET aur POST requests",
        content: `**GET:** Data fetch karna — query parameters ke saath.
**POST:** Data bhejnna — JSON, form data, files.
**response object:** status_code, text, json(), headers, content.

**Always check:** response.raise_for_status() — 4xx/5xx pe exception throw karta hai.`,
        code: `import requests

# GET request
response = requests.get('https://api.github.com/users/python')
print(response.status_code)   # 200
data = response.json()        # dict
print(data['name'])           # "Python"

# Query parameters
params = {'q': 'python tutorial', 'language': 'python', 'per_page': 10}
response = requests.get('https://api.github.com/search/repositories', params=params)
# URL: .../search/repositories?q=python+tutorial&language=python&per_page=10

# POST request — JSON
payload = {'username': 'ali', 'password': 'secret123'}
response = requests.post(
    'https://api.example.com/auth/login',
    json=payload   # automatically sets Content-Type: application/json
)
token = response.json()['access_token']

# POST — form data
response = requests.post(
    'https://api.example.com/form',
    data={'name': 'Ali', 'email': 'ali@example.com'}
)

# Error handling
try:
    response = requests.get('https://api.example.com/users', timeout=10)
    response.raise_for_status()  # 4xx/5xx pe exception!
    data = response.json()
except requests.exceptions.Timeout:
    print("Request timed out!")
except requests.exceptions.HTTPError as e:
    print(f"HTTP Error: {e.response.status_code}")
except requests.exceptions.ConnectionError:
    print("Network error!")`,
      },
      {
        heading: "Headers, Authentication, aur Sessions",
        content: `**Headers:** Authorization, Content-Type, Accept, etc.
**Session:** Multiple requests ke liye — cookies aur headers share karta hai — efficient (connection reuse).
**Authentication:** Basic Auth, Bearer Token, API Key, OAuth.`,
        code: `import requests

# Custom headers
headers = {
    'Authorization': 'Bearer your-jwt-token-here',
    'Accept': 'application/json',
    'User-Agent': 'MyApp/1.0',
}
response = requests.get('https://api.example.com/profile', headers=headers)

# Basic Auth
response = requests.get(
    'https://api.example.com/protected',
    auth=('username', 'password')
)

# Session — multiple requests, shared config
session = requests.Session()
session.headers.update({'Authorization': 'Bearer ' + token})
session.headers.update({'Accept': 'application/json'})

# Ab sab requests pe yeh headers automatically jaayenge
user = session.get('https://api.example.com/user').json()
posts = session.get('https://api.example.com/user/posts').json()
session.post('https://api.example.com/posts', json={'title': 'New'})

session.close()  # cleanup

# File upload
with open('document.pdf', 'rb') as f:
    response = requests.post(
        'https://api.example.com/upload',
        files={'file': ('document.pdf', f, 'application/pdf')},
        headers={'Authorization': 'Bearer ' + token}
    )

# Download file
response = requests.get('https://example.com/large-file.zip', stream=True)
with open('downloaded.zip', 'wb') as f:
    for chunk in response.iter_content(chunk_size=8192):
        f.write(chunk)`,
      },
    ],
    cheatsheet: [
      "requests.get(url, params={...}, headers={...})",
      "requests.post(url, json={...}) — JSON body",
      "response.status_code — 200, 404, 500 etc.",
      "response.json() — parse JSON response",
      "response.raise_for_status() — exception on error",
      "requests.Session() — shared headers/cookies",
      "timeout=10 — connection timeout seconds",
    ],
    revision: [
      "params= → query string, json= → request body",
      "response.json() = dict, response.text = string",
      "raise_for_status() hamesha call karo production mein",
      "Session = connection reuse + shared state",
      "stream=True = large file download efficiently",
    ],
    revisionEn: [
      "params= → query string, json= → request body",
      "response.json() = dict, response.text = string",
      "Always call raise_for_status() in production",
      "Session = connection reuse + shared state/headers",
      "stream=True = efficient large file download",
    ],
  },
  {
    id: "py-testing",
    title: "Testing with pytest",
    titleEn: "Testing with pytest",
    emoji: "🧪",
    category: "Advanced",
    description: "Python mein automated testing — pytest, fixtures, mocking, coverage",
    descriptionEn: "Automated testing in Python — pytest, fixtures, mocking, coverage",
    sections: [
      {
        heading: "pytest kya hai? Kyon use karein?",
        content: `**pytest** = Python ka most popular testing framework — simple syntax, powerful features.

**Install:**
\`\`\`bash
pip install pytest pytest-cov
\`\`\`

**Test discovery:** pytest automatically dhundhta hai:
- \`test_*.py\` ya \`*_test.py\` files
- \`test_\` se shuru hone wale functions
- \`Test\` se shuru hone wali classes

**Kyon testing zaroori hai:**
- Bugs early pakro
- Code confidently refactor karo
- Documentation as code
- Regression prevent karo`,
      },
      {
        heading: "Basic tests aur assertions",
        content: `**assert** statement use karo — pytest descriptive error messages deta hai agar fail ho.

**Test types:**
- **Unit tests:** Individual function test karo
- **Integration tests:** Multiple components ek saath
- **Parametrized:** Same test multiple inputs ke saath

**pytest.raises():** Exception check karo.`,
        code: `# math_utils.py
def add(a: int, b: int) -> int:
    return a + b

def divide(a: float, b: float) -> float:
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b

def get_grade(score: int) -> str:
    if score >= 90: return "A"
    if score >= 80: return "B"
    if score >= 70: return "C"
    return "F"

# test_math_utils.py
import pytest
from math_utils import add, divide, get_grade

# Basic test
def test_add_positive_numbers():
    assert add(2, 3) == 5

def test_add_negative():
    assert add(-1, -1) == -2

def test_add_zero():
    assert add(5, 0) == 5

# Exception test
def test_divide_by_zero():
    with pytest.raises(ZeroDivisionError) as exc_info:
        divide(10, 0)
    assert "Cannot divide by zero" in str(exc_info.value)

# Parametrized — multiple inputs
@pytest.mark.parametrize("score,expected", [
    (95, "A"),
    (85, "B"),
    (75, "C"),
    (50, "F"),
    (90, "A"),   # boundary!
    (80, "B"),   # boundary!
])
def test_get_grade(score, expected):
    assert get_grade(score) == expected

# Run: pytest test_math_utils.py -v`,
      },
      {
        heading: "Fixtures aur Mocking",
        content: `**Fixtures:** Reusable test setup — @pytest.fixture decorator. Setup aur teardown automatic.

**yield fixture:** Setup → yield → teardown (finally block).

**Mocking:** unittest.mock — external dependencies replace karo (DB, API, email, etc.) — tests fast aur isolated rahein.`,
        code: `import pytest
from unittest.mock import MagicMock, patch, AsyncMock

# Fixture — reusable setup
@pytest.fixture
def sample_user():
    return {"id": 1, "name": "Ali", "email": "ali@test.com", "age": 25}

@pytest.fixture
def db_connection():
    # Setup
    conn = connect_test_db()
    conn.execute("CREATE TABLE users ...")
    
    yield conn  # test yahan run hota hai
    
    # Teardown (hamesha run hota hai — even if test fails)
    conn.execute("DROP TABLE users")
    conn.close()

def test_user_service(sample_user, db_connection):
    service = UserService(db_connection)
    result = service.create(sample_user)
    assert result['id'] is not None

# Mocking — external API mock karo
class UserService:
    def __init__(self, email_client):
        self.email = email_client
    
    def register(self, user_data):
        user = save_to_db(user_data)
        self.email.send_welcome(user['email'])  # external!
        return user

def test_register_sends_welcome_email():
    mock_email = MagicMock()
    service = UserService(mock_email)
    
    user = service.register({"name": "Ali", "email": "ali@test.com"})
    
    # Verify email was sent
    mock_email.send_welcome.assert_called_once_with("ali@test.com")

# patch decorator
@patch('myapp.requests.get')
def test_fetch_user(mock_get):
    mock_get.return_value.json.return_value = {"id": 1, "name": "Ali"}
    mock_get.return_value.status_code = 200
    
    result = fetch_user_from_api(1)
    assert result['name'] == "Ali"
    mock_get.assert_called_once()`,
      },
    ],
    cheatsheet: [
      "pytest — run all tests",
      "pytest -v — verbose output",
      "pytest test_file.py::test_function — specific test",
      "pytest --cov=myapp — coverage report",
      "@pytest.fixture — reusable setup/teardown",
      "@pytest.mark.parametrize — multiple inputs",
      "unittest.mock.MagicMock() — mock objects",
    ],
    revision: [
      "Test files: test_*.py, functions: test_",
      "assert use karo — pytest detailed errors deta hai",
      "Fixtures = reusable setup, yield = teardown",
      "Mock = external dependencies replace karo",
      "parametrize = same test, multiple data sets",
    ],
    revisionEn: [
      "Test files: test_*.py, functions start with test_",
      "Use assert — pytest gives detailed failure messages",
      "Fixtures = reusable setup, yield = teardown point",
      "Mock = replace external dependencies for isolation",
      "parametrize = same test logic with multiple data sets",
    ],
  },
  {
    id: "py-fastapi",
    title: "FastAPI — Modern Python APIs",
    titleEn: "FastAPI — Modern Python APIs",
    emoji: "⚡",
    category: "Advanced",
    description: "Python se fast, modern REST APIs banao — FastAPI, Pydantic, async support",
    descriptionEn: "Build fast, modern REST APIs with Python — FastAPI, Pydantic, async support",
    sections: [
      {
        heading: "FastAPI kya hai?",
        content: `**FastAPI** = Modern, fast Python web framework — APIs banana ke liye. Django/Flask se fast (performance mein NodeJS aur Go ke barabar).

**Kyun FastAPI:**
- **Automatic docs** — Swagger UI aur ReDoc built-in
- **Type hints** = validation automatic (Pydantic)
- **Async support** — asyncio native support
- **Fast performance** — Starlette + Pydantic ka combination
- **Python 3.7+**

**Install:**
\`\`\`bash
pip install fastapi uvicorn[standard]
\`\`\`

**Run:**
\`\`\`bash
uvicorn main:app --reload
\`\`\``,
      },
      {
        heading: "Routes, Path Parameters, aur Request Body",
        content: `**Path parameters:** URL mein {param} — type hints se automatic validation.
**Query parameters:** Function parameters jo path mein nahi — automatic query string se.
**Request body:** Pydantic model — JSON body automatic parse aur validate.

**Pydantic models:** Type hints + validation + serialization.`,
        code: `from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel, EmailStr, Field
from typing import Optional

app = FastAPI(title="My API", version="1.0.0")

# Pydantic model — request body aur response
class User(BaseModel):
    id: Optional[int] = None
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    age: int = Field(..., ge=0, le=150)
    tags: list[str] = []

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str = Field(..., min_length=8)

# GET — simple route
@app.get("/")
async def root():
    return {"message": "Hello World!"}

# Path parameter
@app.get("/users/{user_id}", response_model=User)
async def get_user(user_id: int):   # int = automatic validation
    user = db.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# Query parameters
@app.get("/users/")
async def list_users(
    page: int = Query(1, ge=1),
    limit: int = Query(10, ge=1, le=100),
    search: Optional[str] = None,
    active: bool = True,
):
    return db.get_users(page=page, limit=limit, search=search, active=active)

# POST — request body
@app.post("/users/", response_model=User, status_code=201)
async def create_user(user_data: UserCreate):
    existing = db.find_by_email(user_data.email)
    if existing:
        raise HTTPException(status_code=409, detail="Email already exists")
    return db.create_user(user_data.dict())

# PUT — update
@app.put("/users/{user_id}", response_model=User)
async def update_user(user_id: int, user_data: UserCreate):
    user = db.update_user(user_id, user_data.dict())
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

# DELETE
@app.delete("/users/{user_id}", status_code=204)
async def delete_user(user_id: int):
    if not db.delete_user(user_id):
        raise HTTPException(status_code=404, detail="User not found")`,
      },
      {
        heading: "Dependency Injection aur Middleware",
        content: `**Dependencies:** Reusable logic — authentication, DB connection, rate limiting.
**Middleware:** Har request pe run — logging, CORS, timing.
**Background tasks:** Response bhejne ke baad run karo.

**Auto-generated docs:** /docs (Swagger UI), /redoc visit karo!`,
        code: `from fastapi import Depends, Security, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://myapp.com"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db    # route use karta hai
    finally:
        db.close()  # cleanup

# Auth dependency
security = HTTPBearer()

async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db = Depends(get_db)
):
    token = credentials.credentials
    user = verify_jwt_token(token, db)
    if not user:
        raise HTTPException(status_code=401, detail="Invalid token")
    return user

# Protected route
@app.get("/profile", response_model=User)
async def get_profile(current_user = Depends(get_current_user)):
    return current_user

# Background task
def send_notification_task(email: str, message: str):
    # Background mein — response wait nahi karta
    email_client.send(email, message)

@app.post("/orders/")
async def create_order(
    order_data: OrderCreate,
    background_tasks: BackgroundTasks,
    current_user = Depends(get_current_user),
    db = Depends(get_db),
):
    order = db.create_order(order_data)
    background_tasks.add_task(
        send_notification_task,
        current_user.email,
        f"Order #{order.id} placed!"
    )
    return order`,
      },
    ],
    cheatsheet: [
      "uvicorn main:app --reload — dev server",
      "@app.get/post/put/delete('/path') — route define",
      "Path param: /users/{id}, func param: id: int",
      "Query param: def route(q: str = None)",
      "Body: def route(data: PydanticModel)",
      "raise HTTPException(status_code=404, detail='...')",
      "Depends(func) — dependency injection",
      "/docs — Swagger UI auto-generated",
    ],
    revision: [
      "Type hints = automatic validation + Swagger docs",
      "Pydantic = request/response schema + validation",
      "Depends() = reusable logic (auth, DB)",
      "async def = non-blocking routes",
      "HTTPException = proper API error responses",
    ],
    revisionEn: [
      "Type hints = automatic validation + Swagger docs",
      "Pydantic = request/response schema + validation",
      "Depends() = reusable logic (auth, DB connection)",
      "async def = non-blocking routes for better performance",
      "HTTPException = proper API error responses with status codes",
    ],
  },
  {
    id: "py-decorators-advanced",
    title: "Decorators — Deep Dive",
    titleEn: "Decorators — Deep Dive",
    emoji: "🎨",
    category: "Advanced",
    description: "Python decorators deeply — function, class decorators, parameters, stacking",
    descriptionEn: "Python decorators in depth — function, class decorators, parameters, stacking",
    sections: [
      {
        heading: "Decorator kya hai? Kaise kaam karta hai?",
        content: `**Decorator** = Higher-order function jo doosre function ko wrap karta hai — behavior add karo bina original modify kiye.

**@syntax** = syntactic sugar:
\`\`\`python
@decorator
def func(): pass
# Same as: func = decorator(func)
\`\`\`

**Kab use karein:**
- Logging / debugging
- Authentication / authorization
- Caching / memoization
- Timing / profiling
- Retry logic
- Input validation`,
      },
      {
        heading: "Function decorators banana",
        content: `**Basic structure:** Outer function (decorator) → inner function (wrapper) → return wrapper.

**@functools.wraps:** Zaroori! Original function ka naam, docstring, signature preserve karta hai. Bina iske __name__ "wrapper" hoga.

**Decorator stacking:** Multiple decorators — bottom se top execute hote hain (order matters!).`,
        code: `import functools
import time

# Basic decorator
def timer(func):
    @functools.wraps(func)   # metadata preserve!
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)   # original call!
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.4f}s")
        return result
    return wrapper

@timer
def slow_function(n: int) -> int:
    return sum(range(n))

slow_function(1_000_000)
# slow_function took 0.0234s

# Decorator with arguments
def retry(max_attempts: int = 3, exceptions=(Exception,)):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except exceptions as e:
                    if attempt == max_attempts:
                        raise
                    print(f"Attempt {attempt} failed: {e}. Retrying...")
        return wrapper
    return decorator

@retry(max_attempts=3, exceptions=(ConnectionError,))
def fetch_data(url: str) -> dict:
    return requests.get(url).json()

# Stacking decorators
def log_calls(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

def validate_positive(func):
    @functools.wraps(func)
    def wrapper(n: int, *args, **kwargs):
        if n < 0:
            raise ValueError(f"n must be positive, got {n}")
        return func(n, *args, **kwargs)
    return wrapper

@timer           # 3rd: outermost
@log_calls       # 2nd
@validate_positive  # 1st: runs first
def compute(n: int) -> int:
    return sum(range(n))`,
      },
      {
        heading: "Class decorators aur Real-world patterns",
        content: `**Class as decorator:** __call__ method define karo — object function ki tarah callable.
**Real patterns:** Authentication, rate limiting, caching, event registration.`,
        code: `# Class decorator
class RateLimit:
    def __init__(self, max_calls: int, period: float):
        self.max_calls = max_calls
        self.period = period
        self.calls = []
    
    def __call__(self, func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            now = time.time()
            # Purani calls remove karo
            self.calls = [t for t in self.calls if now - t < self.period]
            
            if len(self.calls) >= self.max_calls:
                raise Exception(f"Rate limit exceeded: {self.max_calls} calls per {self.period}s")
            
            self.calls.append(now)
            return func(*args, **kwargs)
        return wrapper

# 5 calls per minute allow
@RateLimit(max_calls=5, period=60)
def call_api(endpoint: str) -> dict:
    return requests.get(endpoint).json()

# Authorization decorator
def require_auth(roles=None):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(request, *args, **kwargs):
            if not request.user:
                raise PermissionError("Authentication required")
            if roles and request.user.role not in roles:
                raise PermissionError(f"Role required: {roles}")
            return func(request, *args, **kwargs)
        return wrapper
    return decorator

@require_auth(roles=['admin', 'superadmin'])
def delete_user(request, user_id: int):
    db.delete_user(user_id)

# Property decorator (built-in)
class Circle:
    def __init__(self, radius: float):
        self._radius = radius
    
    @property
    def radius(self) -> float:
        return self._radius
    
    @radius.setter
    def radius(self, value: float):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value
    
    @property
    def area(self) -> float:
        return 3.14159 * self._radius ** 2`,
      },
    ],
    cheatsheet: [
      "@functools.wraps(func) — hamesha use karo in decorators",
      "@decorator = func = decorator(func)",
      "wrapper(*args, **kwargs) — sab arguments forward karo",
      "Decorator with args = 3-level nesting",
      "@timer @log → timer wraps log-wrapped function",
      "@property — getter, @x.setter — setter",
    ],
    revision: [
      "Decorator = function jo function wrap kare",
      "@wraps preserve karta hai __name__, __doc__",
      "Args wala decorator = extra outer function",
      "Stacking: bottom decorator pehle apply hota hai",
      "Class decorator = __call__ method",
    ],
    revisionEn: [
      "Decorator = function that wraps another function",
      "@wraps preserves __name__, __doc__, signature",
      "Decorator with arguments needs an extra outer function",
      "Stacking: bottom decorator is applied first",
      "Class decorator = implement __call__ method",
    ],
  },
  {
    id: "py-async",
    title: "Async/Await — Asynchronous Python",
    titleEn: "Async/Await — Asynchronous Python",
    emoji: "⚡",
    category: "Advanced",
    description: "Python mein asyncio — coroutines, event loop, aur concurrent I/O operations",
    descriptionEn: "Python asyncio — coroutines, event loop, and concurrent I/O operations",
    sections: [
      {
        heading: "Async kya hai? Kyon use karein?",
        content: `**Synchronous:** Code ek ek karke chalta hai — koi I/O wait karo toh baaki sab ruk jaata hai.
**Asynchronous:** I/O wait ke waqt doosra kaam karo — same thread mein concurrency!

**Kab async useful hai:**
- Network requests (APIs, databases)
- File I/O
- WebSocket connections
- Web scraping (concurrent requests)

**Kab helpful NAHI:**
- CPU-heavy tasks (use multiprocessing instead)
- Simple scripts with one operation

**3 keywords:** \`async def\` = coroutine define, \`await\` = result wait karo, \`asyncio.run()\` = event loop start.`,
        code: `import asyncio
import time

# Synchronous — slow
def fetch_sync(url):
    time.sleep(2)  # API call simulate
    return f"Data from {url}"

# Sync: 3 calls = 6 seconds
start = time.time()
fetch_sync("api1"), fetch_sync("api2"), fetch_sync("api3")
print(f"Sync: {time.time()-start:.1f}s")  # 6.0s

# Asynchronous — fast!
async def fetch_async(url):
    await asyncio.sleep(2)  # non-blocking wait
    return f"Data from {url}"

async def main():
    start = time.time()
    # Sab ek saath run hote hain!
    results = await asyncio.gather(
        fetch_async("api1"),
        fetch_async("api2"),
        fetch_async("api3"),
    )
    print(f"Async: {time.time()-start:.1f}s")  # 2.0s
    print(results)

asyncio.run(main())`,
      },
      {
        heading: "asyncio.gather, Tasks, aur Timeouts",
        content: `**asyncio.gather():** Multiple coroutines concurrently run karo — sab results wait karo.
**asyncio.create_task():** Background mein task start karo — await baad mein.
**asyncio.wait_for():** Timeout add karo — asyncio.TimeoutError raise karta hai.
**asyncio.as_completed():** Pehle jo complete ho uska result pehle milega.`,
        code: `import asyncio
import aiohttp  # async HTTP client (pip install aiohttp)

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.json()

# Multiple URLs concurrently
async def fetch_all(urls):
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks, return_exceptions=True)
    return results

# Timeout
async def fetch_with_timeout(url):
    try:
        async with aiohttp.ClientSession() as session:
            result = await asyncio.wait_for(
                fetch_url(session, url),
                timeout=5.0  # 5 seconds max
            )
            return result
    except asyncio.TimeoutError:
        print(f"Timeout: {url}")
        return None

# Create background task
async def main():
    task = asyncio.create_task(long_operation())  # background shuru
    
    # Meanwhile kuch aur karo
    await quick_operation()
    
    result = await task  # ab wait karo

# as_completed — first result first
async def race():
    coros = [fetch_url(url) for url in urls]
    for coro in asyncio.as_completed(coros):
        result = await coro   # pehle jo aaya
        process(result)`,
      },
      {
        heading: "Async Context Managers aur Generators",
        content: `**async with:** Async resources manage karo (DB connections, HTTP sessions, files).
**async for:** Async iterators — streaming data, WebSocket messages, async DB queries.
**asynccontextmanager:** Custom async context manager decorator se banana.`,
        code: `import asyncio
from contextlib import asynccontextmanager

# Async context manager
@asynccontextmanager
async def db_transaction(db):
    async with db.begin() as txn:
        try:
            yield txn
            await txn.commit()
        except Exception:
            await txn.rollback()
            raise

async def transfer_money(db, from_id, to_id, amount):
    async with db_transaction(db) as txn:
        await txn.execute(
            "UPDATE accounts SET balance=balance-? WHERE id=?",
            (amount, from_id)
        )
        await txn.execute(
            "UPDATE accounts SET balance=balance+? WHERE id=?",
            (amount, to_id)
        )

# Async generator — streaming
async def stream_users(db):
    async with db.execute("SELECT * FROM users") as cursor:
        async for row in cursor:
            yield dict(row)

async def process_all():
    async for user in stream_users(db):
        await process_user(user)

# asyncio.Queue — producer/consumer pattern
async def producer(queue):
    for i in range(10):
        await queue.put(f"task-{i}")
        await asyncio.sleep(0.1)

async def consumer(queue):
    while True:
        task = await queue.get()
        await process(task)
        queue.task_done()`,
      },
    ],
    cheatsheet: [
      "async def func() — coroutine define karo",
      "await coroutine() — result wait karo",
      "asyncio.run(main()) — event loop start",
      "asyncio.gather(*coros) — concurrent run",
      "asyncio.create_task(coro) — background task",
      "asyncio.wait_for(coro, timeout=5) — timeout add karo",
      "async with, async for — async resources",
    ],
    revision: [
      "Async = I/O wait mein dusra kaam karo",
      "gather() = concurrent, ek saath sab wait karo",
      "create_task() = fire and forget (background)",
      "aiohttp = async HTTP, asyncpg = async PostgreSQL",
      "CPU-heavy tasks ke liye multiprocessing use karo",
    ],
    revisionEn: [
      "Async = do other work while waiting for I/O",
      "gather() = run concurrently, wait for all",
      "create_task() = background task, await later",
      "aiohttp = async HTTP, asyncpg = async PostgreSQL",
      "For CPU-heavy work use multiprocessing, not asyncio",
    ],
  },
  {
    id: "py-type-hints",
    title: "Type Hints — mypy aur Type Safety",
    titleEn: "Type Hints — mypy and Type Safety",
    emoji: "🔒",
    category: "Intermediate",
    description: "Python type annotations — mypy, generics, Protocol, TypeVar, runtime validation",
    descriptionEn: "Python type annotations — mypy, generics, Protocol, TypeVar, runtime validation",
    sections: [
      {
        heading: "Type hints kya hain aur kyun?",
        content: `**Type hints** = Python variables aur functions pe type declare karo — documentation + IDE support + mypy static checking.

**Install mypy:**
\`\`\`bash
pip install mypy
mypy my_file.py
\`\`\`

**Kyun use karein:**
- Bugs compile-time pe pakro (runtime se pehle)
- IDE autocomplete improve hota hai
- Code documentation automatically ban jaati hai
- Large codebases mein refactoring safe ho jaati hai

**Python still dynamic:** Type hints optional hain — runtime pe enforce nahi hoti (jab tak pydantic/beartype use na karo).`,
        code: `# Basic type hints
name: str = "Ali"
age: int = 25
height: float = 5.9
active: bool = True

# Function annotations
def greet(name: str, times: int = 1) -> str:
    return f"Hello {name}! " * times

def process_users(users: list[dict]) -> None:
    for user in users:
        print(user['name'])

# None return
def log(message: str) -> None:
    print(f"[LOG] {message}")

# Optional — None ho sakta hai
from typing import Optional
def find_user(user_id: int) -> Optional[dict]:
    return db.get(user_id)  # None ya dict

# Python 3.10+ shorthand
def find_user(user_id: int) -> dict | None:  # Optional ke barabar
    return db.get(user_id)`,
      },
      {
        heading: "Collections, Union, Generics, aur TypeVar",
        content: `**Collection types:** list[str], dict[str, int], tuple[int, str], set[float].
**Union:** Multiple types allow karo — str | int (Python 3.10+) ya Union[str, int].
**TypeVar:** Generic functions jo any type ke saath kaam karein.
**Literal:** Specific values restrict karo.
**TypedDict:** Dict structure define karo.`,
        code: `from typing import TypeVar, Generic, Literal, TypedDict, Callable, Any

# TypedDict
class UserDict(TypedDict):
    id: int
    name: str
    email: str
    age: int

def create_user(data: UserDict) -> UserDict:
    return {**data, 'id': generate_id()}

# TypeVar — generic function
T = TypeVar('T')

def first_item(items: list[T]) -> T | None:
    return items[0] if items else None

first_item([1, 2, 3])      # returns int
first_item(["a", "b"])     # returns str
first_item([])             # returns None

# Generic class
class Stack(Generic[T]):
    def __init__(self) -> None:
        self._items: list[T] = []
    
    def push(self, item: T) -> None:
        self._items.append(item)
    
    def pop(self) -> T:
        return self._items.pop()

stack: Stack[int] = Stack()
stack.push(42)

# Literal types
Direction = Literal["north", "south", "east", "west"]
def move(direction: Direction, steps: int) -> None: ...

# Callable type
def apply(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)`,
      },
      {
        heading: "Protocol — Structural Subtyping",
        content: `**Protocol** = Duck typing + type checking — class explicitly inherit karne ki zarurat nahi, bas methods/attributes match karein.

**@runtime_checkable:** isinstance() ke saath check karo.

**Kab Protocol vs ABC:**
- Protocol = structural (duck typing) — third-party classes bhi fit ho sakti hain
- ABC = nominal (explicit inheritance) — stricter contract`,
        code: `from typing import Protocol, runtime_checkable

@runtime_checkable
class Drawable(Protocol):
    def draw(self) -> None: ...
    def get_area(self) -> float: ...

# Koi bhi class jo yeh methods implement kare — Drawable hai!
class Circle:
    def __init__(self, radius: float):
        self.radius = radius
    
    def draw(self) -> None:
        print(f"Drawing circle r={self.radius}")
    
    def get_area(self) -> float:
        return 3.14 * self.radius ** 2

class Square:
    def __init__(self, side: float):
        self.side = side
    
    def draw(self) -> None:
        print(f"Drawing square s={self.side}")
    
    def get_area(self) -> float:
        return self.side ** 2

def render_all(shapes: list[Drawable]) -> None:
    for shape in shapes:
        shape.draw()
        print(f"Area: {shape.get_area()}")

shapes: list[Drawable] = [Circle(5), Square(3)]
render_all(shapes)  # Works! No inheritance needed

# Runtime check
print(isinstance(Circle(5), Drawable))  # True`,
      },
    ],
    cheatsheet: [
      "def f(x: int) -> str — parameter + return type",
      "Optional[str] = str | None",
      "list[int], dict[str, int], tuple[int, str]",
      "TypeVar('T') — generic type variable",
      "TypedDict — typed dictionary structure",
      "Protocol — structural subtyping (duck typing)",
      "mypy file.py — static type check",
    ],
    revision: [
      "Type hints = documentation + mypy + IDE support",
      "Optional[T] = T ya None",
      "TypeVar = generic function any type ke saath",
      "Protocol = structural typing — no inheritance needed",
      "Python 3.10+: X | Y instead of Union[X, Y]",
    ],
    revisionEn: [
      "Type hints = documentation + mypy + better IDE support",
      "Optional[T] = T or None",
      "TypeVar = generic function works with any type",
      "Protocol = structural typing — no explicit inheritance",
      "Python 3.10+: X | Y shorthand instead of Union[X, Y]",
    ],
  },
  {
    id: "py-design-patterns",
    title: "Design Patterns in Python",
    titleEn: "Design Patterns in Python",
    emoji: "🏗️",
    category: "Advanced",
    description: "Creational, structural, aur behavioral patterns — Python mein practical implementation",
    descriptionEn: "Creational, structural, and behavioral patterns — practical Python implementation",
    sections: [
      {
        heading: "Creational Patterns",
        content: `**Design patterns** = Common problems ke proven solutions — reusable blueprints.

**3 categories:**
- **Creational:** Object creation — Singleton, Factory, Builder
- **Structural:** Objects compose karein — Adapter, Decorator, Facade
- **Behavioral:** Objects communicate — Observer, Strategy, Command

**Singleton:** Ek hi instance throughout program.
**Factory:** Object creation logic centralize karo.
**Builder:** Complex objects step by step banao.`,
        code: `# Singleton — thread-safe
from threading import Lock

class DatabaseConnection:
    _instance = None
    _lock = Lock()
    
    def __new__(cls):
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:  # double-check!
                    cls._instance = super().__new__(cls)
                    cls._instance._init_connection()
        return cls._instance
    
    def _init_connection(self):
        print("Connecting to database...")

db1 = DatabaseConnection()
db2 = DatabaseConnection()
print(db1 is db2)  # True — same instance!

# Factory Pattern
class Animal:
    def speak(self): ...

class Dog(Animal):
    def speak(self): return "Woof!"

class Cat(Animal):
    def speak(self): return "Meow!"

class AnimalFactory:
    _registry = {"dog": Dog, "cat": Cat}
    
    @classmethod
    def create(cls, animal_type: str) -> Animal:
        animal_class = cls._registry.get(animal_type.lower())
        if not animal_class:
            raise ValueError(f"Unknown animal: {animal_type}")
        return animal_class()

dog = AnimalFactory.create("dog")
print(dog.speak())  # "Woof!"

# Builder Pattern
class QueryBuilder:
    def __init__(self):
        self._table = ""
        self._conditions = []
        self._limit = None
    
    def from_table(self, table: str) -> 'QueryBuilder':
        self._table = table
        return self  # method chaining!
    
    def where(self, condition: str) -> 'QueryBuilder':
        self._conditions.append(condition)
        return self
    
    def limit(self, n: int) -> 'QueryBuilder':
        self._limit = n
        return self
    
    def build(self) -> str:
        q = f"SELECT * FROM {self._table}"
        if self._conditions:
            q += " WHERE " + " AND ".join(self._conditions)
        if self._limit:
            q += f" LIMIT {self._limit}"
        return q

query = (QueryBuilder()
    .from_table("users")
    .where("age > 18")
    .where("active = 1")
    .limit(10)
    .build())`,
      },
      {
        heading: "Structural Patterns",
        content: `**Adapter:** Incompatible interfaces compatible banao.
**Decorator:** Object ko wrap karke functionality add karo (Python @decorator se alag — design pattern).
**Facade:** Complex subsystem ke liye simple interface.
**Proxy:** Real object ke access ke beech logic add karo.`,
        code: `# Adapter Pattern
class OldPaymentAPI:
    def make_payment(self, amount, currency):
        print(f"Paying {amount} {currency}")

class NewPaymentInterface:
    def pay(self, amount_usd: float): ...

class PaymentAdapter(NewPaymentInterface):
    def __init__(self, old_api: OldPaymentAPI):
        self._api = old_api
    
    def pay(self, amount_usd: float):
        self._api.make_payment(amount_usd * 285, "PKR")  # convert

adapter = PaymentAdapter(OldPaymentAPI())
adapter.pay(10.0)  # "Paying 2850.0 PKR"

# Facade Pattern
class EmailService:
    def send(self, to, subject, body): ...

class SMSService:
    def send_sms(self, phone, message): ...

class PushService:
    def push(self, user_id, message): ...

class NotificationFacade:
    """Complex notification system ka simple interface"""
    def __init__(self):
        self._email = EmailService()
        self._sms = SMSService()
        self._push = PushService()
    
    def notify_user(self, user, message):
        self._email.send(user.email, "Notification", message)
        self._sms.send_sms(user.phone, message)
        self._push.push(user.id, message)

# One call, sab notifications!
facade = NotificationFacade()
facade.notify_user(user, "Order shipped!")`,
      },
      {
        heading: "Behavioral Patterns",
        content: `**Observer:** Event system — subscribers ko notify karo.
**Strategy:** Algorithm runtime pe swap karo.
**Command:** Request encapsulate karo — undo/redo possible.`,
        code: `# Observer Pattern (Event System)
from typing import Protocol

class EventListener(Protocol):
    def on_event(self, event: str, data: dict) -> None: ...

class EventBus:
    def __init__(self):
        self._listeners: dict[str, list] = {}
    
    def subscribe(self, event: str, listener) -> None:
        self._listeners.setdefault(event, []).append(listener)
    
    def publish(self, event: str, data: dict) -> None:
        for listener in self._listeners.get(event, []):
            listener.on_event(event, data)

bus = EventBus()
bus.subscribe("order.placed", email_service)
bus.subscribe("order.placed", inventory_service)
bus.publish("order.placed", {"order_id": 123, "amount": 5000})

# Strategy Pattern
from abc import ABC, abstractmethod

class SortStrategy(ABC):
    @abstractmethod
    def sort(self, data: list) -> list: ...

class BubbleSort(SortStrategy):
    def sort(self, data): return bubble_sort(data)

class MergeSort(SortStrategy):
    def sort(self, data): return merge_sort(data)

class Sorter:
    def __init__(self, strategy: SortStrategy):
        self._strategy = strategy
    
    def sort(self, data: list) -> list:
        return self._strategy.sort(data)
    
    def set_strategy(self, strategy: SortStrategy):
        self._strategy = strategy

sorter = Sorter(BubbleSort())
sorter.sort([3,1,2])

# Runtime mein strategy change!
sorter.set_strategy(MergeSort())
sorter.sort([3,1,2])`,
      },
    ],
    cheatsheet: [
      "Singleton: _instance class variable + __new__ override",
      "Factory: create() classmethod + registry dict",
      "Builder: method chaining, return self",
      "Observer: subscribe/publish — event-driven",
      "Strategy: algorithm encapsulate, runtime swap",
      "Adapter: old interface → new interface wrap",
      "Facade: complex subsystem → simple interface",
    ],
    revision: [
      "Creational: Singleton, Factory, Builder",
      "Structural: Adapter, Facade, Proxy, Decorator",
      "Behavioral: Observer, Strategy, Command",
      "Builder = method chaining — return self",
      "Observer = event bus — loose coupling",
    ],
    revisionEn: [
      "Creational: Singleton, Factory, Builder",
      "Structural: Adapter, Facade, Proxy, Decorator",
      "Behavioral: Observer, Strategy, Command",
      "Builder = method chaining — return self each time",
      "Observer = event bus — loose coupling between components",
    ],
  },
];

export const pythonInterviews = [
  {
    id: 1,
    level: "Beginner" as const,
    question: "Python mutable aur immutable types kya hain?",
    answer: "Mutable = change ho sakta hai: list, dict, set. Immutable = change nahi ho sakta: int, float, str, tuple, bool. String immutable hai isliye methods new string return karte hain.",
    tags: ["basics", "types"],
  },
  {
    id: 2,
    level: "Beginner" as const,
    question: "Python mein *args aur **kwargs ka kya use hai?",
    answer: "*args function ko variable number of positional arguments accept karne deta hai (tuple mein). **kwargs variable keyword arguments accept karta hai (dict mein). Combined: def func(*args, **kwargs).",
    tags: ["functions"],
  },
  {
    id: 3,
    level: "Beginner" as const,
    question: "Python mein list comprehension kya hai?",
    answer: "List comprehension ek compact syntax hai naya list banane ke liye: [expression for item in iterable if condition]. Example: [x**2 for x in range(10) if x%2==0].",
    tags: ["lists"],
  },
  {
    id: 4,
    level: "Advanced" as const,
    question: "Python mein decorator kya hai?",
    answer: "Decorator ek higher-order function hai jo doosre function ko wrap karta hai. @syntax use karte hain. @wraps(func) se metadata preserve karo. Logging, auth, timing ke liye use hota hai.",
    tags: ["advanced", "functions"],
  },
  {
    id: 5,
    level: "Intermediate" as const,
    question: "Generator aur list mein kya fark hai?",
    answer: "List sab values memory mein store karta hai. Generator ek ek value lazily yield karta hai — memory efficient. (x for x in list) generator expression hai.",
    tags: ["advanced", "memory"],
  },
  {
    id: 6,
    level: "Advanced" as const,
    question: "GIL (Global Interpreter Lock) kya hai?",
    answer: "GIL CPython ka mutex hai jo ek time pe sirf ek thread ko Python bytecode execute karne deta hai. CPU-bound tasks ke liye multiprocessing use karo (multi-core). I/O-bound ke liye threading/asyncio theek hai.",
    tags: ["advanced", "concurrency"],
  },
  {
    id: 7,
    level: "Intermediate" as const,
    question: "Python mein OOP — class, inheritance, super() kaise kaam karta hai?",
    answer: `Python mein OOP fully supported hai. **class** keyword se class banao. **__init__** constructor hai. **super()** parent class ke methods call karne ke liye. **self** = current instance.

**Inheritance:** class Child(Parent): — Child parent ke sab methods aur properties inherit karta hai.
**Multiple inheritance:** class C(A, B): — Python MRO (Method Resolution Order) use karta hai — C3 linearization.
**@property:** getter/setter banana bina property access style mein.`,
    code: `class Animal:
    def __init__(self, name: str, sound: str):
        self.name = name
        self._sound = sound   # _ = protected convention
    
    def speak(self) -> str:
        return f"{self.name} says {self._sound}"
    
    @property
    def info(self) -> str:
        return f"Animal: {self.name}"

class Dog(Animal):
    def __init__(self, name: str, breed: str):
        super().__init__(name, "Woof!")   # parent constructor call
        self.breed = breed
    
    def speak(self) -> str:   # override
        return f"{super().speak()} (I'm a {self.breed})"
    
    def fetch(self) -> str:
        return f"{self.name} fetches the ball!"

dog = Dog("Max", "Labrador")
dog.speak()   # "Max says Woof! (I'm a Labrador)"
dog.info      # "Animal: Max" (inherited property)
isinstance(dog, Dog)     # True
isinstance(dog, Animal)  # True (inheritance chain)`,
  },
  {
    id: 8,
    level: "Intermediate" as const,
    question: "Python mein dunder (magic) methods kya hain?",
    answer: `Dunder = double underscore se shuru aur khatam hone wale methods. Python internally call karta hai certain operations pe.

**Important dunders:**
- **__init__** — constructor
- **__str__** — str(obj) ya print ke liye (user-friendly)
- **__repr__** — repr(obj) — developer ke liye, eval-able ideally
- **__len__** — len(obj)
- **__eq__**, **__lt__**, **__gt__** — comparison operators
- **__add__**, **__mul__** — arithmetic operators
- **__getitem__**, **__setitem__** — obj[key] access
- **__iter__**, **__next__** — iteration protocol
- **__enter__**, **__exit__** — context manager (with statement)
- **__call__** — obj() jaise call karo`,
    code: `class Vector:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y
    
    def __repr__(self) -> str:
        return f"Vector({self.x}, {self.y})"
    
    def __str__(self) -> str:
        return f"({self.x}, {self.y})"
    
    def __add__(self, other: 'Vector') -> 'Vector':
        return Vector(self.x + other.x, self.y + other.y)
    
    def __mul__(self, scalar: float) -> 'Vector':
        return Vector(self.x * scalar, self.y * scalar)
    
    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Vector): return NotImplemented
        return self.x == other.x and self.y == other.y
    
    def __len__(self) -> int:
        return 2   # 2D vector
    
    def __abs__(self) -> float:
        return (self.x**2 + self.y**2) ** 0.5

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)   # (4, 6)
print(v1 * 3)    # (3, 6)
abs(v1)          # 2.236...
repr(v1)         # "Vector(1, 2)"`,
  },
  {
    id: 9,
    level: "Intermediate" as const,
    question: "Python mein @classmethod aur @staticmethod mein kya fark hai?",
    answer: `**Instance method:** self receive karta hai — specific instance pe operate karta hai.
**@classmethod:** cls receive karta hai — class pe operate karta hai, alternative constructors banana.
**@staticmethod:** Na self, na cls — utility function — sirf logically class se related.

**Kab kya use karein:**
- Instance method: instance state access/modify karna ho
- @classmethod: alternative constructor (factory), class-level state
- @staticmethod: helper function jo class se logically related ho lekin state nahi chahiye`,
    code: `class Date:
    def __init__(self, year: int, month: int, day: int):
        self.year = year
        self.month = month
        self.day = day
    
    def __str__(self) -> str:
        return f"{self.year}-{self.month:02d}-{self.day:02d}"
    
    # @classmethod — alternative constructor
    @classmethod
    def from_string(cls, date_string: str) -> 'Date':
        year, month, day = map(int, date_string.split('-'))
        return cls(year, month, day)   # cls = Date
    
    @classmethod
    def today(cls) -> 'Date':
        from datetime import date
        d = date.today()
        return cls(d.year, d.month, d.day)
    
    # @staticmethod — pure utility
    @staticmethod
    def is_valid_date(year: int, month: int, day: int) -> bool:
        return 1 <= month <= 12 and 1 <= day <= 31
    
    # Instance method
    def is_leap_year(self) -> bool:
        return self.year % 4 == 0 and (self.year % 100 != 0 or self.year % 400 == 0)

d1 = Date.from_string("2024-01-15")   # classmethod
d2 = Date.today()                      # classmethod
Date.is_valid_date(2024, 13, 1)        # staticmethod — False`,
  },
  {
    id: 10,
    level: "Intermediate" as const,
    question: "Python mein context managers kya hain? __enter__ aur __exit__ kaise kaam karte hain?",
    answer: `Context manager = **with** statement ke saath use hone wala object. Resource management ke liye — guaranteed cleanup.

**__enter__:** with block shuru hone pe call hota hai, as ke baad variable ko assign hota hai.
**__exit__:** with block khatam hone pe call hota hai — even exception pe! Return True = exception suppress karo.

**@contextmanager:** Generator se context manager banana — yield = __enter__ point.

**Common uses:** File handling, DB transactions, locks, timers, mocking`,
    code: `# Custom context manager (class-based)
class Timer:
    def __enter__(self):
        import time
        self.start = time.perf_counter()
        return self   # 'as' variable
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        self.elapsed = time.perf_counter() - self.start
        print(f"Took: {self.elapsed:.4f}s")
        return False   # don't suppress exceptions

with Timer() as t:
    result = sum(range(1_000_000))
# Prints: "Took: 0.0234s"

# @contextmanager decorator (simpler)
from contextlib import contextmanager

@contextmanager
def managed_db_transaction(conn):
    try:
        yield conn.cursor()    # __enter__ = give cursor
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    finally:
        pass   # connection close by caller

with managed_db_transaction(conn) as cursor:
    cursor.execute("INSERT INTO users ...")

# Multiple context managers
with open('in.txt') as fin, open('out.txt', 'w') as fout:
    fout.write(fin.read())`,
  },
  {
    id: 11,
    level: "Beginner" as const,
    question: "Python mein exception handling kaise karein? Custom exceptions kaise banate hain?",
    answer: `**try-except:** Exception handle karo gracefully. **else:** Koi exception nahi toh. **finally:** Hamesha run karo (cleanup).

**Exception hierarchy:** BaseException → Exception → various subclasses.
**raise:** Exception throw karo. **raise from:** Original exception chain rakho.

**Custom exceptions:** Exception class extend karo — better error messages aur extra data.`,
    code: `# Basic exception handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Division by zero!")
except (TypeError, ValueError) as e:
    print(f"Type/Value error: {e}")
except Exception as e:
    print(f"Unexpected error: {type(e).__name__}: {e}")
else:
    print("No exception!")   # try succeed hone pe
finally:
    print("Always runs!")    # cleanup

# Multiple exceptions
def safe_parse(text: str) -> float:
    try:
        return float(text)
    except ValueError:
        raise ValueError(f"'{text}' valid number nahi hai")
    except TypeError:
        raise TypeError("Input string hona chahiye")

# Custom exception hierarchy
class AppError(Exception):
    """Base exception for our app"""
    pass

class ValidationError(AppError):
    def __init__(self, field: str, message: str):
        self.field = field
        self.message = message
        super().__init__(f"Validation failed on '{field}': {message}")

class NotFoundError(AppError):
    def __init__(self, resource: str, id: int):
        super().__init__(f"{resource} with id {id} not found")
        self.resource = resource
        self.id = id

# Re-raise with context
try:
    user = get_user(id)
except DatabaseError as e:
    raise NotFoundError("User", id) from e   # chain preserved`,
  },
  {
    id: 12,
    level: "Intermediate" as const,
    question: "Python mein lambda, map, filter, zip kya hain?",
    answer: `**lambda:** Anonymous function — ek expression. Long functions ke liye def prefer karo.
**map():** Har element pe function apply karo — lazy iterator return karta hai.
**filter():** Condition se elements select karo — lazy iterator.
**zip():** Multiple iterables ko pair karo — shortest pe stop karta hai.

**Modern Python:** List comprehensions zyada readable hain map/filter se. zip_longest bhi available hai.`,
    code: `# lambda
square = lambda x: x ** 2
add = lambda x, y: x + y
square(5)   # 25

# Practical lambda use
students = [{"name": "Ali", "grade": 85}, {"name": "Sara", "grade": 92}]
sorted_students = sorted(students, key=lambda s: s['grade'], reverse=True)

# map — transform each element
nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, nums))   # [1, 4, 9, 16, 25]
# Better with comprehension:
squared = [x**2 for x in nums]

# map with multiple iterables
a = [1, 2, 3]
b = [10, 20, 30]
sums = list(map(lambda x, y: x + y, a, b))   # [11, 22, 33]

# filter — select elements
evens = list(filter(lambda x: x % 2 == 0, range(10)))   # [0,2,4,6,8]
# Better with comprehension:
evens = [x for x in range(10) if x % 2 == 0]

# zip — pair elements
names = ["Ali", "Sara", "Raza"]
scores = [85, 92, 78]
paired = list(zip(names, scores))   # [("Ali",85), ("Sara",92), ("Raza",78)]

for name, score in zip(names, scores):
    print(f"{name}: {score}")

# unzip
unzipped_names, unzipped_scores = zip(*paired)`,
  },
  {
    id: 13,
    level: "Intermediate" as const,
    question: "Python mein iterators aur generators mein kya fark hai?",
    answer: `**Iterable:** Iterate kiya ja sakta hai — __iter__ method hota hai (list, tuple, str, dict).
**Iterator:** Ek ek value deta hai — __iter__ + __next__ methods. StopIteration raise karta hai end pe.
**Generator:** Iterator banane ka easy way — yield keyword use karo. Memory efficient.

**Generator expressions:** (x for x in range) — list comprehension ki tarah lekin lazy.

**Fayde generators ke:**
- Memory efficient — sab values ek saath store nahi
- Infinite sequences possible
- Pipeline create karo`,
    code: `# Custom iterator (class-based)
class CountUp:
    def __init__(self, start: int, end: int):
        self.current = start
        self.end = end
    
    def __iter__(self):
        return self
    
    def __next__(self) -> int:
        if self.current > self.end:
            raise StopIteration
        val = self.current
        self.current += 1
        return val

for n in CountUp(1, 5):
    print(n)   # 1, 2, 3, 4, 5

# Generator (much simpler!)
def count_up(start: int, end: int):
    for i in range(start, end + 1):
        yield i   # pause, return value

gen = count_up(1, 5)
next(gen)   # 1
next(gen)   # 2

# Infinite generator
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib = fibonacci()
[next(fib) for _ in range(8)]   # [0,1,1,2,3,5,8,13]

# Generator pipeline (memory efficient!)
def read_large_file(path):
    with open(path) as f:
        for line in f:
            yield line.strip()

def filter_empty(lines):
    for line in lines:
        if line:
            yield line

# Chain karo — no intermediate list!
lines = filter_empty(read_large_file('huge.txt'))`,
  },
  {
    id: 14,
    level: "Intermediate" as const,
    question: "Python mein type hints aur dataclasses kya hain?",
    answer: `**Type hints (PEP 484):** Code documentation + IDE support + static analysis (mypy). Runtime pe enforce nahi hote (by default).

**from __future__ import annotations** — string annotations, forward references allow.

**typing module:** List, Dict, Optional, Union, Tuple, Any, Callable, TypeVar, Generic.

**Python 3.10+:** X | Y = Union[X, Y], better syntax.

**@dataclass:** Boilerplate reduce karo — __init__, __repr__, __eq__ automatically generate hote hain.`,
    code: `# Type hints
from typing import Optional, Union, List, Dict, Callable, TypeVar

def greet(name: str, times: int = 1) -> str:
    return f"Hello, {name}! " * times

def process(data: list[int]) -> dict[str, float]:   # Python 3.9+
    return {"sum": sum(data), "avg": sum(data) / len(data)}

# Optional (can be None)
def find_user(id: int) -> Optional[dict]:   # Optional[X] = X | None
    ...

# Union types
def format_value(val: int | str | float) -> str:   # Python 3.10+
    return str(val)

# Callable
def apply(func: Callable[[int, int], int], a: int, b: int) -> int:
    return func(a, b)

# @dataclass
from dataclasses import dataclass, field

@dataclass
class User:
    name: str
    email: str
    age: int = 0
    tags: list[str] = field(default_factory=list)  # mutable default!
    
    def is_adult(self) -> bool:
        return self.age >= 18

@dataclass(frozen=True)  # immutable!
class Point:
    x: float
    y: float
    
    def distance(self) -> float:
        return (self.x**2 + self.y**2) ** 0.5

user = User("Ali", "ali@test.com", age=25)
print(user)   # User(name='Ali', email='ali@test.com', age=25, tags=[])
p = Point(3.0, 4.0)
p.distance()  # 5.0`,
  },
  {
    id: 15,
    level: "Advanced" as const,
    question: "Python mein async/await aur asyncio kya hai?",
    answer: `Python mein asyncio = single thread mein concurrent I/O operations. Thread se alag — cooperative multitasking (coroutines).

**Coroutine:** async def se banao — await pe suspend hota hai, doosra coroutine run karta hai.
**Event loop:** Coroutines schedule aur run karta hai.
**asyncio.gather():** Multiple coroutines parallel run karo.
**asyncio.create_task():** Background task banao.

**Kab use karein:** Network requests, file I/O, database queries — I/O-bound tasks.
**Kab nahi:** CPU-bound (multiprocessing use karo).`,
    code: `import asyncio
import aiohttp   # async HTTP client

# Basic coroutine
async def greet(name: str, delay: float) -> str:
    await asyncio.sleep(delay)   # non-blocking!
    return f"Hello, {name}!"

# Run
result = asyncio.run(greet("Ali", 1.0))

# Parallel execution (gather)
async def fetch_data(session, url: str) -> dict:
    async with session.get(url) as response:
        return await response.json()

async def main():
    async with aiohttp.ClientSession() as session:
        # Sab ek saath fetch karo! (not sequential)
        results = await asyncio.gather(
            fetch_data(session, 'https://api.example.com/users'),
            fetch_data(session, 'https://api.example.com/posts'),
            fetch_data(session, 'https://api.example.com/comments'),
        )
        users, posts, comments = results

asyncio.run(main())

# Tasks (background)
async def background_job():
    while True:
        await asyncio.sleep(60)
        await cleanup_old_records()

async def app():
    task = asyncio.create_task(background_job())   # background!
    await serve_requests()   # main work
    task.cancel()

# Async context manager
class AsyncDB:
    async def __aenter__(self):
        self.conn = await connect_db()
        return self.conn
    
    async def __aexit__(self, *args):
        await self.conn.close()

async with AsyncDB() as conn:
    await conn.execute("SELECT ...")`,
  },
  {
    id: 16,
    level: "Intermediate" as const,
    question: "Python mein file handling modes aur JSON processing kaise karein?",
    answer: `**File modes:** r (read), w (write, truncate), a (append), r+ (read+write), b (binary), x (exclusive create).

**with statement:** File automatically close hoti hai — hamesha use karo.
**pathlib.Path:** Modern file path handling (Python 3.4+).

**JSON:** json module — dumps() = dict→string, loads() = string→dict, dump() = file write, load() = file read.

**CSV:** csv module — DictReader/DictWriter headers ke saath.`,
    code: `import json
from pathlib import Path

# File reading
with open('data.txt', 'r', encoding='utf-8') as f:
    content = f.read()          # whole file
    # ya
    lines = f.readlines()       # list of lines
    # ya
    for line in f:              # line by line (memory efficient)
        process(line.strip())

# File writing
with open('output.txt', 'w', encoding='utf-8') as f:
    f.write("Hello, World!\n")
    f.writelines(["line1\n", "line2\n"])

# Append
with open('log.txt', 'a') as f:
    f.write(f"[{datetime.now()}] Event occurred\n")

# pathlib (modern, recommended)
path = Path('data') / 'users' / 'config.json'
path.exists()           # True/False
path.suffix             # '.json'
path.stem               # 'config'
path.read_text()        # read as string
path.write_text("content")

# JSON
data = {"name": "Ali", "age": 25, "tags": ["python", "dev"]}

# dict → JSON string
json_str = json.dumps(data, indent=2, ensure_ascii=False)

# JSON string → dict
parsed = json.loads(json_str)

# File read/write
with open('data.json', 'w') as f:
    json.dump(data, f, indent=2)

with open('data.json') as f:
    loaded = json.load(f)

# CSV
import csv
with open('users.csv', 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row['name'], row['email'])`,
  },
  {
    id: 17,
    level: "Intermediate" as const,
    question: "Python mein regular expressions (regex) kaise use karein?",
    answer: `**re module:** Python mein regex ke liye. r"" = raw string (backslash escape nahi hota).

**Common functions:**
- **re.match()** — string ke shuru se match karo
- **re.search()** — kahi bhi match dhundo
- **re.findall()** — sab matches list mein
- **re.sub()** — replace karo
- **re.compile()** — pattern compile karo (reuse ke liye)

**Common patterns:**
- \\d = digit, \\w = word char, \\s = whitespace
- . = any char, * = 0+, + = 1+, ? = 0 or 1
- ^ = start, $ = end, [] = character class
- () = group, | = or, {n,m} = repetition`,
    code: `import re

# Basic search
text = "Contact us at ali@example.com or sara@test.pk"
email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'

# search — pehla match
match = re.search(email_pattern, text)
if match:
    print(match.group())   # "ali@example.com"
    print(match.start())   # position

# findall — sab matches
emails = re.findall(email_pattern, text)
# ['ali@example.com', 'sara@test.pk']

# Pakistani phone number
phone_pattern = r'^(?:0|\+92)3[0-9]{9}$'
re.match(phone_pattern, "03001234567")   # match object (truthy)
re.match(phone_pattern, "12345")         # None (falsy)

# sub — replace
result = re.sub(r'\s+', ' ', "hello    world  python")
# "hello world python"

result = re.sub(r'(https?://\\S+)', r'<a href="\\1">\\1</a>', text)

# Groups
date_pattern = r'(\d{4})-(\d{2})-(\d{2})'
match = re.search(date_pattern, "Born on 2000-01-15")
if match:
    year, month, day = match.groups()   # ('2000', '01', '15')

# Named groups
pattern = r'(?P<year>\d{4})-(?P<month>\d{2})-(?P<day>\d{2})'
match = re.search(pattern, "2000-01-15")
match.group('year')    # '2000'
match.groupdict()      # {'year': '2000', 'month': '01', 'day': '15'}

# compile — reuse ke liye (performance)
EMAIL_RE = re.compile(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', re.IGNORECASE)
EMAIL_RE.findall(big_text)`,
  },
  {
    id: 18,
    level: "Intermediate" as const,
    question: "Python mein sorting kaise karte hain? key parameter aur custom sort?",
    answer: `Python mein **sorted()** (new list) aur **list.sort()** (in-place) dono Timsort algorithm use karte hain — O(n log n), stable.

**key parameter:** Sorting ke liye key function — element ko transform karo comparison ke liye.
**reverse=True:** Descending order.
**operator.attrgetter/itemgetter:** Common key functions.
**functools.cmp_to_key:** Old-style comparison function ko key mein convert karo.

**Multi-level sort:** Tuple key use karo.`,
    code: `from operator import itemgetter, attrgetter
from dataclasses import dataclass

# Basic sorting
nums = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_nums = sorted(nums)            # [1,1,2,3,4,5,6,9] — new list
nums.sort()                           # in-place, same result
sorted(nums, reverse=True)            # descending

# Sorting strings (case-insensitive)
words = ["Banana", "apple", "Cherry"]
sorted(words, key=str.lower)          # ['apple', 'Banana', 'Cherry']

# Sorting by length
sorted(words, key=len)                # shortest first

# Sorting dicts/objects
students = [
    {"name": "Ali", "grade": 85, "age": 20},
    {"name": "Sara", "grade": 92, "age": 19},
    {"name": "Raza", "grade": 85, "age": 21},
]

# By grade descending
sorted(students, key=lambda s: s['grade'], reverse=True)

# itemgetter (faster than lambda)
sorted(students, key=itemgetter('grade'))

# Multi-level sort — by grade DESC, then name ASC
sorted(students, key=lambda s: (-s['grade'], s['name']))

# @dataclass objects
@dataclass
class Student:
    name: str
    grade: int

students = [Student("Ali", 85), Student("Sara", 92)]
sorted(students, key=attrgetter('grade'))

# Stable sort — same key → original order preserved
# Python's sort is always stable!`,
  },
  {
    id: 19,
    level: "Intermediate" as const,
    question: "Python mein enumerate, zip, aur unpacking kya hain?",
    answer: `**enumerate():** Index aur value dono chahiye — range(len(list)) se better.
**zip():** Multiple iterables simultaneously iterate karo.
*** unpacking:** Sequence ko arguments mein unpack karo.
**** unpacking:** Dict ko keyword arguments mein.
**Walrus operator (:=):** Assignment expression (Python 3.8+) — assign karo aur use karo ek expression mein.`,
    code: `# enumerate — index + value
fruits = ["apple", "banana", "cherry"]

# Bad (avoid)
for i in range(len(fruits)):
    print(i, fruits[i])

# Good
for i, fruit in enumerate(fruits):
    print(i, fruit)

enumerate(fruits, start=1)   # 1-based index

# zip — pair multiple lists
names = ["Ali", "Sara", "Raza"]
scores = [85, 92, 78]
grades = ["B", "A", "C"]

for name, score, grade in zip(names, scores, grades):
    print(f"{name}: {score} ({grade})")

# dict from two lists
mapping = dict(zip(names, scores))   # {"Ali": 85, "Sara": 92, "Raza": 78}

# zip_longest — unequal lengths
from itertools import zip_longest
for a, b in zip_longest([1,2,3], [10,20], fillvalue=0):
    print(a, b)   # (1,10), (2,20), (3,0)

# Unpacking
first, *rest = [1, 2, 3, 4, 5]
# first=1, rest=[2,3,4,5]

*init, last = [1, 2, 3, 4, 5]
# init=[1,2,3,4], last=5

a, b, *_ = [1, 2, 3, 4, 5]   # ignore rest

# Walrus operator (:=) Python 3.8+
# Assign and use in same expression
if (n := len(names)) > 5:
    print(f"Too many names: {n}")

# Useful in while loops
while chunk := file.read(1024):   # read + check in one step
    process(chunk)`,
  },
  {
    id: 20,
    level: "Advanced" as const,
    question: "Python mein metaclasses aur __init_subclass__ kya hain?",
    answer: `**Metaclass:** Class ka class — jaise objects instances of classes, classes instances of metaclasses. type default metaclass hai.

**Kab use karein:**
- ORM (Django Models metaclass use karta hai)
- API enforcement — subclasses pe constraints
- Automatic registration
- Singleton

**__init_subclass__:** Metaclass se simpler alternative — jab class subclassed ho.

**abc.ABC aur @abstractmethod:** Abstract base classes — methods define karo jo subclasses ko implement karne hain.`,
    code: `from abc import ABC, abstractmethod

# Abstract base class
class Shape(ABC):
    @abstractmethod
    def area(self) -> float:
        """Calculate area"""
    
    @abstractmethod
    def perimeter(self) -> float:
        """Calculate perimeter"""
    
    def describe(self) -> str:
        return f"{self.__class__.__name__}: area={self.area():.2f}"

class Circle(Shape):
    def __init__(self, radius: float):
        self.radius = radius
    
    def area(self) -> float:
        return 3.14159 * self.radius ** 2
    
    def perimeter(self) -> float:
        return 2 * 3.14159 * self.radius

# Shape()  # ❌ TypeError: Can't instantiate abstract class
Circle(5).area()   # ✅ 78.54

# __init_subclass__ — plugin registration
class Plugin:
    _registry: dict = {}
    
    def __init_subclass__(cls, plugin_name: str = "", **kwargs):
        super().__init_subclass__(**kwargs)
        if plugin_name:
            Plugin._registry[plugin_name] = cls
            print(f"Registered: {plugin_name}")

class EmailPlugin(Plugin, plugin_name="email"):
    def send(self, msg): ...

class SMSPlugin(Plugin, plugin_name="sms"):
    def send(self, msg): ...

Plugin._registry   # {'email': EmailPlugin, 'sms': SMSPlugin}

# Metaclass — custom type
class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connected = False

db1 = Database()
db2 = Database()
db1 is db2   # True — same instance!`,
  },
  {
    id: 21,
    level: "Advanced" as const,
    question: "Python mein functools module ke important functions kya hain?",
    answer: `**functools** = higher-order functions aur callables pe operations.

**Important:**
- **@lru_cache** — memoization with LRU eviction
- **@cache** — unbounded cache (Python 3.9+)
- **partial()** — function ke kuch arguments fix karo
- **reduce()** — sequence ko single value mein fold karo
- **@total_ordering** — comparison methods automatically derive karo
- **@wraps** — decorator mein metadata preserve karo`,
    code: `from functools import lru_cache, partial, reduce, total_ordering, wraps, cache

# @lru_cache — automatic memoization
@lru_cache(maxsize=128)
def fibonacci(n: int) -> int:
    if n < 2: return n
    return fibonacci(n-1) + fibonacci(n-2)

fibonacci(50)   # instant (cached!)
fibonacci.cache_info()   # CacheInfo(hits=48, misses=51, ...)
fibonacci.cache_clear()  # cache saaf karo

# @cache (Python 3.9+ — unbounded)
@cache
def expensive_calc(n: int) -> int:
    return sum(range(n))

# partial — fix arguments
def power(base: float, exp: float) -> float:
    return base ** exp

square = partial(power, exp=2)    # exp fixed!
cube   = partial(power, exp=3)
square(4)   # 16
cube(3)     # 27

# Real use: configure functions
import requests
from functools import partial

get_json = partial(requests.get, headers={"Accept": "application/json"})

# reduce — fold
from functools import reduce
product = reduce(lambda x, y: x * y, [1, 2, 3, 4, 5])   # 120
flatten = reduce(lambda a, b: a + b, [[1,2],[3,4],[5]])   # [1,2,3,4,5]

# @wraps — preserve function metadata
def my_decorator(func):
    @wraps(func)   # preserves name, docstring, etc.
    def wrapper(*args, **kwargs):
        print("Before!")
        result = func(*args, **kwargs)
        print("After!")
        return result
    return wrapper

@my_decorator
def greet(name: str) -> str:
    """Greet someone"""
    return f"Hello, {name}!"

greet.__name__   # "greet" (not "wrapper"!)
greet.__doc__    # "Greet someone"`,
  },
  {
    id: 22,
    level: "Beginner" as const,
    question: "Python mein string formatting methods kaunse hain? f-strings vs format()?",
    answer: `**String formatting methods:**
1. **% formatting** (old style) — C-style, avoid
2. **.format()** — more powerful, Python 2/3
3. **f-strings (f"")** — fastest, most readable, Python 3.6+
4. **Template strings** — safe substitution (user input ke liye)

**f-strings features:**
- Expressions embed karo
- Format specifiers
- Debugging with =
- Multiline`,
    code: `name = "Ali"
score = 85.567
pi = 3.14159265

# Old % style (avoid)
"Hello, %s! Score: %.2f" % (name, score)

# .format()
"Hello, {}! Score: {:.2f}".format(name, score)
"{name} scored {score}".format(name=name, score=score)

# f-strings (best!)
f"Hello, {name}! Score: {score:.2f}"    # "Hello, Ali! Score: 85.57"

# Expressions in f-strings
f"2 + 2 = {2 + 2}"                      # "2 + 2 = 4"
f"Upper: {name.upper()}"                # "Upper: ALI"
f"{'Yes' if score > 90 else 'No'}"      # "No"

# Format specifiers
f"{pi:.4f}"        # "3.1416" — 4 decimal
f"{score:.0f}"     # "86" — no decimal
f"{1234567:,}"     # "1,234,567" — thousands sep
f"{0.875:.1%}"     # "87.5%" — percentage
f"{42:05d}"        # "00042" — zero-pad
f"{42:>10}"        # "        42" — right align (10 wide)
f"{42:<10}"        # "42        " — left align
f"{42:^10}"        # "    42    " — center

# Debug with = (Python 3.8+)
x = 42
f"{x=}"            # "x=42"
f"{name=}"         # "name='Ali'"

# Multiline f-string
query = (
    f"SELECT * FROM users "
    f"WHERE id = {user_id} "
    f"AND active = {1}"
)`,
  },
  {
    id: 23,
    level: "Advanced" as const,
    question: "Python mein multiprocessing aur threading mein kya fark hai?",
    answer: `**GIL ki wajah se:**
- **Threading:** I/O-bound tasks ke liye — waiting ke waqt doosri threads run karti hain
- **Multiprocessing:** CPU-bound tasks ke liye — alag processes, alag memory, GIL affect nahi karta

**asyncio vs threading vs multiprocessing:**
- asyncio = I/O-bound, single thread, cooperative
- threading = I/O-bound, multiple threads, preemptive
- multiprocessing = CPU-bound, multiple processes, true parallelism

**concurrent.futures:** High-level API — ThreadPoolExecutor aur ProcessPoolExecutor.`,
    code: `from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor
import threading
import multiprocessing

# Threading — I/O-bound
def download(url: str) -> bytes:
    import urllib.request
    with urllib.request.urlopen(url) as r:
        return r.read()

urls = ["http://example.com/1", "http://example.com/2", ...]

# Sequential (slow)
results = [download(url) for url in urls]

# Parallel with threads (fast for I/O!)
with ThreadPoolExecutor(max_workers=10) as executor:
    results = list(executor.map(download, urls))

# Multiprocessing — CPU-bound
def is_prime(n: int) -> bool:
    if n < 2: return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0: return False
    return True

numbers = list(range(1, 100_000))

# Sequential (uses 1 CPU core)
primes = list(filter(is_prime, numbers))

# Multiprocessing (uses all cores!)
with ProcessPoolExecutor() as executor:
    results = list(executor.map(is_prime, numbers))
primes = [n for n, is_p in zip(numbers, results) if is_p]

# Manual threading with shared state
counter = 0
lock = threading.Lock()

def increment():
    global counter
    with lock:   # thread-safe!
        counter += 1

threads = [threading.Thread(target=increment) for _ in range(1000)]
for t in threads: t.start()
for t in threads: t.join()
print(counter)   # 1000 (safe with lock)`,
  },
  {
    id: 24,
    level: "Beginner" as const,
    question: "Python mein dictionary aur set operations kya hain?",
    answer: `**Dictionary:** Key-value pairs. Python 3.7+ mein insertion order preserved.

**Important dict operations:** get(), items(), keys(), values(), update(), pop(), setdefault(), dict comprehension.

**defaultdict:** Missing key pe default value — KeyError nahi.
**Counter:** Frequency counting — collections module.

**Set:** Unique values. Mathematical set operations support karta hai.`,
    code: `from collections import defaultdict, Counter, OrderedDict

# Dictionary operations
user = {"name": "Ali", "age": 25, "city": "Lahore"}

user.get("phone", "N/A")        # "N/A" (KeyError nahi)
user.setdefault("email", "")    # set agar missing ho

# Update (merge)
user.update({"age": 26, "phone": "03001234567"})

# Dict comprehension
squares = {x: x**2 for x in range(1, 6)}
# {1:1, 2:4, 3:9, 4:16, 5:25}

filtered = {k: v for k, v in user.items() if v is not None}

# Iterate
for key, val in user.items():
    print(f"{key}: {val}")

# defaultdict — missing key pe default
word_count = defaultdict(int)
for word in "the cat sat on the mat".split():
    word_count[word] += 1   # no KeyError!

graph = defaultdict(list)
graph["A"].append("B")   # no need to initialize

# Counter — frequency counting
counter = Counter("mississippi")
# Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})
counter.most_common(3)   # [('i',4), ('s',4), ('p',2)]

Counter([1,2,2,3,3,3]).most_common()

# SET operations
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

a | b    # union: {1,2,3,4,5,6,7,8}
a & b    # intersection: {4, 5}
a - b    # difference: {1, 2, 3}
a ^ b    # symmetric difference: {1,2,3,6,7,8}
a <= b   # subset check

# Remove duplicates
unique = list(set([1, 2, 2, 3, 3, 3]))   # [1, 2, 3]`,
  },
  {
    id: 25,
    level: "Beginner" as const,
    question: "Python package management — pip, venv, aur requirements.txt kya hain?",
    answer: `**pip:** Python ka package installer — PyPI se packages install karo.
**venv:** Virtual environment — project-specific packages, system se isolated.
**requirements.txt:** Project dependencies list.

**Modern alternatives:**
- **poetry:** Dependency management + packaging
- **pipenv:** pip + virtualenv combined
- **conda:** Scientific computing ke liye (Anaconda)
- **uv:** Blazing fast (Rust-based) — modern choice

**Best practice:** Hamesha virtual environment use karo — global Python pollute mat karo.`,
    code: `# Virtual environment create karo
python -m venv myenv

# Activate (Windows)
myenv\\Scripts\\activate

# Activate (Mac/Linux)
source myenv/bin/activate

# Deactivate
deactivate

# pip commands
pip install requests              # install
pip install requests==2.31.0     # specific version
pip install "requests>=2.28"     # minimum version
pip install -r requirements.txt  # from file

pip list                          # installed packages
pip show requests                 # package info
pip freeze                        # all with versions
pip freeze > requirements.txt    # save dependencies

pip uninstall requests
pip install --upgrade requests

# requirements.txt example
# requests==2.31.0
# fastapi>=0.100.0
# pydantic~=2.0  # compatible release

# Development dependencies (separate file)
pip install -r requirements-dev.txt

# pyproject.toml (modern)
# [tool.poetry.dependencies]
# python = "^3.11"
# requests = "^2.31"
#
# [tool.poetry.dev-dependencies]
# pytest = "^7.4"
# black = "^23.0"`,
  },
  {
    id: 26,
    level: "Intermediate" as const,
    question: "Python mein *args aur **kwargs kya hain? Real use case explain karo.",
    answer: `*args = positional arguments tuple mein pack karo — variable number of args.
**kwargs = keyword arguments dict mein pack karo.

def func(*args, **kwargs):
    print(args)   # tuple: (1, 2, 3)
    print(kwargs) # dict: {'name': 'Ali'}

func(1, 2, 3, name='Ali')

Use cases:
- Decorator wrappers: wrapper(*args, **kwargs) — original function ko sab args forward karo
- Flexible APIs: config(**settings)
- Mixin classes: super().__init__(**kwargs)

Unpacking: func(*[1,2,3]) = func(1,2,3), func(**{'a':1}) = func(a=1)`,
    tags: ["functions", "arguments"],
  },
  {
    id: 27,
    level: "Intermediate" as const,
    question: "Python mein shallow copy aur deep copy ka fark kya hai?",
    answer: `Shallow copy: New object banta hai lekin nested objects same reference share karte hain.
Deep copy: Poora object tree copy hota hai — completely independent.

import copy

original = [[1, 2], [3, 4]]
shallow = copy.copy(original)    # ya list(original) ya original[:]
deep = copy.deepcopy(original)

shallow[0].append(99)
# original[0] bhi change hoga! → [[1,2,99], [3,4]]

deep[0].append(99)
# original safe! → [[1,2], [3,4]]

Kab deep copy: Nested dicts/lists/objects jo independent chahiye.
Kab shallow: Simple objects, ya jab sharing intentional ho.`,
    tags: ["memory", "objects"],
  },
  {
    id: 28,
    level: "Intermediate" as const,
    question: "__init__ aur __new__ mein kya fark hai?",
    answer: `__new__: Object banata hai — class ka constructor (static method). Singleton pattern mein use hota hai.
__init__: Object initialize karta hai — __new__ ke baad call hota hai.

class MyClass:
    def __new__(cls, *args, **kwargs):
        print("Creating instance")
        instance = super().__new__(cls)
        return instance  # zaroori!
    
    def __init__(self, value):
        print("Initializing")
        self.value = value

# Order: __new__ pehle, phir __init__
obj = MyClass(42)
# "Creating instance" → "Initializing"

Practical: Singleton mein __new__ override karo — ek hi instance return karo.`,
    tags: ["oop", "dunder"],
  },
  {
    id: 29,
    level: "Intermediate" as const,
    question: "Python mein list comprehension vs generator expression — kab kya use karein?",
    answer: `List comprehension: Puri list memory mein — sab values ek baar compute hoti hain.
Generator: Lazy evaluation — ek ek value demand pe generate hoti hai.

# List comprehension — [] — sab ek baar
squares_list = [x**2 for x in range(1000000)]  # ~8MB memory!

# Generator expression — () — lazy
squares_gen = (x**2 for x in range(1000000))   # ~112 bytes!

# Generator use: sum, any, all, for loop
total = sum(x**2 for x in range(1000000))  # ek baar calculate

# Kab list: multiple times iterate karna ho, index access
# Kab generator: ek baar iterate, large data, pipeline

# Generator function
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b`,
    tags: ["generators", "memory", "performance"],
  },
  {
    id: 30,
    level: "Advanced" as const,
    question: "Python GIL (Global Interpreter Lock) kya hai? Threading ko kaise affect karta hai?",
    answer: `GIL = Global Interpreter Lock — CPython mein ek mutex jo sirf ek thread ko ek waqt Python bytecode execute karne deta hai.

Impact:
- CPU-bound tasks: Threading kaam nahi karta — threads ek ek karke chalte hain
- I/O-bound tasks: GIL I/O wait mein release hota hai — threading useful hai

Solutions:
- CPU-bound: multiprocessing (separate processes = separate GIL)
- I/O-bound: asyncio ya threading (GIL release hota hai)
- CPU-bound heavy: C extensions (NumPy GIL release karta hai), PyPy

from concurrent.futures import ProcessPoolExecutor  # CPU
from concurrent.futures import ThreadPoolExecutor   # I/O

# CPU-bound — ProcessPoolExecutor
with ProcessPoolExecutor() as executor:
    results = list(executor.map(cpu_heavy_task, data))`,
    tags: ["concurrency", "threading", "gil"],
  },
  {
    id: 31,
    level: "Intermediate" as const,
    question: "Python mein @property decorator kya karta hai? Getter/setter kaise banate hain?",
    answer: `@property: Method ko attribute ki tarah access karo — validation, computed values ke liye.

class Temperature:
    def __init__(self, celsius):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self._celsius = value
    
    @property
    def fahrenheit(self):  # computed — no setter
        return self._celsius * 9/5 + 32

t = Temperature(25)
print(t.fahrenheit)  # 77.0 — method ki tarah nahi!
t.celsius = -300     # ValueError!

Benefits: Validation add karo, backward compatible (attribute → property), computed values.`,
    tags: ["oop", "property"],
  },
  {
    id: 32,
    level: "Advanced" as const,
    question: "Python mein __slots__ kya hai? Memory optimization kaise karta hai?",
    answer: `__slots__: Class attributes ki fixed list define karo — __dict__ create nahi hota, memory save hoti hai.

class Normal:
    def __init__(self, x, y):
        self.x = x
        self.y = y
# __dict__ = {'x': 1, 'y': 2} — flexible lekin memory zyada

class WithSlots:
    __slots__ = ['x', 'y']
    def __init__(self, x, y):
        self.x = x
        self.y = y
# No __dict__ — ~40-50% less memory per instance

Benefits:
- Memory: Millions of instances = significant saving
- Speed: Attribute access faster (no dict lookup)
- Safety: New attributes add nahi ho sakte (typo protection)

Kab use: Small, many-instance classes (Point, Vector, Node in tree/graph).`,
    tags: ["memory", "optimization", "oop"],
  },
  {
    id: 33,
    level: "Intermediate" as const,
    question: "Python mein Exception hierarchy kya hai? Custom exceptions kaise banate hain?",
    answer: `BaseException → Exception → StandardError → specific errors

Main hierarchy:
Exception → ValueError, TypeError, AttributeError, KeyError, IndexError, RuntimeError
Exception → OSError → FileNotFoundError, PermissionError
Exception → ArithmeticError → ZeroDivisionError, OverflowError

Custom exceptions:
class AppError(Exception):
    """Base application exception"""
    pass

class ValidationError(AppError):
    def __init__(self, field: str, message: str):
        self.field = field
        super().__init__(f"{field}: {message}")

class NotFoundError(AppError):
    def __init__(self, resource: str, id: int):
        super().__init__(f"{resource} with id={id} not found")

# Usage
try:
    raise ValidationError("email", "Invalid format")
except ValidationError as e:
    print(e.field)  # "email"
except AppError as e:
    print("App error:", e)`,
    tags: ["exceptions", "error-handling"],
  },
  {
    id: 34,
    level: "Advanced" as const,
    question: "Python mein metaclass kya hota hai? Real use case batao.",
    answer: `Metaclass = class ka class — classes banane ka process control karo.
'type' default metaclass hai — sab classes type ka instance hain.

# Simple metaclass
class SingletonMeta(type):
    _instances = {}
    
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connection = "connected"

db1 = Database()
db2 = Database()
print(db1 is db2)  # True!

# Real use cases:
# 1. ORM (Django Models — field registration)
# 2. API validation (auto-validate methods)
# 3. Plugin systems (auto-register subclasses)
# 4. Abstract base classes (ABCMeta)

# Registry pattern with metaclass
class PluginMeta(type):
    registry = {}
    def __new__(mcs, name, bases, namespace):
        cls = super().__new__(mcs, name, bases, namespace)
        if bases:  # base class ko skip karo
            mcs.registry[name] = cls
        return cls`,
    tags: ["metaclass", "advanced-oop"],
  },
  {
    id: 35,
    level: "Intermediate" as const,
    question: "Python mein namedtuple aur dataclass mein kya fark hai?",
    answer: `namedtuple: Immutable, tuple subclass — lightweight, memory efficient.
dataclass: Mutable (default), class subclass — more features, flexible.

from collections import namedtuple
from dataclasses import dataclass, field

# namedtuple — simple, immutable
Point = namedtuple('Point', ['x', 'y'])
p = Point(1, 2)
print(p.x, p[0])  # attribute ya index access
p.x = 3  # AttributeError! immutable

# dataclass — powerful, mutable
@dataclass
class User:
    name: str
    age: int
    email: str = ""                    # default value
    tags: list = field(default_factory=list)  # mutable default!
    
    def greet(self): return f"Hi, {self.name}!"

u = User("Ali", 25)
u.age = 26  # OK!

# @dataclass(frozen=True) — immutable dataclass (namedtuple jaisa)
# @dataclass(order=True) — comparison operators auto-generate

Kab namedtuple: Simple, immutable records, memory critical.
Kab dataclass: Methods chahiye, mutability, complex defaults.`,
    tags: ["dataclass", "namedtuple", "data-structures"],
  },
  {
    id: 36,
    level: "Advanced" as const,
    question: "Python mein context manager kaise banate hain? __enter__ aur __exit__ explain karo.",
    answer: `Context manager = 'with' statement support — setup aur teardown guarantee karo.

Method 1: Class-based
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file  # 'as' variable ko assign hota hai
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()
        # True return = exception suppress karo
        # False/None = exception propagate karo
        return False

with FileManager('test.txt', 'w') as f:
    f.write("Hello!")

Method 2: @contextmanager decorator
from contextlib import contextmanager

@contextmanager
def db_transaction(connection):
    transaction = connection.begin()
    try:
        yield transaction  # __enter__ ka return value
        transaction.commit()
    except Exception:
        transaction.rollback()
        raise  # re-raise exception

with db_transaction(conn) as txn:
    txn.execute("INSERT ...")`,
    tags: ["context-manager", "with-statement"],
  },
];


