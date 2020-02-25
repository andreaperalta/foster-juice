<template>
  <section class="container container--full-height">
    <div class="header">
      <slot name="top-content" v-bind="slice" />
      <slot name="header" v-bind="slice.primary">
        <h1 class="header__title">
          {{ $prismic.asText(slice.primary.title1) }}
        </h1>
      </slot>
    </div> 
    <div class="gallery image-gallery content-section">
      <div v-for="item in slice.items" :key="item.id" class="gallery-item">
        <!-- <img :src="item.jam.image_url"/> -->
        <div :style="{backgroundImage: 'url(' + item.jam.image_url + ')' }"/> 
        <h2>{{ item.jam.title }}</h2>
        <p>{{ item.jam.description}}</p>
        <p>{{ item.jam.weight}}</p>
        <p>{{ item.jam.price}}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
  name: 'jam_catalog'
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 0;
  width: 90%;
  text-align: center;
  &--full-height {
    min-height: 100vh;
  }
}

.gallery {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center
}

.gallery-item{
  flex: 0 1 25%;
  margin: 2;
  div{
    height: 200px;
    width: 200px;
    background-size: cover;
    margin: 0 auto 10px auto;
  }

  h2 {
    line-height: 40px;
    margin-bottom: 10px;
  }

  p {
    max-width: 220px;
    margin: 0 auto 17px;
  }
}

.header {
  * {
    margin: 0 auto;
    margin-bottom: 5rem;
    width: 100%;
  }
  &__title {
    font-size: 42px;
    line-height: 48px;
    }
  &__subtitle {
    width: 90%;
    max-width: calc((940px / 3) * 2);
  }
}

@media (max-width: 767px){
  .content-section{
    margin-bottom: 2rem
  }
  .gallery-item{
    flex: 100%
  }
}
</style>