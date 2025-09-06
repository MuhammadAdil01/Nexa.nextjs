import { DashboardLayout } from '@/components/Dashboard'
import { Button } from '@/components/ui/button'
import { Calendar,Users,ArrowUpRight,TrendingUp,BarChart3,Plus,Facebook ,Instagram,Twitter,Linkedin,LinkIcon,Eye,Heart,MessageCircle,Share,Clock } from 'lucide-react'
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Badge } from 'lucide-react'

function page() {
  return (
    <div>
      <DashboardLayout>
         <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mt-2">Dashboard</h1>
            <p className="text-muted-foreground font-serif mt-2.5">
              Welcome back, John! Here's what's happening with your social
              media.
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              This Month
            </Button>
          </div>
        </div>
           <div className="grid grid-cols-1 md:grid-cols-2 mt-9 mb-5 lg:grid-cols-4 gap-6">
            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Followers
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">45,231</div>
                <div className="flex items-center text-xs text-muted-foreground font-serif">
                  <ArrowUpRight className="w-3 h-3 mr-1 text-green-600" />
                  <span className="text-green-600">+12%</span> from last month
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Engagement Rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <div className="flex items-center text-xs text-muted-foreground font-serif">
                  <ArrowUpRight className="w-3 h-3 mr-1 text-green-600" />
                  <span className="text-green-600">+0.5%</span> from last month
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Posts This Month
                </CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">127</div>
                <div className="flex items-center text-xs text-muted-foreground font-serif">
                  <ArrowUpRight className="w-3 h-3 mr-1 text-green-600" />
                  <span className="text-green-600">+23</span> from last month
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Reach</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">89.2K</div>
                <div className="flex items-center text-xs text-muted-foreground font-serif">
                  <ArrowUpRight className="w-3 h-3 mr-1 text-green-600" />
                  <span className="text-green-600">+18%</span> from last month
                </div>
              </CardContent>
            </Card>
          </div>
            <div className="grid lg:grid-cols-3 gap-6 ">
          {/* Connected Accounts */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Connected Accounts
              </CardTitle>
              <CardDescription className="font-serif">
                Manage your social media connections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Facebook className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-sm">Facebook</p>
                    <p className="text-xs text-muted-foreground font-serif">
                      @yourcompany • 12.5K followers
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <div>
                    <p className="font-medium text-sm">Instagram</p>
                    <p className="text-xs text-muted-foreground font-serif">
                      @yourcompany • 8.9K followers
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg opacity-60">
                <div className="flex items-center space-x-3">
                  <Twitter className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="font-medium text-sm">Twitter</p>
                    <p className="text-xs text-muted-foreground font-serif">
                      Not connected
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg opacity-60">
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-700" />
                  <div>
                    <p className="font-medium text-sm">LinkedIn</p>
                    <p className="text-xs text-muted-foreground font-serif">
                      Not connected
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full bg-transparent"
                asChild
              >
                <a href="/dashboard/accounts">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Manage All Accounts
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Posts Performance */}
          <Card className="lg:col-span-2 border-border">
            <CardHeader>
              <CardTitle>Recent Posts Performance</CardTitle>
              <CardDescription className="font-serif">
                Your latest posts and their engagement metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <Instagram className="w-5 h-5 text-pink-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">
                        New product launch announcement
                      </p>
                      <Badge variant="secondary">Published</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-serif mb-3">
                      Posted 2 hours ago
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>1.2K</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>45</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>12</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share className="w-4 h-4" />
                        <span>8</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <Facebook className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">
                        Weekly team update and insights
                      </p>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-serif mb-3">
                      Scheduled for tomorrow at 9:00 AM
                    </p>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground font-serif">
                        AI-generated content
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                  <Twitter className="w-5 h-5 text-blue-400 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-medium">
                        Industry insights thread (5 tweets)
                      </p>
                      <Badge variant="outline">Draft</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-serif mb-3">
                      Draft saved • AI suggestions available
                    </p>
                    <Button variant="outline" size="sm">
                      Continue Editing
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>












      </DashboardLayout>
    </div>
  )
}

export default page
