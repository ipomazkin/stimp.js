import type { State } from './state';

export interface Subscribe<S extends State, C extends Function = () => void> {
  (callback: C, dependencies?: any[]): void | Unsubscribe
}

export interface Unsubscribe {
  (): void
}

export interface ReactorHandler<S extends State = State> {
  (state: S, subscribe: Subscribe<S>): void
}

export interface Reactor<S extends State = State> {
  (state: S): void
}

export function createReactor<S extends State = State>(handler: ReactorHandler<S>): Reactor<S> {
  let indexCounter = -1
  const indexedStorage: Array<any> = []

  const subscribeFunction: Subscribe<S> = (callback, dependencies) => {
    indexCounter += 1
  }

  return (state) => {
    indexCounter = -1

    // if state changed
    handler(state, subscribeFunction)
  }
}

const react = createReactor((state = { test: 1 }, subscribe) => {
  subscribe(() => {
    console.log('test changed')

    return () => {
      console.log('cancel subscription')
    }
  }, [state.test])
})