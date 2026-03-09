import ProfilePic from "../assets/images/ProfilePic.png";
import Button from "./Button";
import Typewriter from "./Typewriter";
import useScrollReveal, { scrollRevealClass } from "../hooks/useScrollReveal";

export const Hero = () => {
  const typewriterTexts = [
    "Full-Stack Development",
    "Web Development",
    "Shopify Development",
    "React Applications",
    "User Experience",
    "Modern Web Solutions",
  ];
  const [isVisible, ref] = useScrollReveal({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`text-white text-center py-12 md:py-16 min-h-screen flex items-center justify-center ${scrollRevealClass} ${
        isVisible ? "opacity-100 translate-y-0" : ""
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Image with modern styling */}
        <div className="mb-8 flex justify-center">
          {/* <div className="profile-gradient-border">
            <img
              src={ProfilePic}
              alt="Dallin Thomson"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top 
                       shadow-2xl shadow-blue-500/20 transform transition-transform duration-300 hover:scale-105"
            />
          </div> */}
        </div>

        {/* Main Hero Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-sora leading-tight">
            <span className="block mb-2">Hi, I&apos;m</span>
            <span
              className="block bg-gradient-to-r from-emerald-400 to-teal-500 
                           bg-clip-text text-transparent mb-4"
            >
              Dallin Thomson
            </span>
          </h1>

          <div className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
            <span className="block mb-2">I do</span>
            <div className="h-12 md:h-16 flex items-center justify-center">
              <Typewriter
                texts={typewriterTexts}
                speed={100}
                deleteSpeed={50}
                delayBetweenTexts={2000}
                className="text-blue-400 font-semibold"
              />
            </div>
          </div>

          <p className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I create modern, responsive full-stack web applications that deliver seamless,
            user-friendly experiences with a focus on innovation and usability.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="#experience" title="View My Work" />
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-white/20 text-white rounded-full 
                       hover:border-blue-400 hover:text-blue-400 transition-all duration-300
                       backdrop-blur-sm"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
