"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart, Star, Filter, Grid, List, Search, ChevronDown } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Badge } from "~/components/ui/badge"
import { Card, CardContent, CardFooter } from "~/components/ui/card"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Checkbox } from "~/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"

type Product = {
    id: string
    name: string
    description: string
    price: number
    originalPrice?: number
    image: string
    category: string
    rating: number
    reviewCount: number
    inStock: boolean
    discount?: number
}

const Page = () => {

    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [priceRange, setPriceRange] = useState<string>("all")
    const [sortBy, setSortBy] = useState<string>("featured")
    const [wishlistedItems, setWishlistedItems] = useState<string[]>([])

    // Sample products data
    const allProducts: Product[] = [
        {
            id: "1",
            name: "Wireless Bluetooth Headphones",
            description: "High-quality sound with noise cancellation and 30-hour battery life",
            price: 79.99,
            originalPrice: 129.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            category: "Electronics",
            rating: 4.5,
            reviewCount: 234,
            inStock: true,
            discount: 38
        },
        {
            id: "2",
            name: "Smart Watch Series 5",
            description: "Track your fitness, heart rate, and stay connected on the go",
            price: 299.99,
            originalPrice: 399.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
            category: "Wearables",
            rating: 4.8,
            reviewCount: 567,
            inStock: true,
            discount: 25
        },
        {
            id: "3",
            name: "Premium Leather Backpack",
            description: "Durable leather backpack with laptop compartment and USB charging port",
            price: 89.99,
    ]

    return (
        <div>
            <h1>all products page</h1>

        </div>
    );
};

export default Page;