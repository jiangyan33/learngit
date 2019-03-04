/**
 * json格式的严格要求
 * 1.复合结构只能是对象或者数组
 * 2.数据类型有字符串,十进制数值，boolean,null
 * 3.对象的键必须使用双引号,最后一个键不能以逗号结尾
 */

//字符串被转义的时候带“”
console.log(JSON.stringify('foo') === "\"foo\"");
//对象被转换时，如果键的value为undefined，或者为方法，不会被转换


//只对对象有用，可以取遍历的白名单
let stu = {
    'name': '石江山',
    'age': 12,
    'birthday': '1029'
};
let arr = ['name', 'age'];
console.log(JSON.stringify(stu, arr));

