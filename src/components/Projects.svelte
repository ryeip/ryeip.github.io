<script>
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'An interactive data visualization project showcasing trends and patterns.',
      tags: ['Data Viz', 'Interactive', 'D3.js'],
      link: '#projects'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A comprehensive case study on visual design principles.',
      tags: ['Design', 'Case Study', 'UX'],
      link: '#projects'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'An interactive storytelling experience combining data and narrative.',
      tags: ['Storytelling', 'Data', 'Web'],
      link: '#projects'
    }
  ];
</script>

<section id="projects" class="projects">
  <div class="container">
    <h2>Projects</h2>
    <div class="projects-grid">
      {#each projects as project (project.id)}
        <div class="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div class="tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
          <a href={project.link} class="project-link">View Project →</a>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .projects {
    padding: 4rem 20px;
    background-color: #fafafa;
    margin: 0 -20px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    color: #333;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .tag {
    display: inline-block;
    background-color: #e8e8e8;
    color: #555;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
  }

  .project-link {
    display: inline-block;
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .project-link:hover {
    color: #764ba2;
  }

  @media (max-width: 768px) {
    .projects {
      padding: 2rem 20px;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
</style>
