import React from 'react';

const Page = () => {

    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: "1",
            name: "Wireless Headphones",
            price: 79.99,
            quantity: 1,
            image: "https://ibb.co.com/SXf82mjT",
            color: "Black"
        },
        {
            id: "2",
            name: "Smart Watch",
            price: 299.99,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
            size: "42mm"
        },
        {
            id: "3",
            name: "Leather Backpack",
            price: 89.99,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
            color: "Brown"
        }
    ])

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        )
    }

    const removeItem = (id: string) => {
        setCartItems(items => items.filter(item => item.id !== id))
    }

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = 10
    const tax = subtotal * 0.1
    const total = subtotal + shipping + tax

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
                <p className="text-gray-600 mt-2">{cartItems.length} items in your cart</p>
            </div>

            {cartItems.length === 0 ? (
                <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                    <ShoppingCartIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-600 mb-6">Add some products to get started!</p>
                    <Link href="/">
                        <Button>Continue Shopping</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-6">
                                <div className="flex gap-4">
                                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                                        {item.color && (
                                            <p className="text-sm text-gray-600">Color: {item.color}</p>
                                        )}
                                        {item.size && (
                                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                                        )}
                                        <p className="text-lg font-bold text-primary mt-2">
                                            ${item.price.toFixed(2)}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-end gap-4">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => removeItem(item.id)}
                                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>

                                        <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="h-8 w-8"
                                            >
                                                <Minus className="h-3 w-3" />
                                            </Button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="h-8 w-8"
                                            >
                                                <Plus className="h-3 w-3" />
                                            </Button>
            
        </div>
    );
};

export default Page;