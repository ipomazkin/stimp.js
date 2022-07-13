import { HooksRegistry } from './registry';
import { Dispatch, UpdateTriggerCallback } from '../shared';

export type UseStateRegistryRecord = {
  type: 'useState'
  data: any
}

export type SetStateAction<S> = S | ((prevState: S) => S);

export function createUseStateHook(registry: HooksRegistry, triggerUpdate: UpdateTriggerCallback) {
  return <S = undefined>(initialState: S | (() => S)):
    [S, Dispatch<SetStateAction<S>>] => {
    registry.startHookRunning()
    const storedRecord = registry.getHookRecord()
    let record: UseStateRegistryRecord

    if (storedRecord === undefined) {
      record = {
        type: 'useState',
        data: initialState instanceof Function ? initialState() : initialState
      }
      registry.updateHookRecord(record)
    } else {
      record = storedRecord
    }

    const setter = (action: SetStateAction<S>) => {
      const newState = action instanceof Function ? action(record.data) : action
      const isStateChanged = newState !== record.data
      if (isStateChanged) {
        record.data = newState
        triggerUpdate()
      }
    }

    return [record.data, setter]
  }
}
