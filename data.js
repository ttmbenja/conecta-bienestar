/*
  Conecta Bienestar — datos del portal demostrativo.
  ---------------------------------------------------
  Los 7 beneficios provienen del caso académico (informe, página 8).
  El caso NO especifica coberturas, montos, proveedores, requisitos ni plazos.
  Todo campo con el valor PENDIENTE se muestra en la página como
  "Por completar con información oficial". Para completar un beneficio,
  reemplaza PENDIENTE por el texto oficial entregado por Recursos Humanos.
*/

const PENDIENTE = null;

const CATEGORIAS = {
  salud: "Salud",
  finanzas: "Finanzas",
  bienestar: "Bienestar",
  familia: "Familia y vida personal",
};

const BENEFICIOS = [
  {
    id: "telemedicina",
    nombre: "Atención de telemedicina",
    categoria: "salud",
    icono: "stethoscope",
    resumen: "Orientación para acceder a atención de salud mediante servicios de telemedicina.",
    descripcion:
      "Servicio de orientación para que los trabajadores puedan acceder a atención de salud a distancia, mediante servicios de telemedicina.",
    quienes: "Trabajadores de Falabella Retail. Condiciones específicas por confirmar con Recursos Humanos.",
    requisitos: PENDIENTE,
    cobertura: PENDIENTE,
    pasos: PENDIENTE,
    canal: PENDIENTE,
    consultas: "Área de Recursos Humanos – Bienestar.",
    vigencia: PENDIENTE,
  },
  {
    id: "psicologica",
    nombre: "Orientación psicológica",
    categoria: "salud",
    icono: "heart-handshake",
    resumen: "Servicio de apoyo y orientación psicológica para trabajadores.",
    descripcion:
      "Espacio de apoyo y orientación psicológica disponible para los trabajadores, orientado a su bienestar emocional.",
    quienes: "Trabajadores de Falabella Retail. Condiciones específicas por confirmar con Recursos Humanos.",
    requisitos: PENDIENTE,
    cobertura: PENDIENTE,
    pasos: PENDIENTE,
    canal: PENDIENTE,
    consultas: "Área de Recursos Humanos – Bienestar.",
    vigencia: PENDIENTE,
  },
  {
    id: "financiera",
    nombre: "Orientación financiera",
    categoria: "finanzas",
    icono: "wallet",
    resumen: "Orientación para apoyar a los trabajadores en materias financieras.",
    descripcion:
      "Orientación destinada a apoyar a los trabajadores en la organización y toma de decisiones sobre materias financieras.",
    quienes: "Trabajadores de Falabella Retail. Condiciones específicas por confirmar con Recursos Humanos.",
    requisitos: PENDIENTE,
    cobertura: PENDIENTE,
    pasos: PENDIENTE,
    canal: PENDIENTE,
    consultas: "Área de Recursos Humanos – Bienestar.",
    vigencia: PENDIENTE,
  },
  {
    id: "actividad-fisica",
    nombre: "Actividad física y bienestar",
    categoria: "bienestar",
    icono: "activity",
    resumen: "Acceso a la plataforma de actividad física y bienestar.",
    descripcion:
      "Acceso a una plataforma de actividad física y bienestar para que los trabajadores incorporen hábitos saludables.",
    quienes: "Trabajadores de Falabella Retail. Condiciones específicas por confirmar con Recursos Humanos.",
    requisitos: PENDIENTE,
    cobertura: PENDIENTE,
    pasos: PENDIENTE,
    canal: PENDIENTE,
    consultas: "Área de Recursos Humanos – Bienestar.",
    vigencia: PENDIENTE,
  },
  {
    id: "descuentos",
    nombre: "Beneficios y descuentos para ti y tu familia",
    categoria: "familia",
    icono: "tag",
    resumen: "Convenios y descuentos disponibles para trabajadores y sus familias.",
    descripcion:
      "Información sobre los convenios y descuentos disponibles para los trabajadores y sus grupos familiares.",
    quienes: "Trabajadores de Falabella Retail y sus familias. Alcance familiar por confirmar con Recursos Humanos.",
    requisitos: PENDIENTE,
    cobertura: PENDIENTE,
    pasos: PENDIENTE,
    canal: PENDIENTE,
    consultas: "Área de Recursos Humanos – Bienestar.",
    vigencia: PENDIENTE,
  },
  {
    id: "autocuidado",
    nombre: "Actividades de autocuidado y bienestar",
    categoria: "bienestar",
    icono: "sprout",
    resumen: "Actividades orientadas al bienestar y autocuidado de los trabajadores.",
    descripcion:
      "Actividades periódicas orientadas al autocuidado y al bienestar integral de los trabajadores.",
    quienes: "Trabajadores de Falabella Retail. Condiciones específicas por confirmar con Recursos Humanos.",
    requisitos: PENDIENTE,
    cobertura: PENDIENTE,
    pasos: PENDIENTE,
    canal: PENDIENTE,
    consultas: "Área de Recursos Humanos – Bienestar.",
    vigencia: PENDIENTE,
  },
  {
    id: "conciliacion",
    nombre: "Conciliación trabajo y vida personal",
    categoria: "familia",
    icono: "scale",
    resumen: "Programas que facilitan la conciliación entre trabajo y vida personal.",
    descripcion:
      "Programas destinados a facilitar el equilibrio entre las responsabilidades laborales y la vida personal y familiar.",
    quienes: "Trabajadores de Falabella Retail. Condiciones específicas por confirmar con Recursos Humanos.",
    requisitos: PENDIENTE,
    cobertura: PENDIENTE,
    pasos: PENDIENTE,
    canal: PENDIENTE,
    consultas: "Área de Recursos Humanos – Bienestar.",
    vigencia: PENDIENTE,
  },
];

