<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Herramientas informáticas y digitales
    .franja-degradado.mb-5
      .row.mb-justify-content-center
        .col-lg-7
          p Las herramientas informáticas y digitales se usan a diario tanto en la vida cotidiana como en la laboral, al utilizar aplicaciones como alternativas para el desarrollo de las actividades.
          .d-flex.align-items-center.justify-content-center
            img(src="@/assets/curso/temas/0.svg" style="width: 84px").me-3.d-lg-block.d-none
            p Estas se definen como un conjunto de soluciones informáticas que se encuentran instalados o se pueden descargar en dispositivos tales como computadores, celulares, iPad, televisores inteligentes y demás dispositivos que tienen el propósito de incrementar la productividad, eficiencia y eficacia de las actividades que realiza el usuario según el fin de cada aplicación.
        .col-lg-5: img(data-aos='zoom-in-up')(src="@/assets/curso/temas/1.svg")
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Tipos
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-3.mb-lg-0: img(data-aos='zoom-in')(src="@/assets/curso/temas/2.png")
      .col-lg-8
        p Las herramientas nacen de la innovación y búsqueda de la satisfacción de necesidades que tienen las personas y empresas sin importar el sector o actividad económica, así mismo, de los clientes y el entorno en que se mueve la organización.
          br
          br
          | En este sentido, existen diferentes tipos de necesidades y tipos de herramientas informáticas y digitales en respuesta para generar soluciones, como a continuación se conocerá, para emplear en cada situación que le exija el área de talento humano y los retos profesionales o personales.
    p.text-center
      span.b--3 En la siguiente tabla se enumeran los tipos de herramientas informáticas y digitales.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones
          h5 Tabla 1.
          span Herramientas informáticas y digitales

    //todo Pendiente maquetar tabla // 

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2  Descripción y funcionalidad
    .d-flex.align-items-center.justify-content-center
      img(src="@/assets/curso/temas/3.svg" style="width: 84px").me-3.d-lg-block.d-none
      p Existen múltiples funciones atribuidas a las herramientas informática y digitales y aunque algunas de ellas presten funciones similares en los aplicativos, contienen diferencias integradas ya sea por el chat, video o grabación y mensajería entre otras.  
    p.mb-5 A continuación, se describe cada uno de los tipos de herramientas informáticas y digitales estudiadas en la Tabla 1 con su respectiva funcionalidad.
    .slyder-1.p-5.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            p.text-center.fw-bold.mb-0 Descripción y funcionalidad de las diferentes herramientas informáticas y digitales – Parte 1.  
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            p.text-center.fw-bold.mb-0 Descripción y funcionalidad de las diferentes herramientas informáticas y digitales – Parte 2  
        .row.justify-content-center.mb-5
          .col-lg-10
            figure.mb-5
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            p.text-center.fw-bold.mb-0 Descripción y funcionalidad de las diferentes herramientas informáticas y digitales – Parte 3.  
    .row.justify-content-center.mb-5
      .col-lg-7
        p Es de aclarar que algunas de las anteriores herramientas pueden ser utilizadas también en la vida cotidiana, pero para efectos de la formación, se enfocan a la empresa y área de talento humano.
        .card-icon.color-neutral.p-4
          p.mb-0 Comprendiendo la descripción y funcionalidad de cada herramienta informática y digital, se invita al aprendiz a formarse en cada una de ellas por medio de los cursos cortos que ofrece el Servicio Nacional de Aprendizaje SENA; esto con el propósito de no solo entender, sino aplicar las herramientas a diario.
          .card-icon__img
            img(src="@/assets/curso/temas/5.svg")

      .col-lg-5.col-8.mb-3.mb-lg-0: img(data-aos='zoom-in-up')(src="@/assets/curso/temas/4.png")
    p.mb-5 Ahora, se comparte un listado de las herramientas más utilizadas en las empresas con las diferentes actividades que se realizan a diario, se invita a identificar con cuál o cuáles ha trabajado y a indagar sobre las que no conozca. 
    .slyder-botones.mb-5
      SlyderA.p-5
        .contenedor-tarjetas
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/6.png")
            p.mb-0 Classroom
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/7.png")
            p.mb-0 Territorium
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/8.png")
            p.mb-0 Zoom
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/9.png")
            p.mb-0 Screenmeet
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/10.png")
            p.mb-0 Trello
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/11.png")
            p.mb-0 Jitsi
        .contenedor-tarjetas
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/12.png")
            p.mb-0 Google académico - Mensajero de telegramas
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/13.png")
            p.mb-0 Drive
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/14.png")
            p.mb-0 OneDrive
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/15.png")
            p.mb-0 Skype - Presentaciones interactivas
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/16.png")
            p.mb-0 Kahootz
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/17.png")
            p.mb-0 Miro
        .contenedor-tarjetas
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/18.png")
            p.mb-0 Mega
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/19.png")
            p.mb-0 Blogger
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/20.png")
            p.mb-0 Telegram
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/21.png" style="width: 72px")
            p.mb-0 Yahoo Messenger
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/22.png")
            p.mb-0 Grabador de llamadas Skype
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/23.png")
            p.mb-0 WhatsApp
        .contenedor-tarjetas
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/24.png" style="width: 151px ")
            p.mb-0 
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/25.png")
            p.mb-0 YouTube
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/26.png")
            p.mb-0 Facebook
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/27.png")
            p.mb-0 Calendario de Google
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/28.png")
            p.mb-0 Meet
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/29.png")
            p.mb-0 Sites de Google
        .contenedor-tarjetas
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/30.png")
            p.mb-0 Moodle	
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/31.png" style="width: 61px")
            p.mb-0 Charlie
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/32.png" style="width: 71px")
            p.mb-0 Canva
          .contenedor-tarjetas__tarjetas.p-4
            img(src="@/assets/curso/temas/33.png" style="width: 68px")
            p.mb-0 Google Alerts
      
      
      

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
