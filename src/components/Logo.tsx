import React from 'react';
import { Dumbbell } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Dumbbell size={28} className="text-emerald-500 mr-2" />
      <span className="text-white font-bold text-xl tracking-tight">APEX<span className="text-emerald-500">FITNESS</span></span>
    </div>
  );
};

export default Logo;