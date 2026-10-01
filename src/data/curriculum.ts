/**
 * Contenido conceptual exacto para "El Juego del Movimiento"
 * Basado estrictamente en los principios pedagógicos y dramatúrgicos del documento de artes vivas.
 */

export interface MovementQuality {
  id: string;
  name: string;
  code: string;
  projectedEffect: string;
  strategyWhenToUse: string;
  visualGraphic: 'direct' | 'fluid' | 'heavy' | 'indirect';
  keywords: string[];
}

export interface ExpertLevelModule {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  corePrinciple: string;
  practicalApplication: string;
  annotation: string;
}

export interface ScenicObjectExample {
  id: string;
  name: string;
  context: string;
  timing: string;
  focality: string;
  lightSound: string;
  scenicEvent: string;
}

export const SITE_METADATA = {
  hero: {
    number: "01",
    title: "EL JUEGO DEL MOVIMIENTO",
    subtitle: "Más allá de 'saber bailar'",
    highlightQuote: "Tu cuerpo es tu herramienta de trabajo.",
    cta: "ENTRAR AL JUEGO ↓",
  },
  sections: [
    {
      id: "seccion-01",
      navNumber: "01",
      navLabel: "EL JUEGO DEL MOVIMIENTO",
      exactTitle: "1. El Juego del Movimiento: Más allá de 'saber bailar'",
      identifier: "01 / MOVIMIENTO",
      backWords: ["CUERPO", "ENERGÍA", "ACCIÓN", "PRESENCIA", "EXTRA-COTIDIANO"],
    },
    {
      id: "seccion-02",
      navNumber: "02",
      navLabel: "LA PARTITURA TEATRAL",
      exactTitle: "2. La Partitura Teatral: Tu GPS de Acción",
      identifier: "02 / PARTITURA",
      backWords: ["PARTITURA", "RIGOR", "BIOMECÁNICA", "LABAN", "ESTILIZACIÓN"],
    },
    {
      id: "seccion-03",
      navNumber: "03",
      navLabel: "EL MIX PERFECTO DEL CREADOR 360°",
      exactTitle: "3. Conclusión: El Mix Perfecto del Creador 360°",
      identifier: "03 / CREADOR 360°",
      backWords: ["TEATRO", "DANZA", "ORGANICIDAD", "ESPACIO", "360°"],
    },
  ],
};

export const SECTION_01_CONTENT = {
  intro: {
    ephemeralReality: "En una era de consumo voraz y contenido efímero, la atención del público es el recurso más escaso y disputado en el escenario.",
    strategicPremise: "El movimiento escénico no es adorno, no es relleno coreográfico ni pose plástica: es una ESTRATEGIA DIRECTA para atrapar, sostener y transformar la percepción del espectador.",
    bodyAsTool: "Tu cuerpo es tu herramienta de trabajo. Si no conoces su peso, su centro de gravedad, sus tensiones parásitas y sus canales de impulso, estás operando a ciegas.",
  },
  theorists: [
    {
      author: "Jerzy Grotowski",
      concept: "El cuerpo despojado y la vía negativa",
      quote: "No se trata de aprender trucos exteriores, sino de eliminar las resistencias psicofísicas que bloquean el impulso.",
      description: "Grotowski desmonta la idea del actor que decora. El intérprete no 'hace' gestos para gustar: se despoja de lo superfluo hasta que el cuerpo se convierte en un canal transparente donde cada respiración y cada caída es un acto de rigor total.",
    },
    {
      author: "Eugenio Barba",
      concept: "La energía extra-cotidiana y la antropología teatral",
      quote: "El cuerpo cotidiano busca el mínimo esfuerzo; el cuerpo escénico requiere un desperdicio consciente de energía para generar presencia.",
      description: "Barba demuestra que en la vida diaria usamos automatismos para ahorrar esfuerzo. En escena, el intérprete adopta un balance precario, altera la oposición de los pesos y amplifica la intención. La presencia no es carisma mágico: es física extra-cotidiana aplicada.",
    },
  ],
  actionIntegral: {
    title: "Acción integral físico-mental-emotiva",
    formula: "IMPULSO ORGÁNICO → AMPLIFICACIÓN DE ENERGÍA → PROYECCIÓN ESPACIAL",
    text: "En el arte escénico riguroso no existe la división cartesiana entre mente, sentimiento y músculo. Una emoción que no llega a la yema de los dedos o a la planta del pie es un pensamiento muerto. La acción integral es un circuito cerrado donde el pensamiento detona el tono muscular y la tensión muscular alimenta la resonancia emotiva.",
  },
  presenceAndGps: {
    title: "Presencia escénica y el GPS de acción",
    text: "Tener presencia no es gritar ni moverse frenéticamente. Es saber exactamente en qué punto del espacio te encuentras, hacia dónde viaja tu vector de fuerza y qué resistencia estás venciendo en cada microsegundo. El cuerpo se convierte en un compás milimétrico, un GPS de acción que nunca pierde el norte escénico.",
  },
  video: {
    label: "VIDEO 01 / EL JUEGO DEL MOVIMIENTO",
    placeholderKey: "YOUTUBE_VIDEO_01",
    caption: "Cuerpo como herramienta, energía extra-cotidiana y presencia en el espacio escénico.",
    defaultUrl: "",
  },
};

