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
      <h1>Background and experience</h1>
      <div class="about-content">
        <div class="headshot-container">
          <img src="/images/yeipheadshot.png" alt="Headshot" class="headshot" />
          <a href="/YeipResume.pdf" target="_blank" download class="resume-link">Résumé</a>
        </div>
        <div class="about-text">
            <p>
            I believe in the power of marrying words, data and visuals to enlighten, surprise, delight and inspire.
            </p>
            <p>
            My journalism journey began at 15, when I joined my high school newspaper. It has continued uninterrupted ever since, as a reporter, designer, data/visual journalist and editor.
            </p>
            <p>
            For the past two decades, I have focused on visual journalism, drawing on my full range of skills: data analysis, data visualization, reporting and writing. I have experience managing small and large teams with diverse skill sets, leading collaborations among designers, developers, reporters and data journalists. I currently work as data visualization director for Business Insider, overseeing news graphics and interactive storytelling.
            </p>
            <p>
            My career has spanned coverage areas, from the automotive industry to vaccinations. Much of my work has been particularly focused on the intersection of data and politics.
            </p>
            <p>
            Prior to joining Business Insider, I spent nearly 20 years at The Wall Street Journal, including seven years as deputy graphics director. Before joining the Journal, I worked as a designer and graphic artist (and occasional columnist) at The Patriot-News in Harrisburg, Pa. My work has been recognized by the Society for News Design, the Online Journalism Awards, Information Is Beautiful Awards and Best American Infographics, among others.
            </p>
            <p>
            I also enjoy teaching young and aspiring journalists. I have taught at The New School in New York City and as a regular guest lecturer for the School of Journalism at the University of Missouri, as well as high school journalism workshops and conferences. I frequently serve as a judge for scholastic and collegiate journalism contests.
            </p>
            <p>
            In 2018, I was honored by the Columbia Scholastic Press Association with the Joseph M. Murphy Award, “The ultimate distinction offered by the Association for service by a person or organization.” In 2024, I was also named a recipient of CSPA’s Alumni Achievement Award, honoring “individuals who have profoundly contributed to and have had a sustained impact on scholastic journalism education.”
            </p>
            <p>
            I earned bachelor’s and master’s degrees in journalism from Michigan State University.
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
