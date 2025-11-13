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
} from "~/components/ui/dropdown-menu";

type NavItem = {
    label: string
    icon: React.ReactNode
    badge?: number
}

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

    const handleNavigation = (label: string) => {
        setActiveSection(label)
        setSidebarOpen(false)
    }

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200">
                {/* Logo */}
                <div className="h-16 flex items-center px-6 border-b border-gray-200">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="bg-primary rounded-lg p-2">
                            <svg
                                className="h-6 w-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-gray-900">E Shop</span>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                    {navigationItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleNavigation(item.label)}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                                activeSection === item.label
                                    ? "bg-primary text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                                <span className="font-medium">{item.label}</span>
                            </div>
                            {item.badge && (
                                <Badge
                                    variant={activeSection === item.label ? "secondary" : "default"}
                                    className="ml-auto"
                                >
                                    {item.badge}
                                </Badge>
                            )}
                        </button>
                    ))}

                    {/* Logout Button */}
                    <div className="p-4 border-t border-gray-200">
                        <Button
                            variant="ghost"
                            className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                            <LogOut className="h-5 w-5" />
                            Logout
                        </Button>
                    </div>
            </aside>

            {/* Sidebar - Mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Overlay */}
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setSidebarOpen(false)}
                    />

                    {/* Sidebar */}
                    <aside className="absolute left-0 top-0 bottom-0 w-64 bg-white">
                        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-200">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="bg-primary rounded-lg p-2">
                                    <svg
                                        className="h-6 w-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                </div>
                                <span className="text-xl font-bold text-gray-900">E Shop</span>
                            </Link>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setSidebarOpen(false)}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>

        </div>
    );
};

export default Page;