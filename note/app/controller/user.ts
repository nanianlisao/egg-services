import { Controller } from 'egg';

export default class UserController extends Controller {
  public async list() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.getList('root');
  }
}
