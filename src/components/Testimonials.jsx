export function Testimonials() {
  return (
    <section className="bg-white py-8 lg:p-8 flex flex-col items-center justify-center">
      <h2 className="py-6 text-xl tracking-widest text-gray-400 font-fraunces-bold uppercase text-center">
        Client testimonials
      </h2>
      <div className="grid grid-cols-1 mt-6 lg:grid-cols-3 lg:m-12 gap-12">
        <div className="flex flex-col items-center justify-center space-y-6 px-8">
          <img
            src="/images/image-emily.jpg"
            alt=""
            className="rounded-full h-20 w-20"
          />
          <p className="text-lg text-gray-600 font-barlow text-center ">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <h2 className="text-xl text-gray-900 font-fraunces-bold">
              {" "}
              Emily R.
            </h2>
            <p className="text-lg text-gray-400 font-barlow text-center mx-auto ">
              Marketing Director
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 px-8">
          <img
            src="/images/image-thomas.jpg"
            alt=""
            className="rounded-full h-20 w-20"
          />
          <p className="text-lg text-gray-600 font-barlow text-center ">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience
          </p>
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <h2 className="text-xl text-gray-900 font-fraunces-bold">
              Thomas S.
            </h2>
            <p className="text-lg text-gray-400 font-barlow text-center mx-auto ">
              Chief Operating Officer
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 px-8">
          <img
            src="/images/image-jennie.jpg"
            alt=""
            className="rounded-full h-20 w-20"
          />
          <p className="text-lg text-gray-600 font-barlow text-center ">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <div className="flex flex-col items-center justify-center space-y-3 text-center">
            <h2 className="text-xl text-gray-900 font-fraunces-bold">
              Jennie F.
            </h2>
            <p className="text-lg text-gray-400 font-barlow text-center mx-auto ">
              Business Owner
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
