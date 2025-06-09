import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "programming",
      description: "Dashboard analitik modern untuk platform e-commerce dengan real-time data visualization dan responsive design.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 2,
      title: "Fantasy Character Series",
      category: "illustration",
      description: "Koleksi ilustrasi karakter fantasy dengan gaya semi-realistis, mengeksplorasi dunia mitologi dan magic.",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Procreate", "Adobe Photoshop", "Digital Art"],
      links: {
        behance: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      title: "Tech Tutorial Series",
      category: "content",
      description: "Serial video tutorial programming untuk pemula dengan pendekatan yang mudah dipahami dan engaging.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Video Editing", "Motion Graphics", "Content Strategy"],
      links: {
        youtube: "#",
        tiktok: "#"
      }
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "programming",
      description: "Aplikasi mobile banking dengan UI/UX modern, fitur keamanan tinggi, dan integrasi payment gateway.",
      image: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 5,
      title: "Brand Identity Design",
      category: "illustration",
      description: "Desain identitas visual lengkap untuk startup teknologi, termasuk logo, color palette, dan style guide.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Adobe Illustrator", "Figma", "Brand Strategy"],
      links: {
        behance: "#",
        dribbble: "#"
      }
    },
    {
      id: 6,
      title: "Coding Livestream",
      category: "content",
      description: "Livestream coding session reguler di platform Twitch dan YouTube, membangun proyek real-time dengan audience.",
      image: "https://images.pexels.com/photos/4050303/pexels-photo-4050303.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["OBS Studio", "Live Coding", "Community Building"],
      links: {
        twitch: "#",
        youtube: "#"
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'Semua' },
    { id: 'programming', label: 'Programming' },
    { id: 'illustration', label: 'Ilustrasi' },
    { id: 'content', label: 'Content' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Proyek Unggulan
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Koleksi karya terpilih yang menampilkan keahlian di bidang programming, ilustrasi, dan content creation
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                    {Object.entries(project.links).map(([key, link]) => (
                      <a
                        key={key}
                        href={link}
                        className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-purple-500/20 transition-colors duration-300"
                      >
                        {key === 'github' && <Github size={16} />}
                        {key === 'demo' && <ExternalLink size={16} />}
                        {key === 'behance' && <Eye size={16} />}
                        {key === 'instagram' && <Eye size={16} />}
                        {key === 'youtube' && <Eye size={16} />}
                        {key === 'tiktok' && <Eye size={16} />}
                        {key === 'dribbble' && <Eye size={16} />}
                        {key === 'twitch' && <Eye size={16} />}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;