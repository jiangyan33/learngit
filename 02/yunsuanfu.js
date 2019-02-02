


//二进制运算符，只对整数起作用
//二进制或运算符,将i转换为32位整数，如果i大于2的32次方，则舍去
// let i = i | 0;
//
console.log(100.010101 | 0);
console.log(Math.pow(2, 32) + 10 | 0);

// void 运算符,执行一个表达式，不返回任何值
let i;
void (i = 100);
console.log(i);
//,号运算符,对2个表达式进行求值，并返回后一个表达式的值
console.log('a', 'b');

let x = 0;
let y = ('a', 'b');
y = (console.log('aaaa'), 10000);
console.log(y);
//在返回一个值前，进行一些辅助操作
//左结合和右结合
// 3元运算符和赋值运算符是先执行右边的表达式

// 强制类型转换，Number可以把任何值转换为数值，如果参数不为number，结果为NaN,以后转换还是使用Number好点
console.log(parseInt('111aaa'));
console.log(Number('111aaa'));

//如果参数是对象，返回NaN,如果是单元素数值，返回具体的值

console.log(Number([1]));

//String()
console.log(String(true));

console.log(String(null));

console.log(String(undefined));

//错误处理机制
let err = new Error('自定义错误');
if (err.name) {
    console.log(err.name + ':aaa' + err.message);
}

try {
    throw err;
} catch (error) {
    console.log("这是一个错误:" + error.stack);
}

/**
 * Error对象的name为Error,message为构建Error对象时传递的参数，stack是发生错误的堆栈信息
 * 在Error对象基础上派生出来的对象，
 * SyntaxError，解析代码时发生的语法错误。
 * ReferenceError,引用一个不存在的变量时产生的错误
 * RangeError 数值发生越界时发生的错误
 * TypeError 变量或者参数不是预期类型时发生的错误
 * URIError URI相关函数的参数不正确是抛出的错误，一些编码方面的内容
 * EvalError eval函数没有被正确执行时会抛出，为了保证和以前的代码兼容才被保留
 */


//自定义错误
function UserError(message) {
    this.message = message || '默认错误信息';
    this.name = 'UserError';
}
UserError.prototype = new Error();
UserError.prototype.toString = function () {
    console.log('自定义错误打印');
}
UserError.prototype.constructor = UserError;

console.log(new UserError());

//throw可以抛出任意类型的值，js引擎在遇到throw语句就终止了
/**
 * 在try catch代码块中，如果遇到错误，会进入到catch代码块中，如果遇到return或者throw会不执行，直接走到finally中
 *
 */
function name(params) {

    try {
        console.log(1);
        throw 'sss';
    } catch (error) {
        console.log(2);
        return;
        {

        }
        throw 'bbb';
        throw 'ccc';

    } finally {
        console.log(3);
        // return '100';
    }
}
try {
    name();
} catch (error) {
    console.log(4);
}


//首行的空格键和tab键都可以参数缩进效果
//js会自动添加句末的分号
//有的地方不需要使用分号，for循环 if判断类的。
// 函数表达式仍然需要使用分号,将一个方法赋值给变量

((aaa) => {
    console.log(aaa);
})(10);


for (let i = 0; i < 100; i++) {
    console.log(`('sjs${i + 1}'),`);
}

//js的with语法，可以方便的拿到一个对象中的属性
let obj = {
    data: [1, 2, 3, 4, 5, 6],
    rows: 12
}
with (obj) {
    console.log(data[1]);

}