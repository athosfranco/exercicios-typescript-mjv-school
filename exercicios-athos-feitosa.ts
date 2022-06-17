/**
 * EXERCÍCIOS TYPESCRIPT - ATHOS FRANCO DE SÁ FEITOSA - MJV SCHOOL ANGULAR (SEMANA 2)
 *
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de
 * nome, profissão, idade e uma lista de assuntos de seu interesse
 *  */

interface Pessoa {
  nomeCompleto: string;
  profissao: string;
  idade: number;
  interesses: string[];
}

/*
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 */

const athos: Pessoa = {
  nomeCompleto: "Athos Feitosa",
  profissao: "Fullstack web dev",
  idade: 26,
  interesses: ["Programação", "video games", "leitura", "academia"],
};

/*
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1,
 * e retorne somente a lista de assuntos do objeto.
 */

const getInteresses = (objPessoa: Pessoa) => objPessoa.interesses;

console.log("LOG EXERCICIO #03");
console.log(getInteresses(athos));

/*
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 */

console.log("LOG EXERCICIO #04");
const getInteresses2 = (objPessoa: Pessoa): Array<String> => objPessoa.interesses;

console.log(getInteresses(athos));

/*
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 */

enum Materias {
  ANGULAR = "Angular",
  TYPESCRIPT = "TypeScript",
  GIT = "Git",
}

/*
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 */

//OBS: Dessa vez criei usando 'type' ao invés de 'interface' apenas para diferenciar e praticar
type Professor = {
  nome: string;
  listaMaterias: Array<Materias>;
};

/*
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6.
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 */

const objAlan: Professor = {
  nome: "Alan",
  listaMaterias: [Materias.ANGULAR, Materias.TYPESCRIPT, Materias.GIT],
};

const objNathan: Professor = {
  nome: "Nathan",
  listaMaterias: [Materias.ANGULAR, Materias.GIT],
};

/*
 * 8 - Declare e popule um array com os objetos do exercício 7.
 */

const listaProfessores: Array<Professor> = [objAlan, objNathan];

/*
 * 9 - Faça uma função que receba um argumento de array de Professor
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 */

const listarNomes = (listaProfessores: Array<Professor>) => listaProfessores.map((professor) => professor.nome);

console.log("LOG EXERCICIO #09");
console.log(listarNomes(listaProfessores));

/*
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 */

const listarMaterias = (listaProfessores: Array<Professor>): Array<Materias> => {
  let listaMaterias: Array<Materias> = [];

  listaProfessores.forEach((professor) => {
    professor.listaMaterias.forEach((materia) => {
      !listaMaterias.includes(materia) && listaMaterias.push(materia);
    });
  });

  return listaMaterias;
};

console.log("LOG EXERCICIO #10");
console.log(listarMaterias(listaProfessores));

/*
 * 11 - Faça uma função que receba um argumento de array de Professores e
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 */

const getProfessorTypescript = (listaProfessores: Array<Professor>) => {
  const professorEncontrado: Professor | undefined = listaProfessores.find((professor) => {
    return professor.listaMaterias.includes(Materias.TYPESCRIPT);
  });

  if (professorEncontrado !== undefined) {
    return professorEncontrado;
  } else {
    console.log("Nenhum professor de TypeScript foi encontrado.");
  }
};

console.log("LOG EXERCICIO #11");
console.log(getProfessorTypescript(listaProfessores));
