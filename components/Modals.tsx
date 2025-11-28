'use client';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Modals() {
  useEffect(() => {
    const modalBtns = document.querySelectorAll('.modal-btn');
    const modals = document.querySelectorAll('.modal');
    const modalCloses = document.querySelectorAll('.modal-close');

    modalBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const target = btn.getAttribute('data-modal-target');
        if (target) {
          document.querySelector(target)?.classList.add('active');
        }
      });
    });

    modalCloses.forEach(closeBtn => {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeBtn.closest('.modal')?.classList.remove('active');
      });
    });

    modals.forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });

    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
      const title = accordion.querySelector('.accordion-title');
      title?.addEventListener('click', () => {
        accordion.classList.toggle('active');
      });
    });
  }, []);

  return (
    <>
      <div id="modal-faq" className="modal">
        <div className="modal-wrap py-6 lg:py-12 px-6 lg:px-16 relative">
          <a href="#" className="modal-close">
            <Image src="/img/close-button.png" alt="Close" width={24} height={24} />
          </a>
          <div className="flex pt-8 lg:pt-20 lg:flex-row flex-col">
            <div className="flex-1 mb-4 lg:mb-0">
              <h2 className="section-title font-bold">FAQ</h2>
              <div className="section-subtitle font-bold">
                Pertanyaan yang sering diajukan
              </div>
            </div>
            <div className="accordion-wrap flex-1">
              <div className="accordion" id="accordion-1">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Apakah ada pendaftaran Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span> melalui
                    Facebook atau WhatsApp?
                  </h3>
                  <p className="accordion-description mt-2">
                    Pendaftaran Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span> hanya
                    melalui website <strong>estehpoci.id</strong>, selain dari
                    website sudah dapat dipastikan bahwa itu penipuan atau palsu.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-2">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Apakah
                    <span className="whitespace-nowrap">Es Teh Poci</span> memiliki
                    agen?
                  </h3>
                  <p className="accordion-description mt-2">
                    Kami memiliki 36 kantor pelayanan yang tersebar di seluruh
                    Indonesia dan tidak pernah memiliki “agen”. Hati-hati jika ada
                    yang mengatasnamakan sebagai agen.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-3">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Apakah boleh beli bahan baku/booth saja?
                  </h3>
                  <p className="accordion-description mt-2">
                    Tidak bisa, Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span> hanya bisa
                    dibeli secara paket (meja, peralatan, dan bahan baku).
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-4">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Berapa harga jual Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span>?
                  </h3>
                  <div className="accordion-description mt-2">
                    Dapat dilihat dalam informasi Paket Juragan dan terdapat 3
                    harga paket kemitraan:
                    <ol style={{ listStyle: 'lower-roman', paddingLeft: '40px' }}>
                      <li>Jawa</li>
                      <li>Sulawesi, Kalimantan, & Sumatera</li>
                      <li>Bali</li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="accordion" id="accordion-5">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Bagaimana proses menjadi Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span>?
                  </h3>
                  <p className="accordion-description mt-2">
                    Dimulai dengan mengisi form yang ada di website
                    <b>estehpoci.id</b>. Selanjutnya akan ada proses tanya jawab &
                    serta administrasi, hingga pengiriman paket awal dan
                    memerlukan proses selama 1-3 minggu, setelah aplikasi
                    disetujui.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-6">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Apakah pembayaran Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span> bisa
                    dicicil?
                  </h3>
                  <p className="accordion-description mt-2">
                    Pembayaran tidak bisa dicicil.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-8">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Apakah “Booth & Peralatan” sudah menjadi hak milik?
                  </h3>
                  <p className="accordion-description mt-2">
                    Booth & peralatan sudah menjadi hak milik selama masih
                    bergabung menjadi Juragan aktif
                    <span className="whitespace-nowrap">Es Teh Poci</span>. Jika sudah
                    tidak aktif, maka atribut merk
                    <span className="whitespace-nowrap">Es Teh Poci</span> harus
                    dihilangkan.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-9">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Apakah jadi Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span> memiliki
                    sistem bagi hasil?
                  </h3>
                  <p className="accordion-description mt-2">
                    Semua keuntungan menjadi milik Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span>. Kewajiban
                    Juragan <span className="whitespace-nowrap">Es Teh Poci</span>,
                    hanya membeli bahan baku dari
                    <span className="whitespace-nowrap">Es Teh Poci</span>.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-10">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Apakah bisa berkunjung ke kantor pelayanan
                    <span className="whitespace-nowrap">Es Teh Poci</span> sesuai
                    dengan domisili Juragan/ Calon Juragan?
                  </h3>
                  <p className="accordion-description mt-2">
                    Bagi Calon Juragan, informasi mengenai pendaftaran kemitraan,
                    hanya dapat dilakukan melalui website <b>estehpoci.id</b> dan
                    kantor pelayanan tidak menerima pendaftaran Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span> secara
                    langsung.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-11">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Berapa syarat jarak antar Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span>?
                  </h3>
                  <p className="accordion-description mt-2">
                    Ketentuan jarak akan diputuskan oleh tim survei
                    <span className="whitespace-nowrap">Es Teh Poci</span>.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-12">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Apakah ada paket Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span> yang lebih
                    ekonomis?
                  </h3>
                  <p className="accordion-description mt-2">
                    Paket Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span> hanya ada
                    Paket Hemat & Reguler, sesuai dengan informasi dari website
                    <b>estehpoci.id</b> dan jika ada yang menawarkan harga lebih
                    rendah atau harga promo, dapat dipastikan itu penipuan atau
                    palsu.
                  </p>
                </div>
              </div>
              <div className="accordion" id="accordion-13">
                <div className="py-1">
                  <Image
                    src="/img/chevron-down.png"
                    alt="chevron"
                    className="chevron"
                    width={24} height={24}
                  />
                </div>
                <div>
                  <h3 className="accordion-title lg:text-2xl font-bold">
                    Siapa yang akan menanggung biaya ongkir pengiriman booth,
                    peralatan, & bahan baku?
                  </h3>
                  <p className="accordion-description mt-2">
                    Pengiriman tidak dikenakan ongkir, kecuali berada diluar
                    jangkauan kantor pelayanan
                    <span className="whitespace-nowrap">Es Teh Poci</span> yang
                    mengharuskan mengirimkan melalui pengiriman pihak ketiga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="modal-privacy-policy" className="modal">
        <div className="modal-wrap py-6 lg:py-12 px-12 lg:px-16 relative">
          <a href="#" className="modal-close">
            <Image src="/img/close-button.png" alt="Close" width={24} height={24} />
          </a>
          <div className="pt-20">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Syarat dan Kebijakan Privasi
                </h3>
                <p>
                  Terima kasih sudah mengunjungi situs estehpoci.id, kami selalu
                  berusaha untuk menjaga kepercayaan konsumen terhadap brand
                  dengan berkomitmen untuk melindungi dan menjaga kerahasian data
                  konsumen di internet.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Kebijakan Kerahasiaan Internet
                  <span className="whitespace-nowrap">Es Teh Poci</span>
                </h3>
                <p>
                  <span className="whitespace-nowrap">Es Teh Poci</span> dipersilakan
                  untuk menyediakan informasi kepada semua konsumennya tentang
                  kebijakan kerahasiaan online.
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan berusaha
                  sebaik-baiknya untuk melindungi kerahasiaan setiap pengunjung
                  situsnya.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Jenis-jenis Informasi yang Dikumpulkan dan Penggunaannya
                </h3>
                <p>
                  <span className="whitespace-nowrap">Es Teh Poci</span> hanya
                  menyimpan data pribadi seperti nama, alamat rumah, dan alamat
                  email yang diserahkan secara sukarela. Sebagai contoh: data
                  pribadi akan diminta ketika konsumen menyampaikan saran, kritik,
                  dan atau feedback atas website atau produk kami, atau ketika
                  konsumen mendaftar ke dalam sebuah kontes/undian yang
                  diselenggarakan
                  <span className="whitespace-nowrap">Es Teh Poci</span>.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Berbagi Data Pribadi</h3>
                <p>
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan berbagi
                  data pribadi kepada rekan bisnis
                  <span className="whitespace-nowrap">Es Teh Poci</span>, meliputi
                  korporasi, pihak franchise, anak perusahaan dan afiliasinya.
                  Adapun informasi yang digunakan oleh
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan
                  mengikuti kebijakan yang berlaku. Dalam periode waktu tertentu,
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan mengirim
                  informasi marketing kepada konsumen seperti kupon diskon,
                  informasi produk baru, dan lain-lain. Apabila konsumen tidak
                  berkenan menerima kiriman tersebut, maka
                  <span className="whitespace-nowrap">Es Teh Poci</span> tidak akan
                  mengirimkannya.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Berbagi Data Pribadi</h3>
                <p className="mb-2">
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan berbagi
                  data pribadi kepada rekan bisnis
                  <span className="whitespace-nowrap">Es Teh Poci</span>, meliputi
                  korporasi, pihak franchise, anak perusahaan dan afiliasinya.
                  Adapun informasi yang digunakan oleh
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan
                  mengikuti kebijakan yang berlaku. Dalam periode waktu tertentu,
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan mengirim
                  informasi marketing kepada konsumen seperti kupon diskon,
                  informasi produk baru, dan lain-lain. Apabila konsumen tidak
                  berkenan menerima kiriman tersebut, maka
                  <span className="whitespace-nowrap">Es Teh Poci</span> tidak akan
                  mengirimkannya.
                </p>
                <p className="mb-2">
                  Ada beberapa perusahaan yang terkait dengan
                  <span className="whitespace-nowrap">Es Teh Poci</span> untuk
                  memenuhi fungsi-fungsi tertentu, seperti: pesanan, membantu
                  program promosi, penyediaan jasa teknisi untuk situs kami, dan
                  lain-lain. Perusahaan-perusahaan ini mungkin memiliki akses
                  kepada data pribadi apabila dibutuhkan dalam melakukan
                  pekerjaannya. Namun demikian, perusahaan ini hanya diperbolehkan
                  menggunakan data-data tersebut untuk tujuan pekerjaan dan bukan
                  untuk yang lain.
                </p>
                <p className="mb-2">
                  <span className="whitespace-nowrap">Es Teh Poci</span> tidak
                  menjual, mentransfer, atau menyebarluaskan data pribadi kepada
                  pihak ketiga di luar rekan bisnis
                  <span className="whitespace-nowrap">Es Teh Poci</span>. Namun,
                  dengan izin konsumen,
                  <span className="whitespace-nowrap">Es Teh Poci</span> secara
                  berkala akan mengirimkan informasi marketing atas nama rekan
                  bisnis
                  <span className="whitespace-nowrap">Es Teh Poci</span> perihal
                  produk atau jasa yang mereka sediakan yang mungkin menarik minat
                  konsumen. Sebelumnya konsumen akan ditanya apakah berkenan
                  menerima materi dari rekan bisnis
                  <span className="whitespace-nowrap">Es Teh Poci</span>. Jika setuju
                  menerima materi tersebut,
                  <span className="whitespace-nowrap">Es Teh Poci</span> tidak akan
                  memberikan data pribadi konsumen kepada rekan bisnis
                  <span className="whitespace-nowrap">Es Teh Poci</span>, tapi
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan
                  mengirimkannya atas nama rekan bisnis
                  <span className="whitespace-nowrap">Es Teh Poci</span>.
                </p>
                <p>
                  <span className="whitespace-nowrap">Es Teh Poci</span> memiliki hak
                  untuk menggunakan atau memberi informasi apa pun yang diminta
                  apabila dibutuhkan aparat hukum, untuk melindungi integritas
                  situs, atas permintaan konsumen, atau ketika dibutuhkan
                  kerjasama dalam sebuah investigasi kepolisian atau keamanan
                  publik.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Akses</h3>
                <p className="mb-2">
                  Konsumen memiliki kuasa atas informasi/data yang diberikan
                  kepada <span className="whitespace-nowrap">Es Teh Poci</span> secara
                  online. Apabila konsumen bermaksud mengubah data di kontak,
                  konsumen dapat menghubungi
                  <span className="whitespace-nowrap">Es Teh Poci</span> via email
                  atau alamat di bawah ini.
                </p>
                <p>
                  Untuk melihat data pribadi konsumen yang dimiliki oleh
                  <span className="whitespace-nowrap">Es Teh Poci</span> atau untuk
                  meminta
                  <span className="whitespace-nowrap">Es Teh Poci</span> menggunakan
                  data tersebut, konsumen bisa klik di sini.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Sambungan ke Situs Lain</h3>
                <p>
                  <span className="whitespace-nowrap">Es Teh Poci</span> tidak
                  menyediakan sambungan ke situs lain yang tidak dioperasikan oleh
                  perusahaan <span className="whitespace-nowrap">Es Teh Poci</span>.
                  Apabila konsumen mengunjungi situs tersebut, konsumen perlu
                  melihat kebijakan kerahasiaan yang mereka miliki.
                  <span className="whitespace-nowrap">Es Teh Poci</span> tidak
                  bertanggung jawab atas kebijakan dan praktik yang diterapkan
                  perusahaan lain terhadap data pribadi yang konsumen serahkan.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Situs <span className="whitespace-nowrap">Es Teh Poci</span> Lain
                </h3>
                <p>
                  Semua situs
                  <span className="whitespace-nowrap">Es Teh Poci</span> yang
                  dioperasikan oleh perusahaan
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan
                  mengikuti kebijakan kerahasiaan ini. Kebijakan beberapa situs
                  <span className="whitespace-nowrap">Es Teh Poci</span> mungkin
                  karena budaya lokal, hukum yang berlaku atau situasi yang ada.
                  Namun demikian, situs yang dioperasikan oleh perusahaan
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan
                  menghormati komitmen kepada konsumen
                  <span className="whitespace-nowrap">Es Teh Poci</span> terkait
                  dengan kebijakan data pribadi dan penggunaannya.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Perubahan dalam Kebijakan Kerahasiaan Kami
                </h3>
                <p className="mb-2">
                  Kebijakan kerahasiaan ini berlaku sejak bulan Mei 2023. Seiring
                  berjalannya waktu, mungkin akan ada beberapa hal yang dirasa
                  perlu diubah. Apabila
                  <span className="whitespace-nowrap">Es Teh Poci</span> mengubah
                  kebijakan kerahasiaan,
                  <span className="whitespace-nowrap">Es Teh Poci</span> akan
                  menerbitkan revisinya di sini.
                  <span className="whitespace-nowrap">Es Teh Poci</span> menyarankan
                  untuk selalu melihat versi terbaru dari kebijakan kerahasiaan
                  <span className="whitespace-nowrap">Es Teh Poci</span> secara
                  berkala. Namun, apa pun perubahannya tidak akan menurunkan
                  standar <span className="whitespace-nowrap">Es Teh Poci</span> dalam
                  menggunakan data pribadi yang sudah terkumpul.
                </p>
                <p>
                  Apabila konsumen memiliki pertanyaan tentang kebijakan
                  kerahasiaan internet
                  <span className="whitespace-nowrap">Es Teh Poci</span>, silakan
                  hubungi di:..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="modal-cookies" className="modal">
        <div className="modal-wrap py-6 lg:py-12 px-12 lg:px-16 relative">
          <a href="#" className="modal-close">
            <Image src="/img/close-button.png" alt="Close" width={24} height={24} />
          </a>
          <div className="pt-20">
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Kebijakan Cookies</h3>
                <p>
                  Kebijakan cookie PT Poci Kreasi Mandiri “<span
                    className="whitespace-nowrap"
                    >Es Teh Poci</span
                  >” berlaku untuk situs
                  <span className="whitespace-nowrap">Es Teh Poci</span> dan semua
                  subdomain yang terkait. Dengan menggunakan situs
                  <span className="whitespace-nowrap">Es Teh Poci</span>, penggunaan
                  cookie untuk menggunakan dan mengumpulkan data Anda dengan
                  tujuan penggunaan & pengumpulan data, Anda menyetujui penggunaan
                  cookie yang ada. Kami informasikan kepada Anda bahwa, penggunaan
                  cookie dapat memahami bagaimana Anda menggunakan situs ini.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Tentang Cookies</h3>
                <p>
                  Cookie adalah bagian kecil data yang dikirim dan disimpan di
                  perangkat komputer Anda atau perangkat lain ketika Anda
                  mengunjungi sebuah situs. Ketika Anda mengunjungi situs yang
                  sama, cookie akan memastikan bahwa perangkat yang Anda gunakan
                  dikenali. Dengan menggunakan cookie dan teknologi yang serupa
                  dengan cookie, situs ini dapat menyimpan informasi tentang
                  kunjungan dan pengunjung.
                </p>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Cookie Kami</h3>
                <p className="mb-6">
                  Sebagaimana cookie yang dijelaskan di bawah ini digunakan untuk
                  meningkatkan situs dan tidak mengandung informasi pribadi yang
                  memungkinkan kami untuk mengidentifikasi Anda (seperti nama Anda
                  atau informasi terperinci lainnya). Penggunaan cookie ini
                  berlaku untuk www.estehpoci.co.id dan subdomain terkait yang
                  beroperasi dan dikontrol oleh
                  <span className="whitespace-nowrap">Es Teh Poci</span>.
                  <span className="whitespace-nowrap">Es Teh Poci</span> menggunakan
                  informasi yang dikumpulkan oleh cookie dengan aturan yang ada di
                  Kebijakan Privasi kami. Ada beberapa jenis cookie yang kami
                  gunakan:
                </p>

                <div className="ms-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2">Functional Cookies</h4>
                    <p>
                      Cookie ini memungkinkan kami untuk mengingat preferensi Anda
                      dan untuk menyediakan yang lebih personal, seperti
                      menyesuaikan beberapa halaman situs tertentu, mengingat jika
                      kami pernah meminta Anda untuk berpartisipasi dalam promosi
                      dan layanan lainnya yang Anda minta. Semua fitur ini
                      membantu kami untuk meningkatkan kunjungan Anda dan
                      bagaimana cara kami berkomunikasi dalam beberapa aspek.
                      Informasi yang dikumpulkan dapat dianonimkan dan kami tidak
                      dapat melacak aktivitas penelusuran Anda pada situs lainnya.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold mb-2">Analytic Cookies</h4>
                    <p>
                      Cookie ini mengumpulkan informasi bagaimana situs kami
                      digunakan. Untuk meningkatkan situs kami, kami melacak data
                      untuk keperluan statistik dan analitis, sebagai contohnya,
                      melacak jumlah kunjungan dan halaman mana yang paling sering
                      dikunjungi pengunjung. Semua informasi dari cookie ini
                      dikumpulkan dan hanya digunakan untuk meningkatkan layanan
                      kami.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-2">Marketing Cookies</h4>
                    <p>
                      Cookie ini digunakan untuk membuat penargetan dan iklan yang
                      lebih relevan bagi Anda dan minat Anda. Marketing cookies
                      ini digunakan untuk membatasi berapa kali Anda melihat iklan
                      dan untuk membantu mengukur efektivitas dari iklan proyek
                      kami. Cookie ini digunakan untuk memungkinkan berbagi atau
                      mengikuti konten di media sosial yang Anda tertarik, dan
                      juga konten di situs kami.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mb-6">
                Kami menggunakan layanan web analytics, seperti Google Analytics.
                Google dapat mengumpulkan informasi untuk kontekstualisasi dan
                mempersonalisasikan iklan di jaringannya sendiri. Untuk informasi
                lebih rinci, lihat Kebijakan Privasi Google.
              </p>
              <p>
                Kami dapat memperbarui kebijakan ini dari waktu ke waktu. Jika
                kami membuat perubahan yang signifikan, kami akan memberitahu
                Anda. Tetapi, harap periksa secara teratur kebijakan ini untuk
                memastikan Anda mengetahui setiap pembaruan terbaru. Kebijakan
                Cookie ini terakhir diperbarui pada tanggal……..
              </p>
            </div>
          </div>
        </div>
      </div>
      <a
        title="Hubungi Kami via WhatsApp"
        rel="nofollow"
        href="https://api.whatsapp.com/send?phone=6285176739173&text=Halo Es Teh Poci, saya tertarik menjadi Juragan Es Teh Poci."
        style={{ position: 'fixed', bottom: '50px', right: '50px' }}
      ><Image src="/img/whatsapp.png" width={50} height={50} alt="WhatsApp"
      /></a>
    </>
  );
}
