let MultiplyArg = require('./calcMultiple')

class AddArg{
    num;
    constructor() {}

    calculate(num){
        let res = Math.PI + num
        console.log('Add', res);
        if(num <= 300) {
            MultiplyArg(num)
        }
    }
}

let add = new AddArg()

module.exports = add.calculate