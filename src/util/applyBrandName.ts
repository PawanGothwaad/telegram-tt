// Central place that rebrands any outgoing display text from "Telegram" to "Indogram".
// NOTE: This only touches human-readable copy. It intentionally skips real domains
// (telegram.org, t.me, telegram.dog/.me) so that links, redirects and the MTProto
// connection to the real Telegram network keep working exactly as before.
const BRAND_WORD_PATTERN = /\bTelegram\b(?!\.(?:org|me|dog|ph))/g;

export function applyBrandName<T extends string | undefined>(text: T): T {
  if (!text || !text.includes('Telegram')) {
    return text;
  }

  return text.replace(BRAND_WORD_PATTERN, 'Indogram') as T;
}
