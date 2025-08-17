import Image from "next/image";
import CustomButton from "../reusable/buttons/CustomButton";

const HomeHeaderSection = ({
  title,
  description,
  buttonTitle,
  buttonUrl,
}: {
  title: string;
  description: string;
  buttonTitle: string;
  buttonUrl: string;
}) => {
  return (
    <section className="pt-[10.56rem] text-center bg-black relative">
      <header className="flex flex-col items-center">
        <h1 className="text-h1 font-semibold tracking-tight px-[21.62rem] pb-[1.13rem]">
          {title}
        </h1>
        <p className="text-body text-text-secondary pb-[1.56rem] w-[36.0625rem]">
          {description}
        </p>

        <CustomButton title={buttonTitle} url={buttonUrl} />
      </header>

      {/* Fixed-size image entirely below the section by 4rem */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute left-1/2 -translate-x-1/2
          -bottom-[38.5625rem]  /* 34.5625rem image height + 4rem gap */
          z-20
          w-[54.125rem] h-[34.5625rem]
        "
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/header-image.png"
            alt="header-image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHeaderSection;
