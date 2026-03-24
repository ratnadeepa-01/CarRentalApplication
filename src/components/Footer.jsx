import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {

  const links = [
    {
      title: "Explore Cars",
      items: [
        { name: "Luxury Cars", href: "#" },
        { name: "SUVs", href: "#" },
        { name: "Sedans", href: "#" },
        { name: "Economy Cars", href: "#" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Support",
      items: [
        { name: "Help Center", href: "#" },
        { name: "Booking Guide", href: "#" },
        { name: "Cancellation Policy", href: "#" },
        { name: "Customer Support", href: "#" }
      ]
    }
  ];

  return (
    <footer className=" pt-15 px-4 sm:px-6 md:px-8 lg:px-20 bg-light">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row gap-16 pb-12">

          {/* Brand Info */}
          <div className="flex-1 max-w-full lg:max-w-[400px]">

            <img src={assets.logo} alt="logo" className='h-8 md:h-9 mb-7'/>
            <p className="text-sm leading-7 text-zinc-500 mb-7 max-w-80">
              CarRental provides reliable and affordable car rental services
              for travelers and daily commuters. Choose from a wide range of
              vehicles for your next journey.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <a href="#" className="size-9 rounded-full bg-zinc-100 flex items-center justify-center">
                <img src={assets.facebook_logo} className='w-5 h-5' alt="FB"/>
              </a>

              <a href="#" className="size-9 rounded-full bg-zinc-100 flex items-center justify-center">
                <img src={assets.instagram_logo} className='w-5 h-5' alt="IG"/>
              </a>

              <a href="#" className="size-9 rounded-full bg-zinc-100 flex items-center justify-center">
                <img src={assets.twitter_logo} className='w-5 h-5' alt="TW"/>
              </a>

              <a href="#" className="size-9 rounded-full bg-zinc-100 flex items-center justify-center">
                <img src={assets.gmail_logo} className='w-5 h-5' alt="GM"/>
              </a>

            </div>

          </div>

          {/* Links */}
          <div className="flex flex-wrap sm:flex-nowrap flex-1 justify-between gap-8 w-full max-w-3xl">

            {links.map((link, index) => (
              <div key={index}>
                <h3 className="text-base font-medium text-zinc-800 mb-6">
                  {link.title}
                </h3>

                <ul className="flex flex-col gap-3">

                  {link.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a
                        href={item.href}
                        className="text-sm text-zinc-500 hover:text-zinc-700"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}

                </ul>
              </div>
            ))}

          </div>

        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-9 max-w-6xl">

          <div className="flex-1">
            <h4 className="text-base font-medium text-zinc-800">
              Address
            </h4>
            <p className="text-sm text-zinc-500">
              221B Baker Street<br />
              London, United Kingdom
            </p>
          </div>

          <div className="flex-1">
            <h4 className="text-base font-medium text-zinc-800">
              Phone
            </h4>
            <p className="text-sm text-zinc-500">
              +1 (800) 555-1234
            </p>
          </div>

          <div className="flex-1">
            <h4 className="text-base font-medium text-zinc-800">
              Email
            </h4>
            <p className="text-sm text-zinc-500">
              support@carrental.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 border-t border-zinc-300">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} CarRental. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-sm text-zinc-500">Privacy Policy</a>
            <a href="#" className="text-sm text-zinc-500">Terms of Service</a>
            <a href="#" className="text-sm text-zinc-500">Rental Policy</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;