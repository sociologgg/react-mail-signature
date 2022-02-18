import React, { useState } from "react";

export default function MobileHeader() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div>
      <div className=" ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div class="md:hidden flex items-center">
                <button
                  class="outline-none mobile-menu-button z-40"
                  onClick={() => {
                    setIsMenuOpened(!isMenuOpened);
                  }}
                >
                  <svg
                    class="w-6 h-6 text-gray-500"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="blue"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
              <div className="">
                <a href="#" class="flex self-center  items-center py-4 px-2">
                  <span class="font-bold ml-16  text-janus-dark-blue text-3xl z-40">
                    JANUS
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={`${isMenuOpened ? "" : "hidden"}`}>
        <ul class="">
          <li class="active">
            <a
              href="/nfc/home"
              class="block text-left text-lg px-4 py-2  text-janus-dark-blue  font-bold"
            >
              Anasayfa
            </a>
          </li>
          <li>
            <a
              href="/nfc/about"
              class="block  px-4 text-lg py-2  text-left font-bold text-janus-dark-blue transition duration-300"
            >
              Hakkımızda
            </a>
          </li>
          <li>
            <a
              href="/nfc/nfccard"
              class="block  px-4 py-2 text-lg font-bold text-lg text-left text-janus-dark-blue transition duration-300"
            >
              Janus Kart
            </a>
          </li>
          <li>
            <a
              href="/nfc/nature"
              class="block  px-4 text-lg  py-2 font-bold text-lg text-left text-janus-dark-blue transition duration-300"
            >
              Doğaya Katkı
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
