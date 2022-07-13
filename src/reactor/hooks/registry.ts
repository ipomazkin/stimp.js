import { UseStateRegistryRecord } from './useState';

export type HooksRegistryRecord = UseStateRegistryRecord
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