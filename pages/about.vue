<template>
  <main>
    <article>
      <h1>About Liam</h1>
      <p>
        I started my journey in 2011 learning basic HTML and CSS from YouTube videos. In early 2012 I created an
        anti-bullying website called ‘BeingGinge‘. The website was created to provide a place for redheads to
        communicate in a safe and monitored online environment about their experiences of bullying.
      </p>
      <p>
        I have been doing freelance web development for small businesses since 2012. In 2013, I was hired as a
        Web Developer at
        <a
          href="https://campuscreative.ca"
          title="Campus Creative"
          target="_blank"
          rel="noopener noreferrer"
        >
          Campus
          Creative
        </a>. I continued there until January 2016 when I started my own company
        <a
          href="https://ginge.ca"
          title="Ginge Digital"
          target="_blank"
          rel="noopener noreferrer"
        >Ginge</a>.
      </p>
      <p>
        In August 2016 I began working at
        <a
          href="https://devlift.com"
          title="DevLift Media"
          target="_blank"
          rel="noopener noreferrer"
        >DevLift Media</a> as a Web Developer. As
        my
        experience grew I began learning and experimenting with various frameworks and languages which allows me
        to have a diverse skill set and knowledge base to build any type of web application or website. In April
        2017 I graduated from Fanshawe College’s
        <a
          href="https://www.fanshawec.ca/programs/idp3-interactive-media-design/next"
          title="Fanshawe College’s Interactive Media Design program"
          target="_blank"
          rel="noopener noreferrer"
        >Interactive Media Design</a>
        program and started at
        <a
          href="https://thearcane.com"
          title="Arcane Digital"
          target="_blank"
          rel="noopener noreferrer"
        >Arcane Digital</a>
        that September.
      </p>
    </article>
    <aside>
      <img src="/images/liam-stewart.png" alt="Photo of Liam Stewart in London Ontario Canada">
    </aside>
  </main>
</template>


<style lang="scss" scoped>
main {
  margin: 5rem 2rem 2rem;
  @media only screen and (min-width: 480px) {
    margin: 4rem;
  }
  @media only screen and (min-width: 992px) {
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

  article {
    font-size: 0.8rem;
    @media only screen and (min-width: 480px) {
      font-size: 1.25rem;
    }
    padding-bottom: 4rem;

    p {
      margin-bottom: 1rem;

      a {
        font-weight: 500;
      }
    }
  }

  aside {
    text-align: center;
    img {
      width: 100%;
      height: 100%;
      @media only screen and (min-width: 480px) {
        width: 700px;
        height: 700px;
      }
    }
  }
}
</style>

<script>
export default {
  head() {
    return {
      title: "About | Liam Stewart - Web Developer | London Ontario"
    };
  }
};
</script>
