import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'

export default function NotFound() {
  return (
    <HeroSimpleCentered
      headline="This Path Leads Nowhere"
      subheadline={<p>The page you seek has not been written in the sacred scrolls. Return to the fold.</p>}
      cta={
        <Link href="/">
          Return to the temple <ArrowNarrowRightIcon />
        </Link>
      }
    />
  )
}
