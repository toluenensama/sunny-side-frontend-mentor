export function GalleryTransform() {
  return (
    <section className="grid grid-cols-1 items-center mx-auto lg:grid-cols-2">
      <picture className="lg:order-last">
        <source
          media="(min-width: 1024px)"
          srcSet="/images/desktop/image-transform.jpg"
        />
        <img src="/images/mobile/image-transform.jpg" alt="" className="w-full h-full" />
      </picture>

      <div className="bg-white flex flex-col  min-h-full items-center lg:items-start lg:max-w-2/3  mx-auto px-8 py-12 justify-center space-y-6">
        <div className="text-gray-950 lg:text-start text-center text-4xl font-fraunces-bold ">
          Transform your brand
        </div>

        <p className="lg:text-start text-lg text-center font-barlow text-gray-600 ">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <div className=" relative">
            <p className="text-lg uppercase font-fraunces-bold text-gray-950 lg:text-start ">
            Learn more
            </p>
            <div className="rounded-full absolute mt-4 top-[0.5px] h-2 w-30 bg-yellow-500/20 hover:bg-yellow-500/60"></div>
        </div>
      </div>
    </section>
  );
}
