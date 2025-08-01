import React from 'react';
import { KEY_FEATURES_CONTENT } from '../constants';
import { motion as Motion } from 'framer-motion';

const KeyFeatures = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: 'beforeChildren',
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="text-center mb-12 border-t border-neutral-800">
        <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
          {KEY_FEATURES_CONTENT.sectionTitle}
        </h2>
        <p className="mt-4">{KEY_FEATURES_CONTENT.sectionDescription}</p>
      </div>

      <Motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="flex flex-wrap justify-between"
      >
        {KEY_FEATURES_CONTENT.features.map((feature, index) => (
          <Motion.div
            key={index}
            variants={featureVariants}
            className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-6"
          >
            <div className="flex justify-center items-center">{feature.icon}</div>
            <h3 className="text-xl">{feature.title}</h3>
            <p className="mt-2 text-neutral-400">{feature.description}</p>
          </Motion.div>
        ))}
      </Motion.div>
    </div>
  );
};

export default KeyFeatures;
