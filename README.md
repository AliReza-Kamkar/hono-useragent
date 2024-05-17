# UserAgent Parser Middleware for [Hono](https://hono.dev/) 🔥

hono-useragent is a simple middleware that uses [ua-parser-js](https://www.npmjs.com/package/ua-parser-js) under the hood to parse useragent from request header with improved type safty.

## Installation
You can install this package with bun
```bash
bun install hono-useragent
```
or you can use npm with this command
```bash
npm i hono-useragent
```

## Usage overview
Simple hono app with useragent middleware
```ts
import { Hono } from 'hono';
import useragent from 'hono-useragent';

// create hono app
const app = new Hono();

// attach middleware to app
app.use(useragent());

app.get('/', (c) => {
  const ua = c.useragent;
  return c.json({
    browser: ua.browser?.name,
    version: ua.browser?.version,
    os: ua.os?.name
  });
});
```

## UserAgent parameters
As I mentioned before, we use <code>ua-parser-js</code> under the hood.
You can use these parameters in <code>c.useragent</code> object.
```ts
browser?.name      // 'Chrome'
browser?.version   // '124.0.6367.207'
browser?.major     // '124'
cpu?.architecture  // 'amd64'
engine?.name       // 'Blink'
engine?.version    // '124.0.0.0'
os?.name           // 'Linux'
os?.version        // 'x86_64' or kernel version like '6.5.0'
```

## Running Tests
Make sure you have installed <code>bun</code> and then run below command:
```bash
bun run test
```

## Author
AliReza Kamkar (alireza.kamkar@outlook.com)

## License

MIT License

Copyright (c) 2024 AliReza Kamkar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
