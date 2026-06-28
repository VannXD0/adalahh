const DB_URL = "https://pionix-ceb3c-default-rtdb.firebaseio.com";
async function fetchData(mod) {
    const res = await fetch(`${DB_URL}/${mod}.json`);
    const data = await res.json();
    document.getElementById('jsonDisplay').innerText = JSON.stringify(data, null, 2);
}
async function createLicense() {
    const mod = document.getElementById('modType').value;
    const name = document.getElementById('uname').value;
    const prefix = mod.includes('BINO') ? 'BINO' : (mod.includes('EIXO') ? 'EIXO' : 'SPEC');
    const key = `PX-PREM-${prefix}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const data = { Device: "1", Exp: "2026-07-27", ID: key, Username: name, Status: "true", Type: "premium", DeviceId: "" };
    const fd = new URLSearchParams();
    fd.append('mod', mod); fd.append('key', key); fd.append('name', name);
    await fetch('api_admin.php', { method: 'POST', body: fd });
    alert('Lisensi Dibuat: ' + key); fetchData(mod);
}
