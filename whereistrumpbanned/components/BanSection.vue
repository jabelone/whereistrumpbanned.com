<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title is-size-3 has-text-grey">
          <img
            v-if="article.image"
            class="logo-image p-2"
            :src="article.image"
          />
          {{ article.title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          <b>Source:</b>
          <a class="content" target="_blank" :href="article.link">{{
            article.source
          }}</a>
        </div>
        <div class="content"><b>Date anounced:</b> {{ article.date }}</div>
        <div class="content"><b>Length of time:</b> {{ article.length }}</div>
        <div class="content">
          <b>Description:</b>
          {{ article.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BanSection',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.logo-image {
  max-width: 250px;
  max-height: 60px;
  margin: 0 !important;
}
</style>
