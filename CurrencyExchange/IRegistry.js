// Registry interface
class IRegistry {
    addCurrency(name, code, symbol) {
        throw new Error("Method not implemented");
    }
    getCurrency(code) {
        throw new Error("Method not implemented");
    }
}

module.exports = IRegistry;
