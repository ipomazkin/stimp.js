import { DependencyList } from '../shared';
import { HooksRegistry } from './registry';
import { isDependenciesChanged } from '../isDependenciesChanged';

export type UseMemoRegistryRecord = {
  type: 'memo',
  data: {
    dependencies?: DependencyList
    memorised: any
  }
}

export type MemoCallback<T = any> = () => T

export function createUseMemoHook(registry: HooksRegistry) {
  return <T = any>(callback: MemoCallback<T>, dependencies?: DependencyList) => {
    registry.startHookRunning()
    const storedRecord = registry.getHookRecord()
    let record: UseMemoRegistryRecord

    if (storedRecord === undefined) {
      record = {
        type: 'memo',
        data: {
          dependencies,
          memorised: callback(),
        }
      }
      registry.updateHookRecord(record)
      return record.data.memorised as T
    } else {
      if (storedRecord.type === "memo") {
        if (dependencies === undefined || isDependenciesChanged(storedRecord.data.dependencies, dependencies)) {
          storedRecord.data.memorised = callback()
        }
        return storedRecord.data.memorised as T
      } else {
        throw new Error(`Wrong hook's record's type`)
      }
    }
  }
}