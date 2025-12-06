"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import LogoCropped from "/public/logo-cropped.svg";
import { HiPhone } from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const firstMenuItemRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus first menu item when menu opens
      setTimeout(() => {
        firstMenuItemRef.current?.focus();
      }, 100);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!mobileMenuOpen || !menuRef.current) return;

    const menuItems = menuRef.current.querySelectorAll("a, button");
    const firstItem = menuItems[0];
    const lastItem = menuItems[menuItems.length - 1];

    const handleTabKey = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstItem) {
          e.preventDefault();
          lastItem?.focus();
        }
      } else {
        if (document.activeElement === lastItem) {
          e.preventDefault();
          firstItem?.focus();
        }
      }
    };

    menuRef.current.addEventListener("keydown", handleTabKey);
    return () => {
      menuRef.current?.removeEventListener("keydown", handleTabKey);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-body focus:px-4 focus:py-2 focus:rounded-md focus:font-medium"
      >
        Skip to main content
      </a>
      <header className="bg-backgroundSecondary flex justify-between items-center p-4 w-full sticky top-0 z-50 shadow-sm">
        <a
          href="#main-content"
          className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded"
        >
          <Image
            priority
            src={LogoCropped}
            alt="Adapt and Go Therapy - Home"
            className="sm:max-w-64 max-w-32"
            width={256}
            height={64}
          />
        </a>
        <nav
          className="hidden md:flex gap-6 items-center"
          aria-label="Main navigation"
        >
          <a
            href="#about"
            className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-2 py-1"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-2 py-1"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-2 py-1"
          >
            Contact
          </a>
          <a
            href="tel:346-593-0721"
            className="text-white hover:text-primary transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-2 py-1"
            aria-label="Call us at 346-593-0721"
          >
            <HiPhone className="text-lg" aria-hidden="true" />
            <span>346-593-0721</span>
          </a>
        </nav>
        <button
          ref={menuButtonRef}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? (
            <HiX className="text-2xl" aria-hidden="true" />
          ) : (
            <HiMenu className="text-2xl" aria-hidden="true" />
          )}
        </button>
      </header>
      {mobileMenuOpen && (
        <nav
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden fixed inset-0 bg-backgroundSecondary z-[60] w-full h-full flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <Image
              src={LogoCropped}
              alt="Adapt and Go Therapy"
              className="max-w-32"
              width={128}
              height={32}
            />
            <button
              onClick={closeMenu}
              className="text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded p-1"
              aria-label="Close navigation menu"
            >
              <HiX className="text-2xl" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-col p-4 gap-6 w-full max-w-sm mx-auto mt-8">
            <a
              ref={firstMenuItemRef}
              href="#about"
              onClick={closeMenu}
              className="text-white hover:text-primary transition-colors text-left py-3 text-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-2"
            >
              About
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="text-white hover:text-primary transition-colors text-left py-3 text-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-2"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-white hover:text-primary transition-colors text-left py-3 text-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-2"
            >
              Contact
            </a>
            <a
              href="tel:346-593-0721"
              onClick={closeMenu}
              className="text-white hover:text-primary transition-colors text-left py-3 flex items-center gap-2 text-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-backgroundSecondary rounded px-2"
              aria-label="Call us at 346-593-0721"
            >
              <HiPhone className="text-2xl" aria-hidden="true" />
              <span>346-593-0721</span>
            </a>
          </div>
        </nav>
      )}
    </>
  );
}

