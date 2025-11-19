import React from 'react';

const Page = () => {

    const removeItem = (id: string) => {
        setCartItems(items => items.filter(item => item.id !== id))
    }

    const updateQuantity = (id: string, delta: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        )
    }

    return (
        <div>
            
        </div>
    );
};

export default Page;