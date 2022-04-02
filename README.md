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
* [`todo edit`](#todo-edit)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo ls`](#todo-ls)
* [`todo rm`](#todo-rm)

## `todo add`

Add a todo item.

```
USAGE
  $ todo add -d <value> [-s done|undone] [-t <value>]

FLAGS
  -d, --description=<value>   (required) Description of todo.
  -s, --status=(done|undone)  [default: undone] Status of todo's.
  -t, --tags=<value>          Tags of todo.

DESCRIPTION
  Add a todo item.

EXAMPLES
  $ todo add -d 'A new todo.'
```

_See code: [dist/commands/add/index.ts](https://github.com/shalldie/todo-cli-js/blob/v0.0.2/dist/commands/add/index.ts)_

## `todo edit`

List todo items.

```
USAGE
  $ todo edit -i <value> [-s all|done|undone] [-t <value>] [-d <value>]

FLAGS
  -d, --description=<value>       Description of todo.
  -i, --id=<value>                (required) Id of todo.
  -s, --status=(all|done|undone)  Status of todos'.
  -t, --tags=<value>              Tags of todo.

DESCRIPTION
  List todo items.

EXAMPLES
  $ todo edit -i 233 -s doned -d "A new description"
```

_See code: [dist/commands/edit/index.ts](https://github.com/shalldie/todo-cli-js/blob/v0.0.2/dist/commands/edit/index.ts)_

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
  $ todo ls [-i <value>] [-s all|done|undone] [-t <value>] [-d <value>]

FLAGS
  -d, --description=<value>       Description of todo.
  -i, --id=<value>                Id of todo.
  -s, --status=(all|done|undone)  [default: undone] Status of todos'.
  -t, --tags=<value>              Tags of todo.

DESCRIPTION
  List todo items.

EXAMPLES
  $ todo ls -s all
```

_See code: [dist/commands/ls/index.ts](https://github.com/shalldie/todo-cli-js/blob/v0.0.2/dist/commands/ls/index.ts)_

## `todo rm`

Remove a todo item.

```
USAGE
  $ todo rm [-i <value>]

FLAGS
  -i, --id=<value>  Id of todo.

DESCRIPTION
  Remove a todo item.

EXAMPLES
  $ todo rm -i 233
```

_See code: [dist/commands/rm/index.ts](https://github.com/shalldie/todo-cli-js/blob/v0.0.2/dist/commands/rm/index.ts)_
<!-- commandsstop -->

## License

MIT
