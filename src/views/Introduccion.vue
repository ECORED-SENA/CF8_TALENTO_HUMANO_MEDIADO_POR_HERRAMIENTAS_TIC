<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción
    p.mb-5 Bienvenido al componente formativo 
      span.b--3 Informática y digitalización en el proceso de preselección de candidatos. 
      | Para conocer de manera general la temática a estudiar, se invita a ver el siguiente video.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ynYyZGSxTgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
