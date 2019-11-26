# Dictionaries and Pandas

```python
import pandas as pd

data = pd.read_csv('earthquakes.csv') # DataFrame

data.groupby('col1')['col2'].sum()
```

* Data

| col 1 | col 2 |
|-------|-------|
| A     | 1     |
| B     | 2     |
| C     | 3     |
| A     | 4     |
| C     | 5     |

* Split

| key | col 2 |
|-----|-------|
| A   | 1     |
|     | 4     |

| key | col 2 |
|-----|-------|
| B   | 2     |

| key | col 2 |
|-----|-------|
| C   | 3     |
|     | 5     |

* Apply (sum)

| key |   |
|-----|---|
| A   | 5 |

| key |   |
|-----|---|
| B   | 2 |

| key |   |
|-----|---|
| C   | 8 |

* Combine

| key |   |
|-----|---|
| A   | 5 |
| B   | 2 |
| C   | 8 |

## Sorting

```python
# Sort data
data.sort_values('column')
data.sort_index()

# Find top-k
data.nlargest(10, 'column')
```

## Keyword Arguments

```python
def div(a, b):
    return a / b

div(2, 3)
div(b=3, a=2)
```

## Default Parameters

```python
div(2, 3)   # 0.66
div(2)      # 2
div(b=3)    # 3.33
div()       # 10
```

# Time Series

```python
# Read in data with timestamp
data = pd.read_csv('data.csv', index_col='col',
                   parse_dates=True)

# Query for certain dates
data.loc['2017-03-06']   # one day
data.loc['2018-06']      # a month
data.loc['2019']         # a year
data.loc['2017':'2019']  # a range of time
```

# Machine Learning

```python
cats = []
dogs = []

for tweet in tweets:
    if 'dog' in tweet:
        dogs.append(tweet)
    elif 'cat' in tweet:
        cats.append(tweet)

for pic in pictures:
    if dog in pic:
        dogs.append(pic)
    elif cat in pic:
        cats.append(pic)
```

* A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P if its performance at tasks in T, as measured by P, improves with experience E.
  * Normal words: Uses data to automatically improve itself
* Learn rules automatically from data, rather than programming
* We define `features` of our data that a model learns from to predict the `label`. We must learn this from a dataset, but the goal is to perform well on future, unseen data.
* There exists hundreds of different model types, but the most important thing is having good features to describe your data
  * Garbage In => Garbage Out

## Categorizing ML

* Supervised / Unsupervised
  * Do you have to give the model labelled data to correct itself or can it do everything on its own?
* Regression / Classification / Recommendation
  * What you are trying to predict changes what models you use
  * Regression - Predicting a real number (price)
  * Classification - Predicting a category (cat or dog)
  * Recommendation - What movie should you watch next?

## Evaluating Models

* Which model is best?
  * Reminder we want a model that will perform best on future data

The most important problem in science you’ve never heard of

* Overfitting: When your model matches the training set so well, that it fails to generalize
  * Memorizing answers to Multiple Choice test
* Tall trees are likely to overfit if you don’t have enough data
  * Can learn very complex boundaries
  * Very few points at the leaves

Training is cool, but we want to know its future performance

* Training data can't be used to evaluate model
  * "I got 100% on the practice test I have been studying for 4 hours, therefore I will get 100% on the exam"
* Must hold out data called a test set to evaluate at the end
  * Unbiased estimate of performance in the wild
* Never ever ever train or make decisions based on your test set.
  * If you do, it will no longer be good estimate of future performance.

The important ideas
* Machine Learning
* Features and labels
  * String features have to be treated specially
* Models: Decision Tree
* Training
* Evaluating Model: Training accuracy vs test accuracy
* Overfitting
* Hyperparameter to change complexity (max height)

Scikit-learn (sklearn)
* `tree.DecisionTreeClassifier()`
  * `.fit(data, label)` and `.predict(data)`
* `metrics.accuracy_score(y_true, y_pred)`
* `model_selection.train_test_split(X, y, test_size)`

# Classes and Objects

* An `object` holds state and provides behaviors that operates on that state
* Each object has its own state
* DataFrame
  * State
    * The columns
    * The index
    * The actual data
    * Etc.
  * Behaviors
    * Methods for providing access to the data
    * Methods to modify data
    * Methods to find/replace missing values
    * Etc.
* A `class` lets you define a new object type by specifying what `state` and `behaviors` it has
* A class is a blueprint that we use to construct `instances` of the object

```python
class Dog:
  def __init__(self, name):
    self.name = name

  def bark(self):
    print(self.name + ': Woof')

d1 = Dog('Chester')
d2 = Dog('Scout')
d3 = d1
d1.bark()  # Chester: Woof
d2.bark()  # Scout: Woof
d3.bark()  # Chester: Woof
```

* Can split program into multiple files
* Put the Dog class in dog.py

