# Browserify Sandbox

Trying to figure out upgrade path for application with lots of existing JavaScript
that and adding modules that rely on global variables that I can't remove from the
window namespace.

# Build

BROWSERIFYSHIM_DIAGNOSTICS=1 browserify main.js -o bundle.js --external moment
