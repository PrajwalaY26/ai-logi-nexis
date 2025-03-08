
import React, { useState } from "react";
import WBBNavbar from "@/components/layout/WBBNavbar";
import WBBSidebar from "@/components/layout/WBBSidebar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Building, 
  Mail, 
  Phone, 
  Shield, 
  Bell, 
  Globe, 
  Lock, 
  CreditCard, 
  FileText,
  Settings as SettingsIcon,
  Save,
  Clock,
  Check
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    company: "Global Logistics Inc.",
    role: "Logistics Manager",
    location: "New York, USA",
    timeZone: "Eastern Time (UTC-5)",
    language: "English",
    memberSince: "January 2022"
  });

  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    shipmentUpdates: true,
    marketingUpdates: false,
    priceChanges: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <div className="min-h-screen bg-background">
      <WBBNavbar />
      <WBBSidebar />
      
      <main className="pt-16 pl-64">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-6">
            <div className="animate-fade-in flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-white [animation-delay:100ms]">
                  Profile Settings
                </h1>
                <p className="mt-2 text-muted-foreground [animation-delay:200ms]">
                  Manage your account preferences and settings
                </p>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {/* Profile Overview */}
              <Card className="md:col-span-1 animate-fade-in [animation-delay:300ms]">
                <CardHeader className="flex flex-col items-center text-center pb-4">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="bg-nexus-blue/20 text-nexus-blue text-2xl">JD</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{profileData.name}</CardTitle>
                  <CardDescription>{profileData.role}</CardDescription>
                  <Badge variant="outline" className="mt-2 bg-nexus-blue/10 text-nexus-blue">
                    Premium Account
                  </Badge>
                </CardHeader>
                <CardContent className="border-t border-white/10 pt-4 pb-0">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-muted-foreground mr-3" />
                      <span className="text-sm">{profileData.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-muted-foreground mr-3" />
                      <span className="text-sm">{profileData.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="h-4 w-4 text-muted-foreground mr-3" />
                      <span className="text-sm">{profileData.company}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-muted-foreground mr-3" />
                      <span className="text-sm">{profileData.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-muted-foreground mr-3" />
                      <span className="text-sm">{profileData.timeZone}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center border-t border-white/10 mt-4 pt-4">
                  <div className="flex flex-col items-center text-center">
                    <p className="text-xs text-muted-foreground">Member since {profileData.memberSince}</p>
                    <p className="mt-1 text-xs">
                      <Badge variant="outline" className="mr-1 bg-green-500/10 text-green-400">
                        <Check className="h-3 w-3 mr-1" /> Verified
                      </Badge>
                    </p>
                  </div>
                </CardFooter>
              </Card>
              
              {/* Profile Settings */}
              <Card className="md:col-span-2 animate-fade-in [animation-delay:400ms]">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Account Settings</CardTitle>
                    {isEditing ? (
                      <div className="flex space-x-2">
                        <Button variant="ghost" onClick={() => setIsEditing(false)}>
                          Cancel
                        </Button>
                        <Button className="nexus-button-primary" onClick={() => setIsEditing(false)}>
                          <Save className="h-4 w-4 mr-2" />
                          Save Changes
                        </Button>
                      </div>
                    ) : (
                      <Button variant="outline" onClick={() => setIsEditing(true)}>
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <Tabs defaultValue="personal">
                    <TabsList className="w-full">
                      <TabsTrigger value="personal" className="flex-1">
                        <User className="h-4 w-4 mr-2" />
                        Personal
                      </TabsTrigger>
                      <TabsTrigger value="notifications" className="flex-1">
                        <Bell className="h-4 w-4 mr-2" />
                        Notifications
                      </TabsTrigger>
                      <TabsTrigger value="security" className="flex-1">
                        <Shield className="h-4 w-4 mr-2" />
                        Security
                      </TabsTrigger>
                      <TabsTrigger value="billing" className="flex-1">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Billing
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="personal" className="pt-4">
                      <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={profileData.name}
                              onChange={handleInputChange}
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted/50" : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                              id="email"
                              name="email"
                              value={profileData.email}
                              onChange={handleInputChange}
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted/50" : ""}
                            />
                          </div>
                        </div>
                        
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={profileData.phone}
                              onChange={handleInputChange}
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted/50" : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input
                              id="company"
                              name="company"
                              value={profileData.company}
                              onChange={handleInputChange}
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted/50" : ""}
                            />
                          </div>
                        </div>
                        
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="role">Job Title</Label>
                            <Input
                              id="role"
                              name="role"
                              value={profileData.role}
                              onChange={handleInputChange}
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted/50" : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                              id="location"
                              name="location"
                              value={profileData.location}
                              onChange={handleInputChange}
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted/50" : ""}
                            />
                          </div>
                        </div>
                        
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="timeZone">Time Zone</Label>
                            <Input
                              id="timeZone"
                              name="timeZone"
                              value={profileData.timeZone}
                              onChange={handleInputChange}
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted/50" : ""}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="language">Language</Label>
                            <Input
                              id="language"
                              name="language"
                              value={profileData.language}
                              onChange={handleInputChange}
                              readOnly={!isEditing}
                              className={!isEditing ? "bg-muted/50" : ""}
                            />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="notifications" className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-base font-medium mb-3">Notification Channels</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Mail className="h-4 w-4 text-muted-foreground mr-3" />
                                <div>
                                  <p className="text-sm">Email Notifications</p>
                                  <p className="text-xs text-muted-foreground">Receive updates via email</p>
                                </div>
                              </div>
                              <Switch 
                                checked={notifications.email} 
                                onCheckedChange={() => handleNotificationChange('email')} 
                              />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Bell className="h-4 w-4 text-muted-foreground mr-3" />
                                <div>
                                  <p className="text-sm">Push Notifications</p>
                                  <p className="text-xs text-muted-foreground">Receive push notifications</p>
                                </div>
                              </div>
                              <Switch 
                                checked={notifications.push} 
                                onCheckedChange={() => handleNotificationChange('push')} 
                              />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Phone className="h-4 w-4 text-muted-foreground mr-3" />
                                <div>
                                  <p className="text-sm">SMS Notifications</p>
                                  <p className="text-xs text-muted-foreground">Receive updates via SMS</p>
                                </div>
                              </div>
                              <Switch 
                                checked={notifications.sms} 
                                onCheckedChange={() => handleNotificationChange('sms')} 
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-base font-medium mb-3">Notification Types</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm">Shipment Updates</p>
                                <p className="text-xs text-muted-foreground">Status changes, delays, and delivery confirmations</p>
                              </div>
                              <Switch 
                                checked={notifications.shipmentUpdates} 
                                onCheckedChange={() => handleNotificationChange('shipmentUpdates')} 
                              />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm">Price Changes</p>
                                <p className="text-xs text-muted-foreground">Updates when shipping rates change</p>
                              </div>
                              <Switch 
                                checked={notifications.priceChanges} 
                                onCheckedChange={() => handleNotificationChange('priceChanges')} 
                              />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm">Marketing Updates</p>
                                <p className="text-xs text-muted-foreground">New features, services, and promotions</p>
                              </div>
                              <Switch 
                                checked={notifications.marketingUpdates} 
                                onCheckedChange={() => handleNotificationChange('marketingUpdates')} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="security" className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-base font-medium mb-3">Password</h3>
                          <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input id="current-password" type="password" placeholder="••••••••" />
                              </div>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input id="new-password" type="password" placeholder="••••••••" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <Input id="confirm-password" type="password" placeholder="••••••••" />
                              </div>
                            </div>
                            <Button className="nexus-button-primary">
                              <Lock className="h-4 w-4 mr-2" />
                              Update Password
                            </Button>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-base font-medium mb-3">Two-Factor Authentication</h3>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm">Enable Two-Factor Authentication</p>
                              <p className="text-xs text-muted-foreground">Add an extra layer of security to your account</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-base font-medium mb-3">Session Management</h3>
                          <div className="space-y-4">
                            <Card className="bg-card/50">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <div className="mr-3 rounded-full bg-green-500/20 p-2">
                                      <Globe className="h-4 w-4 text-green-400" />
                                    </div>
                                    <div>
                                      <p className="text-sm">Current Session</p>
                                      <p className="text-xs text-muted-foreground">New York, USA • Chrome on Windows</p>
                                    </div>
                                  </div>
                                  <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">Active</Badge>
                                </div>
                              </CardContent>
                            </Card>
                            <Button variant="outline" className="w-full justify-between">
                              Log Out of All Devices
                              <Lock className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="billing" className="pt-4">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-base font-medium mb-3">Plan</h3>
                          <Card className="bg-nexus-blue/10 border-nexus-blue/30">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-lg font-medium text-white">Premium Plan</p>
                                  <p className="text-sm text-muted-foreground">$99/month, billed annually</p>
                                  <p className="mt-2 text-xs text-muted-foreground">Renews on January 15, 2024</p>
                                </div>
                                <Button variant="outline" className="bg-nexus-blue/20 border-nexus-blue/40 text-white hover:bg-nexus-blue/30">
                                  Manage Plan
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-base font-medium mb-3">Payment Method</h3>
                          <Card className="bg-card/50">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <div className="mr-3 rounded-full bg-white/10 p-2">
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                  </div>
                                  <div>
                                    <p className="text-sm">Visa ending in 4242</p>
                                    <p className="text-xs text-muted-foreground">Expires 12/24</p>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm">Edit</Button>
                              </div>
                            </CardContent>
                          </Card>
                          <div className="mt-4">
                            <Button variant="outline" className="w-full">
                              <CreditCard className="h-4 w-4 mr-2" />
                              Add Payment Method
                            </Button>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div>
                          <h3 className="text-base font-medium mb-3">Billing History</h3>
                          <div className="space-y-2">
                            {[
                              { date: "Jan 1, 2023", amount: "$99.00", status: "Paid" },
                              { date: "Dec 1, 2022", amount: "$99.00", status: "Paid" },
                              { date: "Nov 1, 2022", amount: "$99.00", status: "Paid" }
                            ].map((invoice, i) => (
                              <div key={i} className="flex items-center justify-between py-2">
                                <div>
                                  <p className="text-sm">{invoice.date}</p>
                                  <p className="text-xs text-muted-foreground">Invoice #{1245 + i}</p>
                                </div>
                                <div className="flex items-center">
                                  <p className="text-sm mr-4">{invoice.amount}</p>
                                  <Badge variant="outline" className="bg-green-500/10 text-green-400">
                                    {invoice.status}
                                  </Badge>
                                  <Button variant="ghost" size="sm" className="ml-2">
                                    <FileText className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
