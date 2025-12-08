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
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
            category: "Accessories",
            rating: 4.3,
            reviewCount: 89,
            inStock: false
        },
        {
            id: "4",
            name: "4K Action Camera",
            description: "Waterproof action camera with 4K video and image stabilization",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",
            category: "Electronics",
            rating: 4.6,
            reviewCount: 432,
            inStock: true
        },
        {
            id: "5",
            name: "Wireless Gaming Mouse",
            description: "RGB gaming mouse with customizable buttons and 16000 DPI",
            price: 49.99,
            originalPrice: 79.99,
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
            category: "Electronics",
            rating: 4.7,
            reviewCount: 312,
            inStock: true,
            discount: 37
        },
        {
            id: "6",
            name: "Minimalist Wallet",
            description: "Slim leather wallet with RFID protection",
            price: 29.99,
            image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
            category: "Accessories",
            rating: 4.4,
            reviewCount: 156,
            inStock: true
        },
        {
            id: "7",
            name: "Wireless Earbuds Pro",
            description: "True wireless earbuds with active noise cancellation",
            price: 159.99,
            originalPrice: 199.99,
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
            category: "Electronics",
            rating: 4.9,
            reviewCount: 892,
            inStock: true,
            discount: 20
        },
        {
            id: "8",
            name: "Fitness Tracker Band",
            description: "Water-resistant fitness tracker with heart rate monitor",
            price: 69.99,
            image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop",
            category: "Wearables",
            rating: 4.2,
            reviewCount: 234,
            inStock: true
        }
    ]

    const categories = ["Electronics", "Wearables", "Accessories"]

    // Filter and sort products
    const filteredProducts = allProducts.filter((product) => {
        // Search filter
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())

        // Category filter
        const matchesCategory = selectedCategories.length === 0 ||
            selectedCategories.includes(product.category)

        // Price filter
        let matchesPrice = true
        if (priceRange === "under50") matchesPrice = product.price < 50
        if (priceRange === "50to100") matchesPrice = product.price >= 50 && product.price <= 100
        if (priceRange === "100to200") matchesPrice = product.price > 100 && product.price <= 200
        if (priceRange === "over200") matchesPrice = product.price > 200

        return matchesSearch && matchesCategory && matchesPrice
    }).sort((a, b) => {
        if (sortBy === "priceLow") return a.price - b.price
        if (sortBy === "priceHigh") return b.price - a.price
        if (sortBy === "rating") return b.rating - a.rating
        if (sortBy === "newest") return b.id.localeCompare(a.id)
        return 0 // featured (default order)
    })

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    const toggleWishlist = (productId: string) => {
        setWishlistedItems(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        )
    }

    const handleAddToCart = (product: Product) => {
        console.log("Added to cart:", product)
        alert(`Added "${product.name}" to cart!!`)
    }

    // Filter Sidebar Component
    const FilterSidebar = () => (
        <div className="space-y-6">
            <div>
                <h3 className="font-semibold text-lg mb-3">Categories</h3>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                                id={category}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() => handleCategoryChange(category)}
                            />
                            <Label htmlFor={category} className="cursor-pointer">
                                {category}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="font-semibold text-lg mb-3">Price Range</h3>
                <RadioGroup value={priceRange} onValueChange={setPriceRange}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all" />
                        <Label htmlFor="all" className="cursor-pointer">All Prices</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="under50" id="under50" />
                        <Label htmlFor="under50" className="cursor-pointer">Under $50</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="50to100" id="50to100" />
                        <Label htmlFor="50to100" className="cursor-pointer">$50 - $100</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="100to200" id="100to200" />
                        <Label htmlFor="100to200" className="cursor-pointer">$100 - $200</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="over200" id="over200" />
                        <Label htmlFor="over200" className="cursor-pointer">Over $200</Label>
                    </div>
                </RadioGroup>
            </div>

        return (
        <div>
            <h1>all products page</h1>

        </div>
    );
};

export default Page;