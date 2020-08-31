# JavaScript Modules

**Created:** 2020-08-30T18:25:41Z
**Last Updated:**

## Deeper Diver into

- Modules
- Bundles
- Transpilation
- Code Splitting

## History of JavaScript usage

**Early 2000s - no module bundling**

- Common practice to write one main script for an entire website
- Dependencies were in separate files that had to load before the main script, e.g. jQuery (released in early 2006) for handling cross-browser differences
- There were quite a few problems with this approach, such as polluting the global scope, but it worked for the low complexity of web applications at the time.

**Mid 2000s - introducing modules**

- Developers needed a better way to build and maintain online software at scale
- Problems
  - As more and more features were required, the hassle of tracking and loading dependencies in the right order became too much of a burden
  - increasing complexity often resulted in features being frustratingly intermingled and scattered in code
- The solution—split your codebase into modules

**Early 2009 - CommonJS**

- Create a specification for loading modules in a specific format, in order into a file that could then be used by a browser. This requires a server which is capable of compiling JavaScript.
- Mulitple implementations of CommonJS, most notably Node.js

**Mid 2009 - Present**

- Node.js pioneered the CommonJS ethos, which became a central component of “universal” JavaScript.
- Node.js not only processes JavaScript, it runs it—empowering modules to be written in JavaScript with no extra setup.

**2011 - Server side JavaScript**

- By 2011 JavaScript had broken out of the browser and could be used as a server-side scripting language
- Entire applications were—and are—written in JavaScript, and share modules between client and server.

**JavaScript Modules Present**

- Today, Native Modules are a browser standard ES6 (ECMAScript 2015+). Including Node v13+
- Spanning the gap between ES5 and ES6 required to the use of a tool called "Transpilation". Basically enabling the use of ES6 code to be used in browsers that only supports ES5, rather than wait for the browser support to catch up, this is called "JavaScript Bundling"
- Most popular tool to use is "Webpack + Babel"

**Note:** ES5 and ES6 are the 5th and 6th edition of the ECMAScript standard - see https://en.wikipedia.org/wiki/ECMAScript, under Versions heading

## Modules - what are they?

[Encapsulated units of JavaScript linked by an export/import syntax](https://exploringjs.com/es6/ch_modules.html).

## Module Bundling

Providing mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed.

Modern JavaScript for web applications can now be thought of as a bundle of modules interacting with each other to create features. Dependencies are modules, too, which means they no longer need to be loaded individually before the main file can load.

### Additional optimisations

**Minification**

Once a bundle is created it is meant for the browser to consume and does not have to be human-readable. Minifying the bundle to remove formatting, such as white-space or long variable names, can reduce file size significantly.

**Source Maps**

If the code is not human-readable it won’t be easy to debug in the browser. That’s the reason sourcemaps were created. Sourcemaps act like decoders and enable browsers to parse the minified code and put formatting back in. They also contain references to the lines in the original files, which means it’s possible to track bugs to the exact source. Bundler tools offer an option to create a sourcemap file at the time of minifying, which is co-located with your bundle.

### CommonJS

### AMD

### RequireJS

### Webpack

### Babel

## Native Browser Modules Support

Use of native JavaScript modules is dependent on the import and export statements, with IE not supporting this ES6 feature. Please see https://caniuse.com/#feat=es6-module-dynamic-import for more details. With exports being very similar

## How does bundling relate to code splitting?

## References

- [Exploring JS - Modules](https://exploringjs.com/es6/ch_modules.html)
- [CommonJS Wiki - Modules](http://wiki.commonjs.org/wiki/Modules)
- [Brief History of NodeJS | NodeJS](https://nodejs.dev/learn/a-brief-history-of-nodejs)
- [ECMAScript | Wikipedia](https://en.wikipedia.org/wiki/ECMAScript)
- [JavaScript Modules | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [JavaScript Modules and Code Bundling Explained](https://www.simplethread.com/javascript-modules-and-code-bundling-explained/)
- [Module Dynamic Import | Can I use](https://caniuse.com/#feat=es6-module-dynamic-import)
