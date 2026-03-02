import React from 'react';
import { TbMail } from 'react-icons/tb';
import Logo from '../atoms/Logo';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import VisaIcon from '../../assets/images/payments/visa.svg';
import MastercardIcon from '../../assets/images/payments/mastercard.svg';
import PaypalIcon from '../../assets/images/payments/paypal.svg';
import ApplepayIcon from '../../assets/images/payments/applepay.svg';
import GooglepayIcon from '../../assets/images/payments/googlepay.svg';
import { cn } from '../../lib';
import Container from '../templates/Container';

const payments = [
  { img: VisaIcon, alt: 'Visa image' },
  { img: MastercardIcon, alt: 'MasterCard image' },
  { img: PaypalIcon, alt: 'Paypal image' },
  { img: ApplepayIcon, alt: 'Applepay image' },
  { img: GooglepayIcon, alt: 'Google image' },
];

const footerSections = [
  {
    name: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Features', href: '/features' },
      { name: 'Works', href: '/works' },
      { name: 'Career', href: '/career' },
    ],
  },
  {
    name: 'Help',
    links: [
      { name: 'Customer Support', href: '/customer-support' },
      { name: 'Delivery Details', href: '/delivery-details' },
      { name: 'Terms & Conditions', href: '/terms-conditions' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    name: 'FAQ',
    links: [
      {
        name: 'Account',
        href: '/account',
      },
      { name: 'Managing Orders', href: '/managing-orders' },
      { name: 'Orders', href: '/orders' },
      { name: 'Payments', href: '/payments' },
    ],
  },
  {
    name: 'Resources',
    links: [
      {
        name: 'Free eBooks',
        href: '/ebooks',
      },
      { name: 'Development Tutorial', href: '/development' },
      { name: 'How to - Blog', href: '/htblog' },
      { name: 'Youtube Playlist', href: '/playlist' },
    ],
  },
];

const socials = [
  { icon: FaTwitter, label: 'Twitter', href: 'https://x.com/userseva404' },
  {
    icon: FaFacebookF,
    label: 'Facebook',
    href: 'https://x.com/userseva404',
    dark: true,
  },
  { icon: FaInstagram, label: 'Instagram', href: 'https://x.com/userseva404' },
  { icon: FaGithub, label: 'GitHub', href: 'https://x.com/userseva404' },
];

const Footer = () => {
  return (
    <div className="">
      <div className=" bg-linear-to-b from-white from-50% to-gray to-50%">
        <Container>
          <div
            className="px-6 py-8
           bg-black 
            rounded-[20px] flex flex-col lg:flex-row lg:items-center gap-8"
          >
            <p className=" font-integral font-bold text-[32px] text-pretty text-white lg:text-[40px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>
            <div className="grid gap-3 lg:basis-[350px] shrink-0">
              <label className="focus-within:outline-3 focus-within:outline-green-400 px-4 py-3 flex gap-3 items-center w-full bg-white rounded-[62px]">
                <TbMail className="size-5 text-black/40 " />
                <input
                  className="outline-none text-black placeholder:text-black/40"
                  type="email"
                  placeholder="Enter your email address"
                />
              </label>
              <button
                type="button"
                className=" bg-white px-4 py-3 text-black rounded-[62px] w-full"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gray">
        <Container>
          <div className="pt-[50px] pb-10 flex flex-col justify-between gap-6 lg:flex-row">
            <div className="lg:max-w-[250px]">
              <div className="mb-3.5">
                <Logo />
              </div>
              <p className="mb-5 text-[14px] font-satoshi text-black/60">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="flex gap-3 ">
                {socials.map(({ icon: Icon, label, href, dark }) => {
                  return (
                    <a
                      key={`footer-social-${label}`}
                      aria-label={label}
                      href={href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={cn(
                        `p-2 flex items-center justify-center bg-white rounded-full
              border border-black/20`,
                        dark && 'bg-black',
                      )}
                    >
                      <Icon
                        className={cn(
                          'size-4 text-black',
                          dark && 'text-white',
                        )}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2 max-w-[400px] w-full mx-auto gap-6  lg:contents lg:max-w-none">
              {footerSections.map(({ name: sectionName, links }, index) => {
                const isRight = index % 2 !== 0;
                return (
                  <div
                    key={`footer-section-${sectionName}-${index}`}
                    className={cn(
                      'grid gap-4',
                      isRight && 'justify-items-end lg:justify-items-start',
                    )}
                  >
                    <p className="text-[14px] font-medium font-satoshi text-black lg:text-[16px]">
                      {sectionName}
                    </p>
                    <ul
                      className={cn(
                        'flex flex-col gap-3',
                        isRight && 'items-end lg:items-start',
                      )}
                    >
                      {links.map(({ name, href }, index) => {
                        return (
                          <li
                            key={`footer-section-link-${sectionName}-${name}-${index}`}
                          >
                            <a
                              href={href}
                              className="text-black/60 text-[14px] font-satoshi lg:text-[16px]"
                            >
                              {name}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="h-px bg-black/10"></div>
          <div className="flex flex-col gap-4 items-center justify-between pb-[75px] pt-4 lg:flex-row ">
            <p className="text-[14px] font-satoshi text-black/60">
              Shop.co © 2000-2023, All Rights Reserved
            </p>
            <div className="flex gap-[10px] ">
              {payments.map(({ img, alt }, index) => {
                return (
                  <img
                    className={cn('w-10 rounded-[3px] lg:w-11')}
                    key={`footer-payment-${index}-${alt}`}
                    alt={alt}
                    src={img}
                  />
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
