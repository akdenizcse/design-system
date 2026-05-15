import React from 'react';

export function Field({ label, help, error, children, className = '' }) {
  const cls = 'field' + (error ? ' is-err' : '') + (className ? ' ' + className : '');
  return React.createElement(
    'label',
    { className: cls },
    React.createElement('span', { className: 'field__label' }, label),
    children,
    (error || help)
      ? React.createElement('span', { className: 'field__help' }, error || help)
      : null,
  );
}

export function Input(props)    { return React.createElement('input',    { className: 'input',           ...props }); }
export function Select(props)   { return React.createElement('select',   { className: 'input',           ...props }); }
export function Textarea(props) { return React.createElement('textarea', { className: 'input input--ta', rows: 3, ...props }); }
