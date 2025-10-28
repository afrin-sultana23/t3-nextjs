import React from 'react';
import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "~/components/ui/card";


const Item = () => {

    const items = [
        {
        'id' : 1,
        'name' : "Beef",
        },
        {
            'id' : 2,
            'name' : "Chicken",
        },
        {
            'id' : 3,
            'name' : "meat",
        },
    ]
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
    );
};

export default Item;