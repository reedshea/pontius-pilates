<script>
    
  const icons = {
    scroll: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 20c-3.2 0-4-2.667-4-4H3v2a2 2 0 0 0 2 2zm0 0a3 3 0 0 0 3-3v-7m0-6H7a2 2 0 0 0-2 2v10M18 4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1m0-6v6m-4-2H9m2 4H9"/></svg>',
    crown: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20v-2h14v2zm0-3.5L3.725 8.475q-.05 0-.113.013T3.5 8.5q-.625 0-1.062-.438T2 7t.438-1.062T3.5 5.5t1.063.438T5 7q0 .175-.038.325t-.087.275L8 9l3.125-4.275q-.275-.2-.45-.525t-.175-.7q0-.625.438-1.063T12 2t1.063.438T13.5 3.5q0 .375-.175.7t-.45.525L16 9l3.125-1.4q-.05-.125-.088-.275T19 7q0-.625.438-1.063T20.5 5.5t1.063.438T22 7t-.437 1.063T20.5 8.5q-.05 0-.112-.012t-.113-.013L19 16.5z"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14q-.425 0-.712-.288T11 13t.288-.712T12 12t.713.288T13 13t-.288.713T12 14m-4 0q-.425 0-.712-.288T7 13t.288-.712T8 12t.713.288T9 13t-.288.713T8 14m8 0q-.425 0-.712-.288T15 13t.288-.712T16 12t.713.288T17 13t-.288.713T16 14m-4 4q-.425 0-.712-.288T11 17t.288-.712T12 16t.713.288T13 17t-.288.713T12 18m-4 0q-.425 0-.712-.288T7 17t.288-.712T8 16t.713.288T9 17t-.288.713T8 18m8 0q-.425 0-.712-.288T15 17t.288-.712T16 16t.713.288T17 17t-.288.713T16 18M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"/></svg>',
    users: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M230.4 219.19A8 8 0 0 1 224 232H32a8 8 0 0 1-6.4-12.8A67.9 67.9 0 0 1 53 197.51a40 40 0 1 1 53.93 0a67.4 67.4 0 0 1 21 14.29a67.4 67.4 0 0 1 21-14.29a40 40 0 1 1 53.93 0a67.85 67.85 0 0 1 27.54 21.68M27.2 126.4a8 8 0 0 0 11.2-1.6a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8 0a52 52 0 0 1 83.2 0a8 8 0 0 0 12.8-9.61A67.85 67.85 0 0 0 203 93.51a40 40 0 1 0-53.93 0a67.4 67.4 0 0 0-21 14.29a67.4 67.4 0 0 0-21-14.29a40 40 0 1 0-53.93 0A67.9 67.9 0 0 0 25.6 115.2a8 8 0 0 0 1.6 11.2"/></svg>'
  };

  const features = [
    {
      title: "Ancient Wisdom, Modern Martyrs",
      description: "From scrolls to swole: routines tested by time and testimony",
      icon: icons.scroll
    },
    {
      title: "Render Unto Caesar",
      description: "What is fitness is fitness, what is gains is gains",
      icon: icons.crown
    },
    {
      title: "Last Supper Sessions",
      description: "Break bread with fellow disciples in our state-of-the-art sanctum",
      icon: icons.users
    },
    {
      title: "6-Day Trial (Sabbath Rest)",
      description: "Rise again with a transformation of biblical proportions",
      icon: icons.calendar
    }
  ];

  const workoutPlans = [
    {
      title: "Disciple Level",
      price: "IV",
      features: [
        "Cross-training basics",
        "Stone Tablet newsletter",
        "Forum Magnum access"
      ]
    },
    {
      title: "Centurion Level",
      price: "VIII",
      features: [
        "Bread and fish nutrition guide",
        "Monthly persecution challenges",
        "Golgotha Peak access"
      ]
    },
    {
      title: "Governor's Circle",
      price: "XII",
      features: [
        "Stations of the Crossfit",
        "39 lashes of motivation",
        "Wine to Water hydration therapy"
      ]
    }
  ];
</script>

