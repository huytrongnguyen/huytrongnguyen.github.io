# Defensive Programming

We're not talking about "clean code", We're talking about something more...

## Defend against the impossible, because the impossible will happen

There are many definitions for Defensive Programming, but from my point of view, all the thing you need to know is:

  * Never trust the input (user input, function parameters, ...). Do whitelists not blacklists, don't check for the invalid types but check for the valid types, excluding all the rest.
  * Don't reinvent the wheel, use something that's already out there, well tested, trusted by thousands of developers and stable. The only reasons why you should build something by yourself is that you need something that doesn't exists or that exists but doesn't fit within your needs.
  * Shouldn't trust other developer's code.
  * Write SOLID code
    * Don't use uninitialized object properties
    * Use immutable objects when you can
    * Write tests

## Some Favorite Defensive Programming Best Practices

  * Avoid unintended assignment:

```cs
if (5 == x)
```

  * Lock down your variables until you know that you need to change them:

```java
public void foo(final int arg) { /* Stuff Here */ }
```

  * Pre-conditions (fail-fast principle) are one of the most widely spread forms of defensive programming. They guarantee that a method can be executed only when some requirements are met:

```cs
public void DoSomething(int count)
{
  if (count < 1 || 100 < count) throw new ArgumentException("Invalid count");

  /* Do something */
}

public void Process(User user, Order order)
{
  if (user == null && order == null) throw new ArgumentNullException();

  /* Do something */
}
```



