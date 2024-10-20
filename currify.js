const currify = (func) => {
    return function curried(...args) {
        if (args.length < func.length) {
            return (...nextArgs) => {
                return curried(...args, ...nextArgs);
            };
        }
        return func(...args);
    };
};