import logo from '@/assets/shared/desktop/logo.svg';
import { ReactComponent as IconFacebook } from '@/assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as IconTwitter } from '@/assets/shared/desktop/icon-twitter.svg';
import { ReactComponent as IconInstagram } from '@/assets/shared/desktop/icon-instagram.svg';

const navigation = [
  {
    name: 'home',
    url: 'home',
  },
  {
    name: 'headphones',
    url: 'headphones',
  },
  {
    name: 'speakers',
    url: 'speakers',
  },
  {
    name: 'earphones',
    url: 'earphones',
  },
];

const socialMedia = [
  { Component: IconFacebook, url: 'facebook' },
  { Component: IconTwitter, url: 'twitter' },
  { Component: IconInstagram, url: 'instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-black pb-[3.8rem] md:pb-[4.6rem]">
      <div className="c-container grid justify-items-center gap-[4.8rem] md:justify-items-start md:gap-0">
        <div className="h-[0.4rem] w-[10rem] bg-orange md:mb-[5.6rem]" />
        <img src={logo} alt="audiophile logo" />
        <nav className="flex flex-col items-center gap-[1.6rem] md:my-[3.2rem] md:flex-row md:gap-[3.4rem]">
          {navigation.map(({ name, url }) => (
            <a
              key={url}
              href={url}
              className="text-[1.3rem] font-bold uppercase leading-[2.5rem] tracking-[0.2rem] text-white duration-200 ease-in-out hover:text-orange"
            >
              {name}
            </a>
          ))}
        </nav>
        <p className="text-center text-base text-white/50 md:mb-[8rem] md:text-left">
          {`Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.`}
        </p>
        <div className="w-full md:flex md:justify-between">
          <p className="mb-[4.8rem] text-center text-base font-bold text-white/50 md:mb-0">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex items-center justify-center gap-[1.6rem]">
            {socialMedia.map(({ Component, url }) => (
              <a
                href={url}
                key={url}
                className="[&>svg>path]:hover:fill-orange"
              >
                <Component className="[&>path]:duration-200 [&>path]:ease-in-out" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
