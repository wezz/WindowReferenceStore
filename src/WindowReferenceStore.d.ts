declare class WindowReferenceStore {
  private storeNamespace;
  private storeName;
  private root;
  constructor(storeName?: string, namespace?: string, parent?: null);
  private registerGlobalReferences;
  has(key: any): boolean;
  get(key: any): any;
  set(key: string, ref: any, override?: boolean): boolean;
  remove(key: any): boolean;
}
