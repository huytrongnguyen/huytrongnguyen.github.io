# Introduction to Python and programming

1. Python is a calculator
2. A variable is a container
3. Different types can not be compared
4. A program is a recipe

# The Python interpreter

* REPL (read-eval-print loop)
  * Read an expression
  * Evaluate the expression
  * Print the result

# Control flow: Loops

```python
for f in [30, 40, 50, 60, 70]:
  c = (f - 32) / 9.0 * 5
  print(f, c)
print("All done")

for char in "happy":
  print(char)

for i in range(5):
  print(i) # 0 1 2 3 4

for i in range(1,5):
  print(i) # 1 2 3 4

for i in range(1,10,2):
  print(i) # 1 3 5 7 9

result = 0
for element in range(11):
  result = result + (2.0 / 3.0) ** element # (2/3)^0 + (2/3)^1 + (2/3)^2 + ... + (2/3)^10
```

# Functions and abstraction

```python
def myfunc(n):
  total = 0
  for i in range(n):
    total = total + i
  return total

print(myfunc(4))
```

Breaking down a program into functions is the fundamental activity of programming!

Aside: Functions are values

The function can be an expression

```python
def double(x):
  return 2 * x
def doubler():
  return double
print(doubler()(2.718))

myfns = [math.sqrt, int, double, math.cos]
print(myfns[1](3.14))
print(myfns[2](3.14))
print(myfns[3](3.14))
```

# Control flow: if statements

```python
val = -10

# calculate absolute value of val
if val < 0:
  result = -val
else:
  result = val

print(result)

# height is in km
if height > 100:
  print ("space")
elif height > 50:
  print ("mesosphere")
elif height > 20:
  print ("stratosphere")
else:
  print("troposphere")
```

# List

List Creation

```python
a = [ 3, 1, 2 * 2, 1, 10 / 2, 10 - 1 ]
b = [ 5, 3, 'hi' ]
c = [ [1, 2], [3, 4], [5, 6] ]
```

List Querying

```python
mylist[index]         # the single element stored at that location
mylist[start:end]     # the sublist that starts at index start and ends at index end – 1
mylist[:]             # evaluates to the whole list
mylist[0:len(mylist)] # also does
mylist[:end]          # if start is omitted: defaults to 0
mylist[start:]        # if end is omitted: defaults to len(mylist)
mylist[-1]            # last element in list
mylist[-2]            # next to last element
x in mylist           # returns True if x is found in mylist
mylist.index(x)       # return the integer index in the list of the first item whose value is x
mylist.count(x)       # return the number of times x appears in the list
```

List Modification

```python
mylist.append(x)
mylist.extend(L)
mylist.insert(i, x)

mylist.remove(x)
mylist.pop([i])

mylist[index] = newvalue
mylist[start:end] = newsublist  # can change the length of the list
mylist[start:end] = []          # removes mylist[start]… mylist[end – 1]

mylist.sort()
mylist.reverse()
```

# File I/O

* A file object represents data on your disk drive
  * It is an object in your Python program that you create
  * Can read from it and write to it in your program
* A filename (usually a string) states where to find the data on your disk drive
  * Can be used to find/create a file
  * Two types of filenames
    * An Absolute filename gives a specific location on disk:
      * `"/home/efg/class/160/18sp/lectures/file_io.pptx"`
      * `"C:\Users\efg\My Documents\homework3\images\Husky.png"`
    * A Relative filename gives a location relative to the current working directory:
      * `"lectures/file_io.pptx"`
      * `"images\Husky.png"`
      * `"data\test-small.fastq"`

```python
import os
print "The current working directory is", os.getcwd() # get current working directory

# Open takes a filename and returns a file object.
# This fails if the file cannot be found & opened.
myfile = open("datafile.dat")

# Will create datafile.dat if it does not already
# exist, if datafile.dat already exists, then it
# will be OVERWRITTEN
myfile = open("datafile.dat", "w")

# If datafile.dat already exists, then we will
# append what we write to the end of that file
myfile = open("datafile.dat", "a")
```

