// app/page.tsx or any other component file
"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function TabsDemo() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Account Settings</h3>
            <p className="text-sm text-slate-500">
              Manage your account settings and preferences here.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Password Settings</h3>
            <p className="text-sm text-slate-500">
              Change your password and security settings.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">General Settings</h3>
            <p className="text-sm text-slate-500">
              Configure your general application settings.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}