"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Users, CheckCircle2, FolderKanban, Clock } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard"

export default function ProjectDashboard() {
  const chartData = [
    { week: "Week 1", completed: 20 },
    { week: "Week 2", completed: 35 },
    { week: "Week 3", completed: 25 },
    { week: "Week 4", completed: 40 },
  ]

  const projects = [
    { id: 1, name: "Website Redesign", status: "In Progress", progress: 70 },
    { id: 2, name: "Mobile App", status: "Completed", progress: 100 },
    { id: 3, name: "Dashboard System", status: "Pending", progress: 40 },
  ]

  return (
    <DashboardLayout>
      <div className="w-full min-h-screen px-33 space-y-6">
        {/* Header */}
        <div className="w-full">
          <h1 className="text-2xl font-bold">Project Dashboard</h1>
          <p className="text-gray-500">Overview of your team projects</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
              <FolderKanban className="w-8 h-8 text-blue-500 mb-2" />
              <span className="text-2xl font-bold">12</span>
              <p className="text-gray-500">Projects</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
              <CheckCircle2 className="w-8 h-8 text-green-500 mb-2" />
              <span className="text-2xl font-bold">124</span>
              <p className="text-gray-500">Tasks Completed</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
              <Users className="w-8 h-8 text-purple-500 mb-2" />
              <span className="text-2xl font-bold">8</span>
              <p className="text-gray-500">Team Members</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center p-4 md:p-6">
              <Clock className="w-8 h-8 text-orange-500 mb-2" />
              <span className="text-2xl font-bold">85%</span>
              <p className="text-gray-500">On-time Delivery</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts + Project List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 w-full">
          {/* Chart */}
          <Card className="w-full">
            <CardHeader className="flex flex-row justify-between items-center p-4 md:p-6 pb-0">
              <CardTitle>Task Progress</CardTitle>
              <Button variant="outline" size="sm">This Month</Button>
            </CardHeader>
            <CardContent className="p-4 md:p-6 pt-4">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData}>
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="completed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Project List */}
          <Card className="w-full">
            <CardHeader className="p-4 md:p-6 pb-0">
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent className="p-4 md:p-6 space-y-4">
              {projects.map((p) => (
                <div key={p.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">{p.name}</p>
                    <span className={`text-sm px-2 py-1 rounded ${
                      p.status === "Completed" ? "bg-green-100 text-green-600" :
                      p.status === "In Progress" ? "bg-blue-100 text-blue-600" :
                      "bg-gray-100 text-gray-600"
                    }`}>
                      {p.status}
                    </span>
                  </div>
                  <Progress value={p.progress} className="mt-2" />
                  <p className="text-xs text-gray-500 mt-1">{p.progress}% completed</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <Card className="w-full">
          <CardHeader className="p-4 md:p-6 pb-0">
            <CardTitle>Team Members</CardTitle>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["Ali", "Sarah", "John", "Emma", "David", "Ayesha"].map((member, i) => (
                <div key={i} className="flex flex-col items-center p-3 border rounded-lg">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-600 flex items-center justify-center font-bold text-white">
                    {member[0]}
                  </div>
                  <p className="mt-2 text-sm font-medium text-center">{member}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}