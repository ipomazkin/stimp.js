import { UseStateRegistryRecord } from './useState';
import { UseEffectRegistryRecord } from './useEffect';
import { UseRefRegistryRecord } from './useRef';
import { UseMemoRegistryRecord } from './useMemo';

export type HooksRegistryRecord = UseStateRegistryRecord | UseEffectRegistryRecord | UseRefRegistryRecord | UseMemoRegistryRecord
export type HooksRegistryRecords = HooksRegistryRecord[]

export class HooksRegistry {
  constructor(
    public index: number = -1,
    public records: HooksRegistryRecords = []
  ) {}

  resetIndex() {
    this.index = -1
  }

  startHookRunning() {
    this.index += 1
  }

  getHookRecord() {
    const recordExist = this.records.length >= this.index + 1
    if (!recordExist) {
      return undefined
    }
    return this.records[this.index]
  }

  updateHookRecord(record: HooksRegistryRecord) {
    this.records[this.index] = record
  }
}