/*
  Conecta Bienestar — datos del portal demostrativo.
  ---------------------------------------------------
  Los 7 beneficios provienen del caso académico (informe, página 8) y se
  completaron con antecedentes públicos de Falabella (Reportes de
  Sostenibilidad 2024 y 2025, Portal F). Cada ficha indica su estado:
    - "publicado": beneficio respaldado por información pública de Falabella.
    - "propuesta": condiciones diseñadas para el caso académico.
  Los textos admiten una lista (array) o un texto simple (string).
  Un campo con valor null se muestra como "Por completar con información oficial".
*/

const CATEGORIAS = {
  salud: "Salud",
  finanzas: "Finanzas",
  bienestar: "Bienestar",
  familia: "Familia y vida personal",
};

const ESTADOS = {
  publicado: "Información publicada por Falabella",
  propuesta: "Propuesta del caso académico",
};

const BENEFICIOS = [
  {
    id: "telemedicina",
    nombre: "Atención de telemedicina",
    categoria: "salud",
    icono: "stethoscope",
    estado: "publicado",
    resumen: "Atención médica a distancia, ilimitada, en medicina general, psicología, nutrición y otras especialidades.",
    descripcion:
      "Servicio de atención médica a distancia mediante plataformas digitales, que permite acceder a profesionales de salud sin necesidad de acudir presencialmente a un centro médico.",
    cobertura: [
      "Telemedicina ilimitada, según el convenio informado por Falabella con Mundo Zurich y el programa Me Importas.",
      "Medicina general.",
      "Psicología.",
      "Nutrición.",
      "Kinesiología.",
      "Pediatría.",
      "Otras especialidades disponibles en el convenio.",
    ],
    quienes: [
      "Trabajadores de Falabella Retail incorporados al convenio de salud correspondiente.",
      "Cónyuge, pareja e hijos, solo si están incorporados como beneficiarios del convenio. La cobertura de familiares no es automática.",
    ],
    requisitos: [
      "Mantener una relación laboral vigente con Falabella.",
      "Estar registrado o habilitado en el convenio correspondiente.",
      "Contar con los datos de identificación que solicite el prestador.",
      "Tener un dispositivo con conexión a internet.",
      "Reservar la atención por los canales habilitados.",
    ],
    datos: {
      desde: "Desde la habilitación del trabajador en el convenio.",
      duracion: "Ilimitada, según el convenio informado. La afiliación depende de las condiciones contractuales.",
      horario: "Según la disponibilidad de profesionales y la agenda del prestador.",
      costo: "Sujeto a las condiciones del convenio. No se publican todos los copagos o exclusiones.",
    },
    pasos: [
      "Ingresa a la plataforma del prestador.",
      "Identifícate con tus datos.",
      "Selecciona la especialidad.",
      "Reserva tu consulta.",
    ],
    canal: "Plataforma digital del prestador del convenio de salud.",
    consultas: "Área de Personas – Bienestar.",
    fuente: "Antecedentes institucionales de Falabella sobre telemedicina (convenio Mundo Zurich y programa Me Importas).",
  },
  {
    id: "psicologica",
    nombre: "Orientación psicológica · Programa Comunícate",
    categoria: "salud",
    icono: "heart-handshake",
    estado: "publicado",
    resumen: "Apoyo psicológico gratuito y confidencial para ti y tu familia.",
    descripcion:
      "Programa de apoyo psicológico gratuito y confidencial, que entrega orientación y acompañamiento frente a situaciones personales, familiares y emocionales.",
    cobertura: [
      "Atención y orientación psicológica ante situaciones que afecten el bienestar emocional del trabajador y de su entorno familiar.",
    ],
    quienes: [
      "Trabajadores de Falabella.",
      "Cónyuges y parejas.",
      "Hijos e hijas mayores de 18 años.",
      "Padre y madre del trabajador.",
    ],
    requisitos: [
      "Ser trabajador de Falabella o pertenecer a uno de los grupos familiares contemplados.",
      "Comunicarse directamente con el programa.",
      "Solicitar la orientación por el canal telefónico del programa.",
    ],
    datos: {
      desde: "Se puede solicitar en cualquier momento por el canal de atención.",
      duracion: "El número de sesiones no se publica; se consulta directamente al programa.",
      horario: "Lunes a viernes, de 09:00 a 18:00.",
      costo: "Gratuito.",
    },
    pasos: [
      "Llama al canal telefónico del Programa Comunícate.",
      "Solicita orientación psicológica.",
      "Coordina la atención con el equipo del programa.",
    ],
    canal: "Canal telefónico del Programa Comunícate, informado en el Portal F.",
    consultas: "Programa Comunícate o área de Personas – Bienestar.",
    nota: "La atención es confidencial.",
    fuente: "Portal F – Programa Comunícate.",
  },
  {
    id: "financiera",
    nombre: "Orientación financiera",
    categoria: "finanzas",
    icono: "wallet",
    estado: "propuesta",
    resumen: "Asesoría gratuita para organizar tu presupuesto, ahorro y deudas.",
    descripcion:
      "Programa de educación y orientación financiera para mejorar la organización económica de los trabajadores y sus familias, con herramientas para administrar ingresos, gastos, ahorro y endeudamiento.",
    cobertura: [
      "Presupuestos personales y familiares.",
      "Organización y planificación de gastos mensuales.",
      "Endeudamiento responsable.",
      "Estrategias para ordenar y priorizar deudas.",
      "Planificación de ahorro.",
      "Educación sobre productos financieros.",
      "Orientación para enfrentar emergencias económicas.",
    ],
    quienes: [
      "Los aproximadamente 520 trabajadores de Falabella Retail del caso académico.",
      "Personal de tiendas, operaciones y logística, y administrativo.",
      "Trabajadores con jornada completa o parcial.",
    ],
    requisitos: [
      "Mantener contrato de trabajo vigente con Falabella Retail.",
      "Estar registrado en la plataforma Conecta Bienestar.",
      "Completar el formulario de solicitud de asesoría.",
      "Seleccionar una hora disponible.",
      "Indicar el tema sobre el que necesitas orientación.",
      "No se exige antigüedad mínima.",
    ],
    datos: {
      desde: "Desde el primer día de contratación.",
      duracion: "Primera sesión de 45 minutos y una sesión de seguimiento de 45 minutos. Puedes pedir una nueva atención si existe una necesidad justificada.",
      horario: "Lunes a viernes, de 09:00 a 17:00. Modalidad virtual o presencial, según disponibilidad.",
      costo: "Gratuito para el trabajador.",
    },
    pasos: [
      "Ingresa al portal Conecta Bienestar.",
      "Selecciona Orientación financiera.",
      "Completa el formulario.",
      "Reserva una hora.",
    ],
    canal: "Portal Conecta Bienestar, formulario de solicitud.",
    consultas: "Área de Personas – Bienestar.",
    nota: "Tus antecedentes económicos se tratan de forma confidencial. Nunca se te pedirán claves bancarias ni contraseñas.",
    fuente: "Propuesta de mejora del caso académico. No corresponde a una prestación financiera oficial verificada de Falabella.",
  },
  {
    id: "actividad-fisica",
    nombre: "Actividad física y bienestar",
    categoria: "bienestar",
    icono: "activity",
    estado: "publicado",
    resumen: "Convenios con gimnasios y centros deportivos, y actividades recreativas.",
    descripcion:
      "Programa que promueve la actividad física y los hábitos saludables mediante convenios con gimnasios y centros deportivos, además de actividades recreativas.",
    cobertura: [
      "Convenios con gimnasios.",
      "Descuentos en centros deportivos.",
      "Actividades recreativas.",
      "Promoción de hábitos saludables.",
      "Actividades deportivas organizadas.",
    ],
    quienes: [
      "Trabajadores de Falabella Retail habilitados para usar los convenios disponibles.",
      "La extensión a familiares depende de las condiciones de cada establecimiento.",
    ],
    requisitos: [
      "Mantener una relación laboral vigente.",
      "Contar con acceso al portal de beneficios.",
      "Revisar los gimnasios y centros deportivos adheridos.",
      "Verificar las condiciones y descuentos vigentes.",
      "Presentar la identificación o acreditación que pida el establecimiento.",
    ],
    datos: {
      desde: "Una vez que estés habilitado para usar el convenio.",
      duracion: "Durante la vigencia de cada convenio.",
      horario: "Según el horario de cada gimnasio o centro deportivo.",
      costo: "Depende del convenio: descuentos o tarifas preferenciales, no necesariamente gratuito.",
    },
    pasos: [
      "Ingresa al Portal F.",
      "Selecciona el convenio deportivo.",
      "Sigue las instrucciones para obtener el beneficio.",
    ],
    canal: "Portal F – Convenios y Beneficios.",
    consultas: "Área de Personas – Bienestar.",
    fuente: "Portal F – Convenios y Beneficios.",
  },
  {
    id: "descuentos",
    nombre: "Descuentos para ti y tu familia",
    categoria: "familia",
    icono: "tag",
    estado: "publicado",
    resumen: "Convenios en cines, parques, hoteles, telefonía y más servicios.",
    descripcion:
      "Programa de convenios comerciales que permite acceder a descuentos y tarifas preferenciales en productos, servicios y actividades de entretenimiento.",
    cobertura: [
      "Cines.",
      "Parques de entretenimiento.",
      "Zoológicos.",
      "Gimnasios.",
      "Telefonía celular.",
      "Hoteles.",
      "Ahorro previsional voluntario (APV).",
      "Revisión técnica vehicular.",
      "Servicios funerarios.",
    ],
    quienes: [
      "Trabajadores de Falabella Retail.",
      "Familiares, cuando el convenio específico lo permita.",
    ],
    requisitos: [
      "Ser trabajador habilitado en el portal de beneficios.",
      "Ingresar al catálogo de convenios.",
      "Seleccionar el establecimiento o servicio.",
      "Revisar el descuento, la vigencia y las condiciones.",
      "Presentar el código, cupón o identificación que se solicite.",
    ],
    datos: {
      desde: "Desde tu habilitación en el portal o en el convenio.",
      duracion: "Según la vigencia de cada convenio o promoción.",
      horario: "Según cada establecimiento.",
      costo: "El descuento reduce el precio; pagas el valor restante del producto o servicio.",
    },
    pasos: [
      "Ingresa al portal de beneficios.",
      "Selecciona el convenio.",
      "Obtén tu beneficio (código, cupón o acreditación).",
      "Úsalo según las instrucciones del proveedor.",
    ],
    canal: "Portal F – Convenios y Beneficios.",
    consultas: "Mesa de Servicios para Beneficios Falabella (contacto disponible en el Portal F).",
    fuente: "Portal F – Convenios y Beneficios y Reporte de Sostenibilidad 2024.",
  },
  {
    id: "autocuidado",
    nombre: "Actividades de autocuidado y bienestar",
    categoria: "bienestar",
    icono: "sprout",
    estado: "publicado",
    resumen: "Vacunación, exámenes preventivos, mamografías y campañas de salud.",
    descripcion:
      "Actividades e iniciativas orientadas a prevenir enfermedades, promover hábitos saludables y mejorar la calidad de vida de los trabajadores.",
    cobertura: [
      "Campañas de vacunación.",
      "Exámenes preventivos de salud.",
      "Campañas de prevención de enfermedades.",
      "Mamografías gratuitas para colaboradoras.",
      "Asesoría en salud reproductiva (programa Me Importas).",
      "Contención psicológica.",
      "Actividades de promoción de hábitos saludables.",
    ],
    quienes: [
      "Trabajadores de Falabella Retail.",
      "Colaboradoras, en las campañas de mamografías.",
      "Familiares, cuando la campaña o el convenio lo contemple expresamente.",
    ],
    requisitos: [
      "Mantener una relación laboral vigente, cuando la actividad esté dirigida a trabajadores.",
      "Revisar las campañas disponibles.",
      "Cumplir los requisitos médicos o de inscripción de cada actividad.",
      "Reservar hora cuando corresponda.",
      "Presentarse en el lugar y la fecha indicados.",
      "Mamografías: cumplir las condiciones médicas y de elegibilidad del prestador y la campaña.",
    ],
    datos: {
      desde: "Según la programación anual de campañas y actividades.",
      duracion: "Depende de cada actividad. Las campañas se realizan en fechas específicas.",
      horario: "Se informa al anunciar cada campaña o actividad.",
      costo: "Depende de la iniciativa. Las mamografías para colaboradoras son gratuitas; no todas las prestaciones lo son.",
    },
    pasos: [
      "Revisa las campañas comunicadas por Recursos Humanos.",
      "Inscríbete según las instrucciones de cada actividad.",
      "Asiste en el lugar y la fecha indicados.",
    ],
    canal: "Campañas comunicadas por el área de Personas – Recursos Humanos.",
    consultas: "Área de Personas – Bienestar.",
    nota: "Las prestaciones de salud respetan la confidencialidad de tus antecedentes médicos.",
    fuente: "Reporte de Sostenibilidad 2025 – Falabella Retail.",
  },
  {
    id: "conciliacion",
    nombre: "Conciliación trabajo y vida personal",
    categoria: "familia",
    icono: "scale",
    estado: "publicado",
    resumen: "Días Beneflex, permisos especiales, postnatal extendido y flexibilidad laboral.",
    descripcion:
      "Medidas que buscan favorecer el equilibrio entre las responsabilidades laborales, familiares y personales de los trabajadores.",
    cobertura: [
      "Días libres Beneflex.",
      "Permisos para ocasiones especiales.",
      "Postnatal extendido.",
      "Programa de flexibilidad laboral.",
      "Modalidades de jornada y horarios flexibles.",
      "Teletrabajo, según la naturaleza de las funciones.",
    ],
    quienes: [
      "Trabajadores de Falabella Retail, según las condiciones de cada beneficio y la naturaleza de sus funciones.",
    ],
    requisitos: [
      "Mantener una relación laboral vigente.",
      "Revisar si tu cargo y funciones permiten la modalidad que solicitas.",
      "Presentar la solicitud a tu jefatura o al área de Personas, cuando corresponda.",
      "Cumplir las condiciones de autorización y organización de la jornada.",
      "Permisos especiales o postnatal extendido: acreditar la situación según el procedimiento interno.",
    ],
    datos: {
      desde: "Según la condición de elegibilidad y la aprobación del beneficio.",
      duracion: "Depende de cada modalidad, permiso o política interna. No se publica una cantidad única de días Beneflex.",
      horario: "Según la jornada autorizada y las necesidades de operación.",
      costo: "Sin costo directo para el trabajador.",
    },
    pasos: [
      "Revisa las políticas internas vigentes.",
      "Conversa con tu jefatura directa o con el área de Personas.",
      "Presenta tu solicitud y espera su aprobación.",
    ],
    canal: "Jefatura directa o área de Personas.",
    consultas: "Área de Personas – Bienestar.",
    fuente: "Reporte de Sostenibilidad 2025 – Falabella Retail.",
  },
];

