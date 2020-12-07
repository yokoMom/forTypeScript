/**
 * 对象类型接口
 */
// 假设我们要从后端获取一组数据，然后渲染到页面中
interface List {
    // 只读属性
    readonly id: number;
    name: string;
    // 可选属性
    age?: number;
    // 3字符串索引签名
    // 形式：在 [] 中定义字符串 x，其返回值类型是 any
    // 其含义：用任意的字符串去索引 List，可以得到任意的结果，以达到 List 支持多个属性的目的
    // [x: string]: any;
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log('your age', value.age);
        }
        // value.id++; // X: 无法分配到“id”，因为它是只读属性
    });
}
let result = {
    data: [
        {id: 1, name: 'A', sex: 'male', age: 10},
        {id: 2, name: 'B'},
    ]
}

// 增加约定之外的字段，ts 允许“鸭式变形法”，即只满足必要条件即可
// 1传入变量
render(result);

// 一、如果直接传入对象字面量，则 ts 会对额外的字段进行类型检查
// 绕过这种检查对方法：
// 1传入变量 2使用类型断言(明确的告诉编译器这个对象的类型就是Result，编译器则不会检查) 3使用字符串索引签名
render({
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B'},
    ]
} as Result); // 类型断言1

// 类型断言2，在 react 中易产生歧义，不建议使用
render(<Result>{
    data: [
        {id: 1, name: 'A', sex: 'male'},
        {id: 2, name: 'B'},
    ]
});