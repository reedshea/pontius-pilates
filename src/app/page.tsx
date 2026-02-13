import Image from 'next/image'

import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'
import { TestimonialLargeQuote } from '@/components/sections/testimonial-with-large-quote'
import { AnnouncementBadge } from '@/components/elements/announcement-badge'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={<AnnouncementBadge href="#" text="Now open in Jerusalem, Nazareth, & Capernaum" cta="Learn more" />}
        headline="Pontius Pilates"
        subheadline={
          <p>
            It's a killer workout! The only fitness program that promises death to your old self and resurrection of your best body. Wash your hands of weakness.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Begin Your Journey
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              Watch the Testimony <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
          </div>
        }
        demo={
          <>
          </>
        }
      />

      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="The Gospel of Gains"
        headline="Suffering Builds Character Since XXXIII A.D."
        subheadline={
          <p>
            From the shores of Galilee to the hills of Rome, Pontius Pilates has guided countless disciples on their
            journey to physical and spiritual perfection. Our methods are time-tested and martyr-approved.
          </p>
        }
      >
        <Stat stat="XCIX.IX%" text="Resurrection rate — rise again after every workout" />
        <Stat stat="MDCC+" text="Souls transformed through our sacred training methods" />
        <Stat stat="XL" text="Days and nights of fasted cardio" />
      </StatsWithGraph>

      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="Blessed Are the Swole"
        headline="Ancient Wisdom, Modern Martyrs"
        subheadline={
          <p>
            Train like the legions of Rome. Suffer like the saints of old. Transform your mortal vessel into a temple of
            divine gains.
          </p>
        }
        features={
          <>
            <Feature
              demo={undefined}
              headline="The Way of the Crossfit"
              subheadline={
                <p>
                  Carry your burdens with proper form. What doesn't crucify you makes you stronger.
                </p>
              }
              cta={
                <Link href="#">
                  Enter the temple <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={undefined}
              headline="Render Unto Caesar"
              subheadline={
                <p>Caesar gets your taxes. We get your chest and triceps. God gets your glutes.</p>
              }
              cta={
                <Link href="#">
                  Join the legion <ArrowNarrowRightIcon />
                </Link>
              }
            />
          </>
        }
      />

      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="Testimonies from the Faithful"
        subheadline={<p>Hear from those who have walked the path before you and emerged transformed.</p>}
      >
        <Testimonial
          quote={
            <p>
              The Governor's Circle changed me completely. I used to be a tax collector with terrible posture. Now I
              stand tall and have the core strength to carry any burden. Highly recommend the 39 lashes of motivation.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Marcus Aurelius"
          byline="Former Tax Collector, Capernaum"
        />
        <Testimonial
          quote={
            <p>
              I truly have a new lease on life! After completing the Resurrection Program, I feel like a completely
              different person. It's like I was dead before and now I'm alive again.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Lazarus O'Bethany"
          byline="Professional Resurrectee"
        />
        <Testimonial
          quote={
            <p>
              The Stations of the Crossfit absolutely crushed me — in the best way possible. XIV stations, XIV
              transformations. My glutes have never looked more divine.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Simon of Cyrene"
          byline="Cross-Carrying Specialist"
        />
        <Testimonial
          quote={
            <p>
              I denied knowing about fitness three times before. But after joining Pontius Pilates, I can proudly say I
              am a true believer. The gains are real.
            </p>
          }
          img={
            <Image
              src="/img/avatars/12-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Peter"
          byline="Fisherman & Rock"
        />
        <Testimonial
          quote={
            <p>
              The Wine to Water hydration therapy is genius. I used to drink too much at parties. Now I'm the most
              hydrated person at every wedding I attend.
            </p>
          }
          img={
            <Image
              src="/img/avatars/11-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Mary M."
          byline="Wedding Enthusiast"
        />
        <Testimonial
          quote={
            <p>
              I was skeptical at first — what do Romans know about fitness? But after XXX pieces of silver worth of
              sessions, I can say it was worth every denarius. Life-changing.
            </p>
          }
          img={
            <Image
              src="/img/avatars/14-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Judas I."
          byline="Financial Advisor"
        />
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Frequently Asked Questions">
        <Faq
          id="faq-1"
          question="Do I need to bring my own cross?"
          answer="No, we provide all necessary equipment including crosses, crowns of thorns, and complimentary towels. However, if you have a personal cross you've been carrying, we encourage you to bring it — it's more meaningful that way."
        />
        <Faq
          id="faq-2"
          question="Is there parking for chariots?"
          answer="Yes! We offer complimentary chariot parking for all members, with valet service available for Governor's Circle members. Donkeys and camels can be hitched at the designated stable area near the entrance."
        />
        <Faq
          id="faq-3"
          question="What's the cancellation policy?"
          answer="Membership is eternal. Much like salvation, once you commit to Pontius Pilates, there is no turning back. We believe in permanent transformation. Your denarii will be collected in perpetuity or until the Second Coming, whichever occurs first."
        />
        <Faq
          id="faq-4"
          question="Are there group classes available?"
          answer="Absolutely! Our most popular group class is Stations of the Crossfit — a XIV-station circuit that will push your body and soul to their limits. We also offer 'Last Supper Nutrition Workshops' and 'Garden of Gethsemane Yoga' for those seeking a more contemplative workout."
        />
      </FAQsTwoColumnAccordion>
      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="All subscriptions payable in advance by the Ides of each month. We accept tetradrachm!"
        plans={
          <>
            <Plan
              name="Disciple Level"
              price="IV"
              period=" denarii"
              subheadline={<p>Begin your journey on the path to righteousness</p>}
              features={[
                'Cross-training basics',
                'Stone Tablet newsletter',
                'Forum Magnum access',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Select Plan
                </SoftButtonLink>
              }
            />
            <Plan
              name="Centurion Level"
              price="VIII"
              period=" denarii"
              subheadline={<p>For the devoted who seek greater challenges</p>}
              badge="Most popular"
              features={[
                'Bread and fish nutrition guide',
                'Monthly persecution challenges',
                'Golgotha Peak access',
              ]}
              cta={
                <ButtonLink href="#" size="lg">
                  Select Plan
                </ButtonLink>
              }
            />
            <Plan
              name="Governor's Circle"
              price="XII"
              period=" denarii"
              subheadline={<p>The ultimate transformation of biblical proportions</p>}
              features={[
                'Stations of the Crossfit',
                '39 lashes of motivation',
                'Wine to Water hydration therapy',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Select Plan
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      <TestimonialLargeQuote 
        quote="I squandered my gains on riotous living — tavern nights, not a single squat. Hit rock bottom eating with the swine. But when I returned, they welcomed me with open arms and killed the fatted calf for protein. My six-pack was lost, but now is found." 
        img={<Image src="/img/prodigal-son.jpg" alt="" width={160} height={160} />}
        name="The Prodigal Son"
        byline="Returned Desciple"      
      >

      </TestimonialLargeQuote>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to Rise Again?"
        subheadline={
          <p>
            Join the faithful who have transformed their bodies and souls through the sacred art of Pontius Pilates.
            Your resurrection awaits.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#pricing" size="lg">
              Begin Your Journey
            </ButtonLink>
          </div>
        }
      />
    </>
  )
}