Reading a file

```python
# Open takes a filename and returns a file object.
# This fails if the file cannot be found & opened.
myfile = open("datafile.dat")

# Approach 1: Process one line at a time
for line_of_text in myfile:
  # process line_of_text

# Approach 2: Process entire file at once
all_data_as_a_big_string = myfile.read()

myfile.close() # close the file when done reading

# Count the number of words in a text file
in_file = "thesis.txt"
myfile = open(in_file)
num_words = 0
for line_of_text in myfile:
  word_list = line_of_text.split()
  num_words += len(word_list)
myfile.close()

print ("Total words in file: ", num_words)
```

Writing a file

```python
# Replaces any existing file of this name
myfile = open("output.dat", "w")

# Just like printing output
myfile.write("a bunch of data")
myfile.write("a line of text\n")

myfile.write(4)
myfile.write(str(4))

myfile.close()
```

# Sets

Mathematical set: a collection of values, without duplicates or order

```python
# Direct mathematical syntax:
odd = { 1, 3, 5 }
prime = { 2, 3, 5 }

# Construct from a list:
odd = set( [1, 3, 5] )
prime = set( [2, 3, 5] )
empty = set( [] ) # or set( )
```

Operations

```python
4 in prime  # False
odd | prime # Union: { 1, 2, 3, 5 }
odd & prime # Intersection: { 3, 5 }
odd - prime # Difference: { 1 }
```

Modifying a set

```python
myset.add(newelt)
myset.remove(elt)   # elt must be in myset or raises err
myset.discard(elt)  # never errs
```

# Dictionaries

* A dictionary maps each key to a value
* Order does not matter
* Given a key, can look up a value
  * Given a value, cannot look up its key
* No duplicate keys
  * Two or more keys may map to the same value
* Keys and values are Python values
  * Keys must be immutable (not a list, set, or dict)
* Can add key value mappings to a dictionary
  * Can also remove (less common)

```python
d = { }
d = dict()

us_wars_by_end = {
  1783: "Revolutionary",
  1848: "Mexican",
  1865: "Civil"
}

us_wars_by_name = {
  "Civil" : [1861, 1865],
  "Mexican" : [1846, 1848],
  "Revolutionary" : [1775, 1783]
}

phonebook = dict()
phonebook["Alice"] = "206-555-4455"
phonebook["Bob"] = "212-555-2211"
```

Accessing a dictionary

```python
atomic_number = {"H":1, "Fe":26, "Au":79}

atomic_number["Au"]         # 79
atomic_number["B"]          # err
atomic_number.has_key("B")  # False
atomic_number.keys()        # ['H', 'Au', 'Fe']
atomic_number.values()      # [1, 79, 26]
atomic_number.items()       # [('H', 1), ('Au', 79), ('Fe', 26)]
```

Iterating through a dictionary

```python
atomic_number = {"H":1, "Fe":26, "Au":79}

# Print out all the keys:
for element_name in atomic_number.keys():
  print(element_name)

# Another way to print out all the keys:
for element_name in atomic_number:
  print(element_name)

# Print out all the values:
for element_number in atomic_number.values():
  print(element_number)

# Print out the keys and the values
for (element_name, element_number) in atomic_number.items():
  print("name:", element_name, "number:", element_number)
```

Modifying a dictionary

```python
us_wars1 = {
    "Revolutionary" : [1775, 1783],
    "Mexican" : [1846, 1848],
    "Civil" : [1861, 1865]
}

us_wars1["WWI"] = [1917, 1918]  # add mapping
del us_wars1["Civil"]           # remove mapping
```

# Graphs

* A graph can be thought of as either of:
  * a collection of edges
    * Each edge represents some relationship
  * for each node, a collection of neighbors
    * The neighbors are those connected by an edge

```python
import networkx as nx
import matplotlib.pyplot as plt

g = nx.Graph()    # Creates a graph

g.add_edge(1, 2)  # Adds edge from node 1 to node 2
g.add_edge(1, 3)
g.add_node(4)     # Adds node 4
print g.edges()
print g.nodes()
print g.neighbors(1)

assert len(g.nodes()) == 4
assert len(g.edges()) == 2

nx.draw_networkx(g) # Draw the graph
plt.show()          # Show the graph in a separate window
```

