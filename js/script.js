/*
Essa função alterna a visibilidade das informações de contato. 
Se as informações estão ocultas (display: none), a função as torna visíveis (display: block).
 Se estão visíveis, a função as oculta novamente.
*/

// Função para mostrar ou esconder as informações de contato
function showContactInfo() {
  // Obtém o elemento com o ID "contact-info"
  var contactInfo = document.getElementById("contact-info");

  // Verifica se o estilo "display" está definido como "none"
  if (contactInfo.style.display === "none") {
      // Se estiver oculto, altera o estilo "display" para "block" para mostrar o elemento
      contactInfo.style.display = "block";
  } else {
      // Caso contrário, altera o estilo "display" para "none" para esconder o elemento
      contactInfo.style.display = "none";
  }
}
/*
Essa função alterna o tema da página entre claro e escuro. 
Isso é feito adicionando ou removendo a classe dark-theme do elemento <body>, 
o que altera o estilo da página com base no CSS definido para essa classe.
*/
// Função para alternar o tema da página (claro/escuro)
function toggleTheme() {
  // Adiciona ou remove a classe "dark-theme" do elemento <body>
  // Se a classe já estiver presente, ela é removida; caso contrário, é adicionada
  document.body.classList.toggle("dark-theme");
}


