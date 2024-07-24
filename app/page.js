import Image from "next/image";
import Logo from "/public/logo-cropped.svg";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <main className="font-light">
      <header className="bg-background flex justify-between p-4 w-full text-neutral-100">
        <Image
          priority
          src={Logo}
          alt="Adapt and Go Therapy Logo"
          className="sm:max-w-64 max-w-40"
        />
      </header>
      <section className="bg-background ">
        <section className="max-w-screen-xl m-auto relative flex justify-center sm:items-center sm:flex-row flex-col-reverse p-6 gap-6">
          <article>
            <h1
              className={`${playfairDisplay.className} font-bold text-3xl sm:text-6xl sm:leading-[1.5] leading-normal mb-4`}
            >
              Empowering Lives, <br /> Healing Homes
            </h1>
            <p className="mb-8 text-lg sm:text-2xl">
              Where licensed therapists come to you
            </p>
            <button className="bg-accent text-lg  text-white px-10 rounded-3xl py-3">
              Contact Us
            </button>
          </article>
          <Image
            src="/img/old-woman-nursing-home-walking-with-crutches-with-help-from-female-nurse.jpg"
            alt=""
            width={600}
            height={950}
            className="max-w-lg rounded-3xl"
          />
        </section>
      </section>
      <section className="bg-white">
        <h2>Amazing</h2>
      </section>
    </main>
  );
}
