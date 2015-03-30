# Browserify Sandbox

Trying to figure out upgrade path for application with lots of existing JavaScript
that and adding modules that rely on global variables that I can't remove from the
window namespace.

# Build

npm install

BROWSERIFYSHIM_DIAGNOSTICS=1 browserify main.js -o bundle.js

> or

npm run build

# Takeaways

It seems the best way to begin migrating an application to a browserifiable state is to include your JavaScript files in the following order:

* global variable style supporting libraries (jQuery, THREE, etc.) that are not CommonJS module compatible.
* browserify bundle for any new & migrated code
  * variables needed from global shimmed through browerify-shim ```{ 'lib': 'global:lib'}```
  * libraries shared with new modules and old code exposed through `browser` field.
* old code

Any libraries that need to be used by both old and new module code should be included in the bundle and exposed through the browser field and exported.

This same rythm repeats for header and footer blocks of code.