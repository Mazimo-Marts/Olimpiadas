function pesquisar(){
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o que foi pesquisado e coloca na variável
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Coloca tudo procurado em letras minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Caso o campo de pesquisa seja acionado sem nenhum valor
    if (!campoPesquisa){
      section.innerHTML = `
        <div class="item-resultado">
          <p class="descricao-meta">Por favor, coloque o nome de um atleta ou de um esporte.</p>
        </div>
        `
      return
    };

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultado = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados){
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();  
      tags = dado.tags.toLowerCase();

      // Se o valor passado includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        // Constrói o HTML para cada item do resultado da pesquisa, formatando os dados
        resultado += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }
    } 

    if (!resultado){
      section.innerHTML = `
        <div class="item-resultado">
          <p class="descricao-meta">Nada foi encontrado.</p>
        </div>
        `;
      return
    };
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultado;
  }