export interface Speaker {
  name: string;
  affiliation: string;
  role?: string;
  isMain?: boolean;
}

export interface PanelSession {
  id: string;
  day: string;
  dateStr: string;
  time: string;
  room: string;
  type: 'PANEL' | 'CONFERENCIA DE APERTURA' | 'CONVERSATORIO' | 'PRESENTACIÓN DE LIBRO';
  title: string;
  description?: string;
  speakers: Speaker[];
  moderator?: string;
  presenter?: string;
  isFeatured?: boolean;
}

export const MAIN_SPEAKER = {
  name: 'Gustavo Núñez',
  title: 'Servicio de Resguardo Patrimonial (SRP)',
  institution: 'Universidad Nacional de Rosario (UNR)',
  email: 'gustavo@gdnunez.com',
  bio: 'Especialista en modernización y gestión operativa del Servicio de Resguardo Patrimonial de la UNR. Lideró el desarrollo e implementación del modelo de transformación digital con IA agéntica, arquitectura de datos relacionales y firma digital para el predio de la Ciudad Universitaria de Rosario.',
  paperTitle: 'Transformación Digital del Servicio de Resguardo Patrimonial: De un modelo reactivo analógico hacia un paradigma predictivo impulsado por IA y datos',
  abstract: `Frente a la clásica Paradoja de la Productividad de Solow y las inercias burocráticas del siglo XIX que aún persisten en las administraciones públicas, este trabajo expone la experiencia empírica de transformación integral del Servicio de Resguardo Patrimonial en la Universidad Nacional de Rosario. A través de la utilización de Inteligencia Artificial Agéntica como multiplicador de fuerzas, un equipo operativo interno de solo tres personas —bajo severas restricciones presupuestarias y sin licencias privativas millonarias— diseñó e implementó el Sistema Operativo Digital SRP (SGD-SRP) y la plataforma Gestión SRP. El modelo transitó de libros de actas de papel y rondas por intuición a un paradigma predictivo con analítica territorial en tiempo real sobre 15 edificios del CUR, respaldado por Firma Digital (Ley 25.506), cifrado robusto e interoperabilidad abierta.`
};

export const CONGRESS_INFO = {
  edition: 'XVII Congreso Nacional y X Internacional sobre Democracia',
  symposium: 'VII Simposio de Administración Pública',
  motto: 'Del expediente al ALGORITMO: mutaciones del Estado en la era exponencial',
  dates: '3, 4 y 5 de noviembre de 2026',
  location: 'Facultad de Ciencia Política y RRII – UNR (Aulas 4 y 5, Aulario)',
  city: 'Rosario, Santa Fe, Argentina',
  address: 'Beruti y Riobamba (La Siberia), Ciudad Universitaria de Rosario',
  organizers: [
    { name: 'INPAE', label: 'Inter-American Network for Public Administration Education' },
    { name: 'aaeap', label: 'Asociación Argentina de Estudios de Administración Pública' },
    { name: 'Política & Gestión', label: 'Centro de Investigaciones Política y Gestión' },
    { name: 'PoliLab UNR', label: 'Laboratorio de Innovación Política de la UNR' },
    { name: 'Cátedras UNR', label: 'Análisis de Políticas Públicas; Análisis, Diseño y Gestión de Organizaciones Públicas' }
  ]
};