export const EXPERT_LEVEL_MODULES: ExpertLevelModule[] = [
  {
    id: "verbos",
    number: "01",
    title: "VERBOS DE ACCIÓN REAL",
    subtitle: "Sustituye adjetivos emocionales por impulsos físicos transitivos",
    corePrinciple: "Un actor aficionado intenta 'actuar triste' o 'parecer furioso'. Un profesional ejecuta un verbo de acción real contra el compañero o el espacio: empujar, acorralar, taladrar, desarmar, acariciar con navaja.",
    practicalApplication: "Todo movimiento en tu partitura debe poder formularse como un verbo activo y transitivo con impacto físico real, no como una descripción abstracta.",
    annotation: "Acción real = impacto en el otro",
  },
  {
    id: "rigor",
    number: "02",
    title: "RIGOR MATEMÁTICO",
    subtitle: "Tempo, ritmo, duración y repetición exacta al milímetro",
    corePrinciple: "La improvisación sin estructura es caos estéril. La partitura exige un rigor métrico donde una pausa de 3 segundos no dura 2 ni 4, y un giro de cabeza a 45 grados se repite idéntico en cada función.",
    practicalApplication: "Cronometrar las secuencias, definir compases internos y fijar la trayectoria espacial con precisión geométrica invariable.",
    annotation: "La precisión milimétrica libera la emoción",
  },
  {
    id: "subpartitura",
    number: "03",
    title: "LA SUB-PARTITURA",
    subtitle: "El río subterráneo: pensamiento corporal y micro-tensiones",
    corePrinciple: "Debajo del movimiento visible corre una corriente invisible: las micro-oposiciones musculares, el ritmo respiratorio contenido y la dirección interna del ojo que sostiene la densidad dramática.",
    practicalApplication: "Mientras la mano sostiene una copa con aparente calma, los dorsales y la pelvis sostienen una resistencia contraria de 8 sobre 10.",
    annotation: "Lo que no se ve es lo que sostiene la escena",
  },
  {
    id: "focalidad",
    number: "04",
    title: "DISPOSITIVOS DE FOCALIDAD",
    subtitle: "Arquitectura de la mirada: cómo guiar el ojo del espectador",
    corePrinciple: "El espectador mira donde el intérprete sabe dirigir la energía. A través de la isolación corporal, los contrastes de nivel, la inmovilidad súbita y los puntos de fuga, el cuerpo edita la escena en vivo.",
    practicalApplication: "Manipular el centro de atención del público como un lente cinematográfico: congelar 4 cuerpos para que un pestañeo se sienta como un estruendo.",
    annotation: "El cuerpo es el editor visual en directo",
  },
];

export const OBJECT_CASE_SEQUENCE = [
  { step: "01", name: "OBJETO", desc: "El punto de apoyo material o soporte escénico" },
  { step: "02", name: "TIMING", desc: "La relación matemática con el tiempo y el compás" },
  { step: "03", name: "FOCALIDAD", desc: "Dirección de vectores visuales y centro de atención" },
  { step: "04", name: "LUZ", desc: "Incidencia lumínica, claroscuro y contraste espacial" },
  { step: "05", name: "SONIDO", desc: "Contacto acústico, fricción, respiración y silencio" },
  { step: "06", name: "SUCESO ESCÉNICO", desc: "La transformación poética y dramática irrevocable" },
];

