document.title = 'Sliders'

let html = ''
const nSliders = 1000

for(let i = 0; i < nSliders; i++) {
    html += `<input type="range" min="0" max="1" value="${Math.random()}" step="0.01"/>`
}

document.body.innerHTML = html;