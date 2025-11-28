import Image from 'next/image';

export default function Requirement() {
  return (
    <section
      id="requirement"
      className="requirement lg:block py-6 overflow-hidden"
    >
      <div className="container px-6 mx-auto">
        <div className="requirement-caption text-center mb-8 lg:my-16">
          <h2
            className="section-title requirement-title mb-2 lg:mb-6 font-extrabold"
          >
            Syarat Jadi Juragan
            <span className="whitespace-nowrap">Es Teh Poci</span>
          </h2>
          <p className="requirement-description font-bold">
            Dengan syarat-syarat yang cukup mudah, <br />
            dapatkan kesempatan untuk mempunyai usaha
            <span className="whitespace-nowrap">Es Teh Poci</span> yang terpercaya
          </p>
        </div>

        <div
          className="lg:flex lg:flex-wrap grid grid-cols-2 text-center gap-x-4 gap-y-8 lg:gap-16 mt-6 lg:mt-24 justify-center"
        >
          <div className="requirement-item flex flex-col items-center">
            <Image src="/img/requirement-1.png" alt="Komitmen" className="mb-4" width={100} height={100} />
            <h3 className="font-bold lg:text-2xl mb-1 lg:mb-4">1. Komitmen</h3>
            <p>
              Memiliki dedikasi yang tinggi dan <br />
              upaya yang berkelanjutan untuk <br />
              menjadi Juragan
              <span className="whitespace-nowrap">Es Teh Poci</span>
            </p>
          </div>
          <div className="requirement-item flex flex-col items-center">
            <Image src="/img/requirement-2.png" alt="Modal" className="mb-4" width={100} height={100} />
            <h3 className="font-bold lg:text-2xl mb-1 lg:mb-4">2. Modal</h3>
            <p>
              Memiliki modal yang cukup untuk <br />
              membiayai berbagai kebutuhan <br />
              seperti inventaris, peralatan, <br />
              tenaga kerja, pemasaran, <br />
              dan biaya operasional lainnya
            </p>
          </div>
          <div className="requirement-item flex flex-col items-center">
            <Image src="/img/requirement-3.png" alt="Lokasi" className="mb-4" width={100} height={100} />
            <h3 className="font-bold lg:text-2xl mb-1 lg:mb-4">3. Lokasi</h3>
            <p>
              Memilih lokasi yang strategis <br />
              untuk dapat meningkatkan <br />
              performa bisnis
            </p>
          </div>
          <div className="requirement-item flex flex-col items-center">
            <Image
              src="/img/requirement-4.png"
              alt="Beli Paket"
              className="mb-4"
              width={100} height={100}
            />
            <h3 className="font-bold lg:text-2xl mb-1 lg:mb-4">4. Beli Paket</h3>
            <p>
              Membeli paket
              <span className="whitespace-nowrap">Es Teh Poci</span> <br />
              yang telah disediakan, yaitu <br />
              paket reguler atau paket hemat <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
