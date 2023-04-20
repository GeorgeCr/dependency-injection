import { UserRepository, UserService } from './bootstrap'

interface Constructable<T> {
  new (...args: any[]): T
}
export type DepsCollection = UserRepository | UserService

export class Container {
  private deps = new Map<string, DepsCollection>()

  get(dependencyName: string): DepsCollection {
    const dep = this.deps.get(dependencyName)
    if (!dep) {
      throw new Error('No dependency found, please add it')
    }
    return dep
  }

  bind(dependencyName: string, Dependency: Constructable<DepsCollection>) {
    this.deps.set(dependencyName, new Dependency())
  }
}