/* Campos de cada ficha (punto 4 del informe, página 4). */
const CAMPOS_FICHA = [
  { key: "descripcion", label: "Descripción", ayuda: "En qué consiste" },
  { key: "quienes", label: "¿Quiénes pueden acceder?", ayuda: "Público beneficiario" },
  { key: "requisitos", label: "Requisitos", ayuda: "Condiciones para utilizarlo" },
  { key: "cobertura", label: "Cobertura", ayuda: "Qué incluye" },
  { key: "pasos", label: "¿Cómo acceder?", ayuda: "Pasos para solicitarlo" },
  { key: "canal", label: "¿Dónde solicitarlo?", ayuda: "Canal de acceso" },
  { key: "consultas", label: "Consultas", ayuda: "Contacto de orientación" },
  { key: "vigencia", label: "Vigencia", ayuda: "Fechas y condiciones" },
];

/* Novedades: ejemplos demostrativos del plan de comunicación (punto 9, página 9). */
const NOVEDADES = [
  {
    tipo: "Beneficio del mes",
    titulo: "Este mes destacamos: Orientación psicológica",
    texto: "Cada mes difundiremos un beneficio en profundidad para que sepas cómo usarlo.",
    beneficio: "psicologica",
  },
  {
    tipo: "Recordatorio quincenal",
    titulo: "¿Ya revisaste tus beneficios de salud?",
    texto: "Cada 15 días te recordaremos los beneficios disponibles y cómo acceder a ellos.",
    beneficio: "telemedicina",
  },
  {
    tipo: "Convenios",
    titulo: "Nuevos convenios y descuentos",
    texto: "Aquí se publicarán los nuevos convenios para ti y tu familia, con sus condiciones y vigencia.",
    beneficio: "descuentos",
  },
  {
    tipo: "Inscripciones",
    titulo: "Fechas de inscripción",
    texto: "Las fechas de inscripción a actividades de autocuidado se informarán en esta sección.",
    beneficio: "autocuidado",
  },
];

const FAQ = [
  {
    p: "¿Dónde puedo revisar todos los beneficios?",
    r: "En la sección Mis beneficios de este portal encontrarás el catálogo completo. Cada beneficio tiene una ficha con su descripción, requisitos, cobertura y forma de acceso.",
  },
  {
    p: "¿Quiénes pueden utilizar los beneficios?",
    r: "Cada ficha indica quiénes pueden acceder. Algunos beneficios están dirigidos a los trabajadores y otros también incluyen a sus familias. Las condiciones específicas las confirma el área de Recursos Humanos – Bienestar.",
  },
  {
    p: "¿Cómo conozco los requisitos?",
    r: "Abre la ficha del beneficio que te interesa y revisa el campo Requisitos. Si tienes dudas sobre tu caso particular, contacta al área de Bienestar.",
  },
  {
    p: "¿Los beneficios incluyen a mi familia?",
    r: "Depende del beneficio. Por ejemplo, los convenios y descuentos están pensados para trabajadores y sus familias. Revisa el campo ¿Quiénes pueden acceder? en cada ficha.",
  },
  {
    p: "¿Cómo puedo solicitar orientación?",
    r: "Puedes acudir al área de Recursos Humanos – Bienestar o usar la sección Contáctanos de este portal para dejar tu consulta.",
  },
  {
    p: "¿Dónde puedo consultar si tengo problemas para acceder?",
    r: "Si tuviste dificultades para solicitar un beneficio, contacta al área de Recursos Humanos – Bienestar. Te orientarán sobre el procedimiento y los pasos a seguir.",
  },
  {
    p: "¿Cómo puedo conocer nuevos beneficios y convenios?",
    r: "Revisa la sección Novedades. Ahí se publican nuevos convenios, cambios de requisitos o cobertura, fechas de inscripción y campañas de bienestar.",
  },
];
