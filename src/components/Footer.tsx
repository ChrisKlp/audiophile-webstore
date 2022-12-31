import Text from './Text';
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
    <footer className="grid justify-items-center gap-[4.8rem] bg-black px-[2.4rem] pb-[3.8rem]">
      <div className="h-[0.4rem] w-[10rem] bg-orange" />
      <img src={logo} alt="audiophile logo" />
      <nav className="flex flex-col items-center gap-[1.6rem]">
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
      <Text className="text-center text-white/50">
        {`Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we're open 7 days a week.`}
      </Text>
      <Text className="text-center font-bold text-white/50">
        Copyright 2021. All Rights Reserved
      </Text>
      <div className="flex items-center justify-center gap-[1.6rem]">
        {socialMedia.map(({ Component, url }) => (
          <a href={url} key={url} className="[&>svg>path]:hover:fill-orange">
            <Component className="[&>path]:duration-200 [&>path]:ease-in-out" />
          </a>
        ))}
      </div>
    </footer>
  );
}
