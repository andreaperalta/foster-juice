import Vue from 'vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './link-resolver'

Vue.use(PrismicVue, { linkResolver })