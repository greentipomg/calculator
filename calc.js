const OPERATIONS = {
    sum: '+',
    substract: '-',
    multiply: '*',
    division: '/'
}

function calculator({ a, b, OPERATIONS }) {
    let result = null;

    switch(OPERATIONS) {
        case OPERATIONS.sum:
            result = sum(a, b)
            break;

        case OPERATIONS.substract:
            result = substract(a, b)
            break;

        case OPERATIONS.multiply:
            result = multiply(a, b)
            break;  

        case OPERATIONS.division:
            result = division(a, b)
            break;

        default:
            break;    
    }

    return result;
}