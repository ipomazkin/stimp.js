import { DependencyList } from '../shared';
import { HooksRegistry } from './registry';
import { isDependenciesChanged } from '../isDependenciesChanged';

export type UseCallbackRegistryRecord<C = Function> = {
  type: 'callback',
  data: {
    dependencies?: DependencyList
    callback: C
  }
}

export function createUseCallbackHook(registry: HooksRegistry) {
  return <C extends (...args: any[]) => any>(callback: C, dependencies?: DependencyList) => {
    registry.startHookRunning()
    const storedRecord = registry.getHookRecord()
    let record: UseCallbackRegistryRecord<C>

    if (storedRecord === undefined) {
      record = {
        type: 'callback',
        data: {
          dependencies,
          callback: callback
        }
      }
      registry.updateHookRecord(record)
      return record.data.callback as C
    } else {
      if (storedRecord.type === "callback") {
        if (dependencies === undefined || isDependenciesChanged(storedRecord.data.dependencies, dependencies)) {
          storedRecord.data.callback = callback
        }
        return storedRecord.data.callback as C
      } else {
        throw new Error(`Wrong hook's record's type`)
      }
    }
  }
}