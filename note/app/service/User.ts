import { Service } from 'egg';

/**
 * User Service
 */
export default class User extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async getList(name: string) {
    const user = await this.app.mysql.select('user', { where: { User: name } });
    return user;
  }
}
