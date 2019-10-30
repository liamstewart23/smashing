<template>
  <main>
    <h1>Blog</h1>

    <div class="posts">
      <article class="post">
        <h2>
          <nuxt-link
            to="/blog/5-simple-wordpress-optimizations-for-beginners"
          >5 Simple WordPress Optimizations for Beginners</nuxt-link>
        </h2>
        <small>Aug 31, 2016</small>
      </article>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  width: 80vw;
  margin: 2rem;
  @media only screen and (min-width: 480px) {
    width: 60vw;
    margin: 4rem;
  }
  @media only screen and (min-width: 992px) {
    width: 40vw;
    margin: 8rem;
  }
  h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    @media only screen and (min-width: 480px) {
      margin-bottom: 4rem;
      font-size: 4rem;
    }
  }

  .posts {
    .post {
      margin: 3rem 0;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      nestedRoutes: []
    };
  },
  created() {
    this.$router.options.routes.forEach(routeOption => {
      if (routeOption.path.startsWith(this.$route.path)) {
        this.nestedRoutes.push({
          name: routeOption.name,
          path: routeOption.path
        });
      }
    });
  },
  head() {
    return {
      title: "Blog | Liam Stewart - Web Developer | London Ontario"
    };
  }
};
</script>