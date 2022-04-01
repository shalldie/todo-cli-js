import os from 'os';
import fs from 'fs';
import path from 'path';
import { ELang, EStatus, TodoItem } from './types';
import { table, TableUserConfig } from 'table';
import chalk from 'chalk';

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf-8'));

const CONFIG_FILE = path.join(os.homedir(), '.todo.db');

const DEF_TABLE_CONFIG: TableUserConfig = {
    header: {
        alignment: 'center',
        content: `${(pkg.name as string).toUpperCase()}@${pkg.version}`
    }
};

class Todo {
    state = {
        lang: ELang.en,
        list: [] as TodoItem[]
    };

    constructor() {
        this.load();
    }

    private load() {
        if (!fs.existsSync(CONFIG_FILE)) {
            this.save();
        }

        const content = fs.readFileSync(CONFIG_FILE, 'utf-8');
        Object.assign(this.state, JSON.parse(content));
    }

    public save() {
        fs.writeFileSync(CONFIG_FILE, JSON.stringify(this.state), 'utf-8');
    }

    public print(todos: TodoItem[]) {
        const config: TableUserConfig = {
            ...DEF_TABLE_CONFIG,
            columns: [
                //
                { alignment: 'center' },
                { alignment: 'center' },
                { alignment: 'left' },
                { alignment: 'left' }
            ]
        };
        const data = [
            ['ID', 'Status', 'Tags', 'Description'],
            ...todos.map(item => {
                const status =
                    item.status === EStatus.done
                        ? chalk.bgGreenBright.black.bold(` ${item.status} `)
                        : chalk.bgYellowBright.black.bold(` ${item.status} `);

                const tags =
                    item.tags
                        .split(',')
                        .filter(n => n.length)
                        .map(t => chalk.bgBlueBright(` ${t} `))
                        .join(',') || '';
                return [
                    //
                    item.id,
                    status,
                    tags,
                    item.description.trim()
                ];
            })
        ];

        process.stdout.write(table(data, config));
    }
}

export const todo = new Todo();
