import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-start px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <img
          src="/Images/herobg.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-3xl text-left p-10 relative z-10">
        <h1 className="text-7xl font-light mb-4 text-black">
          Fragrance—
          <br />
          <span className="text-gray-700 text-[55px]">done right</span>
        </h1>
        <p className="text-xl">____________________</p>
        <p className="text-lg mb-4 text-gray-600 pt-4">
          The signature scent for you.
        </p>
        <p className="text-lg mb-8 text-gray-600">
          Timeless, refined, and uniquely yours.
          <br />A fragrance that speaks without saying a word.
        </p>
        <button className="bg-gray-900 text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Hero;
