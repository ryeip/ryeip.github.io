<script>
  let navOpen = false;

  function toggleNav() {
    navOpen = !navOpen;
  }
</script>

<header>
  <nav class="navbar">
    <div class="nav-container">
      <a href="/" class="logo">Randy Yeip</a>
      <button class="nav-toggle" on:click={toggleNav} aria-label="Toggle navigation">
        ☰
      </button>
      <ul class="nav-menu" class:active={navOpen}>
        <li><a href="#about" on:click={() => (navOpen = false)}>About</a></li>
        <li><a href="#projects" on:click={() => (navOpen = false)}>Projects</a></li>
        <li><a href="#contact" on:click={() => (navOpen = false)}>Contact</a></li>
      </ul>
    </div>
  </nav>
</header>

<style>
  header {
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }

  .nav-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
  }

  .nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  .nav-menu a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
  }

  .nav-menu a:hover {
    color: #0066cc;
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
      background-color: #fff;
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
