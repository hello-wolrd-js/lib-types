export declare interface HWJS_UI {
    /**
     * solidjs-toast消息条实例
     */
    toast: {
        success: (msg: string) => void;
        error: (msg: string) => void;
        loading: (msg: string) => void;
        remove: () => void;
    };
    /**
     * modal实例
     */
    modal: {
        open: (content: string) => void;
        close: () => void;
    };
}
