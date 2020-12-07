/**
 * 原始类型
 */
let bool: boolean = true;
let num: number = 123;
let str: string = 'wyj';

// X：TS 中变量的数据类型是不可以改变的
// str = 123;

/**
 * 数组，两种定义方式：
 * 1、类型名称 + []
 * 2、Array关键字 + <类型名称>
 */
// 数组元素只能是 number 类型
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

// 联合类型：为其定义多种数据类型
let arr3: Array<number | string> = [1, 'wyj'];

/**
 * 元组，特殊的数组，限定了数组元素的类型及个数
 */
let tuple: [number, string] = [111, 'wyj'];

// X：不能为元组指定超过定义时的元素个数
// tuple = [111, 'wyj', 222];

// 元组越界问题
tuple.push(222); // 可以通过 push() 方法为元组插入新元素
console.log(tuple); // 亦可以正常输出：[111, 'wyj', 222]
// tuple[2]; // X：但不允许越界访问

/**
 * 函数
 */
// X：参数“x“隐式具有“any”类型。—> 需补充参数的类型注解
// let add = (x, y) => x + y;
let add = (x: number, y: number) => x + y;

// 返回值的类型注解(可省略，利用了 TS 类型推断功能）
let add1 = (x: number, y: number): number => x + y;

// 定义函数类型
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

/**
 * 对象
 */
// let obj: object = {x: 1, y: 2};
// js 中可以任意修改对象的属性
// obj.x = 3; // 类型“object”上不存在属性“x”

let obj: {x: number, y: number} = {x: 1, y: 2};
obj.x = 3;

/**
 * symbol — 具有唯一的值
 */
let s1: symbol = Symbol();
let s2 = Symbol();

/**
 * undefined, null
 */
// 一旦声明就不能再被赋值其他值，只能是它本身
let un: undefined = undefined;
let nu: null = null;
// 其他变量也不能被赋予 undefined 或 null
// 在 ts 官方文档中 undefined 或 null 是其他类型的子类，可以被赋给其他类型，需要配置 tsconfig.json -> strictNullChecks
num = undefined;

/**
 * void
 *
 * 在 js 中是一种操作符，可以让任何表达式返回 undefined，e.g. void 0; // 因为 undefined 不是 js 保留字，防止被用户自定义的覆盖
 * ts 中 void 表示没有任何返回值的类型，e.g. 一个没有任何返回值的函数
 */
let noReturn = () => {}

/**
 * any，不指定变量类型，则为 any 类型
 */
// === js，不建议使用
let  x;
x = 1;
x = 'wyj';

/**
 * never，永远不会有返回值的类型
 */
// case1，一个函数抛出了一个异常，则其永远不会有返回值
let error = () => {
    throw new Error('error');
}
// case2，死循环函数，永远不会返回
let endless = () => {
    while(true) {}
}