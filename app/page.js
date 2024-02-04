import Image from "next/image";
import Logo from "/public/logo-cropped.svg";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["700"],
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-background font-light">
      <header className="bg-body flex justify-between p-4 w-full text-neutral-100">
        <Image
          priority
          src={Logo}
          alt="Adapt and Go Therapy Logo"
          className="sm:max-w-64 max-w-40"
        />
        <div className="flex gap-2">
          <Image
            src="/icons/phone-icon.png"
            alt="Phone Icon"
            width={24}
            height={24}
          />
          <div className="justify-center items-center flex text-sm">
            346-593-0721
          </div>
        </div>
      </header>
      <section className="max-w-screen-xl">
        <section className="relative flex justify-center sm:items-center sm:flex-row flex-col-reverse p-6 gap-6">
          <article>
            <h1
              className={`${playfairDisplay.className} text-3xl sm:text-6xl sm:leading-[1.5] leading-normal mb-2`}
            >
              Empowering Lives, <br /> Healing Homes
            </h1>
            <p className="mb-2 text-xl sm:text-4xl sm:absolute">
              Where licensed therapists come to you
            </p>
          </article>
          <Image
            src="/img/old-woman-nursing-home-walking-with-crutches-with-help-from-female-nurse.jpg"
            alt=""
            width={600}
            height={950}
            className="max-w-lg rounded"
          />
        </section>
      </section>
    </main>
  );
}
