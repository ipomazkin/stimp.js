import { createUseStateHook } from './useState';

export type AllHooks = {
  useState: ReturnType<typeof createUseStateHook>
}