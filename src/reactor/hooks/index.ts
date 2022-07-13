import { createUseStateHook } from './useState';
import { createUseEffectHook } from './useEffect';

export type AllHooks = {
  useState: ReturnType<typeof createUseStateHook>
  useEffect: ReturnType<typeof createUseEffectHook>
}