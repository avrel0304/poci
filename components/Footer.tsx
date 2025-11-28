import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="footer lg:block lg:py-32 lg:pb-28 pb-4">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:pt-60 pt-40">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="mb-6 lg:mb-0">
              <Image
                src="/img/logo-footer.png"
                alt="Logo"
                className="lg:me-16 footer-logo"
                width={100} height={40} // Placeholder dimensions
              />
            </div>
            <div className="text-white w-full lg:w-auto">
              <div className="footer-info">
                <div
                  className="flex justify-start items-end lg:items-start lg:mb-2 mb-1"
                >
                  <div className="me-3">
                    Jl. Agung Timur IV <br />
                    Blok O2 Kav. 18-19 <br />
                    Sunter, Jakarta Utara 14350
                  </div>
                  <div>T (021) 6512323</div>
                </div>
                <div className="flex lg:mb-2 justify-start">
                  <a
                    href="#"
                    className="font-bold lg:me-4 me-2 text-yellow modal-btn"
                    data-modal-target="#modal-privacy-policy"
                  >
                    Syarat dan Kebijakan Privasi
                  </a>
                  <a
                    href="#"
                    className="font-bold text-yellow modal-btn"
                    data-modal-target="#modal-cookies"
                  >
                    Kebijakan Cookies
                  </a>
                </div>
              </div>
              <small className="copyright">
                Copyright © 2023
                <span className="whitespace-nowrap">Es Teh Poci</span>. All rights
                reserved | PT Poci Kreasi Mandiri
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
