import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async name() {
    const { ctx } = this;
    const id = ctx.query.id;
    ctx.body = `id参数为${id}`;
  }
}
