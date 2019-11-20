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