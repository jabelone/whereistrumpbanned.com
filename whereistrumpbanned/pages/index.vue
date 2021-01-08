<template>
  <div>
    <section class="section background primary">
      <h1 class="title">Background</h1>
      <b-button type="is-primary">Primary</b-button>
      <div class="columns">
        <card title="Free" icon="github">
          PLACEHOLDER CONTENT Open source on
          <a href="https://github.com/jabelone"> GitHub </a>
        </card>
      </div>
    </section>
    <section class="section banned-list">
      <h1 class="title">List of bans</h1>
      <div class="columns">
        <card title="Free" icon="github">
          PLACEHOLDER CONTENT Open source on
          <a href="https://github.com/jabelone"> GitHub </a>
        </card>
      </div>
    </section>
  </div>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card,
  },
}
</script>

<style lang="scss" scoped>
.background {
  background-color: #a8dadc;
}

.banned-list {
  background-color: #f1faee;
}
</style>
