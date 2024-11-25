const selectFontName = document.getElementById('fontName');
const selectFontSize = document.getElementById('fontSize');
const foreColor = document.getElementById('foreColor');
const highlighColor = document.getElementById('highlightColor');
const content = document.getElementById('content');

const fonts = [
    "Times New Roman",
    "Arial",
    "Courier New",
    "Poppins",
    "Cursive"
]

fonts.forEach(font => {
    const option = document.createElement('option');
    option.value = font;
    option.innerText = font;
    selectFontName.appendChild(option);
})

const alterarTexto = (comando, value) => {
    document.execCommand(comando, false, value);
}

const criarLink = () => {
    const url = prompt('Digite seu link aqui: \n Ex: https://...');
    alterarTexto('createLink', url);
}

content.addEventListener('mouseenter', () => {
    const a = content.querySelectorAll('a');
    a.forEach(item => {
        item.addEventListener('mouseenter', () => {
            content.setAttribute('contenteditable', false);
            item.target = '_blank';
        })
        item.addEventListener('mouseleave', () =>{
            content.setAttribute('contenteditable', true);
        })
    });
})

selectFontName.addEventListener('change', () => {
    alterarTexto('fontName', selectFontName.value);
})

selectFontSize.addEventListener('change', () => {
    alterarTexto('fontSize', selectFontSize.value);
})

foreColor.addEventListener("change", () => {
    alterarTexto('foreColor', foreColor.value)
})

highlighColor.addEventListener('change', () => {
    alterarTexto('backColor', highlighColor.value);
})