import { createUseStateHook } from './useState';
import { createUseEffectHook } from './useEffect';
import { createUseRefHook } from './useRef';

export type AllHooks = {
  useState: ReturnType<typeof createUseStateHook>
  useEffect: ReturnType<typeof createUseEffectHook>
  useRef: ReturnType<typeof createUseRefHook>
}