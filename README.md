# zalgo-js

Utility for unleashing Zalgo into your strings.

[![npm version](https://img.shields.io/npm/v/zalgo-js.svg?style=flat-square)](https://www.npmjs.com/package/zalgo-js)
[![build status](https://img.shields.io/travis/casieber/zalgo-js/master.svg?style=flat-square)](https://travis-ci.org/casieber/zalgo-js)

## How To Use

```javascript
import zalgo from "zalgo-js";

const myString = "Hello World!";
const releaseHim = zalgo(myString);

console.log(releaseHim);
```

## Planned Features

- [ ] Customizable levels of Zalgo-ness
  - [x] Specify accepted directions
  - [x] Specify overall intensity
  - [ ] Specify function used to determine per-character intensity
  - [ ] Specify set of a accepted combining characters (???)
  - [ ] Specify overall min-max frequency of combining characters
- [x] Seeded version to allow for more deterministic Zalgo
- [x] Export curried version to accept options first and output custom summoning