export const SCENIC_OBJECTS: ScenicObjectExample[] = [
  {
    id: "botella",
    name: "BOTELLA",
    context: "Símbolo de consumo, fragilidad de vidrio o proyectil latente.",
    timing: "Descenso milimétrico de 4 segundos antes del contacto con la mesa.",
    focality: "La mirada del intérprete viaja al cuello de la botella antes de que la mano lo toque.",
    lightSound: "Un rayo cenital rasante corta el vidrio; choque seco del cristal contra madera cruda.",
    scenicEvent: "El acto cotidiano de beber se convierte en un ritual de despojo o sentencia inminente.",
  },
  {
    id: "mesa",
    name: "MESA",
    context: "Frontera territorial, barricada, altar o lecho de confrontación.",
    timing: "Impacto plano de ambas palmas tras una suspensión prolongada en compás 3/4.",
    focality: "El eje corporal retrocede 20 cm abriendo el ángulo hacia la platea mientras el plano de la mesa domina.",
    lightSound: "Luz lateral baja proyectando la sombra monumental de los codos sobre el suelo; vibración sorda del tablón.",
    scenicEvent: "La mesa deja de ser mueble doméstico y pasa a ser trinchera de poder entre dos voluntades.",
  },
  {
    id: "cigarrillo",
    name: "CIGARRILLO",
    context: "Medidor biológico de tiempo consumido, humo como dibujo espacial y respiración tóxica.",
    timing: "Inhalación de 6 segundos, retención inmóvil de 3 segundos, exhalación oblicua continua.",
    focality: "El destello incandescente se vuelve el único faro óptico en una penumbra casi absoluta.",
    lightSound: "Punto de luz recortado sobre los labios; chasquido diminuto del papel encendido en el silencio total.",
    scenicEvent: "El consumo del cigarrillo marca la cuenta regresiva irrevocable de una decisión que no tiene vuelta atrás.",
  },
];

export const MOVEMENT_QUALITIES: MovementQuality[] = [
  {
    id: "pragmatico",
    code: "01",
    name: "PRAGMÁTICO / DIRECTO",
    projectedEffect: "Claridad quirúrgica, determinación, urgencia implacable, control total, amenaza contenida.",
    strategyWhenToUse: "Enfrentamientos frontales, toma de decisiones críticas, ruptura de la ambigüedad, órdenes tajantes y ultimátums sin escapatoria.",
    visualGraphic: "direct",
    keywords: ["Línea recta", "Vector cerrado", "Ataque frontal", "Cero adorno"],
  },
  {
    id: "volatil",
    code: "02",
    name: "VOLÁTIL / FLUIDO",
    projectedEffect: "Ingravidez, desconexión de la realidad terrenal, evasión, sensualidad hipnótica, vulnerabilidad inestable.",
    strategyWhenToUse: "Estados alterados de conciencia, transición poética, engaño, desorientación emocional, memorias fragmentadas o delirio escénico.",
    visualGraphic: "fluid",
    keywords: ["Onda sinuosa", "Estela continua", "Disolución", "Suspensión"],
  },
  {
    id: "pesado",
    code: "03",
    name: "PESADO / FUERTE",
    projectedEffect: "Arraigo brutal, peso existencial, imposición territorial incontestable, cansancio abrumador, fuerza gravitatoria pura.",
    strategyWhenToUse: "Personajes en quiebre moral, resistencia física extrema, figuras de autoridad aplastante, lucha visceral contra el colapso.",
    visualGraphic: "heavy",
    keywords: ["Gravedad", "Compresión", "Masa telúrica", "Raíz profunda"],
  },
  {
    id: "distraido",
    code: "04",
    name: "DISTRAÍDO / INDIRECTO",
    projectedEffect: "Caos aparente, evasión de conflicto frontal, astucia impredecible, dispersión periférica, paranoia oculta tras aparente ligereza.",
    strategyWhenToUse: "Personajes emboscados o tramposos, simulación de inocencia, monólogos interiores fragmentados, desvío estratégico de la atención del rival.",
    visualGraphic: "indirect",
    keywords: ["Zig-zag", "Fuga periférica", "Despiste", "Vectores múltiples"],
  },
];

export const STYLIZATION_COMPARISON = {
  title: "ESTILIZACIÓN VS. REPRESENTACIÓN",
  subtitle: "La línea divisoria entre el cliché amateur y la decisión dramatúrgica consciente",
  representation: {
    label: "REPRESENTACIÓN (CLICHÉ)",
    quote: "Un actor promedio 'representa' la borrachera tambaleándose.",
    mechanics: "Copia mimética superficial de síntomas visibles sin partitura técnica. El cuerpo intenta ilustrar la palabra o el cliché social. El resultado es teatralmente plano, predecible y carente de tensión formal.",
    verdict: "Ilustración literal",
  },
  stylization: {
    label: "ESTILIZACIÓN (OFICIO PRO)",
    quote: "Un artista pro utiliza una cualidad volátil y altera su planimetría para 'estilizar' la desorientación.",
    mechanics: "Aísla el principio cinético: disocia el tempo de las piernas del tempo del torso, fija una planimetría espiral inesperada y maneja micro-retrasos en la fijación ocular. Transforma el estado biológico en una partitura estética autónoma.",
    verdict: "Construcción formal de autor",
  },
};

