function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  const section = document.getElementById("resultados-pesquisa");

  // Obtém o valor do campo de pesquisa, converte para minúsculas para tornar a busca case-insensitive
  const campoPesquisa = document
    .getElementById("campo-pesquisa")
    .value.toLowerCase();

  // Se o campoPesquisa for uma string sem nada
  if (campoPesquisa == "") {
    section.innerHTML = "Nenhum resultado encontrado.";
    return;
  }

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";

  // Itera sobre cada dado na lista de dados
  for (const dado of dados) {
    // Verifica se o título do dado contém o termo de pesquisa (ignorando maiúsculas e minúsculas)
    if (
      dado.titulo.toLowerCase().includes(campoPesquisa) ||
      dado.descricao.includes(campoPesquisa)
    ) {
      // Cria um novo elemento HTML para o resultado, destacando o termo pesquisado em negrito
      resultados += `
          <div class="item-resultado">
            <h2><a href="#">${dado.titulo.replace(
              new RegExp(campoPesquisa, "gi"),
              (match) => `<strong>${match}</strong>`
            )}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
        `;
    }
  }

  // Atribui os resultados à seção HTML ou exibe uma mensagem caso não haja resultados
  section.innerHTML = resultados || "<p>Nenhum resultado encontrado.</p>";
}
