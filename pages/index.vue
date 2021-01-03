<template>
  <main>
    <div class="headings">
      <h1>
        I'm
        <strong>Liam Stewart</strong>
        <span>a Web developer in</span>
        <span><a href="https://en.wikipedia.org/wiki/London,_Ontario" target="_blank" rel="noreferrer" >London, Ontario.</a></span>
      </h1>
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
      font-size: 1.8rem;
      @media only screen and (min-width: 321px) {
        font-size: 2.25rem;
      }
      @media only screen and (min-width: 480px) {
        font-size: 4rem;
      }
      @media only screen and (min-width: 768px) {
        font-size: 5.5rem;
      }
      strong {
        font-weight: 700;
      }
      span {
        display: block;
      }
    }
  }
}
</style>
