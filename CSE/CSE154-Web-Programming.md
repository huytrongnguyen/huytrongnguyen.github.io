# CSS Layout

## Basic properties for the flex container

* `display: flex;`
  * makes an element a "flex container", items inside automatically become "items" - by default, starts as a row
* `justify-content: flex-end; (flex-start, space-around,...)`
  * indicates how to space the items inside the container along the main axis
* `align-items: flex-end; (flex-start, center, baseline,...)`
  * indicates how to space the items inside the container along the cross axis
* `flex-direction: row; (column)`
  * indicates whether the container flows horizontally or vertically (default row)
* `flex-wrap: wrap; (no-wrap, ...)`
  * indicates whether the container's children should wrap on new lines
* `flex-grow: <number>`
  * Defines a proportional value to determine whether a flex items can grow (what amount of hte available space inside the container it should take up).
* `flex-basis: 20%; (3em, 50px,...)`
  * indicates the default size of an element before the extra space is distributed among the items
* `align-self: flex-end; (flex-start, center, stretch,...)`
  * indicates where to place this specific item along the cross axis

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/img/flex-direction.jpg" />

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/img/justify-content.jpg" />

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/img/align-items.jpg" />

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/img/flex-wrap.jpg" />

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/img/flex-grow.jpg" />

```html
<body>
  <header id="top-bar">
    <h1 />
    </nav />
  </header>
  <main>
    <div id="item-container">
      <article />
      <article />
      <article />
      <article />
      <article />
    </div>
  </main>
  <footer />
</body>
```

### Making the Body a Flex Column

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/lec05-css-iii-more-layout/images/body-flex-column.jpg" />

```scss
body {
  display: flex;
  flex-direction: column;
  height: 100vh; // view height
}
```

### Using flex-grow with column page layout

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/lec05-css-iii-more-layout/images/body-with-flex-grow.jpg" />

```scss
main {
  flex-grow: 1;
}
```

### Second Flex Container: `#item-container`

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/lec05-css-iii-more-layout/images/item-container-solution.jpg" />

```scss
#item-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
```

## positioning Elements

* position: static
  * Default value. Elements render in order, as they appear in the document flow
* position: fixed
  * Puts an element at an exact position within the browser window
* position: absolute
  * Puts an element at an absolute position based on the location of the element's parent container
* position: relative
  * Makes children positioned relative to the parent container
  * Handy for sticking a footer to the bottom of a page, for example
* position: sticky
  * A "hybrid" - toggles between relative and fixed depending on scroll position

# Promises and fetch

Promises are a sort of contract:
* Something will happen
* You can have multiple things happen.
* And catch any errors.

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/img/promise-states.jpg" />

Can only go from Pending to Fulfilled or Rejected (no takebacks)

Promises allow us to chain things together:

```js
orderPizza()
  .then(inspect)
  .then(eat)
  .then(pay)
  .catch(badPizza);
```

## AJAX with Fetch

`fetch` was created in 2014 and incorporated into the global `window`.

`fetch` takes a URL string as a parameter to request data (e.g. menu category JSON) that we can work with in our JS file.

```js
function populateMenu() {
  const URL = "https://cse154.appspot.com/cafeexample/";
  fetch(URL + "/getCategories") // returns a Promise!
    .then(...)
    .then(...)
    .catch(...);
}
```
We need to do something with the data that comes back from the server.

But we don't know how long that will take or if it even will come back correctly!

The `fetch` call returns a `Promise` object which will help us with this uncertainty.

The returned `Promise` contains a value that is a `Response` from the requested resource, which we can get `then`. after the `fetch` call.

### The `Response` object

| Property | Description |
|----------|-------------|
| `response.status`| Status code (e.g. 200, 400, etc.) |
| `response.ok` | short for: `response.status > 200 && response.status <= 300)` |
| `response.statusText` | Status text returned in the response (e.g. "200 OK", "400 Bad Request", "503 Service Unavailable") |
| `response.json()`, `response.text()` | Methods to extract the response body depending on the data format |

* Check `response.ok`
* If not, throw an Error which will jump immediately to a `catch` statement. It's good to construct the Error with details about the `response.statusText`
* Otherwise, extract the data we want with `response.text()` or `response.json()`

### AJAX `fetch` template

