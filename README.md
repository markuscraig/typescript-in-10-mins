# Learn Typescript in 10 Minutes

This repo provides a quick walk-through of the Typescript language by using source-code examples with comments.

## Dependencies

Install the latest Typescript compiler...

```bash
$ npm install -g typescript
```

Install Node.js (any version for this tutorial)...

* https://nodejs.org/en/download/

## Compile (CLI)

You can transpile typescript to javascript using the 'tsc' compiler.

```bash
$ tsc -p .
```

The "tsconfig.json" Typescript config file configures the compiler.

The build output is written to the './build' directory.

## Compile (Visual Studio Code)

The build command for Visual Studio Code is defined in "./vscode/tasks.json".

To compile with VS Code...

* Open a .ts in VS Code
* Run the build task
  * "SHIFT-CMD-B" (OSX)
  * https://code.visualstudio.com/docs/getstarted/keybindings#_tasks

## Run

Run any compiled example with Node.js...

```bash
$ node build/01_basic_types.js
```
