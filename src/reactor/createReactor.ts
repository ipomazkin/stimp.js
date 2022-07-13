import { AllHooks } from './hooks';
import { HooksRegistry } from './hooks/registry';
import { createUseStateHook } from './hooks/useState';
import { createUseEffectHook } from './hooks/useEffect';
import { createUseRefHook } from './hooks/useRef';
import { createUseMemoHook } from './hooks/useMemo';

export type ReactorInit = () => void

export interface UpdateFunction {
  (hooks: AllHooks): void
}

export function createReactor(updater: UpdateFunction): ReactorInit {
  const registry = new HooksRegistry()

  const hooks: AllHooks = {
    useState: createUseStateHook(registry, () => {
      runUpdate()
    }),
    useEffect: createUseEffectHook(registry),
    useRef: createUseRefHook(registry),
    useMemo: createUseMemoHook(registry)
  }

  const runUpdate = () => {
    registry.resetIndex()
    updater(hooks)
  }

  return () => {
    runUpdate()
  }
}