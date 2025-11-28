'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Package() {
  const [activeTab, setActiveTab] = useState('package-tab-1');

  const handleTabClick = (target: string) => {
    setActiveTab(target);
  };

  return (
    <section
      id="package"
      className="package lg:block py-6 relative"
      data-active="package-tab-1"
    >
      <div className="package-wrap container px-6 mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title mb-4 font-extrabold">
            Paket Juragan <span className="whitespace-nowrap">Es Teh Poci</span>
          </h2>

          <div
            className="package-tabs mb-8 mx-auto lg:flex flex-row justify-around text-center hidden"
          >
            <a
              href="#"
              className={`package-btn text-3xl font-semibold ${activeTab === 'package-tab-1' ? 'active' : ''}`}
              onClick={() => handleTabClick('package-tab-1')}
              data-target="package-tab-1"
            >
              PAKET CUAN
            </a>
            <a
              href="#"
              className={`package-btn text-3xl font-semibold ${activeTab === 'package-tab-2' ? 'active' : ''}`}
              onClick={() => handleTabClick('package-tab-2')}
              data-target="package-tab-2"
            >
              PAKET CUAN TANPA RODA
            </a>
            <a
              href="#"
              className={`package-btn text-3xl font-semibold ${activeTab === 'package-tab-3' ? 'active' : ''}`}
              onClick={() => handleTabClick('package-tab-3')}
              data-target="package-tab-3"
            >
              <Image
                src="/img/tag-baru.png"
                className="object-contain h-[48px] absolute top-[-24px] right-[-40px] animate-[wiggle_2s_ease-in-out_infinite]"
                alt="Tag Baru"
                width={70} height={30} // Placeholder dimensions
              />
              PAKET POCI BOX
            </a>
          </div>

          <div
            className="package-tabs mb-8 mx-auto flex flex-wrap justify-center content-evenly text-center lg:hidden"
          >
            <a
              href="#"
              className={`package-btn flex-initial text-[9px] font-semibold mx-2 ${activeTab === 'package-tab-1' ? 'active' : ''}`}
              onClick={() => handleTabClick('package-tab-1')}
              data-target="package-tab-1"
            >
              PAKET CUAN
            </a>
            <a
              href="#"
              className={`package-btn flex-initial text-[9px] font-semibold mx-2 ${activeTab === 'package-tab-2' ? 'active' : ''}`}
              onClick={() => handleTabClick('package-tab-2')}
              data-target="package-tab-2"
            >
              PAKET CUAN TANPA RODA
            </a>
            <a
              href="#"
              className={`package-btn flex-initial text-[9px] font-semibold mx-2 ${activeTab === 'package-tab-3' ? 'active' : ''}`}
              onClick={() => handleTabClick('package-tab-3')}
              data-target="package-tab-3"
            >
              <Image
                src="/img/tag-baru.png"
                className="object-contain h-[18px] absolute right-[-18px] top-[-10px] animate-[wiggle_2s_ease-in-out_infinite]"
                alt="Tag Baru"
                width={50} height={20} // Placeholder dimensions
              />
              PAKET POCI BOX
            </a>
          </div>

          <div className="package-content">
            <div
              className="flex flex-col lg:flex-row justify-center items-center mb-8"
            >
              <div className="package-booth mx-4 relative">
                <Image
                  className={`package-tab package-tab-1 ${activeTab === 'package-tab-1' ? 'active' : 'hidden'}`}
                  src="/img/booth-cuan.png"
                  alt="Regular Package 1"
                  width={465} height={500} // Placeholder dimensions
                />
                <Image
                  className={`package-tab package-tab-2 ${activeTab === 'package-tab-2' ? 'active' : 'hidden'}`}
                  src="/img/booth-cuan-tanpa-roda.png"
                  alt="Regular Package 2"
                  width={465} height={500} // Placeholder dimensions
                />
                <Image
                  className={`package-tab package-tab-3 lg:w-[465px] ${activeTab === 'package-tab-3' ? 'active' : 'hidden'}`}
                  src="/img/booth-poci-box.png"
                  alt="Regular Package 3"
                  width={465} height={500} // Placeholder dimensions
                />

                <div className="booth-info-wrap">
                  <div
                    className={`package-tab package-tab-1 booth-info font-bold ${activeTab === 'package-tab-1' ? 'active' : 'hidden'}`}
                  >
                    <h3 className="booth-info-title my-1">UKURAN BOOTH</h3>
                    <div className="booth-info-size mb-1">120x65x221.5cm</div>
                    <div className="booth-info-size-label">(P × L × T)</div>
                  </div>

                  <div className={`package-tab package-tab-2 booth-info font-bold ${activeTab === 'package-tab-2' ? 'active' : 'hidden'}`}>
                    <h3 className="booth-info-title my-1">UKURAN BOOTH</h3>
                    <div className="booth-info-size mb-1">120x65x220cm</div>
                    <div className="booth-info-size-label">(P × L × T)</div>
                  </div>

                  <div
                    className={`package-tab package-tab-3 booth-info font-bold ml-[180%] lg:ml-[240%] ${activeTab === 'package-tab-3' ? 'active' : 'hidden'}`}
                  >
                    <h3 className="booth-info-title my-1">UKURAN BOOTH</h3>
                    <div className="booth-info-size mb-1">200x150x280cm</div>
                    <div className="booth-info-size-label">(P × L × T)</div>
                  </div>
                </div>
              </div>

              <div
                className={`package-list package-tab package-tab-1 package-tab-2 mx-4 no-animation ${activeTab === 'package-tab-1' || activeTab === 'package-tab-2' ? 'active' : 'hidden'}`}
              >
                <h3 className="lg:text-2xl font-bold my-6 lg:pt-12 lg:text-left">
                  Peralatan dan bahan baku yang didapatkan:
                </h3>
                <div
                  className="lg:flex grid grid-cols-6 gap-3 lg:gap-0 items-center mb-4"
                >
                  <div className="package-item lg:m-2 lg:m-4">
                    <div
                      className={`package-tab package-tab-1 no-animation package-thumbnail lg:mb-4 mb-2 ${activeTab === 'package-tab-1' ? 'active' : 'hidden'}`}
                    >
                      <Image
                        src="/img/booth-ETP-02-4.png"
                        alt="Meja Counter"
                        className="w-full"
                        style={{ transform: 'scale(1.5) translateY(-8px)' }}
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div
                      className={`package-tab package-tab-2 no-animation package-thumbnail lg:mb-4 mb-2 ${activeTab === 'package-tab-2' ? 'active' : 'hidden'}`}
                    >
                      <Image
                        src="/img/booth-ETP-02-5.png"
                        alt="Meja Counter"
                        className="w-full"
                        style={{ transform: 'scale(1.5) translateY(-8px)' }}
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div>Meja Counter</div>
                  </div>
                  <div className="package-item lg:m-2 lg:m-4">
                    <div className="package-thumbnail lg:mb-4 mb-2">
                      <Image
                        src="/img/mesin%20seal%201.png"
                        alt="Mesin Seal"
                        className="w-full"
                        style={{ transform: 'scale(1.7) translateY(-6px)' }}
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div>Mesin Seal</div>
                  </div>
                  <div className="package-item lg:m-2 lg:m-4">
                    <div className="package-thumbnail lg:mb-4 mb-2">
                      <Image
                        src="/img/coolerbox%201.png"
                        alt="Cooler Box"
                        className="w-full"
                        style={{ transform: 'scale(2.1) translateY(0px)' }}
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div>Cooler Box</div>
                  </div>
                  <div className="package-item lg:m-2 lg:m-4">
                    <div className="package-thumbnail lg:mb-4 mb-2">
                      <Image
                        src="/img/tea%20barrel.png"
                        alt="Tea Barrel"
                        className="w-full"
                        style={{ transform: 'scale(1.4) translateY(-8px)' }}
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div>Tea Barrel</div>
                  </div>
                  <div className="package-item lg:m-2 lg:m-4">
                    <div className="package-thumbnail lg:mb-4 mb-2">
                      <Image
                        src="/img/cup%20plastik%2016%20OZ%201.png"
                        alt="500 Cup"
                        className="w-full"
                        style={{ transform: 'scale(2.2) translateY(-7px)' }}
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div>100 Cup</div>
                  </div>
                  <div className="package-item lg:m-2 lg:m-4">
                    <div className="package-thumbnail lg:mb-4 mb-2">
                      <Image
                        src="/img/sedotan%201.png"
                        alt="Sedotan"
                        className="w-full"
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div>Sedotan</div>
                  </div>
                </div>
                <div className="lg:flex grid grid-cols-6 gap-3 lg:gap-0">
                  <div className="package-item lg:m-2 lg:m-4">
                    <div className="package-thumbnail lg:mb-4 mb-2">
                      <Image
                        src="/img/apron%201.png"
                        alt="Apron"
                        className="w-full"
                        style={{ transform: 'scale(1.8) translateY(0px)' }}
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div>Apron</div>
                  </div>
                  <div className="package-item lg:m-2 lg:m-4">
                    <div className="package-thumbnail lg:mb-4 mb-2">
                      <Image
                        src="/img/TEH%20POCI%20ES%20TEH%202%20FLAVORS1-01%201.png"
                        alt="Poci Mix 30pcs/variant"
                        className="w-full"
                        style={{ transform: 'scale(1.3) translateY(0px)' }}
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div>Poci Mix</div>
                  </div>
                  <div className="package-item lg:m-2 lg:m-4">
                    <div className="package-thumbnail lg:mb-4 mb-2">
                      <Image
                        src="/img/Poci%20Jumbo.png"
                        alt="Poci Jumbo"
                        className="w-full"
                        style={{ transform: 'scale(1.6) translateY(0px)' }}
                        width={100} height={100} // Placeholder dimensions
                      />
                    </div>
                    <div>Poci Jumbo</div>
                  </div>
                </div>
              </div>

              <div
                className={`package-list package-tab package-tab-3 mx-4 no-animation ${activeTab === 'package-tab-3' ? 'active' : 'hidden'}`}
              >
                <div className="hidden lg:block">
                  <h3
                    className="lg:text-2xl font-bold my-6 lg:pt-12 lg:text-left"
                  >
                    Peralatan dan bahan baku yang didapatkan:
                  </h3>
                  <div
                    className="lg:flex grid grid-cols-5 gap-3 lg:gap-0 items-center mb-4"
                  >
                    <div className="package-item lg:m-2 lg:m-4">
                      <div
                        className={`package-tab package-tab-3 no-animation package-thumbnail lg:mb-4 mb-2 ${activeTab === 'package-tab-3' ? 'active' : 'hidden'}`}
                      >
                        <Image
                          src="/img/booth-ETP-02-3.png"
                          alt="Meja Counter"
                          className="w-full"
                          style={{ transform: 'scale(1.5) translateY(-8px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Meja Counter</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/mesin%20seal%201.png"
                          alt="Mesin Seal"
                          className="w-full"
                          style={{ transform: 'scale(1.7) translateY(-6px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Mesin Seal</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/coolerbox%201.png"
                          alt="Cooler Box"
                          className="w-full"
                          style={{ transform: 'scale(2.1) translateY(0px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Cooler Box</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/sedotan%201.png"
                          alt="Sedotan"
                          className="w-full"
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Sedotan</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/tea%20barrel.png"
                          alt="Tea Barrel"
                          className="w-full"
                          style={{ transform: 'scale(1.4) translateY(-8px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Tea Barrel</div>
                    </div>
                  </div>
                  <div className="lg:flex grid grid-cols-5 gap-3 lg:gap-0">
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/cup%20plastik%2016%20OZ%201.png"
                          alt="500 Cup"
                          className="w-full"
                          style={{ transform: 'scale(2.2) translateY(-7px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>300 Cup</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/apron%201.png"
                          alt="Apron"
                          className="w-full"
                          style={{ transform: 'scale(1.8) translateY(0px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Apron</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/TEH%20POCI%20ES%20TEH%202%20FLAVORS1-01%201.png"
                          alt="Poci Mix 30pcs/variant"
                          className="w-full"
                          style={{ transform: 'scale(1.3) translateY(0px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Poci Mix</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/Poci%20Jumbo.png"
                          alt="Poci Jumbo"
                          className="w-full"
                          style={{ transform: 'scale(1.6) translateY(0px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Poci Jumbo</div>
                    </div>
                  </div>
                </div>
                <div className="block lg:hidden">
                  <h3
                    className="lg:text-2xl font-bold my-6 lg:pt-12 lg:text-left"
                  >
                    Peralatan dan bahan baku yang didapatkan:
                  </h3>
                  <div
                    className="lg:flex grid grid-cols-6 gap-3 lg:gap-0 items-center mb-4"
                  >
                    <div className="package-item lg:m-2 lg:m-4">
                      <div
                        className={`package-tab package-tab-3 no-animation package-thumbnail lg:mb-4 mb-2 ${activeTab === 'package-tab-3' ? 'active' : 'hidden'}`}
                      >
                        <Image
                          src="/img/booth-ETP-02-3.png"
                          alt="Meja Counter"
                          className="w-full"
                          style={{ transform: 'scale(1.5) translateY(-8px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Meja Counter</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/mesin%20seal%201.png"
                          alt="Mesin Seal"
                          className="w-full"
                          style={{ transform: 'scale(1.7) translateY(-6px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Mesin Seal</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/coolerbox%201.png"
                          alt="Cooler Box"
                          className="w-full"
                          style={{ transform: 'scale(2.1) translateY(0px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Cooler Box</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/sedotan%201.png"
                          alt="Sedotan"
                          className="w-full"
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Sedotan</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/tea%20barrel.png"
                          alt="Tea Barrel"
                          className="w-full"
                          style={{ transform: 'scale(1.4) translateY(-8px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Tea Barrel</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/cup%20plastik%2016%20OZ%201.png"
                          alt="500 Cup"
                          className="w-full"
                          style={{ transform: 'scale(2.2) translateY(-7px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>300 Cup</div>
                    </div>
                  </div>
                  <div className="lg:flex grid grid-cols-6 gap-3 lg:gap-0">
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/apron%201.png"
                          alt="Apron"
                          className="w-full"
                          style={{ transform: 'scale(1.8) translateY(0px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Apron</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/TEH%20POCI%20ES%20TEH%202%20FLAVORS1-01%201.png"
                          alt="Poci Mix 30pcs/variant"
                          className="w-full"
                          style={{ transform: 'scale(1.3) translateY(0px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Poci Mix</div>
                    </div>
                    <div className="package-item lg:m-2 lg:m-4">
                      <div className="package-thumbnail lg:mb-4 mb-2">
                        <Image
                          src="/img/Poci%20Jumbo.png"
                          alt="Poci Jumbo"
                          className="w-full"
                          style={{ transform: 'scale(1.6) translateY(0px)' }}
                          width={100} height={100} // Placeholder dimensions
                        />
                      </div>
                      <div>Poci Jumbo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="package-price font-bold flex bg-white px-16 py-3 lg:py-3 lg:px-20 p-3 items-center justify-between lg:!w-[1200px] !w-[348px] mb-8"
            >
              <span
                className={`package-price-label me-2 lg:pt-0 pt-2 lg:mb-0 mb-2 lg:text-2xl package-tab package-tab-1 no-animation relative lg:w-[300px] text-xs place-content-center ${activeTab === 'package-tab-1' ? 'active' : 'hidden'}`}
              >
                HARGA PAKET CUAN
              </span>
              <span
                className={`package-price-label me-2 lg:pt-0 pt-2 lg:mb-0 mb-2 lg:text-2xl package-tab package-tab-2 no-animation relative lg:w-[300px] text-xs ${activeTab === 'package-tab-2' ? 'active' : 'hidden'}`}
              >
                HARGA PAKET CUAN TANPA RODA
              </span>
              <span
                className={`package-price-label me-2 lg:pt-0 pt-2 lg:mb-0 mb-2 lg:text-2xl package-tab package-tab-3 no-animation relative lg:w-[300px] text-xs place-content-center ${activeTab === 'package-tab-3' ? 'active' : 'hidden'}`}
              >
                HARGA POCI BOX
                <Image
                  src="/img/tag-baru.png"
                  className="object-contain lg:h-[48px] h-[32px] lg:mt-2 absolute lg:right-[-84px] right-[10px] lg:top-[-16px] top-[-28px]"
                  alt="Tag Baru"
                  width={70} height={30} // Placeholder dimensions
                />
              </span>

              <div
                className={`lg:flex-row flex-col lg:gap-0 gap-1 package-tab package-tab-1 no-animation lg:w-[600px] lg:h-[116px] ${activeTab === 'package-tab-1' ? 'active flex' : 'hidden'}`}
              >
                <div
                  className="package-price-item p-3 px-2 lg:pt-5 lg:px-4 lg:mx-1 lg:w-[300px]"
                >
                  <div className="leading-none lg:text-xl text-[10px]">Jawa</div>
                  <div className="flex justify-center lg:mt-3 mt-1.5">
                    <div
                      className="self-center outline outline-1 lg:text-xl text-[10px] lg:py-0.5 lg:px-4 px-1 rounded"
                    >
                      Rp8.500.000
                    </div>
                  </div>
                </div>
                <div
                  className="package-price-item p-3 px-2 lg:pt-5 lg:px-4 lg:mx-1 lg:w-[300px]"
                >
                  <div className="leading-none lg:text-xl text-[10px]">
                    Luar Pulau Jawa
                  </div>
                  <div className="flex justify-center lg:mt-3 mt-1.5">
                    <div
                      className="self-center outline outline-1 lg:text-xl text-[10px] lg:py-0.5 lg:px-4 px-1 rounded"
                    >
                      Rp9.000.000
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`lg:flex-row flex-col lg:gap-0 gap-1 package-tab package-tab-2 no-animation lg:w-[600px] lg:h-[116px] ${activeTab === 'package-tab-2' ? 'active flex' : 'hidden'}`}
              >
                <div
                  className="package-price-item p-3 px-2 lg:pt-5 lg:px-4 lg:mx-1 lg:w-[300px]"
                >
                  <div className="leading-none lg:text-xl text-[10px]">Jawa</div>
                  <div className="flex justify-center lg:mt-3 mt-1.5">
                    <div
                      className="self-center outline outline-1 lg:text-xl text-[10px] lg:py-0.5 lg:px-4 px-1 rounded"
                    >
                      Rp8.000.000
                    </div>
                  </div>
                </div>
                <div
                  className="package-price-item p-3 px-2 lg:pt-5 lg:px-4 lg:mx-1 lg:w-[300px]"
                >
                  <div className="leading-none lg:text-xl text-[10px]">
                    Luar Pulau Jawa
                  </div>
                  <div className="flex justify-center lg:mt-3 mt-1.5">
                    <div
                      className="self-center outline outline-1 lg:text-xl text-[10px] lg:py-0.5 lg:px-4 px-1 rounded"
                    >
                      Rp8.500.000
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`lg:flex-row flex-col lg:gap-0 gap-1 package-tab package-tab-3 no-animation lg:w-[600px] lg:h-[116px] ${activeTab === 'package-tab-3' ? 'active flex' : 'hidden'}`}
              >
                <div
                  className="package-price-item p-3 px-2 lg:pt-5 lg:px-4 lg:mx-1 lg:w-[608px]"
                >
                  <div className="leading-none lg:text-xl text-[10px]">Jawa</div>
                  <div className="flex justify-center lg:mt-3 mt-1.5">
                    <div
                      className="self-center outline outline-1 lg:text-xl text-[10px] lg:py-0.5 lg:px-4 px-1 rounded"
                    >
                      Rp19.985.000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