```js
const BASE_URL = ""; // you may have more than one

// Step 1. Write a function to "fetch" data from a URL
function makeRequest() {
  let url = BASE_URL + "?query0=value0"; // some requests require parameters
  fetch(url)
    .then(checkStatus)
    //.then(resp => resp.text()) // use this if your data comes in text
    //.then(resp => resp.json()) // or this if your data comes in JSON
    .then(processData)
    .catch(handleError); // define a user-friendly error-message function
}

// Step 2: Implement a function to process the response data. You may want to break this apart
// into multiple functions.
function processData(responseData) {
  // Do something with your responseData! (build DOM, display messages, etc.)
}

// Step 3. Include the checkStatus function
function checkStatus(response) {
  if (!response.ok) { // response.status >= 200 && response.status < 300
    throw Error("Error in request: " + response.statusText);
  }
  return response;
}
```

## Chaining Delayed Promises with `.then` vs. `await`

```js
function doubleAfter1s(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(n * 2); }, 1000);
  });
}

// standard .then solution
doubleAfter1s(2) // 4
  .then(doubleAfter1s) // 8
  .then(doubleAfter1s) // 16
  .then(result => console.log(result)); // 16 (after seconds)

// equivalent async/await solution (as anonymous function call)
(async () => {
  let a = await doubleAfter1s(2); // 4
  let b = await doubleAfter1s(a); // 8
  let c = await doubleAfter1s(b); // 16
  console.log(c); // 16 (after 3 seconds)
})();
```

## Error-handling with `async`/`await`

```js
function doubleAfter1sUnless4(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n === 4) {
        reject("Rejected!");
      } else {
        resolve(n * 2);
      }
    }, 1000);
  });
}

async function delayDoubles() {
  try {
    let a = await doubleAfter1sUnless4(2); // 4
    let b = await doubleAfter1sUnless4(a); // error!
    let c = await doubleAfter1sUnless4(b); // unreached
  } catch (err) {
    console.error(err); //  "Rejected!"
  }
}
delayDoubles(); // Rejected! (after 2 seconds)
```

# Posting data with Forms

There are two ways you'll commonly see forms used with POST
* Older: With method/action attributes in HTML form tag

```html
<form id="input-form" method="post" action="submitter.php">
  City: <input name="city" type="text"/ >
  State: <input name="state" type="text" />
  ZIP: <input name="zip" type="number" />
  <button id="submit-btn">Submit!</button>
</form>
```

* Better: With JS using validation and AJAX

```js
function adminLogin() {
  let url = CAFE_URL;

  // Create a new "FormData" object
  let params =  new FormData();
  // Add the various parameters to the FormData object
  params.append("username", "cse154");
  params.append("password", "coffee");
  // Fetch now with a method of POST and the param data in the body

  fetch(url, {method: "POST", body: params})
    .then(checkStatus)
    .then(resp => resp.json())
    .then(updateResults)
    .catch(handleError);
}
```

# Regular Expressions

```js
/abc/
```

* In JS, regexes are strings that begin and end with /
* The simplest regexes simply match a particular substring
* The above regular expression matches any string containing "abc"
  * Match: "abc", "abcdef", "defabc", ".=.abc.=.", ...
  * Don't Match: "fedcba", "ab c", "PHP", ...

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/lec16-regex/hidden/regex-reference.png" />

## Wildcard

* A `.` matches any character except a `\n` line break
  * `/.ow.l./` matches "Mowgli", "Powell", etc.
* A trailing `i` at the end of a regex (after the closing `/`) signifies a case-insensitive match
  * `/cal/i` matches "Pascal", "California", "GCal", etc.

## Special Characters

* `|` means OR
  * `/abc|def|g/` matches "abc", "def", or "g"
* `()` are for grouping
  * `/iP(ad|hone)/` matches "iPad" or "iPhone"
