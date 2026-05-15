/**
 * Screens.jsx — full screens stitched from atoms.
 *  - Login
 *  - Dashboard (overview)
 *  - Courses (list + filters)
 *  - Transcript request (form flow)
 */

function LoginScreen({ onLogin }) {
  const [u, setU] = React.useState('');
  const [p, setP] = React.useState('');
  return (
    <main className="login">
      <div className="login__panel">
        <div className="login__brand">
          <img src="../../assets/logo.png" width="56" height="56" alt="Akdeniz Üniversitesi" style={{ display: 'block' }} />
          <div>
            <div className="login__name">AKDENİZ</div>
            <div className="login__sub">ÜNİVERSİTESİ · PORTAL</div>
          </div>
        </div>
        <h1 className="login__h">Hoş geldiniz</h1>
        <p className="login__p">Akademik bilgi sistemine erişmek için kullanıcı bilgilerinizi girin.</p>
        <form className="login__form" onSubmit={(e) => { e.preventDefault(); onLogin?.({ u, p }); }}>
          <Field label="Kullanıcı adı"><Input value={u} onChange={(e) => setU(e.target.value)} placeholder="20240000" /></Field>
          <Field label="Şifre"><Input type="password" value={p} onChange={(e) => setP(e.target.value)} placeholder="••••••••" /></Field>
          <div className="login__row">
            <label className="check"><input type="checkbox" defaultChecked /><span>Beni hatırla</span></label>
            <a href="#" className="link">Şifremi unuttum</a>
          </div>
          <Button variant="primary" size="lg">Giriş yap</Button>
        </form>
        <div className="login__alt">
          <span>veya</span>
          <Button variant="secondary" icon="shield">e-Devlet ile giriş</Button>
        </div>
      </div>
      <aside className="login__aside">
        <div className="login__quote">
          <div className="eyebrow">2026–2027</div>
          <div className="login__big">Akdeniz'in<br/>Üniversitesi.</div>
          <div className="login__small">24 fakülte · 65.000+ öğrenci · 1982'den beri Antalya'da.</div>
        </div>
      </aside>
    </main>
  );
}

