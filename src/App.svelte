<script>
  import { onMount } from 'svelte';
  import Homepage from './pages/Homepage.svelte';
  import AboutPage from './pages/AboutPage.svelte';
  import ProjectsPage from './pages/ProjectsPage.svelte';

  let currentPage = 'home';

  function getPageFromPath() {
    const path = window.location.pathname;
    if (path.includes('/about')) return 'about';
    if (path.includes('/projects')) return 'projects';
    return 'home';
  }

  function navigate(page) {
    currentPage = page;
    
    let newPath = '/';
    if (page === 'about') newPath = '/about';
    if (page === 'projects') newPath = '/projects';
    
    window.history.pushState({ page }, '', newPath);
    window.scrollTo(0, 0);
  }

  function handlePopState(event) {
    const page = event.state?.page || getPageFromPath();
    currentPage = page;
    window.scrollTo(0, 0);
  }

  onMount(() => {
    currentPage = getPageFromPath();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  });
</script>

{#if currentPage === 'home'}
  <Homepage on:navigate={(e) => navigate(e.detail)} />
{:else if currentPage === 'about'}
  <AboutPage on:navigate={(e) => navigate(e.detail)} />
{:else if currentPage === 'projects'}
  <ProjectsPage on:navigate={(e) => navigate(e.detail)} />
{/if}

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
</style>
