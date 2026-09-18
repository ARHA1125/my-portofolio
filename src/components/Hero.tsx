"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HEADLINE =
  "Hi, saya Alvin Rizky Hari Adriano, Lulusan D3 Teknologi Informasi Politeknik Negeri Malang kampus Lumajang."; 

const TAGS = ["HTML", "PHP", "JavaScript", "Laravel", "Next.js", "React", "TailwindCSS",]; 

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(HEADLINE.slice(0, i));
      if (i >= HEADLINE.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-10 pt-5 pb-20 md:flex-row">
      {/* Kolom Kiri: Teks & Tags */}
      <div className="flex-1">
        <h1 className="mb-5 min-h-[1.3em] max-w-[760px] font-serif text-[44px] font-medium leading-[1.3] max-[640px]:text-[28px]">
          {typed}
          <span className="ml-0.5 inline-block h-[1em] w-[3px] animate-[blink_0.9s_steps(1)_infinite] bg-ink align-middle" />
        </h1>
        <p className="mb-5 max-w-[560px] text-muted">
          Saya adalah seorang pengembang web dan aplikasi yang berfokus pada pengembangan front-end. Saya memiliki pengalaman dalam membangun aplikasi web yang responsif dan interaktif menggunakan berbagai teknologi modern.
        </p>
        <div className="flex flex-wrap gap-x-[18px] gap-y-2 text-[13.5px] text-muted">
          {TAGS.map((t) => (
            <span key={t} className="after:ml-[18px] after:text-border after:content-['·'] last:after:content-none">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Kolom Kanan: Gambar */}
      <div className=" rounded-2xl">
        <Image
          src="/images/alvin.png" // Ganti dengan path foto kamu di folder /public
          alt="Alvin Rizky Hari Adriano"
          width={280}
          height={280}
          className="h-auto max-w-[280px] object-cover rounded-2xl shadow-md max-[640px]:max-w-[200px]"
          priority
        />
      </div>
    </div>
  );
}