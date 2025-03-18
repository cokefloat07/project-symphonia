
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon: Icon, title, description, className }: FeatureCardProps) {
  return (
    <div 
      className={cn(
        "group relative p-6 rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-md hover:-translate-y-1",
        className
      )}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 text-primary">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
