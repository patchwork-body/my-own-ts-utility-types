var TestObj = {
    name: 'awesome'
};
var TestObj2 = {
    name: 'awesome',
    value: 100
};
var TestObj3 = {
    apple: {
        order: 0,
        price: 100
    },
    banana: {
        order: 1,
        price: 200
    },
    orange: {
        order: 2,
        price: 300
    }
};
var TestObj4 = {
    apple: undefined,
    banana: "awesome",
    orange: 'not so awesome'
};
var TestObj5 = {
    name: 'awesome',
    details: {
        order: 0,
        price: 100
    }
};
var TestObj6 = {
    name: 'not so awesome'
};
// Tuple
var tuple = ['asdf', false, 0, { keyName: 'asdf' }];
var string;
var number;
var params;
var params2 = [{ a: { title: 'nice' } }];
var params3;
var params4;
var params5;
var retrunType;
var retrunType2;
var retrunType3;
var retrunType4 = function () { return 'awesome'; };
var result = a
    .set('title', 'awesome')
    .set('price', 404)
    .set('inStock', true)
    .set('params', { width: '100cm', height: '245cm' })
    .get();
