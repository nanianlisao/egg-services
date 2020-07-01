import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/User.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('getList', async () => {
    const result = await ctx.service.user.getList('root');
    assert(result.length === 2);
  });
});
