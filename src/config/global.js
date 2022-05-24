export default {
  global: {
    componenteFormativo:
      'Informática y digitalización en el proceso de preselección de candidatos',
    descripcionCurso:
      'En la actualidad, las herramientas ofimáticas, informáticas y digitales se usan para todas las gestiones dentro de una organización, por eso en el presente componente formativo, el aprendiz conocerá cómo aplicarlas en su formación en el área de talento humano y sacar el mayor provecho en su gestión diaria.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Herramientas informáticas y digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Descripción y funcionalidad',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas ofimáticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Descripción y funcionalidad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Protocolos y manuales técnicos de la informática',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Políticas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Taxonomía y contenido del manual',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Aplicabilidad informática y digital en el proceso de preselección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Formularios en línea',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Hoja de cálculo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Gestión de base de datos',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Redes sociales',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Registro de hojas de vida electrónicas',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto: 'Tecnología secundaria. (2020). Las herramientas informáticas. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YBcuyAc1Ph8',
    },
    {
      texto:
        'New Code. (2020). Herramientas ofimáticas – capacitación TIC básico. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=x9lJiQQZmI8',
    },
    {
      texto:
        'Every TI - Cybersecurity. (2020). Políticas de seguridad de la información.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LuMUo_E5FjI',
    },
    {
      texto:
        'Acsendo. (2019). Software de recursos humanos: 5 razones para usarlo en tu empresa.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SbYmtPtbxVI',
    },
  ],
  glosario: [
    {
      termino: 'Administración de base de datos relacional',
      significado:
        'técnica de administración de bases de datos en la que la información se guarda en tablas de datos bidimensionales. El programa que funciona con dos tablas de datos al mismo tiempo, relaciona la información mediante vinculaciones establecidas por una columna o campos comunes.',
    },
    {
      termino: 'Columna',
      significado:
        'conjunto de todos los renglones de una tabla que tienen un atributo común. Contiene un dato individual dentro de cada renglón o registro.',
    },
    {
      termino: 'Datos estadísticos',
      significado:
        'almacenan información estadística sobre los datos en la base de datos.',
    },
    {
      termino: 'DBMS',
      significado:
        'conjunto de programas que se encargan de manejar la creación y todos los accesos a las bases de datos.',
    },
    {
      termino: 'Facilidad de consultas',
      significado:
        'permite al usuario hacer cuestiones sencillas a la base de datos. Este tipo de consultas tienen como misión proporcionar la información solicitada por el usuario de una forma correcta y rápida.',
    },
    {
      termino: 'Llave',
      significado:
        'uno o más campos usados para identificar un registro, frecuentemente se utiliza como índice de una tabla.',
    },
    {
      termino: 'Llave primaria',
      significado:
        'columna o combinación de columnas que identifican de manera única una tabla. Siempre deben ser diferentes de “nulo” y tener un índice único. Una llave primaria se usa para relacionarse con llaves foráneas en otras tablas.',
    },
    {
      termino: 'Motor de búsqueda o buscador',
      significado:
        'sistema informático que busca archivos almacenados en servidores web gracias a su araña web. Un ejemplo son los buscadores de Internet (algunos buscan únicamente en la web, pero otros lo hacen además en noticias, servicios como Gopher, FTP, etc.) cuando se pide información sobre algún tema. Las búsquedas se hacen con palabras clave o con árboles jerárquicos por temas; el resultado de la búsqueda «página de resultados del buscador» es un listado de direcciones web en los que se mencionan temas relacionados con las palabras clave buscadas.',
    },
    {
      termino: 'Navegadores web',
      significado:
        'simplemente navegador, o explorador web o simplemente explorador, es un programa informático que permite al usuario ingresar a las páginas web que desee, siempre que conozca la dirección URL en donde se encuentra (por ejemplo: www.google.com) o bien que haga clic en un hipervínculo que conduzca a dicha página.',
    },
    {
      termino: 'Plataformas tecnológicas',
      significado:
        'estructuras público-privadas de trabajo en equipo lideradas por la industria, en las que todos los agentes del sistema español de ciencia-tecnología-innovación interesados en un campo tecnológico trabajan conjunta y coordinadamente para identificar y priorizar las necesidades tecnológicas.',
    },
  ],
  referencias: [
    {
      referencia: 'Aula Clic. (s. f.). (2014). Curso de Access 2010.  ',
      link: 'http://www.aulaclic.es/access-2010/index.htm',
    },
    {
      referencia:
        'Gálvez, I. (s.f.). (2014). Programa técnico sistemas - Access. ',
      link: 'http://sistemastics2013.blogspot.com.co/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección general',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diego Villalobos Barreto',
        cargo: 'Experto Temático',
        centro: 'Cgi - Sena Distrito Capital Grupo de Apoyo Administrativo ',
      },
      {
        nombre: 'Gloria Alexandra Orejarena Barrios',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distro Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Eugenia Mejía Lopez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramírez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
