import { HooksRegistry } from './registry';
import { Dispatch, UpdateTriggerCallback } from '../shared';

export type UseStateRegistryRecord = {
  type: 'state'
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
        type: 'state',
        data: initialState instanceof Function ? initialState() : initialState
      }
      registry.updateHookRecord(record)
    } else {
      if (storedRecord.type === "state") {
        record = storedRecord
      } else {
        throw new Error(`Wrong hook's record's type`)
      }
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
