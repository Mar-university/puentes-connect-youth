export type Tema = {
  slug: string;
  titulo: string;
  descripcion: string;
  icono: "sprout" | "shield-check" | "heart-pulse" | "handshake" | "shield-alert";
  tone: "primary" | "secondary" | "accent";
  cuidado?: boolean;
};

export const temas: Tema[] = [
  {
    slug: "embarazo-adolescente",
    titulo: "Embarazo adolescente e infantil",
    descripcion:
      "Comprende qué significa, por qué ocurre, cuáles pueden ser sus consecuencias y qué opciones de prevención, orientación y apoyo existen.",
    icono: "sprout",
    tone: "primary",
  },
  {
    slug: "prevencion-y-anticoncepcion",
    titulo: "Prevención y anticoncepción",
    descripcion:
      "Conoce por qué la prevención es importante, qué opciones existen y cómo acceder a información y orientación para tomar decisiones informadas.",
    icono: "shield-check",
    tone: "secondary",
  },
  {
    slug: "mi-cuerpo-y-mi-salud",
    titulo: "Mi cuerpo y mi salud sexual",
    descripcion:
      "Encuentra información para comprender tu cuerpo, cuidar tu salud y reconocer cuándo puede ser importante buscar orientación profesional.",
    icono: "heart-pulse",
    tone: "accent",
  },
  {
    slug: "consentimiento-y-relaciones",
    titulo: "Consentimiento y relaciones saludables",
    descripcion:
      "Aprende sobre consentimiento, límites, comunicación, autonomía y cómo reconocer relaciones basadas en respeto.",
    icono: "handshake",
    tone: "secondary",
  },
  {
    slug: "violencia-abuso-y-proteccion",
    titulo: "Violencia, abuso y protección",
    descripcion:
      "Aprende a reconocer situaciones de violencia o abuso y conoce opciones para buscar protección y apoyo.",
    icono: "shield-alert",
    tone: "primary",
    cuidado: true,
  },
];

export const rutaPuentes = [
  {
    paso: "Comprendo",
    pregunta: "¿Qué necesito saber?",
    detalle: "La base del tema, explicada con claridad.",
  },
  {
    paso: "Reconozco",
    pregunta: "¿Cómo aparece en la vida real?",
    detalle: "Situaciones cotidianas, señales, mitos y preguntas frecuentes.",
  },
  {
    paso: "Decido",
    pregunta: "¿Qué opciones tengo?",
    detalle: "Información para decidir por ti, sin decirte qué decidir.",
  },
  {
    paso: "Actúo",
    pregunta: "¿Qué puedo hacer?",
    detalle: "Pasos prácticos según cada situación.",
  },
  {
    paso: "Conecto",
    pregunta: "¿Dónde encuentro apoyo?",
    detalle: "Servicios oficiales, profesionales y otros recursos.",
  },
];
