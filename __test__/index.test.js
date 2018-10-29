
const gv = require('../src');

test('set', () => {
    gv.set('data', {
        name: 'xxx',
        attr: {
            title: 'abc',
            url: 'http://xxx.com',
        },
    });

    expect(gv.get('data')).toEqual({
        name: 'xxx',
        attr: {
            title: 'abc',
            url: 'http://xxx.com',
        },
    });
});

test('get', () => {
    expect(gv.get('data.name')).toEqual('xxx');
});

test('get', () => {
    expect(gv.get('data.attr.title')).toEqual('abc');
});

