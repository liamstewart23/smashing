<template>
  <div>
    <app-nav/>
    <nuxt/>
  </div>
</template>

<script>
import AppNav from "~/components/AppNav.vue";

export default {
  components: {
    AppNav
  },
    data() {
        return {
            menuActive: 'is-active',
        }
    }
};
</script>


<style>

html {
  font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #eee;
}

body {
  width: 100wh;
  height: 90vh;
  color: #eee;
  background: linear-gradient(-45deg, #EE7752, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: Gradient 25s ease infinite;
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}

a,
a:visited,
a:active {
  color: white;
  text-decoration: none;
}

h1,
h2,
h3,
p,
span,
li {
  font-family: "Quicksand", sans-serif;
  font-weight: normal;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

</style>
