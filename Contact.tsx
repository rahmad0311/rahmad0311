import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Github, Linkedin, Instagram, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-400"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "viona.angelica@email.com",
      link: "mailto:viona.angelica@email.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+62 812-3456-7890",
      link: "tel:+6281234567890"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Jakarta, Indonesia",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Mari Berkolaborasi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Punya proyek menarik atau ingin berkolaborasi? Saya selalu terbuka untuk diskusi dan peluang baru!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-purple-400 bg-purple-500/10 p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Ikuti Saya</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-gray-800/50 border border-purple-500/20 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:scale-110`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <MessageCircle className="w-8 h-8 text-purple-400" />
                <h4 className="text-xl font-semibold text-white">Siap untuk Berkolaborasi?</h4>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Dari pengembangan aplikasi web hingga ilustrasi custom, saya siap membantu mewujudkan 
                visi digital Anda dengan kualitas terbaik dan deadline yang tepat.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors duration-300"
                  placeholder="Topik diskusi"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors duration-300 resize-none"
                  placeholder="Ceritakan tentang proyek atau ide Anda..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center space-x-2 font-medium"
              >
                <Send className="w-5 h-5" />
                <span>Kirim Pesan</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;