function DashboardScreen() {
  return (
    <div className="page">
      <div className="page__hd">
        <div>
          <div className="eyebrow">Genel bakış</div>
          <h1 className="h1">Merhaba, Mehmet</h1>
        </div>
        <div className="page__hd-actions">
          <Button variant="secondary" icon="download">Transkript indir</Button>
          <Button variant="primary" icon="plus">Yeni talep</Button>
        </div>
      </div>

      <div className="grid grid--3">
        <Card eyebrow="Bu dönem" title="14 ders / 18 kredi" tone="strong"
          action={<a className="link link--on-strong" href="#">Ders programını gör →</a>}>
          Güz 2026 dönemi kayıtlarınız tamamlandı.
        </Card>
        <Card eyebrow="GPA" title="3.42 / 4.00"
          action={<a className="link" href="#">Notlarım →</a>}>
          Geçen dönem 3.31'den yükseldi.
        </Card>
        <Card eyebrow="Mali durum" title="Bakiye sıfır"
          action={<a className="link" href="#">Ödeme geçmişi →</a>}>
          Tüm güz dönemi ücretleri ödenmiştir.
        </Card>
      </div>

      <div className="grid grid--2">
        <Card title="Yaklaşan teslimler">
          <ul className="due">
            <li><div><div className="due__t">CS 201 — Lab 4</div><div className="due__s">Veri Yapıları ve Algoritmalar</div></div><Badge tone="warn" dot>2 gün</Badge></li>
            <li><div><div className="due__t">EE 314 — Ara sınav</div><div className="due__s">Mikroişlemciler</div></div><Badge tone="info" dot>5 gün</Badge></li>
            <li><div><div className="due__t">MT 240 — Ödev 6</div><div className="due__s">Diferansiyel Denklemler</div></div><Badge tone="neutral">9 gün</Badge></li>
          </ul>
        </Card>

        <Card title="Duyurular">
          <ul className="news">
            <li><div className="news__t">Akademik takvim güncellendi</div><div className="news__s">12 Mayıs · Öğrenci İşleri Daire Başkanlığı</div></li>
            <li><div className="news__t">Burs başvuruları açıldı</div><div className="news__s">10 Mayıs · Sağlık, Kültür ve Spor</div></li>
            <li><div className="news__t">Kütüphane çalışma saatleri</div><div className="news__s">08 Mayıs · Kütüphane Daire Başkanlığı</div></li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

function CoursesScreen() {
  const [tab, setTab] = React.useState('current');
  const rows = [
    { code: 'CS 201', title: 'Veri Yapıları ve Algoritmalar', tutor: 'Doç. Dr. A. Yılmaz', ects: 6, slot: 'Sa 09:00', status: ['success', 'Aktif'] },
    { code: 'EE 314', title: 'Mikroişlemciler',                 tutor: 'Prof. Dr. B. Korkmaz', ects: 4, slot: 'Pe 13:30', status: ['warn', 'Beklemede'] },
    { code: 'MT 240', title: 'Diferansiyel Denklemler',         tutor: 'Dr. C. Öztürk',         ects: 5, slot: 'Ça 10:00', status: ['neutral', 'Kayıtlı'] },
    { code: 'TR 101', title: 'Türk Dili I',                      tutor: 'Öğr. Gör. D. Kaya',     ects: 2, slot: 'Pa 11:00', status: ['success', 'Aktif'] },
    { code: 'PHL 110',title: 'Felsefeye Giriş',                  tutor: 'Doç. Dr. E. Aydın',     ects: 3, slot: 'Cu 14:00', status: ['info',    'Yeni']    },
  ];
  return (
    <div className="page">
      <div className="page__hd">
        <div>
          <div className="eyebrow">Akademik</div>
          <h1 className="h1">Derslerim</h1>
        </div>
        <Button variant="primary" icon="plus">Ders ekle</Button>
      </div>
      <Tabs value={tab} onChange={setTab} tabs={[
        { id: 'current', label: 'Güz 2026' },
        { id: 'past',    label: 'Geçmiş dönemler' },
        { id: 'all',     label: 'Tüm dersler' },
      ]} />
      <div className="card card--light" style={{ padding: 0, marginTop: 16 }}>
        <div className="rows">
          {rows.map((r) => (
            <div className="row" key={r.code}>
              <div className="row__code">{r.code}</div>
              <div className="row__main"><div className="row__t">{r.title}</div><div className="row__s">{r.tutor} · {r.ects} ECTS</div></div>
              <div className="row__slot">{r.slot}</div>
              <Badge tone={r.status[0]} dot>{r.status[1]}</Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TranscriptScreen({ onSubmit }) {
  const [done, setDone] = React.useState(false);
  return (
    <div className="page page--narrow">
      <div className="page__hd">
        <div>
          <div className="eyebrow">İşlemler · Belge talebi</div>
          <h1 className="h1">Resmi transkript talebi</h1>
        </div>
      </div>
      {done ? (
        <Alert tone="success" title="Talebiniz alındı">
          Başvuru numaranız <b>BSV-2026-04812</b>. Transkriptiniz 2 iş günü içinde e-postanıza iletilecektir.
        </Alert>
      ) : (
        <Card title="Talep bilgileri">
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); onSubmit?.(); }} className="form">
            <Field label="Belge dili">
              <Select defaultValue="tr">
                <option value="tr">Türkçe</option>
                <option value="en">İngilizce</option>
              </Select>
            </Field>
            <Field label="Teslim yöntemi">
              <Select defaultValue="email">
                <option value="email">E-posta (PDF, ücretsiz)</option>
                <option value="pickup">Kampüsten elden teslim</option>
                <option value="post">Posta ile</option>
              </Select>
            </Field>
            <Field label="Açıklama" help="Talebinizi kısaca açıklayın (opsiyonel).">
              <Textarea placeholder="Örn. Yüksek lisans başvurusu için." />
            </Field>
            <div className="form__actions">
              <Button variant="ghost">Vazgeç</Button>
              <Button variant="primary" icon="check">Talebi gönder</Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
}

Object.assign(window, { LoginScreen, DashboardScreen, CoursesScreen, TranscriptScreen });
