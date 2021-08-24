function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let begin = 0;
    let end = 0;
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') begin++;
        else if (expr[i] === ')') end++;
    }
    if (begin !== end) {
        throw new Error('ExpressionError: Brackets must be paired');
    } else {
        let a = new Function(`return ${expr}`);
        let b = a();
        if (b === Infinity) {
            throw new Error('TypeError: Division by zero.');
        }
        return b;
    }
}

module.exports = {
    expressionCalculator
}