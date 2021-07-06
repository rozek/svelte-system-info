# svelte-system-info #

 determines name and version of underlying browser and operating system (not only for Svelte)

**NPM users**: please consider the [Github README](https://github.com/rozek/svelte-system-info/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

## Installation ##

`svelte-system-info` may be used as an ESM, CommonJS or AMD module or from a global variable.

You may either install the package into your build environment using [NPM](https://docs.npmjs.com/) with the command

```
npm install svelte-system-info
```

or load the plain script file directly

```
<script src="https://unpkg.com/svelte-system-info"></script>
```

## Access ##

How to access the package depends on the type of module you prefer

* ESM: `import System from 'svelte-system-info'`
* CommonJS: `const System = require('svelte-system-info')`
* AMD: `require(['svelte-system-info'], (System) => {...})`

Alternatively, you may access the global variable `System` directly.

## Usage as an ECMAscript Module (e.g., within Svelte) ##

```
<script>
  import System from 'svelte-system-info'

  console.log('BrowserName',    System.BrowserName)
  console.log('BrowserVersion', System.BrowserVersion)
  console.log('OSName',         System.OSName)
  console.log('OSVersion',      System.OSVersion)
</script>
```

## Usage as a CommonJS or AMD Module (or as a global Variable) ##

Let's assume that you already "required" or "imported" (or simply loaded) the module according to your local environment. In that case, you may use it as follows:

```
console.log('BrowserName',    System.BrowserName)
console.log('BrowserVersion', System.BrowserVersion)
console.log('OSName',         System.OSName)
console.log('OSVersion',      System.OSVersion)
```

## Example ##

An example is available on the Svelte REPL - feel free to play with it!

* [svelte-system-info](https://svelte.dev/repl/31898be7c9cc4512b3613290de2e6d39)

## Build Instructions ##

You may easily build this package yourself.

Just install [NPM](https://docs.npmjs.com/) according to the instructions for your platform and follow these steps:

1. either clone this repository using [git](https://git-scm.com/) or [download a ZIP archive](https://github.com/rozek/svelte-system-info/archive/refs/heads/main.zip) with its contents to your disk and unpack it there 
2. open a shell and navigate to the root directory of this repository
3. run `npm install` in order to install the complete build environment
4. execute `npm run build` to create a new build

You may also look into the author's [build-configuration-study](https://github.com/rozek/build-configuration-study) for a general description of his build environment.

## License ##

[MIT License](LICENSE.md)