# Sorting

```python
my_lst = [5, 3, 4, 2]
print (sorted(my_lst))  # [2, 3, 4, 5]
print (my_lst)          # [5, 3, 4, 2]

names = ["Isaac Newton", "Ada Lovelace", "Fig Newton", "Grace Hopper"]

def last_name(str):
  return str.split(" ")[1]

print (sorted(names, key=last_name))

print (sorted(names, key=len))

def last_name_len(name):
  return len(last_name(name))

print (sorted(names, key=last_name_len))
```

# Sharing, mutability, immutability

* Reassigning a variable changes a binding, it does not change (mutate) any object
* Mutating (changing) an object does not change any variable binding

```python
def no_change(lst):
  # does NOT modify what lst refers to, instead re-binds lst
  lst = lst + [99]
def change_val(lst):
  # modifies object lst refers to
  lst[0] = 13
def append_val(lst):
  # modifies object lst refers to
  lst.append(99)
```

* An object’s identity never changes
* Can think of it as its address in memory
* Its value of the object (the thing it represents) may change

```python
mylist = [1, 2, 3]
otherlist = mylist
mylist.append(4)

mylist is otherlist     # True
mylist == [1, 2, 3, 4]  # True
mylist is [1, 2, 3, 4]  # False
```

* A tuple represents an ordered sequence of values

```python
tup = ("four", "score", "and", "seven", "years")
print (tup[0])
print (tup[-1])
```

* An immutable datatype is one that doesn’t have any functions in the third category:
  * Constructors
  * Queries
  * Mutators: None!
* Immutable datatypes: int, float, boolean, string, function, tuple, frozenset
* Mutable datatypes: list, dictionary, set

# Elementary statistics

* What can happen when you roll a die?
* What can happen when you roll two dice?
  * How likely are you to roll 11 or higher?
    * This probability is  known as the "p value".

* How to compute p values
  * Via a statistical formula
    * Requires you to make assumptions and know which formula to use
  * Computationally (simulation)
    * Run many experiments
    * Count the fraction with a better result
    * Requires a metric/measurement for "better"
    * Requires you to be able to run the experiments

## Summary of statistical methodology

1. Decide on a metric (bigger value = better)
2. Observe what you see in the real world
3. Hypothesize that what you saw is normal/typical. This is the "null hypothesis"
4. Simulate the real world many times
5. How different is what you observed from the simulations? What percent of the simulation values are the real world values bigger than?
6. If the percentage is 95% or more, reject the null hypothesis

Null Hypothesis: The common wisdom, "nothing unusual is happening here"

Two types of errors may occur in statistical tests:
* false positive (or false alarm or Type I error): no real effect, but report an effect (through good/bad luck or coincidence)
  * If no real effect, a false positive occurs about 1 time in 20
* false negative (or miss or Type II error): real effect, but report no effect (through good/bad luck or coincidence)

The larger the sample, the less the likelihood of a false positive or negative

# Design Exercise

* Problem: Design a module for basic text analysis with the following capabilities
  * Compute the total number of words in a file
  * Find the 10 most frequent words in a file.
  * Find the number of times a given word appears in the file.
  * Consider the 3 designs
  * For each design, state positives and negatives
  * Which one do you think is best, and why?

## Version 1

```python
def word_count(filename, word):
    """Given a filename and a word, return the count of the given word in the given file."""

def top10(filename):
    """Given a filename, return a list of the top 10 most frequent words in the given file, from most frequent to least frequent."""

def total_words(filename):
    """Given a filename, return the total number of words in the file."""

# client program to compute top 10:
result = top10("somedocument.txt")
```

## Version 2

