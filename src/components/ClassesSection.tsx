import React, { useState } from 'react';
import { Activity, Users, Clock, Zap } from 'lucide-react';

interface ClassType {
  id: number;
  name: string;
  description: string;
  duration: string;
  intensity: 'Low' | 'Medium' | 'High';
  trainer: string;
  image: string;
  category: string;
}

const ClassesSection: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const classesData: ClassType[] = [
    {
      id: 1,
      name: "Power Cycling",
      description: "High-intensity indoor cycling class set to energizing music.",
      duration: "45 min",
      intensity: "High",
      trainer: "Alex Morgan",
      image: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg",
      category: "cardio"
    },
    {
      id: 2,
      name: "Yoga Flow",
      description: "Dynamic yoga sequence linking breath to movement.",
      duration: "60 min",
      intensity: "Medium",
      trainer: "Emma Chen",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg",
      category: "mind-body"
    },
    {
      id: 3,
      name: "HIIT Circuit",
      description: "High-intensity interval training to maximize calorie burn.",
      duration: "30 min",
      intensity: "High",
      trainer: "James Wilson",
      image: "https://images.pexels.com/photos/6456146/pexels-photo-6456146.jpeg",
      category: "hiit"
    },
    {
      id: 4,
      name: "Strength Foundations",
      description: "Essential weight training focusing on proper form and technique.",
      duration: "50 min",
      intensity: "Medium",
      trainer: "Sarah Johnson",
      image: "https://images.pexels.com/photos/6635225/pexels-photo-6635225.jpeg",
      category: "strength"
    },
    {
      id: 5,
      name: "Core & More",
      description: "Strengthen your core, improve posture, and build functional strength.",
      duration: "40 min",
      intensity: "Medium",
      trainer: "Michael Davis",
      image: "https://images.pexels.com/photos/6456291/pexels-photo-6456291.jpeg",
      category: "strength"
    },
    {
      id: 6,
      name: "Gentle Stretch",
      description: "Low-impact stretching to improve flexibility and reduce stress.",
      duration: "45 min",
      intensity: "Low",
      trainer: "Lisa Kim",
      image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?.jpeg",
      category: "mind-body"
    }
  ];

  const filteredClasses = filter === 'all' 
    ? classesData 
    : classesData.filter(c => c.category === filter);

  const categories = [
    { id: 'all', name: 'All Classes' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'strength', name: 'Strength' },
    { id: 'hiit', name: 'HIIT' },
    { id: 'mind-body', name: 'Mind & Body' }
  ];

  const getIntensityColor = (intensity: string) => {
    switch(intensity) {
      case 'Low': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'High': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="classes" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our <span className="text-emerald-500">Classes</span></h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From high-intensity workouts to mindful movement, our diverse class offerings cater to all fitness levels and goals.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                filter === category.id 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map(classItem => (
            <div 
              key={classItem.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:translate-y-[-8px]"
            >
              <div className="relative h-64">
                <img 
                  src={classItem.image} 
                  alt={classItem.name} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-4 right-4 ${getIntensityColor(classItem.intensity)} text-white text-xs font-bold px-2 py-1 rounded`}>
                  {classItem.intensity} Intensity
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{classItem.name}</h3>
                <p className="text-gray-400 mb-4">{classItem.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock size={16} className="text-emerald-500 mr-2" />
                    <span className="text-gray-300 text-sm">{classItem.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="text-emerald-500 mr-2" />
                    <span className="text-gray-300 text-sm">{classItem.trainer}</span>
                  </div>
                </div>
                <button className="w-full bg-gray-800 hover:bg-emerald-500 text-white text-center py-2 rounded transition-colors duration-300">
                  View Schedule
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#schedule" 
            className="inline-block bg-transparent border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            View Full Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;