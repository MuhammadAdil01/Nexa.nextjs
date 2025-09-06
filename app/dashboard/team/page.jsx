"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"
import { DashboardLayout } from "@/components/Dashboard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export default function RestaurantDashboard() {
  const [date] = useState("20.08.2018")

  const dailyActivity = [
    { hour: 11, guests: 20 },
    { hour: 12, guests: 50 },
    { hour: 13, guests: 70 },
    { hour: 14, guests: 40 },
    { hour: 15, guests: 30 },
    { hour: 16, guests: 35 },
    { hour: 17, guests: 55 },
    { hour: 18, guests: 60 },
    { hour: 19, guests: 80 },
    { hour: 20, guests: 70 },
    { hour: 21, guests: 40 },
    { hour: 22, guests: 25 },
  ]

  const monthlyTakings = [
    { day: "01", value: 3000 },
    { day: "05", value: 5200 },
    { day: "10", value: 4500 },
    { day: "14", value: 6280 },
    { day: "20", value: 5900 },
    { day: "25", value: 6100 },
  ]

  return (
    <DashboardLayout>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-18 space-y-4 sm:space-y-6">
        {/* Top Header - Responsive */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 w-full pt-4 sm:pt-6">
          <h1 className="text-xl sm:text-2xl font-semibold">Nexa - Teams Overview</h1>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <input
              type="date"
              className="border rounded-md px-3 py-2 text-sm w-full sm:w-auto"
              defaultValue="2018-08-20"
            />
            <Button className="w-full sm:w-auto">Upgrade</Button>
          </div>
        </div>

        {/* Metrics - Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
          <Card className="w-full">
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-500">Takings</p>
              <p className="text-xl sm:text-2xl font-bold">$6,280</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-500">Guests Goal</p>
              <p className="text-xl sm:text-2xl font-bold">131 / 170</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-500">Avg. Waiting Time</p>
              <p className="text-xl sm:text-2xl font-bold">22 min</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardContent className="p-4 sm:p-6">
              <p className="text-sm sm:text-base  text-gray-500">Customer rate</p>
              <div className="flex items-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${i <= 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-2 text-lg sm:text-xl font-semibold">4.0</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crew & Monthly Takings - Responsive */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 w-full">
          {/* Crew */}
          <Card className="xl:col-span-2 w-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Crew 20.08.2025</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage src="https://i.pravatar.cc/64" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Jessica Jones</p>
                      <p className="text-xs sm:text-sm text-gray-500">Waitress | Afternoon shift</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 self-start sm:self-center">On Shift | 4.4</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage src="https://i.pravatar.cc/64" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Loui Fermagerie</p>
                      <p className="text-xs sm:text-sm text-gray-500">Waiter | Morning shift</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 self-start sm:self-center">Shift finished | 3.7</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                      <AvatarImage src="https://i.pravatar.cc/64" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">David brech</p>
                      <p className="text-xs sm:text-sm text-gray-500">manager | evening shift</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 self-start sm:self-center">Shift finished | 3.7</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Takings */}
          <Card className="w-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Monthly Takings</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <LineChart data={monthlyTakings}>
                  <XAxis dataKey="day" hide />
                  <YAxis hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-base sm:text-lg font-semibold mt-2">$134,100</p>
            </CardContent>
          </Card>
        </div>

        {/* Daily Activity + Reviews - Responsive */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 w-full pb-4 sm:pb-6">
          {/* Daily Activity */}
          <Card className="xl:col-span-2 w-full">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl">Daily Activity</CardTitle>
              <p className="text-xs sm:text-sm text-gray-500">Opening hours on 20.08 | 11:00 - 22:00</p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={dailyActivity}>
                  <XAxis 
                    dataKey="hour" 
                    fontSize={12}
                    tick={{ fontSize: 10 }}
                  />
                  <YAxis 
                    fontSize={12}
                    tick={{ fontSize: 10 }}
                  />
                  <Tooltip />
                  <Bar dataKey="guests" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Reviews */}
          <div className="space-y-4 w-full">
            <Card className="w-full">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                    <AvatarImage src="https://i.pravatar.cc/64" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm sm:text-base truncate">Jessica Jones</p>
                    <p className="text-xs sm:text-sm text-gray-500">Facebook Review</p>
                  </div>
                </div>
                <div className="flex mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${i <= 3 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                    <AvatarImage src="https://i.pravatar.cc/64" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm sm:text-base truncate">James Prince</p>
                    <p className="text-xs sm:text-sm text-gray-500">Yelp Review</p>
                  </div>
                </div>
                <div className="flex mt-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}