import type { Chapter } from "./chapters";

export const dsaChapters: Chapter[] = [
  {
    id: "dsa-intro",
    title: "DSA Kya Hai? — Introduction",
    titleEn: "What is DSA? — Introduction",
    emoji: "🎯",
    category: "DSA Basics",
    description: "Data Structures & Algorithms ki fundamentals — kyun zaroori hain aur Big-O Notation",
    descriptionEn: "Fundamentals of DSA — why they matter and Big-O Notation",
    sections: [
      {
        heading: "DSA kyun seekhna chahiye?",
        content: `**Data Structures** = data ko organize karne ka tarika
**Algorithms** = problems solve karne ke step-by-step instructions

**Real-world analogy:**
- Library mein books **shelves pe arrange** hoti hain — yeh data structure hai
- Books **alphabetically dhundna** — yeh algorithm hai

**DSA kyun zaroori hai?**
- FAANG interviews (Google, Amazon, Meta, etc.) DSA pe based hote hain
- Efficient code likhne ke liye — slow code se fast code banana
- Large data handle karna — 1 million records pe efficient search
- Better developer banna — sochne ka tarika improve hota hai

**DSA map:**
- **Data Structures:** Array, Linked List, Stack, Queue, Tree, Graph, Hash Table
- **Algorithms:** Searching, Sorting, Dynamic Programming, Graph Traversal`,
        diagram: `
DATA STRUCTURES OVERVIEW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  LINEAR                    NON-LINEAR
  ┌──────────────┐          ┌──────────────┐
  │   Array      │          │    Tree      │
  │   [1,2,3,4]  │          │      ●       │
  │              │          │    /   \\     │
  │  Linked List │          │   ●     ●    │
  │  1→2→3→4    │          │              │
  │              │          │    Graph     │
  │    Stack     │          │  ●──●──●    │
  │   LIFO ↑↓   │          │      |       │
  │              │          │      ●       │
  │    Queue     │          └──────────────┘
  │  FIFO →→→   │
  └──────────────┘          HASH-BASED
                            ┌──────────────┐
                            │  Hash Table  │
                            │  {key:value} │
                            └──────────────┘
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      },
      {
        heading: "Big-O Notation — Algorithm ki Speed Measure Karo",
        content: `Big-O notation algorithm ki **time complexity** batata hai — input size badhane par kitna slow hoga.`,
        code: `# BIG-O EXAMPLES

# O(1) — Constant Time (best)
# Input size se koi farak nahi
def get_first(arr):
    return arr[0]   # hamesha ek operation

# O(log n) — Logarithmic (very good)
# Har step pe problem half hoti hai
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: low = mid + 1
        else: high = mid - 1
    return -1

# O(n) — Linear (okay)
# Input ke saath proportional
def find_max(arr):
    max_val = arr[0]
    for x in arr:     # n elements check
        if x > max_val: max_val = x
    return max_val

# O(n log n) — (good for sorting)
# Merge sort, heapsort

# O(n²) — Quadratic (slow for large n)
# Nested loops
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):       # n iterations
        for j in range(n-i-1):  # n iterations
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

# O(2^n) — Exponential (very slow)
# Naive Fibonacci
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)`,
        language: "python",
        diagram: `
BIG-O COMPLEXITY CHART:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Speed (fast → slow):

  O(1)      ████ Constant        ← Best
  O(log n)  ████ Logarithmic     ← Great
  O(n)      ████ Linear          ← OK
  O(n log n)████ Linearithmic    ← Acceptable
  O(n²)     ████ Quadratic       ← Bad
  O(2ⁿ)     ████ Exponential     ← Terrible
  O(n!)     ████ Factorial       ← Worst

  n=1000:
  O(1)      = 1 operation
  O(log n)  = ~10 operations
  O(n)      = 1,000 operations
  O(n²)     = 1,000,000 operations
  O(2ⁿ)     = 10^300+ operations (impossible!)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        tip: "Interview mein hamesha Big-O poochha jaata hai. Solution dene ke baad khud bolo: 'Time complexity O(n), Space complexity O(1)'.",
      },
    ],
    sectionsEn: [
      {
        heading: "Why learn DSA?",
        content: `**Data Structures** = ways to organize data in memory
**Algorithms** = step-by-step instructions to solve problems

**Why DSA matters:**
- Required for FAANG interviews (Google, Amazon, Meta, etc.)
- Write efficient code that scales — handle millions of records
- Think better as a developer — structured problem-solving
- Fundamental computer science knowledge`,
        code: `# Big-O Notation — measuring algorithm speed
# O(1)    — constant time (best): arr[0]
# O(log n)— logarithmic: binary search
# O(n)    — linear: single loop
# O(n log n) — good sorting algorithms
# O(n²)   — quadratic: nested loops (bad for large n)
# O(2^n)  — exponential (terrible)

# Always ask yourself:
# 1. Time complexity? (speed)
# 2. Space complexity? (memory)`,
        language: "python",
        tip: "In interviews, always state the time and space complexity of your solution after writing it.",
      },
    ],
    mcqs: [
      {
        q: "Binary Search ki time complexity kya hai?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correct: 1,
        explain: "Binary Search har step pe search space half karta hai. n elements mein → log₂(n) steps. 1 million elements mein sirf ~20 steps!",
      },
      {
        q: "O(n²) complexity ka example kaunsa hai?",
        options: ["Binary Search", "Array access", "Bubble Sort (nested loops)", "Hash table lookup"],
        correct: 2,
        explain: "Bubble Sort mein do nested loops hain (n × n = n²). n=1000 pe 1 million comparisons hoti hain.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the time complexity of Binary Search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correct: 1,
        explain: "Binary Search halves the search space at each step. For n elements → log₂(n) steps. For 1 million elements, only ~20 steps!",
      },
    ],
    cheatsheet: [
      "O(1) = constant — hamesha same speed",
      "O(log n) = logarithmic — binary search",
      "O(n) = linear — ek loop",
      "O(n log n) = good sorting — merge sort",
      "O(n²) = quadratic — nested loops",
      "Time complexity = speed, Space = memory",
      "Best data structure choose karna = interview skill",
    ],
    cheatsheetEn: [
      "O(1) = constant time — always same speed",
      "O(log n) = logarithmic — halves each step",
      "O(n) = linear — proportional to input size",
      "O(n log n) = linearithmic — efficient sorting",
      "O(n²) = quadratic — nested loops",
      "Always analyze both time and space complexity",
    ],
    revision: [
      "DSA = Data Structures (organize) + Algorithms (solve)",
      "Big-O = algorithm speed as input grows",
      "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)",
      "Interview mein time + space complexity zaroor batao",
    ],
    revisionEn: [
      "DSA = Data Structures (organize data) + Algorithms (solve problems)",
      "Big-O = how algorithm speed changes as input grows",
      "O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)",
      "Always state time + space complexity in interviews",
    ],
  },

  {
    id: "dsa-arrays",
    title: "Arrays — Python Lists Deep Dive",
    titleEn: "Arrays — Deep Dive into Python Lists",
    emoji: "📊",
    category: "Linear DS",
    description: "Arrays, dynamic arrays, 2D arrays, sliding window, two-pointer techniques",
    descriptionEn: "Arrays, dynamic arrays, 2D arrays, sliding window, two-pointer techniques",
    sections: [
      {
        heading: "Array kya hai? Python mein kaise kaam karta hai?",
        content: `Array ek **contiguous memory** mein elements store karta hai. Python ka list dynamic array hai.

**Python List ka memory layout:**
- Index 0 se shuru hota hai
- Random access O(1) — index se seedha access
- append() O(1) amortized — end mein add
- insert(0, x) O(n) — beginning mein add (sab shift hote hain)`,
        code: `# Python list as dynamic array
arr = []

# Operations aur unki complexity
arr.append(5)      # O(1) — end mein add
arr.append(3)
arr.append(8)
arr.insert(0, 1)   # O(n) — beginning mein (sab shift)
arr.pop()          # O(1) — last remove
arr.pop(0)         # O(n) — first remove (sab shift)

print(arr[0])      # O(1) — random access by index

# ─────────────────────────────────────
# COMMON ARRAY PATTERNS

# 1. Reverse array
arr = [1, 2, 3, 4, 5]
arr.reverse()           # in-place O(n)
reversed_arr = arr[::-1]  # new array O(n)

# 2. Find max/min
print(max(arr), min(arr))  # O(n)

# 3. Sum
print(sum(arr))  # O(n)

# 4. Duplicate check
has_dup = len(arr) != len(set(arr))  # O(n) with set

# 5. Flatten 2D array
matrix = [[1,2,3], [4,5,6], [7,8,9]]
flat = [x for row in matrix for x in row]
print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# 6. Prefix sum — range sum queries
nums = [1, 3, 2, 5, 4]
prefix = [0] * (len(nums) + 1)
for i, n in enumerate(nums):
    prefix[i+1] = prefix[i] + n
# Sum of range [l, r]:
def range_sum(l, r):
    return prefix[r+1] - prefix[l]

print(range_sum(1, 3))  # nums[1]+nums[2]+nums[3] = 10`,
        language: "python",
      },
      {
        heading: "Two-Pointer Technique — Classic Patterns",
        content: `Two pointers se O(n²) problems O(n) mein solve karo. Arrays aur strings mein bohot common.`,
        code: `# PATTERN 1: Two Sum (sorted array)
# Target sum dhundo
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        total = arr[left] + arr[right]
        if total == target:
            return (left, right)
        elif total < target:
            left += 1    # sum badhana hai
        else:
            right -= 1   # sum ghattana hai
    return (-1, -1)

arr = [1, 3, 5, 7, 9, 11]
print(two_sum_sorted(arr, 10))  # (1, 4) → 3+7=10

# ─────────────────────────────────────
# PATTERN 2: Remove Duplicates (sorted)
def remove_duplicates(arr):
    if not arr: return 0
    k = 1  # unique count
    for i in range(1, len(arr)):
        if arr[i] != arr[i-1]:
            arr[k] = arr[i]
            k += 1
    return k, arr[:k]

print(remove_duplicates([1,1,2,3,3,4]))  # (4, [1,2,3,4])

# ─────────────────────────────────────
# PATTERN 3: Palindrome check
def is_palindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

print(is_palindrome("racecar"))  # True
print(is_palindrome("hello"))    # False

# ─────────────────────────────────────
# PATTERN 4: Container With Most Water
def max_water(heights):
    left, right = 0, len(heights) - 1
    max_area = 0
    while left < right:
        h = min(heights[left], heights[right])
        w = right - left
        max_area = max(max_area, h * w)
        if heights[left] < heights[right]:
            left += 1
        else:
            right -= 1
    return max_area

print(max_water([1,8,6,2,5,4,8,3,7]))  # 49`,
        language: "python",
        tip: "Two pointers tab use karo jab sorted array ho ya symmetry check karni ho. O(n²) → O(n) classic optimization.",
      },
      {
        heading: "Sliding Window — Subarray Problems",
        content: `Sliding window se contiguous subarray problems efficiently solve karo.`,
        code: `# FIXED SIZE WINDOW — max sum of k-size subarray
def max_sum_subarray(arr, k):
    # First window
    window_sum = sum(arr[:k])
    max_sum = window_sum

    # Slide the window
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i-k]  # add new, remove old
        max_sum = max(max_sum, window_sum)
    return max_sum

arr = [2, 1, 5, 1, 3, 2]
print(max_sum_subarray(arr, 3))   # 9 (5+1+3)

# ─────────────────────────────────────
# VARIABLE SIZE WINDOW — longest subarray with sum ≤ k
def longest_subarray(arr, k):
    left = 0
    current_sum = 0
    max_len = 0

    for right in range(len(arr)):
        current_sum += arr[right]

        # Window shrink karo jab sum > k
        while current_sum > k:
            current_sum -= arr[left]
            left += 1

        max_len = max(max_len, right - left + 1)

    return max_len

print(longest_subarray([3, 1, 2, 7, 4, 2, 1, 1, 5], 8))  # 4

# ─────────────────────────────────────
# Longest substring without repeating characters
def length_of_longest_substring(s):
    char_set = set()
    left = 0
    max_len = 0

    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)

    return max_len

print(length_of_longest_substring("abcabcbb"))  # 3 ("abc")
print(length_of_longest_substring("pwwkew"))    # 3 ("wke")`,
        language: "python",
        tip: "Sliding window pattern: fixed window = sum/avg problems. Variable window = max/min length with constraint problems.",
      },
    ],
    sectionsEn: [
      {
        heading: "Arrays in Python — How they work",
        content: `Python's list is a dynamic array — it stores elements in contiguous memory. Random access is O(1), append is O(1) amortized, insert at beginning is O(n).`,
        code: `arr = [1, 2, 3, 4, 5]

# Common operations
arr.append(6)         # O(1) — add to end
arr.insert(0, 0)      # O(n) — insert at beginning
arr.pop()             # O(1) — remove last
arr[2]                # O(1) — random access

# Useful patterns
arr[::-1]             # reverse
max(arr), min(arr)    # O(n)
prefix = [sum(arr[:i]) for i in range(len(arr)+1)]  # prefix sum

# Two-pointer: two sum in sorted array
def two_sum(arr, target):
    l, r = 0, len(arr) - 1
    while l < r:
        s = arr[l] + arr[r]
        if s == target: return (l, r)
        elif s < target: l += 1
        else: r -= 1`,
        language: "python",
      },
    ],
    mcqs: [
      {
        q: "Python list mein arr.insert(0, x) ki time complexity?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 2,
        explain: "Beginning mein insert karne se sab existing elements ek position right shift hote hain — O(n) operation. End mein append O(1) amortized hota hai.",
      },
      {
        q: "Sliding window technique kab use karte hain?",
        options: [
          "Linked lists traverse karne mein",
          "Contiguous subarray/substring problems mein efficiently",
          "Tree traversal mein",
          "Graph DFS mein",
        ],
        correct: 1,
        explain: "Sliding window contiguous subarray/substring problems ke liye hai — max sum, longest substring, etc. O(n²) brute force ko O(n) mein convert karta hai.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the time complexity of arr.insert(0, x) in Python?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 2,
        explain: "Inserting at the beginning shifts all elements one position right — O(n). Appending to the end is O(1) amortized.",
      },
    ],
    cheatsheet: [
      "arr.append(x) — O(1), arr.insert(0,x) — O(n)",
      "arr[i] — O(1) random access",
      "Two pointers — left + right, move inward",
      "Sliding window — expand right, shrink left",
      "Prefix sum — range queries O(1) after O(n) build",
      "arr[::-1] — reverse O(n)",
      "set(arr) — duplicates remove O(n)",
    ],
    cheatsheetEn: [
      "arr.append(x) — O(1), arr.insert(0,x) — O(n)",
      "arr[i] — O(1) random access by index",
      "Two pointers — left/right converge inward",
      "Sliding window — expand right, shrink left on violation",
      "Prefix sum — build O(n), range query O(1)",
    ],
    revision: [
      "Array = contiguous memory, O(1) access, O(n) insert/delete",
      "Two pointers = sorted array, O(n²) → O(n)",
      "Sliding window = subarray problems O(n)",
      "Prefix sum = range sum O(1) after O(n) preprocessing",
    ],
    revisionEn: [
      "Array = contiguous memory, O(1) access, O(n) insert/delete at front",
      "Two pointers = converge from both ends, O(n) for O(n²) problems",
      "Sliding window = grow right, shrink left, subarray/substring problems",
      "Prefix sum = preprocess O(n), then O(1) range sum queries",
    ],
  },

  {
    id: "dsa-linked-list",
    title: "Linked List — Nodes aur Pointers",
    titleEn: "Linked List — Nodes and Pointers",
    emoji: "🔗",
    category: "Linear DS",
    description: "Singly, doubly linked list — implementation, traversal, aur classic problems",
    descriptionEn: "Singly and doubly linked list — implementation, traversal, and classic problems",
    sections: [
      {
        heading: "Linked List kya hai?",
        content: `Linked List mein nodes hote hain. Har node mein **data** aur **next pointer** hota hai. Array se alag — contiguous memory nahi hoti.

**Array vs Linked List:**
- Array: O(1) access, O(n) insert/delete middle mein
- Linked List: O(n) access, O(1) insert/delete (agar pointer mile)`,
        diagram: `
LINKED LIST STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  HEAD
   │
   ▼
  ┌────┬────┐    ┌────┬────┐    ┌────┬──────┐
  │ 1  │  ──┼───►│ 2  │  ──┼───►│ 3  │ None │
  └────┴────┘    └────┴────┘    └────┴──────┘
  Node(data=1)   Node(data=2)   Node(data=3)
  next=Node(2)   next=Node(3)   next=None (TAIL)

DOUBLY LINKED LIST:
  ◄── prev  data  next ──►
  ┌─────┬────┬─────┐
  │None ← 1  → ───┼───►  2  ◄──► 3  → None
  └─────┴────┴─────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Node class
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

# Linked List class
class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        """End mein add O(n)"""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def prepend(self, data):
        """Beginning mein add O(1)"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete(self, data):
        """Value se delete O(n)"""
        if not self.head: return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def display(self):
        """Print all nodes"""
        elements = []
        current = self.head
        while current:
            elements.append(str(current.data))
            current = current.next
        print(" → ".join(elements) + " → None")

    def __len__(self):
        count, current = 0, self.head
        while current:
            count += 1
            current = current.next
        return count

# Use karo
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.prepend(0)
ll.display()   # 0 → 1 → 2 → 3 → None
ll.delete(2)
ll.display()   # 0 → 1 → 3 → None
print(len(ll)) # 3`,
        language: "python",
      },
      {
        heading: "Classic Linked List Problems",
        content: `Ye problems interviews mein bohot zyada poocha jaata hai:`,
        code: `# ─────────────────────────────────────
# 1. REVERSE A LINKED LIST (Most common!)
def reverse(self):
    prev = None
    current = self.head
    while current:
        next_node = current.next   # save next
        current.next = prev        # reverse link
        prev = current             # move prev forward
        current = next_node        # move current forward
    self.head = prev

# ─────────────────────────────────────
# 2. DETECT CYCLE — Floyd's Algorithm (Tortoise & Hare)
def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next        # 1 step
        fast = fast.next.next   # 2 steps
        if slow == fast:        # mile toh cycle hai!
            return True
    return False

# ─────────────────────────────────────
# 3. FIND MIDDLE NODE
def find_middle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next        # 1 step
        fast = fast.next.next   # 2 steps
    return slow   # fast end pe pahuncha → slow middle pe

# ─────────────────────────────────────
# 4. MERGE TWO SORTED LISTS
def merge_sorted(l1, l2):
    dummy = Node(0)
    current = dummy
    while l1 and l2:
        if l1.data <= l2.data:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    current.next = l1 or l2
    return dummy.next

# ─────────────────────────────────────
# 5. REMOVE NTH FROM END
def remove_nth_from_end(head, n):
    dummy = Node(0)
    dummy.next = head
    fast = slow = dummy

    # fast ko n+1 steps aage bhejo
    for _ in range(n + 1):
        fast = fast.next

    # dono ek saath move karo jab tak fast end na ho
    while fast:
        fast = fast.next
        slow = slow.next

    slow.next = slow.next.next  # skip nth from end
    return dummy.next`,
        language: "python",
        tip: "Fast/Slow pointer (Floyd's algorithm) bahut powerful technique hai — cycle detection, middle finding, nth from end sab iske variations hain.",
      },
    ],
    sectionsEn: [
      {
        heading: "What is a Linked List?",
        content: `A linked list is a series of nodes where each node contains data and a pointer to the next node. Unlike arrays, memory is not contiguous.`,
        code: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):   # O(n)
        node = Node(data)
        if not self.head:
            self.head = node; return
        cur = self.head
        while cur.next: cur = cur.next
        cur.next = node

    def prepend(self, data):  # O(1)
        node = Node(data)
        node.next = self.head
        self.head = node

# Reverse — classic interview question
def reverse(head):
    prev, cur = None, head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev, cur = cur, nxt
    return prev  # new head`,
        language: "python",
        tip: "Floyd's Cycle Detection (slow/fast pointers) is used for: cycle detection, finding middle, finding Nth from end.",
      },
    ],
    mcqs: [
      {
        q: "Linked list mein beginning mein insert karna Array se zyada fast kyun hai?",
        options: [
          "Linked list faster memory use karta hai",
          "Linked list: O(1) prepend (sirf pointer change), Array: O(n) shift karna padta hai",
          "Array ka access slow hota hai",
          "Koi farak nahi",
        ],
        correct: 1,
        explain: "Linked list mein prepend = naya node banao aur head pointer change karo — O(1). Array mein sab elements right shift karne padte hain — O(n).",
      },
      {
        q: "Floyd's Cycle Detection mein fast pointer kitni speed se chalta hai?",
        options: ["1 step", "2 steps", "3 steps", "n/2 steps"],
        correct: 1,
        explain: "Fast pointer 2 steps pe chalta hai, slow 1 step. Cycle hogi toh fast eventually slow se milega. Yeh Tortoise and Hare algorithm hai.",
      },
    ],
    mcqsEn: [
      {
        q: "Why is prepending to a linked list faster than to an array?",
        options: [
          "Linked list uses less memory",
          "Linked list: O(1) — just change head pointer. Array: O(n) — must shift all elements",
          "Array access is slow",
          "No difference",
        ],
        correct: 1,
        explain: "Linked list prepend = create node and change head pointer — O(1). Array insert at beginning shifts all elements — O(n).",
      },
    ],
    cheatsheet: [
      "Node = data + next pointer",
      "Head = first node, Tail = last (next=None)",
      "Prepend O(1), Append O(n), Access O(n)",
      "Reverse = prev/current/next 3 pointers",
      "Cycle = fast (2 steps) + slow (1 step)",
      "Middle = fast 2x + slow 1x",
      "Dummy node = simplify edge cases",
    ],
    cheatsheetEn: [
      "Node = data + next pointer",
      "Head = first, Tail.next = None",
      "Prepend O(1), Append O(n), Access O(n)",
      "Reverse = use 3 pointers: prev, current, next",
      "Cycle detection = Floyd's fast/slow pointer",
      "Find middle = fast at 2x speed, slow at 1x",
    ],
    revision: [
      "Linked List = nodes with data + next pointer",
      "Prepend O(1) vs Array insert O(n) — LL advantage",
      "Reverse = 3 pointers: prev, current, next",
      "Floyd's algorithm = cycle detect + middle find",
    ],
    revisionEn: [
      "Linked List = chain of nodes with data + next pointer",
      "Prepend O(1) — linked list advantage over arrays",
      "Reverse = iterate with 3 pointers: prev, current, next",
      "Floyd's fast/slow pointer = cycle detection and middle finding",
    ],
  },

  {
    id: "dsa-stack-queue",
    title: "Stack & Queue — LIFO aur FIFO",
    titleEn: "Stack & Queue — LIFO and FIFO",
    emoji: "🥞",
    category: "Linear DS",
    description: "Stack (LIFO), Queue (FIFO), Deque, Monotonic Stack — implementation aur problems",
    descriptionEn: "Stack (LIFO), Queue (FIFO), Deque, Monotonic Stack — implementation and problems",
    sections: [
      {
        heading: "Stack — Last In First Out (LIFO)",
        content: `Stack = plates ki stack! Jo plate last mein rakhi, woh pehle nikali jaati hai.

**Real uses:** Browser back button, undo/redo, function call stack, expression evaluation`,
        diagram: `
STACK (LIFO):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  PUSH 1,2,3:          POP:
  ┌───┐ ← TOP          ┌───┐
  │ 3 │                │ 3 │ ← popped first!
  ├───┤                ├───┤
  │ 2 │                │ 2 │
  ├───┤                ├───┤
  │ 1 │                │ 1 │
  └───┘ ← BOTTOM       └───┘

  Operations:
  push(x) — add to top     O(1)
  pop()   — remove top      O(1)
  peek()  — see top         O(1)
  isEmpty()                 O(1)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Python list se Stack implement karo
class Stack:
    def __init__(self):
        self._data = []

    def push(self, item):
        self._data.append(item)   # O(1)

    def pop(self):
        if self.is_empty():
            raise IndexError("Stack is empty!")
        return self._data.pop()   # O(1)

    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty!")
        return self._data[-1]     # top element

    def is_empty(self):
        return len(self._data) == 0

    def size(self):
        return len(self._data)

    def __repr__(self):
        return f"Stack({self._data})"

# Use karo
s = Stack()
s.push(1); s.push(2); s.push(3)
print(s)           # Stack([1, 2, 3])
print(s.peek())    # 3
print(s.pop())     # 3
print(s)           # Stack([1, 2])

# ─────────────────────────────────────
# PROBLEM: Valid Parentheses
def is_valid_parens(s):
    """(), {}, [] balanced hain?"""
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}

    for char in s:
        if char in '({[':
            stack.append(char)
        elif char in ')}]':
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()

    return len(stack) == 0   # stack empty = balanced

print(is_valid_parens("(){}[]"))   # True
print(is_valid_parens("({[})"))    # False
print(is_valid_parens("{[()]}"))   # True

# ─────────────────────────────────────
# PROBLEM: Evaluate Reverse Polish Notation
def eval_rpn(tokens):
    """3 4 + 2 * = (3+4)*2 = 14"""
    stack = []
    ops = {'+', '-', '*', '/'}

    for t in tokens:
        if t not in ops:
            stack.append(int(t))
        else:
            b, a = stack.pop(), stack.pop()
            if t == '+': stack.append(a + b)
            elif t == '-': stack.append(a - b)
            elif t == '*': stack.append(a * b)
            else: stack.append(int(a / b))

    return stack[0]

print(eval_rpn(["3","4","+","2","*"]))  # 14`,
        language: "python",
        tip: "Stack ke liye Python list use karo — append() = push, pop() = pop. collections.deque bhi use kar sakte ho.",
      },
      {
        heading: "Queue — First In First Out (FIFO)",
        content: `Queue = ticket line! Jo pehle aaya, woh pehle nikala jaata hai.

**Real uses:** BFS traversal, task scheduling, printer queue, CPU scheduling`,
        code: `from collections import deque

# Queue implement karo (deque se — O(1) both ends)
class Queue:
    def __init__(self):
        self._data = deque()

    def enqueue(self, item):
        self._data.append(item)      # rear mein add O(1)

    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty!")
        return self._data.popleft()  # front se remove O(1)

    def front(self):
        return self._data[0]

    def is_empty(self):
        return len(self._data) == 0

    def size(self):
        return len(self._data)

q = Queue()
q.enqueue("Rahul")
q.enqueue("Priya")
q.enqueue("Ali")
print(q.dequeue())  # Rahul (first in, first out)
print(q.dequeue())  # Priya

# ─────────────────────────────────────
# PROBLEM: Monotonic Stack — Next Greater Element
def next_greater(nums):
    """Har element ke liye next greater element dhundo"""
    n = len(nums)
    result = [-1] * n
    stack = []  # indices store karo

    for i in range(n):
        while stack and nums[i] > nums[stack[-1]]:
            idx = stack.pop()
            result[idx] = nums[i]
        stack.append(i)

    return result

print(next_greater([2, 1, 2, 4, 3]))
# [4, 2, 4, -1, -1]

# ─────────────────────────────────────
# PROBLEM: Sliding Window Maximum (Deque)
def sliding_window_max(nums, k):
    """K-size window mein maximum element"""
    dq = deque()  # decreasing monotonic deque (indices)
    result = []

    for i in range(len(nums)):
        # Window se bahar gaye elements remove
        if dq and dq[0] < i - k + 1:
            dq.popleft()

        # Smaller elements pop karo (ye kabhi max nahi hoge)
        while dq and nums[dq[-1]] < nums[i]:
            dq.pop()

        dq.append(i)

        if i >= k - 1:
            result.append(nums[dq[0]])

    return result

print(sliding_window_max([1,3,-1,-3,5,3,6,7], 3))
# [3, 3, 5, 5, 6, 7]`,
        language: "python",
        warning: "List se queue mat banao — list.pop(0) = O(n) kyunki sab shift hote hain. Hamesha collections.deque use karo — popleft() O(1) hota hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "Stack (LIFO) and Queue (FIFO)",
        content: `Stack = plates: last added, first removed. Queue = ticket line: first added, first served.`,
        code: `# Stack — using Python list (O(1) push/pop)
stack = []
stack.append(1)   # push
stack.append(2)
stack.append(3)
stack.pop()       # 3 — LIFO
stack[-1]         # peek at top

# Queue — using deque (O(1) enqueue/dequeue)
from collections import deque
q = deque()
q.append(1)       # enqueue
q.append(2)
q.popleft()       # 1 — FIFO

# Classic stack problem: valid parentheses
def is_valid(s):
    stack = []
    pairs = {')':'(', '}':'{', ']':'['}
    for c in s:
        if c in '({[': stack.append(c)
        elif not stack or stack[-1] != pairs[c]: return False
        else: stack.pop()
    return not stack

print(is_valid("{[()]}"))  # True`,
        language: "python",
        warning: "Never use list.pop(0) for a queue — it's O(n). Always use collections.deque and popleft() which is O(1).",
      },
    ],
    mcqs: [
      {
        q: "Stack LIFO kyun hai?",
        options: [
          "Last In First Out — baad mein aaya pehle jaata hai",
          "First In First Out",
          "Random order",
          "Sorted order",
        ],
        correct: 0,
        explain: "Stack LIFO (Last In First Out) hai — jo element last push hua, woh first pop hoga. Plates ki stack socho — opar ki plate pehle nikli jaati hai.",
      },
      {
        q: "list.pop(0) queue ke liye kyun avoid karte hain?",
        options: [
          "Koi reason nahi",
          "O(n) hai — sab elements shift hote hain",
          "Syntax error aata hai",
          "Values delete ho jaati hain",
        ],
        correct: 1,
        explain: "list.pop(0) O(n) hai kyunki baad ke sab elements ek position left shift hote hain. deque.popleft() O(1) hai — hamesha deque use karo.",
      },
    ],
    mcqsEn: [
      {
        q: "Why is Stack called LIFO?",
        options: [
          "Last In First Out — last added element is removed first",
          "First In First Out",
          "Random order",
          "Sorted order",
        ],
        correct: 0,
        explain: "Stack is LIFO (Last In First Out) — the last element pushed is the first one popped. Think of a stack of plates.",
      },
    ],
    cheatsheet: [
      "Stack = list: append() push, pop() pop — O(1)",
      "Queue = deque: append() enqueue, popleft() dequeue — O(1)",
      "Valid parens = stack, push open, pop on close",
      "Monotonic stack = next greater/smaller element",
      "list.pop(0) = O(n), deque.popleft() = O(1)",
    ],
    cheatsheetEn: [
      "Stack = list: append()=push, pop()=pop — O(1)",
      "Queue = deque: append()=enqueue, popleft()=dequeue — O(1)",
      "Valid parentheses = classic stack problem",
      "Monotonic stack = next greater/smaller element problems",
      "Never use list.pop(0) for queue — use deque!",
    ],
    revision: [
      "Stack = LIFO, list ka append/pop use karo",
      "Queue = FIFO, deque ka append/popleft use karo",
      "Valid Parentheses = classic stack interview problem",
      "Monotonic Stack = next greater element",
    ],
    revisionEn: [
      "Stack = LIFO — use list append() and pop()",
      "Queue = FIFO — use deque append() and popleft()",
      "Valid Parentheses = classic stack application",
      "Monotonic Stack = maintains increasing or decreasing order",
    ],
  },

  {
    id: "dsa-hash-table",
    title: "Hash Tables — Fast Lookup",
    titleEn: "Hash Tables — Fast Lookup",
    emoji: "🗝️",
    category: "Non-Linear DS",
    description: "Python dict aur set ke andar kya hota hai — hashing, collision, aur common problems",
    descriptionEn: "What's inside Python's dict and set — hashing, collision, and common problems",
    sections: [
      {
        heading: "Hash Table kaise kaam karta hai?",
        content: `Hash table key ko **hash function** se ek index mein convert karta hai, phir us index pe value store karta hai. O(1) average lookup!

Python ka **dict** aur **set** internally hash table hain.`,
        diagram: `
HASH TABLE INTERNALS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Key "name"         hash("name") = 42
  Key "age"          hash("age")  = 17

  Array of buckets:
  Index:  0   1  ...  17  ...  42  ...
         [  ] [  ]   [age:25] [name:Rahul]

  Collision = do keys same index pe:
  Solution: Chaining (linked list at bucket)
            Open Addressing (next empty slot)

  Average: O(1) insert/lookup/delete
  Worst:   O(n) — all keys same bucket!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# Python dict = Hash Map
# Python set = Hash Set

# ─────────────────────────────────────
# PROBLEM 1: Two Sum (classic!)
def two_sum(nums, target):
    """Index pairs dhundo jinki sum = target"""
    seen = {}  # {value: index}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

print(two_sum([2, 7, 11, 15], 9))   # [0, 1]
print(two_sum([3, 2, 4], 6))        # [1, 2]

# ─────────────────────────────────────
# PROBLEM 2: Group Anagrams
def group_anagrams(strs):
    """Anagrams ko group karo"""
    from collections import defaultdict
    groups = defaultdict(list)
    for s in strs:
        key = tuple(sorted(s))  # sorted letters = key
        groups[key].append(s)
    return list(groups.values())

print(group_anagrams(["eat","tea","tan","ate","nat","bat"]))
# [['eat','tea','ate'], ['tan','nat'], ['bat']]

# ─────────────────────────────────────
# PROBLEM 3: Frequency Count
from collections import Counter

words = ["apple", "mango", "apple", "banana", "mango", "mango"]
freq = Counter(words)
print(freq)           # Counter({'mango': 3, 'apple': 2, ...})
print(freq.most_common(2))  # Top 2 most frequent

# ─────────────────────────────────────
# PROBLEM 4: Subarray Sum Equals K
def subarray_sum(nums, k):
    """Subarrays jinki sum = k, count karo"""
    count = 0
    prefix_sum = 0
    seen = {0: 1}  # prefix_sum: count

    for num in nums:
        prefix_sum += num
        # prefix_sum - k ka complement dhundo
        count += seen.get(prefix_sum - k, 0)
        seen[prefix_sum] = seen.get(prefix_sum, 0) + 1

    return count

print(subarray_sum([1, 1, 1], 2))   # 2
print(subarray_sum([1, 2, 3], 3))   # 2`,
        language: "python",
        tip: "Hash Map (dict) sabse powerful tool hai DSA problems solve karne ke liye. Two Sum, Frequency Count, Grouping — sab dict se hote hain.",
      },
      {
        heading: "collections Module — Python ke Special Dicts",
        content: `Python ke collections module mein special-purpose dict types hain:`,
        code: `from collections import defaultdict, Counter, OrderedDict
import heapq

# defaultdict — missing key pe default value
graph = defaultdict(list)
graph["A"].append("B")  # KeyError nahi aayega
graph["A"].append("C")
print(dict(graph))  # {'A': ['B', 'C']}

word_count = defaultdict(int)
words = "the quick brown fox jumps over the lazy dog".split()
for w in words:
    word_count[w] += 1  # missing key = 0 by default

# Counter — counting ke liye specialized
c = Counter("mississippi")
print(c)  # Counter({'s': 4, 'i': 4, 'p': 2, 'm': 1})
print(c.most_common(2))  # [('s', 4), ('i', 4)]
c1 = Counter("aab")
c2 = Counter("abb")
print(c1 + c2)  # Counter({'b': 3, 'a': 3})
print(c1 & c2)  # intersection: Counter({'a': 1, 'b': 1})

# ─────────────────────────────────────
# PROBLEM: Top K Frequent Elements
def top_k_frequent(nums, k):
    count = Counter(nums)
    # heapq.nlargest — O(n log k)
    return heapq.nlargest(k, count.keys(), key=count.get)

print(top_k_frequent([1,1,1,2,2,3], 2))  # [1, 2]

# ─────────────────────────────────────
# Longest Consecutive Sequence — O(n) with set
def longest_consecutive(nums):
    num_set = set(nums)
    longest = 0

    for n in num_set:
        if n - 1 not in num_set:  # sequence start
            length = 1
            while n + length in num_set:
                length += 1
            longest = max(longest, length)

    return longest

print(longest_consecutive([100,4,200,1,3,2]))  # 4 (1,2,3,4)`,
        language: "python",
      },
    ],
    sectionsEn: [
      {
        heading: "How Hash Tables work",
        content: `A hash table converts a key through a hash function to an array index, storing the value there. O(1) average lookup!

Python's dict and set are internally hash tables.`,
        code: `# Classic Two Sum using hash map
def two_sum(nums, target):
    seen = {}  # {value: index}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i

two_sum([2, 7, 11, 15], 9)  # [0, 1]

# Group Anagrams
from collections import defaultdict
def group_anagrams(strs):
    groups = defaultdict(list)
    for s in strs:
        groups[tuple(sorted(s))].append(s)
    return list(groups.values())

# Count frequency
from collections import Counter
Counter("mississippi")  # {'s':4, 'i':4, 'p':2, 'm':1}`,
        language: "python",
        tip: "The hash map (dict) is your most powerful tool in DSA interviews. When you need O(1) lookup, think dict.",
      },
    ],
    mcqs: [
      {
        q: "Python dict mein lookup ki average time complexity kya hai?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correct: 2,
        explain: "Hash table O(1) average lookup provide karta hai. Key → hash → index — seedha access. Worst case O(n) hota hai jab sab keys same bucket mein hon (rare).",
      },
      {
        q: "Two Sum problem ko O(n) mein kaise solve karte hain?",
        options: [
          "Nested loops se",
          "Sort karke binary search",
          "Hash map se — complement pehle se dekha hua?",
          "Recursion se",
        ],
        correct: 2,
        explain: "Hash map use karo: har element ke liye target-element (complement) map mein check karo. O(n) time, O(n) space.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the average time complexity of dict lookup in Python?",
        options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
        correct: 2,
        explain: "Hash tables provide O(1) average lookup. Key → hash → direct index access. Worst case O(n) occurs when all keys hash to the same bucket (very rare).",
      },
    ],
    cheatsheet: [
      "dict = hash map O(1) lookup/insert/delete",
      "set = hash set O(1) membership check",
      "Two Sum = dict: {value: index}",
      "Frequency = Counter(arr) or defaultdict(int)",
      "Group by property = defaultdict(list)",
      "seen = {} — visited/count tracking",
      "num in dict — O(1) membership",
    ],
    cheatsheetEn: [
      "dict = hash map, O(1) average lookup/insert/delete",
      "set = hash set, O(1) membership test",
      "Two Sum = {value: index} hash map",
      "Frequency count = Counter(arr)",
      "Group items = defaultdict(list)",
      "key in dict — O(1) membership check",
    ],
    revision: [
      "Hash table = key → hash → index → value, O(1) avg",
      "Python dict + set = hash table implementation",
      "Two Sum = hash map, complement dhundo",
      "Counter = frequency, defaultdict = safe dict",
    ],
    revisionEn: [
      "Hash table = key → hash → bucket index → value, O(1) average",
      "Python dict and set are built on hash tables",
      "Two Sum = hash map to find complement in O(n)",
      "Counter and defaultdict are specialized hash maps",
    ],
  },

  {
    id: "dsa-trees",
    title: "Trees — Hierarchical Data",
    titleEn: "Trees — Hierarchical Data Structures",
    emoji: "🌳",
    category: "Non-Linear DS",
    description: "Binary Tree, BST, Tree Traversals (DFS/BFS), aur classic tree problems",
    descriptionEn: "Binary Tree, BST, Tree Traversals (DFS/BFS), and classic tree problems",
    sections: [
      {
        heading: "Binary Tree — Basics aur Structure",
        content: `Tree = hierarchical data structure. Har node mein left aur right child ho sakta hai.

**Terminology:**
- **Root** = sabse upar ka node (parent nahi)
- **Leaf** = koi child nahi
- **Height** = root se deepest leaf tak
- **Depth** = root se node tak distance`,
        diagram: `
BINARY TREE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        4          ← Root (depth 0)
       / \\
      2    6        ← Internal nodes (depth 1)
     / \\  / \\
    1   3 5   7    ← Leaf nodes (depth 2)

  Height = 2 (root to deepest leaf)

BINARY SEARCH TREE (BST):
  Left child < Parent < Right child
        4
       / \\
      2    6
     / \\  / \\
    1   3 5   7

  BST property: In-order traversal = sorted order!
  Search/Insert/Delete: O(h) where h = height
  Balanced BST: h = O(log n) → O(log n) operations
  Unbalanced (worst): h = O(n) → O(n) operations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# Tree banao
root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(6)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
root.right.left = TreeNode(5)
root.right.right = TreeNode(7)

# ─────────────────────────────────────
# TREE TRAVERSALS (DFS — Depth First Search)

# 1. Inorder: LEFT → ROOT → RIGHT (BST mein sorted!)
def inorder(root):
    if not root: return []
    return inorder(root.left) + [root.val] + inorder(root.right)

# 2. Preorder: ROOT → LEFT → RIGHT (tree copy/serialize)
def preorder(root):
    if not root: return []
    return [root.val] + preorder(root.left) + preorder(root.right)

# 3. Postorder: LEFT → RIGHT → ROOT (tree delete)
def postorder(root):
    if not root: return []
    return postorder(root.left) + postorder(root.right) + [root.val]

print(inorder(root))   # [1, 2, 3, 4, 5, 6, 7] sorted!
print(preorder(root))  # [4, 2, 1, 3, 6, 5, 7]
print(postorder(root)) # [1, 3, 2, 5, 7, 6, 4]

# ─────────────────────────────────────
# BFS — Level Order Traversal (Queue use karo)
from collections import deque

def level_order(root):
    if not root: return []
    result, queue = [], deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left: queue.append(node.left)
            if node.right: queue.append(node.right)
        result.append(level)
    return result

print(level_order(root))  # [[4], [2, 6], [1, 3, 5, 7]]`,
        language: "python",
        tip: "Inorder traversal + BST = sorted sequence. BFS = level by level (queue use karo). DFS = depth wise (recursion/stack use karo).",
      },
      {
        heading: "Classic Tree Problems",
        content: `Ye problems interviews mein sabse zyada poocha jaata hai:`,
        code: `# 1. MAXIMUM DEPTH OF BINARY TREE
def max_depth(root):
    if not root: return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))

print(max_depth(root))  # 3

# ─────────────────────────────────────
# 2. SYMMETRIC TREE (mirror image?)
def is_symmetric(root):
    def is_mirror(left, right):
        if not left and not right: return True
        if not left or not right: return False
        return (left.val == right.val and
                is_mirror(left.left, right.right) and
                is_mirror(left.right, right.left))
    return is_mirror(root.left, root.right)

# ─────────────────────────────────────
# 3. LOWEST COMMON ANCESTOR (LCA)
def lca(root, p, q):
    if not root or root == p or root == q:
        return root
    left = lca(root.left, p, q)
    right = lca(root.right, p, q)
    if left and right: return root  # p aur q alag subtrees mein
    return left or right

# ─────────────────────────────────────
# 4. PATH SUM — root se leaf tak sum = target?
def has_path_sum(root, target):
    if not root: return False
    if not root.left and not root.right:   # leaf
        return root.val == target
    return (has_path_sum(root.left, target - root.val) or
            has_path_sum(root.right, target - root.val))

# ─────────────────────────────────────
# 5. BST INSERT
def bst_insert(root, val):
    if not root: return TreeNode(val)
    if val < root.val:
        root.left = bst_insert(root.left, val)
    else:
        root.right = bst_insert(root.right, val)
    return root

# 6. VALIDATE BST
def is_valid_bst(root, min_val=float('-inf'), max_val=float('inf')):
    if not root: return True
    if not (min_val < root.val < max_val): return False
    return (is_valid_bst(root.left, min_val, root.val) and
            is_valid_bst(root.right, root.val, max_val))`,
        language: "python",
        tip: "Zyaadatar tree problems recursion se solve hote hain. Base case = None node. Har node apna result recursively compute karta hai.",
      },
    ],
    sectionsEn: [
      {
        heading: "Binary Trees and Traversals",
        content: `Binary trees have at most 2 children per node. BST (Binary Search Tree) maintains left < parent < right.`,
        code: `class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

# DFS Traversals (recursive)
def inorder(root):   # Left → Root → Right (sorted for BST!)
    if not root: return []
    return inorder(root.left) + [root.val] + inorder(root.right)

def preorder(root):  # Root → Left → Right
    if not root: return []
    return [root.val] + preorder(root.left) + preorder(root.right)

# BFS — Level order (use queue)
from collections import deque
def level_order(root):
    if not root: return []
    q, result = deque([root]), []
    while q:
        level = [q.popleft() for _ in range(len(q))]
        result.append([n.val for n in level])
        for n in level:
            if n.left: q.append(n.left)
            if n.right: q.append(n.right)
    return result`,
        language: "python",
        tip: "Most tree problems use recursion. Base case = None. Build the solution bottom-up from leaf nodes.",
      },
    ],
    mcqs: [
      {
        q: "BST ka inorder traversal kya return karta hai?",
        options: ["Random order", "Reverse sorted order", "Level order", "Sorted ascending order"],
        correct: 3,
        explain: "BST mein inorder traversal (Left→Root→Right) hamesha sorted ascending order mein values deta hai. BST ki property: left < root < right.",
      },
      {
        q: "Tree mein BFS ke liye kaunsa data structure use karte hain?",
        options: ["Stack", "Queue", "Array", "Set"],
        correct: 1,
        explain: "BFS (Breadth-First Search) Queue use karta hai — level by level traverse karta hai. DFS Stack/Recursion use karta hai — depth mein jaata hai.",
      },
    ],
    mcqsEn: [
      {
        q: "What does inorder traversal of a BST return?",
        options: ["Random order", "Reverse sorted", "Level order", "Sorted ascending order"],
        correct: 3,
        explain: "BST inorder traversal (Left→Root→Right) always yields elements in sorted ascending order. This is a key BST property.",
      },
    ],
    cheatsheet: [
      "TreeNode = val + left + right",
      "Inorder = Left→Root→Right (BST = sorted)",
      "Preorder = Root→Left→Right",
      "Postorder = Left→Right→Root",
      "BFS = queue, level by level",
      "DFS = recursion/stack, depth first",
      "Most tree problems: if not root: return base_case",
      "BST: left < root < right",
    ],
    cheatsheetEn: [
      "TreeNode = val + left + right pointers",
      "Inorder = Left→Root→Right (sorted for BST)",
      "Preorder = Root→Left→Right (serialization)",
      "Postorder = Left→Right→Root (deletion)",
      "BFS = queue, visits level by level",
      "DFS = recursion or stack, goes deep first",
      "Most tree problems: base case is 'if not root: return ...'",
    ],
    revision: [
      "Binary Tree = har node mein max 2 children",
      "BST = left < parent < right, inorder = sorted",
      "Inorder/Pre/Post = DFS traversals",
      "BFS = queue use, level by level",
      "Tree problems = mostly recursion",
    ],
    revisionEn: [
      "Binary Tree = at most 2 children per node",
      "BST = left < parent < right, inorder yields sorted sequence",
      "DFS traversals: inorder, preorder, postorder",
      "BFS = level-order using a queue",
      "Almost all tree problems solved with recursion",
    ],
  },

  {
    id: "dsa-graphs",
    title: "Graphs — Networks aur Connections",
    titleEn: "Graphs — Networks and Connections",
    emoji: "🕸️",
    category: "Non-Linear DS",
    description: "Graph representation, BFS, DFS, shortest path, cycle detection, topological sort",
    descriptionEn: "Graph representation, BFS, DFS, shortest path, cycle detection, topological sort",
    sections: [
      {
        heading: "Graph kya hai? Representation kaise karte hain?",
        content: `Graph = nodes (vertices) + edges (connections). Social networks, maps, internet — sab graphs hain.

**Types:**
- **Directed** (one-way: Twitter follow) vs **Undirected** (two-way: Facebook friend)
- **Weighted** (roads with distances) vs **Unweighted**
- **Cyclic** (cycle possible) vs **Acyclic** (no cycle — DAG)`,
        diagram: `
GRAPH REPRESENTATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Graph:  A — B — D
           \\  |
            \\ |
              C

  ADJACENCY LIST (best for sparse graphs):
  {
    'A': ['B', 'C'],
    'B': ['A', 'C', 'D'],
    'C': ['A', 'B'],
    'D': ['B']
  }

  ADJACENCY MATRIX (best for dense graphs):
    A B C D
  A[0,1,1,0]
  B[1,0,1,1]
  C[1,1,0,0]
  D[0,1,0,0]

  Space: List=O(V+E), Matrix=O(V²)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `from collections import defaultdict, deque

# Graph adjacency list se banao
graph = defaultdict(list)
edges = [("A","B"), ("A","C"), ("B","C"), ("B","D"), ("C","D")]
for u, v in edges:
    graph[u].append(v)
    graph[v].append(u)   # undirected ke liye dono directions

# ─────────────────────────────────────
# BFS — Level by level (shortest path unweighted)
def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order

print(bfs(graph, "A"))   # ['A', 'B', 'C', 'D']

# ─────────────────────────────────────
# DFS — Depth First (recursion)
def dfs(graph, node, visited=None):
    if visited is None: visited = set()
    visited.add(node)
    order = [node]
    for neighbor in graph[node]:
        if neighbor not in visited:
            order.extend(dfs(graph, neighbor, visited))
    return order

print(dfs(graph, "A"))   # ['A', 'B', 'C', 'D']

# ─────────────────────────────────────
# SHORTEST PATH — BFS se
def shortest_path(graph, start, end):
    queue = deque([(start, [start])])
    visited = {start}

    while queue:
        node, path = queue.popleft()
        if node == end:
            return path
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, path + [neighbor]))
    return None

print(shortest_path(graph, "A", "D"))   # ['A', 'B', 'D']`,
        language: "python",
      },
      {
        heading: "Cycle Detection aur Topological Sort",
        content: `Directed graphs mein cycle detect karna aur dependency order nikalna important tasks hain.`,
        code: `# ─────────────────────────────────────
# CYCLE DETECTION in undirected graph (DFS)
def has_cycle_undirected(graph):
    visited = set()

    def dfs(node, parent):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                if dfs(neighbor, node):
                    return True
            elif neighbor != parent:  # back edge = cycle
                return True
        return False

    for node in graph:
        if node not in visited:
            if dfs(node, None):
                return True
    return False

# ─────────────────────────────────────
# TOPOLOGICAL SORT — Kahn's Algorithm (BFS)
# Directed Acyclic Graph (DAG) ke liye
def topological_sort(num_nodes, prerequisites):
    """
    [course, prerequisite] pairs diye hain
    Valid course order dhundo
    """
    from collections import defaultdict, deque

    adj = defaultdict(list)
    in_degree = [0] * num_nodes

    for course, prereq in prerequisites:
        adj[prereq].append(course)
        in_degree[course] += 1

    # In-degree 0 wale nodes se shuru karo
    queue = deque([i for i in range(num_nodes) if in_degree[i] == 0])
    order = []

    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in adj[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    return order if len(order) == num_nodes else []  # cycle = incomplete

# Course Schedule problem
print(topological_sort(4, [[1,0],[2,0],[3,1],[3,2]]))
# [0, 1, 2, 3] ya [0, 2, 1, 3]

# ─────────────────────────────────────
# NUMBER OF ISLANDS (classic!)
def num_islands(grid):
    if not grid: return 0
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == '0':
            return
        grid[r][c] = '0'  # visited mark
        dfs(r+1, c); dfs(r-1, c)
        dfs(r, c+1); dfs(r, c-1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == '1':
                dfs(r, c)
                count += 1
    return count

grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"],
]
print(num_islands(grid))  # 3`,
        language: "python",
        tip: "Number of Islands = connected components count. DFS se ek island ka sara connected land mark karo, phir count badhao.",
      },
    ],
    sectionsEn: [
      {
        heading: "Graphs — Representation and Traversal",
        content: `A graph consists of vertices (nodes) and edges (connections). Social networks, maps, and the internet are all graphs.`,
        code: `from collections import defaultdict, deque

# Build adjacency list
graph = defaultdict(list)
for u, v in [("A","B"),("A","C"),("B","D")]:
    graph[u].append(v); graph[v].append(u)

# BFS — shortest path (unweighted)
def bfs(graph, start):
    visited, queue, order = {start}, deque([start]), []
    while queue:
        node = queue.popleft()
        order.append(node)
        for nb in graph[node]:
            if nb not in visited:
                visited.add(nb); queue.append(nb)
    return order

# DFS — recursive
def dfs(graph, node, visited=None):
    if visited is None: visited = set()
    visited.add(node)
    return [node] + [x for nb in graph[node] if nb not in visited
                     for x in dfs(graph, nb, visited)]`,
        language: "python",
        tip: "BFS uses a queue — finds shortest path. DFS uses recursion/stack — explores as deep as possible first.",
      },
    ],
    mcqs: [
      {
        q: "BFS aur DFS mein kaunsa shortest path dhundta hai?",
        options: ["DFS", "BFS", "Dono", "Koi nahi"],
        correct: 1,
        explain: "BFS (Breadth-First Search) unweighted graph mein shortest path guarantee karta hai — level by level jaata hai. DFS depth mein jaata hai — shortest path guarantee nahi.",
      },
      {
        q: "Adjacency list vs Matrix — sparse graph ke liye kaunsa better hai?",
        options: [
          "Matrix — faster access",
          "List — O(V+E) space, Matrix O(V²) waste karta hai",
          "Koi farak nahi",
          "Matrix — less memory",
        ],
        correct: 1,
        explain: "Sparse graph mein edges bahut kam hote hain. Matrix O(V²) space waste karta hai. Adjacency list O(V+E) space use karta hai jo efficient hai.",
      },
    ],
    mcqsEn: [
      {
        q: "Which traversal finds the shortest path in an unweighted graph?",
        options: ["DFS", "BFS", "Both", "Neither"],
        correct: 1,
        explain: "BFS (Breadth-First Search) guarantees shortest path in unweighted graphs — it explores level by level. DFS goes deep and doesn't guarantee shortest path.",
      },
    ],
    cheatsheet: [
      "Adjacency list = defaultdict(list) — sparse graphs",
      "BFS = queue + visited set — shortest path",
      "DFS = recursion + visited — connected components",
      "Topological sort = Kahn's (BFS + in-degree)",
      "Number of Islands = DFS on 2D grid",
      "Cycle detection = back edge in DFS",
      "visited set = duplicate traverse rokna",
    ],
    cheatsheetEn: [
      "Adjacency list = defaultdict(list) — best for sparse graphs",
      "BFS = queue + visited set — shortest path, level-order",
      "DFS = recursion + visited — depth, connected components",
      "Topological sort = Kahn's BFS with in-degree",
      "Number of Islands = DFS/BFS on 2D grid",
      "Always use a visited set to avoid revisiting nodes",
    ],
    revision: [
      "Graph = vertices + edges, directed/undirected",
      "Adjacency list = defaultdict(list) — space efficient",
      "BFS = shortest path (unweighted), DFS = deep traverse",
      "Topological sort = dependency order (DAG)",
    ],
    revisionEn: [
      "Graph = vertices + edges, can be directed or undirected",
      "Adjacency list = defaultdict(list) — most common representation",
      "BFS = shortest path in unweighted graphs",
      "DFS = explore connected components, cycle detection",
      "Topological sort = process DAG nodes in dependency order",
    ],
  },

  {
    id: "dsa-sorting",
    title: "Sorting Algorithms — Data Arrange Karo",
    titleEn: "Sorting Algorithms — Arranging Data",
    emoji: "🔄",
    category: "Algorithms",
    description: "Bubble, Selection, Insertion, Merge, Quick, Heap Sort — sab implement karo",
    descriptionEn: "Bubble, Selection, Insertion, Merge, Quick, Heap Sort — implement them all",
    sections: [
      {
        heading: "O(n²) Sorting Algorithms — Basics",
        content: `Basic sorting algorithms samajhne ke liye simple hain lekin bade data ke liye slow:`,
        code: `# ─────────────────────────────────────
# BUBBLE SORT — adjacent elements compare/swap
# Time: O(n²) avg/worst, O(n) best (sorted)
# Space: O(1)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped:
            break   # already sorted!
    return arr

# ─────────────────────────────────────
# SELECTION SORT — minimum dhundo, swap karo
# Time: O(n²) always, Space: O(1)
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# ─────────────────────────────────────
# INSERTION SORT — cards ki tarah sort karo
# Time: O(n²) avg/worst, O(n) best (nearly sorted)
# Space: O(1) | Best for small or nearly sorted arrays!
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]   # shift right
            j -= 1
        arr[j+1] = key
    return arr

arr = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(arr[:]))     # [11, 12, 22, 25, 34, 64, 90]
print(selection_sort(arr[:]))  # [11, 12, 22, 25, 34, 64, 90]
print(insertion_sort(arr[:]))  # [11, 12, 22, 25, 34, 64, 90]`,
        language: "python",
      },
      {
        heading: "O(n log n) Sorting — Production-Ready",
        content: `Ye algorithms large data ke liye use hote hain — interviews mein inhe jaanna zaroori hai:`,
        code: `# MERGE SORT — Divide & Conquer
# Time: O(n log n) always, Space: O(n)
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])    # divide
    right = merge_sort(arr[mid:])   # divide
    return merge(left, right)       # conquer

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# ─────────────────────────────────────
# QUICK SORT — Pivot use karke partition
# Time: O(n log n) avg, O(n²) worst (sorted array!)
# Space: O(log n)
def quick_sort(arr):
    if len(arr) <= 1: return arr
    pivot = arr[len(arr) // 2]   # middle as pivot
    left  = [x for x in arr if x < pivot]
    mid   = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + mid + quick_sort(right)

# ─────────────────────────────────────
arr = [38, 27, 43, 3, 9, 82, 10]
print(merge_sort(arr))   # [3, 9, 10, 27, 38, 43, 82]
print(quick_sort(arr))   # [3, 9, 10, 27, 38, 43, 82]

# Python ka built-in sort — Timsort (Merge + Insertion)
arr.sort()                      # in-place
sorted_arr = sorted(arr)        # new list

# Custom sort
students = [("Rahul", 85), ("Priya", 92), ("Ali", 78)]
students.sort(key=lambda x: x[1], reverse=True)  # by score descending

# ─────────────────────────────────────
# COUNTING SORT — O(n+k), only integers
def counting_sort(arr, max_val):
    count = [0] * (max_val + 1)
    for x in arr:
        count[x] += 1
    return [x for x, c in enumerate(count) for _ in range(c)]

print(counting_sort([4,2,2,8,3,3,1], 8))  # [1,2,2,3,3,4,8]`,
        language: "python",
        diagram: `
SORTING COMPARISON:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Algorithm    Best    Avg     Worst   Space  Stable?
  ─────────────────────────────────────────────────
  Bubble       O(n)    O(n²)   O(n²)   O(1)   Yes
  Selection    O(n²)   O(n²)   O(n²)   O(1)   No
  Insertion    O(n)    O(n²)   O(n²)   O(1)   Yes
  Merge        O(nlogn)O(nlogn)O(nlogn)O(n)   Yes ← Best stable
  Quick        O(nlogn)O(nlogn)O(n²)   O(logn)No  ← Fastest avg
  Heap         O(nlogn)O(nlogn)O(nlogn)O(1)   No
  Counting     O(n+k)  O(n+k)  O(n+k)  O(k)  Yes ← Integers only

  Python's sort() = Timsort = O(n log n), stable, O(n) space

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        tip: "Python mein hamesha arr.sort() ya sorted() use karo — Timsort O(n log n) guaranteed, highly optimized. Khud implement sirf interviews/learning ke liye.",
      },
    ],
    sectionsEn: [
      {
        heading: "Sorting Algorithms — Overview",
        content: `Understanding sorting helps you choose the right algorithm and explains why Python's built-in sort is so efficient.`,
        code: `# Merge Sort — O(n log n) stable
def merge_sort(arr):
    if len(arr) <= 1: return arr
    mid = len(arr) // 2
    left, right = merge_sort(arr[:mid]), merge_sort(arr[mid:])
    result, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]: result.append(left[i]); i += 1
        else: result.append(right[j]); j += 1
    return result + left[i:] + right[j:]

# Quick Sort — O(n log n) average
def quick_sort(arr):
    if len(arr) <= 1: return arr
    p = arr[len(arr)//2]
    return quick_sort([x for x in arr if x < p]) + \
           [x for x in arr if x == p] + \
           quick_sort([x for x in arr if x > p])

# Python built-in: Timsort — O(n log n), stable, highly optimized
arr.sort()                          # in-place
sorted_copy = sorted(arr)           # returns new list
sorted_custom = sorted(arr, key=lambda x: x[1], reverse=True)`,
        language: "python",
        tip: "In production, always use Python's built-in sort() — it's Timsort, O(n log n) guaranteed, and highly optimized in C.",
      },
    ],
    mcqs: [
      {
        q: "Merge Sort ki worst-case time complexity?",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        correct: 1,
        explain: "Merge Sort hamesha O(n log n) hai — best, average, worst sab cases mein. Divide & Conquer use karta hai. Quick Sort ka worst case O(n²) ho sakta hai.",
      },
      {
        q: "Python ka built-in sort() kaunsa algorithm use karta hai?",
        options: ["Quick Sort", "Merge Sort", "Timsort (Merge + Insertion hybrid)", "Bubble Sort"],
        correct: 2,
        explain: "Python Timsort use karta hai — Merge Sort aur Insertion Sort ka hybrid. O(n log n) worst case, stable, real-world data pe very fast.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the worst-case time complexity of Merge Sort?",
        options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
        correct: 1,
        explain: "Merge Sort is always O(n log n) — best, average, and worst case. It uses divide and conquer. Quick Sort can degrade to O(n²) in worst case.",
      },
    ],
    cheatsheet: [
      "Bubble/Selection/Insertion = O(n²), simple",
      "Merge Sort = O(n log n) stable, O(n) space",
      "Quick Sort = O(n log n) avg, O(n²) worst",
      "Python sort() = Timsort O(n log n) stable",
      "arr.sort() in-place, sorted() new list",
      "sorted(arr, key=func, reverse=True) = custom sort",
      "Counting Sort = O(n+k), integers only",
    ],
    cheatsheetEn: [
      "Bubble/Selection/Insertion = O(n²), simple but slow",
      "Merge Sort = O(n log n) always, stable, O(n) extra space",
      "Quick Sort = O(n log n) average, O(n²) worst case",
      "Python sort() = Timsort, O(n log n), stable",
      "arr.sort() = in-place, sorted() = new sorted list",
      "sorted(arr, key=func, reverse=True) = custom sort",
    ],
    revision: [
      "Bubble/Selection/Insertion = O(n²) — small arrays",
      "Merge = O(n log n) stable, Quick = O(n log n) avg",
      "Python = Timsort (best of both) — production mein use karo",
      "sorted(key=, reverse=) = custom sorting Python mein",
    ],
    revisionEn: [
      "Bubble/Selection/Insertion = O(n²) — for small arrays",
      "Merge Sort = O(n log n) always, stable",
      "Quick Sort = O(n log n) avg, can be O(n²) worst case",
      "Python built-in = Timsort, always use in production",
    ],
  },

  {
    id: "dsa-searching",
    title: "Searching Algorithms — Data Dhundo",
    titleEn: "Searching Algorithms — Finding Data",
    emoji: "🔍",
    category: "Algorithms",
    description: "Linear search, Binary search, aur variations — sorted/rotated arrays mein search",
    descriptionEn: "Linear search, Binary search, and variations — searching in sorted/rotated arrays",
    sections: [
      {
        heading: "Linear aur Binary Search",
        content: `Linear search = ek ek check karo O(n). Binary search = sorted array mein half-half O(log n).`,
        code: `# LINEAR SEARCH — O(n)
def linear_search(arr, target):
    for i, x in enumerate(arr):
        if x == target:
            return i   # index return karo
    return -1          # not found

# ─────────────────────────────────────
# BINARY SEARCH — O(log n) (SORTED array only!)
def binary_search(arr, target):
    low, high = 0, len(arr) - 1

    while low <= high:
        mid = low + (high - low) // 2  # overflow safe

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1    # right half mein search
        else:
            high = mid - 1   # left half mein search

    return -1  # not found

arr = [1, 3, 5, 7, 9, 11, 13, 15]
print(binary_search(arr, 7))    # 3 (index)
print(binary_search(arr, 6))    # -1

# Python built-in binary search
import bisect
idx = bisect.bisect_left(arr, 7)   # left insertion point
print(arr[idx] == 7)               # True — found

# ─────────────────────────────────────
# FIRST AND LAST POSITION (Binary Search variation)
def find_first_last(arr, target):
    def find_bound(find_left):
        lo, hi, result = 0, len(arr)-1, -1
        while lo <= hi:
            mid = (lo + hi) // 2
            if arr[mid] == target:
                result = mid
                if find_left: hi = mid - 1  # left boundary
                else: lo = mid + 1           # right boundary
            elif arr[mid] < target: lo = mid + 1
            else: hi = mid - 1
        return result

    return [find_bound(True), find_bound(False)]

print(find_first_last([5,7,7,8,8,10], 8))  # [3, 4]
print(find_first_last([5,7,7,8,8,10], 6))  # [-1, -1]`,
        language: "python",
        tip: "mid = low + (high - low) // 2 use karo, (low + high) // 2 nahi — large numbers mein integer overflow ho sakta hai (C/Java mein relevant, Python mein big int hai).",
      },
      {
        heading: "Binary Search Variations — Advanced",
        content: `Binary search sirf simple search nahi hai — bahut saari problems mein apply hota hai:`,
        code: `# ─────────────────────────────────────
# SEARCH IN ROTATED SORTED ARRAY
# [4,5,6,7,0,1,2] — rotate hua sorted array
def search_rotated(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target: return mid

        # Left half sorted hai?
        if arr[low] <= arr[mid]:
            if arr[low] <= target < arr[mid]:
                high = mid - 1
            else:
                low = mid + 1
        # Right half sorted hai
        else:
            if arr[mid] < target <= arr[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1

print(search_rotated([4,5,6,7,0,1,2], 0))  # 4
print(search_rotated([4,5,6,7,0,1,2], 3))  # -1

# ─────────────────────────────────────
# FIND MINIMUM IN ROTATED SORTED ARRAY
def find_min_rotated(arr):
    low, high = 0, len(arr) - 1
    while low < high:
        mid = (low + high) // 2
        if arr[mid] > arr[high]:
            low = mid + 1   # minimum right half mein hai
        else:
            high = mid      # minimum left half ya mid mein
    return arr[low]

print(find_min_rotated([3,4,5,1,2]))   # 1
print(find_min_rotated([4,5,6,7,0,1,2]))  # 0

# ─────────────────────────────────────
# BINARY SEARCH ON ANSWER — Sqrt(x)
def my_sqrt(x):
    if x < 2: return x
    low, high = 1, x // 2
    while low <= high:
        mid = (low + high) // 2
        if mid * mid == x: return mid
        elif mid * mid < x: low = mid + 1
        else: high = mid - 1
    return high  # floor

print(my_sqrt(8))   # 2 (floor of √8 = 2.828)
print(my_sqrt(25))  # 5

# ─────────────────────────────────────
# BINARY SEARCH ON ANSWER — Minimum capacity
def min_days_to_ship(weights, days):
    """Minimum capacity dhundo ships ke liye"""
    def can_ship(capacity):
        current_load, d = 0, 1
        for w in weights:
            if current_load + w > capacity:
                d += 1; current_load = 0
            current_load += w
        return d <= days

    low, high = max(weights), sum(weights)
    while low < high:
        mid = (low + high) // 2
        if can_ship(mid): high = mid
        else: low = mid + 1
    return low

print(min_days_to_ship([1,2,3,4,5,6,7,8,9,10], 5))  # 15`,
        language: "python",
        tip: "'Binary Search on Answer' technique: answer ek range mein hota hai (lo, hi). Feasibility check function banao, binary search se minimum/maximum dhundo.",
      },
    ],
    sectionsEn: [
      {
        heading: "Linear and Binary Search",
        content: `Linear search = check one by one O(n). Binary search = halve the search space each step O(log n) — requires sorted array.`,
        code: `# Binary Search — O(log n) on sorted array
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: low = mid + 1
        else: high = mid - 1
    return -1

# Python bisect module
import bisect
arr = [1, 3, 5, 7, 9]
bisect.bisect_left(arr, 5)    # 2 — index where 5 would be
bisect.insort(arr, 6)         # inserts 6 in sorted position

# Search in rotated sorted array
def search_rotated(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target: return mid
        if arr[lo] <= arr[mid]:  # left sorted
            if arr[lo] <= target < arr[mid]: hi = mid - 1
            else: lo = mid + 1
        else:  # right sorted
            if arr[mid] < target <= arr[hi]: lo = mid + 1
            else: hi = mid - 1
    return -1`,
        language: "python",
        tip: "'Binary Search on Answer' — when the answer is a number in a range, binary search on the range and check feasibility.",
      },
    ],
    mcqs: [
      {
        q: "Binary search ke liye kya condition zaroor honi chahiye?",
        options: ["Array ki size prime honi chahiye", "Array sorted hona chahiye", "Array unique elements hone chahiye", "Array integers ka hona chahiye"],
        correct: 1,
        explain: "Binary Search sirf sorted arrays pe kaam karta hai. Unsorted mein mid pe left/right decision nahi le sakte. Pehle sort karo ya direct binary search use karo.",
      },
      {
        q: "Binary search ka time complexity kya hai?",
        options: ["O(n)", "O(n²)", "O(log n)", "O(1)"],
        correct: 2,
        explain: "Binary search har step pe search space half karta hai. n elements ke liye log₂(n) steps. 1 billion elements mein sirf 30 steps!",
      },
    ],
    mcqsEn: [
      {
        q: "What is the prerequisite for binary search?",
        options: ["Array size must be prime", "Array must be sorted", "Array must have unique elements", "Array must contain integers"],
        correct: 1,
        explain: "Binary search only works on sorted arrays. On an unsorted array, you can't determine which half to search. Sort first or use linear search.",
      },
    ],
    cheatsheet: [
      "Linear search = O(n), any array",
      "Binary search = O(log n), SORTED only",
      "mid = low + (high - low) // 2",
      "arr[mid] < target → low = mid + 1",
      "arr[mid] > target → high = mid - 1",
      "bisect.bisect_left(arr, x) — Python built-in",
      "Binary search on answer = range pe binary search",
    ],
    cheatsheetEn: [
      "Linear search = O(n), works on any array",
      "Binary search = O(log n), sorted arrays only",
      "mid = low + (high - low) // 2 (overflow-safe)",
      "arr[mid] < target → low = mid + 1 (go right)",
      "arr[mid] > target → high = mid - 1 (go left)",
      "bisect module = Python's built-in binary search",
      "Binary search on answer = search over the answer range",
    ],
    revision: [
      "Binary search = sorted array, O(log n), half-half",
      "mid = lo + (hi - lo) // 2",
      "Rotated array search = kaunsa half sorted hai decide karo",
      "Binary search on answer = feasibility check pattern",
    ],
    revisionEn: [
      "Binary search = sorted array only, O(log n)",
      "mid = lo + (hi - lo) // 2 (always use this form)",
      "Rotated sorted array = determine which half is sorted",
      "Binary search on answer = binary search over the answer range",
    ],
  },

  {
    id: "dsa-recursion-dp",
    title: "Recursion & Dynamic Programming",
    titleEn: "Recursion & Dynamic Programming",
    emoji: "🧮",
    category: "Algorithms",
    description: "Recursion patterns, memoization, tabulation — DP ki puri duniya",
    descriptionEn: "Recursion patterns, memoization, tabulation — the complete world of DP",
    sections: [
      {
        heading: "Recursion — Function khud ko call kare",
        content: `Recursion tab use karo jab problem smaller subproblems mein tode ja sake. Tree/Graph traversal, divide & conquer.`,
        code: `# Recursion ki 3 key components:
# 1. BASE CASE — kab rukna hai
# 2. RECURSIVE CALL — smaller problem
# 3. COMBINE — results combine karo

# ─────────────────────────────────────
# Power function — Fast Exponentiation
def power(base, exp):
    if exp == 0: return 1
    if exp % 2 == 0:
        half = power(base, exp // 2)
        return half * half           # O(log n)!
    return base * power(base, exp - 1)

print(power(2, 10))  # 1024

# ─────────────────────────────────────
# Generate all subsets (Power Set)
def subsets(nums):
    result = []
    def backtrack(start, current):
        result.append(current[:])  # copy add karo
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()   # undo (backtrack)

    backtrack(0, [])
    return result

print(subsets([1, 2, 3]))
# [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

# ─────────────────────────────────────
# Permutations
def permutations(nums):
    result = []
    def backtrack(start):
        if start == len(nums):
            result.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]  # swap
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]  # undo

    backtrack(0)
    return result

print(permutations([1,2,3]))
# [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]`,
        language: "python",
      },
      {
        heading: "Dynamic Programming — Overlapping Subproblems",
        content: `DP = Recursion + Memoization. Subproblems baar baar solve hote hain — store karo, dobara mat solve karo.`,
        code: `# ─────────────────────────────────────
# FIBONACCI — Recursion vs DP comparison

# Naive recursion: O(2^n) — terrible!
def fib_naive(n):
    if n <= 1: return n
    return fib_naive(n-1) + fib_naive(n-2)  # baar baar same compute

# Memoization (Top-Down DP): O(n) time, O(n) space
from functools import lru_cache

@lru_cache(maxsize=None)
def fib_memo(n):
    if n <= 1: return n
    return fib_memo(n-1) + fib_memo(n-2)

print(fib_memo(50))  # 12586269025 (instant!)

# Tabulation (Bottom-Up DP): O(n) time, O(n) space
def fib_tab(n):
    if n <= 1: return n
    dp = [0] * (n + 1)
    dp[1] = 1
    for i in range(2, n + 1):
        dp[i] = dp[i-1] + dp[i-2]
    return dp[n]

# Space optimized: O(1) space
def fib_optimal(n):
    if n <= 1: return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# ─────────────────────────────────────
# COIN CHANGE — minimum coins
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # base case: 0 amount = 0 coins

    for coin in coins:
        for a in range(coin, amount + 1):
            dp[a] = min(dp[a], dp[a - coin] + 1)

    return dp[amount] if dp[amount] != float('inf') else -1

print(coin_change([1, 5, 6, 9], 11))  # 2 (5+6)

# ─────────────────────────────────────
# LONGEST COMMON SUBSEQUENCE (LCS)
def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n+1) for _ in range(m+1)]

    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = 1 + dp[i-1][j-1]
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[m][n]

print(lcs("ABCBDAB", "BDCAB"))  # 4 (BCAB)

# ─────────────────────────────────────
# 0/1 KNAPSACK
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n+1):
        for w in range(capacity + 1):
            dp[i][w] = dp[i-1][w]  # item nahi liya
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w],
                               values[i-1] + dp[i-1][w - weights[i-1]])

    return dp[n][capacity]

print(knapsack([1,3,4,5], [1,4,5,7], 7))  # 9`,
        language: "python",
        tip: "@lru_cache(maxsize=None) se recursive function memoize ho jaata hai — ek line mein Top-Down DP! Production mein functools.cache (Python 3.9+) use karo.",
      },
    ],
    sectionsEn: [
      {
        heading: "Dynamic Programming — Store and Reuse",
        content: `DP = Recursion + Memoization (caching). When recursive subproblems overlap, store results instead of recomputing.`,
        code: `from functools import lru_cache

# Fibonacci — naive O(2^n) → DP O(n)
@lru_cache(maxsize=None)   # memoize automatically!
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

print(fib(100))  # instant!

# Coin Change — min coins to make amount
def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for coin in coins:
        for a in range(coin, amount + 1):
            dp[a] = min(dp[a], dp[a - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

coin_change([1, 5, 6, 9], 11)  # 2 (5+6)`,
        language: "python",
        tip: "@lru_cache(maxsize=None) gives you top-down DP in one line. For bottom-up, build a dp table iteratively.",
      },
    ],
    mcqs: [
      {
        q: "Dynamic Programming aur simple recursion mein main difference?",
        options: [
          "DP sirf iterative hota hai",
          "DP overlapping subproblems ke results store karke reuse karta hai",
          "Recursion zyada fast hai",
          "DP sirf sorting ke liye hai",
        ],
        correct: 1,
        explain: "DP overlapping subproblems memoize (store) karta hai taaki baar baar same computation na ho. Fibonacci naive O(2^n) → DP O(n).",
      },
      {
        q: "Memoization aur Tabulation mein kya fark hai?",
        options: [
          "Koi farak nahi",
          "Memoization = top-down (recursion+cache), Tabulation = bottom-up (iterative table)",
          "Tabulation slower hai",
          "Memoization sirf numbers ke liye",
        ],
        correct: 1,
        explain: "Memoization = top-down: recursive approach, results cache mein store. Tabulation = bottom-up: iteratively table fill karo. Dono O(n) time dete hain.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the key difference between DP and plain recursion?",
        options: [
          "DP is only iterative",
          "DP stores overlapping subproblem results to avoid recomputation",
          "Recursion is faster",
          "DP is only for sorting",
        ],
        correct: 1,
        explain: "DP memoizes overlapping subproblems — each subproblem is solved once. Fibonacci naive O(2^n) → DP O(n).",
      },
    ],
    cheatsheet: [
      "Recursion = base case + recursive call + combine",
      "@lru_cache — automatic memoization",
      "Top-down DP = recursion + memo",
      "Bottom-up DP = iterative table",
      "Fibonacci O(2^n) → DP O(n)",
      "Coin change = dp[a] = min(dp[a], dp[a-coin]+1)",
      "LCS = 2D DP table",
      "0/1 Knapsack = 2D DP",
    ],
    cheatsheetEn: [
      "Recursion = base case + recursive call + combine",
      "@lru_cache — one-line memoization",
      "Top-down DP = recursion + memoization cache",
      "Bottom-up DP = iterative dp table filling",
      "Fibonacci: O(2^n) naive → O(n) with DP",
      "Coin change = dp[a] = min(dp[a], dp[a-coin]+1)",
      "LCS = fill 2D table row by row",
    ],
    revision: [
      "DP = recursion + memoization (overlapping subproblems)",
      "@lru_cache = top-down DP ek line mein",
      "Bottom-up = dp[] array iteratively fill karo",
      "Coin change, LCS, Knapsack = classic DP problems",
    ],
    revisionEn: [
      "DP = recursion + memoization for overlapping subproblems",
      "@lru_cache = top-down DP in one line",
      "Bottom-up = fill dp array iteratively (no recursion)",
      "Classic DP: Fibonacci, Coin Change, LCS, 0/1 Knapsack",
    ],
  },

  {
    id: "dsa-heaps",
    title: "Heaps & Priority Queue",
    titleEn: "Heaps & Priority Queue",
    emoji: "⛰️",
    category: "Advanced DS",
    description: "Min heap, max heap, heapq module, aur top-K problems",
    descriptionEn: "Min heap, max heap, Python heapq module, and top-K problems",
    sections: [
      {
        heading: "Heap kya hai? Priority Queue kaise kaam karta hai?",
        content: `Heap = complete binary tree jisme parent hamesha child se chota (min-heap) ya bada (max-heap) hota hai.

**Priority Queue** = heap ki help se implement hoti hai. O(log n) insert/delete, O(1) min/max access.`,
        diagram: `
MIN HEAP:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

        1           ← Always minimum at root
       / \\
      3    2
     / \\  / \\
    9   7 5   8

  Array representation: [1, 3, 2, 9, 7, 5, 8]
  Parent of i = (i-1) // 2
  Left child = 2*i + 1
  Right child = 2*i + 2

  Operations:
  heappush: O(log n)
  heappop (min): O(log n)
  peek min: O(1)  heap[0]

MAX HEAP: negate values — push(-val)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `import heapq

# Python heapq = min-heap
heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 2)
heapq.heappush(heap, 8)
heapq.heappush(heap, 1)
heapq.heappush(heap, 9)

print(heap[0])               # 1 — minimum
print(heapq.heappop(heap))   # 1 — extract min
print(heapq.heappop(heap))   # 2
print(heap)

# List ko heap banao
nums = [5, 2, 8, 1, 9, 3]
heapq.heapify(nums)   # O(n) in-place
print(nums)           # heap property maintain

# Max heap — values negate karo
max_heap = []
for num in [5, 2, 8, 1, 9, 3]:
    heapq.heappush(max_heap, -num)
print(-heapq.heappop(max_heap))  # 9 (maximum)

# ─────────────────────────────────────
# TOP K FREQUENT ELEMENTS
from collections import Counter
def top_k_frequent(nums, k):
    count = Counter(nums)
    # k largest by frequency
    return heapq.nlargest(k, count.keys(), key=count.get)

print(top_k_frequent([1,1,1,2,2,3], 2))  # [1, 2]

# ─────────────────────────────────────
# K CLOSEST POINTS TO ORIGIN
def k_closest(points, k):
    # (distance², x, y) heap mein rakhte hain
    return heapq.nsmallest(k, points, key=lambda p: p[0]**2 + p[1]**2)

print(k_closest([[1,3],[-2,2],[5,8],[0,1]], 2))  # [[-2,2],[0,1]]

# ─────────────────────────────────────
# MERGE K SORTED LISTS
def merge_k_sorted(lists):
    """K sorted lists ko ek sorted list mein merge karo"""
    heap = []
    result = []

    # Har list ka pehla element heap mein dalo
    for i, lst in enumerate(lists):
        if lst:
            heapq.heappush(heap, (lst[0], i, 0))  # (val, list_idx, elem_idx)

    while heap:
        val, i, j = heapq.heappop(heap)
        result.append(val)
        if j + 1 < len(lists[i]):
            heapq.heappush(heap, (lists[i][j+1], i, j+1))

    return result

print(merge_k_sorted([[1,4,7],[2,5,8],[3,6,9]]))
# [1, 2, 3, 4, 5, 6, 7, 8, 9]`,
        language: "python",
        tip: "Python heapq hamesha min-heap hai. Max-heap ke liye values negate karo: push(-val), pop karke -result lo.",
      },
    ],
    sectionsEn: [
      {
        heading: "Heap and Priority Queue",
        content: `Min heap = complete binary tree where parent is always smaller than children. O(log n) push/pop, O(1) peek minimum.`,
        code: `import heapq

# Python heapq = min-heap
heap = []
heapq.heappush(heap, 5)
heapq.heappush(heap, 1)
heapq.heappush(heap, 3)
heap[0]              # 1 — peek minimum O(1)
heapq.heappop(heap)  # 1 — extract minimum O(log n)

# Build heap from list
nums = [5, 2, 8, 1, 9]
heapq.heapify(nums)  # O(n) in-place

# Max heap — negate values
heapq.heappush(heap, -9)   # push -9
-heapq.heappop(heap)       # get 9

# Utility functions
heapq.nlargest(3, nums)    # top 3 largest
heapq.nsmallest(3, nums)   # top 3 smallest`,
        language: "python",
        tip: "Python heapq is always a min-heap. For max-heap, push negated values and negate after popping.",
      },
    ],
    mcqs: [
      {
        q: "Min heap mein root element kya hota hai?",
        options: ["Maximum element", "Median element", "Minimum element", "Random element"],
        correct: 2,
        explain: "Min heap mein root hamesha minimum element hota hai — O(1) access. heapq.heappop() minimum element return karta hai aur heap property maintain karta hai.",
      },
      {
        q: "K largest elements efficiently kaise dhundoge n elements mein?",
        options: [
          "Sort karo, last k lo — O(n log n)",
          "Min heap of size k — O(n log k)",
          "Nested loops — O(n²)",
          "Binary search — O(log n)",
        ],
        correct: 1,
        explain: "Size-k min heap maintain karo: har element pe, agar heap[0] < current, replace karo. O(n log k) — k chota ho toh n log n se fast.",
      },
    ],
    mcqsEn: [
      {
        q: "What is always at the root of a min-heap?",
        options: ["Maximum element", "Median element", "Minimum element", "Random element"],
        correct: 2,
        explain: "The min-heap root always contains the minimum element — accessible in O(1). heapq.heappop() returns and removes this minimum.",
      },
    ],
    cheatsheet: [
      "heapq.heappush(h, x) — O(log n)",
      "heapq.heappop(h) — O(log n), returns minimum",
      "h[0] — O(1) peek minimum",
      "heapq.heapify(list) — O(n) in-place",
      "Max heap: push(-x), pop and negate",
      "heapq.nlargest(k, iterable) — top k largest",
      "heapq.nsmallest(k, iterable) — top k smallest",
      "Top K problems → heap of size k",
    ],
    cheatsheetEn: [
      "heapq.heappush(h, x) — O(log n) insert",
      "heapq.heappop(h) — O(log n) extract minimum",
      "h[0] — O(1) peek minimum",
      "heapq.heapify(list) — O(n) build heap in-place",
      "Max heap: push negative values, negate after pop",
      "heapq.nlargest(k, it) / nsmallest(k, it) — top k",
      "Top K pattern → maintain heap of size k",
    ],
    revision: [
      "Heap = complete binary tree, parent ≤ children (min-heap)",
      "O(log n) push/pop, O(1) min access",
      "Python heapq = min-heap only",
      "Max heap = negate values (-val)",
      "Top K = heap of size k",
    ],
    revisionEn: [
      "Heap = complete binary tree, parent ≤ children (min-heap)",
      "O(log n) push/pop, O(1) peek minimum",
      "Python heapq = min-heap only",
      "Max heap = negate values (-val on push, -val on pop)",
      "Top K elements = maintain a heap of size k",
    ],
  },

  {
    id: "dsa-interview",
    title: "DSA Interview Strategies & Patterns",
    titleEn: "DSA Interview Strategies & Patterns",
    emoji: "🎯",
    category: "Interview Prep",
    description: "Interview mein kaise sochna hai, patterns recognize karna, aur common mistakes avoid karna",
    descriptionEn: "How to think in interviews, recognize patterns, and avoid common mistakes",
    sections: [
      {
        heading: "Interview Problem-Solving Framework",
        content: `Interview mein panic mat karo — ek systematic approach use karo:`,
        code: `"""
DSA INTERVIEW FRAMEWORK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STEP 1: PROBLEM CLEARLY SAMJHO (2-3 min)
  - Loud bolke examples chalao
  - Edge cases: empty array? negative numbers? duplicates?
  - Clarify constraints: array size, value range

STEP 2: BRUTE FORCE PEHLE (1 min)
  - Simple solution think karo — O(n²) bhi theek hai
  - "Brute force approach O(n²) hoga, pehle woh batata hun"
  - Shows thinking process

STEP 3: OPTIMIZE KARO
  - "Better kaise karna hai?" — pattern recognize karo
  - Time-space tradeoff: zyada space se time bachao
  - Which DS/pattern fits?

STEP 4: CODE KARO
  - Clean, readable code
  - Descriptive variable names
  - Edge cases handle karo

STEP 5: TEST KARO
  - Example input se trace karo
  - Edge cases test karo: [], [1], all same elements

STEP 6: COMPLEXITY BATAO
  - "Time: O(n), Space: O(1)"
  - Interviewer HAMESHA expect karta hai ye
"""

# Common mistake: seedha code mein jump mat karo
# Pehle approach discuss karo, phir code!`,
        language: "python",
        tip: "Interviewer problem-solving process dekhna chahta hai, sirf answer nahi. Loud thinking karo — apna thought process share karo continuously.",
      },
      {
        heading: "Pattern Recognition — Kaunsa Pattern Use Karo",
        content: `Problem type se pattern recognize karna sab se important skill hai:`,
        diagram: `
PATTERN RECOGNITION GUIDE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  PROBLEM HINT              → PATTERN
  ─────────────────────────────────────
  Sorted array + pairs      → Two Pointers
  Subarray/substring        → Sliding Window
  Top K elements            → Heap (size K)
  All combinations/subsets  → Backtracking
  Tree traversal            → DFS/BFS
  Shortest path (unweighted)→ BFS
  Shortest path (weighted)  → Dijkstra
  Cycle in list             → Fast/Slow Pointers
  Overlapping subproblems   → DP
  Sorted array search       → Binary Search
  Counting/duplicates       → Hash Map
  Stack: next greater/smaller→ Monotonic Stack
  Level order tree          → BFS + Queue
  DAG processing order      → Topological Sort
  Range queries             → Prefix Sum / Segment Tree
  ─────────────────────────────────────

  COMPLEXITY CHEATSHEET:
  O(1)     — Hash Table lookup
  O(log n) — Binary Search, Heap ops
  O(n)     — Linear scan, Two Pointers, Sliding Window
  O(n log n)— Sorting, Heap build
  O(n²)    — Nested loops (avoid!)
  O(2^n)   — Subsets, Combinations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
        code: `# PATTERN EXAMPLES:

# 1. Two Pointers — sorted array mein pair sum
arr = sorted([3, 1, 4, 1, 5, 9])
l, r = 0, len(arr) - 1
target = 10
while l < r:
    if arr[l] + arr[r] == target: print(arr[l], arr[r]); break
    elif arr[l] + arr[r] < target: l += 1
    else: r -= 1

# 2. Sliding Window — max sum subarray of size k
def max_sum(arr, k):
    s = sum(arr[:k])
    best = s
    for i in range(k, len(arr)):
        s += arr[i] - arr[i-k]
        best = max(best, s)
    return best

# 3. Backtracking — all combinations of k from n
def combine(n, k):
    result = []
    def bt(start, combo):
        if len(combo) == k:
            result.append(combo[:])
            return
        for i in range(start, n+1):
            combo.append(i)
            bt(i+1, combo)
            combo.pop()
    bt(1, [])
    return result

print(combine(4, 2))  # [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]

# 4. DP — classic fibonacci memoized
from functools import lru_cache
@lru_cache(maxsize=None)
def fib(n): return n if n <= 1 else fib(n-1) + fib(n-2)`,
        language: "python",
      },
    ],
    sectionsEn: [
      {
        heading: "Interview Problem-Solving Framework",
        content: `Don't panic in interviews — use a systematic approach that shows your thinking process.`,
        code: `"""
INTERVIEW FRAMEWORK:

1. UNDERSTAND (2-3 min)
   - Talk through examples aloud
   - Clarify edge cases: empty? negatives? duplicates?
   - Ask about constraints: array size, value range

2. BRUTE FORCE (1 min)
   - State the naive solution first
   - "Brute force is O(n²), I'll optimize from there"
   - Shows structured thinking

3. OPTIMIZE
   - Identify bottleneck, think about patterns
   - Which data structure removes the bottleneck?
   - Time-space tradeoff

4. CODE
   - Write clean, readable code
   - Meaningful variable names
   - Handle edge cases

5. TEST
   - Trace through your example
   - Test edge cases: [], single element, all same

6. ANALYZE
   - Always state: "Time: O(n), Space: O(1)"
   - Interviewers expect this every time
"""`,
        language: "python",
        tip: "The interviewer wants to see your thought process, not just the answer. Think out loud throughout the problem.",
      },
    ],
    mcqs: [
      {
        q: "Problem 'Find top K frequent elements' ke liye best approach?",
        options: [
          "Sab sort karo O(n log n)",
          "Nested loops O(n²)",
          "Counter + Heap of size K = O(n log k)",
          "Binary search O(log n)",
        ],
        correct: 2,
        explain: "Counter se frequency count O(n), phir min-heap of size K maintain karo O(n log k). K chota ho toh O(n log n) sort se faster hoga.",
      },
      {
        q: "Subarray sum equals K efficiently solve karne ka approach?",
        options: [
          "Nested loops O(n²)",
          "Sorting se O(n log n)",
          "Prefix sum + Hash Map O(n)",
          "Binary search O(log n)",
        ],
        correct: 2,
        explain: "Prefix sum + hash map: prefix_sum - k ka count hash map mein check karo. O(n) time, O(n) space.",
      },
    ],
    mcqsEn: [
      {
        q: "What is the best approach for 'Top K Frequent Elements'?",
        options: [
          "Sort everything O(n log n)",
          "Nested loops O(n²)",
          "Counter + Heap of size K = O(n log k)",
          "Binary search O(log n)",
        ],
        correct: 2,
        explain: "Count frequencies with Counter O(n), maintain min-heap of size K O(n log k). Faster than full sort when K is small.",
      },
    ],
    cheatsheet: [
      "Sorted array + pairs → Two Pointers",
      "Subarray/substring → Sliding Window",
      "Top K → Heap size K",
      "All combos/subsets → Backtracking",
      "Shortest path unweighted → BFS",
      "Cycle in list → Fast/Slow pointer",
      "Count/lookup → Hash Map",
      "Tree → DFS (recursion) or BFS (queue)",
      "Overlap subproblems → DP + memoization",
      "Pehle brute force batao, phir optimize",
    ],
    cheatsheetEn: [
      "Sorted array + pair sum → Two Pointers",
      "Subarray/substring constraint → Sliding Window",
      "Top K elements → Min Heap of size K",
      "All combinations/subsets → Backtracking",
      "Shortest path (unweighted) → BFS",
      "Cycle in linked list → Fast/Slow pointer",
      "Count/frequency/lookup → Hash Map",
      "Tree → DFS (recursion) or BFS (queue)",
      "Overlapping subproblems → DP + memoization",
      "Always state brute force first, then optimize",
    ],
    revision: [
      "Framework: understand → brute force → optimize → code → test → complexity",
      "Pattern recognition = interview ka most important skill",
      "Hamesha time + space complexity batao",
      "Loud thinking = interviewer ko process dikhao",
    ],
    revisionEn: [
      "Framework: understand → brute force → optimize → code → test → complexity",
      "Pattern recognition is the most important interview skill",
      "Always state time and space complexity after solving",
      "Think out loud — interviewers want to see your process",
    ],
  },
];

