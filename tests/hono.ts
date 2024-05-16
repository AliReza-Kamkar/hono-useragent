import { describe, expect, it } from 'vitest';
import { Hono } from 'hono';
import { useragent } from '../src';

describe('Check middleware', () => {
  const app = new Hono();
  app.use(useragent());

  app.get('/', (c) => c.json(c.useragent));

  it('Should return body correct', async () => {
    const req = new Request('http://localhost/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
      }
    });
    const res = await app.request(req);
    const body = await res.json();
    expect(res.status).toBe(200);
    expect(body?.browser?.name).toBe('Chrome');
    expect(body?.browser?.version).toBe('124.0.0.0');
    expect(body?.browser?.major).toBe('124');
    expect(body?.cpu?.architecture).toBe('amd64');
    expect(body?.engine?.name).toBe('Blink');
    expect(body?.os?.name).toBe('Linux');
    expect(body?.os?.version).toBe('x86_64');
  });

});