export const CONGRESS_PROGRAM: PanelSession[] = [
  // Martes 3/11
  {
    id: 'tue-1800',
    day: 'Martes 3/11',
    dateStr: '2026-11-03',
    time: '18:00 h',
    room: 'Aula 4 | Aulario',
    type: 'CONFERENCIA DE APERTURA',
    title: 'Formulación e implementación de políticas públicas en tiempos de IA: el rol orquestador del Estado',
    speakers: [{ name: 'Oscar Oszlak', affiliation: 'CEDES / UBA' }],
    presenter: 'Rita Grandinetti',
    description: 'Conferencia inaugural sobre las mutaciones del aparato estatal y los nuevos desafíos de gobernanza en la era exponencial.'
  },

  // Miércoles 4/11
  {
    id: 'wed-0900',
    day: 'Miércoles 4/11',
    dateStr: '2026-11-04',
    time: '09:00 h',
    room: 'Aula 5 | Aulario',
    type: 'PANEL',
    title: 'Federalismo digital: nuevos esquemas de gobernanza de datos y tecnología a partir de las experiencias subnacionales',
    speakers: [
      { name: 'Horacio Cao', affiliation: 'UBA' },
      { name: 'Mario Adaro', affiliation: 'Corte de Justicia de Mendoza' },
      { name: 'Natalia Galano', affiliation: 'UNR – Provincia de Santa Fe' }
    ],
    moderator: 'Guillermina Curti (UNR)'
  },
  {
    id: 'wed-1100',
    day: 'Miércoles 4/11',
    dateStr: '2026-11-04',
    time: '11:00 h',
    room: 'Aula 5 | Aulario',
    type: 'PANEL',
    title: 'Tecnologías, inteligencias y capacidades para el siglo XXI',
    speakers: [
      { name: 'Diego Pando', affiliation: 'AAEAP – UdeSA' },
      { name: 'Agustina Gradin', affiliation: 'FLACSO' },
      { name: 'Daniel Comba', affiliation: 'UNL' },
      { name: 'María Julia Reyna', affiliation: 'UNR' },
      { name: 'Rita Grandinetti', affiliation: 'PoliLab – UNR' }
    ],
    moderator: 'María Paz Gutiérrez (UNR)'
  },
  {
    id: 'wed-1400',
    day: 'Miércoles 4/11',
    dateStr: '2026-11-04',
    time: '14:00 h',
    room: 'Aula 5 | Aulario',
    type: 'PANEL',
    title: 'Gobernanza de la Inteligencia Artificial en Gobiernos Subnacionales Argentinos',
    speakers: [
      { name: 'Mauro Solano', affiliation: 'UNSAM' },
      { name: 'Amalia Peralta', affiliation: 'FederIA' },
      { name: 'Patricio Feldman', affiliation: 'UBA' },
      { name: 'Juan Martín Atencio', affiliation: 'Provincia de Santa Fe' },
      { name: 'Ana Carina Rodríguez', affiliation: 'Municipalidad de Escobar' }
    ],
    moderator: 'Natalia Carnovale (UNR)'
  },
  {
    id: 'wed-1600-featured',
    day: 'Miércoles 4/11',
    dateStr: '2026-11-04',
    time: '16:00 h',
    room: 'Aula 5 | Aulario',
    type: 'PANEL',
    title: 'Usos de la Inteligencia Artificial en la Administración Pública',
    isFeatured: true,
    description: 'Mesa central de debate sobre experiencias aplicadas en la gestión universitaria y gubernamental. Incluye la ponencia de Gustavo Núñez sobre la Transformación Digital del Servicio de Resguardo Patrimonial (SRP) en la UNR.',
    speakers: [
      { name: 'Mariana Sanchez Caparrós', affiliation: 'IALAB – UBA' },
      { name: 'Julia Davalle y Octavio Romano', affiliation: 'Provincia de Santa Fe' },
      { name: 'Gabriela Leys', affiliation: 'Municipalidad de Rosario' },
      { name: 'Gustavo Núñez', affiliation: 'Universidad Nacional de Rosario (UNR)', isMain: true }
    ],
    moderator: 'Natalia Galano (UNR)'
  },
  {
    id: 'wed-1800',
    day: 'Miércoles 4/11',
    dateStr: '2026-11-04',
    time: '18:00 h',
    room: 'Aula 5 | Aulario',
    type: 'PRESENTACIÓN DE LIBRO',
    title: 'Manual de Administración Pública Argentina: nación, provincia y municipios',
    speakers: [
      { name: 'Horacio Cao', affiliation: 'UBA' },
      { name: 'Valeria Serafinoff', affiliation: 'UBA' },
      { name: 'Juan Abal Medina', affiliation: 'UBA' },
      { name: 'Rita Grandinetti', affiliation: 'UNR' }
    ],
    moderator: 'Patricia Nari (UNR)'
  },

  // Jueves 5/11
  {
    id: 'thu-0900',
    day: 'Jueves 5/11',
    dateStr: '2026-11-05',
    time: '09:00 h',
    room: 'Aula 5 | Aulario',
    type: 'PANEL',
    title: 'Políticas públicas comparadas',
    speakers: [
      { name: 'Pablo Bulcourf', affiliation: 'UBA – UNQ' },
      { name: 'Nelson Cardozo', affiliation: 'UBA – UADE' },
      { name: 'Eduardo José Grin', affiliation: 'Fundación Getulio Vargas' },
      { name: 'Daiana Rodríguez', affiliation: 'UNR' }
    ],
    moderator: 'Patricia Nari (UNR)'
  },
  {
    id: 'thu-1100',
    day: 'Jueves 5/11',
    dateStr: '2026-11-05',
    time: '11:00 h',
    room: 'Aula 5 | Aulario',
    type: 'CONVERSATORIO',
    title: 'Debates sobre la formación en Administración Pública en la era exponencial',
    speakers: [
      { name: 'Gustavo Dufour', affiliation: 'SAAP' },
      { name: 'María Julia Reyna', affiliation: 'UNR' },
      { name: 'Gastón Mutti', affiliation: 'UNR' },
      { name: 'Romina Trincheri', affiliation: 'UNR' },
      { name: 'Rita Grandinetti', affiliation: 'UNR' }
    ],
    moderator: 'Natalia Carnovale y Natalia Galano (UNR)'
  },
  {
    id: 'thu-1400',
    day: 'Jueves 5/11',
    dateStr: '2026-11-05',
    time: '14:00 h',
    room: 'Aula 5 | Aulario',
    type: 'PANEL',
    title: 'Formación pública para Estados en transición. Experiencias de gobiernos subnacionales argentinos',
    speakers: [
      { name: 'Andrés Weskamp', affiliation: 'Escuela Federal de Desarrollo – CFI' },
      { name: 'Mariela Vaudagna', affiliation: 'Provincia de Santa Fe' },
      { name: 'Margarita Norman', affiliation: 'Crecer Capacita – Provincia de Santa Fe' },
      { name: 'Guillermina Curti', affiliation: 'UNR – Provincia de Santa Fe' }
    ],
    moderator: 'María Paz Gutiérrez (Provincia de Santa Fe)'
  },
  {
    id: 'thu-1600',
    day: 'Jueves 5/11',
    dateStr: '2026-11-05',
    time: '16:00 h',
    room: 'Aula 5 | Aulario',
    type: 'CONVERSATORIO',
    title: 'Diálogo Abierto de los Centros de Estudios',
    speakers: [
      { name: 'Centro de Investigaciones PoliLab', affiliation: 'UNR' },
      { name: 'Laboratorio de Innovación de Políticas', affiliation: 'UNR' },
      { name: 'Centro de Investigaciones Política y Gestión', affiliation: 'UNR' },
      { name: 'Grupo de Estudio Estado y Políticas Públicas en Sociedades Digitales', affiliation: 'UNR' },
      { name: 'Grupo de Estudio en Gestión de la Calidad, Evaluación y Mejora Continua', affiliation: 'UNR' }
    ],
    moderator: 'Exequiel Rodríguez (PoliLab – UNR)'
  }
];

