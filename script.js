const servicos = [
  {
    nome: "23andMe",
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
    card.className = "card";

    const riscoClasse = {
      baixo: "risco-baixo",
      moderado: "risco-moderado",
      alto: "risco-alto"
    }[servico.risco];

    card.innerHTML = `
      <h2>${servico.nome}</h2>
      <p><strong>Preço:</strong> ${servico.preco}</p>
      <p><strong>Prós:</strong></p>
      <ul class="pros">
        ${servico.pros.map(p => `<li>${p}</li>`).join("")}
      </ul>
      <p><strong>Contras:</strong></p>
      <ul class="contras">
        ${servico.contras.map(c => `<li>${c}</li>`).join("")}
      </ul>
      <span class="badge ${riscoClasse}">Risco: ${servico.risco}</span><br>
      <a href="${servico.link}" target="_blank">Acessar site</a>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", gerarCards);
