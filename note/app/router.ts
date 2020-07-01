import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/home/name', controller.home.name);
  router.get('/user/list', controller.user.list);
};
