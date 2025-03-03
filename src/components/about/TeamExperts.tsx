
import React from 'react';
import { useScrollReveal } from '@/utils/animations';
import { GraduationCap, Briefcase } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
}

const TeamExperts = () => {
  const { ref, isRevealed } = useScrollReveal();
  
  const teamMembers: TeamMember[] = [
    {
      name: "רחל לוי",
      role: "מומחית מס",
      specialty: "החזרי מס לשכירים",
      experience: "15+ שנות ניסיון",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "דני כהן",
      role: "מייסד ומנכ\"ל",
      specialty: "תכנון מס",
      experience: "12+ שנות ניסיון",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "מיכל אברהמי",
      role: "רואת חשבון",
      specialty: "החזרי מס לעצמאים",
      experience: "10+ שנות ניסיון",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      name: "אמיר גולן",
      role: "יועץ מס",
      specialty: "זיכויי מס",
      experience: "8+ שנות ניסיון",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      name: "תמר דוד",
      role: "מומחית פנסיה",
      specialty: "החזרי מס פנסיוניים",
      experience: "7+ שנות ניסיון",
      image: "https://randomuser.me/api/portraits/women/90.jpg"
    }
  ];

  const expertise = [
    "ביקורות מס",
    "החזרי מס פנסיוניים",
    "זיכויי מס למשפחות",
    "ניכויי הוצאות עסקיות",
    "הטבות מס לעולים חדשים",
    "החזרי מס בשל הוצאות רפואיות"
  ];

  return (
    <section ref={ref} className={`py-16 bg-gray-50 ${isRevealed ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="section-title">הצוות המקצועי שלנו</h2>
        <p className="section-subtitle">50+ שנות ניסיון משולב בתחום המיסוי והחזרי המס</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card p-6 text-center transition-all hover:shadow-lg">
              <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-brand-blue">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-brand-blue font-medium mb-2">{member.role}</p>
              <p className="text-sm text-gray-600 mb-3">{member.specialty}</p>
              
              <div className="flex items-center justify-center text-sm text-gray-600">
                <Briefcase className="h-4 w-4 ml-1" />
                <span>{member.experience}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">תחומי המומחיות שלנו</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                <GraduationCap className="h-5 w-5 text-brand-blue ml-2" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamExperts;
