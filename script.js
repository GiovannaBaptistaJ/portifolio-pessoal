// Criando constantes e capturando os elementos

const btnAlterarTema = document.querySelector("#btn-alterar-tema");
const body = document.querySelector("body");
const imgIcon = document.querySelector("#img-icone");
const containerMenuLateral = document.querySelector("#container-menu-lateral");
const menuLinks = document.querySelectorAll('.link-menu');
const btnAbrirMenu = document.querySelector("#img-botao-menu");
const btnFecharMenu = document.querySelector("#btn-fechar-menu");

// Criando uma variável para verificar o tema atual da página
let hasDarkTheme = body.classList.contains("dark") ? true : false;

// Criando um evento de click, com uma função para verificar qual tema deve ser aplicado entre ou o escuro ou o claro
btnAlterarTema.addEventListener("click", function () {
  if (hasDarkTheme) {
    body.classList.remove("dark");
    imgIcon.src = "./recursos/lua-icone.png";
    hasDarkTheme = false;
  } else {
    body.classList.add("dark");
    imgIcon.src = "./recursos/sol-icone.png";
    hasDarkTheme = true;
  }
});
// Criando um evento de click para abrir o menu e criando um evento para quando o usuário clicar fora do menu lateral
btnAbrirMenu.addEventListener('click', function () {
  alternarMenu()
  document.addEventListener('click', clickForaContainer);
});

// Criando um evento de click para fechar o menu e removendo o evento de clicar fora do menu lateral
btnFecharMenu.addEventListener('click', () => {
  alternarMenu()
  removeClickForaContainer();
});

// Iterando sob a lista de itens no menu lateral e criando um evento de click para fechar o menu lateral ao clicar em um deles e removendo o evento de clicar fora do menu lateral
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    alternarMenu()
    removeClickForaContainer();
  });
});

// Criando uma função para lidar com o click fora do menu lateral, alterando o menu e removendo o evento de clicar fora do menu lateral
function clickForaContainer(event) {
  if (!containerMenuLateral.contains(event.target) && event.target !== btnAbrirMenu) {
    alternarMenu()
    removeClickForaContainer();
  }
}
// Função que remove o evento de click fora do menu lateral
function removeClickForaContainer() {
  document.removeEventListener('click', clickForaContainer);
}

// Função que alterna entre abrir o menu lateral e fechar o menu lateral
function alternarMenu() {
  if (containerMenuLateral.classList.contains("aberto")) {
    containerMenuLateral.classList.remove("aberto");
    containerMenuLateral.classList.add("fechado");
  } else {
    containerMenuLateral.classList.remove("fechado");
    containerMenuLateral.classList.add("aberto");
  }
}