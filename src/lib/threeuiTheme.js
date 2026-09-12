/**
 * ThreeUI's shader components take a numeric `hue` (0–360°, HSL-style) and a
 * `mode: 'dark' | 'light'` prop — they don't read CSS custom properties.
 * We already store each theme's accent as `oklch(L C H)` in index.css, and
 * OKLCH/HSL hue angles land in the same rough colour family (red ~0-30,
 * amber ~40-70, green ~140-160, etc.), so reusing our existing H value here
 * is a reasonable one-line approximation rather than a real conversion.
 *
 * Keep in sync with the --accent values in src/index.css.
 */
const THEME_HUES = {
  paper: 40,
  onyx: 68,
  editorial: 22,
  aurora: 155,
}

const THEME_MODES = {
  paper: 'light',
  onyx: 'dark',
  editorial: 'light',
  aurora: 'dark',
}

export function threeuiHue(theme) {
  return THEME_HUES[theme] ?? THEME_HUES.paper
}

export function threeuiMode(theme) {
  return THEME_MODES[theme] ?? 'light'
}
