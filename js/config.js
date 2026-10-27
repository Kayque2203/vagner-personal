/* Edite aqui. Campos vazios não aparecem no site. */
window.SITE = {
  nome: "",                       // nome profissional (aparece no logo e rodapé)
  whatsapp: "5511944829925",      // só números, com 55 + DDD
  mensagemWhatsapp: "Olá! Vim pelo seu site e gostaria de saber mais sobre os treinos.",
  instagram: "",                  // ex.: "https://www.instagram.com/seuusuario/"
  cidade: "",                     // ex.: "São Paulo, SP"
  cref: "",                       // ex.: "CREF 000000-G/SP"
  objetivos: ["Ganhar massa muscular","Perder gordura","Estou começando","Melhorar minha técnica"], // botões de escolha no Contato (apague os que ele não atende)
  sobre: { texto: [], destaques: [] },   // texto: ["parágrafo 1", ...] | destaques: [{rotulo:"Formação", valor:"..."}]
  servicos: [],                   // [{titulo:"Treino presencial", descricao:"..."}]
  metodologia: [],
  // ANTES E DEPOIS: coloque as fotos em assets/images/ e liste abaixo. Sem itens, a seção não aparece.
  // Use fotos do MESMO tamanho (vertical 3:4), com mesmo enquadramento, e só com autorização por escrito do aluno.
  // Exemplo: {nome:"Carlos, 32 anos", antes:"assets/images/antes-01.jpg", depois:"assets/images/depois-01.jpg", tempo:"4 meses", legenda:"-12 kg de gordura"}
  transformacoes: [{nome:"Aluno 1", antes:"assets/images/antes-01.jpg", depois:"assets/images/depois-01.jpg", tempo:"", legenda:""},
    {nome:"Aluno 2", antes:"assets/images/antes-02.jpg", depois:"assets/images/depois-02.jpg", tempo:"", legenda:""}],
  avisoResultados: "Resultados variam de pessoa para pessoa. Fotos publicadas com autorização dos alunos."
};
