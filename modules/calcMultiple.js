
class MultiplyArg{
    num;
    constructor() {}

    calculate(num){
        let res = Math.PI * num
        console.log('Multiply', res);
    }
}

let mul = new MultiplyArg()

module.exports = mul.calculate