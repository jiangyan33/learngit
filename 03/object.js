//js中的Object对象
// 1.当做方法使用

let obj1 = new Object({});
let obj2 = new Object();
let obj3 = new Object(null);
let obj4 = new Object(undefined);
//obj5是一个字符串的包装对象,如果是一些原始类型的数据，会被转换为对应的包装对象
let obj5 = new Object('');
let obj6 = {};
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);
//如果object方法的参数是一个对象，它总是返回该对象。
let isObject = function (value) {
    //表示将value转换为一个对象
    return value === Object(value);
}
console.log(isObject(obj1));
console.log(isObject(obj2));
console.log(isObject(obj3));
console.log(isObject(obj4));
console.log(isObject(obj5));
console.log(isObject(obj6));

//2.Object的静态方法
//keys返回对象所有的可枚举属性
let arr = ['hello', 'world'];
console.log(Object.keys(arr));
//getOwnPropertyName返回对象自身所有的属性，包括不可枚举属性
console.log(Object.getOwnPropertyNames(arr));

//3.Object实例方法
//valueOf，返回一个对象的值，默认是对象本身
let stu = { name: '石江山', age: 12 };
console.log(stu.valueOf());
//在进行类型自动转换为会调用该方法，例如1+0bj时
//toString()方法
//对象的toString()方法默认返回[Object,Object];Array,Date,String,Function都做了自动转换
let func = () => {
    return 'hello world';
}
console.log(func.toString());
// Object.prototype.toString = function () {
//     let keys = Object.keys(this);
//     let string = '[';
//     for (let key of keys) {
//         //这个时候就不能使用this.获取属性了
//         string += `${key}=${this[key]},`
//     }
//     string = string.substring(0, string.length - 1);
//     return string + ']';
// }
// console.log(stu.toString());
//通过Object对象的toString方法，精准的判断数据类型,[Object,Object],第二个object为对象具体的数据类型
//由于有些对象可能重写了Object的toString()方法，需要换一种调用方法

console.log(Object.prototype.toString.call(2));

function type(o) {
    return Object.prototype.toString.call(o).match(/\[object (.*?)\]/)[1].toLowerCase();
}

console.log(type(null));
//为type添加其他方法
['Null', 'String', 'Undefined', 'Array', 'Object', 'Boolean', 'Regex', 'Function'].forEach(name => {
    type[`is${name}`] = function (o) {
        return type(o) === name.toLowerCase();
    }
});
//一个方法可以有返回值，也可以有私有方法，就像Object一样
console.log(type.isFunction(type));
//hasOwnProperty判断对象是否具有该属性，不包括原型上面的,包括不可枚举属性
console.log(arr.hasOwnProperty('length'));


obj6 = {
    name: 10,
    toString: function (params) {
        return params;
    }
}
console.log(obj6.toString('aaa'));