```python
def read_words(filename):
    """Given a filename, return a list of words in the file."""

def word_count(wordlist, word):
    """Given a list of words and a word, returns a pair (count, allcounts_dict). count is the number of occurrences of the given word in the list, allcounts_dict is a dictionary mapping words to counts."""

def top10(wordcounts_dict):
    """Given a dictionary mapping words to counts, return a list of the top 10 most frequent words in the dictionary, from most to least frequent."""

def total_words(wordlist):
    """Return total number of words in the given list."""

# client program to compute top 10:
word_list = read_words("somedocument.txt")
(count, word_dict) = word_count(word_list, "anyword")
result = top10(word_dict)
```

## Version 3

```python
def read_words(filename):
    """Given a filename, return a dictionary mapping each word in filename to its frequency in the file"""
    wordfile = open(filename)
    worddata = wordfile.read()
    word_list = worddata.split()
    wordfile.close()
    wordcounts_dict = {}
    for word in word_list:
        if word in wordcounts_dict:
            wordcounts_dict[word] = wordcounts_dict[word] + 1
        else:
            wordcounts_dict[word] = 1
    return wordcounts_dict

def word_count(word_counts_dict, word):
    """Given a dictionary mapping word to counts, return the count of the given word in the dictionary."""

def top10(word_counts_dict):
    """Given a dictionary mapping word to counts, return a list of the top 10 most frequent words in the dictionary, from most to least frequent."""

def total_words(word_counts_dict):
    """Given a dictionary mapping word to counts, return the total number of words used to create the dictionary"""

# client program to compute top 10:
word_dict = read_words("somedocument.txt")
result = top10(word_dict)
```

* The users have requested some changes:
  * Ignore stopwords (common words such as "the")
    * A list of stopwords is provided in a file, one per line.
  * Show the top k words rather than the top 10.
* How would the three designs handle these two changes?

## Design criteria

* Ease of use vs. ease of implementation
  * Module may be written once but re-used many times
* Generality
  * Can it be used in a new situation?
  * Decomposability: Can parts of it be reused?
  * Testability: Can parts of it be tested?
* Documentability
  * Can you write a coherent description?
* Extensibility
  * Can it be easily changed?

# Data Abstraction

```python
def read_words(filename):
    """Given a filename, return a dictionary mapping each word in filename to its frequency in the file"""
    wordfile = open(filename)
    worddata = wordfile.read()
    word_list = worddata.split()
    wordfile.close()
    wordcounts_dict = {}
    for word in word_list:
        # setdefault(key[, default])
        # If key is in the dictionary, return its value.
        # If key is NOT present, insert key with a value of default, and return default.
        # If default is not specified, the value None is used.
        count = wordcounts_dict.setdefault(word, 0)
        wordcounts_dict[word] = count + 1
    return wordcounts_dict

def word_count(word_counts_dict, word):
    """Given a dictionary mapping word to counts, return the count of the given word in the dictionary."""
    return wordcounts_dict.get(word, 0)

def topk(wordcounts_dict, k=10):
    """Given a dictionary mapping word to counts, return list of (count, word) tuples of the top k most frequent words."""
    counts_with_words = [(c, w) for (w, c) in wordcounts_dict.items()]
    counts_with_words.sort(reverse=True)
    return counts_with_words[0:k]

def total_words(word_counts_dict):
    """Given a dictionary mapping word to counts, return the total number of words used to create the dictionary"""
    return sum(wordcounts_dict.values())

# client program to compute top 10:
word_dict = read_words("somedocument.txt")
result = topk(word_dict)
```

* A class creates a namespace for:
  * Variables to hold the data
  * Functions to create, query, and modify
    * Each function defined in the class is called a method
    * Takes "self" (a value of the class type) as the first argument
* A class defines a datatype
  * An object is a value of that type
  * Comparison to other types

