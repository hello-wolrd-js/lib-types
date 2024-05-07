import { HWJS_Storage } from "./storage";
import { HWJS_UI } from "./ui";
import { HWJS_User } from "./user";

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
declare interface HWJS extends HWJS_UI, HWJS_User, HWJS_Storage {}
