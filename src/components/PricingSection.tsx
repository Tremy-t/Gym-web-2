import React from 'react';
import { Check, X } from 'lucide-react';

interface PlanFeature {
  feature: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
}

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Basic",
      price: "$49",
      period: "per month",
      description: "Perfect for beginners looking to start their fitness journey.",
      features: [
        { feature: "Full gym access", included: true },
        { feature: "Locker room access", included: true },
        { feature: "2 group classes / month", included: true },
        { feature: "Fitness assessment", included: false },
        { feature: "Personal training session", included: false },
        { feature: "Access to all locations", included: false },
      ],
      buttonText: "Get Started"
    },
    {
      name: "Premium",
      price: "$89",
      period: "per month",
      description: "Our most popular plan for dedicated fitness enthusiasts.",
      features: [
        { feature: "Full gym access", included: true },
        { feature: "Locker room access", included: true },
        { feature: "Unlimited group classes", included: true },
        { feature: "Fitness assessment", included: true },
        { feature: "1 personal training session / month", included: true },
        { feature: "Access to all locations", included: false },
      ],
      popular: true,
      buttonText: "Join Now"
    },
    {
      name: "Elite",
      price: "$129",
      period: "per month",
      description: "The ultimate fitness experience with premium perks and services.",
      features: [
        { feature: "Full gym access", included: true },
        { feature: "Locker room access", included: true },
        { feature: "Unlimited group classes", included: true },
        { feature: "Quarterly fitness assessment", included: true },
        { feature: "4 personal training sessions / month", included: true },
        { feature: "Access to all locations", included: true },
      ],
      buttonText: "Go Elite"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Membership <span className="text-emerald-500">Plans</span></h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the membership that fits your lifestyle and fitness goals. All plans include access to our state-of-the-art facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden transition-transform duration-300 hover:transform hover:translate-y-[-8px] ${
                plan.popular 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl border border-emerald-500' 
                  : 'bg-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-emerald-500 text-white text-xs font-bold px-4 py-1 transform rotate-45 translate-x-5 translate-y-3">
                    POPULAR
                  </div>
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-400 mb-6 min-h-[60px]">{plan.description}</p>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      {feature.included ? (
                        <Check size={20} className="text-emerald-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X size={20} className="text-gray-500 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-300" : "text-gray-500"}>
                        {feature.feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className={`w-full py-3 rounded-full font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-400 mb-6">
            We offer corporate memberships and special packages for groups. Contact our team to discuss your specific requirements.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;