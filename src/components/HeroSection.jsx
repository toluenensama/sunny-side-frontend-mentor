import { cn } from "../lib/utils";
export function HeroSection() {
  return (
    <section
      className={cn(
        "min-h-screen flex flex-col items-center justify-center ",
        "bg-[url(/images/mobile/image-header.jpg)] bg-center bg-no-repeat",
        "lg:bg-[url(/images/desktop/image-header.jpg)] bg-cover bg-center bg-no-repeat"
      )}
    >
        <div className="text-white uppercase lg:text-6xl font-fraunces-black text-4xl tracking-[8px] px-6 text-center">
        We are creatives
        </div>
        <div className="mt-13">
            <img src="/images/icon-arrow-down.svg" alt="" className=""/>
        </div>
    </section>
  );
}