export const IMPACT_METRICS = [
  {
    metric: '-80%',
    label: 'Tiempo de Respuesta',
    detail: 'Atención e intervención inmediata ante incidentes y anomalías en el predio.',
    icon: 'Timer'
  },
  {
    metric: '-90%',
    label: 'Tiempos de Auditoría',
    detail: 'Fiscalización y auditoría inmediata y precisa con registros inmutables.',
    icon: 'ShieldCheck'
  },
  {
    metric: '-35%',
    label: 'Reducción de Delitos',
    detail: 'Descenso sustancial de hechos vandálicos y sustracciones en la Ciudad Universitaria.',
    icon: 'TrendingDown'
  },
  {
    metric: '100%',
    label: 'Trazabilidad Total',
    detail: 'Cero extravíos de datos o actas gracias a la firma digital y validación probatoria.',
    icon: 'FileCheck'
  },
  {
    metric: '15',
    label: 'Edificios Monitoreados',
    detail: 'Cobertura integral del campus universitario La Siberia (CUR).',
    icon: 'Building2'
  },
  {
    metric: '+1.000',
    label: 'Comunidad Diaria',
    detail: 'Docentes, no docentes y estudiantes protegidos diariamente por el servicio.',
    icon: 'Users'
  }
];

export const SYSTEM_PILLARS = [
  {
    number: '01',
    title: 'Seguridad Jurídica y Validez Probatoria',
    subtitle: 'Cumplimiento estricto de la Ley Nacional 25.506 de Firma Digital',
    description: 'Cada informe, acta y novedad operativa posee plena fuerza jurídica equiparable al papel manuscrito, con auditoría criptográfica inmutable que impide cualquier manipulación a espaldas de la institución.',
    features: ['Firma Digital reglamentada', 'Logs de auditoría inmutables', 'Validez legal probatoria plena']
  },
  {
    number: '02',
    title: 'Ciberseguridad Robusta y Privacidad',
    subtitle: 'Estándares de cifrado TLS 1.3 y AES-256 en reposo',
    description: 'Blindaje estricto de información sensible y legajos del personal. Se implementaron esquemas de Control de Acceso Basado en Roles (RBAC) para garantizar que cada agente solo acceda a lo estrictamente necesario.',
    features: ['Cifrado TLS 1.3 en tránsito', 'Cifrado AES-256 en reposo', 'Control de acceso granular RBAC']
  },
  {
    number: '03',
    title: 'Interoperabilidad y Soberanía Tecnológica',
    subtitle: 'Integración nativa con sistemas públicos (Sudocu) y código propio',
    description: 'Se priorizó la no-dependencia de licencias privativas multimillonarias extranjeras. La arquitectura dialoga con el ecosistema informático del Estado nacional, demostrando que innovar es tender puentes y no generar islas aisladas.',
    features: ['Diálogo nativo con Sudocu', 'Sin costos de licencias privativas', 'Matriz transferible a municipios y entes públicos']
  }
];

