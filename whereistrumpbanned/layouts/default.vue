<template>
  <div>
    <nav class="navbar header" role="navigation" aria-label="main navigation">
      <div
        class="navbar-item is-flex is-flex-direction-column is-align-items-center py-4 px-4"
      >
        <img
          src="~assets/logo.png"
          alt="Trump - make the internet great again"
        />

        <div class="subtitle pt-4">
          This website tracks who is helping to make the internet great again by
          <a href="https://en.wikipedia.org/wiki/Deplatforming" target="_blank"
            >deplatforming</a
          >
          Donald Trump after he encouraged a group of domestic terrorists to
          <a
            href="https://en.wikipedia.org/wiki/2021_storming_of_the_United_States_Capitol"
            target="_blank"
            >storm the United States Capitol</a
          >.
        </div>
      </div>
    </nav>

    <div class="page-container">
      <nuxt />
    </div>

    <div class="footer">
      <section class="section">
        Made with ❤️ and 😜 by
        <a target="_blank" href="https://jaimyn.dev">Jaimyn Mayer</a>.
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.navbar-item img {
  max-height: 100px;
}

.navbar-item {
  width: 100%;
}

.navbar {
  background-color: #457b9d;
}

.subtitle {
  color: #ffffff;
  text-align: center;
}

.subtitle a {
  color: #ffffff;
  text-decoration: underline;
}

.footer {
  width: 100%;
  text-align: center;
}
</style>
