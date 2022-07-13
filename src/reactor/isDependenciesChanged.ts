import { DependencyList } from './shared';

export function isDependenciesChanged(prevDeps?: DependencyList, newDeps?: DependencyList): boolean {
  if (prevDeps === undefined && newDeps === undefined) {
    return false
  }

  if (prevDeps !== undefined && newDeps === undefined) {
    return true
  }

  if (newDeps !== undefined && prevDeps === undefined) {
    return true
  }

  if (prevDeps && newDeps) {
    if (prevDeps.length !== newDeps.length) {
      return true
    }

    for (let index = 0; index < (newDeps?.length || 0); index += 1) {
      if (newDeps[index] !== prevDeps[index]) {
        return true
      }
    }
  }

  return false
}