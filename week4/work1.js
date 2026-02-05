function operation(type ,a ,b) {
    if (type === "add" ) {
        return a + b
    } else if (type === "substract") {
        return a - b
    } else if (type === "multipy") {
        return a * b
    } else if (type === "divide") {
        return a / b
    } else {
        return "Invalid operation type"
    }
}
module.exports = operation;