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
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "abducir",
        question:
          "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
      },
      {
        answer: "anestesia",
        question:
          "CON LA A. Sustancia química que produce esta pérdida o ausencia temporal de la sensibilidad y que se utiliza en cirugía.",
      },
      {
        answer: "anomalia",
        question:
          "CON LA A. Cambio o desviación respecto de lo que es normal, regular, natural o previsible ",
      },
    ],
  },
  {
    letter: "b",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "bingo",
        question:
          "CON LA B. Juego que ha sacado de quicio a todos los 'Coders' en las sesiones de precurso",
      },
      {
        answer: "bazuca",
        question:
          "CON LA B. Arma portátil de infantería que consiste en un tubo metálico abierto por los dos extremos que dispara proyectiles de propulsión a chorro.",
      },
      {
        answer: "batman",
        question:
          "CON LA B. Justiciero millonario y huerfano que protege a Ciudad Gótica.",
      },
    ],
  },

  {
    letter: "c",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "churumbel",
        question: "CON LA C. Niño, crío, bebé",
      },
      {
        answer: "cintura",
        question:
          "CON LA C. Parte más estrecha del tronco humano, por encima de las caderas.",
      },
      {
        answer: "caramelo",
        question:
          "CON LA C. Dulce o golosina al que se le añade alguna esencia o saborizante.",
      },
    ],
  },
  {
    letter: "d",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "dedos",
        question:
          "CON LA D. Parte alargada en que terminan la mano y el pie de los vertebrados.",
      },
      {
        answer: "duda",
        question:
          "CON LA D. Vacilación o falta de determinación ante varias posibilidades de elección sobre creencias, noticias o hechos.",
      },
      {
        answer: "digital",
        question:
          "CON LA D. [aparato, máquina] Que suministra los datos mediante dígitos o elementos finitos o discretos.",
      },
    ],
  },

  {
    letter: "e",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "ectoplasma",
        question:
          "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
      },
      {
        answer: "elegante",
        question:
          "CON LA E. Que tiene distinción o gracia, resulta de buen gusto o destaca por su sencillez.",
      },
      {
        answer: "enano",
        question: "CON LA E. Que es muy pequeño.",
      },
    ],
  },
  {
    letter: "f",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "facil",
        question:
          "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
      },
      {
        answer: "fan",
        question:
          "CON LA F. Admirador o seguidor apasionado de una persona o cosa.",
      },
      {
        answer: "fino",
        question: "CON LA F. Que es delgado o tiene poco grosor o espesor.",
      },
    ],
  },
  {
    letter: "g",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "galaxia",
        question:
          "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
      },
      {
        answer: "gula",
        question: "CON LA G. Apetito desmedido de comer y beber.",
      },
      {
        answer: "gigante",
        question:
          "CON LA G. Que tiene un tamaño muy superior a otros de su misma clase o especie.",
      },
    ],
  },
  {
    letter: "h",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "harakiri",
        question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
      },
      {
        answer: "hipnosis",
        question: "CON LA H. Acción de hipnotizar.",
      },
      {
        answer: "halo",
        question:
          "CON LA H. Círculo luminoso que rodea a algunos astros, especialmente al Sol y a la Luna.",
      },
    ],
  },
  {
    letter: "i",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "iglesia",
        question: "CON LA I. Templo cristiano",
      },
      {
        answer: "ingrediente",
        question:
          "CON LA I. Elemento que forma un compuesto, en especial de un compuesto destinado a la ingestión.",
      },
      {
        answer: "impacto",
        question:
          "CON LA I. Choque violento de una cosa en movimiento contra otra",
      },
    ],
  },
  {
    letter: "j",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "jabali",
        question:
          "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
      },
      {
        answer: "jungla",
        question:
          "CON LA J. Lugar donde hay gran competitividad o donde impera la ley del más fuerte.",
      },
      {
        answer: "jardin",
        question:
          "CON LA J. Terreno en el que se cultivan plantas y flores ornamentales para hacer de él un lugar agradable.",
      },
    ],
  },
  {
    letter: "k",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "kamikaze",
        question:
          "CON LA K. Persona que se juega la vida realizando una acción temeraria",
      },
      {
        answer: "katana",
        question:
          "CON LA K. Arma blanca de origen japonés, parecida a la espada, de un solo filo y algo curvada.",
      },
      {
        answer: "kimono",
        question:
          "CON LA K. Túnica de origen japonés, de mangas anchas y largas, abierta por delante y que se ciñe, cruzándola, mediante un cinturón.",
      },
    ],
  },
  {
    letter: "l",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "licantropo",
        question: "CON LA L. Hombre lobo",
      },
      {
        answer: "loco",
        question:
          "CON LA L. Que tiene trastornadas o perturbadas las facultades mentales.",
      },
      {
        answer: "lento",
        question:
          "CON LA L. Que va despacio o que invierte mucho tiempo o más tiempo del que se considera normal en moverse o desarrollarse.",
      },
    ],
  },
  {
    letter: "m",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "misantropo",
        question:
          "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
      },
      {
        answer: "mago",
        question:
          "CON LA M. Persona que hace juegos de manos y otros trucos de magia, en especial si se dedica a ello profesionalmente.",
      },
      {
        answer: "mortal",
        question: "CON LA M. Que causa o puede causar la muerte.",
      },
    ],
  },
  {
    letter: "n",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "necedad",
        question: "CON LA N. Demostración de poca inteligencia",
      },
      {
        answer: "naranja",
        question: "CON LA N. Fruto del naranjo, comestible, de forma redonda.",
      },
      {
        answer: "nilo",
        question:
          "CON LA N. El mayor río de África, que fluye en dirección norte a través de diez países .",
      },
    ],
  },
  {
    letter: "ñ",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "señal",
        question:
          "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
      },
      {
        answer: "carroña",
        question:
          "CONTIENE LA Ñ. Carne descompuesta, especialmente la de los animales muertos.",
      },
      {
        answer: "huraña",
        question:
          "CONTIENE LA Ñ. Que rehúye el trato de otras personas y rechaza las atenciones y muestras de cariño.",
      },
    ],
  },
  {
    letter: "o",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "orco",
        question:
          "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
      },
      {
        answer: "oido",
        question:
          "CON LA O. Sentido corporal que permite percibir y distinguir los sonidos.",
      },
      {
        answer: "oslo",
        question: "CON LA O. Capital de Noruega.",
      },
    ],
  },
  {
    letter: "p",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "protoss",
        question:
          "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
      },
      {
        answer: "pelota",
        question:
          "CON LA P. Bola generalmente hecha de cuero, goma u otro material flexible, que se utiliza para jugar.",
      },
      {
        answer: "polla",
        question:
          "CON LA P. Gallina joven que aún no pone huevos o que hace poco que ha empezado a ponerlos.",
      },
    ],
  },
  {
    letter: "q",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "queso",
        question:
          "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
      },
      {
        answer: "quien",
        question:
          "CON LA Q. Introduce una oración que indica la identidad o la característica de una persona.",
      },
      {
        answer: "querubin",
        question:
          "CON LA Q. En algunas religiones, ángel que está junto al trono de Dios y que tiene un grado inferior al de los serafines.",
      },
    ],
  },
  {
    letter: "r",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "raton",
        question: "CON LA R. Roedor",
      },
      {
        answer: "roncar",
        question:
          "CON LA R. Producir un ruido áspero, grave y continuado al respirar mientras se duerme debido a la vibración del velo del paladar.",
      },
      {
        answer: "rico",
        question: "CON LA R. Que tiene mucho dinero o muchos bienes.",
      },
    ],
  },
  {
    letter: "s",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "stackoverflow",
        question:
          "CON LA S. Comunidad salvadora de todo desarrollador informático",
      },
      {
        answer: "sueño",
        question:
          "CON LA S. Estado de reposo en que se encuentra la persona o el animal que está durmiendo.",
      },
      {
        answer: "seco",
        question: "CON LA S. Que carece de agua o humedad.",
      },
    ],
  },
  {
    letter: "t",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "terminator",
        question:
          "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
      },
      {
        answer: "tokio",
        question: "CON LA T. Capital de Japón.",
      },
      {
        answer: "tienda",
        question:
          "CON LA T. Establecimiento en el que se vende cualquier tipo de producto de consumo.",
      },
    ],
  },
  {
    letter: "u",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "unamuno",
        question:
          "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
      },
      {
        answer: "unico",
        question:
          "CON LA U. Se aplica a una o varias cosas de las cuales o de cuya especie no hay otras.",
      },
      {
        answer: "umbral",
        question:
          "CON LA U. Pieza empotrada, escalón o espacio que constituye la parte inferior de una puerta, contrapuesta al dintel.",
      },
    ],
  },
  {
    letter: "v",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "vikingos",
        question:
          "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
      },
      {
        answer: "vodka",
        question:
          "CON LA V. Bebida alcohólica de alta graduación que se obtiene por destilación de cereales, especialmente centeno.",
      },
      {
        answer: "vulva",
        question:
          "CON LA V. Parte que rodea y constituye la abertura externa de la vagina",
      },
    ],
  },
  {
    letter: "w",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "sandwich",
        question:
          "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
      },
      {
        answer: "whatsapp",
        question:
          "CONTIENE LA W. Es el nombre de una aplicación que permite enviar y recibir mensajes instantáneos a través de un teléfono móvil (celular).",
      },
      {
        answer: "waterpolo",
        question:
          "CONTIENE LA W. Deporte que se practica en una piscina, en el que se enfrentan dos equipos de siete y utilizan una pelota.",
      },
    ],
  },
  {
    letter: "x",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "botox",
        question:
          "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
      },
      {
        answer: "matrix",
        question:
          "CONTIENE LA X. Saga de peliculas donde el protagonista es llamado Neo.",
      },
      {
        answer: "asterix",
        question:
          "CONTIENE LA X. Personaje de ficción de baja estatura que protagoniza una historieta francea muy popular.",
      },
    ],
  },
  {
    letter: "y",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "peyote",
        question:
          "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
      },
      {
        answer: "mamey",
        question:
          "CONTIENE LA Y. Árbol de flores blancas y rojizas, fruto ovoide, de pulpa roja, dulce y muy suave; es originario de América.",
      },
      {
        answer: "yacimiento",
        question:
          "CONTIENE LA Y. Lugar en el que se encuentran restos arqueológicos.",
      },
    ],
  },
  {
    letter: "z",
    status: STATUS_OPTIONS.NOT_ANSWER,
    options: [
      {
        answer: "zen",
        question:
          "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
      },
      {
        answer: "zapato",
        question: "CON LA Z. Calzado que cubre total o parcialmente el pie .",
      },
      {
        answer: "zanahoria",
        question:
          "CON LA Z. Raíz comestible de esta planta, de color anaranjado y forma cónica y alargada.",
      },
    ],
  },
];

