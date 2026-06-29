// Init Particles (Tidak terlalu padat)
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 40 },
        "color": { "value": "#8b5cf6" },
        "opacity": { "value": 0.3 },
        "line_linked": { "enable": true, "opacity": 0.2 }
    }
});

let cTier = 'LUNATIC';
function updatePreview() {
    let custom = document.getElementById('genCustom').value.toUpperCase() || 'RANDOM';
    document.getElementById('prevKey').innerText = `PX-PREM-${cTier}-${custom}`;
}
function selectTier(t, el) {
    cTier = t;
    document.querySelectorAll('.btn-tier').forEach(b => b.classList.remove('btn-active'));
    el.classList.add('btn-active');
    updatePreview();
}
function toggleMaint(status) {
    const overlay = document.getElementById('maintOverlay');
    overlay.classList.toggle('hidden', !status);
    overlay.classList.toggle('flex', status);
}
function logout() { localStorage.clear(); location.href = 'login.html'; }
