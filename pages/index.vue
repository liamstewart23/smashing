<template>
  <main>
    <div class="headings">
      <h1>I'm <strong>Liam Stewart</strong> <div>a web developer in</div> <div>London, Ontario.</div></h1>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  display: flex;
  margin: 2rem;
  @media only screen and (min-width: 480px) {
    margin: 4rem;
  }
  @media only screen and (min-width: 992px) {
    margin: 8rem;
  }
  .headings {
    h1 {
      font-weight: 100;
      font-size: 2.55rem;
      @media only screen and (min-width: 480px) {
        font-size: 5rem;
      }
      @media only screen and (min-width: 768px) {
        font-size: 8.5rem;
      }
      strong {
        font-weight: 700;
      }
    }
  }
}
</style>