* `\` starts an escape sequence
  * Many characters must be escaped to match them literally: /\$.[]()^*+?
  * `/<br \/>/` matches lines containing <br /> tags

## Quantifiers

* `*` means 0 or more occurrences
  * `/abc*/` matches "ab", "abc", "abcc", "abccc", ...
  * `/a(bc)*/` matches "a", "abc", "abcbc", "abcbcbc", ...
  * `/a.*a/` matches "aa", "aba", "a8qa", "a!?xyz__9a", ...
* `+` means 1 or more occurrences
  * `/Hi!+ there/` matches "Hi! there", "Hi!!! there!", ...
  * `/a(bc)+/` matches "abc", "abcbc", "abcbcbc", ...
* `?` means 0 or 1 occurrences
  * `/a(bc)?/` matches only "a" or "abc"
* `{min, max}` means between min and max occurrences (inclusive)
  * `/a(bc){2,4}/` matches "abcbc", "abcbcbc", or "abcbcbcbc"
* min or max may be omitted to specify any number
  * `{2,}` means 2 or more
  * `{,6}` means up to 6
  * `{3}` means exactly 3

## Character Sets

* `[]` groups characters into a character set; will match any single character from the set
  * `/[bcd]art/` matches strings containg "bart", "cart", and "dart"
  * equivalent to `/(b|c|d)art/` but shorter
* Inside [], many of the modifier keys act as normal characters
  * `/what[!*?]*/` matches "what", "what!", "what?**!", "what??!", etc.
* Inside a character set, specify a range of characters with `-`
  * `/[a-z]/` matches any lowercase letter
  * `/[a-zA-Z0-9]/` matches any lowercase or uppercase letter or digit
* Inside a character set, `-` must be escaped to be matched
  * `/[+\-]?[0-9]+/` matches an optional `+` or `-`, followed by at least one digit

## Negations

* An initial `^` inside a character set negates it
  * `/[^abcd]/` matches any character other than a, b, c, or d

## Anchors

* `^` represents the beginning of the string or line; `$` represents the end
  * `/Doggy/` matches all strings that contain Doggy
  * `/^Doggy/` matches all strings that start with Doggy
  * `/Doggy$/` matches all strings that end with Doggy
  * `/^Doggy$/` matches the exact string "Doggy" only
  * `/^Or.*Cat$/` matches "OrCat", "Orange Cat", "Orange and Juice are both a Cat", ... but not "One of my Cats is Orange", "Orange" or "Juice and Orange are Cats"

## Escape Sequences

* Special escape sequence characters sets
  * `\d` matches any digit (same as [0-9]); `\D` any non-digit ([^0-9])
  * `\w` matches any word characters (alphanumeric and _ underscore, same as [a-zA-Z0-9_]); `\W` any non-word character
  * `\s` matches any whitespace character ( , \t, \n, etc.); `\S` any non-whitespace character

## Regular Expressions in JavaScript!

```js
let pattern1 = new RegExp(/cse154/, "i");
let pattern2 = new RegExp("cse154", "i");
let pattern3 = /cse154/;

let namePattern = /[A-Z][a-z]+ [A-Z][a-z]+/;
namePattern.test("Andrew Fitz Gibbon"); // false

let studentIdPattern = new RegExp("1\d{6}");
studentIdPattern.test("-123"); // false

"Hello world".match(/wo.l/); // [0: "worl", index: 6, input: "Hello world"]
let newStr = "My cats are good cats".replace(/cat/, "kitten");
// newStr === "My kittens are good cats"
```

## Regex Flags

* The two common flags for patterns are "g" and "i"
  * "i" ignores letter-casing in the match,
  * "g" is a "global" search, meaning it won't stop on the first match.

```js
let str = "My dog is a good dog";
let newStr = str.replace(/dog/g, "pup"); // My pup is a good pup

let pattern = new RegExp("spring", "i");
// or let pattern = /spring/i;
let str = "CSE154: Web Programming Spring 2019";
let newStr = str.replace(pattern, "Summer"); // CSE154: Web Programming Summer 2019
```

# Node.js

Client vs. Server-side JS

<img src="https://courses.cs.washington.edu/courses/cse154/19au/lectures/lec17-node-intro/hidden/js-client-server.png" />

Starting a Node.js Project

* Start a new project directory (e.g. `node-practice`)
* Inside the directory, run `npm init` to initialize a `package.json` configuration file (you can keep pressing Enter to use defaults)
* Install any modules with `npm install <package-name>`
  * Run `npm install express` to install the Express.js package
* Write your Node.js file! (e.g. `app.js`)

```js
"use strict";

const express = require('express');
const app = express();

app.get('/posts', function (req, res) {
  res.type("text").send("Hello World");
});

const PORT = process.env.PORT || 8000; // Allows us to change the port easily by setting an environment variable, so your app works with our grading software
app.listen(PORT);
```

* Include any front-end files in a `public` directory within the project.

```js
"use strict";
const express = require("express");
const app = express();

app.use(express.static("public"));
// now "/" points to "public/" so we can visit "localhost:8000/greeter.html"

const PORT = process.env.PORT || 8000;
app.listen(PORT);
```

## Basic Routing in Express

```js
app.get(path, (req, res) => {
  ...
});
```

* `app.get` allows us to create a GET endpoint. It takes two arguments: The endpoint URL path, and a callback function for modifying/sending the response.
* `req` is the request object, and holds items like the request parameters.
  * `req.params` get endpoint "path" parameters from the request
  * `req.query` query parameters from the request
* `res` is the response object, and has methods to send data to the client.
  * `res.set(...)` sets header data, like "content-type". Always set either "text/plain" or "application/json" with your response.
  * `res.send(response)` returns the response as HTML text to the client.
  * `res.json(response)` Does the same, but with a JSON object.

## Request Parameters

```js
// Route path: /states/:state/cities/:city
// Request URL: http://localhost:8000/states/wa/cities/Seattle
// req.params: { "state": "wa", "city": "Seattle" }
app.get("/states/:state/cities/:city", function (req, res) {
  res.type("text");
  res.send("You sent a request for " + req.params.city + ", " + req.params.state);
});

