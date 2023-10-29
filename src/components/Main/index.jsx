import imgtransform from "../../assets/img/desktop/image-transform.jpg";
import imgstand from "../../assets/img/desktop/image-stand-out.jpg";
import imggraphic from "../../assets/img/desktop/image-graphic-design.jpg";
import imgphotography from "../../assets/img/desktop/image-photography.jpg";
import imgtransformmobile from "../../assets/img/mobile/image-transform.jpg";
import imgstandmmobile from "../../assets/img/mobile/image-stand-out.jpg";
import imggraphicmmobile from "../../assets/img/mobile/image-graphic-design.jpg";
import imgphotographymmobile from "../../assets/img/mobile/image-photography.jpg";
import CardClients from "../CardClients";
import CardGallery from "../CardGallery";

export default function Main() {
  return (
    <main id="main" className="flex-grow">
      <section>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="flex justify-center items-center max-md:order-last">
            <div className="flex flex-col w-8/12 gap-10 max-xl:gap-8 max-lg:gap-6 max-md:py-14 max-md:px-12 max-md:w-full max-xs:px-4 max-md:items-center">
              <h2 className="text-2.7 font-fraunces font-black text-very-dark-desaturated-blue max-xl:text-3xl max-lg:text-2xl max-md:text-center max-md:text-3xl">
                Transform your brand
              </h2>
              <p className="text-xl font-barlow font-medium text-dark-grayish-blue max-xl:text-base max-lg:text-sm max-md:text-center max-md:text-base">
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <span className="relative w-fit px-2 font-fraunces font-black text-very-dark-desaturated-blue cursor-pointer after:content-[''] after:w-full after:absolute after:border-b-[10px] after:border-solid after:border-dark-yellow after:left-0 after:bottom-0 after:rounded-2xl after:-z-10 after:transition-colors after:ease-in after:duration-500 after:hover:border-yellow max-xl:text-sm max-xl:px-1 max-lg:text-xs max-lg:after:border-b-[7px] max-md:text-[0.72rem] max-md:text-center max-md:w-auto max-md:whitespace-nowrap">
                LEARN MORE
              </span>
            </div>
          </div>
          <img
            src={imgtransform}
            alt="Transform your brand"
            className="w-full max-xs:hidden"
          />
          <img
            src={imgtransformmobile}
            alt="Transform your brand"
            className="xs:hidden w-full"
          />
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="flex justify-center items-center order-last">
            <div className="flex flex-col w-8/12 gap-10 max-xl:gap-8 max-lg:gap-6 max-md:py-14 max-md:px-12 max-md:w-full max-xs:px-4 max-md:items-center">
              <h2 className="text-2.7 font-fraunces font-black text-very-dark-desaturated-blue max-xl:text-3xl max-lg:text-2xl max-md:text-center max-md:text-3xl">
                Stand out to the right audience
              </h2>
              <p className="text-xl font-barlow font-medium text-dark-grayish-blue max-xl:text-base max-lg:text-sm max-md:text-center max-md:text-base">
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywrites, we'll build and
                extend your brand in digital places.
              </p>
              <span className="relative w-fit px-2 font-fraunces font-black text-very-dark-desaturated-blue cursor-pointer after:content-[''] after:w-full after:absolute after:border-b-[10px] after:border-solid after:border-red-200 after:left-0 after:bottom-0 after:rounded-2xl after:-z-10 after:transition-colors after:ease-in after:duration-500 after:hover:border-red-400 max-xl:text-sm max-xl:px-1 max-lg:text-xs max-lg:after:border-b-[7px] max-md:text-[0.72rem] max-md:text-center max-md:w-auto max-md:whitespace-nowrap">
                LEARN MORE
              </span>
            </div>
          </div>
          <div>
            <img
              src={imgstand}
              alt="Stand out to the right audience"
              className="w-full max-xs:hidden"
            />
            <img
              src={imgstandmmobile}
              alt="Stand out to the right audience"
              className="xs:hidden w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1">
          <div className="relative flex justify-center">
            <img
              src={imggraphic}
              alt="Graphic Design"
              className="w-full max-xs:hidden"
            />
            <img
              src={imggraphicmmobile}
              alt="Graphic Design"
              className="xs:hidden w-full"
            />
            <div className="absolute flex flex-col gap-6 bottom-0 mb-10-per w-1/2 text-center max-xl:gap-4 max-xl:w-7/12 max-lg:gap-3 max-md:w-9/12 max-xs:w-full max-xs:px-4 max-xs:mb-[12%]">
              <h2 className="font-fraunces text-3xl font-extrabold text-dark-desaturated-cyan max-xl:text-2xl max-lg:text-xl max-md:text-2xl">
                Graphic Design
              </h2>
              <p className="font-barlow text-dark-desaturated-cyan font-semibold opacity-90 max-xl:text-sm max-lg:text-xs max-md:text-sm max-xs:leading-6 max-xs:font-bold">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential client's
                attention.
              </p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img
              src={imgphotography}
              alt="Photography"
              className="w-full max-xs:hidden"
            />
            <img
              src={imgphotographymmobile}
              alt="Photography"
              className="xs:hidden w-full"
            />
            <div className="absolute flex flex-col gap-6 bottom-0 mb-10-per w-1/2 text-center max-xl:gap-4 max-xl:w-7/12 max-lg:gap-3 max-md:w-9/12 max-xs:w-full max-xs:px-4 max-xs:mb-[12%]">
              <h2 className="font-fraunces text-3xl font-extrabold text-dark-blue max-xl:text-2xl max-lg:text-xl max-md:text-2xl">
                Photography
              </h2>
              <p className="font-barlow text-dark-blue font-semibold opacity-90 max-xl:text-sm max-lg:text-xs max-md:text-sm max-xs:leading-6 max-xs:font-bold">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CardClients />
      </section>
      <section>
        <CardGallery />
      </section>
    </main>
  );
}
