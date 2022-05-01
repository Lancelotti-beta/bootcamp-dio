function trocaModoDaPagina() {
    modificaClass();
    modificaTexto();
}

function modificaClass() {
    $corpo.classList.toggle(darkMode);
    $title.classList.toggle(darkMode);
    $botao.classList.toggle(darkMode);
    $rodape.classList.toggle(darkMode);
}

function modificaTexto() {
    const lightMode = ' Light Mode ';
    const darkModeText = ' Dark Mode ';

    if ($corpo.classList.contains(darkMode)) {
        $title.innerHTML = darkModeText + 'ON';
        $botao.innerHTML = lightMode;

        return;
    }
    $title.innerHTML = lightMode + 'ON';
    $botao.innerHTML = darkModeText;


}


const darkMode = 'dark-mode';

const $title = document.getElementById('titleDarkMode');
const $botao = document.getElementById('buttonDarkMode');

const $corpo = document.getElementsByTagName('body')[0];
const $rodape = document.getElementsByTagName('footer')[0];

$botao.addEventListener('click', trocaModoDaPagina);
