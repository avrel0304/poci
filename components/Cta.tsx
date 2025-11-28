import Image from 'next/image';

export default function Cta() {
  return (
    <section
      id="cta"
      className="cta py-2 lg:py-14 lg:block lg:mb-16 overflow-hidden"
    >
      <div className="cta-wrap container px-4 mx-auto text-center relative">
        <h2 className="cta-title my-8 lg:pt-16 pt-8 lg:pb-12 font-extrabold">
          Bisnis kemitraan terpercaya dengan <br className="hidden lg:block" />
          lebih dari 8000 Juragan
          <span className="whitespace-nowrap">Es Teh Poci</span> aktif
          <br className="hidden lg:block" />
          sejak tahun 2007
        </h2>

        <div className="lg:mb-16">
          <a
            href="#"
            className="btn btn-green btn-cta mb-4 lg:mb-8 custom-shadow modal-btn"
            data-modal-target="#modal-faq"
            id="btn-faq"
          >
            Kenali Bisnis Lebih Lanjut
          </a>

          <br />

          <a
            href="https://forms.gle/jDyvEnMe5ixB5rfb6"
            target="_blank"
            className="btn btn-orange btn-cta custom-shadow"
          >
            Jadi Juragan
            <span className="whitespace-nowrap">Es Teh Poci</span> Sekarang
          </a>
        </div>

        <div className="cta-floating-left">
          <Image src="/img/cta-tehpoci-left.png" alt="Teh Poci Left" width={200} height={200} />
        </div>
        <div className="cta-floating-right">
          <Image src="/img/cta-tehpoci-right.png" alt="Teh Poci Right" width={200} height={200} />
        </div>
      </div>
    </section>
  );
}
