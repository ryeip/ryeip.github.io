<script>
  import { createEventDispatcher } from 'svelte';
  import Header from '../components/Header.svelte';
  import Hero from '../components/Hero.svelte';
  import Footer from '../components/Footer.svelte';

  const dispatch = createEventDispatcher();

  function handleNavigate(page) {
    dispatch('navigate', page);
  }
</script>

<Header showText={false} on:navigate={(e) => handleNavigate(e.detail)} />
<main>
  <Hero on:navigate={(e) => handleNavigate(e.detail)} />
</main>
<Footer />

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 20px;
    min-height: calc(100vh - 200px);
  }
</style>