export const ARCHITECTURE_LAYERS = [
  {
    layer: 'Capa 1',
    name: 'Digitalización Documental y Gestión SRP',
    subtitle: 'Del papel y las planillas dispersas a la automatización documental',
    description: 'Gestión inteligente de legajos, novedades, licencias y certificados. Mediante modelos de IA se procesan automáticamente documentos PDF complejos (ej. certificados de antecedentes penales y reincidencia), extrayendo datos esenciales y disparando alertas preventivas de vencimiento en segundos.',
    benefits: ['Extracción algorítmica de PDFs', 'Alertas preventivas de caducidad', 'Cero margen de error humano']
  },
  {
    layer: 'Capa 2',
    name: 'Infraestructura, Sensores y Operación en Territorio',
    subtitle: 'SGD-SRP en dispositivos móviles para guardias 24/7',
    description: 'La aplicación móvil del Servicio de Resguardo Patrimonial permite el registro geolocalizado en tiempo real de cada suceso a lo largo de los 15 edificios de la Ciudad Universitaria de Rosario, conectando alarmas, accesos y comunicaciones en una nube privada segura.',
    benefits: ['Registro móvil en territorio', 'Asistencia y recorridos geolocalizados', 'Respaldo inmutable 24/7']
  },
  {
    layer: 'Capa 3',
    name: 'Inteligencia Artificial y Analítica Predictiva',
    subtitle: 'De la reacción analógica a la asignación de recursos basada en evidencia',
    description: 'Estructuración de datos relacionales en PostgreSQL y generación automática de mapas espaciotemporales de calor y riesgo. El sistema identifica qué franjas horarias y accesos tienen mayor vulnerabilidad para reasignar turnos y patrullajes de forma preventiva y científica.',
    benefits: ['Mapas espaciotemporales de calor', 'Detección de patrones de riesgo', 'Distribución objetiva de guardias']
  }
];
