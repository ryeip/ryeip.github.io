<script>
  let email = '';
  let message = '';
  let submitted = false;

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: Implement form submission logic
    // For now, just show a success message
    submitted = true;
    setTimeout(() => {
      email = '';
      message = '';
      submitted = false;
    }, 3000);
  }
</script>

<section id="contact" class="contact">
  <div class="container">
    <h2>Get In Touch</h2>
    <p class="contact-intro">
      Interested in collaborating or have a question? Feel free to reach out!
    </p>

    {#if submitted}
      <div class="success-message">
        Thank you! I'll get back to you soon.
      </div>
    {/if}

    <form on:submit={handleSubmit} class="contact-form">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          placeholder="your@email.com"
          required
        />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          bind:value={message}
          placeholder="Your message here..."
          rows="5"
          required
        ></textarea>
      </div>

      <button type="submit" class="submit-btn">Send Message</button>
    </form>

    <div class="social-links">
      <p>Or connect with me on:</p>
      <div class="links">
        <a href="https://github.com" target="_blank" rel="noopener">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://twitter.com" target="_blank" rel="noopener">Twitter</a>
      </div>
    </div>
  </div>
</section>

<style>
  .contact {
    padding: 4rem 20px;
    background-color: white;
    margin: 0 -20px;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
  }

  h2 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    color: #333;
  }

  .contact-intro {
    text-align: center;
    color: #666;
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .success-message {
    background-color: #d4edda;
    color: #155724;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 2rem;
    text-align: center;
  }

  .contact-form {
    margin-bottom: 3rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
    background-color: #667eea;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-btn:hover {
    background-color: #764ba2;
  }

  .social-links {
    text-align: center;
  }

  .social-links p {
    color: #666;
    margin-bottom: 1rem;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .links a {
    color: #667eea;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .links a:hover {
    color: #764ba2;
  }

  @media (max-width: 768px) {
    .contact {
      padding: 2rem 20px;
    }

    h2 {
      font-size: 2rem;
    }

    .links {
      flex-direction: column;
      gap: 1rem;
    }
  }
</style>
