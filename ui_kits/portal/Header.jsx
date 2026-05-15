/**
 * Header.jsx — Akdeniz portal sticky top header.
 * Logo lockup · main nav · search · profile chip.
 */
function PortalHeader({ active = 'home', onNav }) {
  const items = [
    { id: 'home',     label: 'Anasayfa' },
    { id: 'courses',  label: 'Dersler' },
    { id: 'records',  label: 'Akademik kayıt' },
    { id: 'finance',  label: 'Mali işler' },
    { id: 'docs',     label: 'Belgeler' },
  ];
  return (
    <header className="ph">
      <div className="ph__brand">
        <img src="../../assets/logo.png" width="36" height="36" alt="Akdeniz Üniversitesi" style={{ display: 'block' }} />
        <div className="ph__name">
          <div className="ph__name-line1">AKDENİZ</div>
          <div className="ph__name-line2">ÜNİVERSİTESİ · PORTAL</div>
        </div>
      </div>
      <nav className="ph__nav">
        {items.map(it => (
          <button
            key={it.id}
            className={'ph__navlink' + (active === it.id ? ' is-active' : '')}
            onClick={() => onNav?.(it.id)}>
            {it.label}
          </button>
        ))}
      </nav>
      <div className="ph__right">
        <div className="ph__search">
          <i data-lucide="search"></i>
          <input placeholder="Ara — ders, belge, kişi" />
        </div>
        <button className="ph__icon" title="Bildirimler"><i data-lucide="bell"></i></button>
        <div className="ph__avatar">MD</div>
      </div>
    </header>
  );
}
window.PortalHeader = PortalHeader;
