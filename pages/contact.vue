<template>
  <main>
    <h1>Don't be a stranger</h1>
    <h1>just say hello.</h1>
    <h2>hello@liamstewart.ca</h2>
    <p></p>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 80vw;
  margin: 2rem;
  @media only screen and (min-width: 480px){
    width: 60vw;
    margin: 4rem;
  }
  @media only screen and (min-width: 992px){
    width: 40vw;
    margin: 8rem;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    @media only screen and (min-width: 480px) {
      margin-bottom: 2rem;
      font-size: 4rem;
    }
  }
}
</style>
