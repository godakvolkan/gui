import React, { useState, useEffect } from 'react';
import { Users, Award, Star, Linkedin, Mail, Phone, MapPin, Sparkles, Heart, Zap } from 'lucide-react';

const TeamSection: React.FC = () => {
    const [activeMember, setActiveMember] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('team-section');
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, []);

    const teamMembers = [
        {
            name: "Ahmet Yılmaz",
            position: "Kurucu Mimar",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
            description: "15 yıllık deneyimi ile konut ve ticari projelerde uzmanlaşmış mimar.",
            experience: "15+ Yıl",
            projects: "120+ Proje",
            awards: "8 Ödül",
            gradient: "from-blue-500 to-blue-600",
            bgGradient: "from-blue-50 to-blue-100",
            darkBgGradient: "from-blue-900/20 to-blue-800/20",
            skills: ["Konut Tasarımı", "Ticari Projeler", "Sürdürülebilir Mimari", "3D Modelleme"]
        },
        {
            name: "Ayşe Demir",
            position: "İç Mimar",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b780?w=200&h=200&fit=crop&crop=face",
            description: "Modern ve fonksiyonel iç mekan tasarımları konusunda uzman.",
            experience: "12+ Yıl",
            projects: "85+ Proje",
            awards: "5 Ödül",
            gradient: "from-purple-500 to-purple-600",
            bgGradient: "from-purple-50 to-purple-100",
            darkBgGradient: "from-purple-900/20 to-purple-800/20",
            skills: ["İç Mekan Tasarımı", "Renk Paleti", "Mobilya Tasarımı", "Aydınlatma"]
        },
        {
            name: "Mehmet Kaya",
            position: "İnşaat Mühendisi",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
            description: "Proje yönetimi ve inşaat denetimi konularında 12 yıllık deneyim.",
            experience: "12+ Yıl",
            projects: "95+ Proje",
            awards: "6 Ödül",
            gradient: "from-green-500 to-green-600",
            bgGradient: "from-green-50 to-green-100",
            darkBgGradient: "from-green-900/20 to-green-800/20",
            skills: ["Proje Yönetimi", "İnşaat Denetimi", "Yapı Hesapları", "Kalite Kontrolü"]
        }
    ];

    return (
        <section id="team-section" className="py-20 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-green-900/20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating team icons */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full animate-float"></div>
                <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-40 right-1/4 w-12 h-12 bg-yellow-400/10 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
                
                {/* Floating particles */}
                <div className="absolute top-1/3 left-1/6 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-30"></div>
                <div className="absolute bottom-1/3 right-1/6 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '1s'}}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    {/* Animated badge */}
                    <div className="inline-flex items-center bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-2 mb-6 animate-fade-in">
                        <Users className="w-4 h-4 text-green-400 mr-2" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Profesyonel Ekip</span>
                    </div>
                    
                    <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
                        Uzman <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Ekibimiz</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
                        Deneyimli mimarlar ve mühendislerden oluşan profesyonel kadromuz
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div 
                            key={index}
                            className={`group relative bg-gradient-to-br ${member.bgGradient} dark:${member.darkBgGradient} rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in ${activeMember === index ? 'ring-2 ring-green-400 ring-opacity-50' : ''}`}
                            style={{animationDelay: `${0.6 + index * 0.1}s`}}
                            onMouseEnter={() => setActiveMember(index)}
                        >
                            {/* Floating background icon */}
                            <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                            
                            {/* Profile image with gradient border */}
                            <div className="relative mb-6">
                                <div className={`w-36 h-36 mx-auto rounded-full p-1 bg-gradient-to-br ${member.gradient} shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-110`}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                {/* Status indicator */}
                                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                            </div>
                            
                            {/* Member info */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                                {member.name}
                            </h3>
                            <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                                {member.position}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                                {member.description}
                            </p>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center">
                                    <div className="text-lg font-bold text-gray-900 dark:text-white">{member.experience}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Deneyim</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-gray-900 dark:text-white">{member.projects}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Proje</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-lg font-bold text-gray-900 dark:text-white">{member.awards}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Ödül</div>
                                </div>
                            </div>
                            
                            {/* Skills */}
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {member.skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex} 
                                            className={`bg-gradient-to-r ${member.gradient} text-white px-3 py-1 rounded-full text-xs font-medium shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Contact buttons */}
                            <div className="flex justify-center space-x-3">
                                <button className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110`}>
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110`}>
                                    <Mail className="w-4 h-4" />
                                </button>
                                <button className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110`}>
                                    <Phone className="w-4 h-4" />
                                </button>
                            </div>
                            
                            {/* Hover effect overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                        </div>
                    ))}
                </div>
                
                {/* Team summary */}
                <div className="mt-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl animate-fade-in" style={{animationDelay: '1s'}}>
                    <div className="text-center mb-8">
                        <Heart className="w-12 h-12 mx-auto mb-4 text-green-200" />
                        <h3 className="text-3xl font-bold">Ekip Ruhu</h3>
                        <p className="text-green-100 mt-2">Birlikte daha güçlüyüz</p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                            <div className="text-4xl font-bold mb-2">15+</div>
                            <div className="text-green-100 text-sm">Yıllık Deneyim</div>
                        </div>
                        <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                            <div className="text-4xl font-bold mb-2">300+</div>
                            <div className="text-green-100 text-sm">Tamamlanan Proje</div>
                        </div>
                        <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                            <div className="text-4xl font-bold mb-2">19</div>
                            <div className="text-green-100 text-sm">Toplam Ödül</div>
                        </div>
                        <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                            <div className="text-4xl font-bold mb-2">%98</div>
                            <div className="text-green-100 text-sm">Müşteri Memnuniyeti</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;