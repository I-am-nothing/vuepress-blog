<template>
  <div
    class="abstract-item">
    <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
    <div class="title">
      <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
      <router-link :to="item.path">{{item.title}}</router-link>
    </div>
    <div v-if="item.frontmatter.cover" class="cover">
      <img
        :src="coverSrc"
        alt="封面" class="cover-img">
    </div>
    <div class="abstract" v-html="item.excerpt"></div>
    <hr class="hr">
    <PageInfo
      :pageInfo="item"
      :currentTag="currentTag">
    </PageInfo>
  </div>
</template>

<script>
import PageInfo from './PageInfo'
export default {
  components: { PageInfo },
  props: ['item', 'currentPage', 'currentTag'],
  computed: {
    coverSrc(){
      let path = this.item.frontmatter.cover
      if(path.slice(0,8)==="https://"||path.slice(0,7)==="http://"){
        return path
      } else if(path[0] === '/'){
        path = path.slice(1)
      }
      let base = this.$themeConfig.coverImgBase
      if(typeof base !== 'string' || base <= 0){
        base = ''
      } else if(base !== '/') {
        if(base[0] === '/'){
          base = base.slice(1)
        }
        if(base[base.length-1] !== '/'){
          base += '/'
        }
      }
      return base + path;
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/mode.styl'
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 36px;
    display: inline-block;
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      cursor: pointer;
      &.active
        color $accentColor
      &:hover
        color $accentColor
  .cover
    width 100%
    max-height 500px
    text-align: center;
    .cover-img
      max-width 100%
      max-height 500px
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
