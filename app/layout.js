import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adapt and Go Therapy | Home Health Therapy Services in Houston, Texas",
  description:
    "Adapt and Go Therapy provides cost-efficient home occupational therapy and physical therapy services throughout the Greater Houston Area. Licensed therapists come to you for personalized care.",
  keywords: [
    "home health therapy",
    "occupational therapy",
    "physical therapy",
    "Houston Texas",
    "home therapy services",
    "occupational therapist",
    "physical therapist",
    "home health care",
  ],
  authors: [{ name: "Adapt and Go Therapy" }],
  creator: "Adapt and Go Therapy",
  publisher: "Adapt and Go Therapy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adaptandgotherapy.com",
    siteName: "Adapt and Go Therapy",
    title: "Adapt and Go Therapy | Home Health Therapy Services in Houston",
    description:
      "Cost-efficient home occupational therapy and physical therapy services throughout the Greater Houston Area. Licensed therapists come to you.",
    images: [
      {
        url: "/img/women-helping-older-man-lift-weights.jpg",
        width: 1200,
        height: 630,
        alt: "Therapist helping elderly man with physical therapy exercises",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adapt and Go Therapy | Home Health Therapy Services",
    description:
      "Cost-efficient home occupational therapy and physical therapy services throughout the Greater Houston Area.",
    images: ["/img/women-helping-older-man-lift-weights.jpg"],
  },
  alternates: {
    canonical: "https://adaptandgotherapy.com",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Adapt and Go Therapy",
  description:
    "Home health therapy company providing occupational therapy and physical therapy services in Houston, Texas",
  url: "https://adaptandgotherapy.com",
  telephone: "+1-346-593-0721",
  email: "kleadaptgo@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "17350 State Hwy 249, Ste 220 #14615",
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77064",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Houston",
  },
  serviceType: [
    "Occupational Therapy",
    "Physical Therapy",
    "Speech Therapy",
  ],
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