/* Campos de cada ficha (punto 4 del informe, página 4). "datos" se muestra como bloque de datos clave. */
const CAMPOS_FICHA = [
  { key: "descripcion", label: "Descripción", ayuda: "En qué consiste" },
  { key: "cobertura", label: "Cobertura", ayuda: "Qué incluye" },
  { key: "quienes", label: "¿Quiénes pueden acceder?", ayuda: "Público beneficiario" },
  { key: "requisitos", label: "Requisitos", ayuda: "Condiciones para utilizarlo" },
  { key: "datos", label: "Vigencia y condiciones", ayuda: "Desde cuándo, duración, horario y costo" },
  { key: "pasos", label: "¿Cómo acceder?", ayuda: "Pasos para solicitarlo" },
  { key: "canal", label: "¿Dónde solicitarlo?", ayuda: "Canal de acceso" },
  { key: "consultas", label: "Consultas", ayuda: "Contacto de orientación" },
  { key: "nota", label: "Importante", ayuda: "Ten en cuenta" },
  { key: "fuente", label: "Fuente", ayuda: "Origen de la información" },
];

const DATOS_LABELS = { desde: "Desde cuándo", duracion: "Duración", horario: "Horario", costo: "Costo" };

/* Condiciones generales de acceso (comunes a todos los beneficios). */
const CONDICIONES_GENERALES = [
  "Los beneficios están dirigidos a los trabajadores de Falabella Retail contemplados en el caso académico.",
  "La extensión a familiares depende de las condiciones específicas de cada convenio.",
  "Los beneficios se usan respetando sus requisitos de inscripción y acceso.",
  "Los convenios comerciales pueden cambiar sus descuentos y condiciones.",
  "Las prestaciones de salud respetan la confidencialidad de los antecedentes médicos.",
  "Las solicitudes y consultas se realizan por los canales habilitados por Recursos Humanos.",
];

