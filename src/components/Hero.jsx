import { BRAND_LOGOS, HERO_CONTENT } from '../constants';
import heroImg from '../assets/hero.jpg';
import { motion as Motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const Hero = () => {
  return (
    <Motion.section variants={containerVariants} initial="hidden" animate="visible" className="pt-28 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <Motion.div variants={fadeInUp} className="mb-8 border-neutral-800 px-3 py-2 rounded-full text-xs">
          {HERO_CONTENT.badgeText}
        </Motion.div>

        <Motion.h1
          variants={fadeInUp}
          className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        >
          {HERO_CONTENT.mainHeading.split('\n').map((text, idx) => (
            <span key={idx}>
              {text}
              <br />
            </span>
          ))}
        </Motion.h1>

        <Motion.p variants={fadeInUp} className="mt-6 max-w-7xl text-neutral-400">
          {HERO_CONTENT.subHeading}
        </Motion.p>

        <Motion.div variants={fadeInUp} className="mt-6 space-x-4">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-500 py-3 px-6 rounded-lg text-white font-medium"
          >
            {HERO_CONTENT.callToAction.primary}
          </a>
          <a
            href="#"
            className=" border border-gray-500 hover:border-gray-400 py-3 px-6 rounded-lg text-white font-medium"
          >
            {HERO_CONTENT.callToAction.secondary}
          </a>
        </Motion.div>

        <Motion.div variants={fadeIn} className="py-10">
          <p className="text-gray-400 text-center mb-8">{HERO_CONTENT.trustedByText}</p>
          <Motion.div variants={fadeIn} className=" flex flex-wrap justify-center gap-8">
            {BRAND_LOGOS.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} className="h-8" />
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.div variants={fadeIn} className="mt-12">
          <img
            src={heroImg}
            alt="stramerz sass interface"
            className=" w-full h-auto rounded-3xl border border-neutral-800 mb-20"
          />
        </Motion.div>
      </div>
    </Motion.section>
  );
};

export default Hero;
