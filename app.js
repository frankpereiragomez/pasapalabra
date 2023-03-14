/*
0. Quedan preguntas por responder ?
  0.1 Si:  
    1. Mostrar siguiente pregunta usuario
    2. Usuario responde
      2.1 pasapalabra: volver al punto 1
      2.2 Error: marcar pregunta status como ERROR
        2.2.1 volver al punto 1
      2.3 Correcto: marcar pregunta status como CORRECT
        2.3.1 volver al punto 1
  0.2 No:
    0.2.1 Añadir puntuacion del usuario al ranking  
    0.2.2 Mostrar ranking
*/

const STATUS_OPTIONS = {
  NOT_ANSWER: 0,
  ERROR: -1,
  CORRECT: 1,
};

const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
  },
  /* 
  {
    letter: "c",
    answer: "churumbel",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  {
    letter: "r",
    answer: "raton",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question: "CON LA R. Roedor",
  },
  {
    letter: "s",
    answer: "stackoverflow",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: STATUS_OPTIONS.NOT_ANSWER,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
  */
];

const bestScores = {};

const getUserQuestions = () => {
  return JSON.parse(JSON.stringify(questions));
};

const getPromptData = (msg, errorMsg = "El campo no puede estar vacio") => {
  const promptData = prompt(msg);
  if (!!promptData) return promptData;
  alert(errorMsg);
  return getPromptData(msg, errorMsg);
};

const playNextRound = (questions) => {
  const questionsAux = JSON.parse(JSON.stringify(questions));
  const notAnswerQuestions = questionsAux.filter(
    (question) => question.status === STATUS_OPTIONS.NOT_ANSWER
  );
  let countRoundAnswers = 0;
  notAnswerQuestions.forEach((question) => {
    const answer = getPromptData(question.question);
    if (answer === "END")
      throw {
        questions: questionsAux,
        countRoundAnswers,
      };
    if (answer.toLowerCase() !== "pasapalabra") {
      if (question.answer.toLowerCase() === answer.toLowerCase()) {
        question.status = STATUS_OPTIONS.CORRECT;
      } else {
        question.status = STATUS_OPTIONS.ERROR;
      }
      countRoundAnswers++;
    }
  });

  return {
    questions: questionsAux,
    countRoundAnswers,
  };
};

const setAndDisplayUserScore = (userName, userQuestions) => {
  const gameScore = userQuestions.reduce((accumulator, current) => {
    current.status === STATUS_OPTIONS.CORRECT && (accumulator += 1);
    return accumulator;
  }, 0);

  let msg = `Score: ${gameScore}`;
  const bestScore = bestScores[userName];
  if (bestScore) {
    msg += `\n Best score from now: ${bestScore}`;
    if (bestScore < gameScore) {
      msg += `\n New record!!`;
      bestScores[userName] = gameScore;
    }
  } else {
    bestScores[userName] = gameScore;
  }
  alert(msg);
};

const runPasapalabra = () => {
  let newGame = true;
  let userName = null;
  while (newGame) {
    let countAnswers = 0;
    let userQuestions = getUserQuestions();
    userName = getPromptData(
      "Hola, introduce tu nombre",
      "El nombre no puede estar vacio"
    );
    let userEnd = false;

    while (!userEnd && countAnswers < userQuestions.length) {
      try {
        const round = playNextRound(userQuestions);
        userQuestions = round.questions;
        countAnswers += round.countRoundAnswers;
      } catch (interruptedRound) {
        userEnd = true;
        userQuestions = interruptedRound.questions;
        countAnswers += interruptedRound.countRoundAnswers;
      }
    }

    setAndDisplayUserScore(userName, userQuestions);

    newGame = !userEnd && confirm("Do you want to play again?");
  }
};

runPasapalabra();
