"use client";

import { useState } from "react";
import Image from "next/image";
import LogoCropped from "/public/logo-cropped.svg";
import Logo from "/public/logo.svg";
import { Playfair_Display } from "next/font/google";
import { FaDollarSign, FaHeart, FaUsers } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="font-light">
      <header className="bg-backgroundSecondary flex justify-between items-center p-4 w-full sticky top-0 z-50 shadow-sm">
        <Image
          priority
          src={LogoCropped}
          alt="Adapt and Go Therapy Logo"
          className="sm:max-w-64 max-w-32"
        />
        <nav className="hidden md:flex gap-6 items-center">
          <a
            href="#about"
            className="text-white hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href="tel:346-593-0721"
            className="text-white hover:text-primary transition-colors flex items-center gap-1"
          >
            <HiPhone className="text-lg" />
            <span>346-593-0721</span>
          </a>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <HiX className="text-2xl" />
          ) : (
            <HiMenu className="text-2xl" />
          )}
        </button>
      </header>
      {mobileMenuOpen && (
        <nav className="md:hidden fixed inset-0 bg-backgroundSecondary z-[60] w-full h-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <Image
              src={LogoCropped}
              alt="Adapt and Go Therapy Logo"
              className="max-w-32"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <HiX className="text-2xl" />
            </button>
          </div>
          <div className="flex flex-col p-4 gap-6 w-full max-w-sm mx-auto mt-8">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-primary transition-colors text-left py-3 text-xl"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-primary transition-colors text-left py-3 text-xl"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-primary transition-colors text-left py-3 text-xl"
            >
              Contact
            </a>
            <a
              href="tel:346-593-0721"
              className="text-white hover:text-primary transition-colors text-left py-3 flex items-center gap-2 text-xl"
            >
              <HiPhone className="text-2xl" />
              <span>346-593-0721</span>
            </a>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/women-helping-older-man-lift-weights.jpg"
            alt="Therapist helping elderly man with physical therapy exercises"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-backgroundSecondary/50"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1
            className={`${playfairDisplay.className} uppercase font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-white`}
          >
            Empowering Lives, <br /> Healing Homes
          </h1>
          <p className="mb-8 text-lg md:text-xl text-white font-light">
            Where licensed therapists come to you
          </p>
          <a
            href="mailto:kleadaptgo@gmail.com"
            className="bg-primary text-base text-body px-10 py-3 rounded-md font-medium inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="bg-white">
        <div className="max-w-screen-xl m-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12">
          <Image
            src="/img/social-worker-taking-care-old-woman.jpg"
            alt="Social worker taking care of an old woman"
            width={700}
            height={467}
            className="w-full h-auto rounded-lg"
          />
          <div>
            <h2
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
      <Section id="services">
        <div className="max-w-screen-xl m-auto">
          <h2
            className={`${playfairDisplay.className} text-2xl lg:text-3xl font-bold mb-12 text-center`}
          >
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      <Section className="bg-background">
        <div className="max-w-screen-xl m-auto">
          <h2
            className={`${playfairDisplay.className} text-2xl lg:text-3xl font-bold text-body mb-12 text-center`}
          >
            We're the dynamic team behind your health breakthroughs!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl m-auto">
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

      {/* Footer */}
      <footer id="contact" className="bg-backgroundSecondary text-white">
        <div className="max-w-screen-xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Logo Section */}
            <div className="flex flex-col items-center md:items-start">
              <Image
                src={Logo}
                alt="Adapt and Go Therapy Logo"
                className="max-w-48 mb-6"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3
                className={`${playfairDisplay.className} text-xl font-bold mb-4 text-left`}
              >
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MdLocationOn className="text-2xl text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm leading-relaxed">
                      17350 State Hwy 249, Ste 220 #14615
                      <br />
                      Houston, Texas 77064
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <HiMail className="text-2xl text-primary flex-shrink-0" />
                  <a
                    href="mailto:kleadaptgo@gmail.com"
                    className="hover:text-accent transition-colors text-sm"
                  >
                    kleadaptgo@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <HiPhone className="text-2xl text-primary flex-shrink-0" />
                  <a
                    href="tel:346-593-0721"
                    className="hover:text-accent transition-colors text-sm"
                  >
                    346-593-0721
                  </a>
                </div>
              </div>
            </div>

            {/* Additional spacing column for larger screens */}
            <div className="hidden lg:block"></div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8"></div>

          {/* Copyright */}
          <div className="text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} Adapt and Go Therapy LLC. All rights
              reserved.
            </p>
            <p className="text-xs text-white/70">
              <a
                href="https://www.freepik.com/free-photo/senior-man-nursing-home-with-doing-physical-therapy-with-help-from-nurse-using-dumbbells_28837991.htm#page=2&query=occupational%20therapy&position=11&from_view=keyword&track=ais"
                target="_blank"
                rel="noopener noreferrer"
              >
                Image by DCStudio on Freepik
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
