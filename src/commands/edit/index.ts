import { Command, Flags } from '@oclif/core';
import { EStatus, todo } from '../../todo';

export default class Edit extends Command {
    static description = 'List todo items.';

    static examples = ['$ todo edit -i 233 -s done -d "A new description"'];

    static flags = {
        id: Flags.integer({ char: 'i', description: 'Id of todo.', required: true }),
        status: Flags.enum<EStatus>({
            char: 's',
            description: `Status of todos'.`,
            options: [EStatus.all, EStatus.done, EStatus.undone]
        }),
        tags: Flags.string({ char: 't', description: 'Tags of todo.' }),
        description: Flags.string({ char: 'd', description: 'Description of todo.' })
    };

    async run(): Promise<void> {
        const { flags } = await this.parse(Edit);

        const item = todo.state.list.find(n => n.id === flags.id);
        if (!item) {
            return;
        }
        Object.assign(item, flags);
        todo.save();
    }
}
