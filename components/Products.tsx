'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Products() {
  const [activeTab, setActiveTab] = useState('products-tab-1');

  const handleTabClick = (target: string) => {
    setActiveTab(target);
  };

  return (
    <section
      id="products"
      className="products lg:block py-6 relative overflow-hidden"
    >
      <div className="products-wrap container mx-auto">
        <div
          className="products-tabs lg:pt-16 pt-8 lg:pb-6 pb-0 flex justify-center lg:text-2xl flex-wrap"
        >
          <a
            href="#"
            data-target="products-tab-1"
            className={`mx-2 lg:mx-6 mb-4 lg:mb-0 ${activeTab === 'products-tab-1' ? 'active' : ''}`}
            onClick={() => handleTabClick('products-tab-1')}
          >
            ORIGINAL
          </a>
          <a
            href="#"
            data-target="products-tab-2"
            className={`mx-2 lg:mx-6 mb-4 lg:mb-0 ${activeTab === 'products-tab-2' ? 'active' : ''}`}
            onClick={() => handleTabClick('products-tab-2')}
          >
            FRUITY FLAVOR
          </a>
          <a
            href="#"
            data-target="products-tab-3"
            className={`mx-2 lg:mx-6 mb-4 lg:mb-0 ${activeTab === 'products-tab-3' ? 'active' : ''}`}
            onClick={() => handleTabClick('products-tab-3')}
          >
            CREAMY FLAVOR
          </a>
          <a
            href="#"
            data-target="products-tab-4"
            className={`mx-2 lg:mx-6 mb-4 lg:mb-0 ${activeTab === 'products-tab-4' ? 'active' : ''}`}
            onClick={() => handleTabClick('products-tab-4')}
          >
            MILK TEA FRUITY
          </a>
        </div>
        <div className="products-content py-6">
          <div
            className={`products-tab products-tab-1 product-wrap items-center text-center ${activeTab === 'products-tab-1' ? 'active flex' : 'hidden'}`}
          >
            <div className="product-item-wrap" style={{ animationDelay: '0s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(1, 102, 62, 1)"
              >
                <Image
                  src="/img/products/original/ETP%20-%20Menu%20for%20Website%20ORI-01.png"
                  alt="Jasmine Poci Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Jasmine <br />
                  Iced Tea
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.1s' }}>
              <div
                className="product-item rotate-left bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(239, 90, 34, 1)"
              >
                <Image
                  src="/img/products/original/ETP%20-%20Menu%20for%20Website%20ORI-02.png"
                  alt="Vanilla Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Vanilla <br />
                  Iced Tea
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`products-tab products-tab-2 product-wrap items-center text-center ${activeTab === 'products-tab-2' ? 'active flex' : 'hidden'}`}
          >
            <div className="product-item-wrap" style={{ animationDelay: '0s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(237, 76, 96, 1)"
              >
                <Image
                  src="/img/products/fruity/ETP%20-%20Menu%20for%20Website%20FRUITY-05.png"
                  alt="Lychee Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Lychee <br />
                  Iced Tea
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.1s' }}>
              <div
                className="product-item rotate-left bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(104, 140, 211, 1)"
              >
                <Image
                  src="/img/products/fruity/ETP%20-%20Menu%20for%20Website%20FRUITY-02.png"
                  alt="Blackcurrant Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Blackcurrant <br />
                  Iced Tea
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.2s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(253, 152, 0, 1)"
              >
                <Image
                  src="/img/products/fruity/ETP%20-%20Menu%20for%20Website%20FRUITY-01.png"
                  alt="Lemon Honey Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Lemon Honey <br />
                  Iced Tea
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.3s' }}>
              <div
                className="product-item rotate-right bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(212, 31, 31, 1)"
              >
                <Image
                  src="/img/products/fruity/ETP%20-%20Menu%20for%20Website%20FRUITY-03.png"
                  alt="Apple Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Apple <br />
                  Iced Tea
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.4s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(128, 184, 66, 1)"
              >
                <Image
                  src="/img/products/fruity/ETP%20-%20Menu%20for%20Website%20FRUITY-06.png"
                  alt="Mango Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Mango <br />
                  Iced Tea
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.5s' }}>
              <div
                className="product-item rotate-left bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(255, 107, 0, 1)"
              >
                <Image
                  src="/img/products/fruity/ETP%20-%20Menu%20for%20Website%20FRUITY-04.png"
                  alt="Orange Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Orange <br />
                  Iced Tea
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`products-tab products-tab-3 product-wrap items-center text-center ${activeTab === 'products-tab-3' ? 'active flex' : 'hidden'}`}
          >
            <div className="product-item-wrap" style={{ animationDelay: '0s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(224, 170, 133, 1)"
              >
                <Image
                  src="/img/products/creamy/ETP%20-%20Menu%20for%20Website%20CREAMY-01.png"
                  alt="Milk Poci Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Milk <br />
                  Iced Tea
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.1s' }}>
              <div
                className="product-item rotate-left bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(232, 123, 40, 1)"
              >
                <Image
                  src="/img/products/creamy/ETP%20-%20Menu%20for%20Website%20CREAMY-02.png"
                  alt="Thai Tea Poci Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Thai Tea <br />
                  Iced Tea
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.2s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(158, 107, 71, 1)"
              >
                <Image
                  src="/img/products/creamy/ETP%20-%20Menu%20for%20Website%20CREAMY-03.png"
                  alt="Chocolate Poci Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Chocolate <br />
                  Iced Tea
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.3s' }}>
              <div
                className="product-item rotate-left bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(186, 138, 66, 1)"
              >
                <Image
                  src="/img/products/creamy/ETP%20-%20Menu%20for%20Website%20CREAMY-04.png"
                  alt="Cappucino Poci Iced Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Cappucino <br />
                  Iced Tea
                </h3>
              </div>
            </div>
          </div>
          <div
            className={`products-tab products-tab-4 product-wrap items-center text-center ${activeTab === 'products-tab-4' ? 'active flex' : 'hidden'}`}
          >
            <div className="product-item-wrap" style={{ animationDelay: '0s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(128, 184, 66, 1)"
              >
                <Image
                  src="/img/products/milk-tea-fruity/ETP%20-%20Menu%20for%20Website%20MILKY%20FRUITY-01.png"
                  alt="Mango Mlik Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Milk Tea
                  <br />
                  Mango
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.1s' }}>
              <div
                className="product-item rotate-right bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(212, 31, 31, 1)"
              >
                <Image
                  src="/img/products/milk-tea-fruity/ETP%20-%20Menu%20for%20Website%20MILKY%20FRUITY-03.png"
                  alt="Apple Mlik Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Milk Tea
                  <br />
                  Apple
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.2s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(255, 107, 0, 1)"
              >
                <Image
                  src="/img/products/milk-tea-fruity/ETP%20-%20Menu%20for%20Website%20MILKY%20FRUITY-04.png"
                  alt="Orange Milk Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Milk Tea
                  <br />
                  Orange
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.3s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(104, 140, 211, 1)"
              >
                <Image
                  src="/img/products/milk-tea-fruity/ETP%20-%20Menu%20for%20Website%20MILKY%20FRUITY-02.png"
                  alt="Blackcurrant Milk Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Milk Tea
                  <br />
                  Blackcurrant
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.4s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(237, 76, 96, 1)"
              >
                <Image
                  src="/img/products/milk-tea-fruity/ETP%20-%20Menu%20for%20Website%20MILKY%20FRUITY-05.png"
                  alt="Lychee Milk Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Milk Tea
                  <br />
                  Lychee
                </h3>
              </div>
            </div>
            <div className="product-item-wrap" style={{ animationDelay: '0.5s' }}>
              <div
                className="product-item bg-white lg:py-6 pt-0 pb-6 lg:mx-10 lg:my-10 m-auto mb-2 lg:mb-12"
                data-color="rgba(253, 152, 0, 1)"
              >
                <Image
                  src="/img/products/milk-tea-fruity/ETP_Milk-Tea-Fruity_Lemon-Honey%201.png"
                  alt="Lemon Honey Milk Tea"
                  width={200} height={200} // Placeholder dimensions
                />
                <h3 className="product-name lg:text-xl">
                  Milk Tea
                  <br />
                  Lemon Honey
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
