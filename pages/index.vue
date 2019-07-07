<template>
  <main>
    <div class="headings">
      <span>
        Hello, My name is
      </span>
      <h1><span>Liam Stewart</span> Web Developer from London, Ontario</h1>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  display: flex;
  margin: 2rem;
  @media only screen and (min-width: 480px){
    margin: 4rem;
  }
  @media only screen and (min-width: 992px){
    margin: 8rem;
  }
  span {
    font-size: 1.8rem;
    @media only screen and (min-width: 480px){
      font-size: 4.5rem;
    }
    @media only screen and (min-width: 768px){
      font-size: 4.5rem;
    }
  }
  h1 {
    padding: 0;
    span {
      font-size: 2.4rem;
      @media only screen and (min-width: 480px){
        font-size: 6rem;
      }
      display: block;
    }
    font-size: .85rem;
    @media only screen and (min-width: 480px){
      font-size: 2.1rem;
    }
  }
  p {
    font-size: 2rem;
  }
}
</style>
