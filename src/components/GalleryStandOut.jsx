export function GalleryStandOut() {
  return (
    <section className="grid grid-cols-1 items-center mx-auto lg:grid-cols-2">
      <picture className="">
        <source
          media="(min-width: 1024px)"
          srcSet="/images/desktop/image-stand-out.jpg"
        />
        <img
          src="/images/mobile/image-stand-out.jpg"
          alt=""
          className="w-full h-full"
        />
      </picture>

      <div className="bg-white flex flex-col  min-h-full items-center lg:items-start lg:max-w-2/3  mx-auto px-8 py-12 justify-center space-y-6">
        <div className="text-gray-950 lg:text-start text-center text-4xl font-fraunces-bold ">
          Stand out to the right audience
        </div>

        <p className="lg:text-start text-lg text-center font-barlow text-gray-600 ">
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <div className="relative">
          <p className="text-lg uppercase font-fraunces-bold text-gray-950 lg:text-start ">
            Learn more
          </p>
          <div className="rounded-full absolute mt-4 top-[0.5px] h-2 w-30 bg-red-400/20 hover:bg-red-400/60"></div>
        </div>
      </div>
    </section>
  );
}
