"use client"
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Plus, Download, Settings } from "lucide-react";
import Themetoggle from "../theme-toggle";
import { DashboardLayout } from "@/components/dashboard";

function StatCard({
  title,
  value,
  subtext
}) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-3xl">{value}</CardTitle>
      </CardHeader>
      {subtext ? (
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground">{subtext}</p>
        </CardContent>
      ) : null}
    </Card>
  );
}

export default function DashboardPage() {
  const [query, setQuery] = useState("");

  return (
    <DashboardLayout>
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-sm">Dashboard</Badge>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-muted-foreground hidden md:inline">Overview and insights</span>
          </div>
          <div className="flex items-center gap-2">
            <Themetoggle/>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/64" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
          <div className="flex w-full items-center gap-2 md:w-auto">
            <Input
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              className="md:w-72"
            />
            <Button variant="secondary">Search</Button>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Revenue" value="$82,450" subtext="+12% from last month" />
          <StatCard title="Active Users" value="12,304" subtext="+3% this week" />
          <StatCard title="New Orders" value="1,204" subtext="−2% vs. last week" />
          <StatCard title="Open Tickets" value="37" subtext="5 high priority" />
        </section>

        <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Performance</CardTitle>
              <CardDescription>Work completed across key initiatives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Q3 Roadmap</span>
                  <span className="text-sm">72%</span>
                </div>
                <Progress value={72} />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Design System</span>
                  <span className="text-sm">54%</span>
                </div>
                <Progress value={54} />
              </div>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Infra Migration</span>
                  <span className="text-sm">36%</span>
                </div>
                <Progress value={36} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Ava Jones", action: "published a report", time: "2h" },
                { name: "Liam Chen", action: "fixed a bug", time: "5h" },
                { name: "Mia Patel", action: "created a task", time: "1d" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="leading-tight">
                      <p className="text-sm">
                        <span className="font-medium">{item.name}</span> {item.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{item.time} ago</p>
                    </div>
                  </div>
                  <Badge variant="outline">Team</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="mt-6">
          <Tabs defaultValue="traffic">
            <TabsList>
              <TabsTrigger value="traffic">Traffic</TabsTrigger>
              <TabsTrigger value="sales">Sales</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            <TabsContent value="traffic">
              <Card>
                <CardHeader>
                  <CardTitle>Traffic</CardTitle>
                  <CardDescription>Sessions and sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <StatCard title="Sessions" value="24,301" />
                    <StatCard title="Bounce" value="42%" />
                    <StatCard title="Avg. Time" value="3m 12s" />
                    <StatCard title="Pages/Session" value="2.4" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sales">
              <Card>
                <CardHeader>
                  <CardTitle>Sales</CardTitle>
                  <CardDescription>Revenue metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <StatCard title="Orders" value="1,204" />
                    <StatCard title="AOV" value="$68.20" />
                    <StatCard title="Refunds" value="2.1%" />
                    <StatCard title="Net" value="$76,320" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="support">
              <Card>
                <CardHeader>
                  <CardTitle>Support</CardTitle>
                  <CardDescription>Ticket health</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <StatCard title="Open" value="37" />
                    <StatCard title="SLA < 24h" value="91%" />
                    <StatCard title="Escalations" value="3" />
                    <StatCard title="CSAT" value="4.6/5" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
    </div>
    </DashboardLayout>
  );
}