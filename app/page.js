"use client";

import Image from 'next/image';
import { Provider } from 'react-redux';
import { Store } from '../components/Store.js';
import BackgroundDesktop from '../public/Images/SiteImages/BackgroundDesktopWhole.webp';
import BackgroundMobile from '../public/Images/SiteImages/BackgroundMobileWhole.webp';
import { Portfolio, CV, ContactMe } from '../components';
import ProfilePic from '../public/Images/SiteImages/Profile.webp';

export default function Home() {
  return (
    <div className="body relative">
      <div className="absolute">
        {/* DESKTOP */}
        <Image
          alt="Background"
          src={BackgroundDesktop}
          placeholder="blur"
          loading="lazy"
          quality={100}
          className="backgroundImageDesktop"
          style={{ backgroundPosition: "top", overflowY: "scroll", width: "100vw", height: "100%", objectFit: "cover", zIndex: "0" }}
        />

        {/* MOBILE */}
        <Image
          alt="Background"
          src={BackgroundMobile}
          placeholder="blur"
          loading="lazy"
          quality={100}
          className="backgroundImageMobile"
          style={{ backgroundPosition: "top", overflowY: "scroll", width: "100vw", height: "100%", objectFit: "cover", zIndex: "0" }}
        />
      </div>
      <div className="flex flex-col absolute z-1" style={{ overflowX: 'hidden', width: '100%' }}>
        <div className="logoTitle flex flex-col justify-center align-center items-center" style={{ transform: "translate(20vw)", marginTop: "20vw" }}>
          <div>
            <Image
              src="/Images/SiteImages/Logo.svg"
              alt="Logo"
              width={0}
              height={0}
              className="logo"
              style={{ width: "13vw", height: "auto", margin: '0', padding: '0' }}
            />
          </div>
          <h1 className="titleName baltica text-center text-white" style={{ margin: '0', padding: '0', fontSize: "7vw" }}>
            Duncan Payne
          </h1>
          <h2 className="titleTitle scribe text-center text-white" style={{ margin: '0', padding: '0', fontSize: "6vw" }}>
            Fine Artist
          </h2>
        </div>
        <br />
        <div className="divs flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "45vw" }}>
          <h1 className="headers scribe text-center text-white" style={{ fontSize: "7vw" }}>
            Portfolio
          </h1>
          <Provider store={Store}>
            <Portfolio />
          </Provider>
        </div>
        <br />
        <div className="divs flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "24vw" }}>
          <h1 className="headers scribe text-center text-white" style={{ fontSize: "7vw" }}>
            Artist Statement
          </h1>
          <div className="componentScroll">
            <p className="artistStatement text-center text-white baltica" style={{ fontSize: "2vw", width: "60vw" }}>
              What does it mean to be human?
              It’s a question that has haunted mankind since antiquity, and yet the answer still eludes us.
              Through my work, I seek to explore the complexities of the human experience.
              The beauty and ugliness that so often go hand in hand.
              The struggles we go through, and our ability to find meaning in them.
              Our traumas and our passions, our shortcomings and our strengths, our fears and our joys.
              All of these things together are what make us human, and I think that our society often ignores the messier aspects of our lives because it doesn’t want to deal with them.
              It sweeps them under the rug, to be forgotten and unexamined until they rear their ugly heads, because it wants an idealized version of the world.
              Another thing that I think defines my art is that I tend to work in layers of abstraction, both physical and conceptual.
              I often incorporate aspects of mythology, religion, spirituality and psychology into my work that both further the themes and messages at play, but also make them more esoteric.
              As we are, we naturally perceive the world through a myriad of layers. 
              Things like our mental state, our personal biases, our physical eyesight, and more all coalesce to create what we call reality.
              I like to capture this dreamlike intersection of perception and ideas in my work.
              I prefer things to never be quite what they seem.
              While I work in a variety of different media and explore many different ideas, these are the themes I tend to come back to the most.
              While my art mostly acts as a bridge for myself to further explore the world and my own experiences, if it can serve as a source of introspection and interest to others, then I feel like I’ve accomplished something wonderful.
            </p>
          </div>
        </div>
        <div className="divs flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "24vw" }}>
          <h1 className="headers scribe text-center text-white" style={{ fontSize: "7vw" }}>
            CV
          </h1>
          <CV />
        </div>
        <div className="divs flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "24vw" }}>
          <h1 className="headers scribe text-center text-white" style={{ fontSize: "7vw" }}>
            About Me
          </h1>
          <Image
            src={ProfilePic}
            alt="Photo of Duncan Payne"
            placeholder="blur"
            className="profileImage"
            style={{ width: "40vw", height: "100%", border: "5px solid white" }}
          />
          <div>
            <p className="aboutDescription text-center text-white baltica" style={{ fontSize: "2vw", width: "60vw", marginTop: "10vw" }}>
              I'm a multi-media artist, designer, and software developer currently based in Oklahoma City, Oklahoma.
              I graduated with a BFA in Sculpture and Expanded Media from the University of Science and Arts of Oklahoma in 2020.
              Through my work I primarily explore themes related to the human condition and conciousness, and incorporate aspects of philosophy, mysticism, psychology, and identity.
            </p>
          </div>
        </div>
        <div className="divs flex flex-col justify-center align-center items-center w-full" style={{ marginTop: "24vw" }}>
          <h1 className="headers scribe text-center text-white" style={{ fontSize: "7vw" }}>
            Contact Me
          </h1>
          <ContactMe className="component" />
        </div>
      </div>
    </div>
  )
}
