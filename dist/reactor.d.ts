import type { State } from './state';
export interface Subscribe<S extends State, C extends Function = () => void> {
    (callback: C, dependencies?: any[]): void | Unsubscribe;
}
export interface Unsubscribe {
    (): void;
}
export interface ReactorHandler<S extends State = State> {
    (state: S, subscribe: Subscribe<S>): void;
}
export interface Reactor<S extends State = State> {
    (state: S): void;
}
export declare function createReactor<S extends State = State>(handler: ReactorHandler<S>): Reactor<S>;
