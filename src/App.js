import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/animations.css';
import VideoHeader from './components/VideoHeader';
import Navbar from './components/Navbar';
import NormalButton from './components/NormalButton';

// Import images
import light1 from './assets/light1.webp';
import light2 from './assets/light2.webp';
import light3 from './assets/light3.webp';
import light4 from './assets/light4.webp';
import light5 from './assets/light5.webp';
import light6 from './assets/light6.webp';

// Import feature images
import smartControlImg from './assets/smart.webp';
import energyEfficiencyImg from './assets/energy.webp';
import customThemesImg from './assets/custom-lights.webp';
import voiceControlImg from './assets/voice-control.webp';
import smartSchedulingImg from './assets/smart-scheduling.webp';
import enhancedSecurityImg from './assets/security.webp';

function App() {
  const handleNavigation = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = {
    initial: { y: 60, opacity: 0, scale: 0.9 },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    whileInView: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const iconAnimation = {
    initial: { scale: 0, rotate: -180 },
    whileInView: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.3
      }
    }
  };

  const cardAnimation = {
    initial: { 
      y: 50,
      opacity: 0,
      scale: 0.9
    },
    whileInView: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const glowAnimation = {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    whileInView: {
      opacity: [0, 1, 0.5],
      scale: [0.5, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    whileInView: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    viewport: { once: true, margin: "-100px" }
  };

  const cardFlipAnimation = {
    initial: { 
      rotateY: 0
    },
    flip: { 
      rotateY: 180,
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const cardContentAnimation = {
    initial: { 
      opacity: 1,
      rotateY: 0
    },
    flip: { 
      opacity: 0,
      rotateY: 180,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const cardBackContentAnimation = {
    initial: { 
      opacity: 0,
      rotateY: 180
    },
    flip: { 
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar onNavigate={handleNavigation} />
      
      {/* Video Header */}
      <section id="home">
        <VideoHeader />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <motion.div 
          className="container mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-16" 
            variants={fadeInUp}
          >
            <motion.div 
              className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-900/20 to-primary-700/20 rounded-xl backdrop-blur-sm mb-4 relative overflow-hidden group"
              variants={iconAnimation}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20"
                variants={glowAnimation}
                initial="initial"
                animate="whileInView"
              />
              <svg className="w-6 h-6 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </motion.div>
            <motion.h2 
              className="text-4xl font-bold text-white mb-4"
              variants={fadeInUp}
            >
              Experience the Future of Lighting
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Discover our innovative features that transform your space
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />,
                title: "Smart Control",
                description: "Control your lighting from anywhere with our intuitive mobile app",
                image: smartControlImg
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />,
                title: "Energy Efficiency",
                description: "Save up to 60% on your energy bills with our smart LED technology",
                image: energyEfficiencyImg
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
                title: "Custom Themes",
                description: "Create and save your favorite lighting themes for any occasion",
                image: customThemesImg
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />,
                title: "Voice Control",
                description: "Compatible with all major voice assistants for hands-free control",
                image: voiceControlImg
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "Smart Scheduling",
                description: "Set automatic schedules to match your daily routine",
                image: smartSchedulingImg
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
                title: "Enhanced Security",
                description: "Simulate presence when you're away for added security",
                image: enhancedSecurityImg
              }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden group cursor-pointer"
                variants={cardAnimation}
                whileHover="hover"
                whileTap="tap"
              >
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="relative z-10 p-8 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/80 h-full">
                  <motion.div 
                    className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-primary-900/30 to-primary-700/30 rounded-xl mb-6 relative overflow-hidden"
                    variants={iconAnimation}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20"
                      variants={glowAnimation}
                    />
                    <svg className="w-6 h-6 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {feature.icon}
                    </svg>
                  </motion.div>
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-4"
                    variants={fadeInUp}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-300"
                    variants={fadeInUp}
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { image: light1, title: 'Smart Pendant Light' },
              { image: light2, title: 'Wall Sconce' },
              { image: light3, title: 'Table Lamp' },
              { image: light4, title: 'Floor Lamp' },
              { image: light5, title: 'Ceiling Light' },
              { image: light6, title: 'Strip Light' }
            ].map((product, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-900"
                variants={fadeInUp}
              >
                <div className="relative h-[400px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modularity Section */}
      <section id="modularity" className="py-20 px-6 bg-gray-800">
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div 
              className="flex-1"
              variants={fadeInUp}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Modular by Design
              </h2>
              <p className="text-gray-400 mb-8">
                Experience the future of lighting with our innovative modular system. 
                Customize, upgrade, and expand your smart lighting ecosystem effortlessly.
              </p>
              <motion.ul 
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.li 
                  className="flex items-start text-gray-300 group"
                  variants={fadeInUp}
                >
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-3 mt-2 group-hover:bg-primary-400 transition-colors"></span>
                  <div>
                    <span className="font-semibold text-primary-400">Customizable Components</span>
                    <p className="mt-1 text-sm text-gray-400">Mix and match different lighting modules to create your perfect ambiance</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start text-gray-300 group"
                  variants={fadeInUp}
                >
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-3 mt-2 group-hover:bg-primary-400 transition-colors"></span>
                  <div>
                    <span className="font-semibold text-primary-400">Scalable Architecture</span>
                    <p className="mt-1 text-sm text-gray-400">Start small and expand your smart lighting system as needed</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start text-gray-300 group"
                  variants={fadeInUp}
                >
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-3 mt-2 group-hover:bg-primary-400 transition-colors"></span>
                  <div>
                    <span className="font-semibold text-primary-400">Easy Integration</span>
                    <p className="mt-1 text-sm text-gray-400">Seamlessly connects with existing home automation systems</p>
                  </div>
                </motion.li>
                <motion.li 
                  className="flex items-start text-gray-300 group"
                  variants={fadeInUp}
                >
                  <span className="h-2 w-2 bg-primary-500 rounded-full mr-3 mt-2 group-hover:bg-primary-400 transition-colors"></span>
                  <div>
                    <span className="font-semibold text-primary-400">Future-Proof Design</span>
                    <p className="mt-1 text-sm text-gray-400">Regular firmware updates and expandable functionality</p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div 
              className="flex-1 relative h-[500px]"
              variants={scaleIn}
            >
              <div className="w-full h-full rounded-lg bg-gray-700 overflow-hidden">
                {/* 3D Scene will go here */}
                <div className="w-full h-full" id="scene-container"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Design Section */}
      <section id="design" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-16"
            {...fadeInUp}
          >
            Limitless Design Possibilities
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                image: light1,
                title: 'Modern Minimalist',
                description: 'Clean lines and subtle illumination perfect for contemporary spaces. Features adjustable color temperature and intensity.'
              },
              {
                image: light2,
                title: 'Industrial Edge',
                description: 'Raw materials meet smart technology. Robust construction with advanced motion sensing and ambient light adaptation.'
              },
              {
                image: light3,
                title: 'Artistic Fusion',
                description: 'Where art meets functionality. Dynamic light patterns and customizable color schemes for creative environments.'
              },
              {
                image: light4,
                title: 'Natural Harmony',
                description: 'Organic shapes and materials combined with circadian rhythm optimization for healthier living spaces.'
              },
              {
                image: light5,
                title: 'Tech-Forward',
                description: 'Cutting-edge design with integrated IoT capabilities. Voice-controlled with smartphone integration.'
              },
              {
                image: light6,
                title: 'Classic Innovation',
                description: 'Traditional aesthetics enhanced with modern technology. Warm dimming and scene presets for timeless elegance.'
              }
            ].map((config, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden group hover:scale-105 transition duration-300"
                variants={fadeInUp}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={config.image} 
                    alt={config.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{config.title}</h3>
                  <p className="text-gray-400">{config.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-white/5">
        <motion.div 
          className="container mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-900/20 to-primary-700/20 rounded-xl backdrop-blur-sm mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our range of smart lighting solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
              <img src={light1} alt="Smart Bulb" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Smart Bulb</h3>
                <p className="text-gray-300">Energy-efficient LED bulb with millions of colors</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
              <img src={light2} alt="Light Strip" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Light Strip</h3>
                <p className="text-gray-300">Flexible LED strip for creative lighting designs</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden">
              <img src={light3} alt="Smart Lamp" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Smart Lamp</h3>
                <p className="text-gray-300">Modern desk lamp with touch controls</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <motion.div 
          className="container mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-900/20 to-primary-700/20 rounded-xl backdrop-blur-sm mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">About BriLux</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Revolutionizing the way you experience light
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
              <p className="text-gray-300 mb-6">
                Founded with a vision to transform everyday lighting into extraordinary experiences, BriLux has been at the forefront of smart lighting innovation. Our journey began with a simple idea: make lighting both intelligent and beautiful.
              </p>
              <p className="text-gray-300">
                Today, we continue to push the boundaries of what's possible in smart lighting, combining cutting-edge technology with elegant design to create products that don't just illuminate spaces – they enhance lives.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="relative">
              <img src={light4} alt="About BriLux" className="rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/5">
        <motion.div 
          className="container mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: false, margin: "-100px" }}
        >
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-primary-900/20 to-primary-700/20 rounded-xl backdrop-blur-sm mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="max-w-lg mx-auto">
            <motion.form variants={fadeInUp} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-primary-500 focus:bg-white/20 focus:ring-0 text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-primary-500 focus:bg-white/20 focus:ring-0 text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg bg-white/10 border-transparent focus:border-primary-500 focus:bg-white/20 focus:ring-0 text-white"
                  placeholder="Your message"
                />
              </div>
              <div>
                <NormalButton type="submit" className="w-full">
                  Send Message
                </NormalButton>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </section>

     
    </div>
  );
}

export default App;
