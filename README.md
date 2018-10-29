
## global-value
Data is stored centrally in memory and can be used for get/set operations on multiple files.

### Installation:

```js
npm install global-value
```

### Usage

```js
const gv = require('global-value');

gv.set('data', {
    name: 'xxx',
    attr: {
        title: 'abc',
        url: 'http://xxx.com',
    },
});

gv.get('data.attr.title'); // abc
```




