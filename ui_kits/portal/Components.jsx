/**
 * Components.jsx — small atoms used throughout the kit.
 */
function Button({ children, variant = 'primary', size = 'md', icon, onClick, type = 'button' }) {
  const cls = `btn btn--${variant} btn--${size}`;
  return (
    <button type={type} className={cls} onClick={onClick}>
      {icon ? <i data-lucide={icon}></i> : null}
      <span>{children}</span>
    </button>
  );
}

function Field({ label, help, error, children }) {
  return (
    <label className={'field' + (error ? ' is-err' : '')}>
      <span className="field__label">{label}</span>
      {children}
      {(error || help) ? <span className="field__help">{error || help}</span> : null}
    </label>
  );
}

function Input(props) { return <input className="input" {...props} />; }
function Select({ children, ...props }) { return <select className="input" {...props}>{children}</select>; }
function Textarea(props) { return <textarea className="input input--ta" rows={3} {...props} />; }

function Badge({ tone = 'neutral', dot, children }) {
  return (
    <span className={`badge badge--${tone}`}>
      {dot ? <span className="badge__dot" /> : null}
      {children}
    </span>
  );
}

function Card({ title, eyebrow, children, action, tone = 'light' }) {
  return (
    <section className={`card card--${tone}`}>
      {eyebrow ? <div className="card__eyebrow">{eyebrow}</div> : null}
      {title ? <h3 className="card__title">{title}</h3> : null}
      <div className="card__body">{children}</div>
      {action ? <div className="card__action">{action}</div> : null}
    </section>
  );
}

function Alert({ tone = 'info', title, children }) {
  const ic = { success: 'check-circle', info: 'info', warn: 'alert-circle', danger: 'x-circle' }[tone] || 'info';
  return (
    <div className={`alert alert--${tone}`}>
      <i data-lucide={ic}></i>
      <div>
        {title ? <div className="alert__t">{title}</div> : null}
        <div className="alert__m">{children}</div>
      </div>
    </div>
  );
}

function Tabs({ tabs, value, onChange }) {
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button
          key={t.id}
          className={'tabs__tab' + (value === t.id ? ' is-active' : '')}
          onClick={() => onChange?.(t.id)}>
          {t.label}
        </button>
      ))}
    </div>
  );
}

Object.assign(window, { Button, Field, Input, Select, Textarea, Badge, Card, Alert, Tabs });
