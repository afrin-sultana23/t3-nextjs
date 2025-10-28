"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart, Eye, Star } from "lucide-react"
import { Button } from "~/components/ui/button"
//import { Badge } from "~/components/ui/badge"
import {
    Card,
    CardContent,
    CardFooter,
} from "~/components/ui/card"

// Product type definition
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

type ProductCardProps = {
    product: Product
    onAddToCart?: (product: Product) => void
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
    const [isWishlisted, setIsWishlisted] = useState(false)
    const [isAdding, setIsAdding] = useState(false)

    const handleAddToCart = async () => {
        setIsAdding(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500))

        if (onAddToCart) {
            onAddToCart(product)
        }

        console.log("Added to cart:", product)
        setIsAdding(false)
    }

    const handleToggleWishlist = () => {
        setIsWishlisted(!isWishlisted)
        console.log(isWishlisted ? "Removed from wishlist" : "Added to wishlist", product)
    }

    const discountPercentage = product.discount ||
        (product.originalPrice
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            : 0)

    return (
        <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
            {/* Badges */}
            <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
                {discountPercentage > 0 && (
                    <Badge className="bg-red-500 hover:bg-red-600">
                        -{discountPercentage}%
                    </Badge>
                )}
                {!product.inStock && (
                    <Badge variant="secondary" className="bg-gray-500">
                        Out of Stock
                    </Badge>
                )}
            </div>

            {/* Wishlist Button */}
            <button
                onClick={handleToggleWishlist}
                className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md transition-all hover:scale-110"
            >
                <Heart
                    className={`h-5 w-5 ${
                        isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                    }`}
                />
            </button>

            {/* Product Image */}
            <Link href={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-110"
                    />

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                        <Button variant="secondary" size="sm" className="gap-2">
                            <Eye className="h-4 w-4" />
                            Quick View
                        </Button>
                    </div>
                </div>
            </Link>

            <CardContent className="p-4">
                {/* Category */}
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    {product.category}
                </p>

                {/* Product Name */}
                <Link href={`/product/${product.id}`}>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                        {product.name}
                    </h3>
                </Link>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`h-4 w-4 ${
                                    i < Math.floor(product.rating)
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                }`}
                            />
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
                    {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
                    )}
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock || isAdding}
                    className="w-full gap-2"
                >
                    <ShoppingCart className="h-4 w-4" />
                    {isAdding ? "Adding..." : product.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>
            </CardFooter>
        </Card>
    )
}

// Example usage component
const ProductGrid = () => {
    const sampleProducts: Product[] = [
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
            category: "Cameras",
            rating: 4.6,
            reviewCount: 432,
            inStock: true
        }
    ]

    const handleAddToCart = (product: Product) => {
        // TODO: Add to cart logic (update cart state, API call, etc.)
        alert(`Added "${product.name}" to cart!`)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sampleProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductGrid