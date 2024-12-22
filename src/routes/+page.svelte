<script>
  // You can add your script here if needed
</script>

<style>
  /* Basic styles for the sections */
  .hero {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
  }
  .plans, .testimonials, .footer {
    padding: 50px;
    text-align: center;
  }
  .plans .plan {
    display: inline-block;
    width: 25%;
    margin: 0px;
    padding: 0px;
    border: 1px solid #ddd;
  }

  @media (max-width: 768px) {
    .plans .plan {
      width: 100%;
      display: block;
      margin: 10px 0;
    }
  }
</style>

<div class="hero">
  <h1>Pontius Pilates</h1>
  <p>It's a killer workout!</p>
</div>

<div class="plans">
  <h2>Choose your path</h2>
  <div class="plan">
    <h3>Disciple</h3>
    <p>III denarii/month</p>
  </div>
  <div class="plan">
    <h3>Centurion</h3>
    <p>VI denarii/month</p>
    
  </div>
  <div class="plan">
    <h3>Governor</h3>
    <p>I quinarius/month</p>
    
  </div>
  <div>All plans payable in advance by the ides of each month</div>
</div>

<div class="testimonials">
  <h2>Testaments to results (new!)</h2>
  <p>""The Governor workouts changed my life. I've never felt more powerful!" - Marcus A.</p>
  <p>"I love it!" - John Smith</p>
</div>

<div class="footer">
  <p>&copy; 33 AD Pontius Pilates. No rights reserved.</p>
</div>