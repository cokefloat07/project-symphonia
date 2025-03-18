
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { Loader2, Github, Mail } from 'lucide-react';

type AuthFormProps = {
  mode: 'login' | 'register';
};

export function AuthForm({ mode }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('developer');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect based on the role
      if (mode === 'register' || role === 'manager') {
        navigate('/dashboard');
      } else {
        navigate('/dashboard/tasks');
      }
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h1>
        <p className="text-muted-foreground">
          {mode === 'login' 
            ? 'Enter your credentials to access your account' 
            : 'Fill in the details below to get started'
          }
        </p>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="w-full">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline" className="w-full">
            <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
            Google
          </Button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <>
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  id="company"
                  placeholder="Acme Inc."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                />
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="role">Your Role</Label>
                <Tabs defaultValue="developer" value={role} onValueChange={setRole}>
                  <TabsList className="grid grid-cols-2">
                    <TabsTrigger value="developer">Developer</TabsTrigger>
                    <TabsTrigger value="manager">Project Manager</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </>
          )}
          
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {mode === 'login' && (
                <a
                  href="#"
                  className="text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline"
                >
                  Forgot password?
                </a>
              )}
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </>
            ) : mode === 'login' ? (
              'Sign In'
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
        
        <div className="text-center text-sm">
          {mode === 'login' ? (
            <p>
              Don't have an account?{' '}
              <a
                href="/register"
                className="text-primary hover:underline underline-offset-4"
              >
                Sign up
              </a>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <a
                href="/login"
                className="text-primary hover:underline underline-offset-4"
              >
                Sign in
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
