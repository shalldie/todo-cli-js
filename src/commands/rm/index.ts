import { Command, Flags } from '@oclif/core';
import { todo } from '../../todo';

export default class RM extends Command {
    static description = 'Remove a todo item.';

    static examples = [`$ todo rm -i 233`];

    static flags = {
        id: Flags.integer({ char: 'i', description: 'Id of todo.' })
    };

    async run(): Promise<void> {
        const { flags } = await this.parse(RM);
        todo.state.list = todo.state.list.filter(n => n.id !== flags.id);
    }
}
