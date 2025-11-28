'use client';
import { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header id="header" className="header py-4 lg:pt-6 lg:pb-0">
        <div className="container px-6 mx-auto">
          <div className="flex justify-center relative">
            <label htmlFor="menu-checkbox" className="header-hamburger me-4 lg:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
              <Image src="/img/iPhone 13/hamburger.svg" alt="Hamburger" width={24} height={24} />
            </label>
            <a href="#" className="brand">
              <h1><Image src="/img/logo.png" alt="logo" className="logo" width={100} height={40} /></h1>
            </a>
            <div className="header-social-media flex">
              <a href="https://instagram.com/estehpoci" className="me-2 lg:me-4">
                <Image src="/img/instagram.png" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.tiktok.com/@estehpoci.asli">
                <Image src="/img/tiktok.png" alt="Tiktok" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <input type="checkbox" className="hidden" id="menu-checkbox" checked={isMenuOpen} onChange={() => setMenuOpen(!isMenuOpen)} />

      <nav className="navbar list-none px-6 py-10 lg:p-0 lg:pb-8 lg:pt-12">
        <div className="lg:hidden">
          <Image
            src="/img/logo.png"
            alt="logo"
            className="sidebar-logo"
            width={77}
            height={30}
          />
          <label htmlFor="menu-checkbox" className="menu-close mb-12" onClick={() => setMenuOpen(false)}>
            <Image src="/img/iPhone 13/close.png" alt="Close" width={24} height={24} />
          </label>
        </div>
        <ul className="pt-8 lg:pt-0">
          <li className="flex flex-col lg:flex-row justify-center text-lg">
            <a href="#about" className="lg:text-center" style={{ width: '194px' }} onClick={() => setMenuOpen(false)}>TENTANG KAMI</a>
            <a href="#requirement" className="lg:text-center" style={{ width: '190px' }} onClick={() => setMenuOpen(false)}>JADI JURAGAN</a>
            <a href="#products" className="lg:text-center" style={{ width: '182px' }} onClick={() => setMenuOpen(false)}>PRODUK KAMI</a>
            <a href="#package" className="lg:text-center" style={{ width: '212px' }} onClick={() => setMenuOpen(false)}>
              <div className="relative">
                <Image
                  src="/img/tag-baru.png"
                  className="object-contain lg:h-[48px] h-[36px] absolute lg:top-[-48px] lg:left-[52px] top-[-4px] right-[-50px] animate-[wiggle_2s_ease-in-out_infinite]"
                  alt="Tag Baru"
                  width={70}
                  height={30}
                />
                PAKET JURAGAN
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
