const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

buttons.forEach(function (button) {
    button.addEventListener('click', function (r) {
        if (r.target.id === 'grey') {
            body.style.backgroundColor = '#475569';
            h1.style.color = '#ffffff';
            h2.style.color = '#cbd5e1';
        }
        if (r.target.id === 'white') {
            body.style.backgroundColor = '#ffffff';
            h1.style.color = '#0f172a';
            h2.style.color = '#334155';
        }
        if (r.target.id === 'blue') {
            body.style.backgroundColor = '#2563eb';
            h1.style.color = '#ffffff';
            h2.style.color = '#e2e8f0';
        }
        if (r.target.id === 'yellow') {
            body.style.backgroundColor = '#eab308';
            h1.style.color = '#0f172a';
            h2.style.color = '#334155';
        }
    });
});