export const dsaInterviews = [
  {
    q: "Array aur Linked List mein kya fark hai?",
    a: "Array: contiguous memory, O(1) random access, O(n) insert/delete middle. Linked List: non-contiguous, O(n) access, O(1) insert/delete (agar pointer mile). Array cache-friendly hai.",
    tags: ["arrays", "linked-list", "basics"],
  },
  {
    q: "Stack aur Queue mein difference?",
    a: "Stack LIFO (Last In First Out) — push/pop top se. Queue FIFO (First In First Out) — enqueue rear, dequeue front. Stack: function calls, undo. Queue: BFS, task scheduling.",
    tags: ["stack", "queue", "basics"],
  },
  {
    q: "Hash Table collision kaise handle karta hai?",
    a: "1. Chaining: har bucket pe linked list (Python dict use karta hai). 2. Open Addressing: next empty slot dhundo. Python dict load factor 0.67 pe resize karta hai.",
    tags: ["hash-table", "intermediate"],
  },
  {
    q: "DFS aur BFS mein kab kaunsa use karte hain?",
    a: "BFS: shortest path (unweighted), level-order tree, nearest neighbor. DFS: cycle detection, topological sort, all paths, connected components. BFS = queue, DFS = recursion/stack.",
    tags: ["graphs", "trees", "intermediate"],
  },
  {
    q: "Dynamic Programming kab use karte hain?",
    a: "Jab problem mein: 1. Optimal substructure ho (subproblems ka optimal solution → overall optimal), 2. Overlapping subproblems hon. Classic: Fibonacci, Coin Change, LCS, Knapsack.",
    tags: ["dp", "advanced"],
  },
  {
    q: "Binary Search rotated sorted array mein kaise apply karte hain?",
    a: "Ek half hamesha sorted hoti hai. Check karo: arr[lo] ≤ arr[mid] → left sorted. Target us range mein hai? left search, else right search. O(log n).",
    tags: ["binary-search", "arrays", "intermediate"],
  },
];
