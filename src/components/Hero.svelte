<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import nameLogo from '../lib/svg/namelogo_outline.svg';
  import foursquareIcon from '../lib/svg/foursquare.svg?raw';

  const dispatch = createEventDispatcher();
  const placeholderSrc = '/images/default/placeholder.png';
  const navLinks = [
    { label: 'about', page: 'about' },
    { label: 'projects', page: 'projects' }
  ];

  function navigate(page) {
    dispatch('navigate', page);
  }
  const rolllist = [
    'Editing',
    'Data Visualization',
    'Design',
    'Writing',
    'Data Analysis',
    'Interactive Storytelling'
  ];
  const rwTime = 2.2; // seconds each word owns (includes its gap)
  const totalTime = rwTime * rolllist.length;

  let nameEl;
  let rollerWidth = null;

  onMount(() => {
    if (!nameEl) return;
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        rollerWidth = entry.contentRect.width;
      }
    });
    ro.observe(nameEl);
    return () => ro.disconnect();
  });
</script>

<section class="hero">
  <div class="hero-content">
    <div class="name-mark">
      <img bind:this={nameEl} src={nameLogo} alt="Randy Yeip" loading="lazy" />
    </div>

    <div class="rollwords" aria-label="Editing, Data Visualization, Design, Writing, Data Analysis, Interactive Storytelling">
      <span class="rw-only">Editing, Data Visualization, Design, Writing, Data Analysis, Interactive Storytelling</span>
      <div
        class="roller"
        aria-hidden="true"
        style={`width: ${rollerWidth ? `${rollerWidth}px` : '100%'}`}
      >
        {#each rolllist as rlword, index}
          <span
            class="rlword"
            style={`animation-delay: ${index * rwTime}s; animation-duration: ${totalTime}s;`}
          >
            {rlword}
          </span>
        {/each}
      </div>
    </div>
  </div>

  <div class="herovis">
    <img src={placeholderSrc} alt="" loading="lazy" />
  </div>

  <nav class="hero-nav">
    {#each navLinks as link}
      <button class="nav-link" on:click={() => navigate(link.page)}>
        <span class="icon" aria-hidden="true">{@html foursquareIcon}</span>
        <span class="label">{link.label}</span>
      </button>
    {/each}
  </nav>
</section>

<style>
  .hero {
    background: #f8f8f8;
    margin: 0 2vw;
    display: grid;
    grid-template-columns: minmax(320px, 1.05fr) minmax(280px, 0.95fr);
    grid-template-rows: auto auto;
    align-items: center;
    gap: clamp(24px, 6vw, 28px);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .herovis {
    display: flex;
    justify-content: center;
  }

  .hero-nav {
    grid-column: 1 / -1;
    display: flex;
    gap: 2rem;
    margin-top: 12px;
  }

  .name-mark img {
    max-width: min(520px, 100%);
    height: auto;
    display: block;
  }

  .rollwords {
    position: relative;
    height: auto;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .roller {
    position: relative;
    height: 16px;
    width: 100%;
    border-bottom: 1px solid #0a0a0a;
  }

  .rlword {
    position: absolute;
    left: 0;
    top: 0;
    font-family: 'Poynter Gothic Text', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    color: #9b1312;
    opacity: 0;
    transform: translateX(-24%);
    animation-name: roll;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    will-change: transform, opacity;
  }

  @keyframes roll {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    4% {
      opacity: 1;
      transform: translateX(0);
    }
    12% {
      opacity: 1;
      transform: translateX(0);
    }
    14% {
      opacity: 0;
      transform: translateX(28%);
    }
    100% {
      opacity: 0;
      transform: translateX(18%);
    }
  }

  .rw-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .hero-nav {
    grid-column: 1 / -1;
    display: flex;
    gap: 2rem;
    margin-top: 12px;
  }

  .nav-link {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #918f8f;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #9b1312;
  }

  .nav-link .icon {
    display: inline-flex;
    width: 22px;
    height: 22px;
    color: #9b1312;
    transition: color 0.3s ease;
  }

  .nav-link:hover .icon {
    color: #0a0a0a;
  }

  .nav-link .icon :global(svg) {
    width: 22px;
    height: 24px;
    display: block;
    fill: currentColor;
  }

  .nav-link .icon :global(svg *) {
    fill: currentColor !important;
  }

  .nav-link .label {
    font-family: 'Miller Display', Georgia, serif;
    font-weight: 400;
    font-size: 2rem;
  }

  .herovis {
    display: flex;
    justify-content: center;
  }

  .herovis img {
    width: min(480px, 100%);
    height: auto;
    display: block;
    filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.12));
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 36px clamp(20px, 6vw, 48px);
      display: inline-block;
    }

    .herovis {
      order: -1;
    }

    .herovis img {
      width: min(420px, 100%);
    }
  }

  @media (max-width: 540px) {
    .rollwords,
    .roller {
      height: 22px;
    }

    .rlword {
      font-size: 0.95rem;
    }
  }
</style>
