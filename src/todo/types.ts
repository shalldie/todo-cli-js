export enum ELang {
    en = 'en',
    zh = 'zh'
}

export interface ILangConfig {
    [key: string]: Record<ELang, string>;
}

export enum EStatus {
    all = 'all',
    done = 'done',
    undone = 'undone'
}

export class TodoItem {
    /**
     * id
     *
     * @memberof TodoItem
     */
    id = 0;

    /**
     * 是否完成
     *
     * @memberof TodoItem
     */
    status = EStatus.undone;

    /**
     * 标签
     *
     * @memberof TodoItem
     */
    tags = '';

    /**
     * 描述
     *
     * @memberof TodoItem
     */
    description = '';
}
