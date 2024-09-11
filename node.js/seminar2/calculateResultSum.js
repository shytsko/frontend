const NP = require('number-precision');

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchse) => NP.plus(acc, purchse), 0);
    total = NP.times(total, discount);
    return total;
}

module.exports = { calculateResultSum };
