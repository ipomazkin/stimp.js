"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReactor = void 0;
function createReactor(handler) {
    const hooksRegistry = [];
    let hookIndex = -1;
    const hooks = {
        useState: (defaultState) => {
            hookIndex += 1;
            if (hooksRegistry.length < hookIndex + 1) {
                throw new Error('Wrong hook index');
            }
            if (hooksRegistry[hookIndex] === undefined) {
                hooksRegistry[hookIndex] = defaultState;
            }
            let currentState = hooksRegistry[hookIndex];
            return [currentState, (newValue) => {
                    if (hooksRegistry[hookIndex] === newValue) {
                        return;
                    }
                    hooksRegistry[hookIndex] = newValue;
                    runReaction();
                }];
        }
    };
    const runReaction = () => {
        hookIndex = -1;
        handler(hooks);
    };
    return () => {
        runReaction();
    };
}
exports.createReactor = createReactor;
