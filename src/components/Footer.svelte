<script>
  import linkedinIcon from '../lib/svg/linkedin.svg?raw';
  import twitterIcon from '../lib/svg/twitterx.svg?raw';
  import emailIcon from '../lib/svg/email.svg?raw';

  const socials = [
    { href: 'https://www.linkedin.com/in/randy-yeip-4b13ba5/', label: 'LinkedIn', icon: linkedinIcon },
    { href: 'https://x.com/randyyeip', label: 'Twitter / X', icon: twitterIcon },
    { href: 'mailto:rayeip@comcast.net', label: 'Email', icon: emailIcon }
  ];
</script>

<footer>
  <div class="footer-content">
    <div class="social">
      {#each socials as social}
        <a href={social.href} target="_blank" rel="noopener" aria-label={social.label}>
          <span class="icon" aria-hidden="true">{@html social.icon}</span>
        </a>
      {/each}
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: #0a0a0a;
    color: #fff;
    text-align: center;
    padding: 2rem 20px;
    margin-top: 4rem;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .social {
    display: inline-flex;
    align-items: center;
    gap: 1.25rem;
  }

  .social a {
    display: inline-flex;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.5);
    color: #ffffff;
  }

  .social a:hover {
    background: #9b1312;
    /* transform: translateY(-1px); */
  }

  .icon :global(svg) {
    width: 18px;
    height: 18px;
    display: block;
    fill: currentColor;
  }

  /* Force inherited color even if SVG sets its own fill/stroke */
  .icon :global(svg * ) {
    fill: currentColor !important;
    stroke: currentColor !important;
  }

  @media (max-width: 768px) {
    footer {
      padding: 1.5rem 20px;
    }
  }

</style>
