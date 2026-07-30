/**
 * Returns the site origin that matches the current request host.
 * - On the server (SSR) there is no `window`, so we return an empty string;
 *   the server injects a correct <link rel="canonical"> via entry.ts anyway.
 * - On the client we use the real origin so og:url / JSON-LD urls are correct.
 */
export function getSiteUrl(): string {
  if (typeof window === 'undefined') return '';
  return window.location.origin;
}
