export default class WindowReferenceStore {
    private storeNamespace;
    private storeName;
    private root;
    constructor(storeName?: string, namespace?: string, parent?: any);
    private registerGlobalReferences;
    has(key: any): boolean;
    get(key: any): any;
    set(key: string, ref: any, override?: boolean): boolean;
    remove(key: any): boolean;
}
export interface WindowReferenceStoreClass {
    constructor(storeName?: string, namespace?: string, parent?: null): any;
    has(key: any): boolean;
    get(key: any): any;
    set(key: string, ref: any, override?: boolean): boolean;
    remove(key: any): boolean;
}
