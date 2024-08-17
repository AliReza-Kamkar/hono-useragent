import 'hono';
import { UserAgent } from '../interfaces';

declare module 'hono' {
  interface Context {
    useragent: UserAgent;
  }
}
