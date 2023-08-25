"use client";

import Image from 'next/image';
import { Provider } from 'react-redux';
import { Store } from '../components/Store.js';
import Background from '../public/Images/SiteImages/BackgroundDesktopWhole.webp';

import { Portfolio } from '../components';

export default function Home() {
  return (
    <div className="body relative">
      <div className="absolute">
        <Image
          alt="Background"
          src={Background}
          placeholder="blur"
          loading="lazy"
          quality={100}
          style={{ backgroundPosition: "top", overflowY: "scroll", width: "100vw", height: "100%", objectFit: "cover", zIndex: "0" }}
        />
      </div>
      <div className="flex flex-col absolute z-1 w-full">
        <div className="flex flex-col justify-center align-center items-center w-full" style={{ transform: "translate(20vw)", marginTop: "20vw" }}>
          <div>
            <Image
              src="/Images/SiteImages/Logo.svg"
              alt="Logo"
              width={0}
              height={0}
              style={{ width: "13vw", height: "auto" }}
            />
          </div>
          <h1 className="baltica text-center text-white" style={{ fontSize: "7vw" }}>
            Duncan Payne
          </h1>
          <h2 className="scribe text-center text-white" style={{ fontSize: "6vw" }}>
            Fine Artist
          </h2>
        </div>
        <br />
        <div className="flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "40vw"}}>
          <h1 className="scribe text-center text-white" style={{ fontSize: "7vw" }}>
            Portfolio
          </h1>
          <Provider store={Store}>
            <Portfolio />
          </Provider>
        </div>
      </div>
    </div>
  )
}
