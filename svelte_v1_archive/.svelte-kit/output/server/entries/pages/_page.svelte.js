import { X as ensure_array_like } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload) {
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
  const each_array = ensure_array_like(features);
  const each_array_1 = ensure_array_like(workoutPlans);
  $$payload.out += `<div class="min-h-screen bg-gradient svelte-18w0prt"><section class="hero svelte-18w0prt"><h1 class="svelte-18w0prt">Pontius Pilates</h1> <p class="svelte-18w0prt"><em>It's a Killer Workout!</em></p> <button class="btn-primary svelte-18w0prt">Begin Your Journey</button></section> <section class="features svelte-18w0prt"><div class="features-grid svelte-18w0prt"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let feature = each_array[$$index];
    $$payload.out += `<div class="feature-card svelte-18w0prt"><div class="icon svelte-18w0prt"><span>${html(feature.icon)}</span></div> <h3>${escape_html(feature.title)}</h3> <p>${escape_html(feature.description)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></section> <section class="pricing svelte-18w0prt"><h2 class="svelte-18w0prt">Choose Your Path</h2> <div class="pricing-grid svelte-18w0prt"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let plan = each_array_1[$$index_2];
    const each_array_2 = ensure_array_like(plan.features);
    $$payload.out += `<div class="plan-card svelte-18w0prt"><h3>${escape_html(plan.title)}</h3> <p class="plan-price svelte-18w0prt">${escape_html(plan.price)} denarii</p> <ul class="feature-list svelte-18w0prt"><!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let feature = each_array_2[$$index_1];
      $$payload.out += `<li class="feature-item svelte-18w0prt"><span class="checkmark svelte-18w0prt">✓</span> ${escape_html(feature)}</li>`;
    }
    $$payload.out += `<!--]--></ul> <button class="btn-primary svelte-18w0prt">Select Plan</button></div>`;
  }
  $$payload.out += `<!--]--></div> <section class="price-period svelte-18w0prt">All subscriptions payable in advvance by the Ides of each month. We accept tetradrachm!</section></section> <section class="testimonials svelte-18w0prt"><h2 class="svelte-18w0prt">Testament to Results (New!)</h2> <div class="testimonials-grid svelte-18w0prt"><div class="testimonial-card svelte-18w0prt"><p class="testimonial-text svelte-18w0prt">"The Governor's Circle changed me. I've never felt more powerful!"</p> <p class="testimonial-author svelte-18w0prt">—Marcus A.</p></div> <div class="testimonial-card svelte-18w0prt"><p class="testimonial-text svelte-18w0prt">"I truly have a new lease on life!."</p> <p class="testimonial-author svelte-18w0prt">—Lazarus O'B.</p></div></div></section> <section class="footer svelte-18w0prt"><div>© 33 A.D. Pontius Pilates S.P.Q.R. No rights reserved.</div></section></div>`;
}
export {
  _page as default
};
