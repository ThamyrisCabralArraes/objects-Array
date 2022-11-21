let pet = {
  nome: 'Luffy',
  Idade: 9,
  beleza: 100,

  funcao: function (...adjetivos) {
    console.log(`${pet.nome} é ${adjetivos}`);
  },
};
pet.funcao('Lindo', 'Maravilhosoo', 'Dengoso');

let amor = {
  nome: 'Carlos',
  Idade: 37,
  amo: 'pra sempre',
  gosta: {
    anime: 'One piece',
    comer: {
      comida: ['pizza', 'Pipoca'],
      bebida: 'coca-cola zero',
    },
  },
};
console.log(amor.gosta.comer.comida[1]);
