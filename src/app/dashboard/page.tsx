"use client"

import { useState } from "react";
import Link from "next/link"
import {  LayoutDashboard, ShoppingCart, CreditCard, Package, Heart, User, Settings,
    LogOut, Menu, X, Bell, Search
} from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Badge } from "~/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    ShoppingCart,
    CreditCard,
    Package,
    Heart,
    User,
    Settings,
    LogOut,
    Menu,
    X,
    Bell,
    Search
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

type NavItem = {
    label: string
    href: string
    icon: React.ReactNode
    badge?: number
}

const Page = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("Dashboard")
    const pathname = usePathname()

    const navigationItems: NavItem[] = [
        {
            label: "Dashboard",
            href: "/dashboard",
            icon: <LayoutDashboard className="h-5 w-5" />,
        },
        {
            label: "My Cart",
            href: "/dashboard/cart",
            icon: <ShoppingCart className="h-5 w-5" />,
            badge: 3,
        },
        {
            label: "Orders",
            href: "/dashboard/orders",
            icon: <Package className="h-5 w-5" />,
        },
        {
            label: "Wishlist",
            href: "/dashboard/wishlist",
            icon: <Heart className="h-5 w-5" />,
            badge: 5,
        },
        {
            label: "Profile",
            href: "/dashboard/profile",
            icon: <User className="h-5 w-5" />,
        },
        {
            label: "Settings",
            href: "/dashboard/settings",
            icon: <Settings className="h-5 w-5" />,
        },
    ]

    const isActive = (href: string) => pathname === href

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
                            <LogOut className="h-5 w-5"/>
                            Logout
                        </Button>
                    </div>
                </nav>
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
                                <X className="h-5 w-5"/>
                            </Button>
                        </div>

                        <nav className="px-4 py-6 space-y-2">
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
                                        >
                                            {item.badge}
                                        </Badge>
                                    )}
                                </button>
                            ))}
                        </nav>

                        {/* Logout Button */}
                        <div className="p-4 border-t border-gray-200">
                            <Button
                                variant="ghost"
                                className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                                <LogOut className="h-5 w-5"/>
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
                                        <X className="h-5 w-5"/>
                                    </Button>
                                </div>

                                <nav className="px-4 py-6 space-y-2">
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
                                                >
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </button>
                                    ))}
                                </nav>

                                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50"
                                    >
                                        <LogOut className="h-5 w-5"/>
                                        Logout
                                    </Button>
                                </div>
                            </aside>
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Top Header */}
                        <header
                            className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
                            {/* Left - Mobile Menu & Search */}
                            <div className="flex items-center gap-4 flex-1">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="lg:hidden"
                                    onClick={() => setSidebarOpen(true)}
                                >
                                    <Menu className="h-6 w-6"/>
                                </Button>

                                <div className="hidden md:flex items-center flex-1 max-w-md">
                                    <div className="relative w-full">
                                        <Search
                                            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"/>
                                        <Input
                                            placeholder="Search products..."
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right - Notifications & Profile */}
                            <div className="flex items-center gap-4">
                                {/* Notifications */}
                                <Button variant="ghost" size="icon" className="relative">
                                    <Bell className="h-5 w-5"/>
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"/>
                                </Button>

                                {/* User Menu */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" alt="User"/>
                                                <AvatarFallback>JD</AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56" align="end">
                                        <DropdownMenuLabel>
                                            <div className="flex flex-col space-y-1">
                                                <p className="text-sm font-medium">John Doe</p>
                                                <p className="text-xs text-muted-foreground">john@example.com</p>
                                            </div>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem>
                                            <User className="mr-2 h-4 w-4"/>
                                            Profile
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Settings className="mr-2 h-4 w-4"/>
                                            Settings
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem className="text-red-600">
                                            <LogOut className="mr-2 h-4 w-4"/>
                                            Logout
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </header>

                        {/* Main Content Area */}
                        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
                            <div className="max-w-7xl mx-auto">
                                <div className="mb-8">
                                    <h1 className="text-3xl font-bold text-gray-900">{activeSection}</h1>
                                    <p className="text-gray-600 mt-2">
                                        You are viewing the {activeSection.toLowerCase()} section
                                    </p>
                                </div>


                                {/* Placeholder content area */}
                                <div
                                    className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                                    <p className="text-gray-500 text-lg">
                                        Content for <span className="font-semibold">{activeSection}</span> will be
                                        displayed here
                                    </p>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            )
            }
        </div>
    )
}
export default Page;