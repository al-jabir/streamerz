import { motion as Motion } from 'framer-motion';
import { PLANS_CONTENT } from '../constants';


const PricingPlans = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };
  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{PLANS_CONTENT.sectionDescription}</p>
        </Motion.div>

        <Motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.5 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <Motion.div
              custom={index}
              variants={childVariants}
              key={index}
              className={`bg-neutral-950 p-8 rounded-xl shadow-lg border ${
                plan.popular ? 'border-blue-900/80' : 'border-neutral-800'
              }`}
            >
              {plan.popular && (
                <div
                  className="text-center mb-4
                "
                >
                  <span className="bg-blue-600 rounded-full py-1 px-3 text-white uppercase">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </div>
              )}
              <h3 className="text-lg lg:text-xs mb-4 tracking-tighter uppercase">{plan.name}</h3>
              <p className="text-neutral-400 mb-6">{plan.description}</p>
              <div className="text-2xl lg:text-3xl font-medium mb-6">{plan.price}</div>
              <ul className="mb-8 space-y-2 text-neutral-400">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-neutral-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg">
                {PLANS_CONTENT.ctaText}
              </button>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;
