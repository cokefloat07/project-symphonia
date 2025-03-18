
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/ui-custom/HeroSection';
import { FeaturesSection } from '@/components/ui-custom/FeaturesSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        
        <FeaturesSection />
        
        {/* Workflow Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Streamline your software development process from planning to delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((step) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: step * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative">
                    <span className="text-xl font-bold">{step}</span>
                    {step < 3 && (
                      <div className="hidden md:block absolute left-full top-1/2 w-full h-0.5 bg-primary/20"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {step === 1 && 'Setup Your Project'}
                    {step === 2 && 'AI Creates Roadmap'}
                    {step === 3 && 'Collaborate & Deliver'}
                  </h3>
                  <p className="text-muted-foreground">
                    {step === 1 && 'Define your project goals, team members, and timeframe.'}
                    {step === 2 && 'Our AI generates a tailored project roadmap and task distribution.'}
                    {step === 3 && 'Work together efficiently with all tools in one place.'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Preview Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-1"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Future of Project Management</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our AI-powered platform transforms how software teams work together. With intelligent automation, predictive insights, and seamless collaboration tools, you'll deliver projects faster than ever before.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {['Reduce task management time by 40%', 'Automate documentation and reporting', 'Improve team collaboration and visibility', 'Make better decisions with AI-powered insights'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/register">
                  <Button size="lg" className="group">
                    Try it Free
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1"
              >
                <div className="relative mx-auto max-w-lg">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 blur-xl"></div>
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
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your team's workflow?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your free trial today and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
