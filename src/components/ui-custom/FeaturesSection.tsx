
import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { BrainCircuit, Users, BarChart3, ShieldCheck, Zap, CalendarCheck } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: BrainCircuit,
      title: 'AI-driven Task Management',
      description: 'Intelligent task allocation and suggestions based on team skills and availability.'
    },
    {
      icon: Zap,
      title: 'Automated Documentation',
      description: 'Generate SRS documents and software diagrams with our AI-powered documentation tools.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in chat, audio calls, and virtual meetings for seamless team communication.'
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Real-time insights and analytics to measure productivity and project progress.'
    },
    {
      icon: CalendarCheck,
      title: 'Project Roadmap',
      description: 'Interactive Gantt charts and timeline visualization for project planning.'
    },
    {
      icon: ShieldCheck,
      title: 'Role-based Access',
      description: 'Secure, customizable permissions for team members based on their roles.'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to manage your software projects efficiently and deliver results faster.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
