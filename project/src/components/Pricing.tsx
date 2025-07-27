import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '₹0',
      period: 'forever',
      description: 'Perfect for casual listeners',
      features: [
        'Limited skips',
        'Ads between songs',
        'Standard audio quality',
        'Mobile and web access',
        'Shuffle play only'
      ],
      buttonText: 'Get Started',
      buttonClass: 'border-2 border-gray-600 text-white hover:bg-gray-700',
      popular: false
    },
    {
      name: 'Premium',
      price: '₹119',
      period: 'per month',
      description: 'Most popular choice for music lovers',
      features: [
        'Unlimited skips',
        'No ads',
        'High-quality audio',
        'Offline downloads',
        'Play any song',
        'All devices access'
      ],
      buttonText: 'Start Free Trial',
      buttonClass: 'bg-green-500 text-black hover:bg-green-400',
      popular: true
    },
    {
      name: 'Family',
      price: '₹179',
      period: 'per month',
      description: 'Perfect for families up to 6 members',
      features: [
        'All Premium features',
        'Up to 6 accounts',
        'Individual profiles',
        'Kid-safe mode',
        'Family mix playlist',
        'Parental controls'
      ],
      buttonText: 'Choose Family',
      buttonClass: 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="text-green-400">Music Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Select the perfect plan for your music needs. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-green-400 transform scale-105' : ''
              } hover:bg-gray-800 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400">
            All plans include access to 50M+ songs • Cancel anytime • No hidden fees
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;