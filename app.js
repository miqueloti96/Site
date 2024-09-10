function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
let campoPesquisa = document.getElementById("campo-pesquisa"). value
// se o campoPesquisase for uma sting sem nada
//if(campoPesquisa == ""){
    //section.innerHTML = "Nada foi encontrado"
  //return
// } --> 

campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags ="";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.titulo.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa)||descricao.includes (campoPesquisa)|| tags.includes(campoPesquisa)){
            // Cria a marcação HTML para cada item do resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Trailer </a> 
            </div>
        `;
        }
       
        
        
    }

if (!resultados){
    resultados = " <p>Não foi encontrado </p>"

}
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultados;
}
//console.log(dados);


