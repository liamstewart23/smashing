<template>
  <main>
    <div class="background">
      <app-masthead/>
    </div>
    <div class="headings">
      <h1>
        Hello World!
      </h1>
      <p>:)</p>
    </div>
    <div class="links">
      <p>Liam was here.</p>
    </div>
  </main>
</template>

<script>
import AppMasthead from "~/components/AppMasthead.vue";

export default {
  components: {
    AppMasthead
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: 100px 100px 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 50px 100px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  .background {
    grid-area: 1 / 3 / 5 / 6;
  }
  .headings {
    grid-area: 2 / 2 / 3 / 6;
  }
  .links {
    grid-area: 5 / 1 / 6 / 5;
    padding: 30px;
  }
  .nextpage {
    background: #eee;
    color: black;
    padding: 30px;
    grid-area: 4 / 5 / 6 / 6;
  }
}
</style>
