export default function App() {
  return (
    <div style={{
      background: 'linear-gradient(to bottom right, #0d0d2b, #301860)',
      minHeight: '100vh',
      padding: '2rem',
      color: 'white',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>ون بلس موبايل</h1>
      <p>اختر شريحتك:</p>
      <ul>
        <li>✅ شريحة 10 أشهر – 50,000 دينار</li>
        <li>✅ شريحة 12 شهر – 55,000 دينار</li>
        <li>✅ شريحة 14 شهر – 65,000 دينار</li>
      </ul>

      <h2 style={{ marginTop: '2rem' }}>نموذج الطلب</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const country = e.target.country.value;
        const plan = e.target.plan.value;
        const activate = e.target.activate.value;
        const payment = e.target.payment.value;
        const msg = \`👤 الاسم: \${name}%0A🌍 الدولة: \${country}%0A💳 الشريحة: \${plan}%0A⚙️ التفعيل: \${activate}%0A💰 الدفع: \${payment}\`;
        const encoded = encodeURI(msg);
        window.open("https://m.me/yourpage?ref=" + encoded, "_blank");
      }}>
        <input name="name" placeholder="الاسم الكامل" required style={{ display: 'block', width: '100%', marginBottom: '10px' }} />
        <select name="country" required style={{ display: 'block', width: '100%', marginBottom: '10px' }}>
          <option>العراق</option>
          <option>السعودية</option>
          <option>إيران</option>
        </select>
        <select name="plan" required style={{ display: 'block', width: '100%', marginBottom: '10px' }}>
          <option>10 أشهر – 50 ألف</option>
          <option>12 شهر – 55 ألف</option>
          <option>14 شهر – 65 ألف</option>
        </select>
        <select name="activate" required style={{ display: 'block', width: '100%', marginBottom: '10px' }}>
          <option>أونلاين</option>
          <option>في مكتبنا – دهوك، شارع استراليا</option>
        </select>
        <select name="payment" required style={{ display: 'block', width: '100%', marginBottom: '10px' }}>
          <option>رصيد زين العراق</option>
          <option>ماستر كرد (الإقليم)</option>
          <option>فاست باي</option>
          <option>بيتكوين</option>
          <option>إثيريوم</option>
        </select>
        <button type="submit" style={{ background: '#6610f2', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '8px' }}>
          أرسل الطلب عبر الماسنجر
        </button>
      </form>
    </div>
  );
}