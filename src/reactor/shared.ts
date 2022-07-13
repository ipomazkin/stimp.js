export type Dispatch<A> = (value: A) => void
export type DependencyList = ReadonlyArray<any>

export type UpdateTriggerCallback = () => void