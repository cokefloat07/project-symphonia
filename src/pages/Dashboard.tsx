
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  ListTodo, 
  Clock, 
  Calendar,
  Users,
  FileText,
  Zap,
  Sparkles
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your projects today.</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            June 2023
          </Button>
          <Button size="sm">
            <Zap className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 this month
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
            <ListTodo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              8 due today
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              2 online now
            </p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Documents</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">
              +5 this week
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow col-span-1">
              <CardHeader>
                <CardTitle>Recent Tasks</CardTitle>
                <CardDescription>Your recent tasks across all projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((task) => (
                    <div key={task} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${
                          task === 1 ? "bg-destructive" : task === 2 ? "bg-yellow-500" : "bg-green-500"
                        }`} />
                        <div>
                          <p className="font-medium">Implement user authentication</p>
                          <p className="text-xs text-muted-foreground">Project Alpha • Frontend</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Due in 2 days</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  View All Tasks
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow col-span-1">
              <CardHeader>
                <CardTitle>AI Recommendations</CardTitle>
                <CardDescription>Personalized suggestions from our AI</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((rec) => (
                    <div key={rec} className="flex gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">
                          {rec === 1 && "Task prioritization suggestion"}
                          {rec === 2 && "Resource allocation optimization"}
                          {rec === 3 && "Documentation update needed"}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {rec === 1 && "Based on deadlines, we suggest prioritizing the API integration task."}
                          {rec === 2 && "Consider reassigning 2 developers to the frontend tasks to meet the deadline."}
                          {rec === 3 && "The authentication API documentation appears to be outdated."}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  View All Recommendations
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Tasks</CardTitle>
              <CardDescription>Manage your assigned tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Tasks content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>View and manage your team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Team members content will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Track project activities</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Activity log will appear here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
