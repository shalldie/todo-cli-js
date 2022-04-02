import { Command, Flags } from '@oclif/core';
import { EStatus, todo } from '../../todo';

export default class LS extends Command {
    static description = 'List todo items.';

    static examples = ['$ todo ls -s all'];

    static flags = {
        id: Flags.integer({ char: 'i', description: 'Id of todo.' }),
        status: Flags.enum<EStatus>({
            char: 's',
            description: `Status of todos'.`,
            default: EStatus.undone,
            options: [EStatus.all, EStatus.done, EStatus.undone]
        }),
        tags: Flags.string({ char: 't', description: 'Tags of todo.' }),
        description: Flags.string({ char: 'd', description: 'Description of todo.', required: false })
    };

    async run(): Promise<void> {
        const { flags } = await this.parse(LS);

        let list = todo.state.list;
        if (flags.id) {
            list = list.filter(n => n.id === flags.id);
        }
        if (flags.status) {
            list = list.filter(n => flags.status === EStatus.all || n.status === flags.status);
        }
        if (flags.tags) {
            list = list.filter(n => n.tags.includes(flags.tags!));
        }
        if (flags.description) {
            list = list.filter(n => n.description.includes(flags.description!));
        }

        todo.print(list);
    }
}
