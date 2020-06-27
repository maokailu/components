import * as React from "react";

// 基础类型
let isDone:boolean = false;
let docLiteral:number = 6;
let name:string = 'bob';

let list:number[] = [1,2,3];
let list1:Array<number>=[1,2,3]; // Array<元素类型>

let x: [string, number] = ['hello', 10];
enum Color {Red = 1, Green, Blue};

let notSure: any = 4;
let unusable: void = undefined;
let u: undefined = undefined;
let n: null = null;

// 接口：作为描述，只关注外形不说实现
export interface HelloProps {
    compiler: string;
    framework: string;
    color?: string;
    readonly width: number;
}

interface SearchFunc {
    (source: string, subString: string):boolean;
}

let mySearch: SearchFunc;
mySearch = function(source:string, subString: string){
    let result = source.search(subString);
    return result > 1;
}

// 类类型：与Java一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// 因此，我们需要一种方法使返回值的类型与传入参数的类型是相同的。 这里，我们使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值。
function identity<T>(arg: T): T {
    return arg;
}


// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}