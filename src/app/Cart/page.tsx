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
        // {
        //     id: "2",
        //     name: "Smart Watch",
        //     price: 299.99,
        //     quantity: 1,
        //     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
        //     size: "42mm"
        // },
        // {
        //     id: "3",
        //     name: "Leather Backpack",
        //     price: 89.99,
        //     quantity: 2,
        //     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",
        //     color: "Brown"
        // }
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
        <div>
            
        </div>
    );
};

export default Page;