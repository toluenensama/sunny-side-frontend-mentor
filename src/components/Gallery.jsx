export function Gallery() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="/images/desktop/image-gallery-milkbottles.jpg"
        />
        <img
          src="/images/mobile/image-gallery-milkbottles.jpg"
          alt=""
          className="w-full h-full"
        />
      </picture>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="/images/desktop/image-gallery-orange.jpg"
        />
        <img
          src="/images/mobile/image-gallery-orange.jpg"
          alt=""
          className="w-full h-full"
        />
      </picture>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="/images/desktop/image-gallery-cone.jpg"
        />
        <img
          src="/images/mobile/image-gallery-cone.jpg"
          alt=""
          className="w-full h-full"
        />
      </picture>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcset="/images/desktop/image-gallery-sugarcubes.jpg"
        />
        <img
          src="/images/mobile/image-gallery-sugar-cubes.jpg"
          alt=""
          className="w-full h-full"
        />
      </picture>
    </section>
  );
}
