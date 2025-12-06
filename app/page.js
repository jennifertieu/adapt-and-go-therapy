"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { FaDollarSign, FaHeart, FaUsers } from "react-icons/fa";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import StaffMember from "../components/StaffMember";
import Section from "../components/Section";
import ServiceTile from "../components/ServiceTile";
import { STAFF_MEMBERS } from "./const/staff";

const playfairDisplay = Playfair_Display({
  weight: ["700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="font-light">
      <Navigation />

      {/* Hero Section */}
      <section id="main-content" className="relative w-full h-screen flex items-center justify-center" aria-label="Hero section">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/women-helping-older-man-lift-weights.jpg"
            alt="Licensed physical therapist assisting an elderly man with strength training exercises using weights in a home setting"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-backgroundSecondary/50" aria-hidden="true"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`${playfairDisplay.className} uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-white opacity-0 animate-fadeIn`}
          >
            Empowering Lives, <br /> Healing Homes
          </h1>
          <p className="mb-8 text-lg md:text-xl text-white font-light opacity-0 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            Where licensed therapists come to you
          </p>
          <a
            href="mailto:kleadaptgo@gmail.com"
            className="bg-primary text-base text-body px-10 py-3 rounded-md font-medium inline-block opacity-0 animate-fadeIn focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary"
            style={{ animationDelay: "0.6s" }}
            aria-label="Contact us via email"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-white" aria-labelledby="about-heading">
        <div className="max-w-screen-xl m-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12">
          <Image
            src="/img/social-worker-taking-care-old-woman.jpg"
            alt="Professional healthcare worker providing compassionate care and support to an elderly woman in a comfortable home environment"
            width={700}
            height={467}
            className="w-full h-auto rounded-lg"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div>
            <h2
              id="about-heading"
              className={`${playfairDisplay.className} text-2xl lg:text-3xl font-bold text-body mb-6`}
            >
              Cost-efficient, Amazing Services
            </h2>
            <div className="max-w-3xl m-auto">
              <p className="text-lg text-body mb-8 leading-relaxed">
                Adapt and Go Therapy is your trusted partner in home
                occupational therapy and health physical therapy.
              </p>
              <p className="text-lg text-body mb-8 leading-relaxed">
                We specialize in providing personalized therapy staffing
                solutions to ensure the highest quality of care in the comfort
                of your own home all over the Greater Houston Area.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" aria-labelledby="services-heading">
        <div className="max-w-screen-xl m-auto">
          <h2
            id="services-heading"
            className={`${playfairDisplay.className} text-2xl lg:text-3xl font-bold mb-12 text-center`}
          >
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            <ServiceTile
              icon={FaDollarSign}
              title="Cost Efficient"
              description="Exceptional services at budget-friendly rates. We accept various insurance providers."
            />
            <ServiceTile
              icon={FaHeart}
              title="Exceptional Care"
              description="Tailored treatment plans for each individual's unique needs, ensuring the highest level of care."
            />
            <ServiceTile
              icon={FaUsers}
              title="Easy Staffing"
              description="We bring therapy to you! Our therapists work around your schedule for your convenience."
            />
          </div>
        </div>
      </Section>

      {/* Staff Section */}
      <Section className="bg-background" aria-labelledby="staff-heading">
        <div className="max-w-screen-xl m-auto">
          <h2
            id="staff-heading"
            className={`${playfairDisplay.className} text-2xl lg:text-3xl font-bold text-body mb-12 text-center`}
          >
            We're the dynamic team behind your health breakthroughs!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl m-auto" role="list">
            {STAFF_MEMBERS.map((member) => (
              <StaffMember
                key={member.name}
                name={member.name}
                title={member.title}
                imageSrc={member.imageSrc}
                initials={member.initials}
                imageSize={member.imageSize}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" aria-labelledby="contact-heading" className="bg-white">
        <div className="max-w-screen-xl m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Image
              src="/img/old-woman-nursing-home-laughing-while-doctor-taking-notes-clipboard.jpg"
              alt="Old woman laughing while doctor taking notes on clipboard"
              width={700}
              height={467}
              className="w-full h-auto rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div>
              <h2
                id="contact-heading"
                className={`${playfairDisplay.className} text-2xl lg:text-3xl font-bold text-body mb-6`}
              >
                Ready to Transform Your Health Journey?
              </h2>
              <p className="text-lg text-body mb-8 leading-relaxed">
                Take the first step towards better health and independence. Our licensed therapists bring exceptional, personalized care directly to your home throughout the Greater Houston Area. Your path to wellness starts with a simple conversation.
              </p>
              <a
                href="mailto:kleadaptgo@gmail.com"
                className="bg-primary text-base text-body px-10 py-3 rounded-md font-medium inline-block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition-colors hover:bg-primary/90"
                aria-label="Contact us via email to start your therapy journey"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
