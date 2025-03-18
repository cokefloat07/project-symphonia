
import React from 'react';
import { AuthForm } from '@/components/ui-custom/AuthForm';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary/20">
      <div className="container max-w-screen-xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to home
        </Link>
      </div>
      
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <AuthForm mode="register" />
          </div>
        </div>
      </div>
    </div>
  );
}
