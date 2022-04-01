import { Command } from '@oclif/core';
import { todo } from '../../todo';

export default class RM extends Command {
    static description = 'Remove a todo item.';

    static examples = [`$ todo rm 233`];

    static args = [{ name: 'id', description: 'The id which todo item to be removed.', required: true }];

    async run(): Promise<void> {
        const { args } = await this.parse(RM);
        todo.state.list = todo.state.list.filter(n => n.id !== args.id);
    }
}
