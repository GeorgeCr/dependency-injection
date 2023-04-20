import 'dotenv/config'

import { Container, DepsCollection } from './container'

/*
  REMEMBER: Controller -> Service -> Repository
  make sure to export the instance of the container here.
*/

// Don't touch the repository!

const container = new Container()
export class UserRepository {
  public getUsers() {
    return []
  }
}

export class UserService {
  constructor(
    private readonly _userRepository: DepsCollection = container.get(
      UserRepository.name
    )
  ) {}

  public getUsers(): string[] {
    return this._userRepository.getUsers()
  }
}

export class UserController {
  constructor(
    private readonly _userService: DepsCollection = container.get(
      UserService.name
    )
  ) {}
  public index() {
    return this._userService.getUsers()
  }
}

container.bind(UserRepository.name, UserRepository)
container.bind(UserService.name, UserService)
