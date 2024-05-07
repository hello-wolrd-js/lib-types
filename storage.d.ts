declare interface Storage {
    getItem: (key: string) => null | string;
    setItem: (key: string, content: string) => null | string;
}

export declare interface HWJS_Storage {
    localStorage: Storage;
    sessionStorage: Storage;
}
