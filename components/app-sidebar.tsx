"use client"
 
import * as React from "react"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: "/Icons/Home.svg",
      isActive: true,
      items: [
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Calender",
          url: "#",
        },
      ],
    },
    {
      title: "Manage",
      url: "#",
      icon: '/Icons/Manage.svg',
      items: [
        {
          title: "Clients",
          url: "manage/clients",
        },
        {
          title: "Classes",
          url: "#",
        },
        {
          title: "Store",
          url: "#",
        },
        {
          title: "Facilites",
          url: "#",
        },
        {
          title: "Trainers",
          url: "#",
        },
        {
          title: "Memberships",
          url: "#",
        },
      ],
    },
    {
      title: "Automation",
      url: "#",
      icon: '/Icons/Automation.svg',
      items: [
        {
          title: "Messages",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: '/Icons/Reports.svg',
      items: [
        {
          title: "Transactions",
          url: "#",
        },
        {
          title: "Financials",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
      <div className="flex items-center justify-center h-12 pt-12 pb-8 w-full" > 
        <Image src={'/RiseLogo.svg'} alt={"Rise Logo"} width={100} height={100} /> 
      </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
