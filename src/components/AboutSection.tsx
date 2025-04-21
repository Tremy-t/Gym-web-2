import React from 'react';
import { Users, Clock, MapPin, Award } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg transition-transform duration-300 hover:transform hover:translate-y-[-8px]">
      <div className="text-emerald-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Users size={32} />,
      title: "Expert Trainers",
      description: "Our certified trainers create personalized workout plans to help you reach your goals safely and effectively."
    },
    {
      icon: <Clock size={32} />,
      title: "24/7 Access",
      description: "Enjoy round-the-clock access to our facilities, allowing you to work out on your schedule."
    },
    {
      icon: <MapPin size={32} />,
      title: "Multiple Locations",
      description: "With six convenient locations across the city, you're never far from an APEX Fitness center."
    },
    {
      icon: <Award size={32} />,
      title: "Premium Equipment",
      description: "Train with state-of-the-art equipment that is regularly maintained and updated for optimal performance."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-emerald-500">APEX Fitness</span></h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Founded in 2010, APEX Fitness has grown into the premier fitness destination with a commitment to quality, innovation, and member success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg"
              alt="Modern gym interior"
              className="rounded-lg shadow-xl w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-500 text-white p-4 md:p-6 rounded-lg shadow-lg">
              <p className="text-xl md:text-2xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">We're More Than Just a Gym</h3>
            <p className="text-gray-400 mb-6">
              At APEX Fitness, we believe in creating a community where everyone feels welcome and empowered to become their best selves. Our state-of-the-art facilities, expert trainers, and diverse class offerings ensure that no matter your fitness level or goals, you'll find everything you need to succeed.
            </p>
            <p className="text-gray-400 mb-8">
              We've helped thousands of members transform their lives through fitness, and we're committed to providing the support, resources, and motivation you need on your fitness journey.
            </p>
            <a 
              href="#join" 
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 text-center w-full sm:w-auto"
            >
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;