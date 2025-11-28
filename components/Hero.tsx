'use client';
import { useEffect } from 'react';
import Image from 'next/image';

declare global {
  interface Window {
    Swiper: any;
  }
}

export default function Hero() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.Swiper) {
      new window.Swiper('.swiper', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });
    }
  }, []);

  return (
    <section id="hero" className="hero overflow-hidden">
      <div className="block lg:hidden">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src="/img/hero-bg-1-sm.png" alt="Hero 1" className="w-full" width={375} height={667} />
            </div>
            <div className="swiper-slide">
              <Image src="/img/hero-bg-2-sm.png" alt="Hero 2" className="w-full" width={375} height={667} />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <Image src="/img/hero-bg-1.png" alt="Hero 1" className="w-full" width={1440} height={810} />
            </div>
            <div className="swiper-slide">
              <Image src="/img/hero-bg-2.png" alt="Hero 2" className="w-full" width={1440} height={810} />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
