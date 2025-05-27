const servicos = [
  {
    nome: "23andMe",
    foto: "./assets/23andme.jpg",
    preco: "US$ 129",
    pros: [
      "Resultados de saúde e ancestralidade",
      "Interface intuitiva",
      "Dados brutos exportáveis"
    ],
    contras: [
      "Risco alto de uso comercial dos dados",
      "Política de retenção ampla"
    ],
    risco: "alto",
    link: "https://www.23andme.com"
  },
  {
    nome: "AncestryDNA",
    foto: "./assets/ancestrydna.jpg",
    preco: "US$ 99",
    pros: [
      "Foco em genealogia",
      "Boa base de dados familiares",
      "Ferramentas visuais de árvore genealógica"
    ],
    contras: [
      "Sem dados de saúde",
      "Compartilhamento com terceiros"
    ],
    risco: "moderado",
    link: "https://www.ancestry.com/dna"
  },
  {
    nome: "MyHeritage DNA",
    foto: "./assets/myheritage.jpg",
    preco: "US$ 89",
    pros: [
      "Custo acessível",
      "Boa cobertura europeia",
      "Interface multilíngue"
    ],
    contras: [
      "Privacidade questionável",
      "Base menor que concorrentes"
    ],
    risco: "moderado",
    link: "https://www.myheritage.com/dna"
  },
  {
    nome: "Nebula Genomics",
    foto: "./assets/nebulagenomics.jpg",
    preco: "US$ 299",
    pros: [
      "Sequenciamento completo do genoma",
      "Criptografia de dados",
      "Não compartilha com terceiros"
    ],
    contras: [
      "Custo elevado",
      "Curva de aprendizado maior"
    ],
    risco: "baixo",
    link: "https://www.nebula.org"
  },
  {
    nome: "Living DNA",
    foto: "./assets/livingdna.jpg",
    preco: "US$ 99",
    pros: [
      "Foco em ancestralidade britânica",
      "Relatórios bem ilustrados",
      "Boa visualização regional"
    ],
    contras: [
      "Sem suporte para dados de saúde",
      "Menor base de comparação global"
    ],
    risco: "moderado",
    link: "https://livingdna.com"
  },
  {
    nome: "FamilyTreeDNA",
    foto: "./assets/familytreedna.jpg",
    preco: "US$ 119",
    pros: [
      "Foco em linhagens paterna/materna",
      "Ferramentas avançadas para genealogistas",
      "Permite upload de DNA de outras empresas"
    ],
    contras: [
      "Interface datada",
      "Privacidade menos clara que concorrentes"
    ],
    risco: "alto",
    link: "https://www.familytreedna.com"
  },
  {
    nome: "TellmeGen",
    foto: "./assets/tellmegen.jpg",
    preco: "US$ 139",
    pros: [
      "Informações médicas detalhadas",
      "Atualizações futuras incluídas",
      "Interface moderna"
    ],
    contras: [
      "Base de dados menor",
      "Empresa menos conhecida globalmente"
    ],
    risco: "moderado",
    link: "https://www.tellmegen.com"
  }
];

function gerarCards() {
  const container = document.getElementById("catalogo");

  servicos.forEach(servico => {
    const card = document.createElement("div");
    card.className = "company";

    const riscoClasse = {
      baixo: "risco-baixo",
      moderado: "risco-moderado",
      alto: "risco-alto"
    }[servico.risco];

  card.innerHTML = `
    <div class="card">
      <img src="${servico.foto}" alt="Logo de ${servico.nome}">
      <div class="card-content">
        <h2>${servico.nome}</h2>
        <p><strong>Preço:</strong> ${servico.preco}</p>
        <span class="badge ${riscoClasse}">Risco: ${servico.risco}</span><br>
        <div class="detalhes hidden">
          <p><strong>Prós:</strong></p>
          <ul class="pros">
            ${servico.pros.map(p => `<li>${p}</li>`).join("")}
          </ul>
          <p><strong>Contras:</strong></p>
          <ul class="contras">
            ${servico.contras.map(c => `<li>${c}</li>`).join("")}
          </ul>
        </div>
        <a href="${servico.link}" target="_blank">Acessar site</a>
      </div>
    </div>
    <button class="toggle-btn">Ver detalhes</button>
  `;




    container.appendChild(card);

    const toggleBtn = card.querySelector(".toggle-btn");
    const detalhes = card.querySelector(".detalhes");

    toggleBtn.addEventListener("click", () => {
      detalhes.classList.toggle("hidden");
      toggleBtn.textContent = detalhes.classList.contains("hidden") ? "Ver detalhes" : "Ocultar detalhes";
    });
  });
}

document.addEventListener("DOMContentLoaded", gerarCards);
