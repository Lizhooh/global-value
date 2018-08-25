
const __STORE__ = {};

function _get(key) {
    if (typeof key === 'string') {
        const objs = key.split('.');
        let p = __STORE__;
        for (let i = 0; i < objs.length; i++) {
            const key = objs[i];
            if (key === '') continue;
            if (key in p === false) {
                p[key] = {};
            }
            p = p[key];
        }
        if (typeof p === 'object' && Object.keys(p).length === 0) {
            return null;
        }
        else {
            return p;
        }
    }
    else {
        return null;
    }
}

function _set(key, value) {
    if (typeof key === 'string') {
        const objs = key.split('.');
        let p = __STORE__;
        for (let i = 0; i < objs.length; i++) {
            const key = objs[i];
            if (key === '') continue;
            if (key in p === false) {
                p[key] = {};
            }
            if (i === objs.length - 1) {
                p[key] = value;
            }
            else {
                p = p[key];
            }
        }
    }
    return this;
}

export const set = _get;
export const get = _get;

export default {
    get: _get,
    set: _set,
}