/* Novedades: ejemplos demostrativos del plan de comunicación (punto 9, página 9). */
const NOVEDADES = [
  {
    tipo: "Beneficio del mes",
    titulo: "Este mes destacamos: Programa Comunícate",
    texto: "Apoyo psicológico gratuito y confidencial para ti y tu familia, de lunes a viernes de 09:00 a 18:00.",
    beneficio: "psicologica",
  },
  {
    tipo: "Recordatorio quincenal",
    titulo: "Telemedicina ilimitada",
    texto: "Recuerda que puedes acceder a medicina general, nutrición, pediatría y más especialidades a distancia.",
    beneficio: "telemedicina",
  },
  {
    tipo: "Campañas de salud",
    titulo: "Mamografías gratuitas para colaboradoras",
    texto: "Revisa las campañas preventivas y de vacunación que se informan durante el año.",
    beneficio: "autocuidado",
  },
  {
    tipo: "Convenios",
    titulo: "Descuentos para ti y tu familia",
    texto: "Cines, parques, hoteles, telefonía y más: revisa las condiciones y la vigencia de cada convenio.",
    beneficio: "descuentos",
  },
];

const FAQ = [
  {
    p: "¿Dónde puedo revisar todos los beneficios?",
    r: "En la sección Mis beneficios de este portal está el catálogo completo. Cada beneficio tiene una ficha con su descripción, cobertura, requisitos, condiciones y forma de acceso.",
  },
  {
    p: "¿Quiénes pueden utilizar los beneficios?",
    r: "Los trabajadores de Falabella Retail. Cada ficha indica quiénes pueden acceder; algunos beneficios también incluyen a familiares según las condiciones de cada convenio.",
  },
  {
    p: "¿Cómo conozco los requisitos?",
    r: "Abre la ficha del beneficio y revisa los campos Requisitos y Vigencia y condiciones. Si tienes dudas sobre tu caso particular, contacta al área de Personas – Bienestar.",
  },
  {
    p: "¿Los beneficios incluyen a mi familia?",
    r: "Depende del beneficio. Por ejemplo, el Programa Comunícate incluye a cónyuges, parejas, hijos e hijas mayores de 18 años y a padre y madre. En telemedicina y convenios, la cobertura familiar depende de cada convenio y no es automática.",
  },
  {
    p: "¿Tienen costo los beneficios?",
    r: "Algunos son gratuitos, como el Programa Comunícate y las mamografías para colaboradoras. Otros, como los convenios comerciales y deportivos, entregan descuentos o tarifas preferenciales. El costo se indica en cada ficha.",
  },
  {
    p: "¿Cómo puedo solicitar orientación?",
    r: "Puedes acudir al área de Personas – Bienestar o usar la sección Contáctanos de este portal para dejar tu consulta.",
  },
  {
    p: "¿Dónde puedo consultar si tengo problemas para acceder?",
    r: "Para convenios y descuentos, la Mesa de Servicios para Beneficios Falabella. Para los demás beneficios, el área de Personas – Bienestar o tu jefatura directa.",
  },
  {
    p: "¿Cómo puedo conocer nuevos beneficios y convenios?",
    r: "Revisa la sección Novedades. Ahí se publican nuevos convenios, cambios de requisitos o cobertura, fechas de inscripción y campañas de bienestar.",
  },
];
