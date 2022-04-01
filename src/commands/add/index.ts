import { Command, Flags } from '@oclif/core';
import { EStatus, todo, TodoItem } from '../../todo';

export default class Add extends Command {
    static description = 'Add a todo item.';

    static examples = [`$ todo add -d 'A new todo.'`];

    static flags = {
        status: Flags.enum<EStatus>({
            char: 's',
            description: `Status of todo's.`,
            default: EStatus.undone,
            options: [EStatus.done, EStatus.undone]
        }),
        tags: Flags.string({ char: 't', description: 'Tags of todo.', default: '' }),
        description: Flags.string({ char: 'd', description: `Todo's description to add.`, required: true })
    };

    async run(): Promise<void> {
        const { flags } = await this.parse(Add);

        const nextId = Math.max(...todo.state.list.map(n => n.id), 0) + 1;

        const item: TodoItem = {
            ...new TodoItem(),
            id: nextId,
            status: flags.status,
            tags: flags.tags,
            description: flags.description
        };

        todo.state.list.push(item);
        todo.save();
    }
}
