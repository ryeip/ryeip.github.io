<script>
  import { createEventDispatcher } from 'svelte';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';

  const dispatch = createEventDispatcher();

  function handleNavigate(page) {
    dispatch('navigate', page);
  }

  let expandedId = null;
  let slideIndex = {};

  function toggleExpand(id) {
    expandedId = expandedId === id ? null : id;
  }

  const projects = [
    {
      id: 1,
      title: 'Hospital C-section rates',
      description: 'An interactive data visualization project showcasing trends and patterns.',
      fullDescription: 'This is a comprehensive interactive data visualization project that explores complex trends and patterns through engaging visual narratives.',
      preview: '/images/thumbs/CSections.png',
      images: [
        '/images/thumbs/swipers/csection_scrollymap.gif',
        '/images/thumbs/swipers/csection_beeswarm.gif',
        '/images/thumbs/swipers/csection_search.png'
      ],
      tags: ['data viz', 'interactive', 'editing', 'design'],
      link: 'https://www.businessinsider.com/c-section-hospital-rates-differences-data-analysis-2025-12'
    },
    {
      id: 2,
      title: 'The cost of young cancer',
      description: 'A comprehensive case study on visual design principles.',
      fullDescription: 'An in-depth case study examining how visual design principles can enhance user experience and engagement across digital platforms.',
      preview: '/images/thumbs/YoungCancer.png',
      images: [
        '/images/thumbs/swipers/youngcancer_intro.gif',
        '/images/thumbs/swipers/youngcancer_modules.png'
      ],
      tags: ['design', 'editing', 'interactive'],
      link: 'https://www.businessinsider.com/true-cost-young-colon-cancer-crisis-2025-10'
    },
    {
      id: 3,
      title: 'U.S. data center locations',
      description: 'An interactive storytelling experience combining data and narrative.',
      fullDescription: 'An innovative interactive storytelling experience that seamlessly blends data-driven insights with compelling narrative elements.',
      preview: '/images/thumbs/DataCenters.png',
      images: [
        '/images/thumbs/swipers/datacenters_intro.gif',
        '/images/thumbs/swipers/datacenters_scrolly.gif',
        '/images/thumbs/swipers/datacenters_table.gif',
        '/images/thumbs/swipers/datacenters_search.png'
      ],
      tags: ['design', 'interactive', 'editing', 'data viz'],
      link: 'https://www.businessinsider.com/ai-data-center-cost-2025-6'
    },
     {
      id: 4,
      title: 'United States of automobiles',
      description: 'An interactive storytelling experience combining data and narrative.',
      fullDescription: 'An innovative interactive storytelling experience that seamlessly blends data-driven insights with compelling narrative elements.',
      preview: '/images/thumbs/USAutos.png',
      images: [
        '/images/thumbs/swipers/usautos_carsearch.png',
        '/images/thumbs/swipers/usautos_scrolly.gif',
        '/images/thumbs/swipers/usautos_citysearch.png',
        '/images/thumbs/swipers/usautos_colors.gif'
      ],
      tags: ['design', 'interactive', 'editing', 'data viz', 'data analysis'],
      link: 'https://www.businessinsider.com/united-states-car-models-interactive-guide-politics-color-brand-location-2024-10'
    },
    {
    id: 5,
    title: 'The swing-states dial',
    description: 'An interactive storytelling experience combining data and narrative.',
    fullDescription: 'An innovative interactive storytelling experience that seamlessly blends data-driven insights with compelling narrative elements.',
    preview: '/images/thumbs/TheDial.png',
    images: [
    '/images/thumbs/swipers/thedial_votesplit.png',
    '/images/thumbs/swipers/thedial_dial.gif',
    '/images/thumbs/swipers/thedial_turnout.png'
    ],
    tags: ['data analysis', 'data viz', 'interactive', 'writing', 'editing'],
    link: 'https://www.wsj.com/politics/elections/election-dial-battleground-states-trump-biden-224ad0e6?st=tpchsc&reflink=desktopwebshare_permalink'
    },
    {
    id: 6,
    title: 'What type of voter are you?',
    description: 'An interactive storytelling experience combining data and narrative.',
    fullDescription: 'An innovative interactive storytelling experience that seamlessly blends data-driven insights with compelling narrative elements.',
    preview: '/images/thumbs/IdeologyQuiz.png',
    images: [
    '/images/thumbs/swipers/ideologyquiz_questions.png',
    '/images/thumbs/swipers/ideologyquiz_transition.gif',
    '/images/thumbs/swipers/ideologyquiz_ternary.gif'
    ],
    tags: ['data analysis', 'data viz', 'writing', 'interactive', 'editing'],
    link: 'https://www.wsj.com/politics/elections/election-2024-quiz-poll-ideology-7533f46b?st=eWXQMR&reflink=desktopwebshare_permalink'
    },
    {
    id: 7,
    title: 'How Covid migrated across America',
    description: 'An interactive storytelling experience combining data and narrative.',
    fullDescription: 'An innovative interactive storytelling experience that seamlessly blends data-driven insights with compelling narrative elements.',
    preview: '/images/thumbs/CovidMigrate.png',
    images: [
    '/images/thumbs/swipers/covidmigrate_header.gif',
    '/images/thumbs/swipers/covidmigrate_scrolly.gif'
    ],
    tags: ['data analysis', 'writing', 'data viz', 'interactive'],
    link: 'https://www.wsj.com/health/healthcare/how-covid-19-has-migrated-across-america-11640148514?st=R1K3zT&reflink=desktopwebshare_permalink' 
    },
    {
    id: 8,
    title: 'Path to 270 electoral votes',
    description: 'An interactive storytelling experience combining data and narrative.',
    fullDescription: 'An innovative interactive storytelling experience that seamlessly blends data-driven insights with compelling narrative elements.',
    preview: '/images/thumbs/TrumpBiden270.png',
    images: [
    '/images/thumbs/swipers/trumpbiden270_scrolly.gif',
    '/images/thumbs/swipers/trumpbiden270_live.png'
    ],
    tags: ['data analysis', 'data viz', 'interactive', 'writing', 'editing'],
    link: 'https://www.wsj.com/graphics/how-trump-and-biden-can-each-get-to-270/?reflink=desktopwebshare_twitter'
    },
    {
    id: 9,
    title: 'Political polarization',
    description: 'An interactive storytelling experience combining data and narrative.',
    fullDescription: 'An innovative interactive storytelling experience that seamlessly blends data-driven insights with compelling narrative elements.',
    preview: '/images/thumbs/PoliticsPull.png',
    images: [
    '/images/thumbs/swipers/politicspull_map1.gif',
    '/images/thumbs/swipers/politicspull_map2.gif',
    '/images/thumbs/swipers/politicspull_bubbles.gif'
    ],
    tags: ['data analysis', 'data viz', 'interactive', 'writing', 'editing'],
    link: 'https://www.wsj.com/graphics/polarized-presidential-elections/?&reflink=desktopwebshare_twitter'
    },
    {
    id: 10,
    title: 'President Trump’s tweets',
    description: 'An interactive storytelling experience combining data and narrative.',
    fullDescription: 'An innovative interactive storytelling experience that seamlessly blends data-driven insights with compelling narrative elements.',
    preview: '/images/thumbs/TrumpTweets.png',
    images: [
    '/images/thumbs/swipers/trumptweets_header.png',
    '/images/thumbs/swipers/trumptweets_topics.png'
    ],
    tags: ['data analysis', 'writing', 'data viz'],
    link: 'https://www.wsj.com/articles/trump-takes-to-twitter-like-clockwork-1516357800?st=mZzSwE&reflink=desktopwebshare_permalink'
    }
  ];

  const getImages = (project) => {
    if (project.images && project.images.length) return project.images;
    return project.preview ? [project.preview] : [];
  };

  slideIndex = projects.reduce((acc, project) => {
    acc[project.id] = 0;
    return acc;
  }, {});

  function nextImage(id) {
    const project = projects.find((p) => p.id === id);
    const imgs = getImages(project);
    if (!imgs.length) return;
    const current = slideIndex[id] ?? 0;
    slideIndex = { ...slideIndex, [id]: (current + 1) % imgs.length };
  }

  function prevImage(id) {
    const project = projects.find((p) => p.id === id);
    const imgs = getImages(project);
    if (!imgs.length) return;
    const current = slideIndex[id] ?? 0;
    slideIndex = { ...slideIndex, [id]: (current - 1 + imgs.length) % imgs.length };
  }
