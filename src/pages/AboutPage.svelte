<script>
  import { createEventDispatcher } from 'svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  const dispatch = createEventDispatcher();

  function handleNavigate(page) {
    dispatch('navigate', page);
  }
</script>

<Header currentPage="about" on:navigate={(e) => handleNavigate(e.detail)} />
<main>
  <section class="about">
    <div class="container">
      <h1>About me</h1>
      <div class="about-content">
        <div class="headshot-container">
          <img src="/images/yeipheadshot.png" alt="Headshot" class="headshot" />
          <a href="/YeipResume.pdf" target="_blank" download class="resume-link">Résumé</a>
        </div>
        <div class="about-text">
          <p>
            I'm a designer and developer passionate about creating compelling visual narratives through
            data. With expertise in data visualization, interactive storytelling, and design, I help
            transform complex information into engaging and accessible experiences.
          </p>
          <p>
            Whether it's through writing, editing, or developing interactive tools, I believe in the
            power of clear communication and thoughtful design.
          </p>
          <p>
            My background spans multiple disciplines—from graphic design to front-end development—which
            allows me to bridge the gap between aesthetics and functionality. I'm driven by the belief
            that good design is invisible; it guides users intuitively toward understanding.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
<Footer />

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0px 20px;
    min-height: calc(100vh - 200px);
  }

  .about {
    padding: 4rem 20px;
    background-color: #f8f8f8;
    margin: 0 -20px;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .about-content {
    display: flex;
    flex-direction: row-reverse;
    gap: 3rem;
    align-items: flex-start;
  }

  .about-text {
    flex: 1;
  }

  .headshot-container {
    flex-shrink: 0;
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .headshot {
    flex-shrink: 0;
    width: 100%;
    height: auto;
    border: 1px solid #0a0a0a;
  }

  .resume-link {
    font-size: 1.1rem;
    color: #9b1312;
    text-decoration: none;
    font-weight: 400;
    transition: color 0.3s ease;
  }

  .resume-link:hover {
    color: #0a0a0a;
  }

  h1 {
    font-size: 2.5rem;
    color: #9b1312;
    margin-bottom: 1.5rem;
  }

  .about-text p {
    margin-top: -0.2em;
  }

  p {
    font-family: 'Miller Text', Georgia, serif;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  @media (max-width: 768px) {
    .about {
      padding: 2rem 20px;
    }

    .about-content {
      flex-direction: column;
      gap: 2rem;
    }

    .headshot {
      width: 100%;
      max-width: 250px;
    }

    h1 {
      font-size: 2rem;
    }
  }
</style>
