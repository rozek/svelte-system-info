# svelte-system-info #

 determines name and version of underlying browser and operating system (not only for Svelte)

**NPM users**: please consider the [Github README](https://github.com/rozek/svelte-system-info/blob/main/README.md) for the latest description of this package (as updating the docs would otherwise always require a new NPM package version)

### Installation ###

```
npm install svelte-system-info
```

### Usage ###

```
<script>
  import System from 'svelte-system-info'

  console.log('BrowserName',    System.BrowserName)
  console.log('BrowserVersion', System.BrowserVersion)
  console.log('OSName',         System.OSName)
  console.log('OSVersion',      System.OSVersion)
</script>
```

### Example ###

An example is available on the Svelte REPL - feel free to play with it!

* [svelte-system-info](https://svelte.dev/repl/31898be7c9cc4512b3613290de2e6d39)