const bestScores = {};

const getUserQuestions = () => {
  const userQuestions = JSON.parse(JSON.stringify(questions));
  userQuestions.forEach((question) => {
    const optionIndex = Math.floor(Math.random() * question.options.length);
    question.selectedOption = question.options[optionIndex];
  });
  return userQuestions;
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
    const answer = getPromptData(question.selectedOption.question);
    if (answer === "END")
      throw {
        questions: questionsAux,
        countRoundAnswers,
      };
    if (answer.toLowerCase() !== "pasapalabra") {
      if (
        question.selectedOption.answer.toLowerCase() === answer.toLowerCase()
      ) {
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

const setAndDisplayUserScore = (userName, userQuestions, saveScore = true) => {
  const gameScore = userQuestions.reduce((accumulator, current) => {
    current.status === STATUS_OPTIONS.CORRECT && (accumulator += 1);
    return accumulator;
  }, 0);

  let msg = `Score: ${gameScore}`;
  if (saveScore) {
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
  }

  return msg;
};

const showRanking = () => {
  return Object.entries(bestScores)
    .sort(([keyA, valueA], [keyB, valueB]) => {
      return valueB - valueA;
    })
    .reduce((accumulator, [currentKey, currentValue], index) => {
      accumulator += `${index + 1}. ${currentKey}: ${currentValue}\n`;
      return accumulator;
    }, "Ranking:\n");
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

    alert(setAndDisplayUserScore(userName, userQuestions, !userEnd));
    alert(showRanking());
    newGame = !userEnd && confirm("Do you want to play again?");
  }
};

runPasapalabra();
