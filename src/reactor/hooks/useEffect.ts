import { DependencyList } from '../shared';
import { HooksRegistry } from './registry';
import { isDependenciesChanged } from '../isDependenciesChanged';

export type UseEffectRegistryRecord = {
  type: 'useEffect'
  data: {
    dependencies?: DependencyList
    cancellationCallback?: EffectCleaningUpCallback
  }
}

export type EffectCallback = () => (void | EffectCleaningUpCallback)
export type EffectCleaningUpCallback = () => void

export function createUseEffectHook(registry: HooksRegistry) {
  return (callback: EffectCallback, dependencies?: DependencyList) => {
    registry.startHookRunning()
    const storedRecord = registry.getHookRecord()
    let record: UseEffectRegistryRecord

    if (storedRecord === undefined) {
      record = {
        type: 'useEffect',
        data: {
          dependencies,
          cancellationCallback: undefined,
        }
      }
      setTimeout(() => {
        record.data.cancellationCallback = callback() || undefined
      }, 0)
      registry.updateHookRecord(record)
      return
    } else {
      if (storedRecord.type === "useEffect") {
        if (isDependenciesChanged(storedRecord.data.dependencies, dependencies)) {
          setTimeout(() => {
            const cleanUp = storedRecord.data.cancellationCallback
            if (cleanUp) {
              cleanUp()
            }
            storedRecord.data.cancellationCallback = callback() || undefined
          }, 0)
        }
      } else {
        throw new Error(`Wrong hook's record's type`)
      }
    }
  }
}