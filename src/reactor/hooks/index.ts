import { createUseStateHook } from './useState';
import { createUseEffectHook } from './useEffect';
import { createUseRefHook } from './useRef';
import { createUseMemoHook } from './useMemo';
import { createUseCallbackHook } from './useCallback';

export type AllHooks = {
  useState: ReturnType<typeof createUseStateHook>
  useEffect: ReturnType<typeof createUseEffectHook>
  useRef: ReturnType<typeof createUseRefHook>
  useMemo: ReturnType<typeof createUseMemoHook>
  useCallback: ReturnType<typeof createUseCallbackHook>
}