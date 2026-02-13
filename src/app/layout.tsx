import { Main } from '@/components/elements/main'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pontius Pilates - It\'s a Killer Workout!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            cta={
              <NewsletterForm
                headline="Join the Legion"
                subheadline={
                  <p>
                    Receive sacred scrolls of wisdom and training secrets delivered by messenger pigeon.
                  </p>
                }
                action="#"
              />
            }
            links={
              <>
                <FooterCategory title="Training">
                  <FooterLink href="#">Programs</FooterLink>
                  <FooterLink href="/pricing">Tithes</FooterLink>
                  <FooterLink href="#">Sanctuaries</FooterLink>
                </FooterCategory>
                <FooterCategory title="Empire">
                  <FooterLink href="/about">About</FooterLink>
                  <FooterLink href="#">Testimonies</FooterLink>
                  <FooterLink href="#">Scrolls</FooterLink>
                </FooterCategory>
                <FooterCategory title="Resources">
                  <FooterLink href="#">Oracle</FooterLink>
                  <FooterLink href="#">Scriptures</FooterLink>
                  <FooterLink href="#">Contact</FooterLink>
                </FooterCategory>
                <FooterCategory title="Legal">
                  <FooterLink href="/privacy-policy">Privacy Edict</FooterLink>
                  <FooterLink href="#">Terms of Servitude</FooterLink>
                  <FooterLink href="#">Divine Protection</FooterLink>
                </FooterCategory>
              </>
            }
            fineprint="© 33 A.D. Pontius Pilates S.P.Q.R. No rights reserved."
          />
        </>
      </body>
    </html>
  )
}
