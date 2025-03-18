
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-6">
        <div className="text-9xl font-bold text-gradient">404</div>
        <h1 className="text-3xl font-bold">Page not found</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          We couldn't find the page you were looking for. Please check the URL or go back to the homepage.
        </p>
        <div className="mt-8">
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