export const SECTION_02_CONTENT = {
  theorists: [
    {
      author: "Konstantin Stanislavski",
      concept: "El método de las acciones físicas",
      quote: "No busques los sentimientos en tu cabeza; ejecuta la acción física con precisión y el sentimiento nacerá orgánicamente.",
      description: "Stanislavski descubrió en su última etapa que la psicología del personaje no se alcanza por la mente intelectual, sino fijando una cadena ininterrumpida de acciones físicas simples, lógicas y realizables.",
    },
    {
      author: "Vsevolod Meyerhold",
      concept: "Biomecánica teatral y el Director-Músico",
      quote: "El cuerpo del actor es un instrumento afinado; si dominas el ritmo, el freno y el impulso, dominas el alma de la platea.",
      description: "Meyerhold concibe el escenario como una partitura musical exacta. Cada movimiento tiene tres fases obligatorias: Otjas (rechazo o preparación contraria), Posyl (impulso o acción) y Tochka (punto final o fijación). El director opera como compositor de ritmos corporales.",
    },
    {
      author: "Rudolf Laban",
      concept: "Cualidades de movimiento y esfuerzo",
      quote: "El espacio es una criatura viva que responde a la dirección, el peso, el tiempo y el flujo de nuestro esfuerzo.",
      description: "Laban sistematizó cómo el ser humano despliega energía en el espacio. Desmontó la ilusión de que bailar o actuar es intuición ciega: el movimiento puede mapearse analíticamente combinando espacio directo/indirecto, peso fuerte/ligero y tiempo súbito/sostenido.",
    },
  ],
  textAsPretext: {
    title: "El texto como pretexto: la partitura sostiene el sentido",
    text: "En escena, las palabras son únicamente la cresta de la ola. La partitura de acciones físicas es el océano entero que las mueve. Puedes decir 'te amo' ejecutando una partitura física de aislamiento y agresión velada; es la tensión entre lo que el cuerpo hace y lo que la boca dice lo que engendra el verdadero acontecimiento teatral.",
  },
  transitionToCraft: {
    title: "De la intuición salvaje al oficio indestructible",
    text: "El talento sin partitura es un rehén del estado de ánimo: si estás inspirado haces una función memorable; si estás cansado, te hundes. La partitura teatral es la estructura que te salva de ti mismo. Transforma la intuición efímera en un oficio repetible, riguroso y profundamente libre.",
  },
};

export const SECTION_03_CONTENT = {
  thesis: {
    title: "El Mix Perfecto del Creador 360°",
    intro: "El creador escénico contemporáneo no se encierra en la trinchera del 'solo actor' o 'solo bailarín'. En el escenario actual, los límites entre teatro y danza se han disuelto en una práctica viva de organicidad total.",
    synthesis: [
      {
        axis: "Teatro ↔ Danza",
        statement: "El teatro le da al bailarín la necesidad dramática del verbo y la urgencia de la palabra; la danza le da al actor la conciencia espacial milimétrica, la resistencia muscular y la pureza de la forma.",
      },
      {
        axis: "Organicidad ↔ Belleza Escénica",
        statement: "La belleza no es adorno plástico: es la consecuencia natural de una acción ejecutada con verdad psicofísica absoluta, sin desperdicios ni histerias vanas.",
      },
      {
        axis: "Partitura ↔ Coreografía",
        statement: "La partitura dramática y la coreografía convergen en un único artefacto: una arquitectura donde cada paso, respiración y silencio está afinado como un instrumento de cuerda.",
      },
      {
        axis: "Espacio + Tiempo + Textura Emocional",
        statement: "Diseñar el espacio y diseñar el tiempo: las cualidades de movimiento no son ejercicios de aula, son la textura emocional que se impregna directamente en el sistema nervioso del espectador.",
      },
    ],
  },
  video: {
    label: "VIDEO 02 / CREADOR 360°",
    placeholderKey: "YOUTUBE_VIDEO_02",
    caption: "Convergencia de teatro y danza: organicidad, partitura viva y síntesis del creador 360°.",
    defaultUrl: "https://www.youtube.com/watch?v=fk8D8An1KTw",
  },
  finalCallToAction: {
    headline: "TU CUERPO ES EL ÚNICO VEHÍCULO QUE TIENES",
    subheadline: "Adueñate del espacio.",
    manifesto: "No esperes la inspiración sentado en la butaca. Entra a la sala. Mide el suelo. Fija tu partitura. Respira antes del primer impulso. La escena es tuya.",
  },
};
