//console对象
//有info，log，
console.time('test');
console.log('This is log');
console.info('This is info');

//nodejs中没有什么区别
console.error('this is error');
console.warn('this is warn');
debugger;
let arr = [
    {
        name: '石江山',
        age: 19
    },
    {
        name: '江岩33',
        age: 25
    }
];
debugger;
//这个数组打印出来很漂亮
console.table(arr);

//dir可以对一个对象进行检查，以一种便于阅读的格式进行打印
console.dir(arr[0], { colors: true });
console.timeEnd('test');

//debugger语句,在断点调试中相当于是一个断点