<style>
  /* Reset */
  :global(body) {
    margin: 0;
    padding: 0;
  }

  .min-h-screen {
    min-height: 100vh;
  }

  .bg-gradient {
    background: linear-gradient(to bottom, #f3f4f6, #ffffff);
  }

  /* Hero Section */
  .hero {
    position: relative;
    padding: 6rem 1.5rem;
    text-align: center;
  }

  .hero h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .hero p {
    font-size: 1.25rem;
    color: #4b5563;
    margin-bottom: 2rem;
  }

  .btn-primary {
    background-color: #7c3aed;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 9999px;
    font-size: 1.125rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .btn-primary:hover {
    background-color: #6d28d9;
  }

  /* Features Section */
  .features {
    max-width: 72rem;
    margin: 0 auto;
    padding: 1rem 1rem;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    .features-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .features-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .feature-card {
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: border-color 0.3s;
  }

  .feature-card:hover {
    border-color: #7c3aed;
  }

  .icon {
    color: #7c3aed;
    margin-bottom: 0.5rem;
  }

  /* Pricing Section */
  .pricing {
    max-width: 72rem;
    margin: 0 auto;
    padding: 3rem 1rem;
  }

  .pricing h2 {
    text-align: center;
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .pricing-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .plan-card {
    border: 2px solid #e5e7eb;
    border-radius: 0.5rem;
    padding: 1.5rem;
    transition: border-color 0.3s;
  }

  .plan-card:hover {
    border-color: #7c3aed;
  }

  .plan-price {
    font-size: 1.875rem;
    font-weight: 700;
    color: #7c3aed;
  }

  .price-period {    
    padding-top: 1rem;
    text-align: center;
    font-style: italic;  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
  }

  .feature-item {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  .checkmark {
    color: #7c3aed;
    margin-right: 0.5rem;
  }

  /* Testimonials Section */
  .testimonials {
    background-color: #f3f4f6;
    padding: 3rem 1rem;
  }

  .testimonials h2 {
    text-align: center;
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  .testimonials-grid {
    max-width: 72rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  @media (min-width: 768px) {
    .testimonials-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .testimonial-card {
    background-color: white;
    border-radius: 0.5rem;
    padding: 1.5rem;
  }

  .testimonial-text {
    font-style: italic;
    color: #4b5563;
    margin-bottom: 1rem;
  }

  .testimonial-author {
    font-weight: 600;
  }
  .footer {
    background-color: #f3f4f6;
    padding: 1rem;
    text-align: center;
  }

</style>

<div class="min-h-screen bg-gradient">
  <!-- Hero Section -->
  <section class="hero">
    <h1>Pontius Pilates</h1>
    <p><em>It's a Killer Workout!</em></p>
    <button class="btn-primary">Begin Your Journey</button>
  </section>

  <!-- Features Section -->
  <section class="features">
    <div class="features-grid">
      {#each features as feature}
        <div class="feature-card">
          <div class="icon">
            <!-- You'll need to add your preferred icon library -->
            <span>{@html feature.icon}</span>
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <!-- Pricing Section -->
  <section class="pricing">
    <h2>Choose Your Path</h2>
    <div class="pricing-grid">
      {#each workoutPlans as plan}
        <div class="plan-card">
          <h3>{plan.title}</h3>
          <p class="plan-price">
            {plan.price} denarii
            
          </p>
          <ul class="feature-list">
            {#each plan.features as feature}
              <li class="feature-item">
                <span class="checkmark">✓</span>
                {feature}
              </li>
            {/each}
          </ul>
          <button class="btn-primary">Select Plan</button>
        </div>
      {/each}
    </div>
    <section class="price-period">All subscriptions payable in advvance by the Ides of each month. We accept tetradrachm!</section>
</section>

  <!-- Testimonials Section -->
  <section class="testimonials">
    <h2>Testament to Results (New!)</h2>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <p class="testimonial-text">
          "The Governor's Circle changed me. I've never felt more powerful!"
        </p>
        <p class="testimonial-author">—Marcus A.</p>
      </div>
      <div class="testimonial-card">
        <p class="testimonial-text">
          "I truly have a new lease on life!."
        </p>
        <p class="testimonial-author">—Lazarus O'B.</p>
      </div>
    </div>
  </section>
  <section class="footer">
    <div>
        © 33 A.D. Pontius Pilates S.P.Q.R. No rights reserved.
    </div>
  </section>
</div>