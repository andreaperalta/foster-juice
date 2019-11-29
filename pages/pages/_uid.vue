<template>
  <slice-zone :slices="document.body" />
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
      const result = await api.getByUID('page', params.uid)
      return {
        document: result.data,
        documentId: result.id
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Document not found. Make sure you created a document of type "page" in your Prismic repository' })
    }
  }
}
</script>