</script>

<Header currentPage="projects" on:navigate={(e) => handleNavigate(e.detail)} />
<main>
  <section class="projects">
    <div class="container">
      <h1>Selected projects</h1>
          <p>
      I'm a designer and developer passionate about creating compelling visual narratives through
      data. With expertise in data visualization, interactive storytelling, and design, I help
      transform complex information into engaging and accessible experiences.
    </p>
      <div class="projects-grid">
        {#each projects as project (project.id)}
          <div class="project-card" class:expanded={expandedId === project.id}>
            <h3>{project.title}</h3>
            <div class="project-media" on:click={() => toggleExpand(project.id)}>
              {#if expandedId === project.id}
                <div class="project-swiper" aria-live="polite">
                  <button
                    type="button"
                    class="slide-btn prev"
                    on:click|stopPropagation={() => prevImage(project.id)}
                    aria-label="Previous image"
                  >
                    <svg class="chevron" viewBox="0 0 24 24" width="48" height="48">
                      <polyline class="outline" points="9 18 15 12 9 6"></polyline>
                      <polyline class="main" points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                  {#if getImages(project).length}
                    <img
                      src={getImages(project)[slideIndex[project.id] ?? 0]}
                      alt={project.title}
                      class="project-slide"
                    />
                  {/if}
                  <button
                    type="button"
                    class="slide-btn next"
                    on:click|stopPropagation={() => nextImage(project.id)}
                    aria-label="Next image"
                  >
                    <svg class="chevron" viewBox="0 0 24 24" width="48" height="48">
                      <polyline class="outline" points="15 18 9 12 15 6"></polyline>
                      <polyline class="main" points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                </div>
              {:else}
                <img src={project.preview} alt={project.title} class="project-preview" />
              {/if}
              <button
                type="button"
                class="expand-btn"
                on:click|stopPropagation={() => toggleExpand(project.id)}
                aria-label="Toggle expand"
              >
                <svg class="chevron" viewBox="0 0 24 24" width="24" height="24">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
            {#if expandedId === project.id}
              <div class="project-info">
                <p class="full-description">{project.fullDescription}</p>
                <div class="tags">
                  {#each project.tags as tag}
                    <span class="tag">{tag}</span>
                  {/each}
                </div>
                <a href={project.link} target="_blank" class="project-link">
                  View live project
                  <svg class="external-icon" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      d="M20 9.01h-2.42V4.12l-8.38 8.38-.08.08-.08-.08-1.55-1.55-.08-.08.08-.08L15.87 2.42h-4.88V0h9.01v9.01Z"
                    />
                    <path
                      d="M2.42 5.71h5.49V3.29H0v16.7h16.7v-7.91h-2.41v5.49H2.42V5.71Z"
                    />
                  </svg>
                </a>
              </div>
            {/if}
          </div>
        {/each}
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

  .projects {
    padding: 4rem 20px;
    background-color: #f8f8f8;
    margin: 0 -20px;
    max-width: 1200px;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
     font-size: 2.5rem;
    color: #9b1312;
    margin-bottom: 1.5rem;
  }

p {
    font-family: 'Miller Text', Georgia, serif;
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #0a0a0a;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card {
    background: #918f8f;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
  }

  .project-card:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    background-color: #0a0a0a;
  }

  .project-card.expanded {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    background-color: #0a0a0a;
  }

  .project-card h3 {
    font-size: 1.25rem;
    font-family: 'Poynter Gothic Text', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 600;
    margin: 0.75rem 1rem;
    color: #ffffff;
  }

  .project-media {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 1;
    background-color: #f0f0f0;
    overflow: hidden;
    cursor: pointer;
  }

  .project-card.expanded .project-media {
    aspect-ratio: 16 / 9;
  }

  .project-swiper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .project-slide {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .slide-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slide-btn.prev {
    left: 12px;
  }

  .slide-btn.next {
    right: 12px;
  }

  .slide-btn .chevron .outline {
    stroke: rgba(255, 255, 255, 0.8);
    stroke-width: 5;
    fill: none;
    stroke-linecap: square;
    stroke-linejoin: miter;
  }

   .slide-btn .chevron .main {
    stroke: #0a0a0a;
    stroke-width: 2;
    fill: none;
    stroke-linecap: square;
    stroke-linejoin: miter;
  }

  .project-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(85%);
    transition: filter 0.3s ease;
  }

    .project-preview:hover {
        filter: grayscale(0%);
    }

  .project-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .expand-btn {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: #918f8f;
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .expand-btn:hover {
    background: #9b1312;
  }

  .chevron {
    stroke: white;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.3s ease;
  }

  .project-card.expanded .chevron {
    transform: rotate(180deg);
  }

  .project-info {
    padding: 0.75rem 1.25rem;
    background-color: #ffffff;
  }

  .full-description {
    color: #0a0a0a;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-family: 'Poynter Gothic Text', 'Helvetica Neue', Arial, sans-serif;
    font-size: 1.05rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tag {
    display: inline-block;
    background-color: #9b1312;
    color: #ffffff;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
  }

  .project-link {
    display: inline-block;
    color: #9b1312;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .project-link:hover {
    color: #0a0a0a;
  }

  .external-icon {
    width: 16px;
    height: 16px;
    margin-left: 0.4rem;
    vertical-align: baseline;
    fill: currentColor;
  }

  @media (max-width: 768px) {
    .projects {
      padding: 2rem 20px;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
