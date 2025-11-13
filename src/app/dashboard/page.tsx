"use client"

import { useState } from "react";
import Link from "next/link"
import {
    LayoutDashboard, ShoppingCart,
    CreditCard, Package, Heart, User, Settings,
    LogOut, Menu, X, Bell, Search
} from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

const Page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("Dashboard")

    const navigationItems: NavItem[] = [
        {
            label: "Dashboard",
            icon: <LayoutDashboard className="h-5 w-5" />,
        },
        {
            label: "My Cart",
            icon: <ShoppingCart className="h-5 w-5" />,
            badge: 3,
        },
        {
            label: "Orders",
            icon: <Package className="h-5 w-5" />,
        },
        {
            label: "Payments",
            icon: <CreditCard className="h-5 w-5" />,
        },
        {
            label: "Wishlist",
            icon: <Heart className="h-5 w-5" />,
            badge: 5,
        },
        {
            label: "Profile",
            icon: <User className="h-5 w-5" />,
        },
        {
            label: "Settings",
            icon: <Settings className="h-5 w-5" />,
        },
    ]


    return (
        <div>

        </div>
    );
};

export default Page;