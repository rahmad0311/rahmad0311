import React, { useEffect, useState, useRef } from 'react';
import { Code2, Palette, Video, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming",
      color: "from-blue-500 to-purple-500",
      skills: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "React/Next.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Illustration",
      color: "from-pink-500 to-red-500",
      skills: [
        { name: "Adobe Photoshop", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Procreate", level: 88 },
        { name: "Figma/UI Design", level: 85 }
      ]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creation",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Video Editing", level: 90 },
        { name: "Motion Graphics", level: 85 },
        { name: "Social Media Strategy", level: 88 },
        { name: "Content Writing", level: 82 }
      ]
    }
  ];

  const tools = [
    { icon: <Database className="w-6 h-6" />, name: "MongoDB", category: "Database" },
    { icon: <Globe className="w-6 h-6" />, name: "REST API", category: "Backend" },
    { icon: <Smartphone className="w-6 h-6" />, name: "React Native", category: "Mobile" },
    { icon: <Code2 className="w-6 h-6" />, name: "Git/GitHub", category: "Version Control" }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Keterampilan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Kombinasi keahlian teknis dan kreatif yang terus berkembang melalui pembelajaran dan praktik berkelanjutan
          </p>
        </div>

        {/* Main Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Tools & Technologies</h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-lg p-4 text-center hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-105"
            >
              <div className="text-purple-400 mb-3 flex justify-center">
                {tool.icon}
              </div>
              <h4 className="text-white font-medium mb-1">{tool.name}</h4>
              <p className="text-gray-400 text-sm">{tool.category}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Selalu Belajar & Berkembang
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Teknologi terus berkembang, dan saya berkomitmen untuk selalu mengikuti tren terbaru. 
              Saat ini sedang mempelajari AI/Machine Learning, Web3, dan teknologi emerging lainnya 
              untuk tetap relevan di era digital yang dinamis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;