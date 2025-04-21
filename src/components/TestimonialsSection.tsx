import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Roberts",
      role: "Member for 3 years",
      quote: "APEX Fitness has completely transformed my approach to fitness. The trainers are knowledgeable, the facilities are top-notch, and the community is incredibly supportive. I've achieved results I never thought possible.",
      image: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
      rating: 5
    },
    {
      id: 2,
      name: "Jessica Kim",
      role: "Member for 1 year",
      quote: "Joining APEX was the best decision I've made for my health. The variety of classes keeps my workouts fresh and exciting, and the trainers push me to be my best self. I'm stronger, more confident, and happier.",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      rating: 5
    },
    {
      id: 3,
      name: "David Thompson",
      role: "Member for 2 years",
      quote: "As someone who was intimidated by gyms, APEX provided the welcoming environment I needed. The staff is friendly, the members are supportive, and I've never felt judged. I've lost 40 pounds and gained a new lifestyle.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      rating: 4
    },
    {
      id: 4,
      name: "Sophia Martinez",
      role: "Member for 6 months",
      quote: "The personal training at APEX is exceptional. My trainer understood my goals and created a program that worked perfectly for me. The facilities are always clean, and the equipment is state-of-the-art.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success <span className="text-emerald-500">Stories</span></h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hear from our members who have transformed their lives with APEX Fitness.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-xl p-8 md:p-10 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center mb-6">
                      <div className="mb-4 md:mb-0 md:mr-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-2 border-emerald-500"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-emerald-400">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={i < testimonial.rating ? "text-yellow-400" : "text-gray-600"} 
                              fill={i < testimonial.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full shadow-lg transition-colors duration-300 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full shadow-lg transition-colors duration-300 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-emerald-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;