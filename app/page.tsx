import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import FeatureIconsWithTextList from "@/components/ui/FeatureCardWithLogo/FeatureIconsWithTextList";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography/Typography";
import { perks } from "@/lib/constants/perks";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <Typography variant="HeroText" attribute="h1">
            Your marketplace for high quality{" "}
            <span className="text-blue-600">digital assets</span>
          </Typography>

          <Typography
            variant="paragraphMuted"
            fontSize="lg"
            className="mt-6 max-w-prose"
            attribute="p"
          >
            {" "}
            Welcome to Digitalippo. Every asset in our platform is verified by
            our team to ensure our highest quality standards.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"}>
              <Button variant={"default"} className="bg-blue-600">
                Browse Trending
              </Button>
            </Link>
            <Button variant={"ghost"}>Our Quality promise &rarr;</Button>
          </div>
        </div>
        <ProductReel />
      </MaxWidthWrapper>
      <FeatureIconsWithTextList featuresList={perks} />
      <MaxWidthWrapper>
        <footer className="footer-section ">
          <div className="container mx-auto">
            <div className="footer-cta border-b border-gray-700 py-5">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-orange-500 text-2xl mr-2"></i>
                    <div className="cta-text">
                      <h4 className="text-primary text-lg font-semibold mb-1">
                        Find us
                      </h4>
                      <Typography
                        variant="paragraphMuted"
                        fontSize="sm"
                        attribute="span"
                      >
                        1010 Avenue, sw 54321, Chandigarh
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 mb-4">
                  <div className="flex items-center">
                    <i className="fas fa-phone text-orange-500 text-2xl mr-2"></i>
                    <div className="cta-text">
                      <h4 className="text-primary text-lg font-semibold mb-1">
                        Call us
                      </h4>
                      <Typography
                        variant="paragraphMuted"
                        fontSize="sm"
                        attribute="span"
                      >
                        9171575573
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <div className="flex items-center">
                    <i className="far fa-envelope-open text-orange-500 text-2xl mr-2"></i>
                    <div className="cta-text">
                      <h4 className="text-primary text-lg font-semibold mb-1">
                        Mail us
                      </h4>
                      <Typography
                        variant="paragraphMuted"
                        fontSize="sm"
                        attribute="span"
                      >
                        ankit@topsinfosolutions.com
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-content py-5">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                  <div className="footer-widget">
                    <div className="footer-logo mb-6">
                      <a href="index.html">
                        {" "}
                        <img
                          src="https://i.ibb.co/QDy827D/ak-logo.png"
                          className="max-w-full"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="footer-text">
                      <p className="text-gray-500 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut...
                      </p>
                    </div>
                    <div className="footer-social-icon mt-4">
                      <span className="text-white font-semibold block mb-2">
                        Follow us
                      </span>
                      <a href="#" className="text-white">
                        <i className="fab fa-facebook-f facebook-bg"></i>
                      </a>
                      <a href="#" className="text-white">
                        <i className="fab fa-twitter twitter-bg"></i>
                      </a>
                      <a href="#" className="text-white">
                        <i className="fab fa-google-plus-g google-bg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3 className="text-white text-lg font-semibold mb-4">
                        Useful Links
                      </h3>
                    </div>
                    <ul className="list-none">
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-orange-500"
                        >
                          Home
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 mb-8">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3 className="text-white text-lg font-semibold mb-4">
                        Subscribe
                      </h3>
                    </div>
                    <div className="footer-text mb-4 text-gray-500">
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </div>
                    <div className="subscribe-form">
                      <form action="#" className="flex items-center">
                        <input
                          type="text"
                          placeholder="Email Address"
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white"
                        />
                        <button className="ml-2 px-4 py-2 bg-orange-500 border border-orange-500">
                          <i className="fab fa-telegram-plane text-white text-lg"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area bg-gray-800 py-5">
            <div className="container mx-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-full sm:w-1/2 md:w-1/2 text-center sm:text-left mb-4 sm:mb-0">
                  <div className="copyright-text">
                    <p className="text-gray-600 text-sm">
                      Copyright &copy; 2018, All Right Reserved{" "}
                      <a
                        href="https://codepen.io/anupkumar92/"
                        className="text-orange-500"
                      >
                        Anup
                      </a>
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 text-center sm:text-right">
                  <div className="footer-menu">
                    <ul className="list-none">
                      <li className="inline-block ml-4">
                        <a
                          href="#"
                          className="text-gray-500 hover:text-orange-500"
                        >
                          Home
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </MaxWidthWrapper>
    </>
  );
}
