import DefaultTheme from 'vitepress/theme'
import VideoEmbed from './components/VideoEmbed.vue'
import ArticleRef from './components/ArticleRef.vue'
import CtaBlock from './components/CtaBlock.vue'
import './styles/custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('VideoEmbed', VideoEmbed)
    app.component('ArticleRef', ArticleRef)
    app.component('CtaBlock', CtaBlock)
  }
}
