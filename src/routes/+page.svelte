<script>
  const features = [
    {
      title: "Ancient wisdom, modern results",
      description: "Discover fitness routines that have stood the test of time",
      icon: "scroll"
    },
    {
      title: "Governor's Circle Premium Access",
      description: "Join our elite training program for divine results",
      icon: "crown"
    },
    {
      title: "Group Classes",
      description: "Train with fellow disciples in our state-of-the-art facilities",
      icon: "users"
    },
    {
      title: "6-Day Trial (plus a rest day)",
      description: "Experience a transformation of biblical proportions",
      icon: "calendar"
    }
  ];

  const workoutPlans = [
    {
      title: "Disciple Level",
      price: "IV",
      features: [
        "Basic workout routines",
        "Weekly newsletter",
        "Community forum access"
      ]
    },
    {
      title: "Centurion Level",
      price: "VIII",
      features: [
        "Advanced workout plans",
        "Nutrition guidance",
        "Monthly challenges",
        "Live streaming classes"
      ]
    },
    {
      title: "Governor's Circle",
      price: "XII",
      features: [
        "Elite training programs",
        "1-on-1 coaching",
        "Exclusive events",
        "Priority booking",
        "Custom meal plans"
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
    padding: 3rem 1rem;
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
            <span>{feature.icon}</span>
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
        Copyright © 2021 Pontius Pilates. No rights reserved.
    </div>
  </section>
</div>