```python
class WordCounts:
  """Represents the words in a file."""
  # Internal representation:
  # variable wordcounts_dict is a dictionary mapping a word its frequency

  def read_words(self, filename):
    """Populate a WordCounts object from the given file"""
    word_list = open(filename).read().split()
    self.wordcounts_dict = {}
    for w in word_list:
      self.wordcounts_dict.setdefault(w, 0)
      self.wordcounts_dict[w] += 1

  def get_count(self, word):
    """Return the count of the given word"""
    return self.wordcounts_dict.get(word, 0)

  def topk(self, k=10):
    """Return a list of the top k most frequent words in order"""
    scores_and_words = [(c,w) for (w,c) in self.wordcounts_dict.items()]
    scores_and_words.sort(reverse=True)
    return score_and_words[0:k]

  def total_words(self):
    """Return the total number of words in the file"""
    return sum(self.wordcounts_dict.values())

# client program to compute top 5:
wc = WordCounts()
wc.read_words("somedocument.txt")
result = wc.topk(5)
```

Alternative implementation

```python
class WordCounts:
  """Represents the words in a file."""
  # Internal representation:
  # variable words_list is a list of the words in the file

  def __init__(self, filename):
    """Create a WordCounts object from the given file"""
    self.words_list = open(filename).read().split()

  def get_count(self, word):
    """Return the count of the given word"""
    return self.words_list.count(word)

  def topk(self, k=10):
    """Return a list of the top k most frequent words in order"""
    scores_with_words = [(self.get_count(w), w) for w in set(self.words_list)]
    scores_with_words.sort(reverse=True)
    return scores_with_words[0:k]

  def total_words(self):
    """Return the total number of words in the file"""
    return len(self.words_list)

# client program to compute top 5:
wc = WordCounts("somedocument.txt")
result = wc.topk(5)
```

# List comprehension

```python
# Explicitly write out the whole thing:
squares = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Write a loop to create it:
squares = []
for i in range(11):
  squares.append(i * i)

# Write a list comprehension:
squares = [i * i for i in range(11)]
```

Syntax of a comprehension

```python
[(x, y) for x in seq1 for y in seq2 if sim(x, y) > threshold]

# equivalent to:
result = []
for x in seq1:
  for y in seq2:
    if sim(x, y) > threshold:
      result.append( (x, y) )
```

Types of comprehensions

```python
# List
[ i * 2 for i in range(3) ]

# Set
{ i * 2 for i in range(3)}

# Dictionary
{ i: i * 2 for i in range(3)}
```

Enumerate a list

```python
for index, value in enumerate(the_list):
  print (str(index) + ': ' + str(value))

# With a list comprehension:
the_list = range(10)
new_list = [ i + v for i, v in enumerate(the_list) ]
```

Ternary Assignment

* Only works for single expressions as results.
* Only works for if and else (no elif)

```python
# A common pattern in python
if x > threshold:
  flag = "Over"
else:
  flag = "Under"

# With a ternary expression:
flag = "Over" if x > threshold else "Under"

# With a list comprehension:
the_list = ['even' if i % 2 == 0 else 'odd' for i in range(16)]
```

# Recursion

General form of a recursive algorithm

* Determine whether the problem is small or large
* If the problem is small ("base case"):
  * Solve the whole thing
* If the problem is large ("recursive case"):
  * Divide the problem, creating one or more smaller problems
  * Ask someone else to solve the smaller problems
    * Recursive call to do most of the work
  * (Maybe) Do a small amount of postprocessing on the result(s) of the recursive call(s)

```python
def quicksort(lst):
  """Return a sorted version of lst."""
  if len(lst) < 2:
    return lst
  pivot = lst[0]
  smaller = [elt for elt in lst if elt < pivot]
  pivots = [elt for elt in lst if elt == pivot]
  larger = [elt for elt in lst if elt > pivot]
  return quicksort(smaller) + pivots + quicksort(larger)

def gcd(a, b):
  """Return the greatest common divisor of a and b."""
  if b == 0:
    return a
  elif a < b:
    return gcd(b, a)
  else:
    return gcd(a - b, b)

def exp(base, exponent):
  """Return base exponent. Exponent is a non-negative integer."""
  if exponent == 0:
    return 1
  elif exponent % 2 == 0:
    return exp(base * base, exponent / 2)
  else:
    return base * exp(base, exponent - 1)
```