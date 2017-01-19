Javascript Promises are not difficult. It has 3 states. They are:
 * Promise is **pending**
 * Promise is **resolved**
 * Promise is **rejected**

But sometime, you might write a code like this:

```js
const URL = '...'
$.get(URL)
  .then(response => cacheData(response))
  .then(response => parseData(response))
  .then(response => updateUserStore(response))
  .then(response => refreshView(response))
```

It's not a big deal but you can re-write the above code like this:

```js
const URL = '...'
$.get(URL)
  .then(cacheData)
  .then(parseData)
  .then(updateUserStore)
  .then(refreshView)
```

It would be easy to read and prevent the side-effect handling methods

Remember that each function must return the data so that the promise chain can work normally.

It would be easier if you use async/await:

```js
const handleRespose = async () => {
  const URL = '...',
        response = await $.get(URL),
        data = cacheData(response),
        user = parseData(data),
        model = updateUserStore(user)

  refreshView(model)
}
```