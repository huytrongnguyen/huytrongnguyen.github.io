# C# class equivalent Java enum

C#'s enums seem to be more simplistic than the Java 1.5+ implementation. Enumerations in the CLR are simply named constants. The underlying type must be integral. In Java an enumeration is more like a named instance of a type. That type can be quite complex and contain multiple fields of various types. For example, in Java, you can create an enum like this:

```
package io.github.huytrongnguyen.reference;

import lombok.Getter;

@Getter
public enum Status {
  INACTIVE("INACTIVE", "Inactive"),
  ACTIVE("ACTIVE", "Active"),
  ;

  private final String code;
  private final String name;

  private Status(String code, String name) {
    this.code = code;
    this.name = name;
  }
}
```

To port the example to C# I would just change the enum to an immutable class and expose static readonly instances of that class:

```
using System;
using System.Collections;
using System.Collections.Generic;

namespace IO.Github.Huytrongnguyen.Reference {
  public class Status {
    public static readonly Status INACTIVE = new Status("INACTIVE", "Inactive");
    public static readonly Status ACTIVE = new Status("ACTIVE", "Active");

    private Status(string code, string name) {
      Code = code;
      Name = name;
    }

    public static IEnumerable<Status> Values {
      get {
        yield return INACTIVE;
        yield return ACTIVE;
      }
    }
  }
}
```
