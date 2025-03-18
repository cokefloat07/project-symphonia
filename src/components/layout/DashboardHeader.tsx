
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Bell, 
  Search, 
  Menu,
  ChevronLeft,
  MessageSquare,
  Plus
} from 'lucide-react';
import { Input } from '@/components/ui/input';

interface DashboardHeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export function DashboardHeader({ sidebarOpen, setSidebarOpen }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-card/80 backdrop-blur-sm border-b border-border h-14 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hidden md:flex mr-2"
        >
          {sidebarOpen ? <ChevronLeft size={18} /> : <Menu size={18} />}
        </Button>
        
        <div className="hidden md:flex relative w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-8 h-9 w-full rounded-full bg-secondary"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <Bell size={18} />
        </Button>
        
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <MessageSquare size={18} />
        </Button>
        
        <Button variant="outline" size="sm" className="hidden md:flex">
          <Plus size={16} className="mr-1" /> New Task
        </Button>
        
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
