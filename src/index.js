// src/index.js — public API for @akdeniz-uni/design-system
// Tokens are shipped as a CSS file: import "@akdeniz-uni/design-system/tokens.css"
// Fonts and the official seal live under /fonts and /assets in the package.

export * from './components/index.js';

// Brand metadata — useful for theming, e.g. hard-coded swatches in canvas/graphics.
export const brand = Object.freeze({
  name: 'Akdeniz Üniversitesi',
  founded: 1982,
  city: 'Antalya',
  colors: Object.freeze({
    blue800:  '#1D366A',  // identity / wordmark
    blue600:  '#0063AA',  // primary action
    orange600:'#F47524',  // accent
    bg:       '#F7F8FC',
  }),
  fontFamily: Object.freeze({
    text:    "'Gotham Narrow', 'Inter Tight', system-ui, sans-serif",
    display: "'Gotham X Narrow', 'Gotham Narrow', 'Inter Tight', system-ui, sans-serif",
  }),
});

export { default as version } from './version.js';
