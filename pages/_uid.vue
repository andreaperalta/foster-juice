<template>
  <div>
    <nuxt-link v-if="!isHome" class="home-link" to="/">HOME</nuxt-link>
    <slice-zone :slices="document.body" />
  </div>
</template>
<script>
import Prismic from 'prismic-javascript'
import PrismicConfig from '@/prismic.config.js'
import { SliceZone } from '@/sliceMachine'
export default {
  name: 'PrismicExample',
  components: {
    SliceZone
  },
  async asyncData({ params, error, req }) {
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})
      const result = await api.getByUID('page', params.uid || 'home')

      return {
        document: result.data,
        documentId: result.id,
        isHome: params.uid ? false : true 
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Document not found. Make sure you created a document of type "page" in your Prismic repository' })
    }
  }
}
</script>

<style lang="scss" scoped>

.home-link {
  display: block;
  margin: 20px;
}
</style>