import { Context, Next } from 'hono';
import { UAParser } from 'ua-parser-js';
import { UserAgent } from './interfaces';

export default function useragent() {
  return ((c: Context, next: Next) => {
    const agent = c.req.header('user-agent');
    const parser = new UAParser(agent);
    c.useragent = parser.getResult() as UserAgent;
    return next();
  });
};
