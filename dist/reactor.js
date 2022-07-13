"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReactor = void 0;
function createReactor(handler) {
    let indexCounter = -1;
    const indexedStorage = [];
    const subscribeFunction = (callback, dependencies) => {
        indexCounter += 1;
    };
    return (state) => {
        indexCounter = -1;
        // if state changed
        handler(state, subscribeFunction);
    };
}
exports.createReactor = createReactor;
const react = createReactor((state = { test: 1 }, subscribe) => {
    subscribe(() => {
        console.log('test changed');
        return () => {
            console.log('cancel subscription');
        };
    }, [state.test]);
});
