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

const payments = [
  VisaIcon,
  MastercardIcon,
  PaypalIcon,
  ApplepayIcon,
  GooglepayIcon,
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

const Footer = () => {
  return (
    <div className="">
      <div className="px-4 bg-linear-to-b from-white from-50% to-gray to-50%">
        <div
          className="px-6 py-8
           bg-black 
            rounded-[20px] flex flex-col lg:flex-row lg:items-center gap-8"
        >
          <p className=" font-integral font-bold text-[32px] text-pretty text-white lg:text-[40px]">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </p>
          <div className="grid gap-3 lg:basis-[350px] shrink-0">
            <div className="focus-within:outline-3 focus-within:outline-green-400 px-4 py-3 flex gap-3 items-center w-full bg-white rounded-[62px]">
              <TbMail color="black" size={20} opacity={0.4} />
              <input
                className="focus-within:outline-0 text-black placeholder:text-black/40"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <button className=" bg-white px-4 py-3 text-black rounded-[62px] w-full">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray">
        <div className="pt-[50px] pb-10  px-4  flex flex-col justify-between gap-6 lg:flex-row">
          <div className="lg:max-w-[250px]">
            <div className="mb-3.5">
              <Logo />
            </div>
            <p className="mb-5 text-[14px] font-satoshi text-black/60">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex gap-3 ">
              <div
                className="p-2 flex items-center justify-center bg-white rounded-full
              border border-black/20"
              >
                <FaTwitter size={16} />
              </div>
              <div
                className="p-2 flex items-center justify-center bg-black rounded-full
              border border-black/20"
              >
                <FaFacebookF size={16} color="white" />
              </div>
              <div
                className="p-2 flex items-center justify-center bg-white rounded-full
              border border-black/20"
              >
                <FaInstagram size={16} />
              </div>
              <div
                className="p-2 flex items-center justify-center bg-white rounded-full
              border border-black/20"
              >
                <FaGithub size={16} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6  lg:contents ">
            {footerSections.map(({ name: sectionName, links }, index) => {
              return (
                <div
                  key={`footer-section-${sectionName}-${index}`}
                  className="flex flex-col gap-4"
                >
                  <p className="text-[14px] font-medium font-satoshi text-black lg:text-[16px]">
                    {sectionName}
                  </p>
                  <ul className="flex flex-col gap-3">
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
            {payments.map((payment, index) => {
              return (
                <img
                  className={cn('w-10 rounded-[3px] lg:w-11')}
                  key={`footer-payment-${index}`}
                  alt=""
                  src={payment}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
