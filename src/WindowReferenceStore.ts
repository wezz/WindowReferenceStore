export default class WindowReferenceStore {
  private storeNamespace = "windowReferenceStore";
  private storeName = "";
  private root: any =
    typeof window !== "undefined"
      ? (window as any)
      : typeof global !== "undefined"
      ? (global as any)
      : typeof document !== "undefined"
      ? (document as any)
      : {};
  constructor(storeName : string= "", namespace : string= "", parent : any= null) {
    if (namespace) {
      this.storeNamespace = namespace;
    } else {
      console.info("It's recommended to assign a namespace for your stores");
    }

    if (storeName) {
      this.storeName = storeName;
    } else {
      console.error(
        "A store name needs to be specified. Initiation aborted in WindowReferenceStore"
      );
      return;
    }

    if (parent !== null) {
      this.root = parent as any;
    }
    this.registerGlobalReferences();
  }

  private registerGlobalReferences() {
    if (typeof this.root[this.storeNamespace] === "undefined") {
      this.root[this.storeNamespace] = {};
    }
    if (typeof this.root[this.storeNamespace][this.storeName] === "undefined") {
      this.root[this.storeNamespace][this.storeName] = {};
    }
  }

  public has(key: string) {
    if (!key) {
      console.log(
        `Attempted to fetch an empty key. Reference store namespace: ${this.storeNamespace}. Reference store name: ${this.storeName}`
      );
      return false;
    }
    return (
      typeof this.root[this.storeNamespace][this.storeName][key] !== "undefined"
    );
  }

  public get(key: string) {
    if (!this.has(key)) {
      console.log(
        `Could not find reference ${key} in store ${this.storeNamespace} ${this.storeName}`
      );
      return false;
    }
    return this.root[this.storeNamespace][this.storeName][key];
  }

  public set(key: string, ref: any, override = false) {
    if (this.has(key) && !override) {
      console.warn(
        `Reference '${key}' already exists in store '${this.storeName}' and override wasn't enabled`
      );
      return false;
    }
    if (typeof ref === "undefined") {
      console.error(
        `Can't register a undefined object to store ${this.storeName}`
      );
      return false;
    }
    try {
      this.root[this.storeNamespace][this.storeName][key] = ref;
      return true;
    } catch (e) {
      return false;
    }
  }

  public remove(key: string) {
    if (this.has(key)) {
      return delete this.root[this.storeNamespace][this.storeName][key];
    }
    return false;
  }
}