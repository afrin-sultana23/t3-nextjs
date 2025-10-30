

// Example usage component
import ProductCard from "~/components/products/productCard";

const ProductGrid = () => {

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

    const sampleProducts: Product[] = [
        {
            id: "1",
            name: "Wireless Bluetooth Headphones",
            description: "High-quality sound with noise cancellation and 30-hour battery life",
            price: 79.99,
            originalPrice: 129.99,
            image: "https://ibb.co.com/4g724kqb",
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
            image: "https://ibb.co.com/4g724kqb",
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
            image: "https://ibb.co.com/4g724kqb",
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
            image: "https://ibb.co.com/4g724kqb",
            category: "Cameras",
            rating: 4.6,
            reviewCount: 432,
            inStock: true
        },
        {
            id: "5",
            name: "Fuji Camera",
            description: "Waterproof action camera with 4K video and image stabilization",
            price: 199.99,
            image: "https://ibb.co.com/4g724kqb",
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
        <div className="container mx-auto px-4 py-5">
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