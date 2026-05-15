/**
 * SideNav.jsx — collapsible left rail with grouped sections.
 */
function SideNav({ active = 'overview', onNav }) {
  const groups = [
    { title: 'Genel', items: [
      { id: 'overview',  label: 'Genel bakış',     icon: 'home' },
      { id: 'calendar',  label: 'Takvim',          icon: 'calendar' },
      { id: 'inbox',     label: 'Gelen kutusu',    icon: 'mail', count: 3 },
    ]},
    { title: 'Akademik', items: [
      { id: 'courses',   label: 'Derslerim',       icon: 'book-open' },
      { id: 'grades',    label: 'Notlarım',        icon: 'graduation-cap' },
      { id: 'transcript',label: 'Transkript',      icon: 'file-text' },
    ]},
    { title: 'İşlemler', items: [
      { id: 'requests',  label: 'Talepler',        icon: 'upload' },
      { id: 'finance',   label: 'Mali işler',      icon: 'credit-card' },
      { id: 'settings',  label: 'Ayarlar',         icon: 'settings' },
    ]},
  ];
  return (
    <aside className="sn">
      {groups.map(g => (
        <div key={g.title} className="sn__group">
          <div className="sn__title">{g.title}</div>
          {g.items.map(it => (
            <button
              key={it.id}
              className={'sn__item' + (active === it.id ? ' is-active' : '')}
              onClick={() => onNav?.(it.id)}>
              <i data-lucide={it.icon}></i>
              <span>{it.label}</span>
              {it.count ? <span className="sn__count">{it.count}</span> : null}
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
}
window.SideNav = SideNav;
