import { createUseStateHook } from './useState';
import { createUseEffectHook } from './useEffect';
import { createUseRefHook } from './useRef';
import { createUseMemoHook } from './useMemo';

export type AllHooks = {
  useState: ReturnType<typeof createUseStateHook>
  useEffect: ReturnType<typeof createUseEffectHook>
  useRef: ReturnType<typeof createUseRefHook>
  useMemo: ReturnType<typeof createUseMemoHook>
}