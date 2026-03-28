export default {
  // === Datos de contacto (centralizados) ===
  contact: {
    phone: '681 105 234',
    phoneIntl: '+34 681 105 234',
    phoneLink: 'tel:+34681105234',
    whatsappUrl: 'https://wa.me/34681105234?text=Hola%2C%20me%20gustar%C3%ADa%20pedir%20informaci%C3%B3n%20sobre%20mi%20piscina',
    email: 'jorge.salclor@gmail.com',
    formEndpoint: 'https://formsubmit.co/ajax/jorge.salclor@gmail.com',
    location: 'Comunidad de Madrid',
    schedule: 'Lunes a viernes · 9h a 21h',
  },

  // === SEO / Layout ===
  seo: {
    title: 'Salclor SL | Especialistas en Cloración Salina · Comunidad de Madrid',
    description: 'Los inventores de la cloración salina en España. Instalación, mantenimiento y reparación de piscinas en la Comunidad de Madrid desde 1991. Más de 1.000 instalaciones. Pide presupuesto.',
    keywords: 'cloración salina Comunidad de Madrid, clorador salino instalación, mantenimiento piscinas Madrid, empresa piscinas Comunidad de Madrid',
    ogDescription: 'Los inventores de la cloración salina en España. Más de 1.000 instalaciones en la Comunidad de Madrid desde 1991.',
  },

  // === Header ===
  header: {
    brand: 'SALCLOR',
    ctaWhatsapp: 'Pide presupuesto',
    ctaWhatsappMobile: 'Pide presupuesto por WhatsApp',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    nav: [
      { href: '#inicio', label: 'Inicio' },
      { href: '#solucion', label: 'Cloración salina' },
      { href: '#porque', label: 'Por qué Salclor' },
      { href: '#servicios', label: 'Servicios' },
      { href: '#proceso', label: 'Cómo trabajamos' },
      { href: '#historia', label: 'Nuestra historia' },
      { href: '#contacto', label: 'Contacto' },
    ],
  },

  // === Hero ===
  hero: {
    imgAlt: 'Piscina con agua cristalina y familia disfrutando',
    title: 'Tu piscina sin cloro tóxico, sin picores y sin complicaciones.',
    subtitle: 'Los inventores de la cloración salina en España. Más de 1.000 instalaciones en la Comunidad de Madrid desde 1991.',
    cta: 'Pide tu presupuesto por WhatsApp',
    trust: [
      'Titulares de la patente original',
      'Fabricantes',
      '+35 años de experiencia',
      '+1.000 instalaciones',
    ],
  },

  // === Problem ===
  problem: {
    title: '¿Disfrutas de verdad tu piscina?',
    description: 'Si el mantenimiento te roba tiempo cada semana, a tus hijos les pica la piel o los ojos después de bañarse, el agua huele a cloro incluso recién tratada, o la piscina no está lista cuando quieres usarla... no es normal. Y tiene solución.',
    punchline: 'El problema no eres tú. Es el sistema de cloración.',
    symptoms: [
      { title: 'Piel irritada', desc: 'Picores y rojeces después de cada baño' },
      { title: 'Ojos rojos', desc: 'Escozor que arruina el momento' },
      { title: 'Mantenimiento caro', desc: 'Tiempo y dinero en productos químicos' },
      { title: 'Olor a cloro', desc: 'Ese olor fuerte que no desaparece' },
    ],
  },

  // === Solution ===
  solution: {
    title: 'La cloración salina: agua limpia sin química agresiva',
    description: 'Un sistema de cloración salina no añade cloro comprado a tu piscina. En su lugar, genera el desinfectante de forma natural directamente en el agua a partir de sal. Sin productos tóxicos añadidos. Sin bidones. Sin manipulación de químicos.',
    description2: 'El resultado es agua suave al tacto, sin olor fuerte, sin irritaciones. Los niños con piel atópica pueden bañarse tranquilamente. Los ojos no escuecen. El pelo no se estropea.',
    punchline: 'Y el mantenimiento es mucho más sencillo que con el cloro tradicional.',
    traditionalTitle: 'Cloración tradicional',
    salineTitle: 'Cloración salina Salclor',
    traditional: [
      'Cloro químico comprado y manipulado',
      'Olor fuerte y persistente',
      'Irritación en piel, ojos y pelo',
      'Mantenimiento frecuente y costoso',
      'Bidones de productos tóxicos',
    ],
    saline: [
      'Desinfectante generado naturalmente a partir de sal',
      'Sin olor fuerte',
      'Agua suave, sin irritaciones',
      'Mantenimiento mucho más sencillo',
      'Sin bidones ni productos químicos',
    ],
  },

  // === Why Salclor ===
  whySalclor: {
    title: 'No aprendimos esto en un curso. Lo inventamos.',
    pillars: [
      {
        title: 'Los inventores y fabricantes',
        text: 'Salclor SL es titular de la primera patente de clorador salino en España. Somos fabricantes, no distribuidores. También contamos con patentes de clorador antialgas y de eficiencia del circuito. Antes de que este sistema tuviera nombre, ya teníamos piscinas funcionando.',
      },
      {
        title: 'Capacidad resolutiva',
        text: 'Resolvemos lo que otras empresas no saben. Desde recuperar agua en mal estado hasta tratar agua de pozo con alta dureza. Si tienes un problema que nadie ha sabido solucionar, lo más probable es que nosotros ya lo hayamos visto antes.',
      },
      {
        title: 'Calidad que dura',
        text: 'Nuestros equipos están certificados y están fabricados para durar. Más de 1.000 instalaciones en la Comunidad de Madrid desde 1991 lo avalan. Ofrecemos garantía en materiales e instalación en todos nuestros trabajos.',
      },
    ],
  },

  // === Testimonials ===
  testimonials: {
    title: 'Lo que dicen nuestros clientes',
    items: [
      { text: 'Gracias a vosotros mis hijos con piel atópica pueden bañarse todo el tiempo que quieran.', author: 'Laura M.', location: 'Las Rozas' },
      { text: 'Ya no me pican los ojos cuando buceo. Antes era impensable.', author: 'Carlos G.', location: 'Pozuelo de Alarcón' },
      { text: 'Qué gusto que mis hijos se puedan bañar sin que les salga el pelo verde.', author: 'Marta R.', location: 'Boadilla del Monte' },
      { text: 'Es un antes y un después. Un salto de calidad que merece cada euro pagado.', author: 'Javier S.', location: 'Tres Cantos' },
      { text: 'El mantenimiento ahora es mucho más sencillo. Con Salclor me despreocupo.', author: 'Ana P.', location: 'Majadahonda' },
      { text: 'Qué agradable la sensación en la piel. No tiene nada que ver con antes.', author: 'Fernando L.', location: 'Alcobendas' },
    ],
  },

  // === Services ===
  services: {
    title: 'Todo lo que necesita tu piscina, en un solo sitio',
    subtitle: 'Somos especialistas en cloración salina, pero ofrecemos el servicio completo de mantenimiento e instalación de piscinas. Todo con la misma calidad y el mismo criterio.',
    starLabel: 'Servicio estrella',
    starTitle: 'Instalación y mantenimiento de clorador salino',
    starDesc: 'Patente propia · Fabricantes · Más de 1.000 instalaciones en la Comunidad de Madrid',
    starImgAlt: 'Clorador salino iPool Superior iSC Series',
    categories: [
      {
        category: 'Depuración y filtración',
        items: [
          'Instalación, sustitución y reparación de motores depuradores',
          'Instalación y mantenimiento de cloradores salinos',
          'Cambio y mantenimiento de arenas de filtración',
          'Cambio de filtro y reparación de averías en filtro',
        ],
      },
      {
        category: 'Tratamiento del agua',
        items: [
          'Recuperación de agua en mal estado',
          'Tratamiento de aguas duras (agua de pozo)',
        ],
      },
      {
        category: 'Vaso de la piscina',
        items: [
          'Impermeabilización para evitar pérdidas de agua',
          'Lechadas con borada o con resina epóxida',
          'Pegado de gresite caído en todo tipo de condiciones',
          'Cambio de revestimientos: gresite, porcelánico, resina de poliéster',
          'Reparación y sustitución de piedras de coronación',
          'Escaleras de obra a medida (tamaño y forma según el cliente)',
        ],
      },
      {
        category: 'Detección y reparación de fugas',
        items: ['Estudio, localización y solución de fugas en la piscina'],
      },
      {
        category: 'Confort y temperatura',
        items: [
          'Instalación de bombas de calor',
          'Instalación de paneles solares pasivos',
          'Lonas y mantas térmicas',
          'Duchas exteriores (normales y solares)',
        ],
      },
      {
        category: 'Limpieza',
        items: ['Limpiafondos: clásico, automático y autónomo'],
      },
      {
        category: 'Área exterior',
        items: ['Instalación de trampolines y toboganes'],
      },
      {
        category: 'Construcción y reconstrucción',
        items: [
          'Construcción de piscinas desde cero',
          'Reconstrucción y renovación de piscinas existentes',
        ],
      },
      {
        category: 'Mantenimiento',
        items: [
          'Mantenimiento integral',
          'Mantenimiento por temporada',
          'Visitas puntuales',
        ],
      },
    ],
  },

  // === Process ===
  process: {
    title: 'Así de sencillo es empezar',
    subtitle: 'De la primera llamada a recibir tu presupuesto, en 4 pasos.',
    stepLabel: 'Paso',
    steps: [
      {
        title: 'Nos contactas',
        desc: 'Por WhatsApp o teléfono. Disponibles de 9h a 21h, de lunes a viernes.',
      },
      {
        title: 'Llamada telefónica',
        desc: 'Hablamos contigo para entender tu situación antes de visitarte.',
      },
      {
        title: 'Visita in situ',
        desc: 'Estudiamos tu piscina en persona. El coste de la visita se descuenta del presupuesto si seguimos adelante.',
      },
      {
        title: 'Presupuesto sin compromiso',
        desc: 'Lo recibes en 2 a 4 días laborables según la época del año.',
      },
    ],
  },

  // === History ===
  history: {
    title: 'Lo inventamos nosotros. Y seguimos siendo los mejores.',
    patentAlt: 'Documento original de la patente de clorador salino - Registro de la Propiedad Industrial, 1991',
    paragraphs: [
      'Salclor SL lleva desde 1991 haciendo lo que hoy muchos intentan copiar. Fuimos los primeros en instalar un sistema de cloración salina en España: tenemos piscinas funcionando desde tres años antes de que registráramos la patente.',
      'Somos fabricantes, no distribuidores. Titulares de la primera patente de clorador salino, la patente de clorador antialgas y la patente de eficiencia del circuito. No aprendimos esto de un proveedor. Lo desarrollamos nosotros.',
      'Más de 35 años después, seguimos siendo los que más saben. Si tienes un problema con tu piscina que otros no han sabido resolver, es muy probable que nosotros ya lo hayamos visto antes.',
    ],
    stats: [
      { value: '1991', label: 'Fundación' },
      { value: '+35 años', label: 'Experiencia' },
      { value: '+1.000', label: 'Instalaciones' },
      { value: '3 patentes', label: 'Propias' },
    ],
  },

  // === Contact ===
  contactSection: {
    title: '¿Hablamos de tu piscina?',
    subtitle: 'Pide tu presupuesto sin compromiso. Respondemos de lunes a viernes de 9h a 21h.',
    ctaWhatsapp: 'Escríbenos por WhatsApp',
    serviceArea: 'Servicio en toda la Comunidad de Madrid',
    form: {
      nameLabel: 'Nombre',
      namePlaceholder: 'Tu nombre',
      phoneLabel: 'Teléfono',
      phonePlaceholder: 'Tu teléfono',
      messageLabel: 'Mensaje',
      messageOptional: '(opcional)',
      messagePlaceholder: 'Cuéntanos brevemente qué necesitas',
      submit: 'Enviar',
      success: 'Gracias, te llamamos en menos de 24h.',
    },
  },

  // === Footer ===
  footer: {
    tagline: 'Los inventores de la cloración salina · Desde 1991',
    rights: 'Salclor SL. Todos los derechos reservados.',
    location: 'Madrid, España',
  },

  // === WhatsApp Button ===
  whatsappButton: {
    ariaLabel: 'Contactar por WhatsApp',
  },

  // === Cookies ===
  cookies: {
    message: 'Utilizamos cookies técnicas para el funcionamiento del sitio y fuentes externas de Google. Consulta nuestra',
    link: 'política de privacidad',
    accept: 'Aceptar',
    reject: 'Rechazar',
  },

  // === Legal ===
  legal: {
    title: 'Aviso Legal',
    company: 'Salclor SL',
    address: 'Madrid, España',
  },

  // === Privacy ===
  privacy: {
    title: 'Política de Privacidad',
  },
} as const;
