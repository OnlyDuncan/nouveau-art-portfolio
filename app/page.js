"use client";

import Image from 'next/image';
import { Provider } from 'react-redux';
import { Store } from '../components/Store.js';
import Background from '../public/Images/SiteImages/BackgroundDesktopWhole.webp';
import { Portfolio, CV, ContactMe } from '../components';
import ProfilePic from '../public/Images/SiteImages/Profile.webp';

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
      <div className="flex flex-col absolute z-1" style={{ overflowX: 'hidden', width: '100%' }}>
        <div className="flex flex-col justify-center align-center items-center" style={{ transform: "translate(20vw)", marginTop: "20vw" }}>
          <div>
            <Image
              src="/Images/SiteImages/Logo.svg"
              alt="Logo"
              width={0}
              height={0}
              style={{ width: "13vw", height: "auto", margin: '0', padding: '0' }}
            />
          </div>
          <h1 className="baltica text-center text-white" style={{ margin: '0', padding: '0', fontSize: "7vw" }}>
            Duncan Payne
          </h1>
          <h2 className="scribe text-center text-white" style={{ margin: '0', padding: '0', fontSize: "6vw" }}>
            Fine Artist
          </h2>
        </div>
        <br />
        <div className="flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "40vw" }}>
          <h1 className="scribe text-center text-white" style={{ fontSize: "7vw" }}>
            Portfolio
          </h1>
          <Provider store={Store}>
            <Portfolio />
          </Provider>
        </div>
        <br />
        <div className="flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "20vw" }}>
          <h1 className="scribe text-center text-white" style={{ fontSize: "7vw" }}>
            Artist Statement
          </h1>
          <p className="text-center text-white baltica" style={{ fontSize: "2vw", width: "60vw" }}>

          </p>
        </div>
        <div className="flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "20vw" }}>
          <h1 className="scribe text-center text-white" style={{ fontSize: "7vw" }}>
            CV
          </h1>
          <CV />
        </div>
        <div className="flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "20vw" }}>
          <h1 className="scribe text-center text-white" style={{ fontSize: "7vw" }}>
            About Me
          </h1>
          <Image
            src={ProfilePic}
            alt="Photo of Duncan Payne"
            placeholder="blur"
            style={{ width: "40vw", height: "100%", border: "5px solid white" }}
          />
          <p className="text-center text-white baltica" style={{ fontSize: "2vw", width: "60vw", marginTop: "10vw" }}>
            I'm a multi-media artist, designer, and software developer currently based in Oklahoma City, Oklahoma. 
            I graduated with a BFA in Sculpture and Expanded Media from the University of Science and Arts of Oklahoma in 2020. 
            Through my work I primarily explore themes related to the human condition and conciousness, and incorporate aspects of philosophy, mysticism, psychology, and identity.
          </p>
        </div>
        <div className="flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "20vw" }}>
          <h1 className="scribe text-center text-white" style={{ fontSize: "7vw" }}>
            Contact Me
          </h1>
          <ContactMe />
        </div>
      </div>
    </div>
  )
}
