interface Raza {
  raceName: string;
  raceDescription: string;
  racialTraits: string[];
  speed: string;
  lineage: string | null;
  ancestors: object | null;
  mainHability: object; // Place it here, outside of the ancestors object
  extra: string | null;
  subraces: object[] | string;
  languages: string;
  modifiers: string[];
  image: string;
}

export const Races: Raza[] = [
  {
    raceName: "Draconico",
    raceDescription:
      "Tu herencia dracónida se manifiesta en una serie de rasgos que compartes con otros dracónidos. Los dracónidos tienden hacia los extremos en la guerra cósmica entre el bien y el mal. La mayoría son buenos, pero los que se ponen de lado del mal pueden ser terriblemente malignos.",
    racialTraits: [
      "Escamas de Dragón",
      "Alas",
      "Aliento de Dragón",
      "Longevidad",
      "Fuerza Física",
      "Resistencia a Elementos",
      "Sentidos Agudos",
      "Culturalmente Orientados",
    ],
    speed: "30 pies",
    lineage:
      "Tienes un antepasado dragón. Elige un tipo de dragón de la tabla de antepasado dragón. Tu arma de aliento y tu resistencia al daño están determinadas por el tipo de dragón, como se indica en la tabla.",
    ancestors: {
      Azul: {
        elemento: "Relámpago",
        tipo_ataque: "Línea de 5 a 30 pies",
        salvacion: "Destreza",
      },
      Blanco: {
        elemento: "Frío",
        tipo_ataque: "Cono de 15 pies",
        salvacion: "Constitución",
      },
      De_bronce: {
        elemento: "Relámpago",
        tipo_ataque: "Línea de 5 a 30 pies",
        salvacion: "Destreza",
      },
      De_cobre: {
        elemento: "Ácido",
        tipo_ataque: "Línea de 5 a 30 pies",
        salvacion: "Destreza",
      },
      De_oro: {
        elemento: "Fuego",
        tipo_ataque: "Cono de 15 pies",
        salvacion: "Destreza",
      },
      De_oropel: {
        elemento: "Fuego",
        tipo_ataque: "Línea de 5 a 30 pies",
        salvacion: "Destreza",
      },
      De_plata: {
        elemento: "Frío",
        tipo_ataque: "Cono de 15 pies",
        salvacion: "Constitución",
      },
      Negro: {
        elemento: "Ácido",
        tipo_ataque: "Línea de 5 a 30 pies",
        salvacion: "Destreza",
      },
      Rojo: {
        elemento: "Fuego",
        tipo_ataque: "Cono de 15 pies",
        salvacion: "Destreza",
      },
      Verde: {
        elemento: "Veneno",
        tipo_ataque: "Cono de 15 pies",
        salvacion: "Constitución",
      },
    },
    mainHability: {
      name: "Ataque de aliento",
      roll: "Puedes usar tu acción para exhalar energía destructiva. Tu antepasado dragón determina el tamaño, la forma y el tipo de daño de la exhalación. Cuando usas tu arma de aliento, todas las criaturas que se encuentren en el área de la exhalación deben hacer una tirada de salvación, según determine tu antepasado dragón. La CD de esta tirada de salvación es igual a 8 + tu modificador por Constitución + tu bonificador por competencia. Si la criatura falla la tirada, recibe 2d6 puntos de daño, y si tiene éxito, la mitad. El daño aumenta a 3d6 en el nivel 6, a 4d6 en el nivel 11 y a 5d6 en el nivel 16. Después de usar tu arma de aliento, tienes que completar un descanso corto o largo para volver a utilizarla.",
    },
    extra:
      "Tienes resistencia al tipo de daño asociado con tu antepasado dragón.",
    subraces:
      "Algunas razas tienen subrazas. Los miembros de una subraza poseen los rasgos de la raza principal añadiendo los rasgos específicos de su subraza. La raza Dracónido no tiene aún ninguna subraza.",
    languages:
      "Puedes hablar, leer y escribir común y dragón. Se cree que el dragón es uno de los idiomas más antiguos, y a menudo se usa en el estudio de la magia. Esta lengua suena áspera para la mayoría de criaturas e incluye muchas consonantes duras y sibilantes.",
    modifiers: ["+2 Fuerza", "+1 Carisma"],
    image: "src/Static/images/Draconid.jpg",
  },
  {
    raceName: "Elfo",
    raceDescription:
      "Los elfos circulan libremente por las tierras de los humanos, donde siempre son bienvenidos pero nunca se encuentran como en casa. Son gentes conocidas por su poesía, baile, canto, saber y artes mágicas, y gustan de las cosas cuya belleza sea natural y sencilla.",
    racialTraits: [
      "Longevidad",
      "Agilidad",
      "Oído Agudo",
      "Visión Nocturna",
      "Destreza Mágica",
      "Resistencia a Encantamientos",
      "Sensibilidad a la Magia",
      "Artesanía",
    ],
    speed: "30 pies",
    lineage:
      "Linaje feérico. Tienes ventaja en las tiradas de salvación para no quedar hechizado y no puedes quedarte dormido por ningún efecto mágico.",
    ancestors: null,
    mainHability: {
      name: "Trance",
      roll: "Los elfos no necesitan dormir, en lugar de ello meditan profundamente y permanecen semiinconscientes durante cuatro horas al día (conocido como «trance»). Descansar de este modo te otorga los mismos beneficios que dormir ocho horas a un humano.",
    },
    extra: null,
    subraces: [
      {
        subraceName: "Alto Elfo (High Elf)",
        commonCharacteristics: "+1 en Inteligencia.",
        extraSkills:
          "Puede ser especializado en magia y tiene acceso a habilidades mágicas adicionales",
      },
      {
        subraceName: "Elfo Oscuro (Drow)",
        commonCharacteristics:
          "+1 en Carisma, visión en la oscuridad, sensibilidad a la luz solar.",
        extraSkills:
          "Puede tener habilidades mágicas oscuras y destrezas en el combate.",
      },
      {
        subraceName: "Elfo Boscoso (Wood Elf)",
        commonCharacteristics:
          "+1 en Sabiduría, velocidad adicional, habilidades relacionadas con el bosque.",
        extraSkills:
          "Puede ser experto en el uso de arcos y tener habilidades de camuflaje.",
      },
      {
        subraceName: "Elfo de los Salvajes (Wild Elf o Grugach)",
        commonCharacteristics:
          "+1 en Fuerza, velocidad adicional, habilidades relacionadas con la supervivencia.",
        extraSkills:
          "A menudo asociado con entornos naturales y menos civilizados.",
      },
      {
        subraceName: "Elfo de los Mares (Sea Elf)",
        commonCharacteristics:
          "+1 en Constitución, velocidad acuática, habilidades relacionadas con el mar.",
        extraSkills:
          "Especializado en la vida marina y adaptado a ambientes acuáticos.-",
      },
    ],
    languages:
      "Puedes hablar, leer y escribir común y élfico. El élfico es un idioma fluido, con entonaciones sutiles y una gramática intrincada. La literatura élfica es rica y variada, y sus poemas y canciones son famosos entre el resto de razas. Muchos bardos aprenden este idioma para incluir poemas élficos a sus repertorios.",
    modifiers: ["+2 Destreza", "Competencia: Percepción"],
    image: "src/Static/images/Elf.jpg",
  },
  {
    raceName: "Enano",
    raceDescription:
      "Los enanos son conocidos por su habilidad en el arte de la guerra, su gran resistencia a los castigos, su conocimiento de los secretos de la tierra, su dedicación al trabajo y su capacidad para beber cerveza. Los enanos son gente poco dada a las risas o las bromas, y suelen mostrarse recelosos con los desconocidos; sin embargo, se comportan de forma generosa con los que se ganan su confianza.",
    racialTraits: [
      "Resistencia Física",
      "Habilidad en la Forja",
      "Fortaleza",
      "Resistencia a las Enfermedades",
      "Visión en la Oscuridad",
      "Afinidad con la Piedra",
      "Orejas Puntiagudas",
      "Cultura Clánica",
    ],
    speed: "25 pies",
    lineage: null,
    ancestors: null,
    mainHability: {
      name: "Velocidad enana",
      roll: "Tu velocidad no se reduce por llevar armadura pesada.",
    },
    extra:
      "Tienes ventaja en las tiradas de salvación contra venenos y eres resistente al daño por veneno",
    subraces: [
      {
        subraceName: "Enano de las Colinas (Hill Dwarf)",
        commonCharacteristics: "+1 en Sabiduría.",
        extraSkills:
          "Pueden ser expertos en la vida subterránea y en el uso de armaduras pesadas.",
      },
      {
        subraceName: "Enano de las Montañas (Mountain Dwarf)",
        commonCharacteristics: "+2 en Fuerza.",
        extraSkills:
          "Hábiles en la minería y la forja, a menudo se especializan en el uso de armas y armaduras.",
      },
      {
        subraceName: "Enano Gris (Gray Dwarf o Duergar)",
        commonCharacteristics: "+1 en Fuerza.",
        extraSkills:
          "Tienen habilidades mágicas oscuras y son conocidos por su resistencia a la magia.",
      },
      {
        subraceName:
          "Enano de las Mazmorras (Duergar, subraza de enanos Grises)",
        commonCharacteristics: "+1 en Fuerza.",
        extraSkills:
          "Tienen habilidades mágicas adicionales y a menudo se encuentran en entornos subterráneos hostiles.",
      },
      {
        subraceName: "Enano Profundo (Deep Dwarf o Svirfneblin)",
        commonCharacteristics: "+1 en Inteligencia.",
        extraSkills:
          "Son hábiles en la magia ilusoria y en la fabricación de objetos mágicos.",
      },
    ],
    languages:
      "Puedes hablar, leer y escribir común y enano. El idioma enano está lleno de consonantes duras y sonidos guturales, características que se aplican también a cualquier otra lengua que hable un enano.",
    modifiers: [
      "+2 Constitución",
      "Competencia: Hacha de mano, Hacha de batalla, Martillo de guerra y Martillo ligero",
    ],
    image: "src/Static/images/Dwarf.jpg",
  },
  {
    raceName: "Gnomo",
    raceDescription:
      "Los gnomos son bienvenidos en todas partes como técnicos, alquimistas e inventores, pero muchos de ellos prefieren quedarse entre los suyos aunque sus habilidades estén muy demandadas. Viven en cómodas madrigueras excavadas bajo colinas onduladas y frondosas. Aunque en estos lugares abundan los animales, ir de caza es una pésima idea.",
    racialTraits: [
      "Tamaño Pequeño",
      "Inteligencia Aguda",
      "Destreza Manual",
      "Magia Ilusoria",
      "Curiosidad Infatigable",
      "Resistencia a la Magia",
      "Habilidad Técnica",
      "Agilidad",
    ],
    speed: "25 pies",
    lineage: null,
    ancestors: null,
    mainHability: {
      name: "Astucia de gnomo",
      roll: "Tienes ventaja en todas las tiradas de salvación de Inteligencia, Sabiduría y Carisma contra magia.",
    },
    extra:
      "Tienes ventaja en todas las tiradas de salvación de Inteligencia, Sabiduría y Carisma contra magia.",
    subraces: [
      {
        subraceName: "Gnomo de los Bosques (Forest Gnome)",
        commonCharacteristics: "+1 en Destreza.",
        extraSkills:
          "Conexión con la naturaleza, habilidades mágicas ilusorias, capacidad de comunicarse con pequeñas bestias y habilidad para disfrazarse eficazmente.",
      },
      {
        subraceName: "Gnomo de las Rocas (Rock Gnome)",
        commonCharacteristics: "+1 en Constitución.",
        extraSkills:
          "Habilidad en la fabricación y la ingeniería, creación de artilugios y objetos mágicos pequeños, capacidad para analizar objetos mágicos y crear pequeños artefactos mecánicos",
      },
    ],
    languages:
      "Puedes hablar, leer y escribir común y gnomo. El idioma gnomo, que utiliza la grafía enana, es famoso por sus tratados técnicos y sus catálogos de conocimiento sobre el mundo natural.",
    modifiers: ["+2 Inteligencia"],
    image: "src/Static/images/Gnome.jpg",
  },
//   {
//     raceName: "string",
//     raceDescription: "string",
//     racialTraits: "array",
//     speed: "string",
//     lineage: "string",
//     ancestors: "object",
//     mainHability: "string",
//     extra: "string",
//     subraces: "string",
//     languages: "string",
//     modifiers: "array",
//     image: "string",
//   },
//   {
//     raceName: "string",
//     raceDescription: "string",
//     racialTraits: "array",
//     speed: "string",
//     lineage: "string",
//     ancestors: "object",
//     mainHability: "string",
//     extra: "string",
//     subraces: "string",
//     languages: "string",
//     modifiers: "array",
//     image: "string",
//   },
//   {
//     raceName: "string",
//     raceDescription: "string",
//     racialTraits: "array",
//     speed: "string",
//     lineage: "string",
//     ancestors: "object",
//     mainHability: "string",
//     extra: "string",
//     subraces: "string",
//     languages: "string",
//     modifiers: "array",
//     image: "string",
//   },
//   {
//     raceName: "string",
//     raceDescription: "string",
//     racialTraits: "array",
//     speed: "string",
//     lineage: "string",
//     ancestors: "object",
//     mainHability: "string",
//     extra: "string",
//     subraces: "string",
//     languages: "string",
//     modifiers: "array",
//     image: "string",
//   },
//   {
//     raceName: "string",
//     raceDescription: "string",
//     racialTraits: "array",
//     speed: "string",
//     lineage: "string",
//     ancestors: "object",
//     mainHability: "string",
//     extra: "string",
//     subraces: "string",
//     languages: "string",
//     modifiers: "array",
//     image: "string",
//   },
];
