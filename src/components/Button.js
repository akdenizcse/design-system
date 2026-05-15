import React from 'react';

/**
 * Button — primary brand actions.
 * Variants: primary | secondary | ghost | accent.  Sizes: sm | md | lg.
 * Pass an `icon` slot (any node, e.g. a Lucide <Search/>) to render before the label.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon = null,
  type = 'button',
  className = '',
  ...rest
}) {
  const cls = `btn btn--${variant} btn--${size}` + (className ? ' ' + className : '');
  return React.createElement(
    'button',
    { type, className: cls, ...rest },
    icon ? React.createElement('span', { className: 'btn__icon', 'aria-hidden': 'true' }, icon) : null,
    React.createElement('span', null, children),
  );
}
