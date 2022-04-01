# todo-cli-js

A todo manager on the command-line interface.

[![Npm Version](https://img.shields.io/npm/v/todo-cli-js.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/todo-cli-js)
[![Build Status](https://img.shields.io/github/workflow/status/shalldie/todo-cli-js/ci?label=build&logo=github&style=flat-square)](https://github.com/shalldie/todo-cli-js/actions)
[![License](https://img.shields.io/github/license/shalldie/todo-cli-js?logo=github&style=flat-square)](https://github.com/shalldie/todo-cli-js)

<!-- toc -->
* [todo-cli-js](#todo-cli-js)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g todo-cli-js
$ todo COMMAND
running command...
$ todo (--version)
todo-cli-js/0.0.2 darwin-arm64 node-v16.13.1
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`todo add`](#todo-add)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo ls`](#todo-ls)
* [`todo rm ID`](#todo-rm-id)

## `todo add`

Add a todo item.

```
USAGE
  $ todo add -d <value> [-s done|undone] [-t <value>]

FLAGS
  -d, --description=<value>   (required) Todo's description to add.
  -s, --status=(done|undone)  [default: undone] Status of todo's.
  -t, --tags=<value>          Tags of todo.

DESCRIPTION
  Add a todo item.

EXAMPLES
  $ todo add -d 'A new todo.'
```

_See code: [dist/commands/add/index.ts](https://github.com/shalldie/todo-cli-js/blob/v0.0.2/dist/commands/add/index.ts)_

## `todo help [COMMAND]`

Display help for todo.

```
USAGE
  $ todo help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for todo.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `todo ls`

List todo items.

```
USAGE
  $ todo ls [-i <value>] [-s all|done|undone] [-t <value>] [-t <value>]

FLAGS
  -i, --id=<value>                Id of todo.
  -s, --status=(all|done|undone)  [default: undone] Status of todos'.
  -t, --description=<value>       Tags of todo.
  -t, --tags=<value>              Tags of todo.

DESCRIPTION
  List todo items.

EXAMPLES
  $ todo ls -s all
```

_See code: [dist/commands/ls/index.ts](https://github.com/shalldie/todo-cli-js/blob/v0.0.2/dist/commands/ls/index.ts)_

## `todo rm ID`

Remove a todo item.

```
USAGE
  $ todo rm [ID]

ARGUMENTS
  ID  The id which todo item to be removed.

DESCRIPTION
  Remove a todo item.

EXAMPLES
  $ todo rm 233
```

_See code: [dist/commands/rm/index.ts](https://github.com/shalldie/todo-cli-js/blob/v0.0.2/dist/commands/rm/index.ts)_
<!-- commandsstop -->

## License

MIT
