<script>
  import nameLogo from '../lib/svg/namelogo_outline.svg';

  const topTags = ['Editing', 'Data Visualization'];
  const bottomTags = ['Design', 'Writing', 'Data Analysis', 'Interactive Storytelling'];
  const placeholderSrc = '/images/default/placeholder.png';
</script>

<section class="hero">
  <div class="copy">
    <div class="name-mark">
      <img src={nameLogo} alt="Randy Yeip wordmark" loading="lazy" />
    </div>

    <div class="tags">
      <div class="row">
        {#each topTags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
      <div class="row">
        {#each bottomTags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </div>
  </div>

  <div class="visual">
    <img src={placeholderSrc} alt="Portfolio visual placeholder" loading="lazy" />
  </div>
</section>

<style>
  .hero {
    background: #f7f7f7;
    border: 1px solid #e4e4e4;
    border-radius: 12px;
    margin: 24px 0;
    padding: 48px clamp(20px, 5vw, 64px);
    display: grid;
    grid-template-columns: minmax(320px, 1.05fr) minmax(280px, 0.95fr);
    align-items: center;
    gap: clamp(24px, 6vw, 72px);
  }

  .copy {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .name-mark img {
    max-width: min(520px, 100%);
    height: auto;
    display: block;
  }

  .tags {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .tag {
    font-family: 'Metric', 'Helvetica Neue', Arial, sans-serif;
    font-size: 0.95rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #4a4a4a;
  }

  .visual {
    display: flex;
    justify-content: center;
  }

  .visual img {
    width: min(480px, 100%);
    height: auto;
    display: block;
    filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.12));
  }

  @media (max-width: 900px) {
    .hero {
      grid-template-columns: 1fr;
      padding: 36px clamp(20px, 6vw, 48px);
    }

    .visual {
      order: -1;
    }

    .visual img {
      width: min(420px, 100%);
    }
  }

  @media (max-width: 540px) {
    .tags {
      gap: 10px;
    }

    .row {
      gap: 10px;
    }

    .tag {
      font-size: 0.9rem;
      letter-spacing: 0.03em;
    }
  }
</style>
