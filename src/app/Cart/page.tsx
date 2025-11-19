import React from 'react';

const Page = () => {


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