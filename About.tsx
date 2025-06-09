import React from 'react';
import { Code, Palette, Video } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming",
      description: "Spesialis dalam pengembangan web modern dengan React, TypeScript, dan teknologi terdepan lainnya."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Illustration",
      description: "Menciptakan ilustrasi digital yang memukau dengan gaya unik dan perhatian detail yang tinggi."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Content Creation",
      description: "Menghasilkan konten multimedia yang engaging dan berkualitas untuk berbagai platform digital."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Tentang Saya
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Halo! Saya Viona Angelica, seorang creative technologist yang passionate dalam menggabungkan 
              teknologi dengan seni. Dengan background di bidang computer science dan pengalaman bertahun-tahun 
              dalam industri kreatif, saya mengkhususkan diri dalam menciptakan solusi digital yang tidak hanya 
              fungsional, tetapi juga estetis.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Perjalanan saya dimulai dari rasa penasaran terhadap bagaimana teknologi dapat mengubah cara 
              kita berinteraksi dengan dunia digital. Kini, saya aktif mengembangkan aplikasi web, 
              menciptakan ilustrasi digital, dan berbagi konten edukatif di berbagai platform media sosial.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Filosofi kerja saya adalah "Technology meets Artistry" - setiap proyek yang saya kerjakan 
              selalu mengutamakan user experience yang luar biasa sambil mempertahankan keindahan visual 
              dan inovasi teknologi.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <div className="flex items-start space-x-4">
                    <div className="text-purple-400 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;