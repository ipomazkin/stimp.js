import { HooksRegistry } from './registry';

export type UseRefRegistryRecord = {
  type: 'ref',
  data: Ref<any>
}

export type Ref<T = undefined> = {
  current: T
}

export function createUseRefHook(registry: HooksRegistry) {
  return <T = undefined>(defaultValue?: T) => {
    registry.startHookRunning()
    const storedRecord = registry.getHookRecord()
    let record: UseRefRegistryRecord

    if (storedRecord === undefined) {
      record = {
        type: 'ref',
        data: Object.seal({
          current: defaultValue
        })
      }
      registry.updateHookRecord(record)
      return record.data as Ref<T>
    } else {
      if (storedRecord.type === "ref") {
        return storedRecord.data as Ref<T>
      } else {
        throw new Error(`Wrong hook's record's type`)
      }
    }
  }
}