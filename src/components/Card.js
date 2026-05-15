import React from 'react';

/** Card — tone: light | strong (deep-blue inverted card). */
export function Card({ title, eyebrow, children, action, tone = 'light', className = '' }) {
  const cls = `card card--${tone}` + (className ? ' ' + className : '');
  return React.createElement(
    'section',
    { className: cls },
    eyebrow ? React.createElement('div', { className: 'card__eyebrow' }, eyebrow) : null,
    title   ? React.createElement('h3',  { className: 'card__title'   }, title)   : null,
    React.createElement('div', { className: 'card__body' }, children),
    action  ? React.createElement('div', { className: 'card__action'  }, action)  : null,
  );
}
