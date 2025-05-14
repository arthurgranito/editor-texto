const selectFontName = document.getElementById('fontName');
const selectFontSize = document.getElementById('fontSize');
const foreColor = document.getElementById('foreColor');
const highlightColor = document.getElementById('highlightColor');
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

const alterText = (command, value) => {
    document.execCommand(command, false, value);
}

const createLink = () => {
    const url = prompt('Enter your link here: \n Ex: https://...');
    alterText('createLink', url);
}

content.addEventListener('mouseenter', () => {
    const links = content.querySelectorAll('a');
    links.forEach(item => {
        item.addEventListener('mouseenter', () => {
            content.setAttribute('contenteditable', false);
            item.target = '_blank';
        })
        item.addEventListener('mouseleave', () => {
            content.setAttribute('contenteditable', true);
        })
    });
})

selectFontName.addEventListener('change', () => {
    alterText('fontName', selectFontName.value);
})

selectFontSize.addEventListener('change', () => {
    alterText('fontSize', selectFontSize.value);
})

foreColor.addEventListener("change", () => {
    alterText('foreColor', foreColor.value)
})

highlightColor.addEventListener('change', () => {
    alterText('backColor', highlightColor.value);
})