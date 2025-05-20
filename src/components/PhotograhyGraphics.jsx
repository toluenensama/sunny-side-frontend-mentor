import { cn } from "../lib/utils";

export function PhotographyGraphics() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className={cn("relative")}>
        <picture className="">
          <source
            media="(min-width: 1024px)"
            srcSet="/images/desktop/image-graphic-design.jpg"
          />
          <img
            src="/images/mobile/image-graphic-design.jpg"
            alt=""
            className="w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 flex flex-col mx-auto lg:mx-28 text-green-800 space-y-6 p-4 items-center mb-8 justify-end">
          <div className="text-3xl font-fraunces-bold "> Graphic design</div>
          <p className="text-lg font-barlow text-center pt-4">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className={cn("relative")}>
        <picture className="">
          <source
            media="(min-width: 1024px)"
            srcSet="/images/desktop/image-photography.jpg"
          />
          <img
            src="/images/mobile/image-photography.jpg"
            alt=""
            className="w-full h-full"
          />
        </picture>
        <div className="absolute inset-0 flex flex-col mx-auto lg:mx-28 text-blue-800 space-y-6 p-4 items-center mb-8 justify-end">
          <div className="text-3xl font-fraunces-bold "> Photography</div>
          <p className="text-lg font-barlow text-center pt-4">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  );
}
