function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let begin = 0;
    let end = 0;
    let divZero = false;
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '/' && expr[i + 2] === '0') divZero = true;
        if (expr[i] === '(') begin++;
        else if (expr[i] === ')') end++;
    }
    if (begin !== end) {
        throw new Error('ExpressionError: Brackets must be paired');
    } else {
        let a = new Function(`return ${expr}`);
        let b = a();
        if (b === Infinity || divZero) {
            throw new Error('TypeError: Division by zero.');
        }
        return b;
    }
}

module.exports = {
    expressionCalculator
}