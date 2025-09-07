"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { DashboardLayout } from "@/components/dashboard"

export default function StudentDashboard() {
  const progressData = [
    { day: "Sat", completed: 20, pending: 15 },
    { day: "Sun", completed: 25, pending: 12 },
    { day: "Mon", completed: 22, pending: 14 },
    { day: "Tue", completed: 30, pending: 10 },
    { day: "Wed", completed: 18, pending: 22 },
    { day: "Thu", completed: 26, pending: 14 },
    { day: "Fri", completed: 28, pending: 12 },
  ]

  const assignments = [
    { id: 1, title: "Requirements documentation", due: "3 hours left", done: true },
    { id: 2, title: "User Research plan", due: "25 minutes left", done: true },
    { id: 3, title: "User persona", due: "1 week 3 hours left", done: false },
    { id: 4, title: "Low-Fidelity Wireframe", due: "2 weeks 6 hours left", done: false },
  ]

  return (
    <DashboardLayout>
      <div className="w-full min-h-screen px-45  space-y-6">
        {/* Header */}
        <div className="w-full">
          <h1 className="text-2xl font-bold">Nexa, Calendar Marksheet</h1>
          <p className="text-gray-500">Collect your data</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <span className="text-3xl font-bold">40</span>
              <p className="text-gray-500">Completed courses</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <span className="text-3xl font-bold">60</span>
              <p className="text-gray-500">Student score</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <span className="text-3xl font-bold">84</span>
              <p className="text-gray-500">Community score</p>
            </CardContent>
          </Card>
        </div>

        {/* Progress + Courses */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Progress */}
          <Card className="w-full">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Progress</CardTitle>
              <Button variant="outline" size="sm">This week</Button>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={progressData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="completed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* My Courses */}
          <Card className="w-full">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>My courses (7)</CardTitle>
              <Button variant="link" size="sm">View all</Button>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="font-medium">01. User Experience design</p>
                <Progress value={80} className="mt-2" />
                <p className="text-xs text-gray-500 mt-1">12 Lessons • 80%</p>
              </div>
              <div>
                <p className="font-medium">02. Game UI design</p>
                <Progress value={20} className="mt-2" />
                <p className="text-xs text-gray-500 mt-1">10 Lessons • 20%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Agenda + Assignments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Agenda */}
          <Card className="w-full">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Upcoming Agenda</CardTitle>
              <Button variant="outline" size="sm">January</Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2 text-center">
                {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d) => (
                  <div key={d} className="font-semibold text-sm">{d}</div>
                ))}
                {Array.from({ length: 35 }, (_, i) => (
                  <div key={i} className="h-12 flex items-center justify-center border rounded-md text-sm">
                    {i + 1 <= 31 ? i + 1 : ""}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assignments */}
          <Card className="w-full">
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle>Assignments (20)</CardTitle>
              <p className="text-sm text-blue-600 font-medium">3/6 Complete</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {assignments.map((task) => (
                <div key={task.id} className="flex justify-between items-center">
                  <div>
                    <p className={`${task.done ? "line-through text-gray-400" : "font-medium"}`}>{task.title}</p>
                    <p className="text-xs text-gray-500">{task.due}</p>
                  </div>
                  {task.done ? (
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  ) : (
                    <Circle className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}