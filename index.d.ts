/**
 * 全局变量(为了方便 QWQ) = window.HWJS
 */
declare const HWJS: HWJS;

/**
 * 拓展window对象
 */
interface Window {
    HWJS: HWJS;
}

/**
 * HWJS
 */
declare type HWJS = {
    /**
     * 获取用户信息
     * @returns 用户信息的只读代理对象
     */
    getUser: () => User;
    /**
     * solidjs-toast消息条实例
     */
    toast: object;
    /**
     * modal实例
     */
    modal: {
        open: (content: string) => void;
        close: () => void;
    };
};

/**
 * 用户信息
 */
declare interface User {
    id: string;
    username: string;
    role: "admin" | "common";
    released_worlds: string[];
    favorite_worlds: string[];
}
