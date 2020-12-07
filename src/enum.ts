/**
 * 将程序中不容易记忆的硬编码或变量抽取出来定义成【枚举】
 */

/**
 * 数字枚举
 */
// 包含 5 个枚举成员，默认取值从 0 开始
enum Role {
    Reporter,
    Developer,
    Maintainer,
    Owner,
    Guest
};
console.log(Role.Reporter, Role.Developer, Role.Maintainer); // 0 1
// 如果指定了某枚举成员的值，则后续成员值递增
enum Role1 {
    Reporter = 20,
    Developer = 11,
    Maintainer
};
console.log(Role1.Reporter, Role1.Developer,  Role1.Maintainer); // 20 11 12

// 枚举在运行环境中被编译成了对象，而且除了正常的枚举成员外，还多了其他成员
// 我们既可以用枚举成员的名字来索引，也可以用枚举成员的值来索引 - 反向映射
console.log(Role1); // {11: "Developer" 12: "Maintainer" 20: "Reporter" Developer: 11 Maintainer: 12 Reporter: 20}

/**
 * 字符串枚举
 */
enum Message {
    Success = '恭喜，成功了',
    Fail = '抱歉，失败了'
}
// 字符串枚举不可以进行反相映射
console.log(Message); // {Fail: "抱歉，失败了" Success: "恭喜，成功了"}

/**
 * 异构枚举，数字枚举&字符串枚举混用【不建议使用】
 */
enum Answer {
    N,
    Y = 'Yes'
}

/**
 * 枚举成员的性质
 *
 * 枚举成员的分类：const member && computed member
 */
enum Char {
    // const member，常量枚举成员：
    // case1 没有初始值；case2 对已有枚举成员对引用；case3 常量表达式
    // 常量枚举成员，在编译时计算出结果，并以常量的形式出现在运行时环境
    a,
    b = Char.a,
    c = 1 + 3,
    // computed member，需要被计算的枚举成员
    // 非常量的表达式，在编译阶段不进行计算，被保留到运行阶段
    d = Math.random(),
    e = '123'.length,
    // computed member 后的枚举成员必须赋予初始值
    // f // X：枚举成员必须具有初始化表达式
}
// 枚举成员的值不支持修改
// Role.Developer = 22; // X: 无法分配到 "Developer" ，因为它是只读属性。

/**
 * 常量枚举，用 const 声明
 *
 * 特性：常量枚举，会在编译阶段被移除
 * 作用：当我们不需要一个对象，而需要对象值时，就可以使用常量枚举，可减少编译环境的代码
 */
const enum Month {
    Jan,
    Feb,
    Mar
}
let month = [Month.Jan, Month.Feb, Month.Mar];
// => 编译后，代码简介
// var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];

/**
 * 枚举类型
 *
 * 符合以下情况，则枚举和枚举成员都可以作为单独的类型存在
 */
// case1: 枚举成员没有初始值
enum E {a, b};
// case2: 所有枚举成员都是数字枚举
enum F {a=0, b=1};
// case1: 所有枚举成员都是字符串枚举
enum G {a='apple', b='banana'};

// 定义枚举类型
let e: E = 3;
let f: F = 3;
// 两种不同类型的枚举不可以进行比较
// e === f // X：此条件将始终返回“false”，因为类型“E”和“F”没有重叠

// 定义枚举成员类型
let e1: E.a;
let e2: E.b;
let e3: E.a;
// e1 === e2 X
e1 === e3; // true，可进行比较

// 定义字符串枚举类型，其取值只能是枚举成员的类型
let g1: G; // g1 取值可以是 G.a 或 G.b
let g2: G.a; // g2 取值仅可以是 G.a

/**
 * 作业用
 */
enum zuoyeRole {
    'role1' = 1,
    'role2',
    'role3',
    'role4',
    'role5'
};

export default zuoyeRole;
