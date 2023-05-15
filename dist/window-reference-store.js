var i = Object.defineProperty;
var n = (s, e, t) => e in s ? i(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[e] = t;
var r = (s, e, t) => (n(s, typeof e != "symbol" ? e + "" : e, t), t);
class h {
  constructor(e = "", t = "", o = null) {
    r(this, "storeNamespace", "windowReferenceStore");
    r(this, "storeName", "");
    r(this, "root", typeof window < "u" ? window : typeof global < "u" ? global : typeof document < "u" ? document : {});
    if (t ? this.storeNamespace = t : console.info("It's recommended to assign a namespace for your stores"), e)
      this.storeName = e;
    else {
      console.error(
        "A store name needs to be specified. Initiation aborted in WindowReferenceStore"
      );
      return;
    }
    o !== null && (this.root = o), this.registerGlobalReferences();
  }
  registerGlobalReferences() {
    typeof this.root[this.storeNamespace] > "u" && (this.root[this.storeNamespace] = {}), typeof this.root[this.storeNamespace][this.storeName] > "u" && (this.root[this.storeNamespace][this.storeName] = {});
  }
  has(e) {
    return e ? typeof this.root[this.storeNamespace][this.storeName][e] < "u" : (console.log(
      `Attempted to fetch an empty key. Reference store namespace: ${this.storeNamespace}. Reference store name: ${this.storeName}`
    ), !1);
  }
  get(e) {
    return this.has(e) ? this.root[this.storeNamespace][this.storeName][e] : (console.log(
      `Could not find reference ${e} in store ${this.storeNamespace} ${this.storeName}`
    ), !1);
  }
  set(e, t, o = !1) {
    if (this.has(e) && !o)
      return console.warn(
        `Reference '${e}' already exists in store '${this.storeName}' and override wasn't enabled`
      ), !1;
    if (typeof t > "u")
      return console.error(
        `Can't register a undefined object to store ${this.storeName}`
      ), !1;
    try {
      return this.root[this.storeNamespace][this.storeName][e] = t, !0;
    } catch {
      return !1;
    }
  }
  remove(e) {
    return this.has(e) ? delete this.root[this.storeNamespace][this.storeName][e] : !1;
  }
}
export {
  h as WindowReferenceStore
};
