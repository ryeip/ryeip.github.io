<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Projects from './components/Projects.svelte';
  import Footer from './components/Footer.svelte';
</script>

<Header />
<main>
  <Hero />
  <About />
  <Projects />
</main>
<Footer />

<style global>
  @import './lib/styles/fonts/fonts.css';

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: 'Poynter Gothic Text', 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f8f8f8;
    color: #0a0a0a;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 20px;
    min-height: calc(100vh - 200px);
  }
</style>
