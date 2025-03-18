
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background animate-hero-gradient"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-4">
                <span className="text-gradient">AI-Powered</span> Project Management
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xl text-muted-foreground mb-8 text-balance">
                Automate, collaborate, and deliver faster with our intelligent workspace designed for modern software teams.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Request Demo
                </Button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative mx-auto max-w-lg">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl"></div>
              <div className="glass relative rounded-2xl shadow-xl overflow-hidden border border-white/20">
                <img 
                  src="https://placehold.co/600x400/f5f5f5/2a2a2a?text=Dashboard+Preview" 
                  alt="Dashboard Preview" 
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              repeat: Infinity,
              duration: 1.5,
            }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center items-start p-1"
          >
            <motion.div
              animate={{ 
                y: [0, 6, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
              }}
              className="w-1 h-2 bg-muted-foreground rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