```python
# Syntax 1
import dog
d = dog.Dog('Chester')

# Syntax 2
from dog import Dog
d = Dog('Chester')
```

* Objects are great, but it’s not desirable if the client can change our state without us "knowing" about it
* It would be nice if we could restrict the client to just using the behaviors we provide
* Python has no way to actually do this, but by convention people don’t access things that start with "_"

```python
class DogPack:
    def __init__(self):
        self._dogs = []

    def add_dog(self, dog):
        self._dogs.append(dog)

    def _private_method(self):
        print('Some helper method')
```

Equality

```python
class Dog:
  def __init__(self, name):
    self.name = name

  def bark(self):
    print(self.name + ': Woof')

  def __eq__(self, other):
    return self.name == other.name


d1 = Dog('Chester')
d2 = Dog('Chester')
d1 == d2  # True, same as d1.__eq__(d2)
```

Special Methods

| Syntax   | Method        |
|----------|---------------|
| x < y    | `x.__lt__(y)` |
| x == y   | `x.__eq__(y)` |
| x > y    | `x.__ge__(y)` |
| print(x) | `print(x.__repr__())` |
| x[i]     | `x.__getitem__(i)` |
| x[i] = v | `x.__setitem__(i, v)` |

It’s kind of annoying to have to define a whole function just for this. It would be nice if there was a shorthand syntax

```python
def get_name(d):
    return d.name

f = get_name
sorted(dogs, key=f)
```

```python
f = lambda d: d.name
sorted(dogs, key=f)
```

```python
sorted(dogs, key=lambda d: d.name)
```

# Hashing

* Sets/Dictionaries are just lists behind the scenes 
* Key ideas
  * Store a large list that is roomy ("hash table")
  * Use a "hash function" to figure out the index for data
* A hash function is a function that takes any arbitrary data and turns it into a fixed-sized value (i.e. a number)
This is nice and simple unless we get a collision
  * A collision is when two values hash to the same index
    * Impossible to avoid when our hash table has a fixed size
  * Two ways to make this work well in practice
    * Now: Have a way of dealing with collisions
    * Later: Come up with hash functions that avoid collisions as much as possible

## Chained Hashing

* If we experience a collision, just store both values at that index
* Under some reasonable assumptions, these buckets will be small compared to the size of the whole set of items
* Care about the load-factor (num items / size of table)
  * If the load-factor is too high, these buckets will be big
  * Can rehash into a larger table to lower load-factor

## Hash Functions

* Our hash table can handle collisions, but we still want to keep the number of collisions low (otherwise buckets are large)
* Integers are relatively easy to hash, but what about strings?
* Each object can implement a `__hash__(self)` method
  * Write code to turn your object into an int 
* What makes a good hash function?
  * Needs to return a number
  * Should minimize the number of collisions
  * Should "look random" to maximize spread of values
* Hashing and equality are deeply related
  * If two values are equal, they must hash to same value
* If you implement `__eq__` and `__hash__`,they need to be consistent
* Hashing is one of the key techniques used to help us work with large datasets.

# Joins

Combining Data

```python
# Basic idea
for t in tas:
  for g in grading:
    if t['ta_id'] == g['grader_id']:
        print(t, g)

# Pandas Join
tas.merge(grading, left_on='ta_id', right_on='grader_id')
```

Type of Joins: `left.merge(right, how='type')`

* Inner (default): Both values must be present
* Left: If a value from left has no match, add NaNs
* Right: If a value from right has no match, add NaNs
* Outer: If a value from either table has no match, add NaNs

```python
tas.merge(grading, left_on='ta_id', right_on='grader_id')

tas.merge(grading, left_on='ta_id', right_on='grader_id', how='left')

tas.merge(grading, left_on='ta_id', right_on='grader_id', how='right')

tas.merge(grading, left_on='ta_id', right_on='grader_id', how='outer')
```

# Numpy

* Vectors/Arrays
  * One-dimensional arrays.
  * Look and behave very similar to Python lists.
* Matrices
  * Multi dimensional arrays.
  * You can think of them as a number of vectors stacked on top of each other.
* Numpy provides built-in functionality to perform arithmetic operations on vectors and matrices.

```python
v = np.array([1, 2, 3])
v + 2   # [3, 4, 5]
v - 1   # [0, 1, 2]
v * 3   # [3, 6, 9]
v / 2   # [0.5, 1., 1.5]
v // 2  # [0, 1, 1]
```

* Shape is defined as a tuple (M, N), where M is the number of rows and N is the number of columns.
* Numpy provides a function called reshape that allows us to change the shape of an array without change the data inside.

```python
v = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])
v = v.reshape((3, 3)) # (3 rows, 3 columns)

# The resulting array:
array([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
```

* Numpy also allows us to multiply matrices. This can be super helpful when doing linear algebra calculations.
  * Matrix A has shape (4, 2)
  * Matrix B has shape (2, 3)
  * The result of A x B is a new matrix with shape (4, 3)

