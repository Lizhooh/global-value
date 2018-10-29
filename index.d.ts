
interface PGlobalValue {
    get(key: string): object | any,
    set(key: string, value: object): PGlobalValue,
}

export default {
    get: (key: string) => object | any,
    set: (key: string, value: object) => PGlobalValue
}

export function get(key: string): object | any;
export function set(key: string, value: object): PGlobalValue;
