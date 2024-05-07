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

export declare interface HWJS_User {
    /**
     * 获取用户信息
     * @returns 用户信息的只读代理对象
     */
    getUser: () => User;
}
