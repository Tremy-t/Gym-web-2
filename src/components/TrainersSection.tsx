import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

interface Trainer {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  social: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

const TrainersSection: React.FC = () => {
  const trainers: Trainer[] = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Head Trainer",
      bio: "With over 10 years of experience, Alex specializes in strength training and athletic performance.",
      image: "https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg",
      specialties: ["Strength Training", "HIIT", "Athletic Performance"],
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Emma Chen",
      role: "Yoga Instructor",
      bio: "Emma is a certified yoga instructor with expertise in various yoga styles and meditation techniques.",
      image: "https://images.unsplash.com/photo-1679076875671-a30b4dbc6016?.jpeg",
      specialties: ["Yoga", "Meditation", "Flexibility"],
      social: {
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "James Wilson",
      role: "Fitness Coach",
      bio: "James focuses on functional training and helping clients achieve sustainable results through balanced programs.",
      image: "https://images.pexels.com/photos/9310382/pexels-photo-9310382.jpeg",
      specialties: ["Functional Training", "Weight Loss", "Nutrition"],
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Nutrition Specialist",
      bio: "Sarah combines her knowledge of nutrition and fitness to create holistic health plans for all fitness levels.",
      image: "https://images.pexels.com/photos/10513822/pexels-photo-10513822.jpeg",
      specialties: ["Nutrition Planning", "Weight Management", "Strength Training"],
      social: {
        instagram: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="trainers" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our <span className="text-emerald-500">Expert Trainers</span></h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Meet our team of certified fitness professionals dedicated to helping you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map(trainer => (
            <div 
              key={trainer.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                  <p className="text-emerald-400">{trainer.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-400 mb-4 min-h-[80px]">{trainer.bio}</p>
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-3">
                  {trainer.social.instagram && (
                    <a href={trainer.social.instagram} className="text-gray-400 hover:text-emerald-500 transition-colors">
                      <Instagram size={20} />
                    </a>
                  )}
                  {trainer.social.twitter && (
                    <a href={trainer.social.twitter} className="text-gray-400 hover:text-emerald-500 transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                  {trainer.social.linkedin && (
                    <a href={trainer.social.linkedin} className="text-gray-400 hover:text-emerald-500 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#book" 
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
          >
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;