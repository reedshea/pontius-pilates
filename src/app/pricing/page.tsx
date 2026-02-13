import Image from 'next/image'

import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { FAQsAccordion, Faq } from '@/components/sections/faqs-accordion'
import { PlanComparisonTable } from '@/components/sections/plan-comparison-table'
import { Plan, PricingHeroMultiTier } from '@/components/sections/pricing-hero-multi-tier'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'

function plans(option: string) {
  return (
    <>
      <Plan
        name="Disciple Level"
        price={option === 'Monthly' ? 'IV' : 'XL'}
        period={option === 'Monthly' ? ' denarii/month' : ' denarii/year'}
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
        price={option === 'Monthly' ? 'VIII' : 'LXXX'}
        period={option === 'Monthly' ? ' denarii/month' : ' denarii/year'}
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
        price={option === 'Monthly' ? 'XII' : 'CXX'}
        period={option === 'Monthly' ? ' denarii/month' : ' denarii/year'}
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
  )
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <PricingHeroMultiTier
        id="pricing"
        headline="Pricing"
        subheadline={
          <p>
            All subscriptions payable in advance by the Ides of each month. We accept tetradrachm!
          </p>
        }
        options={['Monthly', 'Yearly']}
        plans={{ Monthly: plans('Monthly'), Yearly: plans('Yearly') }}
        footer={
          <LogoGrid>
            <Logo>
              <Image
                src="/img/logos/9-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={51}
                height={32}
              />
              <Image
                src="/img/logos/9-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={51}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/10-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={70}
                height={32}
              />
              <Image
                src="/img/logos/10-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={70}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/11-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={100}
                height={32}
              />
              <Image
                src="/img/logos/11-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={100}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/12-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/12-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/13-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={75}
                height={32}
              />
              <Image
                src="/img/logos/13-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={75}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/8-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/8-color-white-height-32.svg"
                className="not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
          </LogoGrid>
        }
      />
      {/* Plan Comparison Table */}
      <PlanComparisonTable
        id="pricing"
        plans={['Disciple Level', 'Centurion Level', "Governor's Circle"]}
        features={[
          {
            title: 'Training',
            features: [
              { name: 'Cross-training basics', value: true },
              {
                name: 'Monthly persecution challenges',
                value: { 'Disciple Level': false, 'Centurion Level': true, "Governor's Circle": true },
              },
              {
                name: 'Stations of the Crossfit',
                value: { 'Disciple Level': false, 'Centurion Level': false, "Governor's Circle": true },
              },
              {
                name: '39 lashes of motivation',
                value: { 'Disciple Level': false, 'Centurion Level': false, "Governor's Circle": true },
              },
            ],
          },
          {
            title: 'Nutrition & Wellness',
            features: [
              {
                name: 'Bread and fish nutrition guide',
                value: { 'Disciple Level': false, 'Centurion Level': true, "Governor's Circle": true },
              },
              {
                name: 'Wine to Water hydration therapy',
                value: { 'Disciple Level': false, 'Centurion Level': false, "Governor's Circle": true },
              },
            ],
          },
          {
            title: 'Community',
            features: [
              { name: 'Stone Tablet newsletter', value: true },
              { name: 'Forum Magnum access', value: true },
              {
                name: 'Golgotha Peak access',
                value: { 'Disciple Level': false, 'Centurion Level': true, "Governor's Circle": true },
              },
              {
                name: 'Bonus "Dolo Rossa" gymnastics module',
                value: { 'Disciple Level': false, 'Centurion Level': false, "Governor's Circle": true },
              },
            ],
          },
        ]}
      />
      {/* Testimonial */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={
          <p>
            Ever since we started using Oatmeal, our customer satisfaction scores have skyrocketed. The personal touch
            that their human-AI hybrid support provides is unparalleled.
          </p>
        }
        img={
          <Image
            src="/img/avatars/16-h-1000-w-1400.webp"
            alt=""
            className="not-dark:bg-white/75 dark:bg-black/75"
            width={1400}
            height={1000}
          />
        }
        name="Lynn Marshall"
        byline="Founder at Pine Labs"
      />
      {/* FAQs */}
      <FAQsAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Do I need a credit card to start the free trial?"
          answer="Yes, but don't worry, you won't be charged until the trial period is over. We won't send you an email reminding you when this happens because we are really hoping you'll forget and we can keep charging you until your cards expires"
        />
        <Faq
          id="faq-2"
          question="Can my whole team use the same inbox?"
          answer="Yes, the more the merrier! Oatmeal works best when your entire company has access. We will charge you per additional seat, but we won't tell you about this until you get your invoice."
        />
        <Faq
          id="faq-3"
          question="Is the AI agent actually a bunch of people in India?"
          answer="Not just India! We have people in lots of countries around the world pretending to be an AI, including some that are currently under sanctions, so we can't legally mention them here."
        />
        <Faq
          id="faq-4"
          question="Does Oatmeal replace my email client?"
          answer="Absolutely. The idea is that we transition you away from email entirely, so you become completely dependent on our service. Like a parasite living off a host."
        />
      </FAQsAccordion>
      {/* Call To Action */}
      <CallToActionSimpleCentered
        id="call-to-action"
        headline="Have anymore questions?"
        subheadline={
          <p>Chat to someone on our sales team, who will make promises about our roadmap that we won't keep.</p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Chat with us
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              Book a demo <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