// Route path: /cityInfo
// Request URL: http://localhost:8000/cityInfo?state=wa&city=Seattle
// req.query: { "state": "wa", "city": "Seattle" }
app.get("/cityInfo", function (req, res) {
  let state = req.query.state; // wa
  let city = req.query.city;   // Seattle
  if (!(state && city)) {
    res.status(400).send("Error: Missing required city and state query parameters.");
  } else {
    res.send("You sent a request for " + city + ", " + state);
  }
});
```

## File I/O in Node.js

```js
const fs = require('fs').promises;

async function readFile() {
  try {
    let contents = await fs.readFile('posts.txt', "utf8");
    return contents;
  } catch (err) {
    console.error(err);
  }
}
```

## Reading Directories

```js
const fs = require('fs').promises;
try {
  const paths = await fs.readdir("data");
  console.log("data directory contents: ");
  console.log(paths);
} catch (err) {
  console.error("Error reading directory");
}
```

## Finding Files in Node.js

```js
glob("*.png", (err, matches) => {
  if (err) {
    console.error("There was an error: " + err);
  } else {
    console.log(".png images in current directory:", matches);
  }
});

// or

const utils = require('utils');
const globPromise = utils.promisify(glob);

async function globAsync() {
  try {
    let matches = await globPromise("*.png");
    console.log(".png images in current directory:", matches);
  } catch(err) {
    console.error("There was an error: " + err);
  }
}

// the nodir option ignores directories
let dataFiles = await globPromise("data/*", { "nodir" : true });

// the ignore option takes patterns to ignore
let noGifs = await globPromise("public/img/*", { "ignore" : ['*gif'] });
```

# Intro to Databases

```js
function filterJSON(pokemonJSON) {
  let pokemon = pokemonJSON["pokemon"];
  let filtered = [];
  for (let i = 0; i < pokemon.length; i++) {
    let data = pokemon[i];
    if (data.weakness === "rock" &&
        data.name.indexOf("r") !== -1) && data.id < 145) {
      filtered.push(
        { "name" : data.name, "type" : data.type,
          "id" : data.id, "weakness" : data.weakness });
    }
  }

  let length = filtered.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      let firstPokemon = filtered[j - 1];
      let secondPokemon = filtered[j];
      if (firstPokemon.type > secondPokemon.type ||
          firstPokemon.type === secondPokemon.type &&
          firstPokemon.name < secondPokemon.name) {
        let temp = firstPokemon;
        filtered[j - 1] = secondPokemon;
        filtered[j] = temp;
      }
    }
  }
  let result = { "pokemon" : filtered };
  return result;
}
```

The following code does everything above without JSON/JS!

```sql
SELECT name, id, type, weakness
FROM pokemon
WHERE id < 145 AND name LIKE '%a%' AND weakness = 'rock'
ORDER BY type, name DESC;
```

* Databases give us a great improvement in the way we can build, process, and retrieve large datasets. Most software companies will have a large group dedicated to database management.
* Advantages of a database:
  * Powerful: Can search it, filter data, combine data from multiple sources.
  * Fast: Can search/filter a database very quickly compared to a file/JSON.
  * Big: Scale well up to very large data sizes.
  * Safe: Built-in mechanisms for failure recovery (e.g. transactions).
  * Multi-user: Concurrency feature let many users view/edit data at the same time.
  * Abstract: Provides layer of abstraction between stored data and app(s) - many database programs understand the same SQL commands.

## SQL Basics

```sql
SELECT name FROM menu WHERE qty > 0;

INSERT into menu (name, category, qty, image)
VALUES ("Cookie", "Desserts", 154, "cookie.png");
```

* Database querying
  * SELECT, DISTINCT, WHERE, LIKE, ORDER BY, LIMIT
* Database manipulation (create/insert)
  * CREATE TABLE with:
    * Datatypes: INT, VARCHAR(N), DATETIME, etc.
    * Constraints: PRIMARY KEY, DEFAULT, NOT NULL, etc.
  * INSERT INTO TABLE
* Accessing SQL from Node.js with promise-mysql:
  * db = await mysql.createConnection(...)
  * rows = await db.query(...)