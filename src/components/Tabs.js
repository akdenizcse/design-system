import React from 'react';

/**
 * Tabs — controlled. `tabs` is `[{ id, label }]`.
 *   <Tabs tabs={items} value={tab} onChange={setTab} />
 */
export function Tabs({ tabs, value, onChange, className = '' }) {
  const cls = 'tabs' + (className ? ' ' + className : '');
  return React.createElement(
    'div',
    { className: cls, role: 'tablist' },
    tabs.map(t =>
      React.createElement(
        'button',
        {
          key: t.id,
          type: 'button',
          role: 'tab',
          'aria-selected': value === t.id,
          className: 'tabs__tab' + (value === t.id ? ' is-active' : ''),
          onClick: () => onChange?.(t.id),
        },
        t.label,
      ),
    ),
  );
}
