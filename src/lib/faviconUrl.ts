/** Public favicon proxy; same pattern as Google uses for search result site icons. */
export function faviconUrl(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`;
}
