import 'egg';

declare module 'egg' {
  interface mysql {
    get(tableName: String, find: {}): Promise<Any>;

    query(sql: String, values: Any[]): Promise<Any>;

    select(sql: String, values: {}): Promise<Any>;
  }
  interface Application {
    mysql: mysql;
  }
}
