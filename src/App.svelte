<script>
  import Header from './components/Header.svelte';
  import Hero from './components/Hero.svelte';
  import About from './components/About.svelte';
  import Projects from './components/Projects.svelte';
  import Contact from './components/Contact.svelte';
  import Footer from './components/Footer.svelte';
</script>

<Header />
<main>
  <Hero />
  <About />
  <Projects />
  <Contact />
</main>
<Footer />

<style global>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fafafa;
    color: #333;
  }

  :global(html) {
    scroll-behavior: smooth;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
</style>
