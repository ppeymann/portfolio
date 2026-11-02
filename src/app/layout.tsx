import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "../../data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pageTitle = `${site.name} — ${site.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: pageTitle,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: site.url,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: pageTitle,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    images: [
      {
        url: "/IMG_20230901_225246.jpg",
        width: 2828,
        height: 2828,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.description,
    images: ["/IMG_20230901_225246.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  description: site.description,
  url: site.url,
  image: `${site.url}/IMG_20230901_225246.jpg`,
  email: site.email,
  homeLocation: {
    "@type": "Place",
    name: site.location,
  },
  sameAs: [site.linkedin, site.github],
  knowsLanguage: ["Persian", "English"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Kermanshah University of Technology",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    educationalLevel: "Bachelor",
    name: "B.Sc. in Engineering Physics (Laser and Optics)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script type="application/ld+json">
          {JSON.stringify(personJsonLd)}
        </script>
        {children}
      </body>
    </html>
  );
}
