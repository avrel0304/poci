'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [activeTab, setActiveTab] = useState('service-content-1');

  const handleTabClick = (target: string) => {
    setActiveTab(target);
  };

  return (
    <section id="about" className="about py-6 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="about-caption text-center lg:my-16 relative">
          <h2 className="about-title section-title mb-2 lg:mb-12 font-extrabold">
            Kenapa Pilih <span className="whitespace-nowrap">Es Teh Poci</span>?
          </h2>
          <p className="about-description">
            Terbukti telah bermitra dengan lebih dari
            <br className="block lg:hidden" />
            <span className="font-bold">
              8000 Juragan
              <span className="whitespace-nowrap">Es Teh Poci</span> aktif
            </span>
            <br />
            di seluruh Indonesia <span className="font-bold">sejak 2007</span> dan
            penjualan lebih
            <br className="block lg:hidden" />
            dari <span className="font-bold">30.000.000++ cup</span> per bulannya
          </p>
        </div>

        <div className="about-video flex justify-center mt-20 lg:mb-24 mb-16 relative">
          <iframe
            width="853"
            height="481"
            src="https://www.youtube.com/embed/WVNAnlAa_uU?si=e_79tRnNf9o87LjB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="services lg:mt-24 mb-4">
          <div className="services-tab mb-12 lg:mb-12">
            <div className="flex justify-center flex-wrap">
              <a
                href="#"
                className={`service mx-2 lg:mx-4 text-center lg:flex-1 flex flex-col items-center ${activeTab === 'service-content-1' ? 'active' : ''}`}
                onClick={() => handleTabClick('service-content-1')}
                data-target="#service-content-1"
              >
                <div className="service-image mb-4">
                  <svg
                    width="102"
                    height="130"
                    viewBox="0 0 102 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M101.71 4.37823C87.3402 0.561305 50.8549 0 50.8549 0C50.8549 0 14.3696 0.561305 0 4.37823V8.75646C0 8.75646 1.57167 9.09327 4.60276 9.65458L6.2867 22.677C6.2867 22.677 6.39896 27.392 8.981 29.7495L10.7772 45.0173L18.1865 106.874C18.1865 106.874 18.6356 112.262 19.5337 112.936C20.4318 113.722 21.6667 114.395 21.6667 115.181C21.6667 115.967 21.6667 119.335 21.6667 119.335C21.6667 119.335 25.7081 129.214 50.8549 129.102C76.0017 129.214 80.0431 119.335 80.0431 119.335C80.0431 119.335 80.0431 115.967 80.0431 115.181C80.0431 114.395 81.278 113.722 82.1761 112.936C83.0742 112.15 83.5232 106.874 83.5232 106.874L90.9326 45.0173L92.7288 29.7495C95.3108 27.392 95.4231 22.677 95.4231 22.677L97.107 9.65458C100.138 9.09327 101.71 8.75646 101.71 8.75646V4.37823Z"
                      fill="white"
                    />
                    <path
                      d="M51.2239 51.8387C43.6802 51.8387 37.5142 58.0047 37.5142 65.5484C37.5142 73.0921 43.6802 79.2581 51.2239 79.2581C58.7676 79.2581 64.9336 73.0921 64.9336 65.5484C64.9336 58.0047 58.7676 51.8387 51.2239 51.8387ZM58.4053 63.3722L50.5712 71.2787C50.136 71.7138 49.628 71.859 49.1206 71.859C48.6125 71.859 48.0327 71.6415 47.6699 71.2787L43.7531 67.3619C42.9552 66.5639 42.9552 65.2585 43.7531 64.3877C44.5511 63.5897 45.8565 63.5897 46.7273 64.3877L49.1935 66.8538L55.577 60.4704C56.3749 59.6724 57.6803 59.6724 58.5511 60.4704C59.2034 61.2688 59.2032 62.5742 58.4053 63.3722Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M77.1888 44.686C58.7909 42.8947 53.4496 32.6479 53.227 32.2181C52.856 31.5013 52.1145 31 51.2239 31C50.3338 31 49.5918 31.5018 49.2208 32.2181C48.9982 32.6479 43.6569 42.8947 25.259 44.686C24.1464 44.8295 23.2559 45.6892 23.2559 46.8358V64.5344C23.2559 85.1708 49.0723 98.2118 50.185 98.7851C50.4816 98.9285 50.8526 99 51.2236 99C51.5946 99 51.8912 98.9285 52.2622 98.7851C53.3747 98.2118 79.1913 85.1708 79.1913 64.5344V46.8358C79.1913 45.7607 78.3008 44.8289 77.1882 44.686H77.1888ZM51.224 82.6628C41.1349 82.6628 32.9745 74.7805 32.9745 65.0358C32.9745 55.2911 41.1351 47.4089 51.224 47.4089C61.3129 47.4089 69.4736 55.2911 69.4736 65.0358C69.4736 74.7805 61.3129 82.6628 51.224 82.6628Z"
                      fill="#80B842"
                      className="icon"
                    />
                  </svg>
                </div>
                <div className="service-caption">
                  <span className="service-number">1</span> Bisnis <br />
                  Terpercaya
                </div>
              </a>
              <a
                href="#"
                className={`service mx-2 lg:mx-4 text-center lg:flex-1 flex flex-col items-center ${activeTab === 'service-content-2' ? 'active' : ''}`}
                onClick={() => handleTabClick('service-content-2')}
                data-target="#service-content-2"
              >
                <span className="service-image mb-4">
                  <svg
                    width="103"
                    height="130"
                    viewBox="0 0 103 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M102.412 4.37823C88.0423 0.561305 51.557 0 51.557 0C51.557 0 15.0717 0.561305 0.702148 4.37823V8.75646C0.702148 8.75646 2.27382 9.09327 5.30491 9.65458L6.98885 22.677C6.98885 22.677 7.10111 27.392 9.68314 29.7495L11.4793 45.0173L18.8887 106.874C18.8887 106.874 19.3377 112.262 20.2358 112.936C21.1339 113.722 22.3688 114.395 22.3688 115.181C22.3688 115.967 22.3688 119.335 22.3688 119.335C22.3688 119.335 26.4102 129.214 51.557 129.102C76.7038 129.214 80.7453 119.335 80.7453 119.335C80.7453 119.335 80.7453 115.967 80.7453 115.181C80.7453 114.395 81.9802 113.722 82.8783 112.936C83.7764 112.15 84.2254 106.874 84.2254 106.874L91.6347 45.0173L93.4309 29.7495C96.013 27.392 96.1252 22.677 96.1252 22.677L97.8092 9.65458C100.84 9.09327 102.412 8.75646 102.412 8.75646V4.37823Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M51.2135 47.4586C41.7977 47.4586 34.1525 54.8829 34.1525 64.0266C34.1525 73.1703 41.7977 80.5946 51.2135 80.5946C60.6293 80.5946 68.2745 73.1703 68.2745 64.0266C68.2745 54.8829 60.6293 47.4586 51.2135 47.4586ZM49.2063 56.2473C48.1826 56.3391 47.2193 56.7737 46.4846 57.4851C45.6575 58.29 45.192 59.3815 45.192 60.518V61.6875C45.192 62.8239 45.6575 63.9155 46.4846 64.7204C47.3134 65.5235 48.4375 65.9757 49.6077 65.9757H52.8192C52.9254 65.9757 53.028 66.0166 53.1024 66.0905C53.1785 66.1627 53.2207 66.2624 53.2207 66.3655V67.535C53.2207 67.6381 53.1785 67.7377 53.1024 67.81C53.028 67.8839 52.9254 67.9248 52.8192 67.9248H47.1991C46.0911 67.9248 45.192 68.798 45.192 69.874C45.192 70.95 46.0911 71.8232 47.1991 71.8232H49.2063V72.7978C49.2063 73.8737 50.1055 74.7469 51.2135 74.7469C52.3215 74.7469 53.2207 73.8737 53.2207 72.7978V71.8058C54.2444 71.714 55.2076 71.2793 55.9424 70.568C56.7694 69.7631 57.235 68.6715 57.235 67.5351V66.3656C57.235 65.2292 56.7695 64.1375 55.9424 63.3327C55.1135 62.5295 53.9895 62.0774 52.8192 62.0774H49.6077C49.5016 62.0774 49.399 62.0365 49.3246 61.9625C49.2484 61.8903 49.2063 61.7907 49.2063 61.6876V60.5181C49.2063 60.4149 49.2484 60.3153 49.3246 60.2431C49.399 60.1691 49.5016 60.1282 49.6077 60.1282H55.2278C56.3358 60.1282 57.235 59.255 57.235 58.1791C57.235 57.1031 56.3358 56.2299 55.2278 56.2299H53.2207V55.2553C53.2207 54.1793 52.3215 53.3061 51.2135 53.3061C50.1055 53.3061 49.2063 54.1793 49.2063 55.2553V56.2473Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40.2464 81.509C40.7944 81.1601 41.1577 80.5597 41.1577 79.8775C41.1577 78.8015 40.2585 77.9283 39.1505 77.9283H34.8915C33.7836 77.9283 32.8844 78.7998 32.8844 79.8775V84.0116C32.8844 85.0876 33.7836 85.9608 34.8915 85.9608C35.9892 85.9608 36.8825 85.1033 36.8987 84.0413C46.6796 90.6488 60.2381 89.7208 68.955 81.2558C77.1464 73.3012 78.4828 61.1972 72.9712 51.8857C72.4192 50.9542 71.1908 50.6322 70.2315 51.1682C69.27 51.7043 68.9388 52.8955 69.4909 53.8292C74.1213 61.6512 72.9954 71.8184 66.1168 78.5002C59.1015 85.3106 48.3596 86.3126 40.246 81.5097L40.2464 81.509Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.1808 46.5443C61.6329 46.8932 61.2695 47.4936 61.2695 48.1758C61.2695 49.2518 62.1687 50.125 63.2767 50.125H67.5357C68.6437 50.125 69.5429 49.2535 69.5429 48.1758V44.0416C69.5429 42.9657 68.6437 42.0925 67.5357 42.0925C66.438 42.0925 65.5447 42.95 65.5285 44.012C55.7476 37.4044 42.1891 38.3325 33.4722 46.7974C25.2809 54.7521 23.9444 66.8561 29.456 76.1676C30.008 77.0991 31.2364 77.4211 32.1957 76.885C33.1572 76.349 33.4884 75.1577 32.9363 74.224C28.306 66.4021 29.4318 56.2348 36.3105 49.5531C43.3257 42.7427 54.0676 41.7407 62.1812 46.5435L62.1808 46.5443Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <circle
                      cx="51.5228"
                      cy="62.7287"
                      r="12.043"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M51.7017 68.3455L49.2233 63.9004C50.3714 63.5013 51.6471 62.3764 51.6471 60.2718C51.6471 58.022 50.1163 56.244 47.4192 56.244H41.3325V68.3455H44.4669V64.2814H46.0706L48.1117 68.3455H51.7017ZM46.9454 61.56H44.4669V58.9655H46.9454C47.7836 58.9655 48.4579 59.4191 48.4579 60.2537C48.4579 61.1064 47.7836 61.56 46.9454 61.56Z"
                      fill="white"
                    />
                    <path
                      d="M59.0848 68.5632C61.2898 68.5632 62.9482 66.9303 62.9482 63.9549C62.9482 60.9975 61.2898 59.3646 59.0848 59.3646C58.0825 59.3646 57.1713 59.7638 56.4788 60.5984V59.5824H53.6723V71.6838H56.4788V67.3113C57.2077 68.1822 58.1007 68.5632 59.0848 68.5632ZM58.1554 66.0957C57.554 66.0957 56.825 65.751 56.4788 65.2974V62.6304C56.825 62.1587 57.554 61.8321 58.1554 61.8321C59.2488 61.8321 60.0871 62.6485 60.0871 63.9549C60.0871 65.2793 59.2488 66.0957 58.1554 66.0957Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <div className="service-caption">
                  <span className="service-number">2</span> Cepat <br />
                  Balik Modal
                </div>
              </a>
              <a
                href="#"
                className={`service mx-2 lg:mx-4 text-center lg:flex-1 flex flex-col items-center ${activeTab === 'service-content-3' ? 'active' : ''}`}
                onClick={() => handleTabClick('service-content-3')}
                data-target="#service-content-3"
              >
                <span className="service-image mb-4">
                  <svg
                    width="102"
                    height="130"
                    viewBox="0 0 102 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M101.965 4.37823C87.5951 0.561305 51.1098 0 51.1098 0C51.1098 0 14.6245 0.561305 0.254883 4.37823V8.75646C0.254883 8.75646 1.82656 9.09327 4.85764 9.65458L6.54158 22.677C6.54158 22.677 6.65384 27.392 9.23588 29.7495L11.4793 45.0173L18.8887 106.874C18.8887 106.874 19.3377 112.262 20.2358 112.936C21.1339 113.722 22.3688 114.395 22.3688 115.181C22.3688 115.967 22.3688 119.335 22.3688 119.335C22.3688 119.335 26.4102 129.214 51.557 129.102C76.7038 129.214 80.7453 119.335 80.7453 119.335C80.7453 119.335 80.7453 115.967 80.7453 115.181C80.7453 114.395 81.9802 113.722 82.8783 112.936C83.7764 112.15 84.2254 106.874 84.2254 106.874L91.6347 45.0173L93.4309 29.7495C96.013 27.392 96.1252 22.677 96.1252 22.677L97.8092 9.65458C100.84 9.09327 102.412 8.75646 102.412 8.75646V4.37823Z"
                      fill="white"
                    />
                    <path
                      d="M41.7776 62.3306L48.6832 67.3911C49.0295 67.6431 49.4499 67.7368 49.8474 67.6827C50.2449 67.6286 50.6225 67.4263 50.8852 67.0884L61.7687 53.1072C62.0314 52.7693 62.1284 52.3599 62.0727 51.971C62.0169 51.5853 61.8085 51.2174 61.4373 50.9447C61.0761 50.6995 60.6736 50.6165 60.291 50.6676C59.8935 50.7217 59.5159 50.9225 59.2546 51.2589L50.0367 63.1014C49.6407 63.6097 48.8969 63.7101 48.3749 63.3277L43.6814 59.8892C43.3331 59.6343 42.9097 59.5402 42.5103 59.5943C42.1113 59.6469 41.7337 59.8507 41.4709 60.1871C41.2082 60.5249 41.1113 60.9358 41.1655 61.3233C41.2197 61.709 41.4297 62.0754 41.7779 62.3318L41.7776 62.3306ZM47.1906 69.1825L40.3473 64.1679C39.4771 63.5306 38.9547 62.6096 38.8149 61.6374C38.6752 60.6671 38.9184 59.6441 39.5752 58.7994C40.2319 57.9551 41.1831 57.4483 42.1846 57.3145C43.1846 57.1789 44.2408 57.4149 45.1095 58.0522L48.8572 60.7975L57.3573 49.876C58.0175 49.0316 58.9668 48.5248 59.9667 48.3892C60.9374 48.2584 61.9604 48.4785 62.816 49.0761L62.8916 49.1253C63.7603 49.7626 64.2841 50.6837 64.4239 51.6573C64.5637 52.6275 64.3204 53.6505 63.6652 54.4937L52.7309 68.5385C52.0772 69.3432 51.1512 69.8274 50.1741 69.9597C49.2019 70.0919 48.1756 69.8718 47.3199 69.2728L47.1935 69.1805L47.1906 69.1825ZM66.2499 75.7361C64.0738 77.5464 61.5384 78.9613 58.7598 79.8645L66.5982 87.47L65.4226 81.9919C65.2897 81.3706 65.7017 80.76 66.342 80.631C66.5062 80.5977 66.6704 80.5992 66.8247 80.631L72.4689 81.7718L66.248 75.7357L66.2499 75.7361ZM44.479 79.8645C41.7003 78.9627 39.1646 77.5478 36.9889 75.7361L30.7679 81.7722L36.4122 80.6315C36.5665 80.5997 36.7307 80.5982 36.8949 80.6315C37.5352 80.7604 37.9476 81.371 37.8143 81.9924L36.6402 87.4705L44.479 79.8645ZM37.4043 72.9682L37.7575 73.3027C41.3704 76.6379 46.2511 78.6823 51.6195 78.6823C57.1718 78.6823 62.199 76.4993 65.8363 72.9682C69.4736 69.4389 71.7238 64.5613 71.7238 59.1738C71.7238 53.7863 69.4739 48.9105 65.8363 45.3794C62.1989 41.8501 57.172 39.6669 51.6195 39.6669C46.0687 39.6669 41.0419 41.8498 37.4046 45.3794C33.7672 48.9087 31.5156 53.7863 31.5156 59.1738C31.5156 64.5596 33.7651 69.4371 37.4043 72.9682Z"
                      fill="#80B842"
                      className="icon"
                    />
                  </svg>
                </span>
                <div className="service-caption">
                  <span className="service-number">3</span> Produk <br />
                  Berkualitas
                </div>
              </a>
              <div className="lg:hidden my-3" style={{ flexBasis: '100%' }}></div>
              <a
                href="#"
                className={`service mx-2 lg:mx-4 text-center flex flex-col items-center ${activeTab === 'service-content-4' ? 'active' : ''}`}
                onClick={() => handleTabClick('service-content-4')}
                data-target="#service-content-4"
              >
                <span className="service-image mb-4">
                  <svg
                    width="102"
                    height="130"
                    viewBox="0 0 102 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M101.71 4.37823C87.3402 0.561305 50.8549 0 50.8549 0C50.8549 0 14.3696 0.561305 0 4.37823V8.75646C0 8.75646 1.57167 9.09327 4.60276 9.65458L6.2867 22.677C6.2867 22.677 6.39896 27.392 8.981 29.7495L10.7772 45.0173L18.1865 106.874C18.1865 106.874 18.6356 112.262 19.5337 112.936C20.4318 113.722 21.6667 114.395 21.6667 115.181C21.6667 115.967 21.6667 119.335 21.6667 119.335C21.6667 119.335 25.7081 129.214 50.8549 129.102C76.0017 129.214 80.0431 119.335 80.0431 119.335C80.0431 119.335 80.0431 115.967 80.0431 115.181C80.0431 114.395 81.278 113.722 82.1761 112.936C83.0742 112.15 83.5232 106.874 83.5232 106.874L90.9326 45.0173L92.7288 29.7495C95.3108 27.392 95.4231 22.677 95.4231 22.677L97.107 9.65458C100.138 9.09327 101.71 8.75646 101.71 8.75646V4.37823Z"
                      fill="white"
                    />
                    <path
                      d="M39.486 54.8711C39.486 56.3798 38.2631 57.6027 36.7545 57.6027C35.2458 57.6027 34.0229 56.3797 34.0229 54.8711C34.0229 53.3625 35.2459 52.1395 36.7545 52.1395C38.2632 52.1395 39.486 53.3625 39.486 54.8711Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M46.6949 54.8711C46.6949 56.3798 45.472 57.6027 43.9634 57.6027C42.4548 57.6027 41.2318 56.3797 41.2318 54.8711C41.2318 53.3625 42.4548 52.1395 43.9634 52.1395C45.472 52.1395 46.6949 53.3625 46.6949 54.8711Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M42.9841 48.5004C42.9841 50.0088 41.7615 51.2318 40.2531 51.2318C38.7447 51.2318 37.5218 50.0088 37.5218 48.5004C37.5218 46.9921 38.7447 45.7694 40.2531 45.7694C41.7615 45.7694 42.9841 46.9921 42.9841 48.5004Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M50.3586 48.5004C50.3586 50.0088 49.1357 51.2318 47.6273 51.2318C46.1189 51.2318 44.8963 50.0088 44.8963 48.5004C44.8963 46.9921 46.1189 45.7694 47.6273 45.7694C49.1357 45.7694 50.3586 46.9921 50.3586 48.5004Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M57.3534 48.5004C57.3534 50.0088 56.1307 51.2318 54.6224 51.2318C53.114 51.2318 51.891 50.0088 51.891 48.5004C51.891 46.9921 53.114 45.7694 54.6224 45.7694C56.1307 45.7694 57.3534 46.9921 57.3534 48.5004Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M64.3146 48.5004C64.3146 50.0088 63.0916 51.2318 61.5833 51.2318C60.0749 51.2318 58.8522 50.0088 58.8522 48.5004C58.8522 46.9921 60.0749 45.7694 61.5833 45.7694C63.0916 45.7694 64.3146 46.9921 64.3146 48.5004Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M60.9449 54.8711C60.9449 56.3798 59.7219 57.6027 58.2136 57.6027C56.7049 57.6027 55.482 56.3797 55.482 54.8711C55.482 53.3625 56.705 52.1395 58.2136 52.1395C59.7219 52.1395 60.9449 53.3625 60.9449 54.8711Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M51.1262 52.1394C52.6328 52.1394 53.8569 53.3615 53.8569 54.8713C53.8569 56.3784 52.6334 57.6023 51.1262 57.6023C49.6155 57.6023 48.3946 56.3793 48.3946 54.8713C48.3946 53.362 49.6152 52.1394 51.1262 52.1394Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M65.3938 52.1394C66.9018 52.1394 68.1256 53.3615 68.1256 54.8713C68.1256 56.3784 66.9018 57.6023 65.3938 57.6023C63.883 57.6023 62.6622 56.3793 62.6622 54.8713C62.6622 53.362 63.884 52.1394 65.3938 52.1394Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M33.1997 83.1645H40.3006V71.2417H42.961L42.9554 61.6183C42.9554 59.934 41.5932 58.5694 39.9136 58.5694L33.5666 58.5691C31.8862 58.5691 30.5234 59.9337 30.5234 61.618L30.513 71.2414H33.1998L33.1997 83.1645Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M47.5885 83.1645H54.6884V71.2417H57.3489L57.3433 61.6183C57.3433 59.934 55.9807 58.5694 54.3014 58.5694L47.9554 58.5691C46.275 58.5691 44.9121 59.9337 44.9121 61.618L44.9024 71.2414H47.5891V83.1649L47.5885 83.1645Z"
                      fill="#80B842"
                      className="icon"
                    />
                    <path
                      d="M61.8566 83.1645H68.9574V71.2417H71.6179L71.6123 61.6183C71.6123 59.934 70.2497 58.5694 68.5704 58.5694L62.2235 58.5691C60.5427 58.5691 59.1802 59.9337 59.1802 61.618L59.1705 71.2414H61.8572V83.1649L61.8566 83.1645Z"
                      fill="#80B842"
                      className="icon"
                    />
                  </svg>
                </span>
                <div className="service-caption">
                  <span className="service-number">4</span> Kantor Layanan <br />
                  Seluruh Indonesia
                </div>
              </a>
              <a
                href="#"
                className={`service mx-2 lg:mx-4 text-center flex flex-col items-center ${activeTab === 'service-content-5' ? 'active' : ''}`}
                onClick={() => handleTabClick('service-content-5')}
                data-target="#service-content-5"
              >
                <span className="service-image mb-4">
                  <svg
                    width="103"
                    height="130"
                    viewBox="0 0 103 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M102.412 4.37823C88.0423 0.561305 51.557 0 51.557 0C51.557 0 15.0717 0.561305 0.702148 4.37823V8.75646C0.702148 8.75646 2.27382 9.09327 5.30491 9.65458L6.98885 22.677C6.98885 22.677 7.10111 27.392 9.68314 29.7495L11.4793 45.0173L18.8887 106.874C18.8887 106.874 19.3377 112.262 20.2358 112.936C21.1339 113.722 22.3688 114.395 22.3688 115.181C22.3688 115.967 22.3688 119.335 22.3688 119.335C22.3688 119.335 26.4102 129.214 51.557 129.102C76.7038 129.214 80.7453 119.335 80.7453 119.335C80.7453 119.335 80.7453 115.967 80.7453 115.181C80.7453 114.395 81.9802 113.722 82.8783 112.936C83.7764 112.15 84.2254 106.874 84.2254 106.874L91.6347 45.0173L93.4309 29.7495C96.013 27.392 96.1252 22.677 96.1252 22.677L97.8092 9.65458C100.84 9.09327 102.412 8.75646 102.412 8.75646V4.37823Z"
                      fill="white"
                    />
                    <path
                      d="M75.958 62.9448L72.0743 58.3445L73.0877 52.4605C73.1834 51.9062 72.8631 51.3635 72.3253 51.1673L66.6128 49.0832L64.4841 43.4914C64.2841 42.9653 63.7317 42.6486 63.163 42.745L57.152 43.737L52.4524 39.9354C52.0102 39.5774 51.3697 39.5774 50.9271 39.9354L46.2275 43.737L40.2164 42.745C39.6494 42.6502 39.0958 42.9649 38.8953 43.4914L36.7662 49.0832L31.0538 51.1669C30.5155 51.3631 30.1953 51.9059 30.2913 52.4601L31.3047 58.3441L27.4211 62.9444C27.0553 63.3772 27.0553 64.0042 27.4211 64.4375L31.3047 69.0378L30.2913 74.9219C30.1957 75.4761 30.516 76.0189 31.0538 76.2151L36.7662 78.2979L38.8949 83.8902C39.0949 84.4162 39.6469 84.7309 40.216 84.6365L46.2271 83.6445L50.9266 87.4461C51.1483 87.6255 51.4189 87.7155 51.6895 87.7155C51.9601 87.7155 52.2306 87.626 52.4519 87.4469L57.1515 83.6453L63.1626 84.6373C63.7283 84.7317 64.2836 84.4174 64.4836 83.891L66.6123 78.2988L72.3248 76.2159C72.863 76.0201 73.1833 75.4769 73.0873 74.9227L72.0739 69.0386L75.9575 64.4384C76.3237 64.0047 76.3238 63.3776 75.958 62.9448ZM51.6889 78.9258C43.1074 78.9258 36.1252 72.091 36.1252 63.6909C36.1252 55.2908 43.1075 48.456 51.6889 48.456C60.2703 48.456 67.2526 55.2908 67.2526 63.6909C67.2526 72.091 60.2703 78.9258 51.6889 78.9258ZM53.9065 62.3024L56.596 62.8803L54.8064 64.8111C54.5809 65.0547 54.4694 65.3805 54.5011 65.7083L54.7508 68.3124L52.1453 67.2607C51.9996 67.2002 51.8438 67.1712 51.6889 67.1712C51.534 67.1712 51.3783 67.2006 51.2321 67.2594L48.6266 68.3111L48.8763 65.7071C48.908 65.3797 48.7965 65.0539 48.571 64.8099L46.7814 62.8791L49.4709 62.3011C49.787 62.2333 50.0617 62.0428 50.2325 61.7731L51.6889 59.4711L53.1453 61.7743C53.3161 62.0441 53.5909 62.2345 53.9065 62.3024ZM51.6889 50.7998C44.4272 50.7998 38.5197 56.5826 38.5197 63.6909C38.5197 70.7992 44.4272 76.5819 51.6889 76.5819C58.9506 76.5819 64.8582 70.7992 64.8582 63.6909C64.8582 56.5826 58.9506 50.7998 51.6889 50.7998ZM59.7585 62.9574L56.9342 66.0036L57.3204 70.0267C57.3592 70.4359 57.1772 70.8348 56.8402 71.0784C56.631 71.2305 56.3809 71.3085 56.1287 71.3085C55.9742 71.3085 55.8193 71.2791 55.6719 71.2203L51.6889 69.6115L47.7058 71.2198C47.3179 71.3764 46.8745 71.3228 46.5375 71.0792C46.2005 70.8348 46.018 70.4359 46.0573 70.0275L46.4435 66.0044L43.6192 62.9582C43.3323 62.6484 43.2354 62.2127 43.3653 61.8145C43.4952 61.416 43.8321 61.1156 44.2493 61.0257L48.4636 60.1211L50.6712 56.6302C50.8892 56.2832 51.2746 56.0735 51.6888 56.0735C52.103 56.0735 52.4884 56.2832 52.7072 56.6286L54.9147 60.1195L59.1291 61.024C59.5462 61.1135 59.8832 61.4144 60.0131 61.8129C60.1421 62.2114 60.0452 62.6475 59.7584 62.9574L59.7585 62.9574Z"
                      fill="#80B842"
                      className="icon"
                    />
                  </svg>
                </span>
                <div className="service-caption">
                  <span className="service-number">5</span> Berbasis <br />
                  S.O.P
                </div>
              </a>
            </div>
          </div>

          <div className="services-content">
            <div
              id="service-content-1"
              className={`service-content-item items-start bg-white shadow py-6 px-4 gap-2 flex-col lg:flex-row lg:py-20 lg:px-16 lg:gap-16 ${activeTab === 'service-content-1' ? 'active flex' : 'hidden'}`}
            >
              <div className="flex-1">
                <h2 className="service-content-title font-extrabold mb-2 lg:mb-8">
                  Es Teh Poci hadir di Indonesia <br />selama lebih dari 15
                  tahun <br />dibawah naungan <br />PT Poci Kreasi Mandiri
                </h2>
                <p className="lg:text-lg service-content-caption mob-hidden">
                  <span className="whitespace-nowrap">Es Teh Poci</span> adalah
                  teh berkualitas yang dihasilkan dari perkebunan sendiri dan
                  diolah dengan pabrik berstandar Eropa milik
                  <span className="font-bold">PT Gunung Slamat</span>. Didirikan
                  oleh keluarga Sosrodjojo pada tahun 1953,
                  <span className="whitespace-nowrap">Es Teh Poci</span> merupakan
                  bagian dari Rekso Group yang juga menaungi Teh Botol Sosro.
                </p>
                <p className="lg:text-lg service-content-caption lg:hidden">
                  <span className="whitespace-nowrap">Es Teh Poci</span> adalah
                  teh berkualitas yang dihasilkan dari perkebunan sendiri dan
                  diolah dengan pabrik berstandar Eropa milik <br />
                  <span className="font-bold">PT Gunung Slamat</span>. Didirikan
                  oleh keluarga Sosrodjojo pada tahun 1953,
                  <span className="whitespace-nowrap">Es Teh Poci</span> merupakan
                  bagian dari Rekso Group yang juga menaungi Teh Botol Sosro.
                </p>
              </div>
              <div
                className="service-content-thumbnail-wrap grid grid-cols-3 lg:gap-4 gap-2"
                style={{ flex: 0.75 }}
              >
                <div className="service-content-thumbnail large">
                  <Image
                    src="/img/about-1.png"
                    alt="About 1"
                    className="service-content-image"
                    width={200} height={200} // Placeholder dimensions
                  />
                </div>
                <div className="service-content-thumbnail">
                  <Image
                    src="/img/about-2.png"
                    alt="About 1"
                    className="service-content-image"
                    width={200} height={200} // Placeholder dimensions
                  />
                </div>
                <div className="service-content-thumbnail">
                  <Image
                    src="/img/about-3.png"
                    alt="About 1"
                    className="service-content-image"
                    width={200} height={200} // Placeholder dimensions
                  />
                </div>
                <div className="service-content-thumbnail">
                  <Image
                    src="/img/about-4.png"
                    alt="About 1"
                    className="service-content-image"
                    width={200} height={200} // Placeholder dimensions
                  />
                </div>
              </div>
            </div>
            <div
              id="service-content-2"
              className={`service-content-item bg-white shadow py-6 px-4 lg:py-20 lg:px-16 gap-2 ${activeTab === 'service-content-2' ? 'active flex' : 'hidden'}`}
            >
              <div className="flex-1">
                <h2 className="service-content-title font-extrabold mb-2 lg:mb-8">
                  Mulai bisnismu sekarang, <br />
                  bisa balik modal dalam tiga bulan
                </h2>
                <div>
                  <table className="service-content-table">
                    <tr>
                      <td colSpan={3} className="font-bold">Analisa Usaha</td>
                    </tr>
                    <tr>
                      <td>Biaya Investasi Awal</td>
                      <td className="font-bold ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td className="font-bold">Rp9.001.500</td>
                    </tr>
                    <tr>
                      <td>Penjualan rata-rata/hari</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>70 cup/hari</td>
                    </tr>
                    <tr>
                      <td>
                        Harga jual
                        <span className="whitespace-nowrap">es teh poci</span>
                      </td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>Rp5.000</td>
                    </tr>
                    <tr>
                      <td>Omset per bulan</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>70 cup x 30 hari x Rp5.000</td>
                    </tr>
                    <tr className="font-bold">
                      <td></td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>Rp10.500.000</td>
                    </tr>

                    <tr>
                      <td colSpan={3} className="font-bold">Biaya Variabel</td>
                    </tr>
                    <tr>
                      <td>1. Sewa Tempat</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>Rp1.000.000</td>
                    </tr>
                    <tr>
                      <td>2. SDM</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>Rp1.500.000</td>
                    </tr>
                    <tr>
                      <td>3. Biaya Pokok</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td className="">Rp4.200.000</td>
                    </tr>
                    <tr className="font-bold">
                      <td></td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>Rp6.700.000</td>
                    </tr>

                    <tr>
                      <td className="text-2xl font-bold pt-2 lg:pt-5">Laba</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1 pt-2 lg:pt-5">
                        :
                      </td>
                      <td className="pt-2 lg:pt-5">Rp10.500.000 - Rp6.700.000</td>
                    </tr>
                    <tr className="font-bold">
                      <td></td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>Rp3.800.000</td>
                    </tr>

                    <tr className="mob-hidden">
                      <td colSpan={3}>
                        <span
                          className="service-content-table-info p-1 lg:py-2 lg:px-4 my-2 lg:my-4 font-bold"
                        >
                          Return on Investment: Di bawah 3 bulan
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td colSpan={3} className="font-bold lg:py-2 pt-2">
                        Contoh Perhitungan Biaya Pokok
                      </td>
                    </tr>
                    <tr>
                      <td>Biaya Pokok per-cup</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>Rp2.000</td>
                    </tr>
                    <tr>
                      <td>Penjualan Rata-rata/hari</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>70 cup</td>
                    </tr>
                    <tr>
                      <td>Hari Kerja</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td className="">30 hari</td>
                    </tr>
                    <tr>
                      <td>Biaya Pokok/bulan</td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td className="">70 cup x 30 hari x Rp2.000</td>
                    </tr>
                    <tr className="font-bold">
                      <td></td>
                      <td className="ps-1 lg:ps-3 pe-0 lg:pe-1">:</td>
                      <td>Rp4.200.000</td>
                    </tr>

                    <tr className="lg:hidden">
                      <td colSpan={3} className="text-center">
                        <span
                          className="service-content-table-info p-1 lg:py-2 lg:px-4 my-2 lg:my-4 font-bold"
                        >
                          Return on Investment: Di bawah 3 bulan
                        </span>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div style={{ flex: 0.8 }}>
                <Image src="/img/about-5.png" alt="About 5" className="w-full" width={400} height={400} />
              </div>
            </div>
            <div
              id="service-content-3"
              className={`service-content-item bg-white shadow py-6 px-4 lg:py-20 lg:px-16 ${activeTab === 'service-content-3' ? 'active flex' : 'hidden'}`}
            >
              <div className="flex-1">
                <h2 className="service-content-title font-extrabold mb-6 lg:mb-8">
                  Bahan baku bermutu dan <br />
                  kualitas yang terjaga setiap saat
                </h2>
                <div
                  className="lg:flex grid grid-cols-3 gap-4 lg:gap-0 mb-6 lg:mb-0"
                >
                  <div
                    className="service-content-box flex flex-col items-center text-center lg:me-16"
                  >
                    <Image
                      src="/img/fresh%20brew.png"
                      alt="Fresh Brew"
                      className="mb-4 lg:mb-6"
                      width={100} height={100} // Placeholder dimensions
                    />
                    <h3 className="service-content-info lg:text-2xl font-bold">
                      Fresh Brew
                    </h3>
                  </div>
                  <div
                    className="service-content-box flex flex-col items-center text-center lg:me-16"
                  >
                    <Image
                      src="/img/tanpa%20pengawet.png"
                      alt="Tanpa Pemanis"
                      className="mb-4 lg:mb-6"
                      width={100} height={100} // Placeholder dimensions
                    />
                    <h3 className="service-content-info lg:text-2xl font-bold">
                      Tanpa <br />
                      Pengawet
                    </h3>
                  </div>
                  <div
                    className="service-content-box flex flex-col items-center text-center"
                  >
                    <Image
                      src="/img/tanpa%20pemanis.png"
                      alt="Tanpa Pengawet"
                      className="mb-4 lg:mb-6"
                      width={100} height={100} // Placeholder dimensions
                    />
                    <h3 className="service-content-info lg:text-2xl font-bold">
                      Tanpa Pemanis <br />
                      Buatan
                    </h3>
                  </div>
                </div>
              </div>
              <div style={{ flex: 0.75 }}>
                <Image src="/img/about-6.png" alt="About 6" className="w-full" width={400} height={400} />
              </div>
            </div>
            <div
              id="service-content-4"
              className={`service-content-item bg-white shadow overflow-hidden ${activeTab === 'service-content-4' ? 'active flex' : 'hidden'}`}
            >
              <div className="flex-1">
                <div className="py-6 px-4 lg:py-20 lg:px-16">
                  <h2
                    className="service-content-title font-extrabold mb-2 lg:mb-8"
                  >
                    Tersebar di seluruh Indonesia, <br />
                    <span className="whitespace-nowrap">Es Teh Poci</span> hadir
                    lebih dekat untuk <br />
                    melayani para Juragan
                    <span className="whitespace-nowrap">Es Teh Poci</span>
                  </h2>
                  <div
                    className="regional-btn mb-4 lg:mb-8"
                    data-viewbox="452.50253 320.762384 165.004004 300.96400146484375"
                  >
                    <h3 className="font-bold text-2xl">Kantor Pusat</h3>
                    <p className="text-lg">
                      Jl. Agung Timur IV Blok O2 Kav 18-19 <br />
                      Sunter Agung Podomoro, Jakarta Utara
                    </p>
                  </div>
                  <div
                    className="flex flex-col lg:flex-row lg:gap-24 gap-5 mb-2 lg:mb-8"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="service-dot bg-green me-1 lg:me-3"></div>
                        <h3 className="font-bold lg:text-2xl">Jawa</h3>
                      </div>
                      <div
                        className="regional-btn mb-6"
                        data-viewbox="424.93316474721996 570.6591629945633 243.6410557594667 94.66457968121792"
                      >
                        <h4 className="font-bold lg:text-lg">
                          Jawa Barat & Banten
                        </h4>
                        <p>
                          Serang • Sukabumi • Karawang • Bandung • Cirebon
                        </p>
                      </div>
                      <div
                        className="regional-btn mb-6"
                        data-viewbox="541.7455737080686 585.4653172948788 282.4956689901128 109.76119637699611"
                      >
                        <h4 className="font-bold lg:text-lg">Jawa Tengah</h4>
                        <p>
                          Slawi • Pekalongan • Semarang • Yogyakarta •
                          Surakarta • Rembang
                        </p>
                      </div>
                      <div
                        className="regional-btn mb-6"
                        data-viewbox="639.262311 597.184792 301.41898063319366 117.11368193114453"
                      >
                        <h4 className="font-bold lg:text-lg">Jawa Timur</h4>
                        <p>
                          Madiun • Lamongan • Sidoarjo • Kediri • Tulungagung
                          • Malang • Jember
                        </p>
                      </div>

                      <div
                        className="regional-btn"
                        data-viewbox="452.50253 320.762384 165.004004 300.96400146484375"
                      >
                        <div className="flex items-center mb-2">
                          <div className="service-dot bg-red me-1 lg:me-3"></div>
                          <h3 className="font-bold lg:text-2xl">Jabodetabek</h3>
                        </div>
                        <div>
                          <p>Depok • Sunter • Daan Mogot • Tangerang</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div
                        className="regional-btn"
                        data-viewbox="136.1653522015656 358.2766984135476 534.8939660070248 207.8283247798117"
                      >
                        <div className="flex items-center mb-2">
                          <div
                            className="service-dot bg-yellow me-1 lg:me-3"
                          ></div>
                          <h3 className="font-bold lg:text-2xl">Sumatera</h3>
                        </div>
                        <div className="mb-6">
                          <p>
                            Medan • Padang • Pekanbaru • Batam • Jambi •
                            Bengkulu • Palembang • Bangka • Lampung
                          </p>
                        </div>
                      </div>

                      <div
                        className="regional-btn"
                        data-viewbox="431.1831084691976 194.73127921777154 836.2869813037933 324.9319181088885"
                      >
                        <div className="flex items-center mb-2">
                          <div className="service-dot bg-blue me-1 lg:me-3"></div>
                          <h3 className="font-bold lg:text-2xl">Kalimantan</h3>
                        </div>
                        <div className="mb-6">
                          <p>Banjarmasin • Pontianak • Samarinda</p>
                        </div>
                      </div>

                      <div
                        className="regional-btn"
                        data-viewbox="843.247746143179 256.42614741436273 785.3340975573925 305.13462529071523"
                      >
                        <div className="flex items-center mb-2">
                          <div
                            className="service-dot bg-light-green me-1 lg:me-3"
                          ></div>
                          <h3 className="font-bold lg:text-2xl">Sulawesi</h3>
                        </div>
                        <div className="mb-6">
                          <p>Manado • Palu • Mamuju • Kendari • Makassar</p>
                        </div>
                      </div>

                      <div
                        className="regional-btn"
                        data-viewbox="730.34508542924 620.912594987738 381.04432621183247 148.05140647710576"
                      >
                        <div className="flex items-center mb-2">
                          <div
                            className="service-dot bg-orange me-1 lg:me-3"
                          ></div>
                          <h3 className="font-bold lg:text-2xl">Bali</h3>
                        </div>
                        <div>
                          <p>Denpasar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-4 pb-6 lg:px-0 lg:pb-0">
                  <div id="map-container"></div>
                </div>
              </div>
            </div>
            <div
              id="service-content-5"
              className={`service-content-item items-start bg-white shadow py-6 px-4 gap-4 lg:py-20 lg:px-16 lg:gap-16 flex-wrap ${activeTab === 'service-content-5' ? 'active flex' : 'hidden'}`}
            >
              <div className="flex-1 w-full">
                <h2 className="service-content-title font-extrabold mb-2 lg:mb-8">
                  Standar Operasional yang jelas, <br />
                  berbisnis jadi lebih mudah
                </h2>
                <p className="lg:text-lg service-content-caption">
                  Sistem pelatihan dengan Standar Operasional Prosedur bermutu
                  dan terpercaya serta aplikasi PociKu yang memudahkan Juragan
                  <span className="whitespace-nowrap">Es Teh Poci</span> dalam
                  menjalankan bisnis.
                </p>
              </div>
              <div
                className="service-content-thumbnail-wrap grid grid-cols-3 lg:gap-4 gap-2"
                style={{ flex: 0.75 }}
              >
                <div className="service-content-thumbnail large">
                  <Image
                    src="/img/about-7.png"
                    alt="About 7"
                    className="service-content-image"
                    width={200} height={200} // Placeholder dimensions
                  />
                </div>
                <div className="service-content-thumbnail">
                  <Image
                    src="/img/about-8.png"
                    alt="About 8"
                    className="service-content-image"
                    width={200} height={200} // Placeholder dimensions
                  />
                </div>
                <div className="service-content-thumbnail">
                  <Image
                    src="/img/about-9.png"
                    alt="About 9"
                    className="service-content-image"
                    width={200} height={200} // Placeholder dimensions
                  />
                </div>
                <div className="service-content-thumbnail">
                  <Image
                    src="/img/about-10.png"
                    alt="About 10"
                    className="service-content-image"
                    width={200} height={200} // Placeholder dimensions
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
