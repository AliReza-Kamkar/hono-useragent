import 'hono';
import { UserAgent } from '../interfaces';

declare module 'hono' {
  class Context {
    useragent: UserAgent;
  }
}
