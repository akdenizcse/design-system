import React from 'react';

/** Badge — tone: neutral | success | warn | danger | info. `dot` adds the leading status dot. */
export function Badge({ tone = 'neutral', dot = false, children, className = '' }) {
  const cls = `badge badge--${tone}` + (className ? ' ' + className : '');
  return React.createElement(
    'span',
    { className: cls },
    dot ? React.createElement('span', { className: 'badge__dot' }) : null,
    children,
  );
}
