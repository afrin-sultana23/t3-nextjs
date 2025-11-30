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
    return (
        <div>
            <h1>all products page</h1>

        </div>
    );
};

export default Page;