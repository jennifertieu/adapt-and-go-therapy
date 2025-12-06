"use client";

import Image from "next/image";
import Logo from "/public/logo.svg";
import { Playfair_Display } from "next/font/google";
import { HiMail, HiPhone } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const playfairDisplay = Playfair_Display({
  weight: ["700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  return (
    <footer id="contact" className="bg-backgroundSecondary text-white" aria-labelledby="contact-heading">
      <div className="max-w-screen-xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src={Logo}
              alt="Adapt and Go Therapy - Home health therapy services"
              className="max-w-48 mb-6"
              width={192}
              height={64}
            />
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3
              id="contact-heading"
              className={`${playfairDisplay.className} text-xl font-bold mb-4 text-left`}
            >
              Contact Us
            </h3>
            <address className="space-y-4 not-italic">
              <div className="flex items-start gap-3">
                <MdLocationOn className="text-2xl text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm leading-relaxed">
                    17350 State Hwy 249, Ste 220 #14615
                    <br />
                    Houston, Texas 77064
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <HiMail className="text-2xl text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:kleadaptgo@gmail.com"
                  className="hover:text-primary transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-1"
                  aria-label="Email us at kleadaptgo@gmail.com"
                >
                  kleadaptgo@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="text-2xl text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:346-593-0721"
                  className="hover:text-primary transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-1"
                  aria-label="Call us at 346-593-0721"
                >
                  346-593-0721
                </a>
              </div>
            </address>
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
              className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-1"
            >
              Image by DCStudio on Freepik
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

