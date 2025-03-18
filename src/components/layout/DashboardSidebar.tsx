
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  ListTodo, 
  CalendarRange, 
  UsersRound, 
  FileText, 
  BarChart2, 
  Settings, 
  LogOut, 
  Menu,
  ChevronLeft
} from 'lucide-react';

interface DashboardSidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DashboardSidebar({ open, onOpenChange }: DashboardSidebarProps) {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Tasks', href: '/dashboard/tasks', icon: ListTodo },
    { name: 'Roadmap', href: '/dashboard/roadmap', icon: CalendarRange },
    { name: 'Team', href: '/dashboard/team', icon: UsersRound },
    { name: 'Documents', href: '/dashboard/documents', icon: FileText },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart2 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-20 flex flex-col border-r border-border bg-card transition-all duration-300 ease-in-out",
      open ? "w-64" : "w-16"
    )}>
      <div className="flex h-14 items-center justify-between px-4 border-b border-border">
        {open ? (
          <Link to="/dashboard" className="flex items-center">
            <span className="text-lg font-semibold text-gradient">Symphonia</span>
          </Link>
        ) : (
          <span className="w-full flex justify-center">
            <span className="text-lg font-semibold">S</span>
          </span>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onOpenChange(!open)}
          className="md:hidden"
        >
          {open ? <ChevronLeft size={18} /> : <Menu size={18} />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  open ? "" : "mx-auto"
                )} />
                {open && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-border">
        <Link
          to="/"
          className={cn(
            "group flex items-center rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
            open ? "" : "justify-center"
          )}
        >
          <LogOut className="mr-3 h-5 w-5" />
          {open && <span>Logout</span>}
        </Link>
      </div>
    </aside>
  );
}
