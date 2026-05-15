import React from 'react';

/** Alert — tone: success | info | warn | danger. Pass an `icon` node (e.g. a Lucide CheckCircle). */
export function Alert({ tone = 'info', title, children, icon = null, className = '' }) {
  const cls = `alert alert--${tone}` + (className ? ' ' + className : '');
  return React.createElement(
    'div',
    { className: cls, role: 'status' },
    icon ? React.createElement('span', { className: 'alert__icon', 'aria-hidden': 'true' }, icon) : null,
    React.createElement(
      'div',
      null,
      title ? React.createElement('div', { className: 'alert__t' }, title) : null,
      React.createElement('div', { className: 'alert__m' }, children),
    ),
  );
}
