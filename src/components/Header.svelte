<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  let navOpen = false;
  export let showText = true;
  export let currentPage = 'home';

  function toggleNav() {
    navOpen = !navOpen;
  }

  function navigate(page) {
    dispatch('navigate', page);
    navOpen = false;
  }
</script>

<header>
  <nav class="navbar">
    <div class="nav-container" class:no-text={!showText}>
      <button class="logo-btn" on:click={() => navigate('home')} aria-label="Home">
        <span class="logo">randy yeip</span>
      </button>
      <button class="nav-toggle" on:click={toggleNav} aria-label="Toggle navigation">
        ☰
      </button>
      <ul class="nav-menu" class:active={navOpen}>
        <li><button on:click={() => navigate('about')} class="nav-link" class:active-link={currentPage === 'about'}>About</button></li>
        <li><button on:click={() => navigate('projects')} class="nav-link" class:active-link={currentPage === 'projects'}>Projects</button></li>
      </ul>
    </div>
  </nav>
</header>

<style>
  header {
    background-color: #0a0a0a;
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .navbar {
    padding: 1rem 0;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .nav-container.no-text .logo-btn,
  .nav-container.no-text .nav-toggle,
  .nav-container.no-text .nav-menu {
    visibility: hidden;
    pointer-events: none;
  }

  .logo-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-family: 'Miller Display', Georgia, serif;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -.03em;
    font-style: italic;
    color: rgba(255, 255, 255, 0.5);
  }

  .logo {
    font-size: 2rem;
    font-weight: 600;
    font-style: italic; 
    color: rgba(255, 255, 255, 0.5);
  }

  .nav-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #f8f8f8;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  .nav-link {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.3s ease;
    font-family: inherit;
    font-size: inherit;
    font-weight: bold;
  }

  .nav-link:hover {
    color: #9b1312;
  }

  .nav-link.active-link {
    color: #9b1312;
    pointer-events: none;
    cursor: default;
  }

  .nav-link.active-link:hover {
    color: #9b1312;
  }

  @media (max-width: 768px) {
    .nav-toggle {
      display: block;
    }

    .nav-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      background-color: #0a0a0a;
      padding: 1rem;
      gap: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .nav-menu.active {
      display: flex;
    }

    .nav-menu li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }

    .nav-menu li:last-child {
      border-bottom: none;
    }
  }
</style>
